/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ILyricsApi } from './i-lyrics.api';
        const response: string = await this.httpClient.get(url, { responseType: 'text' }).toPromise();
import { Injectable } from '@angular/core';
import { Lyrics } from './lyrics';
    private buildUrl(artist: string, title: string): string {


        return data;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */



import * as cheerio from 'cheerio';
        lyrics = lyrics.slice(0, -2);
        data = data.replace(/\W/g, '');
    public constructor(private httpClient: HttpClient) {}
    }

            lyrics += line;
        }

            // @ts-ignore
        for (let i: number = 2; i < lyricsDiv.length; i++) {
        return `https://azlyrics.com/lyrics/${this.sanitizeForLink(artist)}/${this.sanitizeForLink(title)}.html`;
    public get sourceName(): string {
            const line: string = lyricsDiv[i].data != undefined ? `${lyricsDiv[i].data.substr(1)}\n` : ``;
        data = data.toLowerCase();
import { HttpClient } from '@angular/common/http';
import { CheerioAPI } from 'cheerio';

/* eslint-disable @typescript-eslint/restrict-template-expressions */

}
    private sanitizeForLink(data: string): string {

    public async getLyricsAsync(artist: string, title: string): Promise<Lyrics> {

    }
        return 'AZLyrics';
        let lyrics: string = '';
        const lyricsDiv = cheerioAPI('.col-xs-12.col-lg-8.text-center')[0].children[14].children;
        const cheerioAPI: CheerioAPI = cheerio.load(response);
export class AZLyricsApi implements ILyricsApi {
        // @ts-ignore

        const url: string = this.buildUrl(artist, title);
        return new Lyrics(this.sourceName, lyrics);
@Injectable()
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
    }

/* eslint-disable @typescript-eslint/no-unsafe-call */
    }
