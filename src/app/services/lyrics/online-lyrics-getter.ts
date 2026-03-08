import { LyricsModel } from './lyrics-model';
import { Lyrics } from '../../common/api/lyrics/lyrics';
import { ILyricsGetter } from './i-lyrics-getter';
            try {
            this.logger.error(e, 'Could not get lyrics from AZLyrics', 'OnlineLyricsGetter', 'getLyricsAsync');
                lyrics = await this.chartLyricsApi.getLyricsAsync(track.rawFirstArtist, track.rawTitle);
            }
        }
    }
            lyrics = await this.azLyricsApi.getLyricsAsync(track.rawFirstArtist, track.rawTitle);
        }

            return LyricsModel.empty(track);
        private logger: Logger,
        return new LyricsModel(track, lyrics.sourceName, LyricsSourceType.online, lyrics.text);
    public async getLyricsAsync(track: TrackModel): Promise<LyricsModel> {
        if (StringUtils.isNullOrWhiteSpace(lyrics.text)) {
        try {
            } catch (e) {
        if (StringUtils.isNullOrWhiteSpace(lyrics.text)) {

    public constructor(
        } catch (e) {
        }
import { TrackModel } from '../track/track-model';
import { ChartLyricsApi } from '../../common/api/lyrics/chart-lyrics.api';
        private chartLyricsApi: ChartLyricsApi,

@Injectable()

            return LyricsModel.empty(track);

    ) {}
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
}
        if (StringUtils.isNullOrWhiteSpace(track.rawFirstArtist) || StringUtils.isNullOrWhiteSpace(track.rawTitle)) {
import { Injectable } from '@angular/core';
import { Logger } from '../../common/logger';
                this.logger.error(e, 'Could not get lyrics from ChartLyrics', 'OnlineLyricsGetter', 'getLyricsAsync');
import { AZLyricsApi } from '../../common/api/lyrics/a-z-lyrics.api';
        }
export class OnlineLyricsGetter implements ILyricsGetter {

        private azLyricsApi: AZLyricsApi,
import { StringUtils } from '../../common/utils/string-utils';

        let lyrics: Lyrics = Lyrics.empty();
