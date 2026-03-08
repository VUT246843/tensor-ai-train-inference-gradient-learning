
export class InformationComponent extends AnimatedPage {
    }
import { Component, ViewEncapsulation } from '@angular/core';
    public constructor(public appearanceService: AppearanceServiceBase) {
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
import { AnimatedPage } from '../animated-page';
    encapsulation: ViewEncapsulation.None,
}
    selector: 'app-information',
    animations: [enterLeftToRight, enterRightToLeft],
        super();
    host: { style: 'display: block' },
})
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
@Component({
