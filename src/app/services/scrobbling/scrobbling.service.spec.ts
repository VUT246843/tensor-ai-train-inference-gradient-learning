            expect(service.password).toEqual('');
                Times.once(),
            await flushPromises();
    }
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))

    ): IMock<SettingsBase> {
            // Arrange
        it('Should not scrobble when artist is unknown', async () => {
        });

            // Arrange
    let playbackService_progressChanged$: Observable<PlaybackProgress>;
            await flushPromises();
    let loggerMock: IMock<Logger>;
            lastfmApiMock.verify(
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 900000);
        it('should set SignInState to SignedOut if Last.fm scrobbling is enabled and lastFmSessionKey is not set in the settings', () => {
    let playbackService_playbackSkipped$: Observable<void>;
            service.initialize();
            // Assert
            const trackModel1: TrackModel = createTrackModel('path1', '', 'title1', 'albumTitle1', 300000);
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            );
            lastfmApiMock.verify((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'), Times.never());
            playbackServiceMock.object,

        settingsMock = Mock.ofType<SettingsBase>();

            const service: ScrobblingService = createService();
    });
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 300000);
            // Arrange
            lastfmApiMock
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackService_playbackStarted$);
            lastfmApiMock.verify(


    describe('initialize', () => {
            lastfmApiMock.verify((x) => x.loveTrackAsync('key', 'artist1a', 'title1'), Times.once());
        });
            // Arrange
        it('should not send track love/unlove for unknown artists', async () => {
            // Assert



import { Logger } from '../../common/logger';
            lastfmApiMock.verify((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'), Times.once());
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
            const service: ScrobblingService = createService();

            await flushPromises();
import { ScrobblingService } from './scrobbling.service';

            const service: ScrobblingService = createService();
            // Assert
            // Assert
    describe('PlaybackService.playbackStarted', () => {
        enableLastFmScrobbling: boolean,
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            const service: ScrobblingService = createService();

                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
        it('Should not scrobble when there is no current track', async () => {

        playbackServiceMock.setup((x) => x.playbackSkipped$).returns(() => playbackService_playbackSkipped$);
            service.initialize();
            // Act
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);

            createSettingsMock(true, 'user', 'password', 'key');
            lastfmApiMock


        return settingsMock;

            createSettingsMock(true, 'user', 'password', 'key');
            // Act
            playbackService_playbackStarted.next(playbackStarted);

                Times.never(),
            // Act
            lastfmApiMock.verify((x) => x.loveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);

            const service: ScrobblingService = createService();

            service.initialize();
        it('should send track love for all artists', async () => {
});
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
            createSettingsMock(true, 'user', 'password', 'key');
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
            // Act
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
            // Assert
        title: string,

import { Track } from '../../data/entities/track';
import { IMock, It, Mock, Times } from 'typemoq';

            // Act
            );
            lastfmApiMock.verify((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'), Times.never());
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 900000);


            // Arrange

        lastFmPassword: string,
        playbackService_playbackSkipped = new Subject();
            lastfmApiMock
    const flushPromises = () => new Promise(process.nextTick);
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),

            // Arrange
        });
            createSettingsMock(true, 'user', 'password', 'key');
            lastfmApiMock.verify((x) => x.unloveTrackAsync('key', 'artist1b', 'title1'), Times.once());


        it('should set SignInState to SignedIn if Last.fm scrobbling is enabled and lastFmUsername, lastFmPassword and lastFmSessionKey are set in the settings', () => {
            playbackService_progressChanged.next(playbackProgress);

            service.initialize();
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            playbackService_progressChanged.next(playbackProgress);




        });
            createSettingsMock(false, 'user', 'password', 'key');
        playbackService_playbackStarted = new Subject();

            createSettingsMock(true, '', 'password', 'key');
            expect(service.signInState).toEqual(SignInState.SignedOut);
        lastFmSessionKey: string,
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
        durationInMilliseconds: number,

            lastfmApiMock

    ): TrackModel {
            // Assert
    });
    let lastfmApiMock: IMock<LastfmApi>;
            lastfmApiMock
        playbackServiceMock.setup((x) => x.progressChanged$).returns(() => playbackService_progressChanged$);

            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            expect(service).toBeDefined();
            lastfmApiMock
            // Act
import { PlaybackService } from '../playback/playback.service';
        settingsMock.setup((x) => x.lastFmSessionKey).returns(() => lastFmSessionKey);
        it('should create', () => {
            playbackService_playbackSkipped.next();
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            const service: ScrobblingService = createService();
            // Arrange
            service.initialize();

            // Assert
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', '', 'albumTitle1', 300000);
            await service.sendTrackLoveAsync(trackModel1, true);
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 300000);

                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            const service: ScrobblingService = createService();
            // Assert

        playbackService_progressChanged$ = playbackService_progressChanged.asObservable();

            playbackService_playbackStarted.next(playbackStarted);
            lastfmApiMock
            // Act

            // Assert

            await service.sendTrackLoveAsync(trackModel1, false);
            // Assert
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);


            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 300000);
            // Act
                Times.never(),

            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);

            playbackService_playbackStarted.next(playbackStarted);
            lastfmApiMock.verify(
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            // Assert
        });
            lastfmApiMock.verify(
            // Arrange
        );
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            createSettingsMock(true, 'user', 'password', 'key');

            // Arrange
            service.initialize();
            // Assert
                .returns(() => Promise.resolve(true));
            lastfmApiMock.verify(
            createSettingsMock(true, 'user', 'password', '');

            lastfmApiMock.verify((x) => x.unloveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
                .returns(() => Promise.resolve(true));
    let dateTimeMock: IMock<DateTime>;
            service.initialize();
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1a;;artist1b;', 'title1', 'albumTitle1', 300000);
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1a;;artist1b;', 'title1', 'albumTitle1', 300000);
                Times.never(),

        it('should send track unlove for all artists', async () => {
            playbackService_playbackStarted.next(playbackStarted);
            );
            const trackModel1: TrackModel = createTrackModel('path1', '', 'title1', 'albumTitle1', 300000);
            // Act
            // Arrange
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, '');
            playbackService_progressChanged.next(playbackProgress);
                .returns(() => Promise.resolve(true));

                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))

            // Assert
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))

                .returns(() => Promise.resolve(true));


            await flushPromises();
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 20000);

            const service: ScrobblingService = createService();
            // Assert
            createSettingsMock(true, 'user', 'password', 'key');
            // Assert
            // Arrange
            await flushPromises();
        });
        it('should not update Last.fm now playing when artist is unknown', async () => {
import { DateTime } from '../../common/date-time';
        });
            createSettingsMock(false, 'user', 'password', 'key');
        it('Should not scrobble when the track is shorter than than 30 seconds even if it has been played for at least half its duration', async () => {
        });
        it('Should not scrobble when not signed in to Last.fm even if scrobble conditions are met', async () => {
            playbackService_playbackStarted.next(playbackStarted);

            createSettingsMock(false, 'user', 'password', 'key');

            const service: ScrobblingService = createService();

        });
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
        it('should set username from settings if Last.fm scrobbling is enabled', () => {
                .returns(() => Promise.resolve(true));

            playbackService_playbackStarted.next(playbackStarted);

        });
        settingsMock.setup((x) => x.lastFmUsername).returns(() => lastFmUsername);
            service.initialize();
        it('Should scrobble when the track is longer than 30 seconds and has been played for at least half its duration', async () => {
        dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => new Date(2022, 11, 28, 9, 47, 0));
            service.initialize();
        });
        it('Should scrobble when the track is longer than 30 seconds and has been played for 4 minutes even if it did not play for half its duration', async () => {
        it('should set password from settings if Last.fm scrobbling is enabled', () => {
            await flushPromises();
        it('should not set password from settings if Last.fm scrobbling is disabled', () => {
            service.initialize();

            service.initialize();
            const service: ScrobblingService = createService();
        });
        });
            // Assert
            // Arrange
                .returns(() => Promise.resolve(true));
            await flushPromises();
            lastfmApiMock
            await flushPromises();
        });
            dateTimeMock.object,
            createSettingsMock(true, 'user', 'password', 'key');
            const service: ScrobblingService = createService();
            lastfmApiMock.verify((x) => x.loveTrackAsync('key', 'artist1b', 'title1'), Times.once());
        it('should not update Last.fm now playing when title is unknown', async () => {

            const service: ScrobblingService = createService();

    });
        it('Should not scrobble when title is unknown', async () => {

            service.initialize();
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            // Act
            // Act
            playbackService_progressChanged.next(playbackProgress);
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            const service: ScrobblingService = createService();
    });
        loggerMock = Mock.ofType<Logger>();
            const service: ScrobblingService = createService();
        });
            service.initialize();
            // Arrange
        settingsMock.setup((x) => x.lastFmPassword).returns(() => lastFmPassword);
            const playbackProgress: PlaybackProgress = new PlaybackProgress(15, 20);
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);

            // Act
            createSettingsMock(true, 'user', 'password', 'key');
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
                .returns(() => Promise.resolve(true));
