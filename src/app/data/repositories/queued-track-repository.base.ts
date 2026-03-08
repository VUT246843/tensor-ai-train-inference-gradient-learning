    public abstract getSavedQueuedTracks(): QueuedTrack[] | undefined;
}
    public abstract saveQueuedTracks(tracks: QueuedTrack[]): void;
export abstract class QueuedTrackRepositoryBase {

import { QueuedTrack } from '../entities/queued-track';
