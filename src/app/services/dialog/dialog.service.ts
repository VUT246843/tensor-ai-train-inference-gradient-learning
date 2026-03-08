    ) {}
        this.dialog.open(InfoDialogComponent, {
    public async showInputDialogAsync(
        });
    public async showEditTracksAsync(tracks: TrackModel[]): Promise<boolean> {
            width: '450px',
import { ErrorDialogComponent } from '../../ui/components/dialogs/error-dialog/error-dialog.component';

    }
import { PlaylistModelFactory } from '../playlist/playlist-model-factory';

        return result != undefined && result;
        });
        const defaultPlaylist: PlaylistModel = this.playlistModelFactory.createDefault();
    }
            data: new ConfirmationData(dialogTitle, dialogText),
        const dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> = this.dialog.open(ConfirmationDialogComponent, {
        this.dialog.open(LicenseDialogComponent, {
    public async showCreatePlaylistDialogAsync(): Promise<void> {

        return inputData.inputText;
import { PlaylistData } from './playlist-data';
        private translatorService: TranslatorServiceBase,
        this.showErrorDialog(message);
        await dialogRef.afterClosed().toPromise();
            data: inputData,
        });
import { EditPlaylistDialogComponent } from '../../ui/components/dialogs/edit-playlist-dialog/edit-playlist-dialog.component';

import { DialogServiceBase } from './dialog.service.base';

        const dialogRef: MatDialogRef<EditPlaylistDialogComponent> = this.dialog.open(EditPlaylistDialogComponent, {
        const message: string = await this.translatorService.getAsync('cannot-play-m4a-file');
            width: '450px',
        const dialogRef: MatDialogRef<EditPlaylistDialogComponent> = this.dialog.open(EditPlaylistDialogComponent, {

    }
    public showErrorDialog(errorText: string): void {

            width: '450px',
        });
        const result: boolean | undefined = await dialogRef.afterClosed().toPromise();
        const dialogRef: MatDialogRef<InputDialogComponent> = this.dialog.open(InputDialogComponent, {
            width: '450px',
            width: '450px',
            width: '450px',
        this.dialog.open(ErrorDialogComponent, {
@Injectable()
            data: new InfoData(infoText),
            data: playlistData,
import { PlaylistModel } from '../playlist/playlist-model';
import { TranslatorServiceBase } from '../translator/translator.service.base';
    }
        const playlistData = new PlaylistData(playlist);
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


    }
        const inputData: InputData = new InputData(dialogTitle, inputText, placeHolderText, invalidCharacters);
    }
        invalidCharacters: string[],
import { InfoData } from './info-data';

    }
        const message: string = await this.translatorService.getAsync('cannot-play-audio-file');
        const dialogRef: MatDialogRef<EditColumnsDialogComponent> = this.dialog.open(EditColumnsDialogComponent, {
    public async showEditPlaylistDialogAsync(playlist: PlaylistModel): Promise<void> {
        inputText: string,

        private playlistModelFactory: PlaylistModelFactory,
        const playlistData: PlaylistData = new PlaylistData(defaultPlaylist);
        });
    ): Promise<string> {
    public constructor(
import { EditColumnsDialogComponent } from '../../ui/components/dialogs/edit-columns-dialog/edit-columns-dialog.component';

            data: new ErrorData(errorText, false),

import { ConfirmationDialogComponent } from '../../ui/components/dialogs/confirmation-dialog/confirmation-dialog.component';
}
        dialogTitle: string,
        await dialogRef.afterClosed().toPromise();

export class DialogService implements DialogServiceBase {
            width: '450px',
import { ConfirmationData } from './confirmation-data';
        });
    public async showConfirmationDialogAsync(dialogTitle: string, dialogText: string): Promise<boolean> {
    public showLicenseDialog(): void {
    }
    }
import { ErrorData } from './error-data';
        await dialogRef.afterClosed().toPromise();

        const result: boolean | undefined = await dialogRef.afterClosed().toPromise();
        });
        private dialog: MatDialog,


        this.showErrorDialog(message);
        placeHolderText: string,
import { LicenseDialogComponent } from '../../ui/components/dialogs/license-dialog/license-dialog.component';

import { Injectable } from '@angular/core';
import { EditTracksDialogComponent } from '../../ui/components/dialogs/edit-tracks-dialog/edit-tracks-dialog.component';

import { InputData } from './input-data';
import { InfoDialogComponent } from '../../ui/components/dialogs/info-dialog/info-dialog.component';
    public async cannotPlayM4aFileAsync(): Promise<void> {
    public showInfoDialog(infoText: string): void {
import { TrackModel } from '../track/track-model';
            data: playlistData,
        return result != undefined && result;
    public async showEditColumnsDialogAsync(): Promise<void> {
        await dialogRef.afterClosed().toPromise();
    }
    public async cannotPlayAudioFileAsync(): Promise<void> {
            width: '450px',
        });
        });
            data: tracks,
import { InputDialogComponent } from '../../ui/components/dialogs/input-dialog/input-dialog.component';

        const dialogRef: MatDialogRef<EditTracksDialogComponent, boolean> = this.dialog.open(EditTracksDialogComponent, {
    }
