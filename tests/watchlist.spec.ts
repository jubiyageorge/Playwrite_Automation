import { test } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { WatchlistPage } from '../pages/watchlistpage';

test('Watchlist Flow', async ({ page }) => {

    // Create objects
    const loginPage = new LoginPage(page);

    const watchlistPage = new WatchlistPage(page);

    // Login
    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'loadcust2',
        'Test@123',
        '0000'
    );

    // Watchlist actions
    await watchlistPage.openWatchlist();

    await watchlistPage.searchStock('SAB');
});