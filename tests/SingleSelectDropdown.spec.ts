import { test, expect } from "@playwright/test";

test("Dropdown Single-select", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //first approach
  await page.locator("//select[@id='country']").selectOption("India"); //selecting visible text

  //second approach
  await page
    .locator("//select[@id='country']")
    .selectOption({ label: "Germany" }); //selecting by label

  //third approach
  await page
    .locator("//select[@id='country']")
    .selectOption({ value: "australia" }); //selecting by value

  //forth approach
  await page.locator("//select[@id='country']").selectOption({ index: 4 }); //selecting by index no

  //fifth approach
  await page.selectOption("//select[@id='country']", "India");

  //sixth approach ----- If there is no select attribute
  const SelectOption = await page.$$("//select[@id='country']/option");

  for (const myOption of SelectOption) {
    let value = await myOption.textContent();
    if (value?.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }

  //----------------------------------------------------------------------------------
  //Now we can use assertions to check different conditions for dropdown--------------

  //1) check no of options in dropdown - Approach 1 ----------------------------------------------->
  const optionNo = page.locator("//select[@id='country']/option");
  expect.soft(optionNo).toHaveCount(10);

  //2) check no of options in dropdown - Approach 2 ----------------------------------------------->
  const options = await page.$$("//select[@id='country']/option");
  expect.soft(options.length).toBe(10);

  //3) check presence of value present or not- Approach 1------------------------------------------>
  const content = await page.locator("#country").textContent();
  expect(content?.includes("India"));

  //4) check presence of value present or not- Approach 2------------------------------------------>
  const option = await page.$$("//select[@id='country']/option");
  let status1 = false;

  for (const myOption of option) {
    let value1 = await myOption.textContent();
    if (value1?.includes("India")) {
      status1 = true;
      break;
    }
  }

  expect(status1).toBeTruthy();
});

//Select hidden option from dropdown
//There is one way to make our option visible in inspect.
//1) inspect on component >> select event listeners >> blur >> delete all the option under blur
// now the option will be visible on the inspect

// 2)Inspect and go to sources >> create new js snippet >> write "debugger".
// goto the step where you want the element of particular component, then run the script. Now screen will freeze, so you can fine that component in elements.

test("Dropdown Hidden option", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByText("Widgets").click();
  await page.getByText("Select Menu").click();

  //1st example
  await page.getByText("Select Option").click();
  await page.locator("#react-select-2-option-1-1").click();

  //2nd example
  await page.getByText("Select Title").click();
  await page.locator("#react-select-3-option-0-1").click();
});

test.only("Auto suggestion dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  // await page.locator("#src").fill("Bhubaneswar"); // first way to fill
  await page.locator("#src").click();
  await page.keyboard.type("Bhubaneswar", { delay: 100 });
  await page.waitForSelector(
    "//li[contains(@class, 'sc-iwsKbI jTMXri')]/div/text[1]"
  );

  const fromCityOptions = await page.$$(
    "//li[contains(@class, 'sc-iwsKbI jTMXri')]/div/text[1]"
  );

  for (let option of fromCityOptions) {
    const value = await option.textContent();
    if (value?.includes("Rasulgarh")) {
      await option.click();
      break;
    }
  }
});
