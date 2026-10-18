import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const dir = new URL('../public/images/',import.meta.url);
await mkdir('/tmp/baranaba-research/screens',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1040},deviceScaleFactor:1,colorScheme:'light'});
const jobs=[['agent-commons','https://www.agentcommons.io'],['provenancekit','https://www.provenancekit.com'],['common-arcade','https://arcade.agentcommons.io'],['abraham','https://abraham.ai'],['commonlab','https://commonlab.agentcommons.io'],['arttribute','https://www.arttribute.io']];
for(const [name,url] of jobs){
 const page=await context.newPage();
 try{
  await page.goto(url,{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForTimeout(4500);
  await page.evaluate(()=>document.fonts.ready);
  if(name==='abraham') await page.waitForTimeout(6000);
  await writeFile('/tmp/baranaba-research/'+name+'-rendered.txt',await page.locator('body').innerText());
  const image=await page.screenshot({path:'/tmp/baranaba-research/screens/'+name+'.png'});
  await sharp(image).resize(1440).webp({quality:85}).toFile(fileURLToPath(new URL(name+'.webp',dir)));
  console.log(name,await page.title(),(await page.locator('body').innerText()).slice(0,300));
  if(name==='abraham'){
    const images=await page.locator('img').evaluateAll(imgs=>imgs.map(i=>({src:i.src,alt:i.alt,width:i.naturalWidth,height:i.naturalHeight})));console.log('ABRAHAM_IMAGES',JSON.stringify(images).slice(0,7000));
  }
 }catch(error){console.log(name,error.message)}
 await page.close();
}
await browser.close();
