import {test} from '@playwright/test'
test('Lunch',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    const title = await page.title();
    console.log(title);
    console.log(await page.url());

    
    await page.goto("https://www.instagra.com")
    const titleInsta = await page.title();
    console.log(titleInsta);
    console.log(await page.url());

    await page.goBack();
    console.log(await page.url());    
})

test('Amazon',async({page})=>{
    await page.goto("https://www.amazon.in");
    console.log(await page.url());

    await page.goto("https://www.makemytrip.com")
    const makemytripTitle = await page.title();
    console.log(makemytripTitle);

    await page.goto("https://www.facebook.com");
    await page.goBack();
    await page.goBack();

})