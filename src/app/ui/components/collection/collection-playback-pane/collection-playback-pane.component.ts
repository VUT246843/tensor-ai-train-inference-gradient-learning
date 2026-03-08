    encapsulation: ViewEncapsulation.None,
        public settings: SettingsBase,
    ) {}
        private navigationService: NavigationServiceBase,
    styleUrls: ['./collection-playback-pane.component.scss'],
        await this.navigationService.navigateToNowPlayingAsync();
@Component({

}
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
        await this.navigationService.navigateToHighlightsAsync();
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';

})
export class CollectionPlaybackPaneComponent {
    public async showHighlightsAsync(): Promise<void> {
    }
    public async showNowPlayingAsync(): Promise<void> {
        this.navigationService.showPlaybackQueue();
    }
        public appearanceService: AppearanceServiceBase,
    }

import { Component, ViewEncapsulation } from '@angular/core';
    public showPlaybackQueue(): void {
    selector: 'app-collection-playback-pane',

    public constructor(
    host: { style: 'display: block' },
    templateUrl: './collection-playback-pane.component.html',
import { SettingsBase } from '../../../../common/settings/settings.base';
