import { test, expect } from "@playwright/test";

test("Check-Box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByText("Checkboxes").click();

  //Lets check some conditions for Check-Box
  await expect(page.locator("//input[1]")).toBeEnabled();

  //Check Check-Box-----------------------------------------------
  await page.locator("//input[1]").check();

  //check if it is checked
  await expect.soft(page.locator("//input[1]")).toBeChecked();
  // another approch to check
  expect.soft(await page.locator("//input[1]").isChecked()).toBeTruthy();

  //Uncheck Check-Box--------------------------------------------
  await page.locator("//input[2]").uncheck();
  //check if it is unchecked
  expect.soft(await page.locator("//input[2]").isChecked()).toBeFalsy();

  await page.waitForTimeout(5000);
});
