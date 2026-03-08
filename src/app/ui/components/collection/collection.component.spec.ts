    describe('setPage', () => {
        it('should not toggle playback when another key then space is pressed', () => {
            keyboardEventMock.setup((x) => x.key).returns(() => 'a');
            audioVisualizerMock.object,
            appearanceServiceMock.object,

            // Arrange


            expect(component.previousPage).toEqual(3);
            expect(collectionNavigationServiceStub.page).toEqual(2);
        );

            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();

    let collectionNavigationServiceMock: IMock<CollectionNavigationService>;
            const component: CollectionComponent = createComponent();
        it('should define appearanceService', () => {

    function createComponent(): CollectionComponent {
            jest.useFakeTimers();

    let audioVisualizerMock: IMock<AudioVisualizer>;
            // Arrange
            // Arrange
            // Assert
        it('should toggle playback when space is pressed outside of an input element', () => {
    });

            expect(component.settings).toBeDefined();
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
        return new CollectionComponent(
            // Arrange
        });
        it('should set collectionNavigationService.page to the given page', () => {
        it('should create', () => {
            // Act

            // Act

            component.handleKeyboardEvent(keyboardEventMock.object);
            // Arrange
            playbackServiceMock.object,

        );
            // Assert

            // Act
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();

            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
        it('should not toggle playback when space is pressed inside an input element', () => {
            const keyboardEventMock: IMock<KeyboardEvent> = Mock.ofType<KeyboardEvent>();
        });
        audioVisualizerMock = Mock.ofType<AudioVisualizer>();
            // Act
            // Assert
            // Assert
            // Arrange
describe('CollectionComponent', () => {
        it('should set page', () => {
            // Arrange

    describe('constructor', () => {
    });
            audioVisualizerMock.object,
    });
import { DocumentProxy } from '../../../common/io/document-proxy';
        });


        it('should set page to the given page', () => {
        it('should set previousPage to page before changing page', () => {
            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.never());
            // Act

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        });
            component.ngAfterViewInit();

            component.setPage(2);
    let settingsMock: IMock<SettingsBase>;
            keyboardEventMock.setup((x) => x.key).returns(() => ' ');
        collectionNavigationServiceMock = Mock.ofType<CollectionNavigationService>();
            // Assert


            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('input'));
import { IMock, Mock, Times } from 'typemoq';
            // Act

    });
            appearanceServiceMock.object,
            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.once());
            // Act
    describe('ngAfterViewInit', () => {

        playbackServiceMock = Mock.ofType<PlaybackService>();
        });
            audioVisualizerMock.verify((x) => x.connectCanvas(canvasMock.object), Times.once());
import { SettingsBase } from '../../../common/settings/settings.base';
            const component: CollectionComponent = createComponent();
            playbackServiceMock.object,
            // Assert
            // Assert

            const component: CollectionComponent = createComponent();
import { PlaybackService } from '../../../services/playback/playback.service';

            collectionNavigationServiceMock.object,
        documentProxyMock = Mock.ofType<DocumentProxy>();
            documentProxyMock.setup((x) => x.getCanvasById('collectionAudioVisualizer')).returns(() => canvasMock.object);
        settingsMock = Mock.ofType<SettingsBase>();
            component.handleKeyboardEvent(keyboardEventMock.object);
            // Assert
    let documentProxyMock: IMock<DocumentProxy>;

            const component: CollectionComponent = createComponent();
        });
        });
            expect(component).toBeDefined();
            collectionNavigationServiceStub.page = 3;



            // Act
            // Act

import { CollectionComponent } from './collection.component';
            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');
            documentProxyMock.object,
            // Assert
            component.setPage(2);
        it('should set the audio visualizer', () => {
    });

    describe('handleKeyboardEvent', () => {
            documentProxyMock.object,
            // Assert
    let playbackServiceMock: IMock<PlaybackService>;

            component.previousPage = 1;
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));
            // Arrange
            // Act
        });
            const component: CollectionComponent = createComponent();
            const component: CollectionComponent = createComponentUsingStub();
            // Arrange
            expect(component.appearanceService).toBeDefined();
            collectionNavigationServiceMock.setup((x) => x.page).returns(() => 3);
            const component: CollectionComponent = createComponent();
        });
    }

});
        it('should define settings', () => {
        return new CollectionComponent(
            settingsMock.object,
            const component: CollectionComponent = createComponent();
            component.page = 3;
            component.page = 3;
            const component: CollectionComponent = createComponent();
    function createComponentUsingStub(): CollectionComponent {
        });

            // Assert
import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
            // Arrange
            settingsMock.object,
            expect(component.page).toEqual(2);
            component.setPage(2);
            const component: CollectionComponent = createComponent();

            const canvasMock: IMock<HTMLCanvasElement> = Mock.ofType<HTMLCanvasElement>();
    }
            keyboardEventMock.setup((x) => x.type).returns(() => 'keyup');
            // Arrange
            keyboardEventMock.setup((x) => x.target).returns(() => document.createElement('div'));
        });
            // Act



    const collectionNavigationServiceStub: any = { page: 0 };
            jest.runAllTimers();
            collectionNavigationServiceStub,
            const component: CollectionComponent = createComponent();
            expect(component.page).toEqual(3);

            component.handleKeyboardEvent(keyboardEventMock.object);
    beforeEach(() => {
            playbackServiceMock.verify((x) => x.togglePlaybackAsync(), Times.never());
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
import { CollectionNavigationService } from '../../../services/collection-navigation/collection-navigation.service';
