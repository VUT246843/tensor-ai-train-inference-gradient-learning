    }
    public set selectedAlbumOrder(v: AlbumOrder) {
        private albumService: AlbumServiceBase,
    public splitDragEnd(event: IOutputData): void {
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
import { SettingsBase } from '../../../../common/settings/settings.base';
        this.getTracksForAlbumKeys(selectedAlbums.map((x) => x.albumKey));
            }),

    }
import { AlbumOrder } from '../album-order';
    }
    private getTracksForAlbumKeys(albumKeys: string[]): void {
        this.selectedAlbumOrder = this.albumsPersister.getSelectedAlbumOrder();
        }

import { IOutputData } from 'angular-split';

    public albums: AlbumModel[] = [];
            this.collectionService.collectionChanged$.subscribe(() => {
            this.logger.error(e, 'Could not fill lists', 'CollectionAlbumsComponent', 'fillListsAsync');
    public leftPaneSize: number = 100 - this.settings.albumsRightPaneWidthPercent;
        const selectedAlbums: AlbumModel[] = this.albumsPersister.getSelectedAlbums(this.albums);
                PromiseUtils.noAwait(this.fillListsAsync());

    public tracks: TrackModels = new TrackModels();
        try {
    ) {}
    public get selectedAlbumOrder(): AlbumOrder {
        } else {

    templateUrl: './collection-albums.component.html',
        );
        public albumsPersister: AlbumsAlbumsPersister,
        private collectionService: CollectionServiceBase,
import { TrackOrder } from '../track-order';
        this.clearLists();
        private scheduler: SchedulerBase,
    private getAlbums(): void {
        );
import { Constants } from '../../../../common/application/constants';
    private clearLists(): void {
    private getTracks(): void {
            this.tracks = this.trackService.getTracksForAlbums(albumKeys);



    public async ngOnInit(): Promise<void> {
        this.albums = [];
    styleUrls: ['./collection-albums.component.scss'],
        private logger: Logger,
import { AlbumServiceBase } from '../../../../services/album/album-service.base';
    public constructor(
        this.albums = this.albumService.getAllAlbums();
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
    host: { style: 'display: block; width: 100%;' },
import { SearchServiceBase } from '../../../../services/search/search.service.base';
                this.getTracksForAlbumKeys(albumKeys);
        if (albumKeys.length > 0) {
    }
    }
        }
            }),
    }
                PromiseUtils.noAwait(this.fillListsAsync());
            this.getTracks();
        await this.fillListsAsync();
        this.subscription.add(
    }
import { AlbumsTracksPersister } from './albums-tracks-persister';
            this.getAlbums();
            }),
            this.indexingService.indexingFinished$.subscribe(() => {
        this.subscription.add(
        } catch (e: unknown) {
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    public trackOrders: TrackOrder[] = [TrackOrder.byTrackTitleAscending, TrackOrder.byTrackTitleDescending, TrackOrder.byAlbum];

import { Subscription } from 'rxjs';
        this.albumsPersister.setSelectedAlbumOrder(v);
    }
    private subscription: Subscription = new Subscription();
import { Logger } from '../../../../common/logger';
        return this._selectedAlbumOrder;
    private async fillListsAsync(): Promise<void> {

import { AlbumModel } from '../../../../services/album/album-model';

    public rightPaneSize: number = this.settings.albumsRightPaneWidthPercent;
        this._selectedAlbumOrder = v;
        this.tracks = new TrackModels();


})

import { IndexingService } from '../../../../services/indexing/indexing.service';
    }
    selector: 'app-collection-albums',


        private settings: SettingsBase,
}
import { AlbumsAlbumsPersister } from './albums-albums-persister';
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);
        this.subscription.add(
            this.albumsPersister.selectedAlbumsChanged$.subscribe((albumKeys: string[]) => {
        public tracksPersister: AlbumsTracksPersister,

    private _selectedAlbumOrder: AlbumOrder;
import { PromiseUtils } from '../../../../common/utils/promise-utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
    }
        this.settings.albumsRightPaneWidthPercent = <number>event.sizes[1];
        private indexingService: IndexingService,
            this.tracks = this.trackService.getVisibleTracks();
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);

        this.subscription.unsubscribe();

import { TrackModels } from '../../../../services/track/track-models';
        );
        private trackService: TrackServiceBase,
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
@Component({
export class CollectionAlbumsComponent implements OnInit, OnDestroy {
    public ngOnDestroy(): void {
        public searchService: SearchServiceBase,
