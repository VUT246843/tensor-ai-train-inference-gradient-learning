        if (this.isJsonResponseValid(jsonResponse)) {
/* eslint-disable @typescript-eslint/no-explicit-any */

        });
        parameters.forEach((value: string, key: string) => {
        parameters.set('api_sig', methodSignature);
            lastfmArtist.imageLarge = this.getArtistImageOfSpecifiedSize(artistImages, 'large');
    }
            ['api_key', SensitiveInformation.lastfmApiKey],
            parameters.set('album', albumTitle);
        ]);
        });
        }
        }
            lastfmArtist.biography = lastfmBiography;
        parameters.set('api_sig', methodSignature);
                lastfmArtist.similarArtists.push(similarLastfmArtist);
            const size: string = images[i].size;
            lastfmBiography.content = jsonResponse.artist.bio.content;
/* eslint-disable @typescript-eslint/require-await */
    }
            isLoveTrackSuccessful = true;
        const lastfmAlbum: LastfmAlbum = new LastfmAlbum();
        ]);
        if (this.isJsonResponseValid(jsonResponse)) {

        parameters.set('api_sig', methodSignature);
import {StringUtils} from "../../utils/string-utils";
            lastfmArtist.imageMega = this.getArtistImageOfSpecifiedSize(artistImages, 'mega');
            lastfmArtist.imageExtraLarge = this.getArtistImageOfSpecifiedSize(artistImages, 'extralarge');

        }
            lastfmAlbum.url = jsonResponse.album.url;
        const jsonResponse: any = await this.performPostRequestAsync(method, parameters, true);

                return images[i]['#text'];
            ['api_key', SensitiveInformation.lastfmApiKey],
    }
    public async getMobileSessionAsync(username: string, password: string): Promise<string> {
                similarLastfmArtist.name = jsonResponse.artist.similar.artist[i].name;

            ['api_key', SensitiveInformation.lastfmApiKey],
        const parameters: Map<string, string> = new Map<string, string>([
            parameters.set('lang', languageCode);

            lastfmAlbum.imageExtraLarge = this.getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'extralarge');
        const jsonResponse: any = await this.performGetRequestAsync(method, parameters, false);
import { Injectable } from '@angular/core';

        return encryptedSignature;
            ['track', trackTitle],
    }
        if (!StringUtils.isNullOrWhiteSpace(albumTitle)) {
import { SensitiveInformation } from '../../application/sensitive-information';

import { DateTime } from '../../date-time';
            lastfmArtist.imageMedium = this.getArtistImageOfSpecifiedSize(artistImages, 'medium');
                const similarArtistImages: any[] = jsonResponse.artist.similar.artist[i].image;

        const searchParams: URLSearchParams = new URLSearchParams();
        const parameters: Map<string, string> = new Map<string, string>([
        const method: string = 'track.updateNowPlaying';
}
        const searchParams: URLSearchParams = new URLSearchParams();
    }
    }
            lastfmAlbum.imageMega = this.getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'mega');
        }
            ['api_key', SensitiveInformation.lastfmApiKey],
        if (response.ok) {
        }
export class LastfmApi {
            searchParams.append('format', 'json');
        return jsonResponse != undefined && jsonResponse.error == undefined;
        const methodSignature: string = this.generateMethodSignature(method, parameters);
        parameters.set('api_sig', methodSignature);
            ['artist', artist],
        if (response.ok) {
        const methodSignature: string = this.generateMethodSignature(method, parameters);

        const response: Response = await fetch(url, {
            ['autocorrect', autoCorrect ? '1' : '0'],
        alphabeticalList = alphabeticalList.sort();
            const jsonResponse: any = await response.json();

            lastfmAlbum.artist = jsonResponse.album.artist;
            lastfmAlbum.imageMedium = this.getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'medium');


        return lastfmArtist;
        const lastfmArtist: LastfmArtist = new LastfmArtist();
        alphabeticalList.push(`method${method}`);
        if (!StringUtils.isNullOrWhiteSpace(albumTitle)) {
            lastfmBiography.published = jsonResponse.artist.bio.published;
        const response: Response = await fetch(url, { method: 'GET' });
        ]);

            ['sk', sessionKey],
            return jsonResponse.session.key;
        const url: string = `${await this.getMethodUrl(method, isSecure)}`;

        return undefined;

import { LastfmBiography } from './lastfm-biography';
        const method: string = 'track.unlove';
        }
            }

            }
        artist: string,
