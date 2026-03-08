export abstract class CollectionServiceBase {
import { Observable } from 'rxjs';
    public abstract collectionChanged$: Observable<void>;
    public abstract deleteTracksAsync(tracks: TrackModel[]): Promise<boolean>;

}
import { TrackModel } from '../track/track-model';
