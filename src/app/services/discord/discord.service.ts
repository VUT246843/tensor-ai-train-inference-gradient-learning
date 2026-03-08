            this.playbackService.playbackSkipped$.subscribe(() => {
                this.updatePresence();
            const largeImageKey: string = 'icon';
        this._subscription = new Subscription();
            this.playbackService.playbackStopped$.subscribe(() => {
            this.clearPresence();
    }
    }
            this.playbackService.playbackPaused$.subscribe(() => {
            clearTimeout(this._updatePresenceTimeout);

            }),
        }
                startTime = this.dateProxy.now() - this.calculateElapsedTimeInMilliseconds();
            if (this.playbackService.canPause) {
import { PresenceArgs } from './presence-args';
        if (this.settings.enableDiscordRichPresence) {
        private translatorService: TranslatorServiceBase,
            }),
            this.playbackService.playbackStarted$.subscribe(() => {
        this._subscription.add(
        this._subscription.add(
    private calculateElapsedTimeInMilliseconds(): number {

            let smallImageKey: string = 'pause';
    public get enableDiscordRichPresence(): boolean {
            this.addSubscriptions();
            this._subscription.unsubscribe();
            this.removeSubscriptions();
        this._subscription.add(
        );
    }
    ) {}

    }
        return this.settings.enableDiscordRichPresence;
        }, this._updatePresenceTimeoutMillis);
                this.clearPresence();

import { DateProxy } from '../../common/io/date-proxy';

    public set enableDiscordRichPresence(v: boolean) {
                startTime: startTime,

                smallImageKey = 'play';
import { TranslatorServiceBase } from '../translator/translator.service.base';
            this.ipcProxy.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args));
    private clearPresence(): void {
@Injectable({ providedIn: 'root' })

    private addSubscriptions(): void {
                smallImageText = this.translatorService.get('playing');
        this.initialize();
import { SettingsBase } from '../../common/settings/settings.base';

                largeImageText: largeImageText,
    private updatePresence(): void {
                return;
        this._subscription.add(
import { PlaybackService } from '../playback/playback.service';
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
        this.ipcProxy.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.ClearPresence, undefined));
        return this.playbackService.progress.progressSeconds * 1000;
            }),
            };
            let smallImageText: string = this.translatorService.get('paused');
            }
    }
        );
import { DiscordApiCommand } from './discord-api-command';
                shouldSendTimestamps = true;
            if (this.playbackService.currentTrack == undefined) {

        this._subscription.add(
                this.logger.info(`No currentTrack was found. Not setting Discord Rich Presence.`, 'DiscordService', 'updatePresence');
            const largeImageText: string = this.translatorService.get('playing-with-dopamine');
        private playbackService: PlaybackService,
    private _updatePresenceTimeout: ReturnType<typeof setTimeout>;
        if (this._updatePresenceTimeout) {
        this._updatePresenceTimeout = setTimeout(() => {
                artists: this.playbackService.currentTrack.artists,

import { Subscription } from 'rxjs';

    public initialize(): void {
            }),

        }
                this.updatePresence();
import { DiscordApiCommandType } from './discord-api-command-type';

        this.settings.enableDiscordRichPresence = v;

        );
            }),
        private settings: SettingsBase,
    }

    private removeSubscriptions(): void {
            }
        private logger: Logger,
                largeImageKey: largeImageKey,
                shouldSendTimestamps: shouldSendTimestamps,

        } else {
            let shouldSendTimestamps: boolean = false;
}
                this.updatePresence();
export class DiscordService {
        );
        private dateProxy: DateProxy,
        );
import { Injectable } from '@angular/core';
    public constructor(
            this.playbackService.playbackResumed$.subscribe(() => {
                this.updatePresence();
            let startTime: number = 0;
                title: this.playbackService.currentTrack.title,

            const args: PresenceArgs = {
            this.updatePresence();
                smallImageText: smallImageText,


                smallImageKey: smallImageKey,
        if (this._subscription) {
        private ipcProxy: IpcProxyBase,
import { Logger } from '../../common/logger';
    }
        }
    private _updatePresenceTimeoutMillis: number = 1000;

    private _subscription: Subscription | undefined;
    }
