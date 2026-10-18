import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const slugs=['agent-commons','provenancekit','common-arcade','abraham','commonlab','arttribute'];

test('all stories render with local assets, working navigation, and no horizontal overflow',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const path of ['/',...slugs.map(s=>`/work/${s}/`)]){
  const response=await page.goto(path,{waitUntil:'networkidle'});
  expect(response?.status(),path).toBe(200);
  await expect(page.locator('h1')).toHaveCount(1);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),path).toBeTruthy();
  const images=page.locator('img');
  for(let i=0;i<await images.count();i++){
   const img=images.nth(i);if(!await img.getAttribute('src'))continue;
   await img.scrollIntoViewIfNeeded();await expect(img).toHaveJSProperty('complete',true);
   await expect(img).not.toHaveJSProperty('naturalWidth',0);
  }
 }
 expect(errors).toEqual([]);
});

test('hero artwork, gallery, and mobile menu are usable',async({page},testInfo)=>{
 await page.goto('/');await expect(page.locator('.hero-artwork img')).toBeVisible();
 await expect(page.locator('.hero-artwork img')).not.toHaveJSProperty('naturalWidth',0);
 if(testInfo.project.name==='mobile'){
  const menu=page.locator('.menu-toggle');await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded','true');
  await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:/Research/}).click();
  await expect(page).toHaveURL(/#research$/);await expect(menu).toHaveAttribute('aria-expanded','false');
 }
 await page.getByRole('button',{name:'Enlarge the Moringa School workshop photograph'}).click();
 await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');
 await expect(page.getByRole('dialog')).not.toBeVisible();
 const story=page.locator('h3 a',{hasText:'ProvenanceKit'});await story.click();
 await expect(page).toHaveURL(/work\/provenancekit\/$/);
});

test('home and a project meet core accessibility rules',async({page})=>{
 for(const path of ['/','/work/abraham/']){
  await page.goto(path);await page.waitForTimeout(1000);const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
  expect(results.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))).toEqual([]);
 }
});

test('reduced motion and no-JavaScript visitors keep a complete readable site',async({browser,baseURL})=>{
 const context=await browser.newContext({reducedMotion:'reduce'});const page=await context.newPage();
 await page.goto(baseURL+'/');await expect(page.locator('.hero-artwork img')).toBeVisible();
 await page.locator('.hero-artwork').hover();await expect(page.locator('.artwork-image')).toHaveCSS('transform','none');
 await context.close();
 const noJS=await browser.newContext({javaScriptEnabled:false});const fallback=await noJS.newPage();await fallback.goto(baseURL+'/');
 await expect(fallback.getByRole('heading',{name:/Curiosity,/})).toBeVisible();
 await expect(fallback.locator('.hero-artwork img')).toBeVisible();
 await expect(fallback.locator('.project-card')).toHaveCount(6);await noJS.close();
});

test('PDFs, sitemap, and social preview are available',async({request})=>{
 for(const path of ['/documents/Baranaba-Mugabane-CV.pdf','/documents/Baranaba-Mugabane-Masters-Thesis.pdf','/sitemap.xml','/images/social-card.jpg']){
  const response=await request.get(path);expect(response.ok(),path).toBeTruthy();
 }
 const xml=await (await request.get('/sitemap.xml')).text();for(const slug of slugs)expect(xml).toContain(`/work/${slug}/`);
});
