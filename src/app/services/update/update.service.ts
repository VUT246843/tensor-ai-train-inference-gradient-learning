                        `Latest (${latestRelease}) > Current (${currentRelease}). Notifying user.`,
import { Injectable } from '@angular/core';
                        'UpdateService',
                    ProductInformation.applicationName.toLowerCase(),
    public get latestRelease(): string {
                    );
        } else {
        if (this.settings.checkForUpdates) {
                        `Latest (${latestRelease}) <= Current (${currentRelease}). Nothing to do.`,
                } else {
}
        private logger: Logger,
                }
    private _latestRelease: string = '';
    }
import { DesktopBase } from '../../common/io/desktop.base';

                        'checkForUpdatesAsync',
                    this.logger.info(
                this.logger.error(e, 'Could not check for updates', 'UpdateService', 'checkForUpdatesAsync');
        return this._isUpdateAvailable;

import { GitHubApi } from '../../common/api/git-hub/git-hub.api';
                this.logger.info(`Current=${currentRelease}, Latest=${latestRelease}`, 'UpdateService', 'checkForUpdatesAsync');

    public constructor(
    }
                    this._latestRelease = latestRelease;
        private gitHub: GitHubApi,
    public get isUpdateAvailable(): boolean {
@Injectable()
import { VersionComparer } from './version-comparer';


import { UpdateServiceBase } from './update.service.base';
    public async downloadLatestReleaseAsync(): Promise<void> {
import { Logger } from '../../common/logger';
        );
import { SettingsBase } from '../../common/settings/settings.base';
        return this._latestRelease;
                if (VersionComparer.isNewerVersion(currentRelease, latestRelease)) {
        private desktop: DesktopBase,
            this.logger.info('Checking for updates', 'UpdateService', 'checkForUpdatesAsync');
                const latestRelease: string = await this.gitHub.getLatestReleaseAsync(
                        'UpdateService',

    }
export class UpdateService implements UpdateServiceBase {
        private settings: SettingsBase,

                    );
                    'digimezzo',
                );

    }
            } catch (e: unknown) {
                    this.logger.info(
    ) {}

            this.logger.info('Not checking for updates', 'UpdateService', 'checkForUpdatesAsync');
            }
                const currentRelease: string = ProductInformation.applicationVersion;
            try {
                    this.settings.checkForUpdatesIncludesPreReleases,
                    this._isUpdateAvailable = true;
        }
        await this.desktop.openLinkAsync(
            `https://github.com/digimezzo/${ProductInformation.applicationName.toLowerCase()}/releases/tag/v${this.latestRelease}`,
    public _isUpdateAvailable: boolean = false;
    public async checkForUpdatesAsync(): Promise<void> {
                        'checkForUpdatesAsync',
import { ProductInformation } from '../../common/application/product-information';
