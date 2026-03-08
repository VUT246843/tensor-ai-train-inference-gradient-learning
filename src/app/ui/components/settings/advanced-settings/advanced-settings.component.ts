        private navigationService: NavigationServiceBase,
    }
    }
    encapsulation: ViewEncapsulation.None,

    public async showWelcomeScreenAsync(): Promise<void> {
}

import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
import { Component, ViewEncapsulation } from '@angular/core';
})
        await this.navigationService.navigateToWelcomeAsync();
    public constructor(
export class AdvancedSettingsComponent {
import { SettingsBase } from '../../../../common/settings/settings.base';

        private logViewer: LogViewer,
        this.logViewer.viewLog();
    host: { style: 'display: block; width: 100%;' },
        public settings: SettingsBase,
    public viewLog(): void {
import { LogViewer } from '../../../../common/io/log-viewer';
    templateUrl: './advanced-settings.component.html',
    selector: 'app-advanced-settings',
@Component({
    styleUrls: ['./advanced-settings.component.scss'],
    ) {}
