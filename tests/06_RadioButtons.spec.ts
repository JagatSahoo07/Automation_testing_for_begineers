import { test, expect } from "@playwright/test";

test("Radio Buttons", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByText("Forms").click();
  await page.getByText("Practice Form").click();
  // Check condition if it is available to click or not
  await expect(page.locator("//label[text()='Male']")).toBeEnabled();

  //Select Male radion button--------------------------------------
  await page.locator("//label[text()='Male']").click();
  //Check if it is checked or not
  await expect(page.locator("//label[text()='Male']")).toBeChecked();
  //Another approch to check
  expect
    .soft(await page.locator("//label[text()='Male']").isChecked())
    .toBeTruthy();

  //Check for female button to be unchecked
  expect
    .soft(await page.locator("//label[text()='Female']").isChecked())
    .toBeFalsy();
});
