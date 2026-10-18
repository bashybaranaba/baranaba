import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {writeFile} from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage();const results=[];
for(const path of ['/','/work/abraham/']){
 await page.goto('http://127.0.0.1:4322'+path);await page.waitForTimeout(1000);
 const r=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
 const violations=r.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
 results.push({path,violations});console.log(path,JSON.stringify(violations));
}
await writeFile('/tmp/baranaba-research/accessibility.json',JSON.stringify(results,null,2));
await browser.close();
