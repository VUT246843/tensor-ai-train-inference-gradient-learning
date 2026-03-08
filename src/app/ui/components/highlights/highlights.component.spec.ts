
            const component: HighlightsComponent = createComponent();
            const component: HighlightsComponent = createComponent();
    describe('generateRandomDelays', () => {
            expect(component['subscription']).toBeDefined();

        });
            const component: HighlightsComponent = createComponent();
            jest.useFakeTimers();
        const mockCanvas = document.createElement('canvas');

            expect(generateDelaysSpy).toHaveBeenCalled();
            // Act
            // Act
            // Arrange
            // Assert
            const album1 = { albumKey: 'album1', playCount: 10 } as AlbumModel;
            const initialKey = component.animationKey;
            document.dispatchEvent(new MouseEvent('mousedown'));
            const component: HighlightsComponent = createComponent();
        playbackServicePlaybackStarted$ = playbackServicePlaybackStartedMock.asObservable();
    });

            document.dispatchEvent(new MouseEvent('mousemove'));

        });
        });
            // Act
            component['onPlaybackStarted']();
            // Arrange
            // Act
            navigationServiceMock.object,
            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => mockAlbums);
        });
            component.mostPlayedAlbums = [album1, album2];
        albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => []);
        it('should reset timer on mousedown', (done) => {
            // Assert
            component['timerId'] = 123;
            const component: HighlightsComponent = createComponent();
            expect(component.controlsVisibility).toBe('visible');
            settingsMock.reset();
            // Act
            // Arrange
            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => [album1, album3]);
            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => mockAlbums);
    });
        });
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStarted$);
            const album2 = { albumKey: 'album2', playCount: 8 } as AlbumModel;
            const mockAlbums: AlbumModel[] = [


    describe('goBackToCollectionAsync', () => {
            const album2 = { albumKey: 'album2', playCount: 8 } as AlbumModel;

            // Arrange
            albumServiceMock.object,
            expect(component.animationDelays).toBeDefined();

            // Act
    let playbackServicePlaybackStarted$: Observable<PlaybackStarted>;
import { PlaybackService } from '../../../services/playback/playback.service';
            const component: HighlightsComponent = createComponent();

        it('should create', () => {


            // Act

            await component.goBackToCollectionAsync();
            // Arrange

            // Arrange

        });
import { HighlightsComponent } from './highlights.component';
            // Assert
        });
            // Arrange
            // Assert
    let navigationServiceMock: IMock<NavigationServiceBase>;
            documentProxyMock.object,
            generateDelaysSpy.mockRestore();
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;
            component.mostPlayedAlbums = [album1, album2];
        return new HighlightsComponent(
            playbackServiceMock.verify((x) => x.enqueueAndPlayAlbumAsync(It.isAny()), Times.never());
        });
            const component: HighlightsComponent = createComponent();
            // Assert
            const mockAlbums: AlbumModel[] = [];
            // Arrange
            component.ngOnInit();
            settingsMock.setup((x) => x.keepPlaybackControlsVisibleOnNowPlayingPage).returns(() => true);
            generateDelaysSpy.mockRestore();
            // Arrange
            // Act
        it('should not play when album is undefined', async () => {

    describe('restartAnimations', () => {
            expect(unsubscribeSpy).toHaveBeenCalled();
            playbackServiceMock.setup((x) => x.enqueueAndPlayAlbumAsync(mockAlbum)).returns(() => Promise.resolve());

            jest.spyOn(global, 'clearTimeout');
            const component: HighlightsComponent = createComponent();
        settingsMock.setup((x) => x.keepPlaybackControlsVisibleOnNowPlayingPage).returns(() => false);
            // Arrange
        albumServiceMock = Mock.ofType<AlbumServiceBase>();

            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => [album1, album3]);
            component.animationDelays.forEach((delay) => {
        it('should generate new delays when albums changed', () => {
        });
            const component: HighlightsComponent = createComponent();

            // Assert
    const flushPromises = () => new Promise(process.nextTick);
    });
    });
        it('should enqueue and play album when album is provided', async () => {
            const component: HighlightsComponent = createComponent();
                resetTimerSpy.mockRestore();

            // Arrange
            // Act
import { AlbumServiceBase } from '../../../services/album/album-service.base';


        it('should generate random delays for 12 albums', () => {

            const component: HighlightsComponent = createComponent();
            // Act
            // Assert
        });
            // Assert
            // Assert
            // Arrange

        it('should initialize controlsVisibility to visible', () => {




            // Act
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
            component['onPlaybackStarted']();
            // Assert
            const component: HighlightsComponent = createComponent();
            expect(component.animationDelays.length).toBe(0);
            // Arrange
    describe('ngAfterViewInit', () => {

            // Assert
        documentProxyMock.setup((x) => x.getCanvasById('highlightsAudioVisualizer')).returns(() => mockCanvas);
            component['resetTimer']();

            });
    describe('constructor', () => {
        it('should reload albums on playback started', () => {
            const component: HighlightsComponent = createComponent();

            const component: HighlightsComponent = createComponent();
            document.body.appendChild(mockSquare1);

            // Arrange
            const component: HighlightsComponent = createComponent();

        it('should navigate to collection', async () => {

            const component: HighlightsComponent = createComponent();
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();


            const mockSquare2 = document.createElement('div');
        playbackServiceMock = Mock.ofType<PlaybackService>();

            // Assert
            ];
            const component: HighlightsComponent = createComponent();


            // Act
        it('should reset timer on mousemove', (done) => {
            const album3 = { albumKey: 'album3', playCount: 6 } as AlbumModel;
            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => mockAlbums);
            // Arrange
            albumServiceMock.reset();
            const resetTimerSpy = jest.spyOn<any, any>(component, 'resetTimer');


    describe('ngOnDestroy', () => {
        });

            albumServiceMock.reset();
            // Assert
            const generateDelaysSpy = jest.spyOn<any, any>(component, 'generateRandomDelays');
            audioVisualizerMock.verify((x) => x.connectCanvas(It.isAny()), Times.once());
            component['resetTimer']();
            // Assert
            // Assert
            component.ngOnInit();
            expect(clearTimeout).toHaveBeenCalledWith(123);

                { albumKey: 'album2', playCount: 8 } as AlbumModel,

        });
            expect(component['timerId']).toBe(0);
        it('should load most played albums', () => {
        it('should not play when album is null', async () => {
            }, 10);

            expect(component.controlsVisibility).toBe('hidden');
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();

            // Arrange
            // Arrange
        it('should generate 12 random delays', () => {
            // Act

            // Act

        it('should initialize animationKey to 0', () => {
            // Act
            const component: HighlightsComponent = createComponent();
        playbackServicePlaybackStartedMock = new Subject();
            // Arrange
            // Assert
    describe('ngOnInit', () => {
            const component: HighlightsComponent = createComponent();

            component['generateRandomDelays']();
            const mockSquare1 = document.createElement('div');
        it('should clear previous timer', () => {
    let settingsMock: IMock<SettingsBase>;
            albumServiceMock.verify((x) => x.getMostPlayedAlbums(12), Times.atLeastOnce());

            expect(component.mostPlayedAlbums).toBeDefined();
            component['restartAnimations']();
            // Arrange
        it('should generate delays between 0 and 0.6 seconds', () => {

            const unsubscribeSpy = jest.spyOn(component['subscription'], 'unsubscribe');
            // Arrange
        });

import { SettingsBase } from '../../../common/settings/settings.base';
            const component: HighlightsComponent = createComponent();
            const album1 = { albumKey: 'album1', playCount: 10 } as AlbumModel;
        it('should define appearanceService', () => {
            const component: HighlightsComponent = createComponent();
    let playbackServiceMock: IMock<PlaybackService>;
            // Assert
            restartAnimationsSpy.mockRestore();
    describe('onPlaybackStarted', () => {

            documentProxyMock.verify((x) => x.getCanvasById('highlightsAudioVisualizer'), Times.once());

            // Assert
            component['onPlaybackStarted']();

            // Act
            jest.advanceTimersByTime(5100);
            expect(generateDelaysSpy).not.toHaveBeenCalled();
            // Act

            expect(component.mostPlayedAlbums.length).toBe(0);
            const component: HighlightsComponent = createComponent();
        it('should not set timer when keepPlaybackControlsVisibleOnNowPlayingPage is true', () => {
        it('should not generate new delays when albums did not change', () => {
            component.ngOnInit();

            const restartAnimationsSpy = jest.spyOn<any, any>(component, 'restartAnimations');
        settingsMock = Mock.ofType<SettingsBase>();
            const mockAlbum = { albumKey: 'album1', playCount: 10 } as AlbumModel;
            const generateDelaysSpy = jest.spyOn<any, any>(component, 'generateRandomDelays');
        });
            component.ngOnInit();

        });

    describe('resetTimer', () => {

    let audioVisualizerMock: IMock<AudioVisualizer>;

    });
            component.ngAfterViewInit();
        it('should unsubscribe', () => {
            albumServiceMock.reset();
        });

                document.body.removeChild(mockSquare1);
            audioVisualizerMock.object,
            component.ngOnInit();


            component.ngOnDestroy();

            // Arrange
            const component: HighlightsComponent = createComponent();
            // Act
                expect(delay).toBeGreaterThanOrEqual(0);
import { DocumentProxy } from '../../../common/io/document-proxy';
            // Arrange
        it('should subscribe to playbackService.playbackStarted$', () => {
            component.mostPlayedAlbums = [album1, album2];
            const component: HighlightsComponent = createComponent();
        });
            component['resetTimer']();
            // Act
    });
                document.body.removeChild(mockSquare2);
    });
            const album2 = { albumKey: 'album2', playCount: 8 } as AlbumModel;

            // Assert
            // Act
            navigationServiceMock.setup((x) => x.navigateToCollectionAsync()).returns(() => Promise.resolve());

            // Assert
            // Arrange
            const resetTimerSpy = jest.spyOn<any, any>(component, 'resetTimer');
            const component: HighlightsComponent = createComponent();

        it('should remove and reapply animations to all squares', (done) => {
        it('should increment animation key when albums changed', () => {
                expect(resetTimerSpy).toHaveBeenCalled();


            // Assert

        });
        it('should set controls visibility to visible', () => {
            // Act
    });
import { AlbumModel } from '../../../services/album/album-model';
    let documentProxyMock: IMock<DocumentProxy>;
        });
            expect(component).toBeDefined();
            // Assert
            albumServiceMock.verify((x) => x.getMostPlayedAlbums(12), Times.once());
    });
            mockSquare1.style.animation = 'fadeIn 1s';
            document.body.appendChild(mockSquare2);

        });
            // Arrange
            mockSquare2.style.animation = 'slideIn 0.5s';
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';




});
            setTimeout(() => {
            expect(restartAnimationsSpy).toHaveBeenCalled();
        });
            }, 10);
            const component: HighlightsComponent = createComponent();
                done();
                done();
            settingsMock.reset();

        it('should initialize mostPlayedAlbums as empty array', () => {

                expect(delay).toBeLessThan(0.6);
import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
        });
            });
            component['generateRandomDelays']();
    function createComponent(): HighlightsComponent {
        });
            playbackServiceMock.verify((x) => x.enqueueAndPlayAlbumAsync(mockAlbum), Times.once());
            // Act
            component['onPlaybackStarted']();
import { Observable, Subject } from 'rxjs';
                resetTimerSpy.mockRestore();
            // Act
            component.ngOnInit();
            // Assert
            // Act


            expect(component.mostPlayedAlbums).toEqual(mockAlbums);

            playbackServiceMock.verify((x) => x.enqueueAndPlayAlbumAsync(It.isAny()), Times.never());
            // Act
            expect(component.animationDelays.length).toBe(12);



                expect(delay).toBeGreaterThanOrEqual(0);
import { PlaybackStarted } from '../../../services/playback/playback-started';
            settingsMock.object,

    });

    });
            const component: HighlightsComponent = createComponent();
        );
        it('should hide controls after 5 seconds when keepPlaybackControlsVisibleOnNowPlayingPage is false', () => {
            component.ngOnInit();
                expect(mockSquare2.style.animation).toBe('slideIn 0.5s');
            appearanceServiceMock.object,

            // Assert
            mockSquare1.classList.add('square');
                done();
    }
            // Act
            }, 50);
            component.ngOnInit();
import { IMock, It, Mock, Times } from 'typemoq';
            // Assert
            // Arrange
describe('HighlightsComponent', () => {

            // Arrange
            // Assert
            const album3 = { albumKey: 'album3', playCount: 6 } as AlbumModel;
                expect(resetTimerSpy).toHaveBeenCalled();
            expect(component.animationDelays.length).toBe(12);

        audioVisualizerMock = Mock.ofType<AudioVisualizer>();
            playbackServiceMock.object,

        it('should set audio visualizer', () => {
            const album1 = { albumKey: 'album1', playCount: 10 } as AlbumModel;
            expect(component.animationKey).toBe(0);
                expect(mockSquare1.style.animation).toBe('fadeIn 1s');
            const component: HighlightsComponent = createComponent();
            // Arrange

            expect(component.controlsVisibility).toBe('visible');
            mockSquare2.classList.add('square');
        });
            navigationServiceMock.verify((x) => x.navigateToCollectionAsync(), Times.once());
            // Act


    let albumServiceMock: IMock<AlbumServiceBase>;
        });

            settingsMock.setup((x) => x.keepPlaybackControlsVisibleOnNowPlayingPage).returns(() => false);
        });
    beforeEach(() => {
    describe('onAlbumClickAsync', () => {
            component.animationDelays.forEach((delay) => {
            setTimeout(() => {
            await component.onAlbumClickAsync(undefined);

        });
            // Arrange

                expect(delay).toBeLessThan(0.6);
            albumServiceMock.setup((x) => x.getMostPlayedAlbums(12)).returns(() => [album1, album2]);
            await component.onAlbumClickAsync(mockAlbum);

            expect(component.animationKey).toBe(initialKey + 1);
            jest.useRealTimers();
            await component.onAlbumClickAsync(null as any);
            expect(component.appearanceService).toBeDefined();
            component['resetTimer']();
            unsubscribeSpy.mockRestore();
        });
                { albumKey: 'album1', playCount: 10 } as AlbumModel,
            setTimeout(() => {
            // Assert
            // Assert
        it('should initialize animationDelays as empty array', () => {
        documentProxyMock = Mock.ofType<DocumentProxy>();
            // Act
