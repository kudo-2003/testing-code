import { test, expect } from '@playwright/test';
test('sigup code testing', async ({ page }) => {
  await page.goto('https://shop-do-bao-ho.onrender.com/');
  await page.getByText('Đăng nhập/Đăng ký').click();
  await page.getByText('Quên mật khẩu').click();
  await page.getByText('Bạn chưa có tài khoản ?Tạo tà').click();
  await page.getByRole('heading', { name: 'Xin Chào,' }).click();
  await page.getByText('Đăng nhập hoặc tạo tài khoản').click();
  await page.getByRole('textbox', { name: 'abc@gmail.com' }).click();
  await page.getByRole('textbox', { name: 'abc@gmail.com' }).fill('hung777@gmail.com');
  await page.getByRole('textbox', { name: 'abc@gmail.com' }).press('Enter');
  await page.getByRole('textbox', { name: 'password', exact: true }).click();
  await page.getByRole('textbox', { name: 'password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'confirm password' }).click();
  await page.getByRole('textbox', { name: 'confirm password' }).fill('123456');
  await page.getByRole('button', { name: 'Đăng ký' }).click();
});