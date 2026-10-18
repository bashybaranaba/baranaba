import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir:'./tests', fullyParallel:true, workers:3,
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4322',channel:'chrome',screenshot:'only-on-failure',trace:'retain-on-failure'},
  projects:[{name:'desktop',use:{viewport:{width:1440,height:1000}}},{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium',channel:'chrome'}}],
});
