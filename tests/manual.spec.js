import {test, chromium} from '@playwright/test'

test("Launch browser", async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1=await context.newPage();
    const page2 = await context.newPage();

    const context1 = await browser.newContext();
    const page3 = await context1.newPage();
    const page4 = await context1.newPage();
    const page5 = await context1.newPage();

    await page1.url('https://www.amazon.in/');
    await page2.url('https://www.facebook.com/');
    await page3.url('https://in.linkedin.com/');
    await page4.url('https://www.instagram.com/');
    await page5.url('https://www.google.com/')




})