import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:8000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/hello/);
});

test('end game', async ({ page }) => {
  await page.goto('localhost:8000');

  // Click the end game button.
  await page.locator('#ctx').click({
    position: {
      x: 454,
      y: 20
    }
  });

  // Expects game over state to be true.
  const gameOver = await page.evaluate(() => gameControls.gameOver);
  await expect(gameOver).toBeTruthy();
});
