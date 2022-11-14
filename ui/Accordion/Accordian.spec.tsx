import { test, expect } from "@playwright/experimental-ct-react";
import Accordian from "./Accordian";

test("event should work", async ({ mount }) => {
  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Accordian title="Ingredients">100% carrots</Accordian>
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Ingredients");
  await expect(component).not.toContainText("100% carrots");

  await expect(component).toHaveScreenshot("closed.png", {
    maxDiffPixelRatio: 0.15,
  });

  // Perform locator click. This will trigger the event.
  await component.click();

  await expect(component).toContainText("100% carrots");
  await expect(component).toHaveScreenshot("open.png", {
    maxDiffPixelRatio: 0.15,
  });
});
