//In this test we will test different type of locators on web element. Below are the type of loactors.
// 1) Locate by Role
// 2) Locate by label
// 3) Locate by Placeholder
// 4) Locate by Text
// 5) Locate by Alt text
// 6) Locate by xpath
// 7) Locate by Css
// 8) Locate by Title

//There are two methohds to locate and do actions on them.
// await page.locator("locator").click();
// await page.click("locator");

import { test } from "@playwright/test";

test("Locating Web Elements", async ({ page }) => {
  //visit the web application
  await page.goto("https://demoqa.com/");

  // 1) Locate by role
  await page.getByRole("heading", { name: "Forms" }).click();

  // 2) Locate by Text
  await page.getByText("Practice Form").click();

  // 3) Locate by Label
  await page.getByLabel("Name").isVisible();

  // 4) Locate by Placeholder
  await page.getByPlaceholder("First Name").fill("abcdef");

  // 5) Locate by Title
  await page.getByTitle("DEMOQA").isVisible();

  // 6) Locate by css
  await page.locator("input#lastName").fill("1234");

  // 7) Locate by Xpath
  await page.locator('//input[@id="userEmail"]').fill("abc@gmailcom");

  // 8) Locate by Alt Text
  await page.getByAltText("Build PlayWright tests with AI").click();
});
