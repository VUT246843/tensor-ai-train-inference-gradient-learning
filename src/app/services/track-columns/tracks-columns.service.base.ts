import { Observable } from 'rxjs';
    public abstract getTracksColumnsVisibility(): TracksColumnsVisibility;


}
    public abstract tracksColumnsOrderChanged$: Observable<TracksColumnsOrder>;
    public abstract setTracksColumnsVisibility(tracksColumnsVisibility: TracksColumnsVisibility): void;
    public abstract getTracksColumnsOrder(): TracksColumnsOrder;
export abstract class TracksColumnsServiceBase {
import { TracksColumnsOrderColumn } from './tracks-columns-order-column';
    public abstract setTracksColumnsOrder(tracksColumnsOrder: TracksColumnsOrderColumn): void;
import { TracksColumnsOrder } from './tracks-columns-order';
    public abstract tracksColumnsVisibilityChanged$: Observable<TracksColumnsVisibility>;
import { TracksColumnsVisibility } from './tracks-columns-visibility';
