        private nativeElementProxy: NativeElementProxy,
        const dialogText: string = await this.translatorService.getAsync('confirm-delete-playlist-long', {
import { Logger } from '../../../../../common/logger';
    providers: [MouseSelectionWatcher],
        return this._playlistsPersister;
            } catch (e: unknown) {
            this.initializeAvailableWidth();
    public ngOnChanges(changes: SimpleChanges): void {
import { PlaybackService } from '../../../../../services/playback/playback.service';
    public get playlists(): PlaylistModel[] {
        }, 0);

        public contextMenuOpener: ContextMenuOpener,


    ) {}
    }
import { ContextMenuOpener } from '../../../context-menu-opener';
    public get hasPlaylists(): boolean {
        await this.dialogService.showCreatePlaylistDialogAsync();
    private initializeAvailableWidth(): void {

        this.playlistsPersister.setSelectedPlaylistOrder(this.selectedPlaylistOrder);
import { MatMenuTrigger } from '@angular/material/menu';

    private destroy$ = new Subject<void>();
    @Input()
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
        this.playlistsPersister.setSelectedPlaylists(this.mouseSelectionWatcher.selectedItems as PlaylistModel[]);
    public async createPlaylistAsync(): Promise<void> {
        private logger: Logger,
    public ngOnDestroy(): void {
                .pipe(debounceTime(Constants.playlistsRedrawDelayMilliseconds), takeUntil(this.destroy$))
                    }
        }
                this.selectedPlaylistOrder,

        return true;
    public playlistContextMenu: MatMenuTrigger;
            }
        this.mouseSelectionWatcher.initialize(this.playlists, false);
    }
    public applyPlaylistOrder = (playlistOrder: PlaylistOrder): void => {

    private availableWidthInPixels: number = 0;
        }
import { PlaylistModel } from '../../../../../services/playlist/playlist-model';
        setTimeout(() => {
        return this._playlists.length > 0;
            try {

    @Input()
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
        try {

    }
        await this.playbackService.addPlaylistToQueueAsync(playlist);
    public selectedPlaylistOrder: PlaylistOrder;
import { PlaylistOrder, playlistOrderKey } from '../playlist-order';
            this.playlistRows = this.playlistRowsGetter.getPlaylistRows(
        this.mouseSelectionWatcher.setSelectedItems(event, playlistToSelect);
        this.contextMenuOpener.open(this.playlistContextMenu, event, playlist);
@Component({
    }
            );
    };
        if (changes['playlists'] || changes['playlistsPersister']) {
        this.availableWidthInPixels = newAvailableWidthInPixels;


    }
import { PlaylistRow } from './playlist-row';
            this.applicationService.mouseButtonReleased$
                });
    public get playlistsPersister(): PlaylistsPersister {
    public set playlistsPersister(v: PlaylistsPersister) {
            this.logger.error(e, 'Could not order playlists', 'PlaylistBrowserComponent', 'orderPlaylists');
                });
                this.orderPlaylists();
        // HACK: avoids a ExpressionChangedAfterItHasBeenCheckedError in DEV mode.
            selectedPlaylist.isSelected = true;


})
            playlistName: playlist.name,
            this.applicationService.windowSizeChanged$
        }

                .subscribe(() => {
            return false;
    private hasAvailableWidthChanged(): boolean {

        if (userHasConfirmed) {
        private mouseSelectionWatcher: MouseSelectionWatcher,
                        this.orderPlaylists();
    public set playlists(v: PlaylistModel[]) {

        this.selectedPlaylistOrder = this.playlistsPersister.getSelectedPlaylistOrder();
                this.playlists,
    public constructor(

        });
        private playlistRowsGetter: PlaylistRowsGetter,
            this.applySelectedPlaylists();
    public readonly playlistOrders: PlaylistOrder[] = Object.values(PlaylistOrder).filter((x): x is PlaylistOrder => typeof x === 'number');
        }
    public onPlaylistContextMenu(event: MouseEvent, playlist: PlaylistModel): void {
        } catch (e: unknown) {
    public async onDeletePlaylistAsync(playlist: PlaylistModel): Promise<void> {
    private _playlists: PlaylistModel[] = [];
    }
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
                this.dialogService.showErrorDialog(errorText);

    }
        this.destroy$.complete();
    public playlistRows: PlaylistRow[] = [];
        if (this.availableWidthInPixels === newAvailableWidthInPixels) {
                this.logger.error(e, 'Could not delete playlist', 'PlaylistBrowserComponent', 'onDeletePlaylistAsync');
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
                        this.orderPlaylists();

    templateUrl: './playlist-browser.component.html',

    }
        public playlistService: PlaylistServiceBase,
export class PlaylistBrowserComponent implements AfterViewInit, OnChanges, OnDestroy {
import { PlaylistsPersister } from '../playlists-persister';
        const newAvailableWidthInPixels: number = this.nativeElementProxy.getElementWidth(this.playlistBrowserElement);
    }

        const selectedPlaylists: PlaylistModel[] = this.playlistsPersister.getSelectedPlaylists(this.playlists);
        this.orderPlaylists();
    @ViewChild('playlistBrowserElement') public playlistBrowserElement: ElementRef;
    }
        const dialogTitle: string = await this.translatorService.getAsync('confirm-delete-playlist');
    private _playlistsPersister: PlaylistsPersister;



import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';
                this.availableWidthInPixels,
                await this.playlistService.deletePlaylistAsync(playlist);
            }
import { Subject } from 'rxjs';
    public async onAddToQueueAsync(playlist: PlaylistModel): Promise<void> {
    private orderPlaylists(): void {
                    if (this.hasAvailableWidthChanged()) {
    public readonly playlistOrderKey = playlistOrderKey;
    }
import { PlaylistRowsGetter } from '../playlist-folder-browser/playlist-rows-getter';


        for (const selectedPlaylist of selectedPlaylists) {
        public playbackService: PlaybackService,
        private dialogService: DialogServiceBase,
        this.selectedPlaylistOrder = playlistOrder;
    @ViewChild('playlistContextMenuAnchor', { read: MatMenuTrigger, static: false })
        }


    private applySelectedPlaylists(): void {

        await this.dialogService.showEditPlaylistDialogAsync(playlist);
    }
    }
    host: { style: 'display: block' },

                    if (this.hasAvailableWidthChanged()) {
                .pipe(debounceTime(Constants.playlistsRedrawDelayMilliseconds), takeUntil(this.destroy$))


        this._playlistsPersister = v;
                const errorText: string = await this.translatorService.getAsync('delete-playlist-error');
                    }
    }
        this.destroy$.next();
        return this._playlists;
    public async onEditPlaylistAsync(playlist: PlaylistModel): Promise<void> {

import { Constants } from '../../../../../common/application/constants';
        private applicationService: ApplicationServiceBase,
    }

        this._playlists = v;
import { debounceTime, takeUntil } from 'rxjs/operators';
    public ngAfterViewInit(): void {
        private translatorService: TranslatorServiceBase,
import { PlaylistServiceBase } from '../../../../../services/playlist/playlist.service.base';
import { NativeElementProxy } from '../../../../../common/native-element-proxy';

}
            if (this.playlists && this.playlists.length > 0 && this.playlistsPersister) {
    }
    }
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
                .subscribe(() => {
    styleUrls: ['./playlist-browser.component.scss'],
    }
    selector: 'app-playlist-browser',
        this.availableWidthInPixels = this.nativeElementProxy.getElementWidth(this.playlistBrowserElement);
    public setSelectedPlaylists(event: MouseEvent, playlistToSelect: PlaylistModel): void {
