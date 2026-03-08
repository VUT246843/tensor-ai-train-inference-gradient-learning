            const args = {


        });

        dateProxyMock.setup((x) => x.now()).returns(() => 5000);
            ipcProxyMock.reset();

                shouldSendTimestamps: false,
            settingsMock.enableDiscordRichPresence = false;
            // Assert
            jest.runAllTimers();
                new PlaybackStarted(new TrackModel(new Track('Path1'), dateTimeMock.object, translatorServiceMock.object, ''), false),
            settingsMock.enableDiscordRichPresence = true;
import { TrackModel } from '../track/track-model';




            // Act
        });
            ipcProxyMock.verify(
                smallImageText: 'Playing',
            jest.runAllTimers();

            ipcProxyMock.object,
        playbackServiceMock.setup((x) => x.playbackResumed$).returns(() => playbackServicePlaybackResumedMock$);
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),

            setUpPlaybackServiceMock(false, false);
            // Assert

            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());

                startTime: 3000,
            setUpPlaybackServiceMock(false, false);
            // Arrange
            // Arrange
            // Arrange
                title: 'title',
            setUpPlaybackServiceMock(false, false);

            settingsMock.enableDiscordRichPresence = true;

                shouldSendTimestamps: false,
                startTime: 3000,
        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackServicePlaybackStoppedMock$);


            // Assert
        });

            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
        });


            // Assert
            playbackServicePlaybackResumedMock.next();
            settingsMock.enableDiscordRichPresence = true;
            );
        it('should not set Discord presence to "Playing" after a track is skipped and enableRichPresence is false and playbackService can pause', () => {
                largeImageKey: 'icon',
            jest.runAllTimers();
                artists: 'artist1, artist2',
            jest.useFakeTimers();
            };
            ipcProxyMock.verify(
            ipcProxyMock.reset();
                largeImageKey: 'icon',
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
        it('should set Discord presence to "Playing" after a track is resumed and enableRichPresence is true', () => {


import { DateProxy } from '../../common/io/date-proxy';
            // Arrange
            // Act
                largeImageText: 'Playing with Dopamine',

            // Arrange
                smallImageText: 'Playing',
                smallImageKey: 'play',
            const args = {
                Times.once(),
                largeImageText: 'Playing with Dopamine',
                shouldSendTimestamps: true,
                startTime: 3000,
            service.enableDiscordRichPresence = false;
            // Act

            jest.runAllTimers();
            // Arrange
            );
                new PlaybackStarted(new TrackModel(new Track('Path1'), dateTimeMock.object, translatorServiceMock.object, ''), false),

            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModel, false));

            playbackServicePlaybackPausedMock.next();
                largeImageKey: 'icon',

            // Assert

        settingsMock = new SettingsMock();
            jest.useFakeTimers();
                smallImageText: 'Paused',
                largeImageText: 'Playing with Dopamine',
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            };

        playbackServiceMock.setup((x) => x.playbackSkipped$).returns(() => playbackServicePlaybackSkippedMock$);
                largeImageText: 'Playing with Dopamine',
        dateTimeMock = Mock.ofType<DateTime>();
            ipcProxyMock.reset();
            service.enableDiscordRichPresence = true;
            service.initialize();
            service.initialize();
        const playbackServicePlaybackStoppedMock$: Observable<void> = playbackServicePlaybackStoppedMock.asObservable();
            // Act
                smallImageKey: 'play',
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
                artists: 'artist1, artist2',
        it('should set Discord presence to "Playing" if a track is already playing and enableRichPresence is true', () => {
            setUpPlaybackServiceMock(false, true);
                artists: 'artist1, artist2',
            );

        it('should set Discord presence to "Playing" after a track starts playing and Discord Rich Presence is enabled', () => {

            settingsMock.enableDiscordRichPresence = true;

                smallImageKey: 'play',
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            setUpPlaybackServiceMock(false, true);
            setUpPlaybackServiceMock(false, false);
            const service: DiscordService = createDiscordService();

        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStartedMock$);
            service.initialize();
    let dateProxyMock: IMock<DateProxy>;
                shouldSendTimestamps: true,
            translatorServiceMock.object,

            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());

                artists: 'artist1, artist2',
            const service: DiscordService = createDiscordService();
            playbackServicePlaybackSkippedMock.next();
        track.artists = ';artist1;;artist2';
        const playbackServicePlaybackStartedMock$: Observable<PlaybackStarted> = playbackServicePlaybackStartedMock.asObservable();

            // Act
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
                Times.once(),
        playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel);
                smallImageKey: 'pause',

        playbackServiceMock.setup((x) => x.progress).returns(() => progress);
import { IMock, It, Mock, Times } from 'typemoq';
                smallImageKey: 'pause',
                smallImageText: 'Paused',
            ipcProxyMock.verify(

            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
            ipcProxyMock.verify(

            jest.useFakeTimers();
                title: 'title',

import { PlaybackService } from '../playback/playback.service';

            // Arrange
            service.enableDiscordRichPresence = false;
    let dateTimeMock: IMock<DateTime>;
import { Observable, Subject } from 'rxjs';
import { TranslatorServiceBase } from '../translator/translator.service.base';
            jest.runAllTimers();
import { SettingsBase } from '../../common/settings/settings.base';
        });
            // Act
            service.enableDiscordRichPresence = false;
        playbackServiceMock.setup((x) => x.canPause).returns(() => canPause);

                title: 'title',

            playbackServicePlaybackStoppedMock.next();
            // Arrange
            );
    let playbackServicePlaybackResumedMock: Subject<void>;

            );
            const service: DiscordService = createDiscordService();

            playbackServicePlaybackResumedMock.next();
                title: 'title',
    });
                Times.once(),
            // Arrange
                largeImageText: 'Playing with Dopamine',

            setUpPlaybackServiceMock(true, true);

        loggerMock = Mock.ofType<Logger>();
                artists: 'artist1, artist2',
            service.enableDiscordRichPresence = true;
    let loggerMock: IMock<Logger>;
                artists: 'artist1, artist2',
            // Arrange
            );

            const service: DiscordService = createDiscordService();
            // Assert
        });


                artists: 'artist1, artist2',
        return new DiscordService(

            loggerMock.object,
            settingsMock,
        });
            setUpPlaybackServiceMock(false, true);

            service.initialize();
            jest.runAllTimers();
            // Assert

            // Assert
            setUpPlaybackServiceMock(false, true);
        });
                largeImageText: 'Playing with Dopamine',
            jest.useFakeTimers();
        });
            // Arrange
            const service: DiscordService = createDiscordService();
        it('should set Discord presence to "Playing" after a track starts playing and enableRichPresence is true', () => {

            playbackServicePlaybackSkippedMock.next();

            jest.useFakeTimers();
            ipcProxyMock.reset();

            const service: DiscordService = createDiscordService();
            setUpPlaybackServiceMock(false, false);
            ipcProxyMock.reset();
            // Assert


            setUpPlaybackServiceMock(false, true);
            setUpPlaybackServiceMock(false, false);


                shouldSendTimestamps: true,
            const args = {
            jest.useFakeTimers();

        it('should clear Discord presence after a track is stopped and enableRichPresence is true', () => {
                largeImageKey: 'icon',
            const service: DiscordService = createDiscordService();
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.ClearPresence, undefined)),

        });
            };

            ipcProxyMock.reset();


        it('should clear Discord presence after a track is stopped and Discord Rich Presence is enabled', () => {
            playbackServicePlaybackSkippedMock.next();

            // Assert
            jest.runAllTimers();
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
            // Assert
    }
        it('should not set Discord presence to "Paused" after a track is paused and enableRichPresence is false', () => {
            const service: DiscordService = createDiscordService();
                startTime: 0,
        });
            const args = {
    describe('constructor', () => {
            const service: DiscordService = createDiscordService();
            const args = {
                largeImageText: 'Playing with Dopamine',
            };
                largeImageKey: 'icon',
            const service: DiscordService = createDiscordService();
            // Act

            );
            // Arrange
    describe('initialize', () => {

            const service: DiscordService = createDiscordService();
            service.enableDiscordRichPresence = true;
        });
            };
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;

            jest.useFakeTimers();
    let ipcProxyMock: IMock<IpcProxyBase>;
            );
            playbackServicePlaybackPausedMock.next();
                startTime: 3000,


                shouldSendTimestamps: false,
            setUpPlaybackServiceMock(false, true);
            jest.runAllTimers();
            const service: DiscordService = createDiscordService();
                largeImageText: 'Playing with Dopamine',

                largeImageText: 'Playing with Dopamine',
                Times.once(),
            };
    describe('enableDiscordRichPresence', () => {

            setUpPlaybackServiceMock(false, true);
    let playbackServiceMock: IMock<PlaybackService>;
                smallImageText: 'Paused',
        translatorServiceMock.setup((x) => x.get('playing')).returns(() => 'Playing');
        dateProxyMock = Mock.ofType<DateProxy>();

        });
    let playbackServicePlaybackSkippedMock: Subject<void>;
            settingsMock.enableDiscordRichPresence = false;
        it('should not set Discord presence to "Playing" after a track is resumed and Discord Rich Presence is disabled', () => {
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),

            const service: DiscordService = createDiscordService();
            jest.runAllTimers();
            playbackServicePlaybackStoppedMock.next();
            // Arrange
            ipcProxyMock.reset();
            };
        });
        });
            jest.useFakeTimers();

            ipcProxyMock.reset();
            ipcProxyMock.verify(
            // Act

        trackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, '');
            setUpPlaybackServiceMock(false, true);
                largeImageKey: 'icon',
            );
            jest.useFakeTimers();
            service.initialize();
            // Arrange
            ipcProxyMock.reset();
            jest.runAllTimers();
            // Act
            service.initialize();


                title: 'title',
            jest.useFakeTimers();
        it('should not set Discord presence to "Playing" after a track is skipped and enableRichPresence is false and playbackService cannot pause', () => {
            ipcProxyMock.verify(
                startTime: 3000,
                startTime: 3000,
import { Track } from '../../data/entities/track';
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),

        });
            jest.runAllTimers();
                shouldSendTimestamps: true,
                artists: 'artist1, artist2',
            jest.runAllTimers();
        playbackServicePlaybackPausedMock = new Subject();
            service.enableDiscordRichPresence = false;
        it('should clear Discord presence if Discord Rich Presence is disabled', () => {
            // Act


            service.initialize();


                smallImageText: 'Playing',
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModel, false));
            const service: DiscordService = createDiscordService();
        });
