    public getSelectedTrackOrderFromSettings(): string {
        public logger: Logger,

    ) {
    }
        this.defaultTrackOrder = TrackOrder.none;
    public saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void {
        return this.settings.foldersTabSelectedTrackOrder;
export class FolderTracksPersister extends BaseTracksPersister {
import { Injectable } from '@angular/core';
import { TrackOrder } from '../track-order';
    }
}
import { SettingsBase } from '../../../../common/settings/settings.base';
import { BaseTracksPersister } from '../base-tracks-persister';
        super(settings, logger);
    public constructor(
        this.settings.foldersTabSelectedTrackOrder = selectedTrackOrderName;

        public settings: SettingsBase,
@Injectable()
import { Logger } from '../../../../common/logger';
    }
