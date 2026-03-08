            }),
        this.settings.invertNotificationAreaIconColor = v;

import { SettingsBase } from '../../common/settings/settings.base';
        this.updateTrayIcon();
    }
        };
    }
    public get needInvertNotificationAreaIconColor(): boolean {
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
export class TrayService implements TrayServiceBase {

    public get invertNotificationAreaIconColor(): boolean {
    }
    private subscription: Subscription = new Subscription();
            showDopamineLabel: this.translatorService.get('show-dopamine'),
        const arg = {

        private translatorService: TranslatorServiceBase,
    }

    public constructor(
    }

            this.translatorService.languageChanged$.subscribe(() => {
    public set invertNotificationAreaIconColor(v: boolean) {
    }

        this.subscription.add(
        private ipcProxy: IpcProxyBase,
import { Subscription } from 'rxjs';
        return os.platform() !== 'darwin';
}
        return this.settings.invertNotificationAreaIconColor;
        );
import { TrayServiceBase } from './tray.service.base';
@Injectable()
        this.ipcProxy.sendToMainProcess('update-tray-context-menu', arg);
import { Injectable } from '@angular/core';
            exitLabel: this.translatorService.get('exit'),

        this.ipcProxy.sendToMainProcess('update-tray-icon', undefined);
    public updateTrayContextMenu(): void {
        this.updateTrayContextMenu();
import { TranslatorServiceBase } from '../translator/translator.service.base';
    private updateTrayIcon(): void {
                this.updateTrayContextMenu();
        private settings: SettingsBase,
import * as os from 'os';
    ) {

