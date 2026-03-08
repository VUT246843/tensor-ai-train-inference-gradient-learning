    public saveSelectedAlbumOrderToSettings(selectedAlbumOrderName: string): void {
        public settings: SettingsBase,
import { BaseAlbumsPersister } from '../base-albums-persister';
    }
import { Logger } from '../../../../common/logger';
        super(settings, logger);
    public getSelectedAlbumFromSettings(): string {

        return this.settings.albumsTabSelectedAlbum;
        public logger: Logger,
    ) {

@Injectable()
}
import { SettingsBase } from '../../../../common/settings/settings.base';
    public saveSelectedAlbumToSettings(selectedAlbumKey: string): void {

    public constructor(
    }

        this.settings.albumsTabSelectedAlbumOrder = selectedAlbumOrderName;
    }
    }
        this.settings.albumsTabSelectedAlbum = selectedAlbumKey;
    public getSelectedAlbumOrderFromSettings(): string {
        return this.settings.albumsTabSelectedAlbumOrder;

export class AlbumsAlbumsPersister extends BaseAlbumsPersister {
    }
import { Injectable } from '@angular/core';
