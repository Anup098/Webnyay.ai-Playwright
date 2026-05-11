// tests/dataDrivenLogin.spec.js
const { test } = require('@playwright/test');
const XLSX = require('xlsx');

function getExcelData() {
  const filePath = 'D:/Testcase.xlsx'; // same as your Java path
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet1'];

  // Returns array of rows, each row is an array of cell values
  const rows = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    raw: false,
    defval: ''
  });

  // If your first row is header, use rows.slice(1) instead of rows
  return rows
    .filter((row) => row.length >= 2)
    .map((row) => [String(row[0]), String(row[1])]);
}

const data = getExcelData();

for (const [index, [username, password]] of data.entries()) {
  test(`login with dataset row ${index + 1} (${username})`, async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#submit');
  });
}