@Injectable()
import { Logger } from '../../../../common/logger';
        this.settings.artistsTabSelectedAlbum = selectedAlbumKey;
    }
        return this.settings.artistsTabSelectedAlbumOrder;
        public settings: SettingsBase,

}

    public constructor(
    }
import { Injectable } from '@angular/core';
    }
        this.settings.artistsTabSelectedAlbumOrder = selectedAlbumOrderName;
    public getSelectedAlbumOrderFromSettings(): string {
    }

        public logger: Logger,
    public getSelectedAlbumFromSettings(): string {
        super(settings, logger);
export class ArtistsAlbumsPersister extends BaseAlbumsPersister {
    public saveSelectedAlbumOrderToSettings(selectedAlbumOrderName: string): void {

import { SettingsBase } from '../../../../common/settings/settings.base';
        return this.settings.artistsTabSelectedAlbum;

    ) {
    public saveSelectedAlbumToSettings(selectedAlbumKey: string): void {
import { BaseAlbumsPersister } from '../base-albums-persister';
    }
