        const timer = new Timer();

    private orderArtists(): void {
        this.subscription.unsubscribe();
import { TrackServiceBase } from '../../../../../services/track/track.service.base';
    public readonly artistOrders: ArtistOrder[] = Object.values(ArtistOrder).filter((x): x is ArtistOrder => typeof x === 'number');
        this.orderArtists();
        }

            );
        return this._artistsPersister;
            this.semanticZoomService.zoomInRequested$.subscribe((text: string) => {
import { SemanticZoomHeaderAdder } from '../../../../../common/semantic-zoom-header-adder';
    @Input()



            }),
            orderedArtists = this.semanticZoomHeaderAdder.addZoomHeaders(orderedArtists) as ArtistModel[];
import { ArtistModel } from '../../../../../services/artist/artist-model';
            }),

        return this._artists;
    private applySelectedArtists(): void {
import { Constants } from '../../../../../common/application/constants';
    }
import { ArtistOrder, artistOrderKey } from './artist-order';
        this.contextMenuOpener.open(this.artistContextMenu, event, artist);
    public artistContextMenu: MatMenuTrigger;
    public selectedArtistOrder: ArtistOrder;
import { PromiseUtils } from '../../../../../common/utils/promise-utils';
    private _artistsPersister: ArtistsPersister;
        public playbackService: PlaybackService,
                this.shouldZoomOut = true;

        await this.playbackService.addArtistToQueueAsync(artist, this.selectedArtistType);
            this.viewPort.scrollToIndex(selectedIndex, 'smooth');
