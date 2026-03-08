    templateUrl: './playback-indicator.component.html',

    styleUrls: ['./playback-indicator.component.scss'],
    host: { style: 'display: block' },
    public isSelected: boolean;
export class PlaybackIndicatorComponent {
    encapsulation: ViewEncapsulation.None,
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
})
    public constructor(public appearanceService: AppearanceServiceBase) {}
}
import { Component, Input, ViewEncapsulation } from '@angular/core';
    selector: 'app-playback-indicator',
@Component({
    @Input()

