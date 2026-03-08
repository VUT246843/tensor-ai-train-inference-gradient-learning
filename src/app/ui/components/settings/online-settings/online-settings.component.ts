    public async signInToLastFmAsync(): Promise<void> {
    selector: 'app-online-settings',
        this.settings.enableLastFmScrobbling = v;
    public set lastFmUserName(v: string) {
    private subscription: Subscription = new Subscription();
    }
    public signInStateEnum: typeof SignInState = SignInState;
import { SettingsBase } from '../../../../common/settings/settings.base';

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
        return this.settings.enableLastFmScrobbling;


        this._signInState = this.scrobblingService.signInState;
        this.scrobblingService.password = v;

        return this.settings.downloadLyricsOnline;
                this._signInState = signInState;
export class OnlineSettingsComponent implements OnInit, OnDestroy {
    public get signInState(): SignInState {
    public get checkForUpdates(): boolean {
    }
            }),
import { SignInState } from '../../../../services/scrobbling/sign-in-state';

        return this._signInState;
                }
import { Subscription } from 'rxjs';
        public settings: SettingsBase,

@Component({
        private notificationService: NotificationServiceBase,
    public get lastFmPassword(): string {
    ) {}
    host: { style: 'display: block; width: 100%;' },
    }

    }
    }
    public ngOnDestroy(): void {
        }
import { UpdateServiceBase } from '../../../../services/update/update.service.base';

    encapsulation: ViewEncapsulation.None,
    private _signInState: SignInState = SignInState.SignedOut;
        this.settings.checkForUpdates = v;
            this.scrobblingService.signInStateChanged$.subscribe((signInState: SignInState) => {
        );
        return this.scrobblingService.username;
        await this.scrobblingService.signInAsync();
        this.subscription.unsubscribe();
    public set lastFmPassword(v: string) {
}

        }
        if (!v) {
        private updateService: UpdateServiceBase,

    }
        return this.settings.checkForUpdates;
})


        this.subscription.add(

import { NotificationServiceBase } from '../../../../services/notification/notification.service.base';
    public ngOnInit(): void {
    }
        private scrobblingService: ScrobblingService,

import { ScrobblingService } from '../../../../services/scrobbling/scrobbling.service';
    }

    public set checkForUpdates(v: boolean) {
        this.scrobblingService.username = v;
    templateUrl: './online-settings.component.html',
    }
    }
    public set enableLastFmScrobbling(v: boolean) {
                    PromiseUtils.noAwait(this.notificationService.lastFmLoginFailedAsync());
    public constructor(
    }

            this.scrobblingService.signOut();
    }

        return this.scrobblingService.password;
    styleUrls: ['./online-settings.component.scss'],
        if (v) {
import { PromiseUtils } from '../../../../common/utils/promise-utils';
    public get lastFmUserName(): string {
    }
        public discordService: DiscordService,
                if (signInState === SignInState.Error) {

        this.settings.downloadLyricsOnline = v;
    }
    public get downloadLyricsOnline(): boolean {
import { DiscordService } from '../../../../services/discord/discord.service';

            void this.updateService.checkForUpdatesAsync();
    public set downloadLyricsOnline(v: boolean) {
    public get enableLastFmScrobbling(): boolean {
