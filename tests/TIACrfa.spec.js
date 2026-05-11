import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-app.webnyay.in/login');
  await page.getByRole('button', { name: 'Platform Webnyay' }).click();
  await page.getByRole('option', { name: 'TIAC', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('tiac_admin@webnyay.in');
  
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('main').getByRole('button', { name: 'Log In' }).click();
  
  await page.goto('https://dev-app.webnyay.in/rfa');

  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test@');
  await page.getByRole('textbox', { name: 'Email address' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Email address' }).fill('test10@');
  await page.getByRole('textbox', { name: 'Email address' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email address' }).fill('test10@gmail.com');
  await page.locator('.MuiBox-root.jss29 > .MuiFormControl-root').click();
  await page.getByText('Claimant\'s Counsel').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#full_name').click();
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('T');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Test 01');
  await page.locator('#address').click();
  await page.locator('#address').press('CapsLock');
  await page.locator('#address').fill('N');
  await page.locator('#address').press('CapsLock');
  await page.locator('#address').fill('Noida ');
  await page.locator('#address').press('CapsLock');
  await page.locator('#address').fill('Noida A');
  await page.locator('#address').press('CapsLock');
  await page.locator('#city').click();
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('N');
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('Noida ');
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('Noida B');
  await page.locator('#city').press('CapsLock');
  await page.locator('#region').click();
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('GOA');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('98893');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '---' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Belize' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('9890189092');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#email').fill('C');
  await page.locator('#email').press('CapsLock');
  await page.locator('#email').fill('Claimant999@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('C');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Claiment ');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Claiment S');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#nationality').click();
  await page.locator('#nationality').press('CapsLock');
  await page.locator('#nationality').fill('NRI');
  await page.waitForTimeout(2000);
  await page.locator('#address').click();
  await page.locator('#address').fill('M');
  await page.locator('#address').press('CapsLock');
  await page.locator('#address').fill('Mountain');
  await page.waitForTimeout(2000);
  await page.locator('.MuiGrid-root > .MuiGrid-root.MuiGrid-container > div').first().click();
  await page.locator('#city').click();
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('B');
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('Bul');
  await page.locator('#region').click();
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('G');
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('Glac');
  await page.waitForTimeout(2000);
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('091678');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '---',exact:true}).click();
  await page.getByRole('option', { name: 'American Samoa' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#phone_number').fill('8976543210');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#email').press('CapsLock');
  await page.locator('#email').fill('R');
  await page.locator('#email').press('CapsLock');
  await page.locator('#email').fill('Respondent09990@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('R');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Responent so');
  await page.locator('#nationality').click();
  await page.locator('#nationality').press('CapsLock');
  await page.waitForTimeout(2000);
  await page.locator('#nationality').fill('NRI');
  await page.locator('#address').click();
  await page.locator('#address').fill('TO');
  await page.waitForTimeout(2000);
  await page.locator('#address').press('CapsLock');
  await page.locator('#city').click();
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('S');
  await page.locator('#city').press('CapsLock');
  await page.locator('#city').fill('Sky');
  await page.waitForTimeout(2000);
  await page.locator('#region').click();
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('M');
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('Milkey way');
  await page.waitForTimeout(2000);
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('875678');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '---' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Austria' }).click();
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('8765780917');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#email').press('CapsLock');
  await page.locator('#email').press('CapsLock');
  await page.waitForTimeout(2000);
  await page.locator('#email').fill('respcounsel@gmail.com');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').press('ArrowLeft');
  await page.locator('#email').fill('respcounse12l@gmail.com');
  await page.locator('#full_name').click();
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('R');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Respnded');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Respnded C');
  await page.locator('#full_name').press('CapsLock');
  await page.locator('#full_name').fill('Respnded Counc');
  await page.waitForTimeout(2000);
  await page.locator('#address').click();
  await page.locator('#address').press('CapsLock');
  await page.locator('#address').fill('NRU');
  await page.locator('#city').click();
  await page.locator('#city').fill('T');
  await page.locator('#city').press('CapsLock');
  await page.waitForTimeout(2000);
  await page.locator('#city').fill('Thai');
  await page.locator('#region').click();
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('G');
  await page.locator('#region').press('CapsLock');
  await page.locator('#region').fill('Galaxy');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('984509');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '---' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Botswana' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#phone_number').click();
  await page.locator('#phone_number').fill('7865431907');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('radio').first().check();
  await page.getByRole('button', { name: 'delete' }).first().click();
  await page.waitForTimeout(2000);
  await page.locator('.MuiSvgIcon-root.MuiDropzoneArea-icon').click();
  // Pauses the script for exactly 3 seconds
await page.waitForTimeout(10000);

 
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('button', { name: 'SAVE' }).first().click();
//   await page.locator('.MuiSvgIcon-root.MuiDropzoneArea-icon > path').click();
  await page.locator('.MuiSvgIcon-root.MuiDropzoneArea-icon').click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'submit' }).click(); 
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('input[name="0.7144323469364818"]').check();
  await page.locator('input[name="0.022596651917448862"]').check();
  await page.locator('input[name="0.08552638701946003"]').check();
  await page.locator('#specific').click();
  await page.locator('#specific').press('CapsLock');
  await page.locator('#specific').fill('NA');
  await page.locator('input[name="0.8548106257051782"]').check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#first').click();
  await page.locator('#first').fill('1');
  await page.locator('#second').click();
  await page.locator('#second').fill('HINDI');
  await page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-multiline').first().click();
  await page.locator('#third').fill('NOTHING');
  await page.locator('#forth').click();
  await page.locator('#forth').fill('NA');
  await page.locator('#fifth').click();
  await page.locator('#fifth').fill('1200');
  await page.locator('#sixth').click();
  await page.locator('#sixth').fill('VW GODDD');
  await page.locator('#seventh').click();
  await page.locator('#seventh').fill('987907');
  await page.locator('canvas').click({
    position: {
      x: 143,
      y: 126
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 307,
      y: 114
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 158,
      y: 64
    }
  });
  await page.getByRole('button', { name: 'Proceed' }).click();
  // await page.goto('https://dev-app.webnyay.in/tiac_waitingscreen');
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByText('Requests Received').click();
});