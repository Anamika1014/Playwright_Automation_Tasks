import {test} from '@playwright/test'

test('Locator', async({page})=>{

    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
})

test('Demo', async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('[type="text"]').fill("Na.R.Anamika");
    await page.locator('#userEmail').fill('anamikaraajalingam@gmail.com');
    await page.locator('#currentAddress').fill('Porur');
    await page.locator('#permanentAddress').fill('Rameswaram');
    await page.locator('#submit').click();
})