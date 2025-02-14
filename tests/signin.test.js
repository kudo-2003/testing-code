import { test, expect } from '@playwright/test';

test('sigin testing', async ({ page }) => {
  await page.goto('https://shop-do-bao-ho.onrender.com/');
  await page.getByText('Đăng nhập/Đăng ký').click();
  await page.getByRole('heading', { name: 'Xin Chào,' }).click();
  await page.getByText('Đăng nhập hoặc tạo tài khoản').click();
  await page.getByRole('textbox', { name: 'abc@gmail.com' }).click();
  await page.getByRole('textbox', { name: 'abc@gmail.com' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('123456');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
});