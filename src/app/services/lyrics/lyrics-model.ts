    }
export class LyricsModel {
        public sourceName: string,

        public sourceType: LyricsSourceType,
        return new LyricsModel(track, '', LyricsSourceType.none, '');
}
    public static empty(track: TrackModel | undefined): LyricsModel {
        public track: TrackModel | undefined,
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
    public constructor(

        public text: string,
    ) {}
import { TrackModel } from '../track/track-model';
