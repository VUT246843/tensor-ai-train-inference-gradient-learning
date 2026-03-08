

            // Assert
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Act

    });

        );

            trackServiceMock.object,
import { TrackModels } from '../../../../services/track/track-models';
    let collectionChangedMock$: Observable<void>;

            albumsPersisterMock.reset();

import { TrackServiceBase } from '../../../../services/track/track.service.base';
            component.ngOnDestroy();
            // Arrange
            albumsPersisterMock.object,
            trackServiceMock.reset();


            const component: CollectionAlbumsComponent = createComponent();
            // Act
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    let trackServiceMock: IMock<TrackServiceBase>;
            component.albums = [];
        it('should clear the albums', async () => {
            expect(component.tracks).toBe(tracks);
        settingsStub = { albumsRightPaneWidthPercent: 30 };
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            albumsPersisterMock.reset();
    describe('splitDragEnd', () => {
            const component: CollectionAlbumsComponent = createComponent();
    function createComponent(): CollectionAlbumsComponent {
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
        it('should define searchService', () => {
            await component.ngOnInit();
        indexingFinishedMock = new Subject();
            // Arrange
    });
        indexingFinishedMock$ = indexingFinishedMock.asObservable();
            expect(component.albums).toBe(albums);
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);



            // Act
        it('should set the selected album order', () => {
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            albumsPersisterMock.verify((x) => x.setSelectedAlbumOrder(selectedAlbumOrder), Times.exactly(1));

        albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => [album2]);
        });


    let tracksPersisterMock: IMock<AlbumsTracksPersister>;
            // Assert
            tracksPersisterMock.object,
            const component: CollectionAlbumsComponent = createComponent();
            // Act
            // Assert
    });
            selectedAlbumsChangedMock.next([]);
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
import { AlbumsAlbumsPersister } from './albums-albums-persister';
    let selectedAlbumsChangedMock: Subject<string[]>;

        collectionChangedMock = new Subject();
        });

            expect(component.tracks.tracks).toEqual([]);
import { IOutputData } from 'angular-split';
            // Assert

        tracks.addTrack(trackModel2);


            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => []);
            const component: CollectionAlbumsComponent = createComponent();
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
            // Act
            expect(selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
        it('should get tracks for the selected albums if the selected albums have changed and there are selected albums', async () => {
            trackServiceMock.reset();

            // Assert

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.exactly(1));

            trackServiceMock.setup((x) => x.getTracksForAlbums(It.isAny())).returns(() => tracks);
    let selectedAlbumsChangedMock$: Observable<string[]>;

            await component.ngOnInit();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            const component: CollectionAlbumsComponent = createComponent();
    let tracks: TrackModels;

            // Arrange
            // Assert
        });
            // Arrange
            // Assert
            const component: CollectionAlbumsComponent = createComponent();
        albumServiceMock = Mock.ofType<AlbumServiceBase>();

        loggerMock = Mock.ofType<Logger>();
        });
            await component.ngOnInit();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);

        schedulerMock = Mock.ofType<Scheduler>();
            component.albums = albums;

            await component.ngOnInit();

            // Assert

import { CollectionAlbumsComponent } from './collection-albums.component';
            selectedAlbumsChangedMock.next([album2.albumKey]);
import { SettingsMock } from '../../../../testing/settings-mock';
            await component.ngOnInit();
            // Act
            await flushPromises();
    let schedulerMock: IMock<Scheduler>;
        track2 = new Track('Path2');
            expect(component.leftPaneSize).toEqual(70);

        track1.duration = 1;
            // Arrange
            albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
    const albumData2: AlbumData = new AlbumData();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);

