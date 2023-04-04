import { test, expect } from "@playwright/test";

const url = "http://127.0.0.1:5500/public/index.html";

test("should render the button", async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle("Example Playground");

  const btn = await page.locator("//button[text()='Click Me']").click();
});
