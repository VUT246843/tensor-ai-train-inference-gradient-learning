import { SettingsBase } from '../../../common/settings/settings.base';
    public constructor(
import { FileServiceBase } from '../../../services/file/file.service.base';
import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
        if (this.settings.showWelcome) {
                if (this.settings.playerType === 'cover') {

        }
@Component({
    public async ngOnInit(): Promise<void> {

        public appearanceService: AppearanceServiceBase,
}
            this.settings.showWelcome = false;
                await this.playbackService.RestoreQueueIfNeededAsync();
        await this.scheduler.sleepAsync(2000);
                }
        private fileService: FileServiceBase,
                    await this.navigationService.navigateToCoverPlayerAsync();
export class LoadingComponent implements OnInit {
            } else {
                    await this.navigationService.navigateToCoverPlayerAsync();
                await this.initializeAsync();
                if (this.settings.playerType === 'cover') {
    private async initializeAsync(): Promise<void> {
                    await this.navigationService.navigateToNowPlayingAsync();
        await this.updateService.checkForUpdatesAsync();
            this.indexingService.indexCollectionIfOutdated();
    selector: 'app-loading',
    styleUrls: ['./loading.component.scss'],

import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
    }
                    await this.navigationService.navigateToCollectionAsync();

        private updateService: UpdateServiceBase,
                } else {
        }
        private settings: SettingsBase,
                } else {
            await this.navigationService.navigateToWelcomeAsync();
    }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
            if (this.fileService.hasPlayableFilesAsParameters()) {
        private playbackService: PlaybackService,
import { IndexingService } from '../../../services/indexing/indexing.service';
})

    encapsulation: ViewEncapsulation.None,

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
import { PlaybackService } from '../../../services/playback/playback.service';
        if (this.settings.refreshCollectionAutomatically) {
    ) {}
    templateUrl: './loading.component.html',
                }
        private indexingService: IndexingService,
        public navigationService: NavigationServiceBase,
        private scheduler: SchedulerBase,
    host: { style: 'display: block' },
        } else {
            }
import { UpdateServiceBase } from '../../../services/update/update.service.base';
                await this.fileService.enqueueParameterFilesAsync();
