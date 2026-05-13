// @ts-check
import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});

test('headerSignup', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
 
  await page.getByRole('link', { name: 'Sign up' }).click();

  await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
 
  await page.locator('//*[@id="sign-username"]').fill('nabiluye');

  await page.locator('//*[@id="sign-password"]').fill('uyenabil');

  await page.getByRole('button', {name: 'Sign up' }).click();
});


test('headerLogin', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
 
  await page.getByRole('link', { name: 'Log in' }).click();

  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();

  await page.locator('//*[@id="loginusername"]').fill('nabiluye');

  await page.locator('//*[@id="loginpassword"]').fill('uyenabil');
 
  await page.getByRole('button', {name: 'Log in' }).click();

  await page.getByRole('link', {name: 'Samsung galaxy s6' }).click();

  await expect(page.getByRole('link', {name: 'Add to cart'})).toBeVisible();

  await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();

  await page.locator('//*[@id="cartur"]').click();

  await expect(page.getByRole('heading', {name: 'Product'})).toBeVisible();

  await page.locator('//*[@id="page-wrapper"]/div/div[2]/button').click();

  await expect(page.getByRole('heading', {name: 'Place order'})).toBeVisible();

  await page.locator('//*[@id="name"]').fill('Salahuddin Nabil');

  await page.locator('//*[@id="country"]').fill('Indonesia');

  await page.locator('//*[@id="city"]').fill('jakarta');

  await page.locator('//*[@id="card"]').fill('62173671673');

  await page.locator('//*[@id="month"]').fill('09');

  await page.locator('//*[@id="year"]').fill('24');

  await page.locator('//*[@id="orderModal"]/div/div/div[3]/button[2]').click();

  await expect(page.getByRole('button', {name: 'OK'})).toBeVisible();

  

});