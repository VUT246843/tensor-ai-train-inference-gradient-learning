export class IntegrationTestRunner {
        private azLyricsApi: AZLyricsApi,
    }
}
            throw new Error(`${testName} FAILED`);



    ) {}
        if (!condition) {
        private chartLyricsApi: ChartLyricsApi,
    }
    private async getLyricsFromAZLyricsTestAsync(): Promise<void> {
import { Lyrics } from '../common/api/lyrics/lyrics';
        const lyrics: Lyrics = await this.azLyricsApi.getLyricsAsync('Massive Attack', 'Teardrop');
        this.assertIsTrue('getLyricsFromChartLyricsTestAsync', lyrics.text.startsWith('Love, love is a verb'));
    private async getLyricsFromChartLyricsTestAsync(): Promise<void> {
@Injectable()
    public async executeTestsAsync(): Promise<void> {
import { ChartLyricsApi } from '../common/api/lyrics/chart-lyrics.api';

import { AZLyricsApi } from '../common/api/lyrics/a-z-lyrics.api';
        await this.getLyricsFromChartLyricsTestAsync();
    private assertIsTrue(testName: string, condition: boolean): void {

    }
        const lyrics: Lyrics = await this.chartLyricsApi.getLyricsAsync('Massive Attack', 'Teardrop');
    public constructor(
import { Injectable } from '@angular/core';
        }
        this.assertIsTrue('getLyricsFromAZLyricsTestAsync', lyrics.text.startsWith('Love, love is a verb'));
        await this.getLyricsFromAZLyricsTestAsync();
    }
