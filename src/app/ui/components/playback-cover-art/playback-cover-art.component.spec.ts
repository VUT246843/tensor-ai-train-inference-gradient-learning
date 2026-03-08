                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            // Act
            const component: PlaybackCoverArtComponent = createComponent();
            const scheduler: Scheduler = new Scheduler();
            playbackInformationService_playingPreviousTrack.asObservable();
            const component: PlaybackCoverArtComponent = createComponent();


import { IMock, Mock } from 'typemoq';
            // Act, Assert
            const component: PlaybackCoverArtComponent = createComponent();
    });


        it('should initialize bottomImageUrl as empty', () => {
        indexingServiceMock = Mock.ofType<IndexingService>();
            component.topImageUrl = 'image url';


            // Assert
    let indexingService_indexingFinished: Subject<void>;
    beforeEach(() => {
            playbackInformationServiceMock
            }
            }
            expect(component.topImageUrl).toEqual('image-url-mock');
            playbackInformationService_playingPreviousTrack.next(new PlaybackInformation(trackModel1, 'image-url-mock'));
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
        it('should initialize topImageUrl as empty', () => {
            playbackInformationServiceMock
    }
            component.bottomImageUrl = 'image url';
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
        playbackInformationServiceMock = Mock.ofType<PlaybackInformationService>();
        const playbackInformationService_PlayingNoTrack$: Observable<PlaybackInformation> =

            // Arrange

    let playbackInformationService_playingNextTrack: Subject<PlaybackInformation>;
            const scheduler: Scheduler = new Scheduler();


            // Act, Assert
            .setup((x) => x.playingPreviousTrack$)
            playbackInformationServiceMock
            // Arrange
    });
        });
    const track1: Track = new Track('/home/user/Music/track1.mp3');
            playbackInformationServiceMock
            .returns(() => playbackInformationService_PlayingPreviousTrack$);
        const playbackInformationService_PlayingNextTrack$: Observable<PlaybackInformation> =
import { PlaybackCoverArtComponent } from './playback-cover-art.component';


            expect(component.bottomImageBackgroundClass).toEqual('');

            playbackInformationService_playingNoTrack.asObservable();
            playbackInformationServiceMock
            // Assert
import { PlaybackInformationService } from '../../../services/playback-information/playback-information.service';
        playbackInformationService_playingNoTrack = new Subject();
            // Arrange
            while (component.bottomImageUrl === 'image-url-mock') {
        it('should return empty string when topImageUrl is empty', async () => {
    let schedulerMock: IMock<Scheduler>;
    let trackModel1: TrackModel;

        });
            // Arrange
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    });
});
        });
            expect(component.contentAnimation).toEqual('down');
    let playbackInformationServiceMock: IMock<PlaybackInformationService>;
            expect(component.topImageBackgroundClass).toEqual('');

        });
            // Act, Assert

            const component: PlaybackCoverArtComponent = createComponent();
        playbackInformationService_playingPreviousTrack = new Subject();
                await scheduler.sleepAsync(10);
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
    describe('topImageBackgroundClass', () => {
        });
            const component: PlaybackCoverArtComponent = createComponent();
import { Observable, Subject } from 'rxjs';
            await component.ngOnInit();

                .setup((x) => x.getCurrentPlaybackInformationAsync())
        });
            const component: PlaybackCoverArtComponent = createComponent();

            // Act
