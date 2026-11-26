import {test} from '@playwright/test'

test("frame handling", async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame = page.frameLocator('iframe[class=" lazyloaded"]');
    await frame.locator('//h3[text()="HP LoadRunner Training"]').click();
    // await frame.getByRole('link',{name:'Tooltip'}).click();

})

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
test("nested frame handling", async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");

    const mframe1 = page.frameLocator('#frm1');
    await mframe1.locator("#course").selectOption({value:"java"});

    const mframe2 = page.frameLocator('#frm2');
    await mframe2.locator("#firstName").fill("Anamika");
    await mframe2.locator('#lastName').fill("Raajalingam");
    await mframe2.locator('#femalerb').check();
    await mframe2.locator('#englishchbx').check();
    await mframe2.locator('#hindichbx').check();
    await mframe2.locator('#spanishchbx').check();
    await mframe2.locator('#email').fill('anamikaraajalingam@gmail.com');
    await mframe2.locator('#password').fill("Ana@1014");
    await mframe2.locator('#registerbtn').click();

    const mframe3 = page.frameLocator('#frm3');
    const mframe3_1 = mframe3.frameLocator('#frm1');
    const mframe3_2 = mframe3.frameLocator('#frm2');
    
    await mframe3_1.locator("#course").selectOption({value:"java"});

    await mframe3_2.locator("#firstName").fill("Anamika");
    await mframe3_2.locator('#lastName').fill("Raajalingam");
    await mframe3_2.locator('#femalerb').check();
    await mframe3_2.locator('#englishchbx').check();
    await mframe3_2.locator('#hindichbx').check();
    await mframe3_2.locator('#spanishchbx').check();
    await mframe3_2.locator('#email').fill('anamikarajalingam@gmail.com'); 
    await mframe3_2.locator('#password').fill("Ana@1014");
    // await mframe3_2.locator('#password').fill("Ana@1015"); 
    
})