import { DiscordService } from './discord.service';
            const service: DiscordService = createDiscordService();
                title: 'title',
                smallImageKey: 'play',
        it('should not set Discord presence to "Playing" after a track is skipped and Discord Rich Presence is disabled and playbackService cannot pause', () => {
                shouldSendTimestamps: true,
            // Act
        });
            // Assert
                largeImageKey: 'icon',

    let playbackServicePlaybackPausedMock: Subject<void>;
                startTime: 3000,


            service.enableDiscordRichPresence = false;


        playbackServiceMock.setup((x) => x.playbackPaused$).returns(() => playbackServicePlaybackPausedMock$);
            ipcProxyMock.reset();

            // Act
            settingsMock.enableDiscordRichPresence = false;
            playbackServicePlaybackResumedMock.next();
                Times.once(),
            playbackServicePlaybackPausedMock.next();


            const args = {
            // Arrange
            const args = {


                Times.once(),


            // Assert
            ipcProxyMock.verify(

            jest.runAllTimers();
            jest.runAllTimers();

            ipcProxyMock.reset();
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
            jest.useFakeTimers();
            service.enableDiscordRichPresence = false;

                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.ClearPresence, undefined)),

            service.initialize();
                Times.once(),
        it('should set Discord presence to "Playing" after a track is skipped and Discord Rich Presence is enabled and playbackService can pause', () => {
            );
                smallImageKey: 'play',
            ipcProxyMock.verify(

            setUpPlaybackServiceMock(false, false);


            jest.runAllTimers();
            ipcProxyMock.verify(
        it('should not set Discord presence after a track starts playing and enableRichPresence is false', () => {
            };
            settingsMock.enableDiscordRichPresence = true;


            jest.useFakeTimers();
            ipcProxyMock.reset();
            );
            // Assert
        playbackServicePlaybackResumedMock = new Subject();

        it('should not set Discord presence to "Playing" after a track is resumed and enableRichPresence is false', () => {
            ipcProxyMock.verify(
            service.initialize();
            const service: DiscordService = createDiscordService();


import { DiscordApiCommand } from './discord-api-command';
        });

            jest.useFakeTimers();
                largeImageText: 'Playing with Dopamine',
            // Assert
            jest.runAllTimers();
            const service: DiscordService = createDiscordService();

            );

            ipcProxyMock.reset();
        it('should set Discord presence to "Paused" after a track is paused and Discord Rich Presence is enabled', () => {
            // Act
            jest.useFakeTimers();

            // Assert
        it('should not set Discord presence to "Playing" after a track is skipped and Discord Rich Presence is disabled and playbackService can pause', () => {
                largeImageKey: 'icon',
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),

        const progress: PlaybackProgress = new PlaybackProgress(2, 120);
            );
    });

        it('should create', () => {
            // Act
        translatorServiceMock.setup((x) => x.get('playing-with-dopamine')).returns(() => 'Playing with Dopamine');
            jest.useFakeTimers();
            settingsMock.enableDiscordRichPresence = true;

        const playbackServicePlaybackSkippedMock$: Observable<void> = playbackServicePlaybackSkippedMock.asObservable();

            service.enableDiscordRichPresence = true;
            // Act
    }
            );

        it('should not set Discord presence after a track starts playing and Discord Rich Presence is disabled', () => {
            // Assert
        playbackServiceMock.setup((x) => x.isPlaying).returns(() => isPlaying);
                Times.once(),
            // Assert
                startTime: 3000,

            // Assert
        it('should set Discord presence to "Paused" after a track is skipped and enableRichPresence is true and playbackService cannot pause', () => {
        });

            playbackServicePlaybackStoppedMock.next();
                smallImageKey: 'pause',
            // Act
                Times.once(),
        playbackServiceMock = Mock.ofType<PlaybackService>();
        playbackServicePlaybackStoppedMock = new Subject();

    function createDiscordService(): DiscordService {

            // Arrange
            const service: DiscordService = createDiscordService();
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
        it('should set Discord presence to "Playing" if a track is already playing and Discord Rich Presence is enabled', () => {
                startTime: 0,
            ipcProxyMock.reset();
            setUpPlaybackServiceMock(false, false);
            jest.useFakeTimers();

            playbackServicePlaybackResumedMock.next();
            const service: DiscordService = createDiscordService();
            playbackServicePlaybackStartedMock.next(
            const service: DiscordService = createDiscordService();
                smallImageText: 'Playing',

            // Act
            // Arrange
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
            jest.runAllTimers();
        it('should set Discord presence to "Paused" after a track is skipped and Discord Rich Presence is enabled and playbackService cannot pause', () => {
import { PlaybackProgress } from '../playback/playback-progress';
            service.enableDiscordRichPresence = true;
                smallImageText: 'Playing',
            setUpPlaybackServiceMock(false, false);
            // Act
            const service: DiscordService = createDiscordService();
            ipcProxyMock.reset();
            playbackServiceMock.object,

            // Assert
            setUpPlaybackServiceMock(false, false);
            setUpPlaybackServiceMock(false, true);
            setUpPlaybackServiceMock(false, false);
            // Arrange
            jest.useFakeTimers();
        });
import { SettingsMock } from '../../testing/settings-mock';
            ipcProxyMock.reset();
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
            const args = {

            ipcProxyMock.reset();
            jest.useFakeTimers();
    beforeEach(() => {
            const service: DiscordService = createDiscordService();
                shouldSendTimestamps: true,

            // Act
                shouldSendTimestamps: true,

            };
            // Assert
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
            playbackServicePlaybackSkippedMock.next();

            settingsMock.enableDiscordRichPresence = false;
            // Assert
        it('should not clear Discord presence after a track is stopped and enableRichPresence is false', () => {
                startTime: 0,
            expect(service).toBeDefined();
            // Act
            setUpPlaybackServiceMock(false, false);
            const service: DiscordService = createDiscordService();
        it('should set Discord presence to "Playing" after a track is resumed and Discord Rich Presence is enabled', () => {

            );
                largeImageKey: 'icon',
        });
            jest.useFakeTimers();
    function setUpPlaybackServiceMock(isPlaying: boolean, canPause: boolean): void {
                smallImageKey: 'play',
            service.initialize();
            jest.runAllTimers();
            // Act

                Times.once(),
    let playbackServicePlaybackStoppedMock: Subject<void>;


        playbackServicePlaybackSkippedMock = new Subject();

                title: 'title',
            const service: DiscordService = createDiscordService();
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
            // Assert
            setUpPlaybackServiceMock(false, true);
                artists: 'artist1, artist2',
        });



                Times.once(),
            // Act
import { DateTime } from '../../common/date-time';


            jest.runAllTimers();
            };
                largeImageKey: 'icon',
            // Act

});
        track.trackTitle = 'title';
            ipcProxyMock.reset();

                artists: 'artist1, artist2',

            // Arrange
            // Arrange

        });

            // Arrange

describe('DiscordService', () => {
            ipcProxyMock.verify(

            service.enableDiscordRichPresence = false;
        it('should clear Discord presence if enableRichPresence is false', () => {
            // Arrange
            settingsMock.enableDiscordRichPresence = true;

                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
            playbackServicePlaybackSkippedMock.next();
            };
                title: 'title',
            jest.runAllTimers();
        });

                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
            const args = {
            dateProxyMock.object,
            playbackServicePlaybackStoppedMock.next();
            // Act
            ipcProxyMock.verify(

                title: 'title',
            service.initialize();

        track.duration = 200000;
        translatorServiceMock.setup((x) => x.get('paused')).returns(() => 'Paused');
            // Arrange
            jest.useFakeTimers();
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
        ipcProxyMock = Mock.ofType<IpcProxyBase>();
            // Assert

            ipcProxyMock.reset();

            };

            // Arrange
                artists: 'artist1, artist2',

import { DiscordApiCommandType } from './discord-api-command-type';
        const playbackServicePlaybackPausedMock$: Observable<void> = playbackServicePlaybackPausedMock.asObservable();
                largeImageText: 'Playing with Dopamine',
                Times.once(),

            // Assert
import { Logger } from '../../common/logger';
        it('should not clear Discord presence after a track is stopped and Discord Rich Presence is disabled', () => {
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
            ipcProxyMock.verify(


                smallImageText: 'Playing',

            const service: DiscordService = createDiscordService();
        );
            // Arrange
            ipcProxyMock.verify((x) => x.sendToMainProcess('discord-api-command', It.isAny()), Times.never());
                title: 'title',
            ipcProxyMock.reset();
    });
            );
            service.initialize();
            playbackServicePlaybackSkippedMock.next();


                largeImageText: 'Playing with Dopamine',

            settingsMock.enableDiscordRichPresence = false;
            const service: DiscordService = createDiscordService();

            );
            setUpPlaybackServiceMock(false, true);


                title: 'title',
            service.initialize();
                shouldSendTimestamps: true,
    });
            ipcProxyMock.reset();
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
                largeImageKey: 'icon',
            playbackServicePlaybackSkippedMock.next();


                smallImageKey: 'play',
            service.enableDiscordRichPresence = true;
            jest.runAllTimers();
            settingsMock.enableDiscordRichPresence = false;



                Times.once(),
            // Act
                smallImageKey: 'pause',

        });
            // Assert
                startTime: 0,

            jest.useFakeTimers();

            playbackServicePlaybackSkippedMock.next();
            // Assert
            playbackServicePlaybackStartedMock.next(
                shouldSendTimestamps: false,
            // Act

            // Act
                Times.once(),

        });
            ipcProxyMock.reset();
                artists: 'artist1, artist2',
        it('should set Discord presence to "Paused" after a track is paused and enableRichPresence is true', () => {
            ipcProxyMock.reset();
            ipcProxyMock.verify(
            service.initialize();

                smallImageText: 'Playing',





            const service: DiscordService = createDiscordService();
        playbackServicePlaybackStartedMock = new Subject();
            const args = {
            // Arrange
            playbackServicePlaybackPausedMock.next();
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.SetPresence, args)),
    let trackModel: TrackModel;
            ipcProxyMock.reset();
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.ClearPresence, undefined)),

            const args = {
        const playbackServicePlaybackResumedMock$: Observable<void> = playbackServicePlaybackResumedMock.asObservable();


        const track: Track = new Track('path');

                title: 'title',
            // Assert
            ipcProxyMock.verify(
import { PlaybackStarted } from '../playback/playback-started';
            setUpPlaybackServiceMock(false, true);
        it('should set Discord presence to "Playing" after a track is skipped and enableRichPresence is true and playbackService can pause', () => {
                smallImageText: 'Playing',
            settingsMock.enableDiscordRichPresence = false;
            // Arrange
    let settingsMock: SettingsMock;
                smallImageText: 'Paused',
                Times.once(),

            const service: DiscordService = createDiscordService();
            // Arrange


            ipcProxyMock.verify(
            // Act
            // Assert

            );
            jest.useFakeTimers();

                largeImageKey: 'icon',
            setUpPlaybackServiceMock(true, true);


            service.enableDiscordRichPresence = true;

        it('should not set Discord presence to "Paused" after a track is paused and Discord Rich Presence is disabled', () => {
                smallImageKey: 'play',
            const args = {
                (x) => x.sendToMainProcess('discord-api-command', new DiscordApiCommand(DiscordApiCommandType.ClearPresence, undefined)),
            jest.runAllTimers();
        });
            // Act
                Times.once(),
        });
            const service: DiscordService = createDiscordService();
