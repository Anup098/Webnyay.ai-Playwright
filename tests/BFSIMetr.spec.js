import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://bfsi-dev-app.webnyay.in/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('Bhupender.singh@webnyay.ai');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.getByRole('textbox', { name: 'Enter OTP' }).fill('0000');
  await page.getByRole('button', { name: 'Verify OTP' }).click();
  await page.getByRole('link', { name: 'Metrics' }).click();
  await page.getByRole('textbox').first().fill('2026-10-01');
  await page.getByRole('textbox').nth(1).fill('2026-10-07');
  await page.getByRole('combobox').filter({ hasText: 'All clients' }).click();
  await page.getByRole('textbox', { name: 'Search clients...' }).click();
  await page.getByRole('textbox', { name: 'Search clients...' }).fill('anup');
  await page.getByText('Anup', { exact: true }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.pause();
});