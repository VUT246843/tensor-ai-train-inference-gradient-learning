        it('should not navigate to showcase if current now playing page is not nothingPlaying when playing next track', () => {
            playbackInformationServiceMock

                .setup((x) => x.getCurrentPlaybackInformationAsync())

            playbackInformationServiceMock


import { Subject, Subscription } from 'rxjs';
    describe('constructor', () => {
            playingNoTrackMock.next(currentPlaybackInformation);
            // Act
            service.navigate(NowPlayingPage.nothingPlaying);
            playbackInformationServiceMock
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');
            service.navigate(NowPlayingPage.artistInformation);
            service.navigate(NowPlayingPage.artistInformation);
            // Assert

            const subscription: Subscription = service.navigated$.subscribe((nowPlayingPage: NowPlayingPage) => {
            // Assert
    beforeEach(() => {
import { IMock, Mock } from 'typemoq';

import { TrackModel } from '../track/track-model';
        playingNoTrackMock = new Subject();
    });
            // Arrange

import { NowPlayingNavigationServiceBase } from './now-playing-navigation.service.base';
            playbackInformationServiceMock
    });
        return new NowPlayingNavigationService(playbackInformationServiceMock.object);
            // Arrange
            subscription.unsubscribe();
            await flushPromises();
        playingNextTrackMock = new Subject();
            // Act
            // Act
        it('should create', () => {
                .setup((x) => x.getCurrentPlaybackInformationAsync())

                .setup((x) => x.getCurrentPlaybackInformationAsync())
    let playingNextTrackMock: Subject<PlaybackInformation>;
                .setup((x) => x.getCurrentPlaybackInformationAsync())
                currentNowPlayingPage = nowPlayingPage;
import { PlaybackInformation } from '../playback-information/playback-information';
            let currentNowPlayingPage: NowPlayingPage = NowPlayingPage.showcase;
        playbackInformationServiceMock.setup((x) => x.playingNextTrack$).returns(() => playingNextTrackMock.asObservable());
    }

        });

            expect(currentNowPlayingPage).toEqual(NowPlayingPage.artistInformation);

    let playingPreviousTrackMock: Subject<PlaybackInformation>;
            const service: NowPlayingNavigationServiceBase = createSut();
    let playingNoTrackMock: Subject<PlaybackInformation>;
            // Arrange
                .setup((x) => x.getCurrentPlaybackInformationAsync())
                .returns(() => Promise.resolve(currentPlaybackInformation));
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title1', 'artists1');
        it('should set current now playing page to nothingPlaying if nothing is playing', async () => {
            // Assert
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.artistInformation);
    });
            playbackInformationServiceMock
            expect(previousNowPlayingPage).toEqual(NowPlayingPage.nothingPlaying);
            const newNowPlayingPage: NowPlayingPage = service.currentNowPlayingPage;
                .returns(() => Promise.resolve(currentPlaybackInformation));
            // Arrange
import { NowPlayingNavigationService } from './now-playing-navigation.service';
            // Arrange
        it('should navigate to showcase if current now playing page is nothingPlaying when playing next track', () => {
            const service: NowPlayingNavigationServiceBase = createSut();

            expect(service).toBeDefined();

import { PlaybackInformationService } from '../playback-information/playback-information.service';

            // Arrange

        it('should navigate to nothingPlaying when playing no track', () => {

        });
        it('should set current now playing page to showcase if something is playing', async () => {


            // Act
            // Act
            service.navigate(NowPlayingPage.nothingPlaying);
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.nothingPlaying);
            // Assert
            playingPreviousTrackMock.next(currentPlaybackInformation);
        });

            // Act

});
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title1', 'artists1');
            const service: NowPlayingNavigationServiceBase = createSut();
            // Arrange
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');

            const service: NowPlayingNavigationServiceBase = createSut();
            const service: NowPlayingNavigationServiceBase = createSut();
            service.navigate(NowPlayingPage.artistInformation);
            // Assert
                .returns(() => Promise.resolve(currentPlaybackInformation));
            playingPreviousTrackMock.next(currentPlaybackInformation);

            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.showcase);
            playingNextTrackMock.next(currentPlaybackInformation);
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.artistInformation);
            // Assert
            const service: NowPlayingNavigationServiceBase = createSut();
        });
        });
        playbackInformationServiceMock.setup((x) => x.playingNoTrack$).returns(() => playingNoTrackMock.asObservable());
    describe('navigate', () => {

        });

            });
                .returns(() => Promise.resolve(currentPlaybackInformation));


        it('should define navigated$', () => {
            // Assert
        });
            // Act

        });

            // Assert
            const service: NowPlayingNavigationServiceBase = createSut();
        it('should navigate to showcase if current now playing page is nothingPlaying when playing previous track', () => {
            // Act
                .returns(() => Promise.resolve(currentPlaybackInformation));
            // Act

            playbackInformationServiceMock
            // Assert

            // Assert
        it('should trigger navigation', () => {

            const previousNowPlayingPage: NowPlayingPage = service.currentNowPlayingPage;
        });
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.nothingPlaying);
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');
import { NowPlayingPage } from './now-playing-page';
            // Assert
        });




import { MockCreator } from '../../testing/mock-creator';
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title1', 'artists1');
            const service: NowPlayingNavigationServiceBase = createSut();
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title1', 'artists1');
            const service: NowPlayingNavigationServiceBase = createSut();
            await flushPromises();
            const service: NowPlayingNavigationServiceBase = createSut();

            // Act
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.showcase);
describe('NowPlayingNavigationService', () => {

            // Arrange
            service.navigate(NowPlayingPage.nothingPlaying);
            expect(service.currentNowPlayingPage).toEqual(NowPlayingPage.showcase);

        it('should set currentNowPlayingPage', () => {
            expect(service.navigated$).toBeDefined();


            playbackInformationServiceMock
            // Arrange
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title1', 'artists1');
            const service: NowPlayingNavigationServiceBase = createSut();
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');



            service.navigate(NowPlayingPage.artistInformation);


                .returns(() => Promise.resolve(currentPlaybackInformation));
        it('should not navigate to showcase if current now playing page is not nothingPlaying when playing previous track', () => {
        playbackInformationServiceMock = Mock.ofType<PlaybackInformationService>();
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
            expect(newNowPlayingPage).toEqual(NowPlayingPage.artistInformation);
            // Arrange
    const flushPromises = () => new Promise(process.nextTick);
                .returns(() => Promise.resolve(currentPlaybackInformation));
            const currentPlaybackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');
        });

    function createSut(): NowPlayingNavigationServiceBase {
            // Arrange

    let playbackInformationServiceMock: IMock<PlaybackInformationService>;
        playingPreviousTrackMock = new Subject();
            // Act
        playbackInformationServiceMock.setup((x) => x.playingPreviousTrack$).returns(() => playingPreviousTrackMock.asObservable());
            playingNextTrackMock.next(currentPlaybackInformation);

