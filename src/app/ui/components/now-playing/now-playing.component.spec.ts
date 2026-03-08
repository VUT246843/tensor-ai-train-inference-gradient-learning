            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();

    let nowPlayingNavigationServiceMock: IMock<NowPlayingNavigationServiceBase>;
            // Assert
        it('should initialize background1 as empty', () => {
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);

    let nowPlayingNavigationServiceNavigatedMock: Subject<NowPlayingPage>;
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();

            component.background1Animation = 'unset-value';
        });
            // Assert
            expect(component.background1IsUsed).toBeFalsy();

import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
            await component.ngAfterViewInit();
        const nowPlayingNavigationServiceNavigated$: Observable<NowPlayingPage> = nowPlayingNavigationServiceNavigatedMock.asObservable();
            // Assert
        it('should initialize background2Animation as "fade-in-dark" if the light theme is not being used', () => {


            keyboardEventMock.setup((x) => x.key).returns(() => 'a');
    let playbackServicePlaybackStoppedMock: Subject<void>;

            component.background2Animation = 'unset-value';
            expect(component.background2).toEqual('dummy-background');
            expect(component.background2Animation).toEqual('unset-value');

            const component: NowPlayingComponent = createComponent();
            // Assert
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            expect(component.appearanceService).toBeDefined();
            expect(component.background1Animation).toEqual('fade-in-dark');
            // Arrange
            expect(component.background2Animation).toEqual('unset-value');
        });
    });

            await flushPromises();
        });
            // Arrange
            component.background1 = 'another-background';
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModelMock.object, false));
            // Arrange
            component.background2Animation = 'unset-value';
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();
            // Arrange
            expect(component.background2).toEqual('');
            component.background1 = 'another-background';
        it('should not set background1 if background1 is not used and background2 is the same as the proposed background', async () => {

            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();
    let metadataServiceMock: IMock<MetadataService>;
            // Arrange
        nowPlayingNavigationServiceNavigatedMock = new Subject();
            component.background1Animation = 'unset-value';
            expect(component.background1IsUsed).toBeFalsy();
            // Act
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            const component: NowPlayingComponent = createComponent();
            // Assert

            metadataServiceMock

            const canvasMock: IMock<HTMLCanvasElement> = Mock.ofType<HTMLCanvasElement>();
            expect(component.background1Animation).toEqual('fade-out');
    describe('constructor', () => {
            // Assert
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
        it('should initialize background1Animation as "fade-out"', () => {

            const component: NowPlayingComponent = createComponent();
            // Arrange
            expect(component.background1Animation).toEqual('fade-out');
            metadataServiceMock
            const component: NowPlayingComponent = createComponent();
            expect(component.background2Animation).toEqual('fade-in-dark');
            // Arrange

            await flushPromises();


            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModelMock.object, false));
            playbackServiceMock.object,
            expect(component.background1Animation).toEqual('unset-value');
            component.background1 = 'unset-value';
            expect(component.background1Animation).toEqual('unset-value');
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));

        });
            component.background2 = 'unset-value';
    });
            expect(component.background1IsUsed).toBeTruthy();
            const component: NowPlayingComponent = createComponent();



            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');

            // Act


            await flushPromises();
            component.background1 = 'unset-value';
    }
            component.ngOnInit();
            navigationServiceMock.object,
            await flushPromises();
            nowPlayingNavigationServiceMock.object,
            playbackServicePlaybackStoppedMock.next();
            audioVisualizerMock.object,
            expect(component.background2).toEqual('unset-value');
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();

            expect(component.background2Animation).toEqual('unset-value');
                .returns(() => Promise.resolve('dummy-background'));
            component.background2 = 'unset-value';
            const component: NowPlayingComponent = createComponent();
        });
            metadataServiceMock
            // Act
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            // Act
            appearanceServiceMock.reset();
        });
            // Assert

    let audioVisualizerMock: IMock<AudioVisualizer>;

            metadataServiceMock
            // Assert
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
                .returns(() => Promise.resolve('dummy-background'));
            component.ngOnInit();
            playbackServicePlaybackStoppedMock.next();

    });
        nowPlayingNavigationServiceMock.setup((x) => x.navigated$).returns(() => nowPlayingNavigationServiceNavigated$);
            component.handleKeyboardEvent(keyboardEventMock.object);
        });

            const component: NowPlayingComponent = createComponent();
            // Act
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => false);
            // Act
            // Assert

    describe('goBackToCollection', () => {
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            component.background2 = 'dummy-background';
            component.background2 = 'unset-value';
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('input'));
            appearanceServiceMock.reset();
import { TrackModel } from '../../../services/track/track-model';
        documentProxyMock = Mock.ofType<DocumentProxy>();

            component.background1Animation = 'unset-value';

            component.ngOnInit();

            await flushPromises();
        const playbackServicePlaybackStarted$: Observable<PlaybackStarted> = playbackServicePlaybackStartedMock.asObservable();
            metadataServiceMock


});
            appearanceServiceMock.reset();
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))



            component.ngOnInit();
            // Arrange
        it('should not set background1 if background1 is not used and background2 is the same as the proposed background on playback stopped', async () => {
            // Arrange

            expect(component.controlsVisibility).toEqual('visible');
    let schedulerMock: IMock<SchedulerBase>;

            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.never());

            // Arrange
            expect(component.background2).toEqual('dummy-background');

        nowPlayingNavigationServiceMock = Mock.ofType<NowPlayingNavigationServiceBase>();
            component.background1IsUsed = true;
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();

            // Act
            component.background2 = 'another-background';
            expect(component.background2Animation).toEqual('fade-in-dark');

            expect(component.background2Animation).toEqual('fade-in-light');
            // Act

            component.ngOnInit();
            expect(component.background2Animation).toEqual('fade-out');
            component.background1IsUsed = true;
            metadataServiceMock
        });
            // Act
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            await flushPromises();

        it('should set background1 if background1 is not used and background2 is different than the proposed background on playback started', async () => {

import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
            expect(component.background1).toEqual('dummy-background');
            const component: NowPlayingComponent = createComponent();
        });
            component.background1Animation = 'unset-value';
            // Arrange

            component.background1 = 'another-background';
            expect(component.background1IsUsed).toBeFalsy();
