    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    animations: [enterLeftToRight, enterRightToLeft],
    }
    }
})
        this.page = value;
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';

    public get isLoaded(): boolean {
    encapsulation: ViewEncapsulation.None,
        super();
        private welcomeService: WelcomeServiceBase,
    }
import { AnimatedPage } from '../animated-page';

        return this.welcomeService.isLoaded;
import { WelcomeServiceBase } from '../../../services/welcome/welcome.service.base';
@Component({
    styleUrls: ['./welcome.component.scss'],
    }
    ) {
    public get currentPage(): number {
        return this.page;
    public totalPages: number = 7;
        public appearanceService: AppearanceServiceBase,
import { Component, ViewEncapsulation } from '@angular/core';
}
    public set currentPage(value: number) {
    public constructor(
export class WelcomeComponent extends AnimatedPage {



import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    host: { style: 'display: block' },
