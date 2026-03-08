    }
import { SettingsBase } from '../../../../common/settings/settings.base';
        this.settings.albumsTabSelectedTrackOrder = selectedTrackOrderName;
export class AlbumsTracksPersister extends BaseTracksPersister {
import { BaseTracksPersister } from '../base-tracks-persister';
@Injectable()
    }
import { Injectable } from '@angular/core';

    public saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void {
    }
}
    public constructor(
    public getSelectedTrackOrderFromSettings(): string {
        public logger: Logger,
        super(settings, logger);

import { Logger } from '../../../../common/logger';
        return this.settings.albumsTabSelectedTrackOrder;
    ) {
        public settings: SettingsBase,
