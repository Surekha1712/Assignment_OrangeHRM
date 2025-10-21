const {test,expect}=require('@playwright/test')

test.skip("Login with valid Cerdenitals",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000)

    // // //Login Cerdentials Valid details (Username:Admin  , Password : admin123)

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000)
    
})
test.skip("Login without valid ceredenitals",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000)

    // // //Login Cerdentials Valid details (Username:Admin  , Password : admin123)

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("123");
    await page.locator("//button[@type='submit']").click();
    const errorLocator = page.locator("//p[text()='Invalid credentials']");
    await expect(errorLocator).toHaveText("Invalid credentials", { timeout: 10000 });

    const errorText = await errorLocator.textContent();
    console.log("Login error message:", errorText);
    await page.waitForTimeout(5000);
})
    //Credenitals without any input

test.only("Login without inputs ceredenitals",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000)
    //Credenitals without any input
    const name=await page.locator("//input[@name='username']").fill("");
    const password=await page.locator("//input[@name='password']").fill("");
    await page.locator("//button[@type='submit']").click();

    const errorMessage = await page.locator("//span[text()='Required']").allTextContents();

    console.log("Error message displayed:", errorMessage);
   } )