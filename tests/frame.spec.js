import {test} from '@playwright/test'

// test("frame handling", async({page})=>{

//     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
//     const frame = page.frameLocator('iframe[class=" lazyloaded"]');
//     await frame.locator('//h3[text()="HP LoadRunner Training"]').click();
//     // await frame.getByRole('link',{name:'Tooltip'}).click();

// })

test("frame handling 2", async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frame1= page.frameLocator('#iframe-1');
    await frame1.locator("//a[text()='MCP']").click();
    await frame1.locator("//span[text()='Installation']").click();
})

test("frame handling 3", async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frame2= page.frameLocator('#iframe-2');
    await frame2.locator("//span[text()='Documentation']").click();
    await frame2.locator("(//span[text()='WebDriver'])[1]").click();
})

test("frame handling 4", async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame = page.frameLocator('iframe[class=" lazyloaded"]');
    await frame.locator('//h3[text()="JMeter Training"]').click();
    await frame.locator('#mobile_menu_toggler').click();
    await frame.getByRole('link',{name:'About'}).click();
    await frame.getByRole('link',{name:'Load More'}).click();
    await page.locator('//span[text()="Sortable"]').click();

})