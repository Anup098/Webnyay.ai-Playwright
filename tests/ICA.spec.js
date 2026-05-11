const{test}=require("@playwright/test");
// import{test}from"@playwright/test";

test("Ica",async({page})=>
{
    await page.goto("https://dev-app.webnyay.in");

    await page.getByRole("button",{name:"Platform Webnyay"}).click();

    await page.getByRole("option",{name:"ICA",exact:true}).click();

    await page.getByRole("textbox",{name:"Email Address"}).fill("ica_admin@webnyay.ai");
    await page.getByRole("textbox",{name:"Password"}).fill("Test@123");
    await page.getByRole("button",{name:"Log In"}).last().click();

    await page.getByText("Create Accounts").click();
    await page.getByText("User Details").click();
    await page.getByText("Case Managers").click();
    await page.getByText("Arbitrators").click();
    await page.getByText("Drive").click();
    await page.getByText("Calendar").click();
    await page.getByText("Overview").click();
    
    await page.getByText("Requests Received").click();
    await page.getByText("Requests Registered").click();
    await page.getByText("Closed").click();

    await page.getByRole("button",{name:"IA"}).click();
    await page.getByRole("menuitem",{name:"Log Out"}).click();
});