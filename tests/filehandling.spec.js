import { test, expect } from '@playwright/test';

test('upload file', async ({ page }) => {
  await page.goto('https://uploadnow.io/');
  await page.locator('input[type="file"]').setInputFiles([
    'C:/Users/yangy/Downloads/MOHAN.pdf',
    'C:/Users/yangy/OneDrive/Desktop/AnamikaResume.pdf',
  ]);
  await page.getByRole('button', { name: 'Validate and upload' }).click();

//waitFor () Locator method wait for the located element to reach a specified state.

  await page.getByRole('heading', { name: 'All done!' }).waitFor({ 
    state: 'visible'  //Defines the condition to wait for. The heading must be visible.
  });

  //toBeVisible() Assertion method Asserts a locator state
  // await expect(page.getByRole('heading', { name: 'All done!' })).toBeVisible(); 

})

test('download file', async ({ page }) => {

  await page.goto("https://demoqa.com/upload-download")
  const[download_file]=await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download' }).click()
  ]);

  await download_file.saveAs('./downloads/' + await download_file.suggestedFilename());
})


// test('uploadDownload', async ({page})=>{
//   await page.goto("https://www.ilovepdf.com/word_to_pdf");

//   await page.locator('input[type="file"]').setInputFiles('C:/Users/yangy/OneDrive/Desktop/Resume/Anamika_Profile_2024.docx');

//   await page.getByRole('button', { name: 'Convert to PDF' }).click();

//   const downloadButton = page.getByRole('button', { name: 'Download PDF' });
//   await expect(downloadButton).toBeVisible();
  
//   const[download_file]=await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'Download PDF' }).click()
//   ]);
//   await download_file.saveAs('./downloads/' + await download_file.suggestedFilename());

// })

    