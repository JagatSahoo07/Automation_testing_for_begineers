import { test, expect } from "@playwright/test";

test("Locate multiple element", async ({ page }) => {
  test.setTimeout(60000); // set test time

  //visit site
  await page.goto("https://demoblaze.com/");

  // find anchor tag and print the text
  const links = await page.$$("a");

  // map and catch the text content
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }

  //now lets find the products and print their text
  await page.waitForSelector("//a[@class='hrefch']");
  const products = await page.$$("//a[@class='hrefch']");

  for (const product of products) {
    const prodName = await product.textContent();
    console.log(prodName);
  }
});
