import { test, expect } from '@playwright/test';
import * as xlsx from 'xlsx';

// Read data from Excel using the 'xlsx' library
function getExcelData() {
  const fileName = 'D:\\MuthootLoginId.xlsx';
  const workbook = xlsx.readFile(fileName);
  const worksheet = workbook.Sheets['Sheet1'];
  
  // Convert sheet to a 2D array, similar to Java's String[][]
  // The 'header: 1' option ensures it returns an array of arrays
  const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  return data;
}

// Extract the test data
const loginData = getExcelData();

// Loop through each row of the excel sheet to parameterize tests
for (const [index, row] of loginData.entries()) {
  const username = String(row[0] || '');
  const password = String(row[1] || '');

  // Skip empty rows if needed
  if (!username && !password) continue;

  test(`Login Test - Muthoot User: ${username} (Row ${index})`, async ({ page }) => {
    
    // Playwright auto-waits for elements to be actionable, so implicitlyWait is unnecessary.
    // Window maximizing is generally handled in playwright.config.ts

    await page.goto('https://dev-app.webnyay.in/');
    
    // Equivalent to Action click on element containing 'Webnyay'
    // Using XPath as in the original, or text locator
    const dropdown = page.locator('xpath=//div[text()="Webnyay"]');
    await dropdown.click();
    
    // Thread.sleep(1000) equivalent
    await page.waitForTimeout(1000);
    
    const muthootOption = page.locator('xpath=//li[@data-value="muthoot"]');
    await muthootOption.click();

    // ------------------------------user login---------------------------------------
    await page.locator('#emailorphone').fill(username);
    await page.locator('#password').fill(password);
    
    const loginButton = page.locator('xpath=(//button[@type="button"])[3]');
    await loginButton.click();
    
    // Thread.sleep(2000) equivalent
    await page.waitForTimeout(1000);
  });
}