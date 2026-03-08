            });


        const playbackInformationService_PlayingNextTrack$: Observable<PlaybackInformation> =
            // Assert
            const component: PlaybackInformationComponent = createComponent();
            // Assert
                component.highContrast = false;

                // Act, Assert
                // Act, Assert
            });

                // Arrange
            // Arrange

            playbackInformationServiceMock

                // Arrange
            const component: PlaybackInformationComponent = createComponent();
        metadataServiceMock = Mock.ofType<MetadataService>();
            it('should be "ellipsis-two-lines" when smallFontSize is smaller than 20 and highContrast is true', () => {
            const component: PlaybackInformationComponent = createComponent();
                // Act, Assert
            track1.artists = 'My artist';
            it('should be "ellipsis-two-lines thinner" when largeFontSize is larger than 20', () => {

                .setup((x) => x.getCurrentPlaybackInformationAsync())
    let metadataService_loveSaved: Subject<TrackModel>;

                component.position = 'top';

                const component: PlaybackInformationComponent = createComponent();
                const component: PlaybackInformationComponent = createComponent();
            // Arrange
    describe('smallFontClasses', () => {
            expect(component.flexJustifyClass).toEqual('justify-content-flex-end');

            });
            // Arrange

            // Arrange

            playbackInformationService_playingNoTrack.next(new PlaybackInformation(undefined, ''));

            await component.ngOnInit();
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines secondary-text');
            const track1: Track = new Track('/home/user/Music/track1.mp3');
                component.position = 'bottom';
        });

        describe('position is top', () => {



                component.largeFontSize = 19;


        });
    let playbackInformationService_playingNoTrack: Subject<PlaybackInformation>;

import { DateTime } from '../../../common/date-time';
            // Assert
        it('should initialize contentAnimation as "down"', () => {
                expect(component.smallFontClasses).toEqual('ellipsis');
            });
            await component.ngOnInit();
            });
            // Assert
        playbackInformationServiceMock

            // Arrange
        const track: Track = new Track(path);
            playbackInformationService_playingPreviousTrack.asObservable();
            // Arrange
    let schedulerMock: IMock<Scheduler>;
        );

            });

        });
                .setup((x) => x.getCurrentPlaybackInformationAsync())
    describe('constructor', () => {

        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingService_indexingFinished$);
            component.position = 'top';
            const component: PlaybackInformationComponent = createComponent();
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines  thinner');
        it('should initialize topContentTrack as undefined', () => {
            it('should be "ellipsis-two-lines" when largeFontSize is smaller than 20', () => {
            // Act, Assert
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
            const track1: Track = new Track('/home/user/Music/track1.mp3');
                component.position = 'top';
                component.position = '';
            expect(component.topContentTrack).toBeUndefined();

                // Act, Assert
                expect(component.smallFontClasses).toEqual('ellipsis secondary-text thinner');

        it('should be justify-content-flex-end when position is bottom', () => {
                component.position = '';

            component.largeFontSize = 21;
        settingsMock = new SettingsMock();
        });
                component.smallFontSize = 19;
            // Arrange
        });
            const component: PlaybackInformationComponent = createComponent();
            component.bottomContentTrack = trackModel1;
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));

                component.position = 'bottom';
    function createComponent(): PlaybackInformationComponent {
        const indexingService_indexingFinished$: Observable<void> = indexingService_indexingFinished.asObservable();
                component.smallFontSize = 19;
        playbackInformationService_playingNextTrack = new Subject();
                const component: PlaybackInformationComponent = createComponent();
        it('should initialize largeFontSize height as 0', () => {
            // Arrange
        describe('position is center', () => {
                component.position = 'bottom';
        it('should be justify-content-flex-start when position is top', () => {
                // Arrange
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Assert
            metadataService_loveSaved.next(trackModel2);
        it('should not update the rating of the current track when the rating is saved of a track with a different path', async () => {
            // Act
                component.highContrast = false;
            // Arrange

        describe('position is empty', () => {
            await component.ngOnInit();
                component.smallFontSize = 21;



                // Arrange

                component.highContrast = true;

                // Arrange
                component.largeFontSize = 19;
                // Arrange
            });
            // Arrange

        const metadataService_loveSaved$: Observable<TrackModel> = metadataService_loveSaved.asObservable();



            // Assert
            it('should be "ellipsis-two-lines secondary-text thinner" when smallFontSize is larger than 20 and highContrast is false', () => {
                component.smallFontSize = 21;
                component.highContrast = true;
    function createTrackModel(path: string, artists: string, title: string, rating: number, love: number): TrackModel {

            // Act

        });
                component.highContrast = false;
                // Arrange
        describe('position is bottom', () => {


            expect(component.topContentTrack!.rating).toEqual(4);
            expect(component.position).toEqual('bottom');
            it('should be "ellipsis thinner" when largeFontSize is larger than 20', () => {

            it('should be "ellipsis-two-lines" when smallFontSize is smaller than 20 and highContrast is true', () => {
            });
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));


                // Arrange


            expect(component.topContentTrack!.love).toEqual(1);
                const component: PlaybackInformationComponent = createComponent();
            // Arrange
                component.position = 'top';

                const component: PlaybackInformationComponent = createComponent();
                component.smallFontSize = 21;
        dateTimeMock = Mock.ofType<DateTime>();

        describe('position is empty', () => {
                component.position = '';
                component.smallFontSize = 21;
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
                // Act, Assert
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
                // Act, Assert
            // Assert
        });

});
            playbackInformationService_playingNextTrack.next(new PlaybackInformation(trackModel1, 'image-url-mock'));
                // Arrange
            const component: PlaybackInformationComponent = createComponent();
import { Observable, Subject } from 'rxjs';

                component.smallFontSize = 19;
        });
                component.highContrast = true;
                component.highContrast = false;
    const flushPromises = () => new Promise(process.nextTick);
    }
            const component: PlaybackInformationComponent = createComponent();
        it('should not update the love of the current track when the love is saved of a track with a different path', async () => {
            expect(component.showRating).toBeFalsy();
            const trackModel1: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 2, 0);

        it('should create', () => {
                expect(component.largeFontClasses).toEqual('ellipsis');

        });

                const component: PlaybackInformationComponent = createComponent();
            // Arrange
            it('should be "ellipsis-two-lines secondary-text" when smallFontSize is smaller than 20 and highContrast is false', () => {
                component.position = 'top';
            // Arrange

                component.largeFontSize = 21;
                component.highContrast = true;
                component.smallFontSize = 19;
            // Assert
                .setup((x) => x.getCurrentPlaybackInformationAsync())
                // Act, Assert
        metadataService_ratingSaved = new Subject();

                component.highContrast = true;

                const component: PlaybackInformationComponent = createComponent();
            const component: PlaybackInformationComponent = createComponent();
            const trackModel2: TrackModel = createTrackModel('/home/user/Music/track2.mp3', 'My artist 2', 'My title 2', 4, 0);

        playbackInformationService_playingPreviousTrack = new Subject();
            jest.runAllTimers();
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines');
            // Assert

                const component: PlaybackInformationComponent = createComponent();
    let metadataService_ratingSaved: Subject<TrackModel>;
            playbackInformationServiceMock

    });
                const component: PlaybackInformationComponent = createComponent();
            component.position = 'center';
            it('should be "ellipsis-two-lines" when smallFontSize is smaller than 20 and highContrast is true', () => {
    });

            it('should be "ellipsis" when largeFontSize is smaller than 20', () => {
                // Arrange
                expect(component.smallFontClasses).toEqual('ellipsis secondary-text');
            // Arrange

        });
            expect(component.bottomContentTrack).toEqual(trackModel1);
        });
            });
    let indexingServiceMock: IMock<IndexingService>;
            it('should be "ellipsis" when largeFontSize is smaller than 20', () => {
            track1.trackTitle = 'My title';
            // Arrange
    describe('ngOnInit', () => {


                // Arrange
            expect(component.topContentTrack!.love).toEqual(-1);
            });
                const component: PlaybackInformationComponent = createComponent();
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines secondary-text thinner');
            const component: PlaybackInformationComponent = createComponent();
            const component: PlaybackInformationComponent = createComponent();
        schedulerMock = Mock.ofType<Scheduler>();
            it('should be "ellipsis-two-lines thinner" when smallFontSize is larger than 20 and highContrast is true', () => {
            playbackInformationServiceMock
            it('should be "ellipsis-two-lines secondary-text thinner" when smallFontSize is larger than 20 and highContrast is false', () => {
                component.highContrast = false;
        metadataServiceMock.setup((x) => x.ratingSaved$).returns(() => metadataService_ratingSaved$);
        });
        playbackInformationServiceMock.setup((x) => x.playingNextTrack$).returns(() => playbackInformationService_PlayingNextTrack$);
                const component: PlaybackInformationComponent = createComponent();
                component.largeFontSize = 21;

            });
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            track1.artists = 'My artist';
            // Act
            // Act
            it('should be "ellipsis-two-lines secondary-text" when smallFontSize is smaller than 20 and highContrast is false', () => {
        track.love = love;
        return new PlaybackInformationComponent(
            // Arrange
            const trackModel1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            });
                component.highContrast = false;
            // Assert
                component.highContrast = false;
            // Act
            const trackModel1: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 2, -1);
            expect(component.smallFontSize).toEqual(0);
                component.smallFontSize = 19;
            const component: PlaybackInformationComponent = createComponent();
            const component: PlaybackInformationComponent = createComponent();
            // Act
        });
            track1.trackTitle = 'My title';
                // Act, Assert
                component.position = '';
            schedulerMock.object,
        it('should subscribe to playbackInformationService.playingNextTrack, set bottom content and animate up when playing a next track', async () => {
                component.smallFontSize = 21;
                component.position = 'center';
                const component: PlaybackInformationComponent = createComponent();
        track.trackTitle = title;
        });
            });
            expect(component.contentAnimation).toEqual('down');
            playbackInformationService_playingNoTrack.asObservable();
            indexingServiceMock.object,
        it('should initialize position as bottom', () => {
            playbackInformationServiceMock
            expect(component.contentAnimation).toEqual('animated-down');
        it('should subscribe to playbackInformationService.playingPreviousTrack, set bottom content and animate down when playing a next track', async () => {
            // Act
            expect(component.largeFontClasses).toEqual('ellipsis thinner');
            // Assert
    let playbackInformationService_playingPreviousTrack: Subject<PlaybackInformation>;
        it('should initialize bottomContentTrack as undefined', () => {
            const component: PlaybackInformationComponent = createComponent();

                // Act, Assert
            await component.ngOnInit();
                component.position = 'center';
                component.smallFontSize = 21;

                // Act, Assert
            const component: PlaybackInformationComponent = createComponent();
            // Act, Assert
            jest.useFakeTimers();


        const metadataService_ratingSaved$: Observable<TrackModel> = metadataService_ratingSaved.asObservable();
            });
            expect(component.largeFontSize).toEqual(0);
            await component.ngOnInit();
                // Act, Assert
                // Act, Assert
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines');
            const trackModel1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            await component.ngOnInit();
            const trackModel2: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 4, 1);
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
import { SettingsMock } from '../../../testing/settings-mock';
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
            it('should be "ellipsis-two-lines thinner" when smallFontSize is larger than 20 and highContrast is true', () => {
        });
            playbackInformationService_playingNextTrack.asObservable();
            // Act

            const trackModel1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Assert
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            const component: PlaybackInformationComponent = createComponent();
            expect(component.height).toEqual(0);
describe('PlaybackInformationComponent', () => {

            // Act


                // Act, Assert
                const component: PlaybackInformationComponent = createComponent();

        });


        createComponent();

            // Arrange
                component.position = 'top';

            // Act
            it('should be "ellipsis-two-lines secondary-text" when smallFontSize is smaller than 20 and highContrast is false', () => {
                // Arrange

            it('should be "ellipsis-two-lines" when largeFontSize is smaller than 20', () => {
            // Assert
    describe('largeFontClasses', () => {
            // Arrange
                // Arrange
            track1.trackTitle = 'My title';
                // Act, Assert
            it('should be "ellipsis-two-lines thinner" when smallFontSize is larger than 20 and highContrast is true', () => {
            expect(component.bottomContentTrack).toBeUndefined();
                .setup((x) => x.getCurrentPlaybackInformationAsync())


                component.position = 'bottom';

        });
                expect(component.smallFontClasses).toEqual('ellipsis secondary-text');
            });
                component.position = 'center';
            const component: PlaybackInformationComponent = createComponent();
            expect(component.contentAnimation).toEqual('animated-up');
                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
            });

            });
        it('should update the rating of the current track when the rating is saved of a track with the same path', async () => {
                .setup((x) => x.getCurrentPlaybackInformationAsync())
import { TrackModel } from '../../../services/track/track-model';
            expect(component.flexJustifyClass).toEqual('justify-content-flex-start');
                expect(component.smallFontClasses).toEqual('ellipsis');
            // Act

            // Assert
            expect(component.flexJustifyClass).toEqual('justify-content-center');
        it('should initialize showRating as false', () => {
            it('should be "ellipsis-two-lines thinner" when smallFontSize is larger than 20 and highContrast is true', () => {
            const trackModel2: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 4, 0);
            });
            expect(component.flexJustifyClass).toEqual('justify-content-flex-end');

    });
            const component: PlaybackInformationComponent = createComponent();
            const component: PlaybackInformationComponent = createComponent();

            playbackInformationService_playingPreviousTrack.next(new PlaybackInformation(trackModel1, 'image-url-mock'));
            it('should be "ellipsis-two-lines secondary-text thinner" when smallFontSize is larger than 20 and highContrast is false', () => {
                const component: PlaybackInformationComponent = createComponent();
                // Arrange
        });
                component.highContrast = true;
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines secondary-text');
                // Arrange
        playbackInformationServiceMock = Mock.ofType<PlaybackInformationService>();
                const component: PlaybackInformationComponent = createComponent();
            // Act
            });

        it('should be justify-content-center when position is center', () => {
import { PlaybackInformationComponent } from './playback-information.component';
        it('should be justify-content-flex-end when position is empty', () => {

        track.artists = artists;
                // Act, Assert
            playbackInformationServiceMock
                const component: PlaybackInformationComponent = createComponent();
            });
                // Act, Assert
                const component: PlaybackInformationComponent = createComponent();
        playbackInformationService_playingNoTrack = new Subject();

        });

            await component.ngOnInit();

            expect(component.contentAnimation).toEqual('animated-up');


        it('should initialize showLove as false', () => {
            // Assert
            await flushPromises();
                component.smallFontSize = 19;
        });
        const playbackInformationService_PlayingPreviousTrack$: Observable<PlaybackInformation> =
            // Arrange
                component.position = 'center';
                .setup((x) => x.getCurrentPlaybackInformationAsync())

                // Act, Assert
    let playbackInformationService_playingNextTrack: Subject<PlaybackInformation>;
        describe('position is center', () => {
import { PlaybackInformation } from '../../../services/playback-information/playback-information';
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
                expect(component.largeFontClasses).toEqual('ellipsis-two-lines thinner');


                // Arrange


            playbackInformationServiceMock
        it('should subscribe to playbackInformationService.playingNoTrack, set bottom content and animate up when playing no track', async () => {
            const component: PlaybackInformationComponent = createComponent();
                // Act, Assert

                expect(component.largeFontClasses).toEqual('ellipsis-two-lines');

    let metadataServiceMock: IMock<MetadataService>;
        });
        });
                const component: PlaybackInformationComponent = createComponent();

                // Arrange
            // Act

    let playbackInformationServiceMock: IMock<PlaybackInformationService>;
                component.position = 'bottom';
                expect(component.largeFontClasses).toEqual('ellipsis-two-lines');

            const component: PlaybackInformationComponent = createComponent();
        });
            // Arrange

            });
        describe('position is bottom', () => {
import { IMock, Mock } from 'typemoq';
            it('should be "ellipsis-two-lines secondary-text thinner" when smallFontSize is larger than 20 and highContrast is false', () => {
            // Act
            // Act, Assert
            expect(component.bottomContentTrack).toBeUndefined();
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            expect(component).toBeDefined();
import { IndexingService } from '../../../services/indexing/indexing.service';
        track.rating = rating;

        });
                component.position = 'top';

            // Assert
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines secondary-text thinner');

import { Track } from '../../../data/entities/track';
                expect(component.largeFontClasses).toEqual('ellipsis');
        });
            const component: PlaybackInformationComponent = createComponent();

            // Act, Assert

    }
    let dateTimeMock: IMock<DateTime>;
        metadataService_loveSaved = new Subject();
                // Arrange
            });
            await component.ngOnInit();

            component.position = '';
                component.highContrast = true;
            track1.trackTitle = 'My title';
            expect(component.topContentTrack).toEqual(trackModel1);

        const playbackInformationService_PlayingNoTrack$: Observable<PlaybackInformation> =

            });
            // Act
            track1.artists = 'My artist';

        });
            track1.artists = 'My artist';
        });
            playbackInformationServiceMock
                component.highContrast = false;
                // Arrange
                const component: PlaybackInformationComponent = createComponent();
            const trackModel1: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 2, -1);
            playbackInformationServiceMock.object,
                const component: PlaybackInformationComponent = createComponent();
            expect(component.topContentTrack!.rating).toEqual(2);
            metadataServiceMock.object,
            expect(component.showLove).toBeFalsy();
            const component: PlaybackInformationComponent = createComponent();
    });
                component.highContrast = true;
        });

            component.position = 'bottom';
