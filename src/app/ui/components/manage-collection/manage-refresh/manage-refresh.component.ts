
}
        private indexingService: IndexingService,
})
import { IndexingService } from '../../../../services/indexing/indexing.service';
    templateUrl: './manage-refresh.component.html',
export class ManageRefreshComponent {
        this.indexingService.indexCollectionAlways();
    styleUrls: ['./manage-refresh.component.scss'],
    host: { style: 'display: block; width: 100%;' },
        public settings: SettingsBase,

import { SettingsBase } from '../../../../common/settings/settings.base';
    encapsulation: ViewEncapsulation.None,
@Component({
    selector: 'app-manage-refresh',
import { Component, ViewEncapsulation } from '@angular/core';
    public refreshNow(): void {
    public constructor(
    }
    ) {}
