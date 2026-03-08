    public orderByDuration(): void {
    }
    private updateTrackRating(trackWithUpToDateRating: TrackModel): void {
        this.playbackService.forceShuffled();
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.rating);
                );

        this.subscription.add(

            contextMenuOpener,
        return this.tracksColumnsOrder.tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending;



                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
        private trackService: TrackServiceBase,
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,

        this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
            }),
    }
    public tracksColumnsOrder: TracksColumnsOrder = new TracksColumnsOrder(
        this.subscription.add(
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByTrackNumber(
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.trackNumber);
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
        collectionService: CollectionServiceBase,
    public setSelectedTracks(event: MouseEvent, trackToSelect: TrackModel): void {
    public orderBySkipCount(): void {

                track.rating = trackWithUpToDateRating.rating;

        switch (this.tracksColumnsOrder.tracksColumnsOrderColumn) {
    }
                orderedTracks = this.tracks.tracks;
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
        translatorService: TranslatorServiceBase,
                );
            case TracksColumnsOrderColumn.trackNumber:
    }
            if (track.path === trackWithUpToDateRating.path) {
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByGenres(
import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';
    public orderedTracks: TrackModel[] = [];
    public get isOrderedByRating(): boolean {

                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.dateAdded;

    }
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
            case TracksColumnsOrderColumn.dateAdded:
        this.subscription.add(
        return this._tracks;
import { PlaybackStarted } from '../../../../../services/playback/playback-started';
        desktop: DesktopBase,

    public get isOrderedByTrackTitle(): boolean {
    }
        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.rating;
                break;

                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
    private subscription: Subscription = new Subscription();
                break;
@Component({
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.skipCount);
            default:
    public orderByYear(): void {
    public get isOrderedByTrackNumber(): boolean {

        this.orderTracks();
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            dialogService,
    public get isOrderedByArtists(): boolean {
            case TracksColumnsOrderColumn.genres:
                    this.tracks.tracks,
                this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
            translatorService,
    }
    }
import { PlaybackService } from '../../../../../services/playback/playback.service';

                break;
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.year;

import { TracksColumnsServiceBase } from '../../../../../services/track-columns/tracks-columns.service.base';
                this.orderTracks();
    @Input()
import { TracksColumnsOrderDirection } from '../../../../../services/track-columns/tracks-columns-order-direction';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
            this.playbackService.playbackStopped$.subscribe(() => {
    public get isOrderedByPlayCount(): boolean {
            }),
}

    }

    }
        logger: Logger,
import { Subscription } from 'rxjs';
        this.subscription.add(
                    this.tracks.tracks,
        this.playbackIndicationService.setPlayingTrack(this.orderedTracks, this.playbackService.currentTrack);
        );
        this.mouseSelectionWatcher.setSelectedItems(event, trackToSelect);
        this._tracks = v;
    public orderByGenres(): void {
            }),
        dialogService: DialogServiceBase,
            case TracksColumnsOrderColumn.skipCount:
        }

    }
        );
import { TracksColumnsOrdering } from '../../../../../services/track-columns/tracks-columns-ordering';

    }
        }
    public get isOrderedByDateAdded(): boolean {
    templateUrl: './collection-tracks-table.component.html',
    }
    public get isOrderedByGenres(): boolean {
    ) {
import { TrackServiceBase } from '../../../../../services/track/track.service.base';

                    this.tracks.tracks,
    private orderTracks(): void {
    }
    }

        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.dateLastPlayed);
            case TracksColumnsOrderColumn.year:
            mouseSelectionWatcher,
        await this.dialogService.showEditColumnsDialogAsync();
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.artists;
import { CollectionServiceBase } from '../../../../../services/collection/collection.service.base';
            case TracksColumnsOrderColumn.dateLastPlayed:
    }
                break;

import { TracksColumnsOrder } from '../../../../../services/track-columns/tracks-columns-order';
    public orderByArtists(): void {
    }

                );
    public orderByRating(): void {
        );
            case TracksColumnsOrderColumn.album:
        public contextMenuOpener: ContextMenuOpener,

            logger,
    public ngOnDestroy(): void {
            playbackService,
        );

                    this.tracks.tracks,
        this.orderedTracks = [...orderedTracks];
                break;
        );
    public get tracks(): TrackModels {
                break;
    public orderByTrackNumber(): void {
    }

        private tracksColumnsOrdering: TracksColumnsOrdering,
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.trackNumber;
                );

    private _tracks: TrackModels = new TrackModels();
    public ngOnInit(): void {
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.trackTitle;

                    this.tracks.tracks,
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByTitle(
            }),
        this.tracksColumnsOrder = this.tracksColumnsService.getTracksColumnsOrder();
                break;
        private tracksColumnsService: TracksColumnsServiceBase,
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.playCount;
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.genres);
                break;
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
    public get isOrderedByYear(): boolean {
                );
    }
    encapsulation: ViewEncapsulation.None,
        );
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.year);


    selector: 'app-collection-tracks-table',
        public mouseSelectionWatcher: MouseSelectionWatcher,
    }
    }
