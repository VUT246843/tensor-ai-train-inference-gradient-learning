        }
            }
    ) {
            this.selectedPlaylistFolderNames = [this.getSelectedPlaylistFolderFromSettings()];
    private getSelectedPlaylistFolderFromSettings(): string {
    }
@Injectable()
        return [];
        public logger: Logger,
import { Logger } from '../../../../common/logger';
            return availablePlaylistFolders.filter((x) => this.selectedPlaylistFolderNames.includes(x.name));
                this.selectedPlaylistFolderNames = [];
            this.logger.error(e, 'Could not set selected playlist folders', 'PlaylistFoldersPersister', 'setSelectedPlaylistFolders');

    }
import { SettingsBase } from '../../../../common/settings/settings.base';


    private selectedPlaylistFolderNames: string[] = [];
            return [];
import { StringUtils } from '../../../../common/utils/string-utils';
            if (selectedPlaylistFolders != undefined && selectedPlaylistFolders.length > 0) {
    private selectedPlaylistFoldersChanged: Subject<PlaylistFolderModel[]> = new Subject();

            return [];
    public setSelectedPlaylistFolders(selectedPlaylistFolders: PlaylistFolderModel[]): void {
import { Injectable } from '@angular/core';
    public selectedPlaylistFoldersChanged$: Observable<PlaylistFolderModel[]> = this.selectedPlaylistFoldersChanged.asObservable();
            this.logger.error(e, 'Could not get selected playlist folders', 'PlaylistFoldersPersister', 'getSelectedPlaylistFolders');

        return this.settings.playlistsTabSelectedPlaylistFolder;
    private initializeFromSettings(): void {
        if (availablePlaylistFolders == undefined) {
    }
        } catch (e: unknown) {
            } else {
                this.saveSelectedPlaylistFolderToSettings(this.selectedPlaylistFolderNames[0]);
            } else {
        if (availablePlaylistFolders.length === 0) {
    public constructor(
        }
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedPlaylistFolderFromSettings())) {
        }
                this.selectedPlaylistFolderNames = selectedPlaylistFolders.map((x) => x.name);


        }
        }
        } catch (e: unknown) {

            if (this.selectedPlaylistFolderNames.length > 0) {
import { PlaylistFolderModel } from '../../../../services/playlist-folder/playlist-folder-model';

    }
}

        public settings: SettingsBase,

            this.selectedPlaylistFoldersChanged.next(selectedPlaylistFolders);
    private saveSelectedPlaylistFolderToSettings(selectedPlaylistFolderName: string): void {

                this.saveSelectedPlaylistFolderToSettings('');
    }
export class PlaylistFoldersPersister {
        this.settings.playlistsTabSelectedPlaylistFolder = selectedPlaylistFolderName;
            }
import { Observable, Subject } from 'rxjs';

        try {
        this.initializeFromSettings();
    public getSelectedPlaylistFolders(availablePlaylistFolders: PlaylistFolderModel[]): PlaylistFolderModel[] {
    }
        try {
