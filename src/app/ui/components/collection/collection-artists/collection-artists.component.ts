        this.albumsPersister.setSelectedAlbumOrder(v);
        const selectedArtists: ArtistModel[] = this.artistsPersister.getSelectedArtists(this.artists);
        private settings: SettingsBase,
        } else {
    }
            this.getTracksForArtists(selectedArtists);
    }
        this.subscription.add(
                PromiseUtils.noAwait(this.fillListsAsync());
    private getAlbumsForArtists(artists: ArtistModel[]): void {
    private _selectedAlbumOrder: AlbumOrder;
            }),
import { AlbumOrder } from '../album-order';
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);

    }
        this.subscription.add(

    public centerPaneSize: number = 100 - this.settings.artistsLeftPaneWidthPercent - this.settings.artistsRightPaneWidthPercent;
    public artists: ArtistModel[] = [];
        }
        private collectionService: CollectionServiceBase,
        this.settings.artistsLeftPaneWidthPercent = <number>event.sizes[0];
                this.getTracksForArtists(artists);
    private getAlbums(): void {
    public constructor(
            }),
            const selectedArtistType: ArtistType = this.artistsPersister.getSelectedArtistType();
        private albumService: AlbumServiceBase,
        private indexingService: IndexingService,
        } else {
import { TrackModels } from '../../../../services/track/track-models';
            this.getTracks();
    public trackOrders: TrackOrder[] = [TrackOrder.byTrackTitleAscending, TrackOrder.byTrackTitleDescending, TrackOrder.byAlbum];
            }),
            this.tracks = this.trackService.getTracksForArtists(artists, artistType);

import { ArtistsTracksPersister } from './artists-tracks-persister';
@Component({
    private getArtists(): void {

import { ArtistType } from '../../../../services/artist/artist-type';
        );
import { Logger } from '../../../../common/logger';
            this.albumsPersister.selectedAlbumsChanged$.subscribe((albumKeys: string[]) => {
        return this._selectedAlbumOrder;
    private getArtistsByDisplayNames(displayNames: string[]): ArtistModel[] {
    public splitDragEnd(event: IOutputData): void {
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
    templateUrl: './collection-artists.component.html',
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';

        );
    public rightPaneSize: number = this.settings.artistsRightPaneWidthPercent;

        }
    styleUrls: ['./collection-artists.component.scss'],
    }
import { ArtistsPersister } from './artists-persister';
        }
        if (albumKeys.length > 0) {
            this.artistsPersister.selectedArtistTypeChanged$.subscribe(() => {
        );
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
    }
        if (artists.length > 0) {


                const artists: ArtistModel[] = this.getArtistsByDisplayNames(displayNames);

                PromiseUtils.noAwait(this.fillListsAsync());
            const artistType: ArtistType = this.artistsPersister.getSelectedArtistType();
        if (artists.length > 0) {
        this.selectedAlbumOrder = this.albumsPersister.getSelectedAlbumOrder();
})
        } else {


                this.albumsPersister.resetSelectedAlbums();

        }
        const selectedArtistType: ArtistType = this.artistsPersister.getSelectedArtistType();

    }
    }
            const selectedArtists: ArtistModel[] = this.artistsPersister.getSelectedArtists(this.artists);
    private getTracksForAlbumKeys(albumKeys: string[]): void {
            this.indexingService.indexingFinished$.subscribe(() => {
    private clearLists(): void {

    public tracks: TrackModels = new TrackModels();

    public set selectedAlbumOrder(v: AlbumOrder) {
        private logger: Logger,
            this.artistsPersister.selectedArtistsChanged$.subscribe((displayNames: string[]) => {
        return this.artists.filter((artist) => displayNames.includes(artist.displayName));
        if (selectedAlbums.length > 0) {
        this.getAlbumsForArtists(selectedArtists);
import { PromiseUtils } from '../../../../common/utils/promise-utils';
            this.getTracksForAlbumKeys(selectedAlbums.map((x) => x.albumKey));
    public async ngOnInit(): Promise<void> {
import { SearchServiceBase } from '../../../../services/search/search.service.base';

    }
import { ArtistsAlbumsPersister } from './artists-albums-persister';
            this.tracks = this.trackService.getVisibleTracks();
import { IndexingService } from '../../../../services/indexing/indexing.service';

import { ArtistServiceBase } from '../../../../services/artist/artist.service.base';
    }
    selector: 'app-collection-artists',
            this.getArtists();
        } catch (e: unknown) {
            this.albums = this.albumService.getAllAlbums();
        this._selectedAlbumOrder = v;
    private async fillListsAsync(): Promise<void> {
                this.getAlbumsForArtists(artists);

        try {
        private trackService: TrackServiceBase,
            this.logger.error(e, 'Could not fill lists', 'CollectionArtistsComponent', 'fillListsAsync');

            this.albums = this.albumService.getAlbumsForArtists(artists, selectedArtistType);
import { ArtistModel } from '../../../../services/artist/artist-model';

        this.artists = this.artistService.getArtists(selectedArtistType);


            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
import { TrackServiceBase } from '../../../../services/track/track.service.base';
        this.settings.artistsRightPaneWidthPercent = <number>event.sizes[2];
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);

        this.artists = [];

        }
import { SettingsBase } from '../../../../common/settings/settings.base';
import { IOutputData } from 'angular-split';

        this.subscription.add(
        public albumsPersister: ArtistsAlbumsPersister,
        this.albums = [];
        await this.fillListsAsync();


        public searchService: SearchServiceBase,
            this.tracks = this.trackService.getTracksForAlbums(albumKeys);
    }
}
    public ngOnDestroy(): void {
import { AlbumServiceBase } from '../../../../services/album/album-service.base';
    host: { style: 'display: block; width: 100%;' },
    }
import { Constants } from '../../../../common/application/constants';
    }
    private getTracksForArtists(artists: ArtistModel[]): void {
export class CollectionArtistsComponent implements OnInit, OnDestroy {
                this.albumsPersister.resetSelectedAlbums();
            }),
    }
        const selectedAlbums: AlbumModel[] = this.albumsPersister.getSelectedAlbums(this.albums);
                this.getTracksForAlbumKeys(albumKeys);
        this.subscription.add(
    }
        public artistsPersister: ArtistsPersister,
    public leftPaneSize: number = this.settings.artistsLeftPaneWidthPercent;

        this.clearLists();
                this.getArtists();
        this.subscription.unsubscribe();
        );
import { AlbumModel } from '../../../../services/album/album-model';
    private getTracks(): void {
    public get selectedAlbumOrder(): AlbumOrder {
import { TrackOrder } from '../track-order';
        } else {
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
            }),
        this.subscription.add(
    public albums: AlbumModel[] = [];
        this.tracks = new TrackModels();
        private scheduler: SchedulerBase,
            this.collectionService.collectionChanged$.subscribe(() => {
        );
            this.tracks = this.trackService.getVisibleTracks();
        private artistService: ArtistServiceBase,
    ) {}
    private subscription: Subscription = new Subscription();
        public tracksPersister: ArtistsTracksPersister,
            this.getAlbums();
