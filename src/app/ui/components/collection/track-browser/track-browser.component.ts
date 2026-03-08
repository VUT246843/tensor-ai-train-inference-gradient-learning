    templateUrl: './track-browser.component.html',
    public selectedTrackOrder: TrackOrder;
            }
            previousDiscNumber = discNumber;
                track.rating = trackWithUpToDateRating.rating;
    public ngOnDestroy(): void {
import { Timer } from '../../../../common/scheduling/timer';

            switch (this.selectedTrackOrder) {

        this.subscription.add(
                    break;
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
                this.playbackIndicationService.setPlayingTrack(this.orderedTracks, playbackStarted.currentTrack);
import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

    public showOrdering: boolean = true;
        for (const track of this.tracks.tracks) {

                case TrackOrder.none:
import { GuidFactory } from '../../../../common/guid.factory';
        }
        public addToPlaylistMenu: AddToPlaylistMenu,
            logger,
                    this.hideAllHeaders(orderedTracks);
    }
                    break;
    }
            'orderTracks',
}
                default: {
    public readonly trackOrders: TrackOrder[] = [];
        this.playbackIndicationService.setPlayingTrack(this.orderedTracks, this.playbackService.currentTrack);
    @ViewChild('trackContextMenuAnchor', { read: MatMenuTrigger, static: false })
            if (track.path === trackWithUpToDateLove.path) {
        this.subscription.add(
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
import { TrackModels } from '../../../../services/track/track-models';
        return this._tracks;
            addToPlaylistMenu,
    encapsulation: ViewEncapsulation.None,
        timer.start();
    }
                this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
        this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
                    this.hideAllHeaders(orderedTracks);


            }),

