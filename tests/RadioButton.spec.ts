import { test, expect } from "@playwright/test";

test("Radio Button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByText("Checkboxes").click();

  //Lets check some conditions for Radio button
  await expect(page.locator("//input[1]")).toBeEnabled();

  //Check Radio button
  await page.locator("//input[1]").check();

  //check if it is checked or not
  await expect(page.locator("//input[1]")).toBeChecked();

  //uncheck radio button
  await page.locator("//input[2]").uncheck();

  await page.waitForTimeout(5000);
});
