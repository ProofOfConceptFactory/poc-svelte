import { test, expect } from '@playwright/test';

test('hello from svelte', async ({ page }) => {
  await page.goto('/');

  // Expect a h1 "to contain" a substring.
  await expect(page.locator('h1')).toContainText('Hello from Svelte!👋');
});
