import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'loadcust2',
        'Test@123',
        '0000'
    );
})