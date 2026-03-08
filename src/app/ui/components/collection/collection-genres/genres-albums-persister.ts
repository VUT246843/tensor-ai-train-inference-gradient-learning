    ) {

}
        super(settings, logger);
import { Logger } from '../../../../common/logger';
    public saveSelectedAlbumToSettings(selectedAlbumKey: string): void {
        this.settings.genresTabSelectedAlbum = selectedAlbumKey;
    }

        public settings: SettingsBase,
    public getSelectedAlbumOrderFromSettings(): string {

    }
    }
    }
        public logger: Logger,
import { BaseAlbumsPersister } from '../base-albums-persister';
    public constructor(
import { Injectable } from '@angular/core';
    public saveSelectedAlbumOrderToSettings(selectedAlbumOrderName: string): void {
export class GenresAlbumsPersister extends BaseAlbumsPersister {
import { SettingsBase } from '../../../../common/settings/settings.base';
@Injectable()
        return this.settings.genresTabSelectedAlbumOrder;


        return this.settings.genresTabSelectedAlbum;
        this.settings.genresTabSelectedAlbumOrder = selectedAlbumOrderName;
    }
    public getSelectedAlbumFromSettings(): string {
