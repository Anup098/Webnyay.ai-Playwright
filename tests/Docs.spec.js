import { test, expect } from '@playwright/test';

test('Webnyay docs - create workspace and upload multiple files', async ({ page }) => {
  // Open login/workspace page
  await page.goto('https://docs.webnyay.ai/workspace');

  // Login
 await page.getByRole('textbox', { name: 'Eg - myemail@mail.com' }).fill('singhanup91184@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();


  await page.getByRole('textbox', { name: 'At least 8 characters' }).fill('Test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Create workspace
  await page.locator('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').first().click();

  const workspaceName = "New Playwright";
  const workspaceInput = page.locator('input[value="New Workspace"]');
  await workspaceInput.waitFor({ state: 'visible' });
  await workspaceInput.fill(workspaceName);
  await page.getByRole('textbox', { name: 'New Workspace Name' }).press('Enter');

  // Open created workspace
  await page.getByRole('cell', { name: 'New Playwright' }).dblclick();


  // Upload files
  await page.getByRole('button', { name: 'Upload file' }).click();

  const fileInput = page.locator('input[type="file"]');
  await fileInput.waitFor({ state: 'attached' });

  await fileInput.setInputFiles([
    'D:\\Int Ques\\Interviews_Question_Abstration&interface[1].pdf',
    'D:\\Int Ques\\Interviews_Question_Basic[1].pdf',
    'D:\\Int Ques\\Interviews_Question_Const&Inheri&Poly[1].pdf',
    'D:\\Int Ques\\Interviews_Question_Exceptionhandilng[1].pdf',
    'D:\\Int Ques\\Interview-Selenium_module-3[1].pdf',
    'D:\\Int Ques\\Java Interview Question-2[1].pdf',
    'D:\\Int Ques\\Module-2_Selenium.pdf',
    'D:\\Int Ques\\Interview_Question_Module_(1)Selenium.pdf'
  ]);
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('h2:has-text("Upload or Import files")').waitFor({ state: 'hidden' });
  await page.getByRole('button', { name: 'Paginate' }).click();
   await page.getByRole('img', { name: 'Paginate From' }).click();
  await page.getByText('Continue').click();
});