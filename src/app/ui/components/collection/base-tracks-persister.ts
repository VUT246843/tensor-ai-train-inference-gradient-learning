            this.selectedTrackOrder = TrackOrder[this.getSelectedTrackOrderFromSettings()] as TrackOrder;
        try {
    ) {
    public getSelectedTrackOrder(): TrackOrder {
            this.saveSelectedTrackOrderToSettings(TrackOrder[selectedTrackOrder]);

    }


        return this.selectedTrackOrder;
import { SettingsBase } from '../../../common/settings/settings.base';
    public setSelectedTrackOrder(selectedTrackOrder: TrackOrder): void {
            return this.defaultTrackOrder;
    }
}
    public abstract getSelectedTrackOrderFromSettings(): string;
            this.logger.error(e, 'Could not set selected track order', 'BaseTracksPersister', 'setSelectedTrackOrder');
import { StringUtils } from '../../../common/utils/string-utils';

    private selectedTrackOrder: TrackOrder;
    public defaultTrackOrder: TrackOrder = TrackOrder.byAlbum;
    private initializeFromSettings(): void {

import { Injectable } from '@angular/core';
import { TrackOrder } from './track-order';
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedTrackOrderFromSettings())) {
import { Logger } from '../../../common/logger';

            this.selectedTrackOrder = selectedTrackOrder;
        this.initializeFromSettings();
        }
        } catch (e: unknown) {
        if (this.selectedTrackOrder == undefined) {

        public logger: Logger,
@Injectable()
export abstract class BaseTracksPersister {

        }
    }
    public constructor(
        }
    }
        public settings: SettingsBase,
    public abstract saveSelectedTrackOrderToSettings(selectedTrackOrderName: string): void;
