
            playbackService_PlaybackStartedMock.next(new PlaybackStarted(trackModel, false));
            subscription.add(
        track = new Track('Path');
                service.playingNextTrack$.subscribe((playbackInformation: PlaybackInformation) => {
            playbackService_PlaybackStartedMock.next(new PlaybackStarted(trackModel, true));
import { DateTime } from '../../common/date-time';

            .setup((x) => x.createAsync(trackModel))
        });

    });

        playbackService_PlaybackStartedMock = new Subject();
                }),
            // Act

            subscription.add(
import { TrackModel } from '../track/track-model';
    });
            // Assert
    beforeEach(() => {
        it('should return the current playback information', async () => {
            await flushPromises();
            expect(receivedPlaybackInformation!.track).toBe(trackModel);
    describe('getCurrentPlaybackInformationAsync', () => {
    let playbackInformationFactoryMock: IMock<PlaybackInformationFactory>;
        playbackInformationFactoryMock

            );
            // Act
        it('should define playingNextTrack$', () => {
                playbackInformationFactoryMock.object,
import { Track } from '../../data/entities/track';
            expect(service).toBeDefined();
            expect(receivedPlaybackInformation!.imageUrl).toEqual('');


                playbackInformationFactoryMock.object,

        });
        });
import { PlaybackService } from '../playback/playback.service';
        const playbackService_PlaybackStoppedMock$: Observable<void> = playbackService_PlaybackStoppedMock.asObservable();
        });
            // Arrange
            expect(playbackInformation.track).toBe(trackModel);
        it('should create', () => {
        trackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackService_PlaybackStartedMock$);
        playbackService_PlaybackStoppedMock = new Subject();
            expect(receivedPlaybackInformation!.track).toBe(trackModel);

            let receivedPlaybackInformation: PlaybackInformation | undefined;
                service.playingNoTrack$.subscribe((playbackInformation: PlaybackInformation) => {
            );
        settingsMock = new SettingsMock();
            );
            const service: PlaybackInformationService = new PlaybackInformationService(

                playbackInformationFactoryMock.object,
                }),
        playbackServiceMock = Mock.ofType<PlaybackService>();
            // Assert
            expect(receivedPlaybackInformation).toBeDefined();
            expect(receivedPlaybackInformation!.imageUrl).toEqual('imageUrl');

    const flushPromises = () => new Promise(process.nextTick);
                playbackServiceMock.object,
            await flushPromises();
            const service: PlaybackInformationService = new PlaybackInformationService(
            const playbackInformation: PlaybackInformation = await service.getCurrentPlaybackInformationAsync();

            expect(receivedPlaybackInformation!.imageUrl).toEqual('imageUrl');
                playbackServiceMock.object,
    let track: Track;
            expect(playbackInformation.imageUrl).toEqual('imageUrl');
import { TranslatorServiceBase } from '../translator/translator.service.base';
            const service: PlaybackInformationService = new PlaybackInformationService(
            );
    let trackModel: TrackModel;
            // Assert
import { IMock, It, Mock, Times } from 'typemoq';
            // Assert
            );

            // Act
            // Act
            .returns(() => Promise.resolve(new PlaybackInformation(trackModel, 'imageUrl')));
            const subscription: Subscription = new Subscription();
            const service: PlaybackInformationService = new PlaybackInformationService(
    let dateTimeMock: IMock<DateTime>;
            // Arrange
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            // Arrange
            // Assert
                playbackServiceMock.object,
            expect(service.playingNextTrack$).toBeDefined();

                playbackServiceMock.object,
        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackService_PlaybackStoppedMock$);
import { Observable, Subject, Subscription } from 'rxjs';
            // Act
        const playbackService_PlaybackStartedMock$: Observable<PlaybackStarted> = playbackService_PlaybackStartedMock.asObservable();

            // Act
            // Assert


                playbackInformationFactoryMock.object,

                }),
                    receivedPlaybackInformation = playbackInformation;
        it('should subscribe to playbackService.playbackStopped and raise playingNoTrack containing undefined playback information when playing a no track', async () => {
    let settingsMock: any;
            .returns(() => Promise.resolve(new PlaybackInformation(undefined, '')));
            );


            const subscription: Subscription = new Subscription();
            // Arrange

                    receivedPlaybackInformation = playbackInformation;
            const subscription: Subscription = new Subscription();
            expect(receivedPlaybackInformation).toBeDefined();
            expect(playbackInformation).toBeDefined();

        });
            .setup((x) => x.createAsync(undefined))
            );
        playbackInformationFactoryMock
                playbackServiceMock.object,

        });
import { PlaybackInformationFactory } from './playback-information.factory';
            playbackService_PlaybackStoppedMock.next();
            await flushPromises();
            // Arrange
            const service: PlaybackInformationService = new PlaybackInformationService(
    let playbackServiceMock: IMock<PlaybackService>;
            let receivedPlaybackInformation: PlaybackInformation | undefined;
                service.playingPreviousTrack$.subscribe((playbackInformation: PlaybackInformation) => {
    let playbackService_PlaybackStartedMock: Subject<PlaybackStarted>;

            expect(receivedPlaybackInformation!.track).toBeUndefined();

import { MockCreator } from '../../testing/mock-creator';
    describe('constructor', () => {
        it('should subscribe to playbackService.playbackStarted and raise playingNextTrack containing defined playback information when playing a next track', async () => {

});
            subscription.add(
                playbackInformationFactoryMock.object,
    });
        dateTimeMock = Mock.ofType<DateTime>();
        it('should subscribe to playbackService.playbackStarted and raise playingPreviousTrack containing defined playback information when playing a previous track', async () => {

import { PlaybackInformationService } from './playback-information.service';
    let playbackService_PlaybackStoppedMock: Subject<void>;
        playbackInformationFactoryMock = Mock.ofType<PlaybackInformationFactory>();
            // Arrange
                    receivedPlaybackInformation = playbackInformation;
import { SettingsMock } from '../../testing/settings-mock';
            const service: PlaybackInformationService = new PlaybackInformationService(

            expect(receivedPlaybackInformation).toBeDefined();
            let receivedPlaybackInformation: PlaybackInformation | undefined;
import { PlaybackInformation } from './playback-information';
describe('PlaybackInformationService', () => {
            );
    let translatorServiceMock: IMock<TranslatorServiceBase>;
                playbackServiceMock.object,
                playbackInformationFactoryMock.object,
        playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel);

            );
import { PlaybackStarted } from '../playback/playback-started';
