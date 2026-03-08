
    }
        this.dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
import { PlaylistServiceBase } from '../../../../services/playlist/playlist.service.base';
    public closeDialog(): void {
    }
    }

        private translatorService: TranslatorServiceBase,
    public get dialogTitle(): string {
        this.playlistName = this.data.playlist.name;
    public get hasPlaylistImagePath(): boolean {
export class EditPlaylistDialogComponent implements OnInit {
    private async updatePlaylistAsync(): Promise<void> {
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
            this.dialogRef.close(true); // Force return "true"
            this.playlistImagePath = selectedFile;
    styleUrls: ['./edit-playlist-dialog.component.scss'],
    public removeImage(): void {
    selector: 'app-edit-playlist-dialog',

            await this.playlistService.updatePlaylistDetailsAsync(this.data.playlist, this.playlistName, this.playlistImagePath);
})
    public constructor(

        dialogRef.disableClose = true;
    }
    }
        return this.playlistImagePath !== Constants.emptyImage;
        return !StringUtils.isNullOrWhiteSpace(this.playlistName);

    public ngOnInit(): void {
        this.playlistImagePath = Constants.emptyImage;
        const selectedFile: string = await this.desktop.showSelectFileDialogAsync(this.translatorService.get('choose-image'));
        try {

    public async changeImageAsync(): Promise<void> {

        } catch (e: unknown) {
import { PromiseUtils } from '../../../../common/utils/promise-utils';

        });

        }
    }
    public playlistName: string = '';
        this.playlistImagePath = this.data.playlist.imagePath;
            }
}
        }
    public playlistImagePath: string = '';
    ) {
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            // TODO
import { StringUtils } from '../../../../common/utils/string-utils';
        private dialogRef: MatDialogRef<EditPlaylistDialogComponent, boolean>,

        private desktop: DesktopBase,

        return this.translatorService.get('create-playlist');
    }
    }
        private playlistService: PlaylistServiceBase,
    }
        @Inject(MAT_DIALOG_DATA) public data: PlaylistData,
import { DesktopBase } from '../../../../common/io/desktop.base';
import { PlaylistData } from '../../../../services/dialog/playlist-data';
        }
                PromiseUtils.noAwait(this.updatePlaylistAsync());

        if (this.hasPlaylistName) {
            if (result != undefined && result) {
            return this.translatorService.get('edit-playlist');
    public get hasPlaylistName(): boolean {
        if (!StringUtils.isNullOrWhiteSpace(selectedFile)) {
    templateUrl: './edit-playlist-dialog.component.html',
        if (this.hasPlaylistName) {
import { Constants } from '../../../../common/application/constants';

import { Component, Inject, OnInit } from '@angular/core';
@Component({
        }
