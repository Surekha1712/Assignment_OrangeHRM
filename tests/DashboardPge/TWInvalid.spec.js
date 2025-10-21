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
  await dateInput.fill("2025-32-2");
  await page.locator("//button[normalize-space()='In']").click();
  const error=await page.locator("//span[text()='Should be a valid date in yyyy-dd-mm format']")
  await expect(error).toHaveText("Should be a valid date in yyyy-dd-mm format", { timeout: 10000 });
  const errorText = await error.textContent();
    console.log("Login error message:", errorText);

  //Interact with time 
  const Time = page.locator("(//input[@placeholder='hh:mm'])");
  await Time.click(); 
  await Time.fill("");
  await page.locator("//button[normalize-space()='In']").click();
  const error1=await page.locator("//span[text()='Required']")
  await expect(error1).toHaveText("Required", { timeout: 10000 });


await page.locator("//button[normalize-space()='In']").click();
 
  await page.waitForTimeout(3000);
});
