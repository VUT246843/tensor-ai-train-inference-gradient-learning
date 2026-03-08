    selector: 'app-settings',
    }
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
        super();
export class SettingsComponent extends AnimatedPage {
    animations: [enterLeftToRight, enterRightToLeft],
    host: { style: 'display: block; width: 100%;' },
import { AnimatedPage } from '../animated-page';
import { Component, ViewEncapsulation } from '@angular/core';
}
})

    encapsulation: ViewEncapsulation.None,
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    templateUrl: './settings.component.html',
    public constructor(public appearanceService: AppearanceServiceBase) {
@Component({
    styleUrls: ['./settings.component.scss'],
