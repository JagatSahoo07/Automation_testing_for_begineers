//In this test we will verify home page of a free web application which is available on the internet for ui automation testing.

//Here we will verify
// 1) URL of the page
// 2) Title of the page

// How to Run Playwright Tests --------------------------------------------------------
// npx playwright test --> runs all the test on all browser in headless mode
// npx playwright test fileName.spec.ts --> runs a specific test file
// npx playwright test filiName.spec.ts --project=chromium --> runs a specific test file on specific browser
// npx playwright test filiName.spec.ts --project=chromium --headed--> runs a specific test file on specific browser in headed mode
// npx playwright test filiName.spec.ts --project=chromium --headed --debug --> runs a specific test file on specific browser in headed mode for dubug

import { test, expect } from "@playwright/test";

test("Home Page", async ({ page }) => {
  //visit the web application
  await page.goto("https://www.saucedemo.com/");

  // store page url and console
  const pageUrl = page.url();
  console.log(pageUrl);

  //1) Verify URL of the page
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  //store page title and console
  const pageTiltle = await page.title();
  console.log(pageTiltle);

  //2)verify title of the page
  await expect(page).toHaveTitle("Swag Labs");
});
