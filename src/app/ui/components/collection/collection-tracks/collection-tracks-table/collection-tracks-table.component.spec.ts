        //     const component: CollectionTracksTableComponent = createComponent();
        metadataServiceMock = Mock.ofType<MetadataService>();
        playbackServiceMock.setup((x) => x.playbackResumed$).returns(() => playbackResumedMock$);

            // Act
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;
        });
import { TrackServiceBase } from '../../../../../services/track/track.service.base';
        metadataServiceMock.setup((x) => x.ratingSaved$).returns(() => metadataService_ratingSaved$);

        track3.rating = 3;
import { DateTime } from '../../../../../common/date-time';


        const tracksColumnsService_tracksColumnsVisibilityChanged$: Observable<TracksColumnsVisibility> =
        //     // Arrange
        track1.albumArtists = ';Album artist 1;';

            // Arrange
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());
        track2.trackTitle = 'Title 2';
        });
        //     metadataService_ratingSaved.next(trackModel5);

        //     component.tracks = tracks;
            // Assert
        tracksColumnsServiceMock.setup((x) => x.tracksColumnsOrderChanged$).returns(() => tracksColumnsService_tracksColumnsOrderChanged$);

    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;
            // Act
            const component: CollectionTracksTableComponent = createComponent();
        trackModel4 = new TrackModel(track4, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        //     const component: CollectionTracksTableComponent = createComponent();
        track4.albumTitle = 'Album title 2';
        // it('should initialize mouseSelectionWatcher using tracks', () => {
        tracksColumnsServiceMock.setup((x) => x.getTracksColumnsVisibility()).returns(() => tracksColumnsVisibility);
        //     // Arrange
            // Assert
        playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
            metadataServiceMock.object,
        track2.discNumber = 2;
import { MetadataService } from '../../../../../services/metadata/metadata.service';
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        it('should create', () => {
        playbackServiceMock = Mock.ofType<PlaybackService>();
        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackStoppedMock$);
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, trackModel2), Times.once());
        dialogServiceMock = Mock.ofType<DialogServiceBase>();
            // Arrange
        // TODO: restore this test
import { DesktopBase } from '../../../../../common/io/desktop.base';
            // Assert
        track4.trackTitle = 'Title 4';


    let playbackStoppedMock$: Observable<void>;
            const tracks: TrackModels = new TrackModels();
        it('should get tracksColumnsVisibility', () => {
        //     const component: CollectionTracksTableComponent = createComponent();
    describe('constructor', () => {
        dateTimeMock = Mock.ofType<DateTime>();
            loggerMock.object,
            desktopMock.object,
        const metadataService_ratingSaved$: Observable<TrackModel> = metadataService_ratingSaved.asObservable();
            tracksColumnsOrderingMock.object,
        //     // Arrange

            expect(component.tracksColumnsVisibility).toBe(tracksColumnsVisibility);

        track1.trackNumber = 1;
            // Arrange
    let trackModel4: TrackModel;
        track3.trackTitle = 'Title 3';
        playbackResumedMock = new Subject();
    });
    let playbackIndicationServiceMock: IMock<PlaybackIndicationServiceBase>;

    describe('shuffleAllAsync', () => {
        //             ),
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
    let metadataServiceMock: IMock<MetadataService>;
        track4.albumArtists = ';Album artist 2;';
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackStartedMock$);
        //     component.tracks = tracks;
            dialogServiceMock.verify((x) => x.showEditColumnsDialogAsync(), Times.once());
import { TrackModels } from '../../../../../services/track/track-models';
        //     expect(component.orderedTracks[0]).toBe(trackModel4);
        track1.trackTitle = 'Title 1';
            const event: any = {};
            // Act
import { SettingsMock } from '../../../../../testing/settings-mock';
        });
import { TracksColumnsOrder } from '../../../../../services/track-columns/tracks-columns-order';
import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';

    describe('setSelectedTracks', () => {
        tracks.addTrack(trackModel1);
    let playbackStoppedMock: Subject<void>;
            // Arrange
            component.ngOnInit();
    let playbackResumedMock$: Observable<void>;
        tracks.addTrack(trackModel2);
            expect(tracksColumnsVisibilityBeforeInit.showAlbum).toBeFalsy();
        //                     (trackModels: TrackModel[]) =>
        //     component.ngOnInit();
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
            .setup((x) => x.getTracksColumnsOrder())

import { TracksColumnsVisibility } from '../../../../../services/track-columns/tracks-columns-visibility';
        //     component.tracks = tracks;
        it('should update tracksColumnsVisibility when tracks columns visibility has changed', () => {
        });
        //     expect(track2.rating).toEqual(2);
            .returns(() => new TracksColumnsOrder(TracksColumnsOrderColumn.trackTitle, TracksColumnsOrderDirection.ascending));

            dialogServiceMock.object,
    });
        playbackIndicationServiceMock = Mock.ofType<PlaybackIndicationServiceBase>();
            playbackIndicationServiceMock.reset();
            const tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
        //     // Assert
        //     expect(component.orderedTracks[1]).toBe(trackModel3);
        track3.trackNumber = 1;
    });
    let tracksColumnsServiceMock: IMock<TracksColumnsServiceBase>;
        //     // Assert