export class ArtistBrowserComponent implements OnInit, OnDestroy {


        } catch (e: unknown) {
    public ngOnInit(): void {
            this.applySelectedArtists();
    private async scrollToZoomHeaderAsync(text: string): Promise<void> {

    providers: [MouseSelectionWatcher],
    public readonly artistOrderKey = artistOrderKey;
        this.orderedArtists = [...orderedArtists];

                'orderArtists',
        await this.playbackService.enqueueAndPlayArtistAsync(artist, this.selectedArtistType);
        private logger: Logger,
    public orderedArtists: ArtistModel[] = [];
    host: { style: 'display: block' },
        }

        // When the component is first rendered, it happens that artistsPersister is undefined.
        if (selectedIndex > -1) {
                    break;
        await this.scheduler.sleepAsync(Constants.semanticZoomInDelayMilliseconds);
        this.selectedArtistOrder = artistOrder;
        private artistSorter: ArtistSorter,
    }

import { MatMenuTrigger } from '@angular/material/menu';
    templateUrl: './artist-browser.component.html',
        this.shouldZoomOut = false;
import { Timer } from '../../../../../common/scheduling/timer';
        let orderedArtists: ArtistModel[] = [];
                case ArtistOrder.byArtistDescending:

    public applyArtistOrder = (artistOrder: ArtistOrder): void => {


        public addToPlaylistMenu: AddToPlaylistMenu,

        const selectedArtists: ArtistModel[] = this.artistsPersister.getSelectedArtists(this.artists);
    };
            this.mouseSelectionWatcher.setSelectedItems(event, artistToSelect);
    }
    public shouldZoomOut: boolean = false;
        if (artist == undefined) {
                    orderedArtists = this.artistSorter.sortAscending(this.artists);
        for (const selectedArtist of selectedArtists) {
import { SchedulerBase } from '../../../../../common/scheduling/scheduler.base';
        }
    public get artistsPersister(): ArtistsPersister {
            }
                    break;
@Component({
    public set artistsPersister(v: ArtistsPersister) {
    }

import { ArtistsPersister } from '../artists-persister';
    public async shuffleAllAsync(): Promise<void> {
        this.playbackService.forceShuffled();
        this._artistsPersister = v;
        private scheduler: SchedulerBase,
            this.applicationService.mouseButtonReleased$.subscribe(() => {
    }
                case ArtistOrder.byArtistAscending:
    }
    @Input()
    public onArtistContextMenu(event: MouseEvent, artist: ArtistModel): void {
        this._artists = v;
        this.playbackService.forceShuffled();
        private semanticZoomHeaderAdder: SemanticZoomHeaderAdder,
    }
import { ArtistType, artistTypeKey } from '../../../../../services/artist/artist-type';
import { Logger } from '../../../../../common/logger';
    }

            this.orderArtists();
    private subscription: Subscription = new Subscription();
        );
import { ContextMenuOpener } from '../../../context-menu-opener';
    public readonly artistTypeKey = artistTypeKey;
import { ArtistSorter } from '../../../../../common/sorting/artist-sorter';
    public applyArtistType = (artistType: ArtistType): void => {

        );
        private semanticZoomService: SemanticZoomServiceBase,
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
            this.artistsPersister.setSelectedArtists(this.mouseSelectionWatcher.selectedItems as ArtistModel[]);
    @ViewChild(CdkVirtualScrollViewport) public viewPort: CdkVirtualScrollViewport;
            timer.stop();
        timer.start();
    }
        }
            this.logger.error(e, 'Could not order artists', 'ArtistBrowserComponent', 'orderArtists');
    public set artists(v: ArtistModel[]) {
            selectedArtist.isSelected = true;
        if (this.artistsPersister != undefined) {


    public async onAddToQueueAsync(artist: ArtistModel): Promise<void> {

        try {

    selector: 'app-artist-browser',
import { PlaybackService } from '../../../../../services/playback/playback.service';
    }
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

    public async onShuffleAndPlayAsync(artist: ArtistModel): Promise<void> {
                'ArtistBrowserComponent',
                    break;
                    orderedArtists = this.artistSorter.sortDescending(this.artists);
        const tracks: TrackModels = this.trackService.getVisibleTracks();

    }
        this.subscription.add(
        public trackService: TrackServiceBase,


    public readonly artistTypes: ArtistType[] = Object.values(ArtistType).filter((x): x is ArtistType => typeof x === 'number');
        if (!artistToSelect.isZoomHeader) {
import { Subscription } from 'rxjs';
    public get artists(): ArtistModel[] {
    ) {}
        }
    styleUrls: ['./artist-browser.component.scss'],
            this.semanticZoomService.zoomOutRequested$.subscribe(() => {
        const selectedIndex = this.orderedArtists.findIndex((elem) => elem.zoomHeader === text && elem.isZoomHeader);

        this.selectedArtistType = artistType;
                PromiseUtils.noAwait(this.scrollToZoomHeaderAsync(text));
        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);


        this.subscription.add(
import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';


    public selectedArtistType: ArtistType;
                `Finished ordering artists. Time required: ${timer.elapsedMilliseconds} ms`,
    public setSelectedArtists(event: MouseEvent, artistToSelect: ArtistModel): void {
import { TrackModels } from '../../../../../services/track/track-models';
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
        }
        this.subscription.add(
        this.mouseSelectionWatcher.initialize(this.artists, false);
    }
        );

})
            return;
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
                this.shouldZoomOut = false;
        this.artistsPersister.setSelectedArtistOrder(this.selectedArtistOrder);
            switch (this.selectedArtistOrder) {
            }),
        this.orderArtists();

        private applicationService: ApplicationServiceBase,
        public contextMenuOpener: ContextMenuOpener,

                default: {

    };
    public ngOnDestroy(): void {

            this.logger.info(
        public mouseSelectionWatcher: MouseSelectionWatcher,

                }
    }
        this.selectedArtistOrder = this.artistsPersister.getSelectedArtistOrder();
                    orderedArtists = this.artistSorter.sortAscending(this.artists);
    }
    @ViewChild('artistContextMenuAnchor', { read: MatMenuTrigger, static: false })
    public constructor(
    private _artists: ArtistModel[] = [];
        this.artistsPersister.setSelectedArtistType(this.selectedArtistType);

        this.selectedArtistType = this.artistsPersister.getSelectedArtistType();
}
