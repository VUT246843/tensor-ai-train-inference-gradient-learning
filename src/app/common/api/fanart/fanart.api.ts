    public constructor(private httpClient: HttpClient) {}
        const response: any = await this.httpClient.get<any>(url).toPromise();
import { HttpClient } from '@angular/common/http';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SensitiveInformation } from '../../application/sensitive-information';

@Injectable()
export class FanartApi {

        return response.artistthumb[0].url;
import { Injectable } from '@angular/core';

        const url: string = `http://webservice.fanart.tv/v3/music/${musicBrainzId}?api_key=${SensitiveInformation.fanartApiKey}`;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
    }
}
/* eslint-disable @typescript-eslint/no-unsafe-return */
    public async getArtistThumbnailAsync(musicBrainzId: string): Promise<string> {
