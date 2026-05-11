import { test, expect } from '@playwright/test';
import * as xlsx from 'xlsx';

function getExcelData() {
  const fileName = "D:\\New.xlsx";
  const workbook = xlsx.readFile(fileName);
  const worksheet = workbook.Sheets['Sheet1'];
  
  const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  return data;
}

// Extract the test data
const loginData = getExcelData();

for (const [index, row] of loginData.entries()) {
  const username = String(row[0] || '');
  const password = String(row[1] || '');

  if (!username && !password) continue;

  test(`Login Test - Muthoot User: ${username} (Row ${index})`, async ({ page }) => {
    
  
    await page.goto('https://dev-app.webnyay.in/');
    
    await page.getByText("Webnyay").click();
  // await page.getByText("SEBI").click();
  await page.getByRole("option",{name:"SEBI"}).click();

  await page.getByRole("textbox",{name:"Eg - Myemail@mail.com"}).fill(username);

  await page.getByRole("textbox",{name:"At least 6 characters"}).fill(password);

  await page.getByRole("button",{name:"Log In"}).click();
    
    
    await page.waitForTimeout(1000);
  });
}