        private desktop: DesktopBase,
    public async onAddToQueueAsync(): Promise<void> {
        const tracks: TrackModel[] = this.mouseSelectionWatcher.selectedItems as TrackModel[];
        let dialogText: string = await this.translatorService.getAsync('confirm-delete-song');
            //     const errorText: string = await this.translatorService.getAsync('delete-songs-error');
                if (!(await this.collectionService.deleteTracksAsync(tracks))) {
            //     }
import { Logger } from '../../../../common/logger';
        public dialogService: DialogServiceBase,
    }

            } catch (e: unknown) {
import { MatMenuTrigger } from '@angular/material/menu';
    public onShowInFolder(): void {

        if (tracks.length > 0) {
            }
                this.dialogService.showErrorDialog(errorText);
        if (userHasConfirmed) {
import { ContextMenuOpener } from '../../context-menu-opener';


    }
    public trackContextMenu: MatMenuTrigger;
@Directive()
        }
        public logger: Logger,
import { TrackModel } from '../../../../services/track/track-model';
            //
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        private translatorService: TranslatorServiceBase,
        await this.playbackService.addTracksToQueueAsync(this.mouseSelectionWatcher.selectedItems as TrackModel[]);
    public constructor(
                this.logger.error(e, 'Could not delete all files', 'TrackBrowserBase', 'onDelete');
    public async onDeleteAsync(): Promise<void> {
            //     this.logger.error(e, 'Could not delete all files', 'TrackBrowserBase', 'onDelete');

import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
            // try {
        this.contextMenuOpener.open(this.trackContextMenu, event, track);
import { DesktopBase } from '../../../../common/io/desktop.base';

        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
        public playbackService: PlaybackService,
        if (userHasConfirmed) {


        private collectionService: CollectionServiceBase,
            // } catch (e: unknown) {
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
                const errorText: string = await this.translatorService.getAsync('delete-songs-error');


                    throw new Error('deleteTracksAsync returned false');
import { Directive, ViewChild } from '@angular/core';
        const tracks: TrackModel[] = this.mouseSelectionWatcher.selectedItems as TrackModel[];
        if (tracks.length > 1) {
export class TrackBrowserBase {
        const tracks: TrackModel[] = this.mouseSelectionWatcher.selectedItems as TrackModel[];
    ) {}
    }

}
    public async onEdit(): Promise<void> {
            this.desktop.showFileInDirectory(tracks[0].path);
        let dialogTitle: string = await this.translatorService.getAsync('delete-song');
        const userHasConfirmed: boolean = await this.dialogService.showEditTracksAsync(tracks);
        }
                }
    public onTrackContextMenu(event: MouseEvent, track: TrackModel): void {

            dialogText = await this.translatorService.getAsync('confirm-delete-songs');
    }
        }
        }
            //     if (!(await this.collectionService.deleteTracksAsync(tracks))) {

        public addToPlaylistMenu: AddToPlaylistMenu,
            // }
            //     this.dialogService.showErrorDialog(errorText);
        public mouseSelectionWatcher: MouseSelectionWatcher,
            dialogTitle = await this.translatorService.getAsync('delete-songs');

        public contextMenuOpener: ContextMenuOpener,
            try {
import { PlaybackService } from '../../../../services/playback/playback.service';
    @ViewChild('trackContextMenuAnchor', { read: MatMenuTrigger, static: false })
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
            //         throw new Error('deleteTracksAsync returned false');
    }
