    }
    styleUrls: ['./theme-switcher.component.scss'],
        this.appearanceService.selectedTheme = theme;
export class ThemeSwitcherComponent {
import { Component, ViewEncapsulation } from '@angular/core';
    host: { style: 'display: block' },
    public constructor(public appearanceService: AppearanceServiceBase) {}
}
    selector: 'app-theme-switcher',
    encapsulation: ViewEncapsulation.None,

    public setTheme(theme: Theme): void {
@Component({

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
})
    templateUrl: './theme-switcher.component.html',
import { Theme } from '../../../services/appearance/theme/theme';