import { TracksColumnsVisibility } from '../../../../../services/track-columns/tracks-columns-visibility';
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByRating(
    );
    }
                this.trackService.scrollToPlayingTrack(this.orderedTracks, this.viewPort);
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.playCount);
    }
        this.tracksColumnsVisibility = this.tracksColumnsService.getTracksColumnsVisibility();
    public get isOrderedByDuration(): boolean {
    }
            case TracksColumnsOrderColumn.playCount:

import { TrackModels } from '../../../../../services/track/track-models';
                    this.tracks.tracks,
        private playbackIndicationService: PlaybackIndicationServiceBase,
            case TracksColumnsOrderColumn.duration:
    }
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.duration;
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByArtists(
    @ViewChild(CdkVirtualScrollViewport) public viewPort: CdkVirtualScrollViewport;
    public orderByTrackTitle(): void {
    public get isOrderedByAlbum(): boolean {
                );
    public orderByPlayCount(): void {
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
            collectionService,

        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.album);
            }),
            this.tracksColumnsService.tracksColumnsOrderChanged$.subscribe((tracksColumnsOrder) => {
    }
        );
                this.playbackIndicationService.clearPlayingTrack(this.orderedTracks);
                    this.tracks.tracks,
    public get isOrderedByDateLastPlayed(): boolean {

        this.subscription.unsubscribe();
    }
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByDuration(
        this.subscription.add(
                    this.tracks.tracks,
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.genres;
        this.mouseSelectionWatcher.initialize(this.tracks.tracks, false);
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByYear(

            this.playbackService.playbackResumed$.subscribe(() => {
                );
    public constructor(
                );
            addToPlaylistMenu,
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByAlbum(

                    this.tracksColumnsOrder.tracksColumnsOrderDirection,

})
            case TracksColumnsOrderColumn.trackTitle:
    }

    public orderByAlbum(): void {
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.album;

    public get isOrderedBySkipCount(): boolean {
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
        public addToPlaylistMenu: AddToPlaylistMenu,
    public tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
                );

                break;
    }
            desktop,
    public orderByDateLastPlayed(): void {
import { TrackBrowserBase } from '../../track-browser/track-brower-base';
    providers: [MouseSelectionWatcher],
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.trackTitle);
    }
        const tracks: TrackModels = this.trackService.getVisibleTracks();

                break;
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
                );
        let orderedTracks: TrackModel[] = [];
    styleUrls: ['./collection-tracks-table.component.scss'],
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.dateAdded);
                );
    }
import { TrackModel } from '../../../../../services/track/track-model';
            this.tracksColumnsService.tracksColumnsVisibilityChanged$.subscribe((tracksColumnsVisibility) => {
            this.metadataService.ratingSaved$.subscribe((track: TrackModel) => {


        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.skipCount;
        public playbackService: PlaybackService,

                    this.tracks.tracks,

            case TracksColumnsOrderColumn.artists:
    public get isOrderedAscending(): boolean {
    public set tracks(v: TrackModels) {
    public async showEditColumnsDialogAsync(): Promise<void> {
        super(
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.duration);
        TracksColumnsOrderColumn.trackTitle,
import { PlaybackIndicationServiceBase } from '../../../../../services/playback-indication/playback-indication.service.base';
        for (const track of this.tracks.tracks) {
        TracksColumnsOrderDirection.ascending,
    }
import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';
import { DesktopBase } from '../../../../../common/io/desktop.base';
        return this.tracksColumnsOrder.tracksColumnsOrderColumn === TracksColumnsOrderColumn.dateLastPlayed;
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByDateLastPlayed(
    }
            }),
                    this.tracks.tracks,
                this.playbackIndicationService.setPlayingTrack(this.orderedTracks, playbackStarted.currentTrack);
    }
    }
                );
import { TracksColumnsOrderColumn } from '../../../../../services/track-columns/tracks-columns-order-column';
    public orderByDateAdded(): void {
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
import { Logger } from '../../../../../common/logger';
                break;
export class CollectionTracksTableComponent extends TrackBrowserBase implements OnInit, OnDestroy {
                    this.tracksColumnsOrder.tracksColumnsOrderDirection,
    host: { style: 'display: block' },
                this.updateTrackRating(track);
                this.tracksColumnsVisibility = tracksColumnsVisibility;
                this.tracksColumnsOrder = tracksColumnsOrder;
                    this.tracks.tracks,
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByPlayCount(
import { MetadataService } from '../../../../../services/metadata/metadata.service';
        this.tracksColumnsService.setTracksColumnsOrder(TracksColumnsOrderColumn.artists);
                break;
                break;
            }
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedByDateAdded(
                orderedTracks = this.tracksColumnsOrdering.getTracksOrderedBySkipCount(
import { ContextMenuOpener } from '../../../context-menu-opener';
        private metadataService: MetadataService,
        this.subscription.add(

            case TracksColumnsOrderColumn.rating:
                    this.tracks.tracks,
    public async shuffleAllAsync(): Promise<void> {

