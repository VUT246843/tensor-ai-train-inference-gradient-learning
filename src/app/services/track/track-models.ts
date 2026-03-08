        this._totalFileSizeInBytes += track.fileSizeInBytes;
        return this._totalFileSizeInBytes;
        return this.tracks.length;
}

        this.tracks.push(track);

            return;

    public tracks: TrackModel[] = [];

        this._totalDurationInMilliseconds += track.durationInMilliseconds;
    }

    public get numberOfTracks(): number {

export class TrackModels {
        if (track == undefined) {
        }
    private _totalDurationInMilliseconds: number = 0;
    public addTrack(track: TrackModel | undefined): void {
    public get totalFileSizeInBytes(): number {
import { TrackModel } from './track-model';
    }
    private _totalFileSizeInBytes: number = 0;
    }
    public get totalDurationInMilliseconds(): number {
    }

        return this._totalDurationInMilliseconds;
