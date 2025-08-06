import { test } from "@playwright/test";

test("Frame/iFrame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total no of frames
  const allFrames = page.frames();
  console.log(`Total no of frames are: ${allFrames.length}`);

  //1) Locate frame using URL or Name of the frame--------------------------------------
  // await page.frame("name") //use this if name is present
  const frame_1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html", //use this if url is present
  });

  await frame_1?.fill('//input[@name="mytext1"]', "Jagat");

  //2) Locate frame using frame Locator------------------------------------
  const frame_5 = page
    .frameLocator("//frame[@src='frame_5.html']")
    .locator('//input[@name="mytext5"]');

  await frame_5.fill("Hello");
});

// test("Nested Frame/iFrame", async ({ page }) => {
//   await page.goto("https://ui.vision/demo/webtest/frames/");

//   //locate frame > locate text box > fill
//   const frame_3 = await page.frame({
//     url: "https://ui.vision/demo/webtest/frames/frame_3.html",
//   });
//   await frame_3.locator('//input[@name="mytext3"]').fill("Hello");

//   const childFrame3 = await frame_3.childFrames();

//   await childFrame3[0];

//   await page.waitForTimeout(4000);
// });