import { NowPlayingNavigationServiceBase } from '../../../services/now-playing-navigation/now-playing-navigation.service.base';
            // Assert
            expect(component.background2).toEqual('dummy-background');
            // Act
            // Assert
            const component: NowPlayingComponent = createComponent();
            playbackServicePlaybackStoppedMock.next();


            // Act
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            // Assert
        it('should set background1 if background1 is not used and background2 is different than the proposed background on playback stopped', async () => {
            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.once());
            // Act
        schedulerMock = Mock.ofType<SchedulerBase>();
            // Assert

            const component: NowPlayingComponent = createComponent();
import { Observable, Subject } from 'rxjs';

            expect(component.background1IsUsed).toBeTruthy();
            // Arrange
            component.background2Animation = 'unset-value';
            // Arrange

            component.background1 = 'unset-value';
            // Act
        });
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);

        playbackServicePlaybackStoppedMock = new Subject();
            const component: NowPlayingComponent = createComponent();
        it('should initialize background2 as empty', () => {


            await component.ngAfterViewInit();
            component.background2 = 'another-background';

            expect(component.background1IsUsed).toBeFalsy();
import { MetadataService } from '../../../services/metadata/metadata.service';
            navigationServiceMock.verify((x) => x.navigateToCollectionAsync(), Times.exactly(1));
            component.ngOnInit();

            component.background1IsUsed = true;


        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackServicePlaybackStopped$);
    beforeEach(() => {
        it('should set background2 if background1 is used and background1 is different than the proposed background and light theme is not used', async () => {
            component.background2 = 'unset-value';
        it('should not set background2 if background1 is used and background1 is the same as the proposed background', async () => {
            // Act



            metadataServiceMock

import { PlaybackService } from '../../../services/playback/playback.service';
            metadataServiceMock

        });
            await flushPromises();
            await component.ngAfterViewInit();
            expect(component.background2).toEqual('dummy-background');
            settingsMock.object,
            expect(component.background1Animation).toEqual('fade-out');
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))

            // Arrange

            // Assert
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));
            // Act
            // Assert
            expect(component.background1).toEqual('unset-value');

            component.background2 = 'dummy-background';
                .returns(() => Promise.resolve('dummy-background'));
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            component.background2Animation = 'unset-value';

                .returns(() => Promise.resolve('dummy-background'));

            expect(component.background1IsUsed).toBeFalsy();
        settingsMock = Mock.ofType<SettingsBase>();

            metadataServiceMock.object,
            expect(component.background1Animation).toEqual('fade-out');

        );
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => true);
import { IMock, Mock, Times } from 'typemoq';
            // Arrange
            expect(component.background1IsUsed).toBeTruthy();
            // Arrange



            // Arrange
            expect(component.background2).toEqual('unset-value');
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            // Assert
                .returns(() => Promise.resolve('dummy-background'));
            expect(component.background1IsUsed).toBeTruthy();
            component.background2Animation = 'unset-value';
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            expect(component.background1IsUsed).toBeFalsy();
            expect(component.background1IsUsed).toBeTruthy();
        });
            component.background1 = 'another-background';
            // Arrange
            component.background1Animation = 'unset-value';
            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');


            component.background1Animation = 'unset-value';
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
                .returns(() => Promise.resolve('dummy-background'));

            documentProxyMock.object,
            expect(component.background1IsUsed).toBeFalsy();
            // Act
            expect(component.background1Animation).toEqual('fade-in-dark');
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
    let settingsMock: IMock<SettingsBase>;
            component.background2 = 'unset-value';
        it('should set the audio visualizer', async () => {
            // Assert
            expect(component.background2).toEqual('dummy-background');
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
            // Assert
            expect(component.background2Animation).toEqual('fade-in-dark');
describe('NowPlayingComponent', () => {
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            component.background2 = 'unset-value';
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => true);

                .returns(() => Promise.resolve('dummy-background'));
            component.background1Animation = 'unset-value';
    let navigationServiceMock: IMock<NavigationServiceBase>;
        it('should not toggle playback when space is pressed inside an input element', () => {

            expect(component.background2Animation).toEqual('fade-in-light');
            await component.ngAfterViewInit();

            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            // Assert
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
    describe('ngAfterViewInit', () => {
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            // Assert
        it('should initialize background2Animation as "fade-in-light" if the light theme is being used', () => {
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;
            // Assert
            expect(component.background1IsUsed).toBeFalsy();
        });
                .returns(() => Promise.resolve('dummy-background'));
        });
        });
            const component: NowPlayingComponent = createComponent();
            component.background1Animation = 'unset-value';
            const component: NowPlayingComponent = createComponent();
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            expect(component.background1Animation).toEqual('fade-in-dark');
            expect(component.background2).toEqual('dummy-background');
            expect(component.background1).toEqual('dummy-background');


            expect(component.background1Animation).toEqual('fade-out');
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => false);

import { PlaybackStarted } from '../../../services/playback/playback-started';
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            expect(component.background2Animation).toEqual('fade-out');
            // Act

import { NowPlayingComponent } from './now-playing.component';
        });
            const component: NowPlayingComponent = createComponent();

            const component: NowPlayingComponent = createComponent();
        it('should toggle playback when space is pressed outside of an input element', () => {

            // Assert
            const component: NowPlayingComponent = createComponent();
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))



        appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => false);

            // Act
            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
            component.ngOnInit();
    let documentProxyMock: IMock<DocumentProxy>;

        });
            expect(component.background1Animation).toEqual('unset-value');
            component.background2Animation = 'unset-value';