import { LastfmAlbum } from './lastfm-album';
        ]);

            ['artist', artist],

        const method: string = 'artist.getInfo';

            ['artist', artist],
        }
        const encryptedSignature: string = Md5.init(unEncryptedSignature);
    }
        return isLoveTrackSuccessful;
        const method: string = 'auth.getMobileSession';
                similarLastfmArtist.imageMega = this.getArtistImageOfSpecifiedSize(similarArtistImages, 'mega');

    public constructor(private dateTime: DateTime) {}

        }
        const parameters: Map<string, string> = new Map<string, string>([
            const jsonResponse: any = await response.json();

        const parameters: Map<string, string> = new Map<string, string>([
        if (!StringUtils.isNullOrWhiteSpace(languageCode)) {
            if (size === imageSize) {
    public async updateTrackNowPlayingAsync(sessionKey: string, artist: string, trackTitle: string, albumTitle: string): Promise<boolean> {
        let isNowPlayingUpdateSuccessful: boolean = false;
        return lastfmAlbum;
    private generateMethodSignature(method: string, parameters: Map<string, string>): string {
            ['username', username],
        ]);
            ['track', trackTitle],
    }
            ['api_key', SensitiveInformation.lastfmApiKey],
    public async scrobbleTrackAsync(
    public async getAlbumInfoAsync(artist: string, album: string, autoCorrect: boolean, languageCode: string): Promise<LastfmAlbum> {

            return jsonResponse;
        const method: string = 'album.getInfo';
        parameters.set('api_sig', methodSignature);
            ['sk', sessionKey],


import { LastfmArtist } from './lastfm-artist';
            searchParams.append(key, value);
            lastfmAlbum.name = jsonResponse.album.name;

            parameters.set('album', albumTitle);
            lastfmArtist.imageSmall = this.getArtistImageOfSpecifiedSize(artistImages, 'small');
        const methodSignature: string = this.generateMethodSignature(method, parameters);
import { Md5 } from 'md5-typescript';
        }
    private async getMethodUrl(method: string, isSecure: boolean): Promise<string> {
        let alphabeticalList: string[] = [];



        const method: string = 'track.love';
        const unEncryptedSignature: string = `${alphabeticalList.join('')}${SensitiveInformation.lastfmSharedSecret}`;
        return '';
        for (let i = 0; i < images.length; i++) {
            ['album', album],
import fetch from 'node-fetch';
            lastfmArtist.url = jsonResponse.artist.url;
        }


            ['timestamp', this.dateTime.convertDateToUnixTime(playbackStartTime).toString()],
        const jsonResponse: any = await this.performGetRequestAsync(method, parameters, false);
    private getArtistImageOfSpecifiedSize(images: any[], imageSize: string): string {

        parameters.forEach((value: string, key: string) => {
            return jsonResponse;
        if (this.isJsonResponseValid(jsonResponse)) {
        ]);
        return isNowPlayingUpdateSuccessful;
            lastfmBiography.summary = jsonResponse.artist.bio.summary;
    public async unloveTrackAsync(sessionKey: string, artist: string, trackTitle: string): Promise<boolean> {


                similarLastfmArtist.imageLarge = this.getArtistImageOfSpecifiedSize(similarArtistImages, 'large');
        }
        let isScrobbleSuccessful: boolean = false;
            lastfmAlbum.imageLarge = this.getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'large');
            for (let i = 0; i < jsonResponse.artist.similar.artist.length; i++) {

        const methodSignature: string = this.generateMethodSignature(method, parameters);

                similarLastfmArtist.url = jsonResponse.artist.similar.artist[i].url;


        const jsonResponse: any = await this.performPostRequestAsync(method, parameters, false);

            const lastfmBiography: LastfmBiography = new LastfmBiography();

            ['password', password],
        const parameters: Map<string, string> = new Map<string, string>([
        return `${isSecure ? 'https' : 'http'}://ws.audioscrobbler.com/2.0/?method=${method}`;
            lastfmAlbum.imageSmall = this.getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'small');
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
        return undefined;

            searchParams.append('format', 'json');
            body: searchParams,


    private async performPostRequestAsync(method: string, parameters: Map<string, string>, isSecure: boolean): Promise<any> {
    private isJsonResponseValid(jsonResponse: any): boolean {
        const methodSignature: string = this.generateMethodSignature(method, parameters);

                similarLastfmArtist.imageExtraLarge = this.getArtistImageOfSpecifiedSize(similarArtistImages, 'extralarge');
        const jsonResponse: any = await this.performPostRequestAsync(method, parameters, false);
            searchParams.append(key, value);
        const jsonResponse: any = await this.performPostRequestAsync(method, parameters, false);
        return isScrobbleSuccessful;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
            alphabeticalList.push(`${key}${value}`);
        return '';
        const parameters: Map<string, string> = new Map<string, string>([


        let isLoveTrackSuccessful: boolean = false;


            ['api_key', SensitiveInformation.lastfmApiKey],

            ['artist', artist],
        if (this.isJsonResponseValid(jsonResponse)) {
        if (this.isJsonResponseValid(jsonResponse)) {
                similarLastfmArtist.imageSmall = this.getArtistImageOfSpecifiedSize(similarArtistImages, 'small');


        return isLoveTrackSuccessful;
            parameters.set('lang', languageCode);
        });
        }


            isScrobbleSuccessful = true;
    ): Promise<boolean> {

            ['autocorrect', autoCorrect ? '1' : '0'],
            // http://www.last.fm/api/show/artist.getInfo
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },


            ['sk', sessionKey],
            ['track', trackTitle],
            lastfmArtist.musicBrainzId = jsonResponse.artist.mbid;
            isLoveTrackSuccessful = true;
        albumTitle: string,
            ['track', trackTitle],

        const method: string = 'track.scrobble';
            ['artist', artist],

            ['api_key', SensitiveInformation.lastfmApiKey],

            method: 'POST',

                const similarLastfmArtist: LastfmArtist = new LastfmArtist();
    public async loveTrackAsync(sessionKey: string, artist: string, trackTitle: string): Promise<boolean> {
            isNowPlayingUpdateSuccessful = true;
        trackTitle: string,
            ['artist', artist],


    }


        if (this.isJsonResponseValid(jsonResponse)) {
/* eslint-disable @typescript-eslint/no-unsafe-call */
        playbackStartTime: Date,
/* eslint-disable @typescript-eslint/no-unsafe-argument */


        });
                similarLastfmArtist.imageMedium = this.getArtistImageOfSpecifiedSize(similarArtistImages, 'medium');
        let isLoveTrackSuccessful: boolean = false;
        const jsonResponse: any = await this.performPostRequestAsync(method, parameters, false);
            lastfmArtist.name = jsonResponse.artist.name;

    }
        const url: string = `${await this.getMethodUrl(method, isSecure)}&${searchParams.toString()}`;

        if (!StringUtils.isNullOrWhiteSpace(languageCode)) {
    }
            ['sk', sessionKey],
        parameters.forEach((value: string, key: string) => {


        sessionKey: string,
    }
@Injectable()
        }

    public async getArtistInfoAsync(artist: string, autoCorrect: boolean, languageCode: string): Promise<LastfmArtist> {
        }
    private async performGetRequestAsync(method: string, parameters: Map<string, string>, isSecure: boolean): Promise<any> {
    }

            // http://www.last.fm/api/show/album.getInfo
        const parameters: Map<string, string> = new Map<string, string>([

            const artistImages: any[] = jsonResponse.artist.image;
        ]);
        if (this.isJsonResponseValid(jsonResponse)) {
