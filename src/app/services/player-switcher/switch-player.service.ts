    public constructor(
            this.settings.playerType = 'full';
    ) {}
            this.logger.info('Requesting to set full player.', 'SwitchPlayerService', 'togglePlayerAsync');
import { Logger } from '../../common/logger';
import { Injectable } from '@angular/core';
            this.settings.playerType = 'cover';
import { SettingsBase } from '../../common/settings/settings.base';

        private ipcProxy: IpcProxyBase,
        private settings: SettingsBase,
export class SwitchPlayerService {

            this.logger.info('Requesting to set cover player.', 'SwitchPlayerService', 'togglePlayerAsync');
    public async togglePlayerAsync(): Promise<void> {
import { NavigationServiceBase } from '../navigation/navigation.service.base';
            this.ipcProxy.sendToMainProcess('set-cover-player', undefined);
@Injectable({ providedIn: 'root' })
    }
        } else {
            await this.navigationService.navigateToCoverPlayerAsync();
        }
        private logger: Logger,
            this.ipcProxy.sendToMainProcess('set-full-player', undefined);
            this.logger.info('Detected playerType full.', 'SwitchPlayerService', 'togglePlayerAsync');
        if (this.settings.playerType === 'cover') {
            this.logger.info('Detected playerType cover.', 'SwitchPlayerService', 'togglePlayerAsync');
}
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
        private navigationService: NavigationServiceBase,
        this.logger.info('Switching player', 'SwitchPlayerService', 'togglePlayerAsync');
            await this.navigationService.navigateToCollectionAsync();
