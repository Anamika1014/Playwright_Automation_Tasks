import { test } from '@playwright/test';

test('upload file', async ({ page }) => {
  await page.goto('https://uploadnow.io/');

  await page.locator('input[type="file"]').setInputFiles([
    'C:/Users/yangy/Downloads/MOHAN.pdf',
    'C:/Users/yangy/OneDrive/Desktop/AnamikaResume.pdf',
  ]);

  await page.getByRole('button', { name: 'Validate and upload' }).click();


});

    