import { DateTime } from '../../../../common/date-time';

            // Arrange
            // Assert
            // Arrange

            const component: CollectionAlbumsComponent = createComponent();

        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
    const albumData1: AlbumData = new AlbumData();

            component.albums = albums;
            const component: CollectionAlbumsComponent = createComponent();
    let loggerMock: IMock<Logger>;
        });
        it('should persist the selected album order', () => {
import { IndexingService } from '../../../../services/indexing/indexing.service';

            // Arrange
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Assert
            const selectedAlbumOrder: AlbumOrder = component.selectedAlbumOrder;
            collectionChangedMock.next();
import { SearchServiceBase } from '../../../../services/search/search.service.base';
        });
    });
            albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
        it('should save the right pane width to the settings', () => {
            expect(settingsStub.albumsRightPaneWidthPercent).toEqual(40);
        track2.duration = 2;
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            const component: CollectionAlbumsComponent = createComponent();
            const selectedAlbumOrder: AlbumOrder = component.selectedAlbumOrder;
    let searchServiceMock: IMock<SearchServiceBase>;
            const component: CollectionAlbumsComponent = createComponent();
    let albumsPersisterMock: IMock<AlbumsAlbumsPersister>;
import { AlbumData } from '../../../../data/entities/album-data';

        });
import { Scheduler } from '../../../../common/scheduling/scheduler';
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);

            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Assert
            component.ngOnDestroy();
            albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
            const component: CollectionAlbumsComponent = createComponent();
        albumsPersisterMock = Mock.ofType<AlbumsAlbumsPersister>();
    const flushPromises = () => new Promise(process.nextTick);

            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
    }
            // Assert
            const component: CollectionAlbumsComponent = createComponent();
        it('should define tracks as empty', () => {
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
        });
