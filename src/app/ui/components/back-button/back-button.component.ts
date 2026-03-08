@Component({
        await this.navigationService.navigateToCollectionAsync();
        await this.indexingService.indexCollectionIfOptionsHaveChangedAsync();
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
})
import { Component, ViewEncapsulation } from '@angular/core';
export class BackButtonComponent {
    templateUrl: './back-button.component.html',
    public constructor(
    selector: 'app-back-button',
    encapsulation: ViewEncapsulation.None,

    }
}
        private indexingService: IndexingService,
import { IndexingService } from '../../../services/indexing/indexing.service';

    host: { style: 'display: block' },
    ) {}
    public async goBackToCollectionAsync(): Promise<void> {
        public navigationService: NavigationServiceBase,
    styleUrls: ['./back-button.component.scss'],
