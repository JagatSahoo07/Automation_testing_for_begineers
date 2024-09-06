import { test } from "@playwright/test";

test("Dropdown Multi-select", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByText("Widgets").click();
  await page.getByText("Select Menu").click();

  // Standard multi select
  await page.locator("//select[@id='cars']").selectOption(["Saab", "Opel"]);

  //Hidden Multiselect drop down -- will do as before
  await page.getByText("Select...").click();
  await page.getByText("Select...").pressSequentially("re");
  await page.click("//div[@id='react-select-4-option-3']");
  await page.getByText("Select...").pressSequentially("gre");
  await page.click("//div[@id='react-select-4-option-0']");
});
