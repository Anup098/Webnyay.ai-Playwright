import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bfsi-dev-app.webnyay.in/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('iuytrdfcgvhbh@asdad.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Filter by' }).click();
  await page.getByRole('option', { name: 'Client' }).click();
  await page.getByRole('textbox', { name: 'Enter value for Client' }).click();
  await page.getByRole('textbox', { name: 'Enter value for Client' }).fill('test');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Arbitrators' }).click();
  await page.getByRole('searchbox', { name: 'Search Arbitrator' }).click();
  await page.getByRole('searchbox', { name: 'Search Arbitrator' }).fill('manoj');
  await page.getByRole('link', { name: 'Billing' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
});