import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-app.webnyay.in/login');
  await page.getByRole('button', { name: 'Platform Webnyay' }).click();
  await page.getByRole('option', { name: 'ICA' }).click();
  await page.getByRole('button', { name: 'File A New Case +' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test01@gmail.com');
  await page.getByRole('button', { name: 'Platform', exact: true }).click();
  await page.getByRole('option', { name: 'Claimant', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#full_name').click();
  await page.locator('#full_name').fill('test01');
  await page.locator('#nationality').click();
  await page.locator('#nationality').fill('idea');
  await page.locator('#address').click();
  await page.locator('#address').fill('address');
  await page.locator('#city').click();
  await page.locator('#city').fill('street');
  await page.locator('#region').click();
  await page.locator('#region').fill('region');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('789901');
  await page.locator('div').filter({ hasText: /^---$/ }).first().click();
  await page.getByRole('option', { name: 'Belarus' }).click();
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('0909876543');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#email').fill('test02@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').fill('test02');
  await page.locator('#address').click();
  await page.locator('#address').fill('address1');
  await page.locator('#city').click();
  await page.locator('#city').fill('city1');
  await page.locator('#region').click();
  await page.locator('#region').fill('state');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('989908');
  await page.locator('div').filter({ hasText: /^---$/ }).first().click();
  await page.getByRole('option', { name: 'Andorra' }).click();
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('9098765670');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#email').fill('test02@ga');
  await page.locator('#email').click();
  await page.locator('#email').fill('test02@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').fill('test03');
  await page.locator('#nationality').click();
  await page.locator('#nationality').fill('nationality');
  await page.locator('#address').click();
  await page.locator('#address').fill('addresssdfgh');
  await page.locator('#city').click();
  await page.locator('#city').fill('cityyyyyyy');
  await page.locator('#region').click();
  await page.locator('#region').fill('statttteeeee');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('454457');
  await page.locator('div').filter({ hasText: /^---$/ }).first().click();
  await page.getByRole('option', { name: 'Costa Rica' }).click();
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('9087654370');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#email').fill('test05@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').fill('test05');
  await page.locator('#address').click();
  await page.locator('#address').fill('adresdfghnbvfdsw');
  await page.locator('#city').click();
  await page.locator('#city').fill('streettttttt');
  await page.locator('#region').click();
  await page.locator('#region').fill('stareeeeeeeeee');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('768801');
  
  await page.locator('div').filter({ hasText: /^---$/ }).first().click();
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('9015672901');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('radio').first().check();
  await page.getByRole('button', { name: 'delete' }).first().click();
  await page.getByText('Drag and drop a file here or').click();
  await page.locator('div').filter({ hasText: 'Drag and drop a file here or' }).nth(4).setInputFiles('Interview_Question_Module_(1)Selenium.pdf');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('button', { name: 'SAVE' }).first().click();
  await page.getByRole('button', { name: 'delete' }).click();
  await page.locator('div').filter({ hasText: 'Drag and drop a file here or' }).nth(4).click();
  await page.locator('div').filter({ hasText: 'Drag and drop a file here or' }).nth(4).setInputFiles('Module-2_Selenium.pdf');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('input[name="0.8919839507969182"]').check();
  await page.locator('input[name="0.9362581368624924"]').check();
  await page.locator('input[name="0.22549050540487303"]').check();
  await page.locator('#specific').click();
  await page.locator('#specific').fill('999999999');
  await page.locator('input[name="0.9168457222797559"]').check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#first').click();
  await page.locator('#first').fill('test');
  await page.locator('#second').click();
  await page.locator('#second').fill('java');
  await page.locator('#third').click();
  await page.locator('#third').fill('rxtcyvubiuytdresrdtfyguhijojihugytfdrsdtfyguhjikjihugyftdcfvgbhnjkmljhgvfcxsxdfcgvhjkjhgfd');
  await page.locator('#forth').click();
  await page.locator('#forth').fill('no');
  await page.locator('#fifth').click();
  await page.locator('#fifth').fill('890');
  await page.locator('#sixth').click();
  await page.locator('#sixth').fill('sedtrcvbiuuytreawr4t5y6ufjbkn');
  await page.locator('#seventh').click();
  await page.locator('#seventh').fill('67890');
  await page.locator('canvas').click({
    position: {
      x: 232,
      y: 88
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 351,
      y: 78
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 283,
      y: 105
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 355,
      y: 107
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 355,
      y: 87
    }
  });
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
});