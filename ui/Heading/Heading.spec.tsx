import { test, expect } from "@playwright/experimental-ct-react";
import { Heading } from "./Heading";

test("Headings are shown correctly", async ({ mount }) => {
  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Heading size="h1" align="center">
      Hello
    </Heading>
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Hello");
});