import { SettingsBase } from '../../../common/settings/settings.base';
import { DocumentProxy } from '../../../common/io/document-proxy';
            await flushPromises();


                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))

        it('should not set background1 if background1 is not used and background2 is the same as the proposed background on playback started', async () => {
        });


            component.background1 = 'unset-value';
        it('should set background2 if background1 is used and background1 is different than the proposed background on playback stopped and light theme is used', async () => {
        });


            metadataServiceMock

            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            // Act
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => true);
            // Arrange
            component.background2Animation = 'unset-value';
import { SearchServiceBase } from '../../../services/search/search.service.base';
            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.never());
            // Act
            appearanceServiceMock.reset();
            component.background2Animation = 'unset-value';
            expect(component.background1Animation).toEqual('unset-value');
    const flushPromises = () => new Promise(process.nextTick);


                .returns(() => Promise.resolve('dummy-background'));

            playbackServicePlaybackStoppedMock.next();
            component.background1 = 'dummy-background';
        });
            component.background1Animation = 'unset-value';

        it('should not set background2 if background1 is used and background1 is the same as the proposed background on playback stopped', async () => {
            expect(component.background2Animation).toEqual('fade-in-light');
            expect(component.background1Animation).toEqual('fade-out');
            component.background1 = 'another-background';
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            component.background1IsUsed = false;
        });
            component.background1 = 'dummy-background';
