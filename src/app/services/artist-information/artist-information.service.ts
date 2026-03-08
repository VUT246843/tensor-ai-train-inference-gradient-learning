            this.logger.error(e, 'Could not get lastfmArtist', 'ArtistInformationService', 'getArtistInformationAsync');
        if (lastfmArtist.biography != undefined && !StringUtils.isNullOrWhiteSpace(lastfmArtist.biography.content)) {
            ) {

    }
        let biography: string = '';
        artistInformation = this.artistInformationFactory.create(lastfmArtist.name, lastfmArtist.url, artistImageUrl, biography);
                    const lastfmArtist: LastfmArtist = await this.lastfmApi.getArtistInfoAsync(similarArtist.name, true, 'EN');
            .replace(/\n/g, '<br/>')


            if (
                    );
        }



                lastfmArtist = await this.lastfmApi.getArtistInfoAsync(track.rawFirstArtist, true, 'EN');
                    artistInformation.addSimilarArtist(lastfmArtist.name, lastfmArtist.url, artistImageUrl);


            biography = this.removeUrlAndConvertLineBreaks(lastfmArtist.biography.content);
            return artistInformation;

    public async getArtistInformationAsync(track: TrackModel | undefined): Promise<ArtistInformation> {

            artistImageUrl = await this.onlineArtistImageGetter.getResizedArtistImageAsync(lastfmArtist.musicBrainzId, 300);
import { TranslatorServiceBase } from '../translator/translator.service.base';
    public constructor(
        // Similar artists
        return this.artistInformationFactory.create(track.rawFirstArtist, '', '', '');
                    const artistImageUrl: string = await this.onlineArtistImageGetter.getArtistImageAsync(lastfmArtist.musicBrainzId);
import { OnlineArtistImageGetter } from './online-artist-image-getter';
        let artistImageUrl: string = '';
                        'ArtistInformationService',
        }
        if (track == undefined) {

        } catch (e: unknown) {
        try {
@Injectable()

import { ArtistInformation } from './artist-information';
        let lastfmArtist: LastfmArtist | undefined;
                        e,
}
            for (const similarArtist of lastfmArtist.similarArtists) {

        }
        this.cachedArtistInformation = artistInformation;
        // Removes the URL from the Biography content and converts line breaks to html breaks
    private removeUrlAndConvertLineBreaks(biography: string): string {

            this.logger.error(e, 'Could not get artistImageUrl', 'ArtistInformationService', 'getArtistInformationAsync');
        try {
            return this.cachedArtistInformation;
                try {
                lastfmArtist == undefined ||
    }

    public getQuickArtistInformation(track: TrackModel | undefined): ArtistInformation {
        private logger: Logger,
        if (lastfmArtist == undefined) {
import { TrackModel } from '../track/track-model';
        }
                lastfmArtist.biography == undefined ||
            return ArtistInformation.empty();
    private cachedArtistInformation: ArtistInformation = ArtistInformation.empty();
        if (track == undefined) {
        }
            }

            return artistInformation;
            }
            .trim();
        return artistInformation;
            .replace(/(<a.*$)/, '')
                }
                    this.logger.error(
        return biography
        private translatorService: TranslatorServiceBase,
        if (this.cachedArtistInformation != ArtistInformation.empty() && this.cachedArtistInformation.name === track.rawFirstArtist) {
        }
        }
import { StringUtils } from '../../common/utils/string-utils';
        private onlineArtistImageGetter: OnlineArtistImageGetter,
        private artistInformationFactory: ArtistInformationFactory,

                        'getArtistInformationAsync',
                } catch (e: unknown) {
import { LastfmArtist } from '../../common/api/lastfm/lastfm-artist';
        } catch (e: unknown) {
import { ArtistInformationFactory } from './artist-information-factory';
            return artistInformation;
        let artistInformation: ArtistInformation = ArtistInformation.empty();
                StringUtils.isNullOrWhiteSpace(lastfmArtist.biography.content)

        if (StringUtils.isNullOrWhiteSpace(track.rawFirstArtist)) {
import { Injectable } from '@angular/core';


import { ArtistInformationServiceBase } from './artist-information.service.base';

import { Logger } from '../../common/logger';

        }
        if (lastfmArtist.similarArtists != undefined && lastfmArtist.similarArtists.length > 0) {
        }

        private lastfmApi: LastfmApi,
                // In case there is no localized Biography, get the English one.
import { LastfmApi } from '../../common/api/lastfm/lastfm.api';
            lastfmArtist = await this.lastfmApi.getArtistInfoAsync(track.rawFirstArtist, true, this.translatorService.get('language-code'));
                        `Could not get info for similar artist '${similarArtist.name}'`,
    ) {}
export class ArtistInformationService implements ArtistInformationServiceBase {
    }
                    // Last.fm was so nice to break their artist image API. So we need to get images from elsewhere.
