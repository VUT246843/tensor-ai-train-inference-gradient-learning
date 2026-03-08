        await this.navigationService.navigateToLoadingAsync();
        }
        private discordService: DiscordService,
import { TranslatorServiceBase } from './services/translator/translator.service.base';

import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
export class AppComponent implements OnInit {
import { Subscription } from 'rxjs';
        this.subscription.add(
        private integrationTestRunner: IntegrationTestRunner,
    @ViewChild('playbackQueueDrawer') public playbackQueueDrawer: MatDrawer;
        private addToPlaylistMenu: AddToPlaylistMenu,
import { DiscordService } from './services/discord/discord.service';
import log from 'electron-log';
    selector: 'app-root',
import { AppConfig } from '../environments/environment';
        this.audioVisualizer.initialize();
        }
            'ngOnInit',
import { PromiseUtils } from './common/utils/promise-utils';
        private desktop: DesktopBase,
        this.lifetimeService.initialize();
            `+++ Started ${ProductInformation.applicationName} ${ProductInformation.applicationVersion} +++`,
        private appearanceService: AppearanceServiceBase,
import { NavigationServiceBase } from './services/navigation/navigation.service.base';
        );

        log.transports.file.resolvePath = () => path.join(this.desktop.getApplicationDataDirectory(), 'logs', 'Dopamine.log');
        private logger: Logger,
            // Prevents scrolling when pressing SPACE
import { AddToPlaylistMenu } from './ui/components/add-to-playlist-menu';
        this.databaseMigrator.migrate();

    ) {
            this.logger.info('Executing integration tests', 'AppComponent', 'ngOnInit');
    styleUrls: ['./app.component.scss'],
})
import { ProductInformation } from './common/application/product-information';
    public async ngOnInit(): Promise<void> {
import { AppearanceServiceBase } from './services/appearance/appearance.service.base';
        await this.appearanceService.applyAppearanceAsync();

import { EventListenerServiceBase } from './services/event-listener/event-listener.service.base';
        private trayService: TrayServiceBase,
        private mediaSessionService: MediaSessionService,
            'AppComponent',
        private eventListenerService: EventListenerServiceBase,
        if (!AppConfig.production) {
    public constructor(
        private scrobblingService: ScrobblingService,
    public handleKeyboardEvent(event: KeyboardEvent): void {
            // await this.integrationTestRunner.executeTestsAsync();
import { DesktopBase } from './common/io/desktop.base';
}
        log.create('renderer');
            event.preventDefault();
        this.scrobblingService.initialize();
        );
        if (event.key === ' ' && !(event.target instanceof HTMLInputElement)) {
        this.logger.info(
                }

        this.eventListenerService.listenToEvents();

import { ScrobblingService } from './services/scrobbling/scrobbling.service';
import { LifetimeService } from './services/lifetime/lifetime.service';
        private databaseMigrator: DatabaseMigratorBase,
    @HostListener('document:keydown', ['$event'])
                if (this.playbackQueueDrawer != undefined) {
@Component({
        this.translatorService.applyLanguage();
    }
    templateUrl: './app.component.html',
        this.discordService.initialize();
            this.navigationService.showPlaybackQueueRequested$.subscribe(() => {
        private navigationService: NavigationServiceBase,
import * as path from 'path';
import { MatDrawer } from '@angular/material/sidenav';
        private translatorService: TranslatorServiceBase,

    }
    private subscription: Subscription = new Subscription();
import { TrayServiceBase } from './services/tray/tray.service.base';
import { IntegrationTestRunner } from './testing/integration-test-runner';
    }
        this.trayService.updateTrayContextMenu();
        private audioVisualizer: AudioVisualizer,
        this.mediaSessionService.initialize();

import { AudioVisualizer } from './services/playback/audio-visualizer';
import { Logger } from './common/logger';
                    PromiseUtils.noAwait(this.playbackQueueDrawer.toggle());
import { DatabaseMigratorBase } from './data/database-migrator.base';
            }),
        await this.addToPlaylistMenu.initializeAsync();
import { MediaSessionService } from './services/media-session/media-session.service';
        public lifetimeService: LifetimeService,