import { TrackModel } from '../../../../services/track/track-model';
    let collectionChangedMock: Subject<void>;
        it('should set the album order', async () => {
        });
    let indexingFinishedMock: Subject<void>;
            trackServiceMock.setup((x) => x.getTracksForAlbums(It.isAny())).returns(() => tracks);
            // Arrange

        });
        settingsMock = new SettingsMock();
            expect(component.tracks).toBe(tracks);
    let track1: Track;
            // Arrange
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => []);
            // Assert
    });
            await component.ngOnInit();
            const component: CollectionAlbumsComponent = createComponent();
            // Arrange
            await component.ngOnInit();
        it('should get all tracks if there are no selected albums', async () => {
            // Assert
            const component: CollectionAlbumsComponent = createComponent();
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => albums);

            const component: CollectionAlbumsComponent = createComponent();

            // Assert
    describe('selectedAlbumOrder', () => {
        });


    let applicationPathsMock: IMock<ApplicationPaths>;
            collectionServiceMock.object,
            trackServiceMock.verify((x) => x.getTracksForAlbums(['albumKey2']), Times.exactly(1));
            // Act

            // Act
        albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => albums);
            const component: CollectionAlbumsComponent = createComponent();
            // Act
            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
        trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
        it('should create', () => {
        selectedAlbumsChangedMock$ = selectedAlbumsChangedMock.asObservable();
            // Assert
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
            component.splitDragEnd({ sizes: [60, 40] } as IOutputData);
import { AlbumsTracksPersister } from './albums-tracks-persister';
            // Arrange


            schedulerMock.object,

            expect(component.tracks).toBe(tracks);
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => []);
            expect(component.searchService).toBeDefined();
            component.albums = albums;
        trackServiceMock = Mock.ofType<TrackServiceBase>();
        });
            // Assert
            trackServiceMock.verify((x) => x.getTracksForAlbums(['albumKey2']), Times.exactly(1));
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Arrange
    beforeEach(() => {



            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
import { AlbumOrder } from '../album-order';

            await component.ngOnInit();

        });

    let album2: AlbumModel;

            albumsPersisterMock.reset();

            albumsPersisterMock.reset();
    let indexingFinishedMock$: Observable<void>;
        it('should clear the tracks', async () => {
            // Assert
            // Act
        it('should set right pane size from settings', () => {
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        it('should define searchService', () => {
            await component.ngOnInit();
            indexingFinishedMock.next();
            expect(component).toBeDefined();

            // Act
            expect(component.tracks).toBe(tracks);
import { Track } from '../../../../data/entities/track';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Arrange

        trackServiceMock.setup((x) => x.getTracksForAlbums(It.isAny())).returns(() => tracks);
            // Arrange
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => [album2]);
            searchServiceMock.object,
            settingsStub,
            expect(component.rightPaneSize).toEqual(30);
        });

            // Act
        });
            const component: CollectionAlbumsComponent = createComponent();
            const component: CollectionAlbumsComponent = createComponent();
            indexingServiceMock.object,

            albumServiceMock.object,
        searchServiceMock = Mock.ofType<SearchServiceBase>();
            expect(component.searchService).toBeDefined();
            expect(component.albums).toEqual([]);
        it('should return the selected album order', () => {
        selectedAlbumsChangedMock = new Subject();
            // Act
        it('should set left pane size from settings', () => {
            // Assert

        collectionChangedMock$ = collectionChangedMock.asObservable();

            expect(component.albums.length).toEqual(0);
        tracksPersisterMock = Mock.ofType<AlbumsTracksPersister>();
        tracks = new TrackModels();
    describe('ngOnDestroy', () => {
            component.albums = albums;

            const component: CollectionAlbumsComponent = createComponent();
            expect(component.albums).toBe(albums);
            const component: CollectionAlbumsComponent = createComponent();
        });
        album2 = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Act


    let track2: Track;

        it('should fill the lists when indexing is finished', async () => {
    describe('ngOnInit', () => {

            // Arrange
            loggerMock.object,
        it('should fill the lists when collection has changed', async () => {
    describe('constructor', () => {
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);

            expect(component.albums).toEqual(albums);
        it('should get tracks for the selected albums if the selected albums have changed and there are no selected albums', async () => {


    });

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            // Arrange
    let albums: AlbumModel[];
            // Act
            await component.ngOnInit();
        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingFinishedMock$);
            // Arrange

            trackServiceMock.setup((x) => x.getTracksForAlbums(It.isAny())).returns(() => tracks);
import { Observable, Subject } from 'rxjs';

    let dateTimeMock: IMock<DateTime>;
            // Arrange
describe('CollectionAlbumsComponent', () => {
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
    let settingsStub: any;

        albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
        it('should get all albums', async () => {
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => []);
            // Assert

        });
            // Assert
import { IMock, It, Mock, Times } from 'typemoq';

            const component: CollectionAlbumsComponent = createComponent();
            expect(component.tracks).toBe(tracks);

import { ApplicationPaths } from '../../../../common/application/application-paths';
});
    let trackModel2: TrackModel;
        });
    let album1: AlbumModel;
        dateTimeMock = Mock.ofType<DateTime>();
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => [album2]);
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.exactly(1));
        return new CollectionAlbumsComponent(

        searchServiceMock = Mock.ofType<SearchServiceBase>();
            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
        albums = [album1, album2];
import { AlbumModel } from '../../../../services/album/album-model';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);

            albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
        });
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);

            // Arrange


        it('should define albums as empty', () => {

    let collectionServiceMock: IMock<CollectionServiceBase>;
import { AlbumServiceBase } from '../../../../services/album/album-service.base';
    let albumServiceMock: IMock<AlbumServiceBase>;
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
        indexingServiceMock = Mock.ofType<IndexingService>();
            // Act
            expect(component.tracks).toBe(tracks);
            component.albums = [];

            // Act
            // Act
    let trackModel1: TrackModel;
        });
    albumData2.albumKey = 'albumKey2';



            // Act
            trackServiceMock.setup((x) => x.getTracksForAlbums(It.isAny())).returns(() => tracks);
            await flushPromises();
            // Arrange
        collectionServiceMock.setup((x) => x.collectionChanged$).returns(() => collectionChangedMock$);
        track1 = new Track('Path1');

        it('should get tracks for the selected albums if there are selected albums', async () => {
    albumData1.albumKey = 'albumKey1';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

        tracks.addTrack(trackModel1);
        albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
            // Act
            expect(component.tracks.tracks.length).toEqual(0);
            // Act
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;


import { Logger } from '../../../../common/logger';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

    let indexingServiceMock: IMock<IndexingService>;
        });
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);

    let settingsMock: any;

