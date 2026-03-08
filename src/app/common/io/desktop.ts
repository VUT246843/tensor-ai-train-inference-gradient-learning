        }

            title: dialogTitle,
        if (remote.systemPreferences != undefined) {
    public getAccentColor(): string {
            remote.nativeTheme.on('updated', () => this.nativeThemeUpdated.next());

    public async showSelectFileDialogAsync(dialogTitle: string): Promise<string> {
    public async openPathAsync(path: string): Promise<void> {

    public accentColorChanged$: Observable<void> = this.accentColorChanged.asObservable();
            defaultPath: defaultPath,
            return openDialogReturnValue.filePaths[0];

            properties: ['openDirectory'],
        return remote.nativeTheme.shouldUseDarkColors;
    }
    public async showSaveFileDialogAsync(dialogTitle: string, defaultPath: string): Promise<string> {
import * as remote from '@electron/remote';
        if (
            title: dialogTitle,
            return openDialogReturnValue.filePaths[0];
import { OpenDialogReturnValue } from 'electron';
        remote.shell.showItemInFolder(filePath);
            openDialogReturnValue != undefined &&

import { DesktopBase } from './desktop.base';
export class Desktop implements DesktopBase {
        await remote.shell.openPath(path);
        return remote.app.getPath('music');
    }
        await remote.shell.openExternal(url);
        });

}

        return '';
    }
            openDialogReturnValue.filePaths.length > 0
    }
        await remote.shell.trashItem(filePath);

    private accentColorChanged: Subject<void> = new Subject();
import { Injectable } from '@angular/core';
    public constructor() {
    }
        }
import SaveDialogReturnValue = Electron.SaveDialogReturnValue;
            title: dialogTitle,
        }

            openDialogReturnValue != undefined &&

    public showFileInDirectory(filePath: string): void {
            openDialogReturnValue.filePaths != undefined &&

        });
    public getMusicDirectory(): string {
            openDialogReturnValue.filePaths.length > 0

            remote.systemPreferences.on('accent-color-changed', () => this.accentColorChanged.next());
        }

    }
    private nativeThemeUpdated: Subject<void> = new Subject();


            filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }],
import { Observable, Subject } from 'rxjs';
    public async openLinkAsync(url: string): Promise<void> {
    }

            openDialogReturnValue.filePaths != undefined &&
    }
        const openDialogReturnValue: OpenDialogReturnValue = await remote.dialog.showOpenDialog({
        const openDialogReturnValue: OpenDialogReturnValue = await remote.dialog.showOpenDialog({

    public async showSelectFolderDialogAsync(dialogTitle: string): Promise<string> {
        return remote.systemPreferences.getAccentColor();
        return remote.app.getPath('userData');
    public shouldUseDarkColors(): boolean {

        if (remote.nativeTheme != undefined) {
    }
    public async moveFileToTrashAsync(filePath: string): Promise<void> {
        ) {
        if (
    }
@Injectable()
        ) {
        const saveDialogReturnValue: SaveDialogReturnValue = await remote.dialog.showSaveDialog({
    public nativeThemeUpdated$: Observable<void> = this.nativeThemeUpdated.asObservable();

        });

        return '';
    }
    }
            properties: ['openFile'],
    public getApplicationDataDirectory(): string {
        return saveDialogReturnValue.filePath ? saveDialogReturnValue.filePath : '';
