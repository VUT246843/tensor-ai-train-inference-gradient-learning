        this.tracks = this.trackService.getVisibleTracks();
    private getTracks(): void {
    public constructor(
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
    }
        );
        this.clearLists();
        this.subscription.add(
            this.getTracks();
        await this.fillListsAsync();

    public async ngOnInit(): Promise<void> {
    public ngOnDestroy(): void {

    providers: [MouseSelectionWatcher],
import { Logger } from '../../../../common/logger';


import { Constants } from '../../../../common/application/constants';
    private clearLists(): void {
import { PromiseUtils } from '../../../../common/utils/promise-utils';
            this.logger.error(e, 'Could not fill lists', 'CollectionTracksComponent', 'fillListsAsync');
    }
        this.tracks = new TrackModels();
import { Subscription } from 'rxjs';
            this.collectionService.collectionChanged$.subscribe(() => {
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
    }

@Component({
    ) {}
        }
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
        public searchService: SearchServiceBase,
    }
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);
    templateUrl: './collection-tracks.component.html',

                PromiseUtils.noAwait(this.fillListsAsync());
import { TrackModels } from '../../../../services/track/track-models';
})

}
        } catch (e: unknown) {

    public tracks: TrackModels = new TrackModels();
            }),
import { SearchServiceBase } from '../../../../services/search/search.service.base';
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
        this.subscription.unsubscribe();

        private collectionService: CollectionServiceBase,
        private logger: Logger,
import { Component, OnDestroy, OnInit } from '@angular/core';
    }

    host: { style: 'display: block; width: 100%;' },
        private trackService: TrackServiceBase,
    selector: 'app-collection-tracks',
    private subscription: Subscription = new Subscription();
export class CollectionTracksComponent implements OnInit, OnDestroy {
        try {
    private async fillListsAsync(): Promise<void> {
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    styleUrls: ['./collection-tracks.component.scss'],
        private scheduler: SchedulerBase,
