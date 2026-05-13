// @ts-check
import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});

test('headerHome', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'Home' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('link', { name: 'product store' })).toBeVisible();

});


test('headerContact', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.getByRole('button', { name: 'send message' })).toBeVisible();
  
  await page.locator('//*[@id="exampleModal"]/div/div/div[1]/button').click();

});

test('headerAboutUs', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await page.getByRole('link', { name: 'About us' }).click();

  await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible();

  await page.locator('//*[@id="videoModal"]/div/div/div[3]/button').click();

});

test('headerCart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
 
  await page.getByRole('link', { name: 'Cart' }).click();

  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
 
});

test('headerLogin', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
 
  await page.getByRole('link', { name: 'Log in' }).click();

  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
 
});

test('headerSignup', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
 
  await page.getByRole('link', { name: 'Sign up' }).click();

  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
 
});

test('Categories', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await page.getByRole('link', { name: 'Phones' }).click();

  await expect(page.locator('//*[@id="cat"]')).toBeVisible();
  
  await page.getByRole('link', { name: 'Laptops' }).click();

  await expect(page.locator('//*[@id="cat"]')).toBeVisible();

  await page.getByRole('link', { name: 'Monitors' }).click();

  await expect(page.locator('//*[@id="cat"]')).toBeVisible();  

});




