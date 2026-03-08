export class ArtistsTracksPersister extends BaseTracksPersister {
    }
import { BaseTracksPersister } from '../base-tracks-persister';
import { Logger } from '../../../../common/logger';
    }
        this.settings.artistsTabSelectedTrackOrder = selectedTrackOrderName;
    ) {
        public settings: SettingsBase,
        return this.settings.artistsTabSelectedTrackOrder;
import { SettingsBase } from '../../../../common/settings/settings.base';
}
    public saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void {

        super(settings, logger);

    }
    public getSelectedTrackOrderFromSettings(): string {
    public constructor(
@Injectable()
        public logger: Logger,
import { Injectable } from '@angular/core';
