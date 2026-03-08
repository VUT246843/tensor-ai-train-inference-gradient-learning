import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
    }
import { AlbumModel } from '../../../../services/album/album-model';
    public ngOnInit(): void {
    private availableWidthInPixels: number = 0;
        private settings: SettingsBase,
                this.selectedAlbumOrder,
        }, 0);
            }
    }
    public setSelectedAlbums(event: MouseEvent, albumToSelect: AlbumModel): void {
        this.albumsPersister.setSelectedAlbums(this.mouseSelectionWatcher.selectedItems as AlbumModel[]);

    public onAlbumContextMenu(event: MouseEvent, album: AlbumModel): void {
import { MatMenuTrigger } from '@angular/material/menu';
            const timer = new Timer();
    public async onShuffleAndPlayAsync(album: AlbumModel): Promise<void> {
    }
    private applySelectedAlbums(): void {
                .subscribe(() => {
        public playbackService: PlaybackService,
                this.orderAlbums();
    public useCompactYearView: boolean = false;
        this.contextMenuOpener.open(this.albumContextMenu, event, album);
                this.useCompactYearView,

}
        try {

        if (this.availableWidthInPixels === newAvailableWidthInPixels) {
        private applicationService: ApplicationServiceBase,
    ) {}
    }
        this.albumsPersister.setSelectedAlbumOrder(this.selectedAlbumOrder);
import { ApplicationServiceBase } from '../../../../services/application/application.service.base';
                .subscribe(() => {
                this.albums,


            timer.stop();
            this.albumRows = this.albumRowsGetter.getAlbumRows(
    selector: 'app-album-browser',

        } catch (e: unknown) {
    }
        return this._albums;
    public async onAddToQueueAsync(album: AlbumModel): Promise<void> {

    private _albumsPersister: BaseAlbumsPersister;
        return this.selectedAlbumOrder === AlbumOrder.byYearAscending || this.selectedAlbumOrder === AlbumOrder.byYearDescending;
                        this.orderAlbums();
        if (album == undefined) {
    }
    public set albums(v: AlbumModel[]) {
            if (this.albumsPersister) {

    @Input()
                    if (this.hasAvailableWidthChanged()) {
        for (const selectedAlbum of selectedAlbums) {
        }
import { AlbumRowsGetter } from './album-rows-getter';
    }
        private logger: Logger,
    @Input()


                    }
        const newAvailableWidthInPixels: number = this.nativeElementProxy.getElementWidth(this.albumBrowserElement);
                'orderAlbums',
        const tracks: TrackModels = this.trackService.getVisibleTracks();
    private destroy$ = new Subject<void>();
                .pipe(debounceTime(Constants.albumsRedrawDelayMilliseconds), takeUntil(this.destroy$))
    private _albums: AlbumModel[] = [];
        this.mouseSelectionWatcher.setSelectedItems(event, albumToSelect);
        this.availableWidthInPixels = newAvailableWidthInPixels;
        await this.playbackService.addAlbumToQueueAsync(album);
import { Timer } from '../../../../common/scheduling/timer';
})
                    }

        const selectedAlbums: AlbumModel[] = this.albumsPersister.getSelectedAlbums(this.albums);
import { ContextMenuOpener } from '../../context-menu-opener';

                'AlbumBrowserComponent',

        }
        this.useCompactYearView = !this.useCompactYearView;
    public readonly albumOrderKey = albumOrderKey;
        if (changes['albums'] || changes['albumsPersister']) {
    }

    @ViewChild('albumContextMenuAnchor', { read: MatMenuTrigger, static: false })
    public async shuffleAllAsync(): Promise<void> {
                });
        public addToPlaylistMenu: AddToPlaylistMenu,
        this.selectedAlbumOrder = albumOrder;


import { TrackServiceBase } from '../../../../services/track/track.service.base';
            this.applicationService.mouseButtonReleased$
        private albumRowsGetter: AlbumRowsGetter,
            timer.start();
    private hasAvailableWidthChanged(): boolean {
        }
    public readonly albumOrders: AlbumOrder[] = Object.values(AlbumOrder).filter((x): x is AlbumOrder => typeof x === 'number');
import { SettingsBase } from '../../../../common/settings/settings.base';

            this.initializeAvailableWidth();
        this.useCompactYearView = this.settings.useCompactYearView;
    public applyAlbumOrder = (albumOrder: AlbumOrder): void => {
            );

            return;

    public albumRows: AlbumRow[] = [];
            );
    styleUrls: ['./album-browser.component.scss'],
        this.playbackService.forceShuffled();
    }
        public mouseSelectionWatcher: MouseSelectionWatcher,
                `Finished ordering albums. Time required: ${timer.elapsedMilliseconds} ms`,
    }

    public set albumsPersister(v: BaseAlbumsPersister) {

                });
