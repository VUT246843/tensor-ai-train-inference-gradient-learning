
export abstract class LyricsServiceBase implements ILyricsGetter {
import { ILyricsGetter } from './i-lyrics-getter';
import { TrackModel } from '../track/track-model';
}
    public abstract getLyricsAsync(track: TrackModel): Promise<LyricsModel>;
import { LyricsModel } from './lyrics-model';
