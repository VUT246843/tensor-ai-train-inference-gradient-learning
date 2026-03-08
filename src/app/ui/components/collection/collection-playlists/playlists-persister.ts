

            } else {
    }
    private selectedPlaylistsChanged: Subject<string[]> = new Subject();

    }
            if (selectedPlaylists != undefined && selectedPlaylists.length > 0) {
    private selectedPlaylistOrder: PlaylistOrder;

        } catch (e: unknown) {
import { Injectable } from '@angular/core';
            this.selectedPlaylistNames = [this.getSelectedPlaylistFromSettings()];
            }
            this.selectedPlaylistsChanged.next(this.selectedPlaylistNames);
export class PlaylistsPersister {
                this.saveSelectedPlaylistToSettings(this.selectedPlaylistNames[0]);
            this.saveSelectedPlaylistOrderToSettings(PlaylistOrder[selectedPlaylistOrder]);
        return this.settings.playlistsTabSelectedPlaylistOrder;
    }
            if (this.selectedPlaylistNames.length > 0) {
    }
        } catch (e: unknown) {

        }



        return [];
            this.logger.error(e, 'Could not set selected playlists', 'PlaylistsPersister', 'setSelectedPlaylists');
                this.selectedPlaylistNames = [];
    ) {
            return [];

            this.logger.error(e, 'Could not get selected playlists', 'PlaylistsPersister', 'getSelectedPlaylists');
    public setSelectedPlaylists(selectedPlaylists: PlaylistModel[]): void {
    private initializeFromSettings(): void {

    public setSelectedPlaylistOrder(selectedPlaylistOrder: PlaylistOrder): void {
        this.initializeFromSettings();
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedPlaylistOrderFromSettings())) {
    }
import { PlaylistModel } from '../../../../services/playlist/playlist-model';
        this.settings.playlistsTabSelectedPlaylist = selectedPlaylistName;
        }
    }
    public getSelectedPlaylists(availablePlaylists: PlaylistModel[]): PlaylistModel[] {
            this.selectedPlaylistOrder = selectedPlaylistOrder;
    public getSelectedPlaylistFromSettings(): string {
    }
        if (availablePlaylists.length === 0) {
    private selectedPlaylistNames: string[] = [];


        }
                this.selectedPlaylistNames = selectedPlaylists.map((x) => x.name);

        }
        return this.selectedPlaylistOrder;
import { StringUtils } from '../../../../common/utils/string-utils';
                this.saveSelectedPlaylistToSettings('');
            return availablePlaylists.filter((x) => this.selectedPlaylistNames.includes(x.name));

        public logger: Logger,
            return [];
    }
    public getSelectedPlaylistOrderFromSettings(): string {
        this.selectedPlaylistNames = [];

            this.selectedPlaylistOrder = PlaylistOrder[this.getSelectedPlaylistOrderFromSettings()] as PlaylistOrder;
    public getSelectedPlaylistOrder(): PlaylistOrder {
        } catch (e: unknown) {
@Injectable()
        this.settings.playlistsTabSelectedPlaylistOrder = selectedPlaylistOrderName;
    }
        try {
import { SettingsBase } from '../../../../common/settings/settings.base';


        return this.settings.playlistsTabSelectedPlaylist;
    public resetSelectedPlaylists(): void {
    public selectedPlaylistsChanged$: Observable<string[]> = this.selectedPlaylistsChanged.asObservable();
        }
            } else {
    public saveSelectedPlaylistToSettings(selectedPlaylistName: string): void {
import { PlaylistOrder } from './playlist-order';

        }
    public constructor(
        }
import { Observable, Subject } from 'rxjs';
        if (availablePlaylists == undefined) {
            return PlaylistOrder.byPlaylistNameAscending;

        try {
    }
        public settings: SettingsBase,

            this.logger.error(e, 'Could not set selected playlist order', 'PlaylistsPersister', 'setSelectedPlaylistOrder');
        }
        this.saveSelectedPlaylistToSettings('');
    public saveSelectedPlaylistOrderToSettings(selectedPlaylistOrderName: string): void {
            }
import { Logger } from '../../../../common/logger';
        try {
        if (this.selectedPlaylistOrder == undefined) {
}
    }
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedPlaylistFromSettings())) {
