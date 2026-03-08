
        return lyrics;
        private embeddedLyricsGetter: EmbeddedLyricsGetter,
        let lyrics: LyricsModel = LyricsModel.empty(track);
        this.cachedLyrics = lyrics;
            this.logger.error(e, 'Could not get embedded lyrics', 'LyricsService', 'getLyricsAsync');
            lyrics = await this.lrcLyricsGetter.getLyricsAsync(track);
        private logger: Logger,
        if (this.cachedLyrics?.track != undefined && track != undefined && this.cachedLyrics.track.path === track.path) {
import { LrcLyricsGetter } from './lrc-lyrics-getter';
export class LyricsService implements LyricsServiceBase {
        } catch (e: unknown) {


            lyrics = await this.embeddedLyricsGetter.getLyricsAsync(track);
        }
            this.logger.error(e, 'Could not get LRC lyrics', 'LyricsService', 'getLyricsAsync');
    }

import { Logger } from '../../common/logger';
        try {

import { StringUtils } from '../../common/utils/string-utils';
import { EmbeddedLyricsGetter } from './embedded-lyrics-getter';

import { LyricsModel } from './lyrics-model';
                lyrics = await this.onlineLyricsGetter.getLyricsAsync(track);
        }

import { TrackModel } from '../track/track-model';

        if (!StringUtils.isNullOrWhiteSpace(lyrics.text)) {
    public constructor(
        if (!StringUtils.isNullOrWhiteSpace(lyrics.text)) {
import { SettingsBase } from '../../common/settings/settings.base';


        if (this.settings.downloadLyricsOnline) {
        private settings: SettingsBase,
import { OnlineLyricsGetter } from './online-lyrics-getter';
        } catch (e: unknown) {
        }
            } catch (e: unknown) {
            try {
        }
            }
        }
    private cachedLyrics: LyricsModel | undefined;
    ) {}
@Injectable()
            return this.cachedLyrics;
            return lyrics;
import { LyricsServiceBase } from './lyrics.service.base';
}
        }
                this.logger.error(e, 'Could not get online lyrics', 'LyricsService', 'getLyricsAsync');
    public async getLyricsAsync(track: TrackModel): Promise<LyricsModel> {
import { Injectable } from '@angular/core';
        try {

        private onlineLyricsGetter: OnlineLyricsGetter,
            return lyrics;
        private lrcLyricsGetter: LrcLyricsGetter,
