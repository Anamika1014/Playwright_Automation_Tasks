import {test} from '@playwright/test';

test('Handling alerts', async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.on('dialog',async(Dialog)=>{
        console.log(Dialog.message());
        console.log(Dialog.type());

        // page.waitForTimeout(3000);

        if(Dialog.type()==='alert'){
            Dialog.accept();
        }
        else if(Dialog.type()==='confirm'){

            Dialog.dismiss();

        }
        else if(Dialog.type()==='prompt'){
            Dialog.accept('Anamika');
        }
    });

    await page.locator('//button[contains(text(),"alert box:")]').click();
    await page.getByRole('link',{name:'Alert with OK & Cancel '}).click();
    await page.locator('//button[contains(text(),"confirm box")]').click();
    
    await page.getByRole('link',{name:'Alert with Textbox '}).click();
    await page.locator('//button[contains(text(),"prompt box")]').click();

    await page.waitForTimeout(5000);

})

test('Handling alert in demoqa', async ({page})=>{

    await page.goto("https://demoqa.com/alerts");
    page.on('dialog',async(Dialog)=>{
        console.log(Dialog.message());
        console.log(Dialog.type());

        // page.waitForTimeout(3000);

        if(Dialog.type()==='alert'){
            Dialog.accept();
        }
        else if(Dialog.type()==='confirm'){

            Dialog.dismiss();

        }
        else if(Dialog.type()==='prompt'){
            Dialog.accept('Anamika');
        }
    });


})

test("Dom popup", async({page})=>{
    await page.goto("https://flipkart.com/");
    try{

        await page.waitForSelector(".b3wTlE",{timeout:5000});
        await page.click(".b3wTlE");
    }catch{

        console.log("No popup");

    }
})