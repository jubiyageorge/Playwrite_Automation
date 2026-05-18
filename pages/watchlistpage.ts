import { Page } from '@playwright/test';

export class WatchlistPage {

    constructor(private page: Page) { }

    async searchStock(stockName: string) {

        await this.page
            .getByPlaceholder('Searchs eg: Saudi Aramco').first()
            .fill(stockName);
    }

    async openWatchlist() {

        await this.page
            .getByRole('link', { name: 'Watchlist' })
            .click();
    }
}