@Component({
                .pipe(debounceTime(Constants.albumsRedrawDelayMilliseconds), takeUntil(this.destroy$))
                    if (this.hasAvailableWidthChanged()) {
import { PlaybackService } from '../../../../services/playback/playback.service';
    };
        }
                this.availableWidthInPixels,
            this.applicationService.windowSizeChanged$
        this.destroy$.complete();
    @ViewChild('albumBrowserElement') public albumBrowserElement: ElementRef;
        private nativeElementProxy: NativeElementProxy,
    }
import { Logger } from '../../../../common/logger';

    }
        this.orderAlbums();
export class AlbumBrowserComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

        this.availableWidthInPixels = this.nativeElementProxy.getElementWidth(this.albumBrowserElement);
            this.logger.info(
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
        if (selectedAlbums == undefined) {
    host: { style: 'display: block' },
import { Constants } from '../../../../common/application/constants';

import { AlbumRow } from './album-row';
    public get albums(): AlbumModel[] {
        this.selectedAlbumOrder = this.albumsPersister.getSelectedAlbumOrder();
import { TrackModels } from '../../../../services/track/track-models';
                        this.orderAlbums();

    }
            this.logger.error(e, 'Could not order albums', 'AlbumBrowserComponent', 'orderAlbums');
        this._albumsPersister = v;

        return true;
    }

    public get isSortedByYear(): boolean {
import { Subject } from 'rxjs';
import { NativeElementProxy } from '../../../../common/native-element-proxy';
import { debounceTime, takeUntil } from 'rxjs/operators';
    public get albumsPersister(): BaseAlbumsPersister {
    }



import { AlbumOrder, albumOrderKey } from '../album-order';

        this.orderAlbums();
    public albumOrderEnum: typeof AlbumOrder = AlbumOrder;

            this.applySelectedAlbums();


    }
        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);
    public ngOnDestroy(): void {
    public ngAfterViewInit(): void {
    public toggleYearView(): void {
    }

        return this._albumsPersister;

            selectedAlbum.isSelected = true;

        public contextMenuOpener: ContextMenuOpener,

        setTimeout(() => {
        this.settings.useCompactYearView = this.useCompactYearView;
        public trackService: TrackServiceBase,
        }
    private orderAlbums(): void {
    templateUrl: './album-browser.component.html',
    }
        this.playbackService.forceShuffled();
    providers: [MouseSelectionWatcher],
        this.mouseSelectionWatcher.initialize(this.albums, false);
        // HACK: avoids a ExpressionChangedAfterItHasBeenCheckedError in DEV mode.
        }
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
    private initializeAvailableWidth(): void {
    public ngOnChanges(changes: SimpleChanges): void {
        this.destroy$.next();
    public selectedAlbumOrder: AlbumOrder;
            return false;
        this._albums = v;
            return;
    public constructor(
import { BaseAlbumsPersister } from '../base-albums-persister';
    public albumContextMenu: MatMenuTrigger;
    }
        await this.playbackService.enqueueAndPlayAlbumAsync(album);


