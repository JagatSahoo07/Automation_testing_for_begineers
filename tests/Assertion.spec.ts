/* 
Playwright includes test assertion in the form of expect function.

https://playwright.dev/docs/test-assertions 

1) expect(page).toHaveTitle()                 Page has Title.
2) expect(page).toHaveURL()                   Page has URL.
3) expect(locator).toBeVisible()              Element is Visible.
4) expect(locator).toBeEnabled()              Control is Enabled.
5) expect(locator).toBeDisabled()             Element id Disabled.
6) expect(locator).toBeChecked()              Radio/Checkbox is Checked.
7) expect(locator).toHaveAttribute()          Element has Attribute.
8) expect(locator).toHaveText()               Element matches Text.
9) expect(locator).toContainText()            Element conatin Text.
10) expect(locator).toHaveValue(value)        Input has a Value.
11) expect(locator).toHaveCount()             List of elements has given length.
*/

import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
  //visit web application
  await page.goto("https://demoqa.com/");

  // expect(page).toHaveTitle()----Page has Title
  await expect(page).toHaveTitle("DEMOQA");

  //expect(page).toHaveURL()-----Page has URL
  await expect(page).toHaveURL("https://demoqa.com/");

  //expect(locator).toBeVisible()-----Element is Visible
  const visibleElement = page.locator("//a[@href='https://demoqa.com']");
  await expect(visibleElement).toBeVisible();

  //expect(locator).toBeEnabled()-----Control is Enabled
  const enabledElement = page.locator('(//*[name()="path"])[1]');
  await expect(enabledElement).toBeEnabled();

  //expect(locator).toBeDisabled()-----Element id Disabled
  await page
    .locator(
      "//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']"
    )
    .click();

  await page.getByText("Radio Button").click();
  const checkedElement = page.locator("//label[normalize-space()='Yes']");
  await checkedElement.click();
  expect(checkedElement).toBeChecked();

  //expect(locator).toHaveAttribute()-----Element has Attribute.
  await page.getByText("Text Box").click();
  const attributeElement = page.locator("//input[@id='userName']");
  await expect(attributeElement).toHaveAttribute("type", "text");

  //expect(locator).toHaveText()-----Element matches Text.
  await expect(page.locator("//h1[normalize-space()='Text Box']")).toHaveText(
    "Text Box"
  );

  //expect(locator).toContainText()-----Element conatin Text.
  await expect(
    page.locator("//h1[normalize-space()='Text Box']")
  ).toContainText("Text ");

  // expect(locator).toHaveValue(value)------Input has a Value.
  const valueElement = page.locator("//input[@id='userName']");
  await valueElement.fill("abcdef");
  await expect(valueElement).toHaveValue("abcdef");

  //expect(locator).toHaveCount()------List of elements has given length
  const countElement = page.locator("li");
  await expect(countElement).toHaveCount(33);
});
