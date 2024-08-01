//In this test we will see how Hard vs Soft assertion.

import { test, expect } from "@playwright/test";

test("Soft Assertion", async ({ page }) => {
  //visit web application
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");

  //Hard Assertions-------------------------------------------------------------------
  await expect(page).toHaveTitle("Contact List App");
  await expect(page).toHaveURL(
    "https://thinking-tester-contact-list.herokuapp.com/"
  );
  await expect(page.locator("button#submit")).toBeVisible();

  //The above test will pass cause we have taken right locators. If by mistakenly we will give wrong
  // locator address it will fail with immediate effect and fail the test at that point without proceed
  // futher. If we want to only fail for the locator and proceed for next locator to check whether it is
  // passing or not we have to use soft assertion. check html report to see the result.

  //Soft Assertions----------------------------------------------------------------
  await expect.soft(page).toHaveTitle("Contact List Aapp");
  // We will intentionally give wrong address to check how it works.
  await expect
    .soft(page)
    .toHaveURL("https://thinking-tester-contact-list.herokuapp.com/");
  await expect.soft(page.locator("button#submit")).toBeVisible();
});
