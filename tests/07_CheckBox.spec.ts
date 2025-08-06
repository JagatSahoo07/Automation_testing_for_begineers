import { test, expect } from "@playwright/test";

test("Single Check-Box", async ({ page }) => {
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

test("Multiple Check Box", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByText("Forms").click();
  await page.getByText("Practice Form").click();

  //storing all the locator address
  const checkboxLocators = [
    "//label[text()='Sports']",
    "//label[text()='Reading']",
  ];

  //see step by step  ----comment this line if not required
  await page.pause();

  //checking the checkbox
  for (const locatorName of checkboxLocators) {
    await page.locator(locatorName).check();
  }

  //check is checkboxs are checked or not
  await expect(page.locator("//label[text()='Sports']")).toBeChecked();
  await expect(page.locator("//label[text()='Reading']")).toBeChecked();

  //uncheck checkbox if it is already checked
  for (const locatorName of checkboxLocators) {
    if (await page.locator(locatorName).isChecked()) {
      await page.locator(locatorName).uncheck();
    }
  }

  //check is checkboxs are unchecked or not
  expect
    .soft(await page.locator("//label[text()='Sports']").isChecked())
    .toBeFalsy();
  expect
    .soft(await page.locator("//label[text()='Reading']").isChecked())
    .toBeFalsy();
});
