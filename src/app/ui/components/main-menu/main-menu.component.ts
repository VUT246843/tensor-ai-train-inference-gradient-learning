
    }

    public async goToManageCollectionAsync(): Promise<void> {
        await this.navigationService.navigateToInformationAsync();
    public async goToInformationAsync(): Promise<void> {
import { ProductInformation } from '../../../common/application/product-information';
    templateUrl: './main-menu.component.html',
@Component({
    }
    public applicationName: string = ProductInformation.applicationName;
import { UpdateServiceBase } from '../../../services/update/update.service.base';
        await this.navigationService.navigateToManageCollectionAsync();
        private navigationService: NavigationServiceBase,

import { Component, ViewEncapsulation } from '@angular/core';
    selector: 'app-main-menu',
    host: { style: 'display: block' },
    }

    public async goToSettingsAsync(): Promise<void> {
        public updateService: UpdateServiceBase,
        await this.navigationService.navigateToSettingsAsync();
})
    ) {}
        await this.updateService.downloadLatestReleaseAsync();

export class MainMenuComponent {
    public constructor(
}
    }
    public async downloadLatestReleaseAsync(): Promise<void> {
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./main-menu.component.scss'],

