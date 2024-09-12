import { test, expect } from "@playwright/test";

test.describe.parallel("Handle different alert dialog box", () => {
  test("Alert with OK", async ({ page }) => {
    //visit site
    await page.goto("https://demoqa.com/");
    await page.getByText("Alerts, Frame & Windows").click();
    await page.getByText("Alerts", { exact: true }).click();

    //After writing below code, our page will automatically handle any alert on the page.
    //Enabling dialog window handler
    page.on("dialog", (dialog) => {
      //find out which type of dialog it is.
      expect.soft(dialog.type()).toContain("alert");
      //find out what is written on the alert.
      // expect.soft(dialog.message()).toContain("You clicked a button");
      dialog.accept();
    });
    await page.click("button#alertButton");
    //Alert having timer----------------------------------------------------
    await page.click("button#timerAlertButton");
    await page.waitForTimeout(6000);
  });

  test("Confirm Alert with Ok & Cancel button", async ({ page }) => {
    //visit site
    await page.goto("https://demoqa.com/");
    await page.getByText("Alerts, Frame & Windows").click();
    await page.getByText("Alerts", { exact: true }).click();

    //Enabling dialog window handler
    page.on("dialog", (dialog) => {
      expect.soft(dialog.type()).toContain("confirm");
      expect.soft(dialog.message()).toContain("Do you confirm action?");
      // await dialog.accept(); //close by using OK button
      dialog.dismiss(); //close by using Cancel button
    });

    await page.click("button#confirmButton");
    //first type of validation--------------------------->
    //use this if alert confirmed
    // expect(page.locator("//span[@id='confirmResult']")).toHaveText(
    //   "You selected Ok"
    // );
    //use this if alert dismissed
    await expect
      .soft(page.locator("//span[@id='confirmResult']"))
      .toHaveText("You selected Cancel");

    //second type of validation----------------------------->
    const confirmResult = await page
      .locator("//span[@id='confirmResult']")
      .textContent();

    confirmResult?.includes("Cancel")
      ? console.log("Alert dismissed.")
      : console.log("Alert accepted.");
  });

  test("Prompt Alert", async ({ page }) => {
    //visit site
    await page.goto("https://demoqa.com/");
    await page.getByText("Alerts, Frame & Windows").click();
    await page.getByText("Alerts", { exact: true }).click();

    //Enabling dialog window handler
    page.on("dialog", (dialog) => {
      expect.soft(dialog.type()).toContain("prompt");
      expect.soft(dialog.message()).toContain("Please enter your name");
      expect.soft(dialog.defaultValue()).toContain("");
      dialog.accept("Jagat"); //for any input, we have to do that inside accept func.
    });
    await page.click("button#promtButton");
    //first type of validation--------------------------->
    await expect
      .soft(page.locator("//span[@id='promptResult']"))
      .toHaveText("You entered Jagat");
    //second type of validation----------------------------->
    const promptResult = await page
      .locator("//span[@id='promptResult']")
      .textContent();

    promptResult?.includes("Jagat")
      ? console.log("Welcome Boss")
      : console.log("Hey Imposter");
  });
});
