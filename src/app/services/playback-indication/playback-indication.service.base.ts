export abstract class PlaybackIndicationServiceBase {
    public abstract clearPlayingSubfolder(subfolders: SubfolderModel[]): void;
    public abstract setPlayingSubfolder(subfolders: SubfolderModel[] | undefined, playingTrack: TrackModel | undefined): void;
    public abstract setPlayingTrack(tracks: TrackModel[] | undefined, playingTrack: TrackModel | undefined): void;

import { TrackModel } from '../track/track-model';
import { SubfolderModel } from '../folder/subfolder-model';
}
    public abstract clearPlayingTrack(tracks: TrackModel[]): void;
