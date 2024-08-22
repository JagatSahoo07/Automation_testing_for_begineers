import { test, expect } from "@playwright/test";

/*In Playwright, these terms relate to how text is handled or matched within the DOM (Document Object Model). Here's a brief explanation of each:

1. **`textContent`**:
   - This is a DOM property that returns the text content of a node and all its descendants. It includes all the text, even if it's hidden (e.g., `display: none`). It doesn't consider the visual appearance of the text.
   - In Playwright, you can use `elementHandle.textContent()` to retrieve the `textContent` of an element.

2. **`innerText`**:
   - This is a DOM property that returns the visible text content of an element, as rendered by the browser. It excludes hidden text and considers the layout, such as the impact of CSS styles like `display` or `visibility`.
   - Playwright can retrieve this using `elementHandle.innerText()`.

3. **`toContainText`**:
   - This is a Playwright-specific matcher used in assertions to check if an element contains a specific text or substring within its visible text.
   - Example: `await expect(page.locator('selector')).toContainText('expected text')`.

4. **`allTextContents`**:
   - This is a Playwright method that retrieves an array of all the text contents of the elements matching a selector. It’s useful when you want to get the text content of multiple elements at once.
   - Example: `const texts = await page.locator('selector').allTextContents();`

These methods allow for different ways of interacting with and validating text in web applications when using Playwright for testing. */

test("Locate multiple element", async ({ page }) => {
  //visit site
  await page.goto("https://demoblaze.com/");

  //1) Find anchor tag and print the text
  const links = await page.$$("a");

  //map and catch the text content
  for (const link of links) {
    const linkText = await link.textContent();
    console.log("All the anchor tags are:-", linkText);
  }

  //2) Now lets find the products and print their text
  await page.waitForSelector("//a[@class='hrefch']");
  const products = await page.$$("//a[@class='hrefch']");

  //map and catch the text content
  for (const product of products) {
    const prodName = await product.textContent();
    console.log("All the products are:-", prodName);
  }

  //3) Find the specific product and print its text
  // find first product and print text content
  const txt1 = await page.locator("//a[@class='hrefch']").first().textContent();
  console.log("First product name is:-", txt1);

  // find last product and print text content
  const txt2 = await page.locator("//a[@class='hrefch']").last().textContent();
  console.log("Last product name is:-", txt2);

  //find any product and print text content
  const txt3 = await page.locator("//a[@class='hrefch']").nth(3).textContent();
  console.log("Fourth product is:-", txt3);
});