@Component({
                this.updateTrackLove(track);
        this.logger.info(

    public ngOnInit(): void {
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

        public contextMenuOpener: ContextMenuOpener,

        }
                    orderedTracks = this.trackSorter.sortByTitleDescending(this.tracks.tracks);
    private updateTrackLove(trackWithUpToDateLove: TrackModel): void {
            'TrackBrowserComponent',
        public mouseSelectionWatcher: MouseSelectionWatcher,
            translatorService,
    public get tracksPersister(): BaseTracksPersister {
            if (track.path === trackWithUpToDateRating.path) {
            }

import { Subscription } from 'rxjs';
import { TrackModel } from '../../../../services/track/track-model';
        timer.stop();
        collectionService: CollectionServiceBase,
        this.mouseSelectionWatcher.initialize(this.tracks.tracks, false);

        }
    }
                case TrackOrder.byDateCreatedAscending:
    selector: 'app-track-browser',
        let previousAlbumKey: string = this.guidFactory.create();
                    break;
        private guidFactory: GuidFactory,
                }
import { TrackServiceBase } from '../../../../services/track/track.service.base';
        const timer = new Timer();
            this.logger.error(e, 'Could not order tracks', 'TrackBrowserComponent', 'orderTracks');
    private updateTrackRating(trackWithUpToDateRating: TrackModel): void {
            }),
    }

            }),
            }
    public applyTrackOrder = (trackOrder: TrackOrder): void => {
        this.orderTracks();
        this.subscription.add(
            playbackService,
        );
    @Input()
                case TrackOrder.byAlbum:
            this.metadataService.ratingSaved$.subscribe((track: TrackModel) => {

            desktop,
        this.orderedTracks = [...orderedTracks];
        logger: Logger,

    ) {
                    this.hideAllHeaders(orderedTracks);
        );
                    break;
        } catch (e: unknown) {

    private showAlbumHeaders(orderedTracks: TrackModel[]): void {
    }
        );
            `Finished ordering tracks. Time required: ${timer.elapsedMilliseconds} ms`,
    }
                    orderedTracks = this.trackSorter.sortByTitleAscending(this.tracks.tracks);
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
                    this.hideAllHeaders(orderedTracks);
                case TrackOrder.byTrackTitleAscending:
                    this.showAlbumHeaders(orderedTracks);
        this.selectedTrackOrder = this.tracksPersister.getSelectedTrackOrder();
                this.updateTrackRating(track);

    private _tracksPersister: BaseTracksPersister;
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
        );
    private hideAllHeaders(orderedTracks: TrackModel[]): void {
            previousAlbumKey = albumKey;
                    break;

            this.playbackService.playbackStopped$.subscribe(() => {
            track.showHeader = false;
                case TrackOrder.byTrackTitleDescending:
        private trackSorter: TrackSorter,

        translatorService: TranslatorServiceBase,
            const albumKey = track.albumKey;
    };
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
    @Input()
    private subscription: Subscription = new Subscription();
import { PlaybackStarted } from '../../../../services/playback/playback-started';

            collectionService,
import { BaseTracksPersister } from '../base-tracks-persister';
        desktop: DesktopBase,

        super(

            track.showHeader = albumKey !== previousAlbumKey || discNumber !== previousDiscNumber;
    providers: [MouseSelectionWatcher],

                    orderedTracks = this.trackSorter.sortByAlbum(this.tracks.tracks);
})

    }

        }
            mouseSelectionWatcher,
        }
        for (const track of orderedTracks) {
    public constructor(
    public trackContextMenu: MatMenuTrigger;
            contextMenuOpener,
import { DesktopBase } from '../../../../common/io/desktop.base';
        );
            this.playbackService.playbackResumed$.subscribe(() => {
                    orderedTracks = this.trackSorter.sortByDateCreatedAscending(this.tracks.tracks);
        this.orderTracks();
        this.tracksPersister.setSelectedTrackOrder(this.selectedTrackOrder);
import { TrackSorter } from '../../../../common/sorting/track-sorter';
        try {
                    break;
        for (const track of this.tracks.tracks) {
        this._tracksPersister = v;
    private orderTracks(): void {
        let previousDiscNumber: number = -1;
    }
            const discNumber = track.discNumber;
        this.subscription.unsubscribe();
import { MetadataService } from '../../../../services/metadata/metadata.service';
        this.subscription.add(
        public playbackService: PlaybackService,

        this.mouseSelectionWatcher.setSelectedItems(event, trackToSelect);

        this.selectedTrackOrder = trackOrder;
import { PlaybackIndicationServiceBase } from '../../../../services/playback-indication/playback-indication.service.base';
            }),
                track.love = trackWithUpToDateLove.love;
        for (const track of orderedTracks) {
    }
    @ViewChild(CdkVirtualScrollViewport) public viewPort: CdkVirtualScrollViewport;
    public setSelectedTracks(event: MouseEvent, trackToSelect: TrackModel): void {
    }

            dialogService,
    public readonly trackOrderKey = trackOrderKey;
                    orderedTracks = this.tracks.tracks;
    host: { style: 'display: block' },
                case TrackOrder.byDateCreatedDescending:
import { Logger } from '../../../../common/logger';
    @Input()
        );
                    break;

import { MatMenuTrigger } from '@angular/material/menu';
import { TrackOrder, trackOrderKey } from '../track-order';
    }
import { ContextMenuOpener } from '../../context-menu-opener';
        return this._tracksPersister;
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
    styleUrls: ['./track-browser.component.scss'],
        );
                this.playbackIndicationService.clearPlayingTrack(this.orderedTracks);
                    orderedTracks = this.trackSorter.sortByDateCreatedDescending(this.tracks.tracks);
import { TrackBrowserBase } from './track-brower-base';

        this.subscription.add(
                    orderedTracks = this.trackSorter.sortByTitleAscending(this.tracks.tracks);

            }),
            this.metadataService.loveSaved$.subscribe((track: TrackModel) => {
        dialogService: DialogServiceBase,
                    this.hideAllHeaders(orderedTracks);
        private playbackIndicationService: PlaybackIndicationServiceBase,

    private _tracks: TrackModels = new TrackModels();

                this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
    public set tracks(v: TrackModels) {
        let orderedTracks: TrackModel[] = [];
                    this.hideAllHeaders(orderedTracks);

        private metadataService: MetadataService,
    public set tracksPersister(v: BaseTracksPersister) {
import { PlaybackService } from '../../../../services/playback/playback.service';
    public get tracks(): TrackModels {
    }
        private trackService: TrackServiceBase,
        this.orderTracks();
export class TrackBrowserComponent extends TrackBrowserBase implements OnInit, OnDestroy {
        this._tracks = v;
    public orderedTracks: TrackModel[] = [];
    @Input()