import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
            const component: NowPlayingComponent = createComponent();
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
        it('should set background2 if background1 is used and background1 is different than the proposed background on playback started and light theme is used', async () => {
            metadataServiceMock
            expect(component.background2Animation).toEqual('fade-out');

    describe('ngOnInit', () => {
            expect(component.background2Animation).toEqual('unset-value');
            expect(component.background2Animation).toEqual('unset-value');
            // Assert
            component.background1IsUsed = true;
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            await component.ngAfterViewInit();
            component.background2 = 'another-background';
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModelMock.object, false));
        });
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStarted$);
            await flushPromises();
            const component: NowPlayingComponent = createComponent();
            documentProxyMock.setup((x) => x.getCanvasById('nowPlayingAudioVisualizer')).returns(() => canvasMock.object);
            // Act
            component.background1IsUsed = true;
            component.background1IsUsed = false;
        it('should set background2 if background1 is used and background1 is different than the proposed background and light theme is used', async () => {
            // Arrange
        it('should set background2 if background1 is used and background1 is different than the proposed background on playback started and light theme is not used', async () => {

        });
    });
            // Act
        });
            component.background2Animation = 'unset-value';
            component.background1IsUsed = true;
            const component: NowPlayingComponent = createComponent();
            component.background1Animation = 'unset-value';

            // Act

            component.background1 = 'another-background';
            // Act

            component.background1Animation = 'unset-value';
            await flushPromises();
                .returns(() => Promise.resolve('dummy-background'));

            // Assert


    let playbackServiceMock: IMock<PlaybackService>;

