@Component({
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
})

import { AnimatedPage } from '../animated-page';
    animations: [enterLeftToRight, enterRightToLeft],
export class ManageCollectionComponent extends AnimatedPage {
    encapsulation: ViewEncapsulation.None,
    }
import { Component, ViewEncapsulation } from '@angular/core';
        super();
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
}
    public constructor(public appearanceService: AppearanceServiceBase) {
    templateUrl: './manage-collection.component.html',
    selector: 'app-manage-collection',
    styleUrls: ['./manage-collection.component.scss'],
