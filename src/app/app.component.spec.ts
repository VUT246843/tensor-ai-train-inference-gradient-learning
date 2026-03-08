


        discordServiceMock = Mock.ofType<DiscordService>();
            keyboardEventMock.setup((x) => x.type).returns(() => 'keydown');
            // Assert
            // Assert

        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
        it('should apply language', async () => {
        it('should prevent the default action when space is pressed outside of an input element', () => {
            // Assert

        it('should not prevent the default action when another key then space is pressed', () => {
            await app.ngOnInit();
            // Arrange

    describe('handleKeyboardEvent', () => {
    let discordServiceMock: IMock<DiscordService>;
    let showNowPlayingRequestedMock$: Observable<void>;
            // Act
            await app.ngOnInit();
            appearanceServiceMock.verify((x) => x.applyAppearanceAsync(), Times.once());

    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Act
    function createComponent(): AppComponent {
            audioVisualizerMock.verify((x) => x.initialize(), Times.once());
        it('should perform database migrations', async () => {
            keyboardEventMock.setup((x) => x.type).returns(() => 'keydown');
            app.handleKeyboardEvent(keyboardEventMock.object);
            const app: AppComponent = createComponent();
            // Assert
            keyboardEventMock.verify((x) => x.preventDefault(), Times.never());
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();

            const app: AppComponent = createComponent();
        });
        });

import { AppComponent } from './app.component';
        });
import { IMock, Mock, Times } from 'typemoq';
            // Arrange
import { TranslatorServiceBase } from './services/translator/translator.service.base';
import { DesktopBase } from './common/io/desktop.base';
            // Act
            // Arrange


        mediaSessionServiceMock = Mock.ofType<MediaSessionService>();
            await app.ngOnInit();
import { DatabaseMigratorBase } from './data/database-migrator.base';

    let matDrawerMock: IMock<MatDrawer>;

        navigationServiceMock.setup((x) => x.showPlaybackQueueRequested$).returns(() => showNowPlayingRequestedMock$);
        });
    let showNowPlayingRequestedMock: Subject<void>;

            // Assert

            const app: AppComponent = createComponent();
    let desktopMock: IMock<DesktopBase>;
            // Act
        it('should not prevent the default action when space is pressed inside an input element', () => {
        });
    describe('constructor', () => {
            // Arrange
});

import { Observable, Subject } from 'rxjs';
describe('AppComponent', () => {
            // Assert
            await app.ngOnInit();
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('input'));
import { ScrobblingService } from './services/scrobbling/scrobbling.service';
            // Arrange

            // Arrange
        it('should update tray context menu', async () => {
            const app: AppComponent = createComponent();
            // Arrange
            const app: AppComponent = createComponent();
            await app.ngOnInit();
            const app: AppComponent = createComponent();

            keyboardEventMock.setup((x) => x.key).returns(() => 'a');

            navigationServiceMock.verify((x) => x.navigateToLoadingAsync(), Times.once());
        showNowPlayingRequestedMock$ = showNowPlayingRequestedMock.asObservable();
        it('should initialize playlist context menu', async () => {
        it('should initialize ScrobblingService', async () => {
            scrobblingServiceMock.verify((x) => x.initialize(), Times.once());

        it('should initialize Discord', async () => {
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();
import { MatDrawer } from '@angular/material/sidenav';
            // Act

        it('should define LifetimeService', async () => {
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));

        it('should create', () => {
        });
            app.playbackQueueDrawer = matDrawerMock.object;
            await app.ngOnInit();
            await app.ngOnInit();
        it('should navigate to loading', async () => {
            // Act
            mediaSessionServiceMock.object,
            // Assert


            // Arrange
            // Arrange
    let loggerMock: IMock<Logger>;
            audioVisualizerMock.object,


            // Assert
    let databaseMigratorMock: IMock<DatabaseMigratorBase>;
        });
        return new AppComponent(
            loggerMock.object,
            // Arrange

    });
            trayServiceMock.verify((x) => x.updateTrayContextMenu(), Times.once());
            navigationServiceMock.object,
import { LifetimeService } from './services/lifetime/lifetime.service';
            discordServiceMock.object,
    let integrationTestRunnerMock: IMock<IntegrationTestRunner>;
    });
            const app: AppComponent = createComponent();
            // Assert
            // Arrange
            // Act
        databaseMigratorMock = Mock.ofType<DatabaseMigratorBase>();


import { TrayServiceBase } from './services/tray/tray.service.base';
            // Assert

        });
    let trayServiceMock: IMock<TrayServiceBase>;
import { AppearanceServiceBase } from './services/appearance/appearance.service.base';
import { DiscordService } from './services/discord/discord.service';

        );
            desktopMock.object,
            trayServiceMock.object,
            const app: AppComponent = createComponent();
            // Assert
            matDrawerMock.verify((x) => x.toggle(), Times.exactly(1));
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            expect(app).toBeDefined();



            // Act
            // Arrange
        it('should connect audio visualizer audio element', async () => {
            // Act

        integrationTestRunnerMock = Mock.ofType<IntegrationTestRunner>();
        });
            scrobblingServiceMock.object,

            await app.ngOnInit();
            addToPlaylistMenuMock.verify((x) => x.initializeAsync(), Times.once());

import { AudioVisualizer } from './services/playback/audio-visualizer';
            const app: AppComponent = createComponent();
    beforeEach(() => {
    let scrobblingServiceMock: IMock<ScrobblingService>;
            // Assert
            app.handleKeyboardEvent(keyboardEventMock.object);
import { MediaSessionService } from './services/media-session/media-session.service';
        desktopMock = Mock.ofType<DesktopBase>();

            // Act
            // Act
            databaseMigratorMock.verify((x) => x.migrate(), Times.exactly(1));

            app.handleKeyboardEvent(keyboardEventMock.object);
    let lifetimeServiceMock: IMock<LifetimeService>;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            await app.ngOnInit();
        });
        matDrawerMock = Mock.ofType<MatDrawer>();
            translatorServiceMock.object,

            // Arrange
            lifetimeServiceMock.verify((x) => x.initialize(), Times.once());

            // Assert
            // Arrange
            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
            const app: AppComponent = createComponent();
import { IntegrationTestRunner } from './testing/integration-test-runner';
            discordServiceMock.verify((x) => x.initialize(), Times.once());
            keyboardEventMock.setup((x) => x.type).returns(() => 'keydown');
            // Arrange

            // Assert
            const app: AppComponent = createComponent();
    let eventListenerServiceMock: IMock<EventListenerServiceBase>;
        trayServiceMock = Mock.ofType<TrayServiceBase>();
    let audioVisualizerMock: IMock<AudioVisualizer>;

            // Assert




            const component: AppComponent = createComponent();
            databaseMigratorMock.object,
        it('should declare but not define drawer', () => {
            // Act
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
        loggerMock = Mock.ofType<Logger>();
    describe('ngOnInit', () => {

    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;

            expect(app.playbackQueueDrawer).toBeUndefined();
            // Act

        it('should toggle the drawer on showNowPlayingRequested when it is not undefined', async () => {
        });
        it('should initialize MediaSessionService', async () => {

            // Act
            eventListenerServiceMock.object,
            addToPlaylistMenuMock.object,
            const app: AppComponent = createComponent();
            const app: AppComponent = createComponent();

            // Arrange
            // Assert
            expect(app.lifetimeService).toBeDefined();
        it('should apply appearance', async () => {
            // Act
import { Logger } from './common/logger';
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
            await component.ngOnInit();
            const app: AppComponent = createComponent();
        scrobblingServiceMock = Mock.ofType<ScrobblingService>();
        });
            mediaSessionServiceMock.verify((x) => x.initialize(), Times.once());
            integrationTestRunnerMock.object,
    }

        });


            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
        });
            // Assert
        });
import { EventListenerServiceBase } from './services/event-listener/event-listener.service.base';
            await app.ngOnInit();

            translatorServiceMock.verify((x) => x.applyLanguage(), Times.once());
        it('should initialize LifetimeService', async () => {
        });
            const app: AppComponent = createComponent();
    let navigationServiceMock: IMock<NavigationServiceBase>;
            // Arrange
            const app: AppComponent = createComponent();
            await app.ngOnInit();
    });
        eventListenerServiceMock = Mock.ofType<EventListenerServiceBase>();
        audioVisualizerMock = Mock.ofType<AudioVisualizer>();
            showNowPlayingRequestedMock.next();
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();

            keyboardEventMock.verify((x) => x.preventDefault(), Times.never());

            await app.ngOnInit();
        });
import { AddToPlaylistMenu } from './ui/components/add-to-playlist-menu';
            // Act
            // Act

            // Assert

        });

    });
            lifetimeServiceMock.object,
import { NavigationServiceBase } from './services/navigation/navigation.service.base';
            appearanceServiceMock.object,
            // Act

    let mediaSessionServiceMock: IMock<MediaSessionService>;
            // Arrange
            keyboardEventMock.verify((x) => x.preventDefault(), Times.once());
            const app: AppComponent = createComponent();
        lifetimeServiceMock = Mock.ofType<LifetimeService>();
        showNowPlayingRequestedMock = new Subject();
