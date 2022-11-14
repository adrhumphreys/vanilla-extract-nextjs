import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { Button } from "./Button";

test("event should work", async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button onClick={() => (clicked = true)}>Submit</Button>
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Submit");

  // Perform locator click. This will trigger the event.
  await component.click();

  await expect(component).toHaveScreenshot();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
