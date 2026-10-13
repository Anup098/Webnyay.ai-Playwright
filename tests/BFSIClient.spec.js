import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bfsi-dev-app.webnyay.in/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('umesh@webnyay.ai');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('searchbox', { name: 'Search users, disputes,' }).click();
  await page.getByRole('searchbox', { name: 'Search users, disputes,' }).fill('anup');
  await page.getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('button', { name: 'Filter by' }).click();
  await page.getByRole('option', { name: 'Client' }).click();
  await page.getByRole('textbox', { name: 'Enter value for Client' }).click();
  await page.getByRole('textbox', { name: 'Enter value for Client' }).fill('anup');
  await page.getByRole('textbox', { name: 'Enter value for Client' }).click();
  await page.getByRole('textbox', { name: 'Enter value for Client' }).fill('Anup');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.pause();
});