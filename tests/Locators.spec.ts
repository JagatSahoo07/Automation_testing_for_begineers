//In this test we will test different type of locators on web element. Below are the type of loactors.
// 1) Locate by Role
// 2) Locate by Placeholder
// 3) Locate by Text
// 4) Locate by Title
// 5) Locate by Css or xpath

//There are two methohds to locate and do actions on them.
// await page.locator("locator").click();
// await page.click("locator");

import { test, expect } from "@playwright/test";

test("Locating Web Elements", async ({ page }) => {
  //visit the web application
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");

  // 1) Locate by role
  await expect(page.getByRole("button", { name: "Sign up" })).toBeVisible();

  // 2) Locate by Placeholder
  await page.getByPlaceholder("Email").fill("standard_user");

  //3) Locate by Text
  await expect(
    page.getByText("Not yet a user? Click here to sign up!")
  ).toBeVisible();

  //4) Locate by Title
  await page.getByTitle("Contact List App");

  //5) locate by CSS/XPath
  await page.locator("//input[@id='password']").fill("1234");
});
