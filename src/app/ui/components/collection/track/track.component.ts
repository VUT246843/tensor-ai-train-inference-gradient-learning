    @Input() public track: TrackModel;
    templateUrl: './track.component.html',

import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
        public settings: SettingsBase,
import { SettingsBase } from '../../../../common/settings/settings.base';
        public appearanceService: AppearanceServiceBase,
    public constructor(
}

@Component({
    styleUrls: ['./track.component.scss'],
})
export class TrackComponent {
    @Input() public canShowHeader: boolean = false;
import { Component, Input } from '@angular/core';
    host: { style: 'display: block' },
import { TrackModel } from '../../../../services/track/track-model';
    ) {}
    selector: 'app-track',
