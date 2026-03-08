
import { PlaylistServiceBase } from '../../../../../services/playlist/playlist.service.base';
export class PlaylistFolderBrowserComponent {
            dialogTitle,
        this.playlistFoldersPersister.setSelectedPlaylistFolders(this.mouseSelectionWatcher.selectedItems as PlaylistFolderModel[]);
    private applySelectedPlaylistFolders(): void {
import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
            const dialogText: string = await this.translatorService.getAsync('create-playlist-folder-error');

        this._playlistFolders = v;

import { PlaylistFolderModel } from '../../../../../services/playlist-folder/playlist-folder-model';
            this.translatorService.get('create-playlist-folder'),
            playlistFolder.name,
    public async onDeletePlaylistFolderAsync(playlistFolder: PlaylistFolderModel): Promise<void> {
            selectedPlaylistFolder.isSelected = true;
    }
@Component({
            try {
    public constructor(
                const errorText: string = await this.translatorService.getAsync('rename-playlist-folder-error');
            } catch (e: unknown) {
        this.mouseSelectionWatcher.initialize(this.playlistFolders, false);
        public appearanceService: AppearanceServiceBase,
                this.playlistFolderService.deletePlaylistFolder(playlistFolder);


        );
    @Input()
        const newPlaylistFolderName: string = await this.dialogService.showInputDialogAsync(

import { PlaybackService } from '../../../../../services/playback/playback.service';
            this.playlistFolders,
import { StringUtils } from '../../../../../common/utils/string-utils';
        }
    public setSelectedPlaylistFolders(event: MouseEvent, playlistFolderToSelect: PlaylistFolderModel): void {
    }
    }

import { Logger } from '../../../../../common/logger';
        this.playlistService.setActivePlaylistFolder(selectedPlaylistFolders);
    public playlistFolderContextMenu: MatMenuTrigger;
    }
        );
        private logger: Logger,
        );
        public playlistService: PlaylistServiceBase,
                this.logger.error(e, 'Could not rename playlist folder', 'CollectionPlaylistsComponent', 'onRenamePlaylistFolderAsync');
            this.logger.error(e, 'Could not create playlist folder', 'CollectionPlaylistsComponent', 'createPlaylistFolderAsync');
            placeholderText,
            return;
        private dialogService: DialogServiceBase,
        const placeholderText: string = await this.translatorService.getAsync('rename-playlist-folder-placeholder');
    selector: 'app-playlist-folder-browser',
        if (playlistFolder.isModifiable) {
        private translatorService: TranslatorServiceBase,
        public playlistFolderService: PlaylistFolderServiceBase,

    templateUrl: './playlist-folder-browser.component.html',
import { Component, Input, ViewChild } from '@angular/core';
        const selectedPlaylistFolders: PlaylistFolderModel[] = this.playlistFoldersPersister.getSelectedPlaylistFolders(
            this.applySelectedPlaylistFolders();
        private mouseSelectionWatcher: MouseSelectionWatcher,
        this.mouseSelectionWatcher.setSelectedItems(event, playlistFolderToSelect);
            [],
            try {

        try {

import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';
            [],
            }
        } catch (e: unknown) {
import { ContextMenuOpener } from '../../../context-menu-opener';
    host: { style: 'display: block' },
    public async onRenamePlaylistFolderAsync(playlistFolder: PlaylistFolderModel): Promise<void> {
        }

import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
import { MatMenuTrigger } from '@angular/material/menu';
import { PlaylistFolderServiceBase } from '../../../../../services/playlist-folder/playlist-folder.service.base';
    }
    providers: [MouseSelectionWatcher],

    public async createPlaylistFolderAsync(): Promise<void> {
                this.dialogService.showErrorDialog(errorText);
    public get playlistFolders(): PlaylistFolderModel[] {
            } catch (e: unknown) {
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
            this.dialogService.showErrorDialog(dialogText);
    @ViewChild('playlistFolderContextMenuAnchor', { read: MatMenuTrigger, static: false })
    }
                const errorText: string = await this.translatorService.getAsync('delete-playlist-folder-error');
    }

            }
        const dialogTitle: string = await this.translatorService.getAsync('rename-playlist-folder');

    }
        return this._playlistFoldersPersister;
                this.logger.error(e, 'Could not delete playlist folder', 'CollectionPlaylistsComponent', 'onDeletePlaylistFolderAsync');
    private _playlistFolders: PlaylistFolderModel[] = [];


            if (!StringUtils.isNullOrWhiteSpace(playlistFolderName)) {
    styleUrls: ['./playlist-folder-browser.component.scss'],
        public playbackService: PlaybackService,
    public set playlistFolders(v: PlaylistFolderModel[]) {
    public get playlistFoldersPersister(): PlaylistFoldersPersister {
        }

        const dialogText: string = await this.translatorService.getAsync('confirm-delete-playlist-folder-long', {
    @Input()


    }
        this._playlistFoldersPersister = v;
            }
            this.contextMenuOpener.open(this.playlistFolderContextMenu, event, playlistFolder);
        if (!StringUtils.isNullOrWhiteSpace(newPlaylistFolderName)) {
        }
        for (const selectedPlaylistFolder of selectedPlaylistFolders) {
import { PlaylistFoldersPersister } from '../playlist-folders-persister';

        if (userHasConfirmed) {
        if (this.playlistFoldersPersister != undefined) {

    }
            '',
        this.applySelectedPlaylistFolders();
}
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';


            playlistFolderName: playlistFolder.name,
                this.dialogService.showErrorDialog(errorText);
        const dialogTitle: string = await this.translatorService.getAsync('confirm-delete-playlist-folder');
            this.translatorService.get('playlist-folder-name'),
                this.playlistFolderService.renamePlaylistFolder(playlistFolder, newPlaylistFolderName);
        }

    public onPlaylistFolderContextMenu(event: MouseEvent, playlistFolder: PlaylistFolderModel): void {
        const playlistFolderName: string = await this.dialogService.showInputDialogAsync(
        }

        if (selectedPlaylistFolders == undefined) {
    public set playlistFoldersPersister(v: PlaylistFoldersPersister) {
        this.playlistService.setActivePlaylistFolder(this.mouseSelectionWatcher.selectedItems as PlaylistFolderModel[]);
    private _playlistFoldersPersister: PlaylistFoldersPersister;
        }
        public contextMenuOpener: ContextMenuOpener,
                this.playlistFolderService.createPlaylistFolder(playlistFolderName);
        return this._playlistFolders;
    ) {}
        });
        // When the component is first rendered, it happens that playlistFoldersPersister is undefined.
})