import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
        track2.rating = 2;
import { Logger } from '../../../../../common/logger';
        //     track5.rating = 5;


            // Act

        // });
            playbackIndicationServiceMock.verify((x) => x.clearPlayingTrack(component.orderedTracks), Times.exactly(1));
            component.setSelectedTracks(event, trackModel2);
        });
        //     );
import { ContextMenuOpener } from '../../../context-menu-opener';
    let trackModel3: TrackModel;
    });
    let playbackResumedMock: Subject<void>;
import { CollectionServiceBase } from '../../../../../services/collection/collection.service.base';
import { Observable, Subject } from 'rxjs';
            // Act
        //                         trackModels.length === 4 &&
        // it('should set and get the tracks', () => {

            // Arrange
        it('should define tracksColumnsVisibility', () => {
    describe('tracks', () => {
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
        //     expect(component.orderedTracks[2]).toBe(trackModel2);
    let tracksColumnsService_tracksColumnsVisibilityChanged: Subject<TracksColumnsVisibility>;
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
            expect(tracksColumnsVisibilityAfterInit.showAlbum).toBeTruthy();
        //                 ),
        track1.rating = 1;
            const component: CollectionTracksTableComponent = createComponent();
        metadataService_ratingSaved = new Subject();
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);

        // });
    let desktopMock: IMock<DesktopBase>;
        //                         trackModels[2].path === trackModel3.path &&
import { TracksColumnsServiceBase } from '../../../../../services/track-columns/tracks-columns.service.base';
describe('CollectionTracksTableComponent', () => {
    let tracks: TrackModels;
    let settingsMock: any;
            .setup((x) => x.tracksColumnsVisibilityChanged$)
        trackModel3 = new TrackModel(track3, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Act
        //     expect(track4.rating).toEqual(4);
        // it('should order the tracks', () => {
            await component.shuffleAllAsync();
        settingsMock = new SettingsMock();
            expect(component.tracksColumnsVisibility).toBeDefined();
        tracksColumnsServiceMock


    let loggerMock: IMock<Logger>;
        });
        track1.albumTitle = 'Album title 1';
            const tracksColumnsVisibilityAfterInit: TracksColumnsVisibility = component.tracksColumnsVisibility;
    let track3: Track;
            await component.showEditColumnsDialogAsync();
            // Arrange
            // Assert
        const tracksColumnsService_tracksColumnsOrderChanged$: Observable<TracksColumnsOrder> =

        //     // So we use a workaround to ensure that the correct call occurs.
        tracksColumnsService_tracksColumnsVisibilityChanged = new Subject();

        track2 = new Track('Path 2');
            .returns(() => tracksColumnsService_tracksColumnsVisibilityChanged$);
        loggerMock = Mock.ofType<Logger>();
        tracksColumnsOrderingMock = Mock.ofType<TracksColumnsOrdering>();

        //     // Assert
        track3.albumTitle = 'Album title 2';
    let track4: Track;
            const component: CollectionTracksTableComponent = createComponent();
    let track2: Track;
        //     component.ngOnInit();
        playbackStoppedMock$ = playbackStoppedMock.asObservable();
    }
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
        track2.trackNumber = 1;
        //     const component: CollectionTracksTableComponent = createComponent();

            translatorServiceMock.object,
    describe('ngOnInit', () => {
        //     component.ngOnInit();
            playbackStartedMock.next(new PlaybackStarted(trackModel1, false));
            component.ngOnInit();
import { TracksColumnsOrderDirection } from '../../../../../services/track-columns/tracks-columns-order-direction';
            component.ngOnInit();
            // Act
import { Track } from '../../../../../data/entities/track';
    let trackModel2: TrackModel;
            // Assert
            expect(component).toBeDefined();

            mouseSelectionWatcherMock.object,
            trackServiceMock.object,
    });
    let trackModel1: TrackModel;
            const component: CollectionTracksTableComponent = createComponent();
    describe('showEditColumnsDialogAsync', () => {
            const component: CollectionTracksTableComponent = createComponent();
        track3.discNumber = 1;

            tracksColumnsService_tracksColumnsVisibilityChanged.next(tracksColumnsVisibility);
            // Arrange
    let dateTimeMock: IMock<DateTime>;
        tracksColumnsServiceMock
import { CollectionTracksTableComponent } from './collection-tracks-table.component';
        //     expect(component.orderedTracks[3]).toBe(trackModel1);
        it('should clear the playing track on playback stopped', () => {
        //         Times.exactly(1)
        //     expect(component.tracks).toBe(tracks);
        it('should force shuffle and play all tracks', async () => {

        track1 = new Track('Path 1');

            // Assert

            tracksColumnsServiceMock.object,
        //     component.tracks = tracks;
        });
        //     component.ngOnInit();


        //                         trackModels[1].path === trackModel2.path &&

        track2.albumTitle = 'Album title 1';
        tracksColumnsVisibility.showAlbum = true;

        tracksColumnsService_tracksColumnsOrderChanged = new Subject();
        it('should set the playing track on playback started', () => {
            contextMenuOpenerMock.object,

    let translatorServiceMock: IMock<TranslatorServiceBase>;
        //     // Act

            const component: CollectionTracksTableComponent = createComponent();
        //     // Assert
        //                         trackModels[3].path === trackModel4.path
            const tracksColumnsVisibilityBeforeInit: TracksColumnsVisibility = component.tracksColumnsVisibility;
        track2.albumArtists = ';Album artist 1;';
        //     mouseSelectionWatcherMock.verify(
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        track3.albumArtists = ';Album artist 2;';
        //     const trackModel5: TrackModel = new TrackModel(track5, translatorServiceMock.object);
        //     // mouseSelectionWatcherMock.verify((x) => x.initialize(tracks.tracks, false), Times.exactly(1));
    let track1: Track;
        });
            tracksColumnsService_tracksColumnsVisibilityChanged.asObservable();
        //     const track5 = new Track('Path 1');
    let playbackStartedMock$: Observable<PlaybackStarted>;

    let tracksColumnsOrderingMock: IMock<TracksColumnsOrdering>;
        return component;
        // });

    let trackServiceMock: IMock<TrackServiceBase>;
        tracks = new TrackModels();
        //     playbackIndicationServiceMock.reset();

        //         (x) =>
            addToPlaylistMenuMock.object,
        playbackStoppedMock = new Subject();
        });


            // Arrange
            // Arrange

            playbackStoppedMock.next();
            const component: CollectionTracksTableComponent = createComponent();
});

import { TrackModel } from '../../../../../services/track/track-model';
            component.ngOnInit();

            const component: CollectionTracksTableComponent = createComponent();
import { TracksColumnsOrdering } from '../../../../../services/track-columns/tracks-columns-ordering';
        //     // Arrange
        //     // TODO: TypeMoq does not consider the call with track.track to have been performed (The reference to tracks.tracks seems lost).
        //     // Act
            const component: CollectionTracksTableComponent = createComponent();
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));

import { TracksColumnsOrderColumn } from '../../../../../services/track-columns/tracks-columns-order-column';
        //     // Act
        //     // Assert
        track3 = new Track('Path 3');
        playbackStartedMock$ = playbackStartedMock.asObservable();
        tracks.addTrack(trackModel4);
    let tracksColumnsService_tracksColumnsOrderChanged: Subject<TracksColumnsOrder>;
        );
    let playbackServiceMock: IMock<PlaybackService>;
        // });
    let collectionServiceMock: IMock<CollectionServiceBase>;
        track4.trackNumber = 2;
    let dialogServiceMock: IMock<DialogServiceBase>;
            // Act
        tracks.addTrack(trackModel3);

            // Assert
        it('should show the edit columns dialog', async () => {
        //     playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));
        it('should set the selected item on mouseSelectionWatcher', () => {
        // it('should update the rating for a track that has the same path as the track for which rating was saved', () => {
            collectionServiceMock.object,
        track4.rating = 4;
        //     // Act

            // Act
        track4.discNumber = 1;
        //     component.ngOnInit();
        //     component.tracks = tracks;
        tracksColumnsServiceMock = Mock.ofType<TracksColumnsServiceBase>();
import { PlaybackStarted } from '../../../../../services/playback/playback-started';
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
        const tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
import { IMock, Mock, Times } from 'typemoq';
    let playbackStartedMock: Subject<PlaybackStarted>;

    beforeEach(() => {

            playbackServiceMock.object,
        const component: CollectionTracksTableComponent = new CollectionTracksTableComponent(

            playbackIndicationServiceMock.object,
        //                 It.is(
        //     expect(track3.rating).toEqual(3);
import { PlaybackIndicationServiceBase } from '../../../../../services/playback-indication/playback-indication.service.base';

            // Assert
        trackServiceMock = Mock.ofType<TrackServiceBase>();
    function createComponent(): CollectionTracksTableComponent {
        // it('should set the playing track', () => {
    });
        //     expect(track1.rating).toEqual(5);
        //     // Act
            tracksColumnsService_tracksColumnsOrderChanged.asObservable();
        //             x.initialize(
            // Assert

        track4 = new Track('Path 4');
        playbackStartedMock = new Subject();
        playbackResumedMock$ = playbackResumedMock.asObservable();
        // });
        // TODO: restore this test
        track1.discNumber = 1;
        //     // Arrange
import { PlaybackService } from '../../../../../services/playback/playback.service';
    let metadataService_ratingSaved: Subject<TrackModel>;
    });
        //                 false
        //                         trackModels[0].path === trackModel1.path &&
        //     const component: CollectionTracksTableComponent = createComponent();

        desktopMock = Mock.ofType<DesktopBase>();

