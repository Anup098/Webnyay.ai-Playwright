const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Fill in the username
  await page.locator('#username').fill('student');

  // Fill in the password
  await page.locator('#password').fill('Password123');

  // Click the submit button
  await page.locator('#submit').click();

  // Click the button by class name
  await page.locator('.wp-block-button__link').click();

});