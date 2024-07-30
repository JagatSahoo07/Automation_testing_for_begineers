//In this test we will test different type of locators on web element. Below are the type of loactors.
// 1) Locate by Role
// 2) Locate by Placeholder
// 3) Locate by Text
// 5) Locate by Alt text
// 6) Locate by Test id
// 7) Locate by Css or xpath
// 8) Locate by Title

//There are two methohds to locate and do actions on them.
// await page.locator("locator").click();
// await page.click("locator");

import { test, expect } from "@playwright/test";

test("Locating Web Elements", async ({ page }) => {
  //visit the web application
  await page.goto("https://www.saucedemo.com/");

  // 1) Locate by role
  // click on login button
  await page.getByRole("button", { name: "Login" }).click();

  // 2) Locate by Placeholder
  await page.getByPlaceholder("Username").fill("standard_user");

  //3) Locate by Text
  await expect(page.getByText("Swag Labs")).toBeVisible();
});
