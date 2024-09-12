import { test, expect } from "@playwright/test";

test("Search and sort", async ({ page }) => {
  // visit site
  await page.goto("https://www.amazon.in/");
  // search "lg soundbar"
  await page.locator("input#twotabsearchtextbox").fill("Lg soundbar");
  await page.press("input#twotabsearchtextbox", "Enter");
  // read product names and price using javascript
  await page.waitForSelector(
    "//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']"
  );
  const products = await page.$$eval(".s-main-slot .s-result-item", (items) => {
    return items.map((item) => {
      const name =
        item.querySelector("h2 .a-text-normal")?.textContent?.trim() || "";
      const priceText =
        item.querySelector(".a-price .a-offscreen")?.textContent?.trim() || "0";
      const price =
        parseFloat(priceText.replace("₹", "").replace(",", "")) || 0;
      return { name, price };
    });
  });

  // sort the products
  products.sort((a, b) => a.price - b.price);
  // print products and their price in the concole log
  products.forEach((product) => {
    console.log(`${product.price} ${product.name}`);
  });
});
