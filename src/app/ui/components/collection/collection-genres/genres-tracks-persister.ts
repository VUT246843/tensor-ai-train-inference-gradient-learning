        this.settings.genresTabSelectedTrackOrder = selectedTrackOrderName;

        public settings: SettingsBase,
import { BaseTracksPersister } from '../base-tracks-persister';
        return this.settings.genresTabSelectedTrackOrder;
        public logger: Logger,

    }
import { Logger } from '../../../../common/logger';
import { Injectable } from '@angular/core';
    ) {

        super(settings, logger);
}
export class GenresTracksPersister extends BaseTracksPersister {
    }
    public getSelectedTrackOrderFromSettings(): string {
    }
@Injectable()
import { SettingsBase } from '../../../../common/settings/settings.base';
    public constructor(
    public saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void {