import { PlaybackInformation } from '../../../services/playback-information/playback-information';
    describe('bottomImageBackgroundClass', () => {
                await scheduler.sleepAsync(10);

            // Assert
    function createComponent(): PlaybackCoverArtComponent {



            expect(component.topImageUrl).toEqual('image-url-mock');

                .setup((x) => x.getCurrentPlaybackInformationAsync())
            const component: PlaybackCoverArtComponent = createComponent();
        playbackInformationServiceMock.setup((x) => x.playingNoTrack$).returns(() => playbackInformationService_PlayingNoTrack$);
                await scheduler.sleepAsync(10);
            // Arrange, Act
            playbackInformationServiceMock

        });
        it('should return "app-playback-cover-art__content-background" when topImageUrl is not empty', async () => {
            const component: PlaybackCoverArtComponent = createComponent();
        it('should set top image URL and go down without animation if there is a current track playing', async () => {
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            // Act
            // Assert
            component.bottomImageUrl = 'image-url-mock';
                .setup((x) => x.getCurrentPlaybackInformationAsync())

            playbackInformationService_playingNextTrack.asObservable();
            // Arrange, Act
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
            playbackInformationService_playingNextTrack.next(new PlaybackInformation(trackModel1, 'image-url-mock'));
    let dateTimeMock: IMock<DateTime>;
            // Arrange
        });
    });
            // Assert
    describe('constructor', () => {

        dateTimeMock = Mock.ofType<DateTime>();
            // Assert
describe('PlaybackCoverArtComponent', () => {
        indexingService_indexingFinished = new Subject<void>();
            await component.ngOnInit();

            await component.ngOnInit();
        it('should subscribe to playbackInformationService.playingNoTrack, set bottom image URL and animate up when playing no track', async () => {


            expect(component.topImageBackgroundClass).toEqual('app-playback-cover-art__content-background');

        it('should initialize contentAnimation as "down"', () => {

            await component.ngOnInit();
            // Arrange, Act
            const component: PlaybackCoverArtComponent = createComponent();
        it('should create', () => {
        });
            const component: PlaybackCoverArtComponent = createComponent();
            const component: PlaybackCoverArtComponent = createComponent();
            await component.ngOnInit();
            expect(component.contentAnimation).toEqual('animated-up');
            // Arrange
import { DateTime } from '../../../common/date-time';
        });
        it('should subscribe to playbackInformationService.playingNextTrack, set bottom image URL and animate up when playing a next track', async () => {

            expect(component.contentAnimation).toEqual('animated-down');
            component.bottomImageUrl = Constants.emptyImage;
            // Assert
    track1.artists = 'My artist';

            component.topImageUrl = Constants.emptyImage;
import { Scheduler } from '../../../common/scheduling/scheduler';
            expect(component.bottomImageUrl).toEqual('');
            // Arrange
        const indexingService_indexingFinished$: Observable<void> = indexingService_indexingFinished.asObservable();
            }
import { TrackModel } from '../../../services/track/track-model';
        it('should return "app-playback-cover-art__content-background" when topImageUrl is not empty', async () => {

            expect(component.bottomImageUrl).toEqual('');
            // Arrange, Act
        return new PlaybackCoverArtComponent(playbackInformationServiceMock.object, schedulerMock.object, indexingServiceMock.object);

            while (component.topImageUrl === '') {
    let settingsMock: any;

            // Act
        playbackInformationServiceMock.setup((x) => x.playingNextTrack$).returns(() => playbackInformationService_PlayingNextTrack$);
            expect(component).toBeDefined();
            while (component.bottomImageUrl === '') {
        settingsMock = new SettingsMock();
            expect(component.bottomImageBackgroundClass).toEqual('app-playback-cover-art__content-background');
            const scheduler: Scheduler = new Scheduler();
            await component.ngOnInit();
            component.bottomImageUrl = '';
        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingService_indexingFinished$);
    });
        playbackInformationServiceMock
                .setup((x) => x.getCurrentPlaybackInformationAsync())
    let indexingServiceMock: IMock<IndexingService>;
        it('should initialize size as 0', () => {



                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
        playbackInformationService_playingNextTrack = new Subject();
            component.topImageUrl = '';
        it('should return empty string when topImageUrl is empty', async () => {
            // Act, Assert
import { IndexingService } from '../../../services/indexing/indexing.service';
            const component: PlaybackCoverArtComponent = createComponent();
            expect(component.contentAnimation).toEqual('down');
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            await component.ngOnInit();
            playbackInformationServiceMock
            playbackInformationServiceMock
            // Assert
            expect(component.topImageUrl).toEqual('');
import { Constants } from '../../../common/application/constants';
    describe('ngOnInit', () => {

            // Arrange, Act
            await component.ngOnInit();
            expect(component.bottomImageUrl).toEqual('image-url-mock');
    let playbackInformationService_playingNoTrack: Subject<PlaybackInformation>;
            playbackInformationService_playingNoTrack.next(new PlaybackInformation(undefined, ''));
import { Track } from '../../../data/entities/track';
    track1.trackTitle = 'My title';
        });
            const component: PlaybackCoverArtComponent = createComponent();
        });
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
import { SettingsMock } from '../../../testing/settings-mock';

            expect(component.contentAnimation).toEqual('animated-up');
            // Assert
        schedulerMock = Mock.ofType<Scheduler>();

            // Arrange
            expect(component.size).toEqual(0);

        it('should subscribe to playbackInformationService.playingPreviousTrack, set top image URL and animate down when playing a previous track', async () => {
        const playbackInformationService_PlayingPreviousTrack$: Observable<PlaybackInformation> =
                .setup((x) => x.getCurrentPlaybackInformationAsync())
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
        });


                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
    let playbackInformationService_playingPreviousTrack: Subject<PlaybackInformation>;
                .setup((x) => x.getCurrentPlaybackInformationAsync())
