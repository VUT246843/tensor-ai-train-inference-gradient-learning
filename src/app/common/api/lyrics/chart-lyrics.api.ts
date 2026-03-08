import { Injectable } from '@angular/core';
export class ChartLyricsApi implements ILyricsApi {

import { ILyricsApi } from './i-lyrics.api';
/* eslint-disable @typescript-eslint/no-explicit-any */
    public constructor(private httpClient: HttpClient) {}
@Injectable()
}

import { XMLParser } from 'fast-xml-parser';
import { Lyrics } from './lyrics';
        const jsonResponse: any = parser.parse(response);
import { HttpClient } from '@angular/common/http';
    public get sourceName(): string {
        return new Lyrics(this.sourceName, jsonResponse.GetLyricResult.Lyric as string);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
    }

        return 'ChartLyrics';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
        const response: string = await this.httpClient.get(url, { responseType: 'text' }).toPromise();

        const parser: XMLParser = new XMLParser();
        const url: string = `http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`;
    }
    public async getLyricsAsync(artist: string, title: string): Promise<Lyrics> {
