import { Page, Locator } from '@playwright/test';

export class LoginPage {

    page: Page;

    username: Locator;
    password: Locator;
    saveAccount: Locator;
    loginButton: Locator;

    otpTextbox: Locator;
    submitButton: Locator;

    constructor(page: Page) {

        this.page = page;

        // Initialize locators after page assignment
        this.username = page.getByRole('textbox', { name: 'userName' });

        this.password = page.locator('input[name="password"]');

        this.saveAccount = page.getByRole('checkbox', { name: 'Save Account' });

        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.otpTextbox = page.locator('input[name="otp"]');

        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async navigateToLoginPage() {

        await this.page.goto('https://api.cse.com.sa/oms-channel/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
    }

    async enterUsername(username: string) {

        await this.username.fill(username);
    }

    async enterPassword(password: string) {

        await this.password.fill(password);
    }

    async clickSaveAccount() {

        await this.saveAccount.check();
    }

    async clickLogin() {

        await this.page.waitForTimeout(1000);
        await this.loginButton.click();
    }

    async enterOTP(otp: string) {

        await this.otpTextbox.fill(otp);
    }

    async clickSubmit() {

        await this.submitButton.click();
    }

    async login(username: string, password: string, otp: string) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickSaveAccount();

        await this.clickLogin();

        await this.enterOTP(otp);

        await this.clickSubmit();
    }
}