            // Arrange
            refreshPlaybackQueueListRequested.next();
                settingsMock,
        it('should set the selected item on mouseSelectionWatcher', () => {
            expect(component.contextMenuOpener).toBeDefined();
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();



        });
        it('should define playbackService', () => {
            playbackServicePlaybackStarted.next(playbackStarted);
        it('should initialize shouldShowList as false', () => {
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;
            refreshPlaybackQueueListRequested.next();
        });
                dateTimeMock.object,
            // Act
    let playbackIndicationServiceMock: IMock<PlaybackIndicationServiceBase>;
        it('should open the track context menu', () => {
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel]);
            const component: PlaybackQueueComponent = createComponent();

            const component: PlaybackQueueComponent = createComponent();
            mouseSelectionWatcherMock.object,
        const playbackServicePlaybackStarted$: Observable<PlaybackStarted> = playbackServicePlaybackStarted.asObservable();



            const component: PlaybackQueueComponent = createComponent();
            // Assert

import { DateTime } from '../../../common/date-time';
                settingsMock,

    });
            // Assert
import { PlaybackService } from '../../../services/playback/playback.service';
        it('should initialize mouseSelectionWatcher using the tracks in the queue when the playback queue is shown', () => {

            // Arrange
        playbackIndicationServiceMock = Mock.ofType<PlaybackIndicationServiceBase>();
        });
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
import { TrackModels } from '../../../services/track/track-models';

        it('should remove selected tracks from the queue', () => {
        it('should set the playing track when playback starts', () => {
            component.ngOnInit();
            expect(shouldShowListBefore).toBeFalsy();
            );
            expect(component.playbackService).toBeDefined();
        });
        });
            const trackModel: TrackModel = new TrackModel(
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel, false);
            const component: PlaybackQueueComponent = createComponent();
            expect(component.mouseSelectionWatcher).toBeDefined();
            const shouldShowListAfter: boolean = component.shouldShowList;
            navigationServiceMock.object,
            const component: PlaybackQueueComponent = createComponent();
        );
            // Arrange
            // Assert
                translatorServiceMock.object,
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, trackModel), Times.once());
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStarted$);
import { MouseSelectionWatcher } from '../mouse-selection-watcher';
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        it('should define mouseSelectionWatcher', () => {
        return new PlaybackQueueComponent(
            const trackModel: TrackModel = new TrackModel(
            playbackIndicationServiceMock.object,

    describe('onTrackContextMenu', () => {
        playbackServiceMock.setup((x) => x.playbackQueue).returns(() => playbackQueue);
    });
        playbackQueue.addTrack(new TrackModel(new Track('DummyPath'), dateTimeMock.object, translatorServiceMock.object, settingsMock));
            const trackModel: TrackModel = new TrackModel(
            // Arrange

    function createComponent(): PlaybackQueueComponent {
            // Arrange
        it('should define contextMenuOpener', () => {
    let navigationServiceShowPlaybackQueueRequested: Subject<void>;
            );
    let refreshPlaybackQueueListRequested: Subject<void>;
            // Assert
    let dateTimeMock: IMock<DateTime>;
    }
import { IMock, Mock, Times } from 'typemoq';
    let playbackQueue: TrackModels;
            // Arrange
            // Act
            const shouldShowListBefore: boolean = component.shouldShowList;
    describe('constructor', () => {
                dateTimeMock.object,

    describe('onRemoveFromQueue', () => {
    });
            const component: PlaybackQueueComponent = createComponent();
        });
        const refreshPlaybackQueueListRequested$: Observable<void> = refreshPlaybackQueueListRequested.asObservable();

            // Act
                new Track('DummyPath'),

            expect(component).toBeDefined();
            contextMenuOpenerMock.verify((x) => x.open(component.trackContextMenu, event, trackModel), Times.once());

            contextMenuOpenerMock.object,
            // Assert
            // Arrange
            const component: PlaybackQueueComponent = createComponent();

    });
            expect(component.trackContextMenu).toBeUndefined();
    let navigationServiceMock: IMock<NavigationServiceBase>;
    });
        });
    beforeEach(() => {
            jest.runAllTimers();

            const event: any = {};
        settingsMock = new SettingsMock();
        });
            // Arrange
            // Act
            // Act
            // Act
            const trackModel: TrackModel = new TrackModel(
            mouseSelectionWatcherMock.verify((x) => x.initialize(playbackQueue.tracks), Times.once());


            );
            component.ngOnInit();
import { PlaybackIndicationServiceBase } from '../../../services/playback-indication/playback-indication.service.base';
    describe('setSelectedTracks', () => {

                translatorServiceMock.object,

    describe('ngOnInit', () => {
        const navigationServiceShowPlaybackQueueRequested$: Observable<void> = navigationServiceShowPlaybackQueueRequested.asObservable();
                translatorServiceMock.object,
        });
    });
import { SettingsMock } from '../../../testing/settings-mock';
            // Assert
            // Act
        refreshPlaybackQueueListRequested = new Subject();

            // Act
    let playbackServiceMock: IMock<PlaybackService>;
            // Act
            // Arrange
        playbackServiceMock = Mock.ofType<PlaybackService>();
                translatorServiceMock.object,
import { PlaybackQueueComponent } from './playback-queue.component';
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
            // Act


import { Observable, Subject } from 'rxjs';
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
        navigationServiceMock.setup((x) => x.refreshPlaybackQueueListRequested$).returns(() => refreshPlaybackQueueListRequested$);
import { TrackModel } from '../../../services/track/track-model';
            // Arrange

            expect(component.shouldShowList).toBeFalsy();
        navigationServiceMock.setup((x) => x.showPlaybackQueueRequested$).returns(() => navigationServiceShowPlaybackQueueRequested$);
            // Assert
            component.onRemoveFromQueue();
            const component: PlaybackQueueComponent = createComponent();
import { Track } from '../../../data/entities/track';
                new Track('Path 1'),
            const component: PlaybackQueueComponent = createComponent();

            // Assert
        playbackServicePlaybackStarted = new Subject();
    let playbackServicePlaybackStarted: Subject<PlaybackStarted>;
            // Assert
                settingsMock,
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(playbackQueue.tracks, trackModel), Times.once());
            const component: PlaybackQueueComponent = createComponent();
                settingsMock,
            // Act
                dateTimeMock.object,
    let settingsMock: any;
            component.setSelectedTracks(event, trackModel);
            component.onTrackContextMenu(event, trackModel);
            // Arrange
                dateTimeMock.object,


        playbackQueue = new TrackModels();

        it('should set shouldShowList to true the playback queue is shown', () => {
            playbackServiceMock.object,
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
                new Track('Path 1'),
            // Assert
describe('PlaybackQueueComponent', () => {
            // Assert
            expect(shouldShowListAfter).toBeTruthy();
    let translatorServiceMock: IMock<TranslatorServiceBase>;

            jest.useFakeTimers();

                new Track('DummyPath'),
import { PlaybackStarted } from '../../../services/playback/playback-started';






            );
        navigationServiceShowPlaybackQueueRequested = new Subject();
        });

import { ContextMenuOpener } from '../context-menu-opener';
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
            // Arrange
            // Assert
            const component: PlaybackQueueComponent = createComponent();
});

            const event: any = {};
            playbackServiceMock.verify((x) => x.removeFromQueue([trackModel]), Times.once());
            component.ngOnInit();
        it('should declare trackContextMenu', () => {
        });
            const component: PlaybackQueueComponent = createComponent();

        dateTimeMock = Mock.ofType<DateTime>();
        it('should create', () => {
        });


            // Act
