
}
    }
        public logger: Logger,
export class PlaylistsTracksPersister extends BaseTracksPersister {
        return this.settings.playlistsTabSelectedTrackOrder;
import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/logger';
    }
import { SettingsBase } from '../../../../common/settings/settings.base';
@Injectable()

        this.settings.playlistsTabSelectedTrackOrder = selectedTrackOrderName;
    }
        super(settings, logger);
    public constructor(
        public settings: SettingsBase,
import { BaseTracksPersister } from '../base-tracks-persister';
    public saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void {
    public getSelectedTrackOrderFromSettings(): string {
    ) {