import { PlaybackInformationService } from '../../../services/playback-information/playback-information.service';
                const component: PlaybackInformationComponent = createComponent();
            // Arrange

                expect(component.smallFontClasses).toEqual('ellipsis secondary-text thinner');
    describe('flexJustifyClass', () => {
            it('should be "ellipsis-two-lines thinner" when largeFontSize is larger than 20', () => {
                component.position = '';
            const trackModel1: TrackModel = createTrackModel('/home/user/Music/track1.mp3', 'My artist', 'My title', 2, 0);
        it('should initialize smallFontSize height as 0', () => {
    let indexingService_indexingFinished: Subject<void>;

                expect(component.smallFontClasses).toEqual('ellipsis  thinner');
        indexingServiceMock = Mock.ofType<IndexingService>();
                component.position = 'center';

        indexingService_indexingFinished = new Subject();
                // Act, Assert
    });
                component.largeFontSize = 19;
                // Arrange
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            // Act

            const trackModel2: TrackModel = createTrackModel('/home/user/Music/track2.mp3', 'My artist 2', 'My title 2', 4, 1);
import { Scheduler } from '../../../common/scheduling/scheduler';

                // Arrange
                component.largeFontSize = 21;
                // Arrange

            await flushPromises();

            // Arrange
        it('should be "ellipsis thinner" when largeFontSize is larger than 20', () => {
            it('should be "ellipsis-two-lines" when smallFontSize is smaller than 20 and highContrast is true', () => {
        it('should update the love of the current track when the love is saved of a track with the same path', async () => {

            // Act
                component.largeFontSize = 19;

                .returns(() => Promise.resolve(new PlaybackInformation(trackModel1, 'image-url-mock')));
            metadataService_ratingSaved.next(trackModel2);

import { MetadataService } from '../../../services/metadata/metadata.service';
                component.position = 'center';
                component.position = 'bottom';
        });



        describe('position is top', () => {
            // Act
        playbackInformationServiceMock.setup((x) => x.playingNoTrack$).returns(() => playbackInformationService_PlayingNoTrack$);
            expect(component.topContentTrack).toBe(trackModel1);

        it('should initialize height as 0', () => {
                const component: PlaybackInformationComponent = createComponent();
                const component: PlaybackInformationComponent = createComponent();
                component.smallFontSize = 21;

    beforeEach(() => {
            // Act, Assert
            // Assert
            .setup((x) => x.playingPreviousTrack$)
        });
    let settingsMock: any;
            metadataService_ratingSaved.next(trackModel2);

            .returns(() => playbackInformationService_PlayingPreviousTrack$);

                component.smallFontSize = 21;


            const track1: Track = new Track('/home/user/Music/track1.mp3');
            component.position = '';
                // Act, Assert
                // Act, Assert
        });
            const component: PlaybackInformationComponent = createComponent();
                expect(component.largeFontClasses).toEqual('ellipsis-two-lines thinner');

    });
                expect(component.smallFontClasses).toEqual('ellipsis  thinner');
            // Arrange
            const trackModel1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Assert

                component.smallFontSize = 19;
                component.smallFontSize = 19;

            metadataService_loveSaved.next(trackModel2);
        it('should set top content items and go down without animation if there is a current track playing', async () => {



                expect(component.largeFontClasses).toEqual('ellipsis thinner');
                // Act, Assert
                expect(component.smallFontClasses).toEqual('ellipsis-two-lines  thinner');
            it('should be "ellipsis-two-lines secondary-text" when smallFontSize is smaller than 20 and highContrast is false', () => {
                // Arrange
            expect(component.contentAnimation).toEqual('down');
        metadataServiceMock.setup((x) => x.loveSaved$).returns(() => metadataService_loveSaved$);
            playbackInformationServiceMock
                // Act, Assert
