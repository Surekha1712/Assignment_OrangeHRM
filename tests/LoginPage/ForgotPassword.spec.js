const {test,expect}=require('@playwright/test')
test("Forgot Pawword Test", async ({page})=>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     await page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
     await page.waitForEvent('load');

     await page.waitForTimeout(5000);
     const paragraphText = await page.locator("p.oxd-text--p.orangehrm-forgot-password-card-note").textContent();
     console.log(paragraphText.trim());
     await page.getByPlaceholder('Username').fill('Admin');
     await page.locator("//button[normalize-space()='Reset Password']").click();
     await page.waitForTimeout(5000);
     const rest=await page.locator("(//p[@class='oxd-text oxd-text--p'])").allTextContents();
     console.log(rest)
     await page.waitForTimeout(7000);

})