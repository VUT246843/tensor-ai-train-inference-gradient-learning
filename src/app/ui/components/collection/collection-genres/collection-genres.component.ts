    private getTracksForAlbumKeys(albumKeys: string[]): void {
    }
        }
            this.tracks = this.trackService.getTracksForGenres(genres);
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);

                this.getTracksForGenres(genres);
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
    private getTracks(): void {
@Component({
        }
        private collectionService: CollectionServiceBase,
})
import { TrackOrder } from '../track-order';
    host: { style: 'display: block; width: 100%;' },

    private getTracksForGenres(genres: string[]): void {

    public trackOrders: TrackOrder[] = [TrackOrder.byTrackTitleAscending, TrackOrder.byTrackTitleDescending, TrackOrder.byAlbum];
            this.indexingService.indexingFinished$.subscribe(() => {
        public searchService: SearchServiceBase,

import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';

            const selectedGenres: GenreModel[] = this.genresPersister.getSelectedGenres(this.genres);
import { GenresPersister } from './genres-persister';
    private async fillListsAsync(): Promise<void> {
        } else {

    }
        this.getAlbumsForGenres(selectedGenres.map((x) => x.name));
            this.getTracks();
    }
        private indexingService: IndexingService,
    }
import { GenresTracksPersister } from './genres-tracks-persister';
import { Subscription } from 'rxjs';
import { Logger } from '../../../../common/logger';
    styleUrls: ['./collection-genres.component.scss'],
        if (genres.length > 0) {
    private clearLists(): void {

        this.subscription.add(
        } else {
            this.getGenres();

            this.genresPersister.selectedGenresChanged$.subscribe((genres: string[]) => {
        return this._selectedAlbumOrder;
                this.albumsPersister.resetSelectedAlbums();
}
import { IOutputData } from 'angular-split';
    private subscription: Subscription = new Subscription();
            this.collectionService.collectionChanged$.subscribe(() => {
        private albumService: AlbumServiceBase,
    }
    }
        this.albums = [];
            this.albums = this.albumService.getAlbumsForGenres(genres);
                PromiseUtils.noAwait(this.fillListsAsync());
        try {
        }
        public albumsPersister: GenresAlbumsPersister,
            this.tracks = this.trackService.getTracksForAlbums(albumKeys);
    }
            }),
        );
            this.getTracksForAlbumKeys(selectedAlbums.map((x) => x.albumKey));
                this.getTracksForAlbumKeys(albumKeys);
import { GenreServiceBase } from '../../../../services/genre/genre.service.base';
        if (genres.length > 0) {
        public genresPersister: GenresPersister,
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);
        this.settings.genresRightPaneWidthPercent = <number>event.sizes[2];
    }
            this.getTracksForGenres(selectedGenres.map((x) => x.name));
            }),
    }
        private scheduler: SchedulerBase,
    public async ngOnInit(): Promise<void> {
import { GenreModel } from '../../../../services/genre/genre-model';
            this.albums = this.albumService.getAllAlbums();
        this.subscription.add(
    }


            }),

            this.tracks = this.trackService.getVisibleTracks();
import { IndexingService } from '../../../../services/indexing/indexing.service';
        this.subscription.unsubscribe();
        this.clearLists();
        const selectedGenres: GenreModel[] = this.genresPersister.getSelectedGenres(this.genres);
    }
import { AlbumOrder } from '../album-order';
    selector: 'app-collection-genres',

        this.genres = [];
import { SearchServiceBase } from '../../../../services/search/search.service.base';
        this.tracks = new TrackModels();
    public albums: AlbumModel[] = [];
        private logger: Logger,
    templateUrl: './collection-genres.component.html',
        private settings: SettingsBase,
    public get selectedAlbumOrder(): AlbumOrder {
        private trackService: TrackServiceBase,
        const selectedAlbums: AlbumModel[] = this.albumsPersister.getSelectedAlbums(this.albums);
        }
            this.albumsPersister.selectedAlbumsChanged$.subscribe((albumKeys: string[]) => {
            this.logger.error(e, 'Could not fill lists', 'CollectionGenresComponent', 'fillListsAsync');
    ) {}

        this.albumsPersister.setSelectedAlbumOrder(v);
    private getAlbumsForGenres(genres: string[]): void {
    private _selectedAlbumOrder: AlbumOrder;

        this.settings.genresLeftPaneWidthPercent = <number>event.sizes[0];
import { GenresAlbumsPersister } from './genres-albums-persister';
import { TrackModels } from '../../../../services/track/track-models';

    public centerPaneSize: number = 100 - this.settings.genresLeftPaneWidthPercent - this.settings.genresRightPaneWidthPercent;
        }
    public leftPaneSize: number = this.settings.genresLeftPaneWidthPercent;
        this.selectedAlbumOrder = this.albumsPersister.getSelectedAlbumOrder();
import { TrackServiceBase } from '../../../../services/track/track.service.base';
        this.subscription.add(
    public splitDragEnd(event: IOutputData): void {
        } else {
    public set selectedAlbumOrder(v: AlbumOrder) {

        );
    public constructor(
        if (selectedAlbums.length > 0) {
import { AlbumServiceBase } from '../../../../services/album/album-service.base';
        public tracksPersister: GenresTracksPersister,
import { PromiseUtils } from '../../../../common/utils/promise-utils';
    public genres: GenreModel[] = [];
import { Component, OnDestroy, OnInit } from '@angular/core';
    public ngOnDestroy(): void {

        this.genres = this.genreService.getGenres();
        );

    private getAlbums(): void {
    public tracks: TrackModels = new TrackModels();

                PromiseUtils.noAwait(this.fillListsAsync());
    private getGenres(): void {
    public rightPaneSize: number = this.settings.genresRightPaneWidthPercent;

    }
        );
        if (albumKeys.length > 0) {

            }),
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
        await this.fillListsAsync();
            this.getAlbums();
        this.subscription.add(
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
    }
                this.getAlbumsForGenres(genres);

        } catch (e: unknown) {
        } else {
import { SettingsBase } from '../../../../common/settings/settings.base';


import { AlbumModel } from '../../../../services/album/album-model';
            this.tracks = this.trackService.getVisibleTracks();
        this._selectedAlbumOrder = v;
export class CollectionGenresComponent implements OnInit, OnDestroy {
import { Constants } from '../../../../common/application/constants';

        private genreService: GenreServiceBase,
