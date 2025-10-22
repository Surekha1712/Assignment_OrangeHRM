const { test, expect } = require('@playwright/test');

test("Login with invalid Credentials and select date", async ({ page }) => {
  // Go to login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForLoadState('domcontentloaded');

  // Login Credentials
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

   // Wait for dashboard to load

  //Time at work Wigdet
  await page.locator('//button[@class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]').click();
  await page.waitForTimeout(3000);


  // Interact with date 
  const dateInput = page.locator("(//input[@placeholder='yyyy-dd-mm'])[1]");
  await dateInput.click(); 
  await dateInput.fill("2024-12-05");

  //Interact with time 
  const Time = page.locator("(//input[@placeholder='hh:mm'])");
  await Time.click(); 
  await Time.fill("4:00 PM");

  //Note
 
await page.waitForTimeout(3000);

const noteLocator = page.locator('//textarea[@placeholder="Type here"]');
await noteLocator.fill("This is report time in orangehrm you should be on time");
const note = await noteLocator.inputValue();
await expect(note).toContain("This is report time in orangehrm you should be on time");
console.log(note);
await page.waitForTimeout(5000);
await page.locator("//button[normalize-space()='Out']").click();
 
  
});