import { SignInState } from './sign-in-state';

            expect(service.username).toEqual('user');
            // Act
            lastfmApiMock.verify(
            // Assert
            playbackService_playbackStarted.next(playbackStarted);
    }
            // Assert
            const service: ScrobblingService = createService();
            // Arrange

                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            createSettingsMock(true, 'user', 'password', 'key');
        it('should not send track love/unlove when not signed in', async () => {
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
                Times.never(),

            createSettingsMock(true, 'user', '', 'key');

            createSettingsMock(true, 'user', 'password', 'key');
            expect(service.username).toEqual('');
        it('Should not scrobble when the track is longer than 4 minutes and has been played for less than 4 minutes', async () => {
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', '', 'albumTitle1', 300000);
            // Act
            const trackModel1: TrackModel = createTrackModel('path1', '', 'title1', 'albumTitle1', 300000);
        });
            const playbackProgress: PlaybackProgress = new PlaybackProgress(300, 900);
            // Act
            service.initialize();
            const service: ScrobblingService = createService();


            const trackModel1: TrackModel = createTrackModel('path1', ';artist1a;;artist1b;', 'title1', 'albumTitle1', 300000);
            createSettingsMock(false, 'user', 'password', 'key');


            // Assert
            // Act
            loggerMock.object,

            // Assert

        });
            // Act
            );
            expect(service.signInState).toEqual(SignInState.SignedOut);
            // Act
            lastfmApiMock
            const service: ScrobblingService = createService();

            lastfmApiMock.object,


            service.initialize();

            const service: ScrobblingService = createService();
    });

            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);

            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 300000);
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
        });


            createSettingsMock(true, 'user', 'password', 'key');
            expect(service.signInState).toEqual(SignInState.SignedOut);
            playbackService_playbackStarted.next(playbackStarted);
            // Assert
            lastfmApiMock.verify(
            );
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            playbackService_progressChanged.next(playbackProgress);
        it('should set SignInState to SignedOut if Last.fm scrobbling is enabled and lastFmPassword is not set in the settings', () => {
                .returns(() => Promise.resolve(true));
            // Assert
        playbackService_playbackStarted$ = playbackService_playbackStarted.asObservable();
            createSettingsMock(true, 'user', 'password', 'key');
            await flushPromises();
    });
        });
        });

            const trackModel1: TrackModel = createTrackModel('path1', ';artist1;', 'title1', 'albumTitle1', 300000);
        dateTimeMock = Mock.ofType<DateTime>();
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),

        });
            // Arrange
            await flushPromises();
            expect(service.signInState).toEqual(SignInState.SignedIn);

                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
    beforeEach(() => {
            const service: ScrobblingService = createService();
        it('should not send track love/unlove for an unknown track title', async () => {
            service.initialize();
            lastfmApiMock
        });
        playbackService_playbackSkipped$ = playbackService_playbackSkipped.asObservable();
            // Act
            // Assert
    function createTrackModel(
                .returns(() => Promise.resolve(true));
            await service.sendTrackLoveAsync(trackModel1, true);
            lastfmApiMock.verify(

                Times.once(),
            // Arrange
            playbackService_playbackStarted.next(playbackStarted);
            // Act

            lastfmApiMock.verify((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'), Times.never());
            await flushPromises();
            lastfmApiMock
import { PlaybackProgress } from '../playback/playback-progress';
            // Assert
            const service: ScrobblingService = createService();
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            service.initialize();
                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            // Act
    let playbackService_playbackStarted: Subject<PlaybackStarted>;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Assert
        it('should not set username from settings if Last.fm scrobbling is disabled', () => {
            // Arrange
                Times.never(),
            );
        });
            const playbackProgress: PlaybackProgress = new PlaybackProgress(150, 900);
            // Assert


            service.initialize();
            playbackService_progressChanged.next(playbackProgress);
    let settingsMock: IMock<SettingsBase>;
        path: string,
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
            service.initialize();
                .setup((x) => x.updateTrackNowPlayingAsync('key', 'artist1', 'title1', 'albumTitle1'))
            // Arrange
            service.initialize();
            // Arrange

            const service: ScrobblingService = createService();
                .returns(() => Promise.resolve(true));
import { TrackModel } from '../track/track-model';
            const service: ScrobblingService = createService();

        return new ScrobblingService(

    let playbackServiceMock: IMock<PlaybackService>;
            // Arrange
            // Act
        const track: Track = new Track(path);
        it('Should not scrobble when after playback has been skipped even if scrobble conditions are met', async () => {

import { PlaybackStarted } from '../playback/playback-started';


            createSettingsMock(true, 'user', 'password', 'key');
            playbackService_playbackStarted.next(playbackStarted);
            // Arrange
            playbackService_playbackStarted.next(playbackStarted);
        });
            service.initialize();

    let playbackService_progressChanged: Subject<PlaybackProgress>;
            const trackModel1: TrackModel = createTrackModel('path1', ';artist1a;;artist1b;', '', 'albumTitle1', 300000);
            // Act
            const service: ScrobblingService = createService();
        });
            // Act
            await flushPromises();
                .returns(() => Promise.resolve(true));
            // Arrange
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
        track.trackTitle = title;
        });
            lastfmApiMock.verify((x) => x.unloveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
        track.albumTitle = albumTitle;
            playbackService_progressChanged.next(playbackProgress);
            lastfmApiMock

                .returns(() => Promise.resolve(true));
            service.initialize();
        it('should update Last.fm now playing when signed in to Last.fm and artist and title are known', async () => {
        it('should set SignInState to SignedOut if Last.fm scrobbling is enabled and lastFmUsername is not set in the settings', () => {
            await service.sendTrackLoveAsync(trackModel1, true);
            // Arrange
describe('ScrobblingService', () => {
        it('should set SignInState to SignedOut if Last.fm scrobbling is disabled', () => {
        track.duration = durationInMilliseconds;
        playbackServiceMock = Mock.ofType<PlaybackService>();
        it('should not update Last.fm now playing when not signed in to Last.fm', async () => {
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            await flushPromises();
    describe('constructor', () => {
            // Act
                .returns(() => Promise.resolve(true));
        settingsMock.setup((x) => x.enableLastFmScrobbling).returns(() => enableLastFmScrobbling);
import { Observable, Subject } from 'rxjs';
            // Arrange

            // Assert
            );
    let playbackService_playbackStarted$: Observable<PlaybackStarted>;
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
            // Arrange
            service.initialize();
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);
            const service: ScrobblingService = createService();

            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel1, false);

            // Act
            dateTimeMock.setup((x) => x.getUTCDate(It.isAny())).returns(() => currentTrackUTCStartTime);
            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);

            // Arrange
            const playbackProgress: PlaybackProgress = new PlaybackProgress(200, 300);
            await flushPromises();
    describe('sendTrackLoveAsync', () => {
            // Arrange
            // Assert
            createSettingsMock(false, 'user', 'password', 'key');

    function createService(): ScrobblingService {
                Times.never(),
            playbackService_progressChanged.next(playbackProgress);

            lastfmApiMock.verify((x) => x.unloveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
                Times.never(),

            service.initialize();
            );
import { TranslatorServiceBase } from '../translator/translator.service.base';

import { SettingsBase } from '../../common/settings/settings.base';
            expect(service.password).toEqual('password');
import { LastfmApi } from '../../common/api/lastfm/lastfm.api';
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            settingsMock.object,
            expect(service.signInState).toEqual(SignInState.SignedOut);
            service.initialize();
            lastfmApiMock.verify((x) => x.unloveTrackAsync('key', 'artist1a', 'title1'), Times.once());

                (x) => x.scrobbleTrackAsync('key', 'artist1', 'title1', 'albumTitle1', currentTrackUTCStartTime),
            // Arrange
            playbackService_playbackStarted.next(playbackStarted);
        artists: string,
        track.artists = artists;
    }

            createSettingsMock(true, 'user', 'password', 'key');
            service.initialize();
        lastFmUsername: string,
            lastfmApiMock.verify((x) => x.loveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
            createSettingsMock(true, 'user', 'password', 'key');
            lastfmApiMock
            await flushPromises();

            const currentTrackUTCStartTime: Date = new Date(2022, 11, 28, 9, 47, 0);
            const service: ScrobblingService = createService();
            createSettingsMock(false, 'user', 'password', 'key');
            createSettingsMock(true, 'user', 'password', 'key');
            playbackService_progressChanged.next(playbackProgress);
        lastfmApiMock = Mock.ofType<LastfmApi>();

            );
            const service: ScrobblingService = createService();
            createSettingsMock(true, 'user', 'password', 'key');
    let playbackService_playbackSkipped: Subject<void>;
        });
            await service.sendTrackLoveAsync(trackModel1, true);
        playbackService_progressChanged = new Subject();


            // Act
    describe('PlaybackService.progressChanged', () => {

        albumTitle: string,
            const service: ScrobblingService = createService();
            lastfmApiMock.verify(


            // Act
            createSettingsMock(true, 'user', 'password', 'key');
            lastfmApiMock.verify((x) => x.loveTrackAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());

            const service: ScrobblingService = createService();
            service.initialize();
        });

    function createSettingsMock(

