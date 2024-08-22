import { test, expect } from "@playwright/test";

test("Handle Input Box", async ({ page }) => {
  //visit Site
  await page.goto("https://demoqa.com/");
  await page.getByText("Forms").click();
  await page.getByText("Practice Form").click();

  //Let's check some conditions for the Input box
  await expect(page.locator("//input[@id='firstName']")).toBeEditable();
  await expect(page.locator("//input[@id='firstName']")).toBeEmpty();

  //Fill the Input box
  await page.locator("//input[@id='firstName']").fill("Jagat"); //First way to fill Input
  await page.fill("//input[@id='lastName']", "Sahoo"); //Second way to fill Input

  //Lets check some conditions for Radio button
  await expect(page.locator("//label[text()='Male']")).toBeEnabled();

  //Check Radio button
  await page.locator("//label[text()='Male']").click();
  // await page.waitForTimeout(4000);
});
