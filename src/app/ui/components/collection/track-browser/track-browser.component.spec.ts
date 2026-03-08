import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
            expect(component.orderedTracks[2].showHeader).toBeFalsy();

                                trackModels[3].path === trackModel4.path,
            expect(track2.love).toEqual(0);


        trackSorterMock
    let metadataService_loveSaved: Subject<TrackModel>;
        });
            trackModel3.showHeader = false;
            // Act
        track4.rating = 4;

            component.applyTrackOrder(TrackOrder.byAlbum);
            const component: TrackBrowserComponent = createComponent();
            component.applyTrackOrder(trackOrder);
            // Assert
    describe('tracks', () => {
                    x.initialize(
            // Arrange
                            (trackModels: TrackModel[]) =>
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            playbackStoppedMock.next();
            expect(component.orderedTracks[0]).toBe(trackModel1);

            component.tracks = tracks;
import { GuidFactory } from '../../../../common/guid.factory';
        trackModel3 = new TrackModel(track3, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Act
            const component: TrackBrowserComponent = createComponent();
            // Act



            component.tracksPersister = tracksPersisterMock.object;
import { Observable, Subject } from 'rxjs';
            // Assert
            component.tracks = tracks;

            track2.discNumber = 1;
            expect(component.orderedTracks[2]).toBe(trackModel3);
import { PlaybackService } from '../../../../services/playback/playback.service';
            component.ngOnInit();
            tracksPersisterMock.setup((x) => x.getSelectedTrackOrder()).returns(() => TrackOrder.byAlbum);
            // Act
        track3.discNumber = 1;



            expect(component.orderedTracks[0].showHeader).toBeTruthy();
            expect(component.orderedTracks[2].showHeader).toBeTruthy();
            // Act
            trackModel1.showHeader = false;
            expect(track1.rating).toEqual(5);
            .returns(() => [trackModel4, trackModel3, trackModel2, trackModel1]);
        track2.love = 0;
import { SettingsMock } from '../../../../testing/settings-mock';
            // Assert
    let tracksPersisterMock: IMock<BaseTracksPersister>;

            // Act
            expect(component.orderedTracks[3].showHeader).toBeFalsy();
                                trackModels[0].path === trackModel1.path &&
        trackSorterMock = Mock.ofType<TrackSorter>();
            .returns(() => [trackModel1, trackModel2, trackModel3, trackModel4]);
            // TODO: TypeMoq does not consider the call with track.track to have been performed (The reference to tracks.tracks seems lost).
            expect(component.orderedTracks[3]).toBe(trackModel4);
        const metadataService_ratingSaved$: Observable<TrackModel> = metadataService_ratingSaved.asObservable();
    let dialogServiceMock: IMock<DialogServiceBase>;
    });

        it('should change TrackOrder from byAlbum to byTrackTitleAscending', () => {
            expect(component.selectedTrackOrder).toEqual(TrackOrder.byTrackTitleDescending);
import { BaseTracksPersister } from '../base-tracks-persister';
        it('should clear the playing track on playback stopped', () => {
        track1.love = 0;
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));
            // Assert
            playbackIndicationServiceMock.reset();
            expect(component.selectedTrackOrder).toEqual(TrackOrder.byAlbum);
            component.tracks = tracks;
            track5.love = 1;
            expect(component.orderedTracks[3].showHeader).toBeFalsy();
            // Assert
    let track3: Track;

        });

            const component: TrackBrowserComponent = createComponent();
            expect(component.orderedTracks[0]).toBe(trackModel4);
        metadataService_ratingSaved = new Subject();
            expect(component.orderedTracks[0]).toBe(trackModel4);
        });
            component.tracksPersister = tracksPersisterMock.object;
            component.ngOnInit();
        });
    let metadataService_ratingSaved: Subject<TrackModel>;
        trackModel4 = new TrackModel(track4, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            expect(component.orderedTracks[2]).toBe(trackModel3);
    describe('ngOnInit', () => {

            component.selectedTrackOrder = TrackOrder.byTrackTitleAscending;
            tracksPersisterMock.setup((x) => x.getSelectedTrackOrder()).returns(() => TrackOrder.byAlbum);
    });
            // Assert


            // Act
    let tracks: TrackModels;
        metadataServiceMock.setup((x) => x.ratingSaved$).returns(() => metadataService_ratingSaved$);
                                trackModels[1].path === trackModel2.path &&
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert

            // Arrange
            component.tracks = tracks;

            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            // Arrange



        track3 = new Track('Path 3');
    let trackModel1: TrackModel;
            const persister: BaseTracksPersister = component.tracksPersister;



    let track2: Track;

            // Assert
            // Arrange
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;

            const component: TrackBrowserComponent = createComponent();
            expect(component.selectedTrackOrder).toEqual(trackOrder);
    let playbackStoppedMock: Subject<void>;
            const trackOrder = TrackOrder.byAlbum;
        it('should set and get the tracks', () => {
        it('should persist the selected track order', () => {


                                trackModels.length === 4 &&
    let track1: Track;
            const component: TrackBrowserComponent = createComponent();
            // Act
            expect(component.orderedTracks[3]).toBe(trackModel4);
            expect(component.orderedTracks[1]).toBe(trackModel2);
        track2.rating = 2;
            component.tracksPersister = tracksPersisterMock.object;

        track3.albumTitle = 'Album title 2';
            track3.albumKey = 'albumKey2';
        it('should apply track order by album', () => {
            // Arrange

            component.applyTrackOrder(trackOrder);
            playbackIndicationServiceMock.reset();
import { DateTime } from '../../../../common/date-time';
            component.tracks = tracks;
import { PlaybackStarted } from '../../../../services/playback/playback-started';
    let trackModel4: TrackModel;
        metadataServiceMock = Mock.ofType<MetadataService>();
            const component: TrackBrowserComponent = createComponent();

            // Assert


            expect(track4.rating).toEqual(4);
            const component: TrackBrowserComponent = createComponent();
        track3.love = 0;
            expect(component.orderedTracks[3]).toBe(trackModel4);
            // Act
        trackSorterMock.setup((x) => x.sortByAlbum(It.isAny())).returns(() => [trackModel1, trackModel2, trackModel3, trackModel4]);

            // So we use a workaround to ensure that the correct call occurs.
            component.ngOnInit();
            // Act
            // Assert
            expect(component.orderedTracks[1]).toBe(trackModel2);
        tracks.addTrack(trackModel4);

            // Act
import { TrackServiceBase } from '../../../../services/track/track.service.base';
            // Arrange
    let trackSorterMock: IMock<TrackSorter>;
            track5.rating = 5;
            component.selectedTrackOrder = TrackOrder.byTrackTitleAscending;
            component.tracksPersister = tracksPersisterMock.object;
        });
            component.tracksPersister = tracksPersisterMock.object;

        });

        });
            // Act
            component.tracksPersister = tracksPersisterMock.object;
            component.ngOnInit();
            playbackServiceMock.object,
        it('should set the playing track', () => {
            expect(component.selectedTrackOrder).toEqual(trackOrder);
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackStartedMock$);
            expect(component.orderedTracks[0]).toBe(trackModel1);
            const component: TrackBrowserComponent = createComponent();
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;
        it('should apply track order by album and override showHeader', () => {
            // Act
    function createComponent(): TrackBrowserComponent {
            // Assert
            expect(component.orderedTracks[1].showHeader).toBeFalsy();

            metadataService_loveSaved.next(trackModel5);
        playbackServiceMock.setup((x) => x.playbackResumed$).returns(() => playbackResumedMock$);
            const component: TrackBrowserComponent = createComponent();

        tracks.addTrack(trackModel1);

            expect(component.orderedTracks[3]).toBe(trackModel1);

            component.tracks = tracks;
            // Arrange
            tracksPersisterMock.setup((x) => x.getSelectedTrackOrder()).returns(() => TrackOrder.byTrackTitleDescending);
    let playbackStartedMock: Subject<PlaybackStarted>;
            expect(component.orderedTracks[2].showHeader).toBeTruthy();
            // Assert
            // Assert
            component.tracksPersister = tracksPersisterMock.object;
                        It.is(
            const component: TrackBrowserComponent = createComponent();
        return new TrackBrowserComponent(
        });
            loggerMock.object,
            // Act
            // Arrange

            tracksPersisterMock.setup((x) => x.getSelectedTrackOrder()).returns(() => TrackOrder.byTrackTitleAscending);
        track2.albumArtists = ';Album artist 1;';
        tracksPersisterMock = Mock.ofType<BaseTracksPersister>();


            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            expect(track4.love).toEqual(0);
        });
        track1.albumTitle = 'Album title 1';
        metadataService_loveSaved = new Subject();
        });
        playbackStoppedMock$ = playbackStoppedMock.asObservable();
            // Act
        });
            component.ngOnInit();

            expect(component.orderedTracks[0]).toBe(trackModel1);

        });
            // Arrange
            expect(component.orderedTracks[2].showHeader).toBeFalsy();
        });

            expect(component.orderedTracks[0]).toBe(trackModel4);
        it('should update the love for a track that has the same path as the track for which love was saved', () => {
import { Track } from '../../../../data/entities/track';
    }
            expect(component.orderedTracks[1].showHeader).toBeFalsy();
            expect(component.tracksPersister).toBeUndefined();
            // Arrange
            component.applyTrackOrder(trackOrder);
        track4.albumArtists = ';Album artist 2;';
            expect(component.tracks.tracks.length).toEqual(0);
            expect(component.trackOrderKey).toEqual(trackOrderKey);
    let playbackStartedMock$: Observable<PlaybackStarted>;
            const component: TrackBrowserComponent = createComponent();

            // Arrange
    describe('setSelectedTracks', () => {
            // Arrange
                    ),
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            expect(component.orderedTracks[0].showHeader).toBeFalsy();
            expect(component.orderedTracks[3]).toBe(trackModel1);
            expect(component).toBeDefined();
        track4.trackTitle = 'Title 4';
            expect(component.selectedTrackOrder).toBeUndefined();

            // Arrange
        tracks = new TrackModels();

            translatorServiceMock.object,
            tracksPersisterMock.reset();
        playbackStartedMock$ = playbackStartedMock.asObservable();
            component.tracksPersister = tracksPersisterMock.object;
            component.tracks = tracks;
            const trackModel5: TrackModel = new TrackModel(track5, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Act
            // Act
            // Act
    describe('applyTrackOrder', () => {
        tracks.addTrack(trackModel2);

            trackModel2.showHeader = true;
        it('should initialize mouseSelectionWatcher using tracks', () => {

            expect(component.tracks).toBe(tracks);
            // Assert

        const metadataService_loveSaved$: Observable<TrackModel> = metadataService_loveSaved.asObservable();

            expect(track3.love).toEqual(0);
            component.selectedTrackOrder = TrackOrder.byAlbum;
            tracksPersisterMock.reset();
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
            // Act
        it('should define trackOrderKey', () => {

            const component: TrackBrowserComponent = createComponent();
            metadataServiceMock.object,
            trackServiceMock.object,
        track1.trackNumber = 1;
            component.tracksPersister = tracksPersisterMock.object;

                                trackModels[2].path === trackModel3.path &&
            component.tracksPersister = tracksPersisterMock.object;
        track2.trackTitle = 'Title 2';
            const component: TrackBrowserComponent = createComponent();


        track1.trackTitle = 'Title 1';
import { TrackBrowserComponent } from './track-browser.component';

            // Arrange

        });
        tracks.addTrack(trackModel3);
            const component: TrackBrowserComponent = createComponent();
    let playbackStoppedMock$: Observable<void>;

            trackSorterMock.object,
        });
            const component: TrackBrowserComponent = createComponent();
        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackStoppedMock$);
            dialogServiceMock.object,
            component.selectedTrackOrder = TrackOrder.byTrackTitleAscending;

        it('should change TrackOrder from byTrackTitleAscending to byTrackTitleDescending', () => {
            component.tracksPersister = tracksPersisterMock.object;

        });
                (x) =>
    });

            expect(component.selectedTrackOrder).toEqual(TrackOrder.byAlbum);
            // Act
            component.tracks = tracks;
            // Arrange
            expect(component.orderedTracks[2]).toBe(trackModel3);
    describe('tracksPersister', () => {
            const component: TrackBrowserComponent = createComponent();
            const component: TrackBrowserComponent = createComponent();
    let playbackResumedMock: Subject<void>;
            // Assert
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();


    let guidFactoryMock: IMock<GuidFactory>;
import { ContextMenuOpener } from '../../context-menu-opener';
            component.tracksPersister = tracksPersisterMock.object;
            const trackOrder = TrackOrder.byTrackTitleAscending;
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
    });
import { Logger } from '../../../../common/logger';
            const component: TrackBrowserComponent = createComponent();
        track1.rating = 1;
            expect(component.orderedTracks[0]).toBe(trackModel1);

            component.ngOnInit();
            const component: TrackBrowserComponent = createComponent();
        track1.discNumber = 1;
        it('should set the selected track order', () => {
            // Arrange
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            // Assert
        dialogServiceMock = Mock.ofType<DialogServiceBase>();
            // Assert

            // mouseSelectionWatcherMock.verify((x) => x.initialize(tracks.tracks, false), Times.exactly(1));

            expect(component.orderedTracks[3]).toBe(trackModel4);


            expect(component.orderedTracks[3]).toBe(trackModel4);
            component.tracks = tracks;
import { MetadataService } from '../../../../services/metadata/metadata.service';
            // Act
            expect(component.orderedTracks[3].showHeader).toBeFalsy();

            mouseSelectionWatcherMock.object,
            expect(component.trackOrders).toEqual([]);
            .setup((x) => x.sortByTitleDescending(It.isAny()))

        track3.rating = 3;
        it('should set the selected item on mouseSelectionWatcher', () => {
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));
        });

            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            // Assert
            // Arrange

        track4.albumTitle = 'Album title 2';
            // Arrange
            // Assert

            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, trackModel2), Times.exactly(1));
            expect(component.orderedTracks[3].showHeader).toBeFalsy();
            expect(track3.rating).toEqual(3);
            component.ngOnInit();
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            expect(component.orderedTracks[3].showHeader).toBeTruthy();
    let trackModel2: TrackModel;
            expect(component.orderedTracks[2]).toBe(trackModel3);


        track4.discNumber = 1;
            track1.albumKey = 'albumKey1';
        track1.albumArtists = ';Album artist 1;';
        it('should define tracks as empty', () => {
            const trackOrder = TrackOrder.byAlbum;
            component.tracksPersister = tracksPersisterMock.object;
            // Assert
        it('should declare trackContextMenu', () => {
            metadataService_ratingSaved.next(trackModel5);
            expect(component.orderedTracks[2]).toBe(trackModel2);
            component.tracks = tracks;

import { TrackModel } from '../../../../services/track/track-model';
            expect(component.selectedTrackOrder).toEqual(trackOrder);
    let collectionServiceMock: IMock<CollectionServiceBase>;
        it('should define trackOrders as empty', () => {
            component.tracksPersister = tracksPersisterMock.object;
            desktopMock.object,


    let metadataServiceMock: IMock<MetadataService>;
        );
            // Act

    let trackServiceMock: IMock<TrackServiceBase>;
            track1.discNumber = 1;
            // Act
            // Assert
            // Act
            expect(persister).toBe(tracksPersisterMock.object);

            component.applyTrackOrder(trackOrder);
            expect(component.orderedTracks[2].showHeader).toBeFalsy();
        playbackResumedMock$ = playbackResumedMock.asObservable();
            // Arrange
    let trackModel3: TrackModel;
    });
            // Assert

import { DesktopBase } from '../../../../common/io/desktop.base';
        dateTimeMock = Mock.ofType<DateTime>();
    let playbackIndicationServiceMock: IMock<PlaybackIndicationServiceBase>;
        trackSorterMock

            // Arrange
        });
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));
            const component: TrackBrowserComponent = createComponent();
            // Act
        guidFactoryMock = Mock.ofType<GuidFactory>();
            tracksPersisterMock.verify((x) => x.setSelectedTrackOrder(trackOrder), Times.exactly(1));
        playbackResumedMock = new Subject();
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
        track4 = new Track('Path 4');
            expect(component.orderedTracks[1].showHeader).toBeFalsy();
            expect(component.tracks).toBeDefined();
            expect(component.orderedTracks[1]).toBe(trackModel3);
});
        });
            // Arrange
    let playbackServiceMock: IMock<PlaybackService>;
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;
            collectionServiceMock.object,
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.orderedTracks, trackModel1), Times.exactly(1));

            expect(component.trackContextMenu).toBeUndefined();
            expect(component.orderedTracks[0].showHeader).toBeTruthy();
        it('should create', () => {
            // Arrange
        it('should order the tracks by the selected track order', () => {

        it('should apply track order by track title descending', () => {
            expect(component.orderedTracks[0].showHeader).toBeFalsy();
            component.tracksPersister = tracksPersisterMock.object;
    let settingsMock: any;

            .setup((x) => x.sortByTitleAscending(It.isAny()))
import { TrackOrder, trackOrderKey } from '../track-order';

        loggerMock = Mock.ofType<Logger>();
        tracksPersisterMock.setup((x) => x.getSelectedTrackOrder()).returns(() => TrackOrder.byTrackTitleDescending);
    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;
        track2 = new Track('Path 2');
        trackServiceMock = Mock.ofType<TrackServiceBase>();
            expect(component.orderedTracks[3].showHeader).toBeFalsy();


            // Arrange
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
    beforeEach(() => {
        });
            // Arrange
    });
        track2.trackNumber = 1;
            track2.albumKey = 'albumKey1';
            mouseSelectionWatcherMock.verify(
            // Arrange
            expect(component.orderedTracks[1]).toBe(trackModel2);
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';

        desktopMock = Mock.ofType<DesktopBase>();
import { PlaybackIndicationServiceBase } from '../../../../services/playback-indication/playback-indication.service.base';
        it('should set the playing track', () => {
            tracksPersisterMock.reset();
            playbackStartedMock.next(new PlaybackStarted(trackModel1, false));
            expect(component.orderedTracks[0].showHeader).toBeFalsy();
            expect(component.orderedTracks[0].showHeader).toBeFalsy();

        playbackServiceMock = Mock.ofType<PlaybackService>();
            // Assert
            expect(component.orderedTracks[2].showHeader).toBeTruthy();
            expect(component.orderedTracks[0]).toBe(trackModel1);
            expect(component.orderedTracks[1].showHeader).toBeTruthy();

            // Act
            expect(component.orderedTracks[2].showHeader).toBeFalsy();
    let dateTimeMock: IMock<DateTime>;
    });
        track2.albumTitle = 'Album title 1';
        });
            // Arrange
            expect(track1.love).toEqual(1);
            component.tracks = tracks;
        track3.trackTitle = 'Title 3';
import { TrackSorter } from '../../../../common/sorting/track-sorter';
    let loggerMock: IMock<Logger>;
            const component: TrackBrowserComponent = createComponent();

        it('should apply track order by track title ascending', () => {
            // Arrange
            expect(component.orderedTracks[1].showHeader).toBeTruthy();
        it('should declare selectedTrackOrder', () => {

            const component: TrackBrowserComponent = createComponent();
            playbackIndicationServiceMock.verify((x) => x.clearPlayingTrack(component.orderedTracks), Times.exactly(1));

            expect(component.orderedTracks[1]).toBe(trackModel3);
    let track4: Track;
            const trackModel5: TrackModel = new TrackModel(track5, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        });
        settingsMock = new SettingsMock();
                        false,
            track3.discNumber = 1;
            guidFactoryMock.object,
            // Act
            // Assert

            expect(component.selectedTrackOrder).toEqual(TrackOrder.byTrackTitleAscending);
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
            const component: TrackBrowserComponent = createComponent();
import { IMock, It, Mock, Times } from 'typemoq';

import { TrackModels } from '../../../../services/track/track-models';
            // Arrange
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            contextMenuOpenerMock.object,

            // Assert
        playbackStoppedMock = new Subject();
        metadataServiceMock.setup((x) => x.loveSaved$).returns(() => metadataService_loveSaved$);
            expect(component.orderedTracks[0].showHeader).toBeTruthy();
            expect(component.orderedTracks[2]).toBe(trackModel3);
        track3.trackNumber = 1;
            component.tracksPersister = tracksPersisterMock.object;
        it('should set the playing track on playback started', () => {
            track4.albumKey = 'albumKey2';
        track4.love = 0;
        track3.albumArtists = ';Album artist 2;';
            // Act
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;

                Times.exactly(1),
        playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
            trackModel4.showHeader = false;
            expect(component.orderedTracks[1].showHeader).toBeFalsy();
        track4.trackNumber = 2;
        });
            );
            tracksPersisterMock.reset();
        });

            component.applyTrackOrder(trackOrder);
        playbackIndicationServiceMock = Mock.ofType<PlaybackIndicationServiceBase>();
            const track5 = new Track('Path 1');
            // Assert

            const event: any = {};
            expect(component.orderedTracks[1].showHeader).toBeFalsy();
            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;

            const trackOrder = TrackOrder.byTrackTitleDescending;
    let playbackResumedMock$: Observable<void>;

        it('should declare tracksPersister', () => {
            expect(component.orderedTracks[1]).toBe(trackModel2);
            const component: TrackBrowserComponent = createComponent();
        track2.discNumber = 2;

            component.selectedTrackOrder = TrackOrder.byTrackTitleDescending;

        it('should set and return tracksPersister', () => {
            expect(component.selectedTrackOrder).toEqual(trackOrder);
                        ),
        playbackStartedMock = new Subject();
        });

            expect(component.orderedTracks[2]).toBe(trackModel2);
            component.tracksPersister = tracksPersisterMock.object;
            expect(component.orderedTracks[1]).toBe(trackModel3);
            component.tracks = tracks;
            // Assert
    describe('constructor', () => {
            component.tracksPersister = tracksPersisterMock.object;
            expect(component.orderedTracks[1]).toBe(trackModel2);
            expect(track2.rating).toEqual(2);
            addToPlaylistMenuMock.object,
            const component: TrackBrowserComponent = createComponent();
        });
        });
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            // Assert
            expect(component.orderedTracks[3]).toBe(trackModel1);
            playbackIndicationServiceMock.object,
            track4.discNumber = 2;
        it('should set the playing track', () => {
            expect(component.orderedTracks[3].showHeader).toBeFalsy();
            component.ngOnInit();
        it('should update the rating for a track that has the same path as the track for which rating was saved', () => {
describe('TrackBrowserComponent', () => {
            const component: TrackBrowserComponent = createComponent();
        track1 = new Track('Path 1');
        });
            const component: TrackBrowserComponent = createComponent();
            expect(component.orderedTracks[2]).toBe(trackModel2);
            component.setSelectedTracks(event, trackModel2);
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
            component.tracks = tracks;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const trackOrder = TrackOrder.byTrackTitleAscending;
            component.selectedTrackOrder = TrackOrder.byTrackTitleAscending;
            component.tracksPersister = tracksPersisterMock.object;
        it('should change TrackOrder from byTrackTitleDescending to byAlbum', () => {
    let desktopMock: IMock<DesktopBase>;
            const track5 = new Track('Path 1');
            const component: TrackBrowserComponent = createComponent();