import { NowPlayingPage } from '../../../services/now-playing-navigation/now-playing-page';
                .returns(() => Promise.resolve('dummy-background'));
            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
    function createComponent(): NowPlayingComponent {
            audioVisualizerMock.verify((x) => x.connectCanvas(canvasMock.object), Times.once());
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
            expect(component.background2Animation).toEqual('fade-in-light');
            component.background2Animation = 'unset-value';
            expect(component.background1Animation).toEqual('unset-value');
        it('should request to go back to the collection', async () => {
            expect(component).toBeDefined();


                .returns(() => Promise.resolve('dummy-background'));
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))


            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);

            // Act
            const component: NowPlayingComponent = createComponent();
            // Arrange
            expect(component.background1Animation).toEqual('fade-out');
            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => false);
            // Arrange
            expect(component.background1Animation).toEqual('unset-value');
        it('should set background1 if background1 is not used and background2 is different than the proposed background', async () => {
        });
            component.background2 = 'unset-value';
    });
            component.background2 = 'unset-value';
        });
            metadataServiceMock
            component.handleKeyboardEvent(keyboardEventMock.object);
            expect(component.background1).toEqual('');
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModelMock.object, false));
            expect(component.background1).toEqual('unset-value');
            // Act
            component.background1 = 'unset-value';
            component.background2Animation = 'unset-value';
            component.background1Animation = 'unset-value';
            component.background1 = 'dummy-background';


            // Assert
            const component: NowPlayingComponent = createComponent();
            component.background2Animation = 'unset-value';
        it('should initialize background1IsUsed as false', () => {
            // Arrange
            appearanceServiceMock.reset();
            component.background1IsUsed = true;
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
        it('should initialize controlsVisibility as "visible"', () => {
            // Arrange
            expect(component.background1IsUsed).toBeFalsy();
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            expect(component.background2).toEqual('unset-value');
            // Assert
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
    });
            const component: NowPlayingComponent = createComponent();
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModelMock.object, false));
            const component: NowPlayingComponent = createComponent();
        playbackServiceMock = Mock.ofType<PlaybackService>();
                .returns(() => Promise.resolve('dummy-background'));
            component.ngOnInit();
        it('should not toggle playback when another key than space is pressed', () => {
            component.background2Animation = 'unset-value';
            component.background1Animation = 'unset-value';

            component.background1IsUsed = true;
            component.background2 = 'unset-value';
            const component: NowPlayingComponent = createComponent();
            // Assert
            expect(component.background1IsUsed).toBeTruthy();
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
        it('should set background2 if background1 is used and background1 is different than the proposed background on playback stopped and light theme is not used', async () => {
            expect(component.background1).toEqual('unset-value');
    describe('handleKeyboardEvent', () => {
            // Arrange
            const component: NowPlayingComponent = createComponent();

            // Act
        const playbackServicePlaybackStopped$: Observable<void> = playbackServicePlaybackStoppedMock.asObservable();
            playbackServicePlaybackStoppedMock.next();

            await component.ngAfterViewInit();


            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => true);
            component.background1IsUsed = false;
            appearanceServiceMock.object,

            appearanceServiceMock.setup((x) => x.isUsingLightTheme).returns(() => false);
        });
            component.background1IsUsed = false;

            component.ngOnInit();
            // Arrange
            // Assert
            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');
            component.background2Animation = 'unset-value';
        });
            const component: NowPlayingComponent = createComponent();
            schedulerMock.object,
            appearanceServiceMock.reset();
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();

            metadataServiceMock
            component.background1Animation = 'unset-value';
        });

            // Arrange
            expect(component.background2Animation).toEqual('unset-value');
            // Arrange
                .returns(() => Promise.resolve('dummy-background'));
        it('should create', () => {

    let searchServiceMock: IMock<SearchServiceBase>;
            component.handleKeyboardEvent(keyboardEventMock.object);
            // Act
            component.background1Animation = 'unset-value';
            await component.goBackToCollectionAsync();

            metadataServiceMock
            metadataServiceMock

            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModelMock.object);
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
            component.background1IsUsed = false;
            expect(component.background1).toEqual('dummy-background');
                .setup((x) => x.createAlbumImageUrlAsync(trackModelMock.object, 0))
        it('should define appearanceService', () => {
            const component: NowPlayingComponent = createComponent();
            // Arrange
            // Assert
            // Act
            appearanceServiceMock.reset();
                .returns(() => Promise.resolve('dummy-background'));


            component.background1 = 'unset-value';
            component.ngOnInit();
        audioVisualizerMock = Mock.ofType<AudioVisualizer>();
            expect(component.background1IsUsed).toBeFalsy();
            expect(component.background2Animation).toEqual('fade-in-dark');
            metadataServiceMock
        return new NowPlayingComponent(
            appearanceServiceMock.reset();
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            const component: NowPlayingComponent = createComponent();
            component.background2Animation = 'unset-value';
        it('should not set background2 if background1 is used and background1 is the same as the proposed background on playback started', async () => {
        playbackServicePlaybackStartedMock = new Subject();

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
            component.background1IsUsed = false;
            const component: NowPlayingComponent = createComponent();
            component.background2 = 'dummy-background';


            component.background1IsUsed = true;
        metadataServiceMock = Mock.ofType<MetadataService>();
