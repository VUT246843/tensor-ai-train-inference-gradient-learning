            const artist1: ArtistModel = createArtistModel('artist1');
    });

            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);



            expect(component.artists[0]).toEqual(artist1);
            // Arrange
            await component.ngOnInit();
            // Assert
            // Assert
            // Assert
            const artist2: ArtistModel = createArtistModel('artist2');
            // Assert
        it('should persist the selected album order', () => {

            // Assert
            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
            // Assert
            // Act


            component.splitDragEnd({ sizes: [30, 55, 15] } as IOutputData);
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            expect(component.tracks.tracks.length).toEqual(2);
            // Act
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
        });
            const album1: AlbumModel = createAlbumModel('albumKey1');
            const artist1: ArtistModel = createArtistModel('artist1');
        it('should get albums for all selected artists if there are selected artists and artists type is allArtists', async () => {
        });
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
            component.albums = [];
            const album2: AlbumModel = createAlbumModel('albumKey2');
        it('should get all track artists if artists type is trackArtists', async () => {
            schedulerMock.object,
            const album1: AlbumModel = createAlbumModel('albumKey1');
        it('should define artists as empty', () => {
            expect(component.artists[0]).toEqual(artist1);
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

            expect(component.albums[1]).toEqual(album2);
            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());


            // Assert
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';

import { ArtistsPersister } from './artists-persister';
            const component: CollectionArtistsComponent = createComponent();



            const album2: AlbumModel = createAlbumModel('albumKey2');

            // Act
        });
            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.albumArtists)).returns(() => [album1]);

            expect(component.centerPaneSize).toEqual(50);
        albumData.albumKey = albumKey;
            const component: CollectionArtistsComponent = createComponent();

    }
        indexingServiceMock = Mock.ofType<IndexingService>();

            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            expect(component.artists[0]).toEqual(artist1);
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            const track2: TrackModel = createTrackModel('path2');

            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            // Act

            const component: CollectionArtistsComponent = createComponent();
            const component: CollectionArtistsComponent = createComponent();
            await component.ngOnInit();
            albumServiceMock.reset();

            component.splitDragEnd({ sizes: [30, 55, 15] } as IOutputData);
            // Arrange
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            // Act
            // Act
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            expect(component.albums.length).toEqual(2);
            selectedArtistsChangedMock.next([artist1.name, artist2.name]);

import { ArtistServiceBase } from '../../../../services/artist/artist.service.base';
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            // Act
            const artist2: ArtistModel = createArtistModel('artist2');
    function createAlbumModel(albumKey: string): AlbumModel {

            // Assert
            expect(settingsStub.artistsRightPaneWidthPercent).toEqual(15);
    let albumServiceMock: IMock<AlbumServiceBase>;
            const album2: AlbumModel = createAlbumModel('albumKey2');



            const component: CollectionArtistsComponent = createComponent();


            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);

            // Arrange

        collectionChangedMock = new Subject();
            // Assert
    }
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);

            // Arrange
        }

        it('should get all tracks if the selected albums have changed and there are no selected albums', async () => {
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();

            expect(component.tracks.tracks[1]).toEqual(track2);

            await component.ngOnInit();
    let schedulerMock: IMock<Scheduler>;

            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());

            const track2: TrackModel = createTrackModel('path2');
            // Arrange
            expect(component.artists.length).toEqual(1);
        it('should get tracks for the selected albums if there are selected genres and there are selected albums', async () => {
        });
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            // Assert
            expect(component.albums[1]).toEqual(album2);
            // Assert

        });
            // Assert

        });


        const component: CollectionArtistsComponent = new CollectionArtistsComponent(
import { FileAccess } from '../../../../common/io/file-access';

            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            expect(component.tracks.tracks.length).toEqual(2);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            expect(component.tracks.tracks.length).toEqual(2);
            // Arrange



            const track2: TrackModel = createTrackModel('path2');

        loggerMock = Mock.ofType<Logger>();
            const artist2: ArtistModel = createArtistModel('artist2');
    let indexingFinishedMock: Subject<void>;
    let collectionServiceMock: IMock<CollectionServiceBase>;
            expect(component.tracks.tracks[0]).toEqual(track1);
            const track1: TrackModel = createTrackModel('path1');

    });
            await component.ngOnInit();

            const album2: AlbumModel = createAlbumModel('albumKey2');
        });

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
    });
            const component: CollectionArtistsComponent = createComponent();
            await component.ngOnInit();
    describe('ngOnInit', () => {
            const component: CollectionArtistsComponent = createComponent();
            expect(component.tracks.tracks[0]).toEqual(track1);
            const artist2: ArtistModel = createArtistModel('artist2');

    let loggerMock: IMock<Logger>;
            searchServiceMock.object,
            const component: CollectionArtistsComponent = createComponent();
        it('should clear the artists', () => {
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            artistServiceMock.setup((x) => x.getArtists(ArtistType.albumArtists)).returns(() => [artist1, artist2]);
        artistsPersisterMock.setup((x) => x.selectedArtistTypeChanged$).returns(() => selectedArtistTypeChangedMock$);
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
        albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);

        });
            // Act
    let settingsStub: any;
            const artist1: ArtistModel = createArtistModel('artist1');
        it('should set left pane size from settings', () => {
            // Act
            // Arrange
            const track2: TrackModel = createTrackModel('path2');


            loggerMock.object,

            // Act

            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            // Arrange
            albumServiceMock.verify((x) => x.getAlbumsForArtists(It.isAny(), It.isAny()), Times.never());

            expect(component.tracks.tracks.length).toEqual(2);
            // Assert

        });
            const track2: TrackModel = createTrackModel('path2');
            expect(component.albums.length).toEqual(2);
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            artistServiceMock.reset();
        it('should save the left pane width to the settings', () => {
            const component: CollectionArtistsComponent = createComponent();

        });
            const track1: TrackModel = createTrackModel('path1');
            // Arrange
            // Arrange
        dateTimeMock = Mock.ofType<DateTime>();

            // Arrange
        indexingFinishedMock$ = indexingFinishedMock.asObservable();
            // Act
        );
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            // Arrange
        it('should reset the selected albums if the selected artist type has changed to allArtists', async () => {
        it('should clear the albums', () => {

import { ArtistType } from '../../../../services/artist/artist-type';
            component.tracks = new TrackModels();
            // Act
});
            const component: CollectionArtistsComponent = createComponent();
        });
        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingFinishedMock$);
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            await component.ngOnInit();
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            selectedArtistsChangedMock.next([artist1.name, artist2.name]);
        collectionServiceMock.setup((x) => x.collectionChanged$).returns(() => collectionChangedMock$);
            // Act
            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
import { IndexingService } from '../../../../services/indexing/indexing.service';
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.albumArtists);
            artistServiceMock.object,
            expect(component.artists.length).toEqual(2);

        albumServiceMock = Mock.ofType<AlbumServiceBase>();
            // Arrange
            // Act
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            const track2: TrackModel = createTrackModel('path2');
            await component.ngOnInit();
            const artist2: ArtistModel = createArtistModel('artist2');
            expect(component.tracks.tracks[0]).toEqual(track1);


        });
import { ApplicationPaths } from '../../../../common/application/application-paths';

        indexingFinishedMock = new Subject();
            expect(component.tracks.tracks[1]).toEqual(track2);
        });
            artistServiceMock.setup((x) => x.getArtists(ArtistType.trackArtists)).returns(() => [artist1]);
            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
        });
import { DateTime } from '../../../../common/date-time';

            expect(component.tracks.tracks[1]).toEqual(track2);
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            // Assert
            const component: CollectionArtistsComponent = createComponent();

            expect(settingsStub.artistsLeftPaneWidthPercent).toEqual(30);
            // Assert
            const artist1: ArtistModel = createArtistModel('artist1');



            // Act

    let artistsPersisterMock: IMock<ArtistsPersister>;
            expect(component.rightPaneSize).toEqual(25);
    let selectedArtistsChangedMock$: Observable<string[]>;
            // Arrange
            // Act

            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);

            const component: CollectionArtistsComponent = createComponent();

            const artist2: ArtistModel = createArtistModel('artist2');

        });
            const component: CollectionArtistsComponent = createComponent();
            // Assert
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);


            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => [album1, album2]);
            expect(component.tracks.tracks[1]).toEqual(track2);

import { AlbumServiceBase } from '../../../../services/album/album-service.base';
            expect(component.tracks.tracks[0]).toEqual(track1);

            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), ArtistType.allArtists), Times.never());


    function createTrackModels(tracks: TrackModel[]): TrackModels {
            await component.ngOnInit();
            // Act
            const album2: AlbumModel = createAlbumModel('albumKey2');

        it('should get all albums if there are no selected artists', async () => {
        it('should define searchService', () => {
        applicationPathsMock = Mock.ofType<ApplicationPaths>();

            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());
            expect(component.albums[0]).toEqual(album1);

            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());
            artistServiceMock.setup((x) => x.getArtists(ArtistType.trackArtists)).returns(() => [artist1, artist2]);


    let selectedAlbumsChangedMock: Subject<string[]>;
            const component: CollectionArtistsComponent = createComponent();
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);

            expect(component.albums[0]).toEqual(album1);

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());


            await component.ngOnInit();
            expect(component.tracks.tracks.length).toEqual(2);
describe('CollectionArtistsComponent', () => {
            expect(component.albums[1]).toEqual(album2);
            const track1: TrackModel = createTrackModel('path1');

            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
    let collectionChangedMock$: Observable<void>;

            await component.ngOnInit();
            selectedArtistsChangedMock.next([artist1.name, artist2.name]);
    let artistServiceMock: IMock<ArtistServiceBase>;
            selectedArtistsChangedMock.next([]);

            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            const artist2: ArtistModel = createArtistModel('artist2');
            expect(component.albums[1]).toEqual(album2);
        const trackModels: TrackModels = new TrackModels();
            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());

            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            const artist2: ArtistModel = createArtistModel('artist2');
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
    let indexingFinishedMock$: Observable<void>;
            artistServiceMock.verify((x) => x.getArtists(ArtistType.allArtists), Times.once());
            // Act
            component.artists = [artist];
import { Logger } from '../../../../common/logger';
        });
        });
            expect(component.albums[1]).toEqual(album2);
        it('should return the selected album order', () => {
            expect(component.artists.length).toEqual(0);

            // Assert
            // Assert

            const component: CollectionArtistsComponent = createComponent();

import { AlbumModel } from '../../../../services/album/album-model';
            const artist1: ArtistModel = createArtistModel('artist1');

            const component: CollectionArtistsComponent = createComponent();
            const album1: AlbumModel = createAlbumModel('albumKey1');
        trackServiceMock = Mock.ofType<TrackServiceBase>();
    describe('selectedAlbumOrder', () => {
            // Assert
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            const artist1: ArtistModel = createArtistModel('artist1');

    let translatorServiceMock: IMock<TranslatorServiceBase>;

import { AlbumData } from '../../../../data/entities/album-data';
            // Arrange
        it('should get all tracks if there are no selected artists and no selected albums', async () => {

            indexingFinishedMock.next();
        });
        it('should create', () => {


            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            expect(component.albums[0]).toEqual(album1);
            const artist1: ArtistModel = createArtistModel('artist1');


            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            collectionServiceMock.object,
        });
            await flushPromises();

            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => [album1, album2]);
        it('should not get tracks', async () => {
    const flushPromises = () => new Promise(process.nextTick);

            const album1: AlbumModel = createAlbumModel('albumKey1');
        selectedArtistTypeChangedMock = new Subject();
            const track2: TrackModel = createTrackModel('path2');

            selectedAlbumsChangedMock.next([]);
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            const artist1: ArtistModel = createArtistModel('artist2');
            const trackModels: TrackModels = createTrackModels([track1, track2]);
import { CollectionArtistsComponent } from './collection-artists.component';
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
            const selectedAlbumOrder: AlbumOrder = component.selectedAlbumOrder;

            const album2: AlbumModel = createAlbumModel('albumKey2');
        });
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
        it('should get tracks for the selected albums if the selected albums have changed and there are selected albums', async () => {
            trackModels.addTrack(track);
        return new ArtistModel(artistName, translatorServiceMock.object);
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
        fileAccessMock = Mock.ofType<FileAccess>();
            const artist1: ArtistModel = createArtistModel('artist1');
        });

            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
            const component: CollectionArtistsComponent = createComponent();
            expect(component.artists[1]).toEqual(artist2);
            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
        selectedAlbumsChangedMock$ = selectedAlbumsChangedMock.asObservable();

            // Arrange
            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());
            tracksPersisterMock.object,
            // Arrange
            // Arrange

            const artist1: ArtistModel = createArtistModel('artist1');
        settingsStub = { artistsLeftPaneWidthPercent: 25, artistsRightPaneWidthPercent: 25 };
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const component: CollectionArtistsComponent = createComponent();
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
import { TrackModels } from '../../../../services/track/track-models';
            const component: CollectionArtistsComponent = createComponent();
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);


import { TrackServiceBase } from '../../../../services/track/track.service.base';
            artistServiceMock.setup((x) => x.getArtists(ArtistType.albumArtists)).returns(() => [artist1]);
            const component: CollectionArtistsComponent = createComponent();
        it('should get albums for selected album artists if there are selected artists and artists type is albumArtists', async () => {
            component.artists = [];
            albumServiceMock.reset();
            expect(component.tracks.tracks[0]).toEqual(track1);
            const artist1: ArtistModel = createArtistModel('artist1');
            albumServiceMock.reset();
        it('should define albums as empty', () => {
import { IMock, It, Mock, Times } from 'typemoq';
    let trackServiceMock: IMock<TrackServiceBase>;
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.albumArtists);
            const track1: TrackModel = createTrackModel('path1');

            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            const album1: AlbumModel = createAlbumModel('albumKey1');
    let tracksPersisterMock: IMock<ArtistsTracksPersister>;
            // Act
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            expect(component.artists.length).toEqual(2);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            await component.ngOnInit();
            // Act
            expect(component.artists[1]).toEqual(artist2);
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
        const track: Track = new Track(path);

            await component.ngOnInit();

            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            await component.ngOnInit();
            const artist2: ArtistModel = createArtistModel('artist2');
            const album1: AlbumModel = createAlbumModel('albumKey1');
            const album2: AlbumModel = createAlbumModel('albumKey2');
            expect(component.artists.length).toEqual(2);
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
    function createTrackModel(path: string): TrackModel {
            const artist2: ArtistModel = createArtistModel('artist2');
            const track2: TrackModel = createTrackModel('path2');
            // Act
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            expect(component.tracks.tracks[1]).toEqual(track2);
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const component: CollectionArtistsComponent = createComponent();
            expect(component.albums[0]).toEqual(album1);
            expect(component.albums.length).toEqual(2);

            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.allArtists);
            // Assert
            expect(component.tracks.tracks.length).toEqual(2);
            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => [album1, album2]);
            const component: CollectionArtistsComponent = createComponent();

            expect(component.tracks.tracks.length).toEqual(2);
        });

            albumServiceMock.verify((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.albumArtists), Times.once());
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
import { ArtistsAlbumsPersister } from './artists-albums-persister';
            selectedArtistsChangedMock.next([]);
            // Arrange
            expect(component.searchService).toBeDefined();
            expect(component.albums[0]).toEqual(album1);
            // Act
            // Act
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
    }
            const album2: AlbumModel = createAlbumModel('albumKey2');
            expect(component.artists.length).toEqual(1);
            const component: CollectionArtistsComponent = createComponent();
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);

            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            expect(component.albums.length).toEqual(0);
        it('should get albums for the selected artists if the selected artists have changed and there are selected artists', async () => {
            expect(component.tracks.tracks[1]).toEqual(track2);
            albumServiceMock.verify((x) => x.getAlbumsForArtists(It.isAny(), It.isAny()), Times.never());
        });
import { ArtistsTracksPersister } from './artists-tracks-persister';
        it('should set the album order', async () => {


            expect(component.tracks.tracks[0]).toEqual(track1);
    function createComponent(): CollectionArtistsComponent {
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);
            const album2: AlbumModel = createAlbumModel('albumKey2');
            const track2: TrackModel = createTrackModel('path2');
            const track1: TrackModel = createTrackModel('path1');
        it('should set the selected album order', () => {
            expect(component.albums[1]).toEqual(album2);
            // Arrange
            const artist1: ArtistModel = createArtistModel('artist1');
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);


            // Arrange


            settingsStub,
        });
            // Arrange
            expect(component.tracks.tracks[1]).toEqual(track2);
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
            selectedArtistsChangedMock.next([]);
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
        });

            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.trackArtists);
            const artist: ArtistModel = createArtistModel('artist1');
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            const component: CollectionArtistsComponent = createComponent();
            const artist1: ArtistModel = createArtistModel('artist1');
        const albumData: AlbumData = new AlbumData();
            // Assert
            trackServiceMock.setup((x) => x.getTracksForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => trackModels);

        it('should save the right pane width to the settings', () => {
    describe('ngOnDestroy', () => {
            // Arrange
            // Arrange
        });
            expect(component.tracks.tracks[1]).toEqual(track2);
        });
            // Arrange
            const track1: TrackModel = createTrackModel('path1');
            // Act
            // Act
            // Assert


            expect(component.leftPaneSize).toEqual(25);
            albumServiceMock.verify((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.trackArtists), Times.once());
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);
            const component: CollectionArtistsComponent = createComponent();

            // Arrange
            await component.ngOnInit();
            const album1: AlbumModel = createAlbumModel('albumKey1');
    function createArtistModel(artistName: string): ArtistModel {

            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);

            const artist2: ArtistModel = createArtistModel('artist2');
        });

            const trackModels: TrackModels = createTrackModels([track1, track2]);
            await component.ngOnInit();
        it('should reset the selected albums if the selected artist type has changed to albumArtists', async () => {

            component.tracks = createTrackModels([track]);
            const artist1: ArtistModel = createArtistModel('artist1');
            const artist2: ArtistModel = createArtistModel('artist2');

            const track: TrackModel = createTrackModel('path1');
            // Act

    }

            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());
            // Act
            // Assert

        });
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);

            // Arrange
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
            const track1: TrackModel = createTrackModel('path1');

        it('should get all tracks if the selected artists have changed and there are no selected artists', async () => {
            const trackModels: TrackModels = createTrackModels([track1, track2]);


        it('should get tracks for the selected artists if there are selected artists but no selected albums', async () => {
        });
            component.ngOnDestroy();

            // Arrange
            const album1: AlbumModel = createAlbumModel('albumKey1');

        selectedArtistsChangedMock$ = selectedArtistsChangedMock.asObservable();
            // Act
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            selectedAlbumsChangedMock.next([album1.albumKey, album2.albumKey]);
            // Arrange
            // Act
            // Act
    let collectionChangedMock: Subject<void>;

            await component.ngOnInit();
            const album1: AlbumModel = createAlbumModel('albumKey1');
            expect(component.artists.length).toEqual(0);
            // Assert
            component.albums = [];
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            component.tracks = new TrackModels();
            const album: AlbumModel = createAlbumModel('albumKey1');
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            // Act
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);
            const artist1: ArtistModel = createArtistModel('artist1');
            expect(component.artists[0]).toEqual(artist1);
        return component;
            const track1: TrackModel = createTrackModel('path1');
            await component.ngOnInit();

            // Act
        it('should define tracks as empty', () => {
            albumsPersisterMock.verify((x) => x.setSelectedAlbumOrder(component.selectedAlbumOrder), Times.once());
            // Arrange
        it('should get all artists if artists type is allArtists', async () => {
            artistServiceMock.reset();
        selectedAlbumsChangedMock = new Subject();
            const component: CollectionArtistsComponent = createComponent();
        collectionChangedMock$ = collectionChangedMock.asObservable();


            // Assert
        selectedArtistTypeChangedMock$ = selectedArtistTypeChangedMock.asObservable();
            await component.ngOnInit();
            component.albums = [album];
    let indexingServiceMock: IMock<IndexingService>;
        it('should get albums for selected track artists if there are selected artists and artists type is trackArtists', async () => {
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            const artist2: ArtistModel = createArtistModel('artist2');


            albumServiceMock.object,
            trackServiceMock.setup((x) => x.getTracksForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => trackModels);

            expect(component.albums.length).toEqual(1);
import { Track } from '../../../../data/entities/track';
        artistsPersisterMock.setup((x) => x.selectedArtistsChanged$).returns(() => selectedArtistsChangedMock$);
            trackServiceMock.verify((x) => x.getTracksForArtists(It.isAny(), It.isAny()), Times.never());
            const artist2: ArtistModel = createArtistModel('artist2');

            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => [album1, album2]);
            component.ngOnDestroy();

        it('should set center pane size from settings', () => {
    let dateTimeMock: IMock<DateTime>;
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
            // Arrange
        });
            const track1: TrackModel = createTrackModel('path1');
            expect(component.artists[1]).toEqual(artist2);
            expect(component.albums[0]).toEqual(album1);
            // Arrange

            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
        for (const track of tracks) {

            await component.ngOnInit();
            expect(component.tracks.tracks[1]).toEqual(track2);
            const component: CollectionArtistsComponent = createComponent();
            expect(selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
    let selectedArtistTypeChangedMock: Subject<ArtistType>;

            const component: CollectionArtistsComponent = createComponent();
            artistServiceMock.verify((x) => x.getArtists(ArtistType.allArtists), Times.once());
            const component: CollectionArtistsComponent = createComponent();

            // Assert
        return new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);

            const component: CollectionArtistsComponent = createComponent();
        artistServiceMock = Mock.ofType<ArtistServiceBase>();
        it('should get all album artists if artists type is albumArtists', async () => {
            const artist1: ArtistModel = createArtistModel('artist1');
            const artist2: ArtistModel = createArtistModel('artist2');
            // Assert

            // Act
            // Act
            // Assert
            const album2: AlbumModel = createAlbumModel('albumKey2');


        });
            expect(component.tracks.tracks.length).toEqual(0);
            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
            const component: CollectionArtistsComponent = createComponent();
            expect(component.tracks.tracks.length).toEqual(2);
            // Assert
            const track1: TrackModel = createTrackModel('path1');
import { SearchServiceBase } from '../../../../services/search/search.service.base';
            const component: CollectionArtistsComponent = createComponent();

import { TrackModel } from '../../../../services/track/track-model';
            const artist2: ArtistModel = createArtistModel('artist2');
            expect(component.tracks.tracks.length).toEqual(0);
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            expect(component.albums[0]).toEqual(album1);

            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            // Arrange
            indexingServiceMock.object,
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);
            // Act
            const component: CollectionArtistsComponent = createComponent();
            // Arrange
            const track2: TrackModel = createTrackModel('path2');
        });
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());

            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.trackArtists)).returns(() => [album1]);
        });
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            artistServiceMock.verify((x) => x.getArtists(ArtistType.trackArtists), Times.once());
            // Act

            await component.ngOnInit();
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);


    let fileAccessMock: IMock<FileAccess>;
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
    let applicationPathsMock: IMock<ApplicationPaths>;

            const album2: AlbumModel = createAlbumModel('albumKey2');

            const album2: AlbumModel = createAlbumModel('albumKey2');

        });
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);


            await component.ngOnInit();
            const album1: AlbumModel = createAlbumModel('albumKey1');
            trackServiceMock.verify((x) => x.getTracksForArtists([artist1, artist2], ArtistType.allArtists), Times.once());
            const component: CollectionArtistsComponent = createComponent();

        });
            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
        });
        });
            const component: CollectionArtistsComponent = createComponent();

            expect(component.albums.length).toEqual(1);
        tracksPersisterMock = Mock.ofType<ArtistsTracksPersister>();
            artistServiceMock.setup((x) => x.getArtists(ArtistType.allArtists)).returns(() => [artist1, artist2]);
import { Scheduler } from '../../../../common/scheduling/scheduler';
            // Act


        });

import { IOutputData } from 'angular-split';
            expect(component.tracks.tracks.length).toEqual(0);
            const component: CollectionArtistsComponent = createComponent();
            const artist1: ArtistModel = createArtistModel('artist1');
            // Arrange
            const component: CollectionArtistsComponent = createComponent();
        return trackModels;

            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);

            // Assert
            albumsPersisterMock.object,

        searchServiceMock = Mock.ofType<SearchServiceBase>();
    let selectedAlbumsChangedMock$: Observable<string[]>;
            const artist1: ArtistModel = createArtistModel('artist1');
            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => [album1, album2]);

            // Assert

    });
    let selectedArtistTypeChangedMock$: Observable<ArtistType>;
        });

            expect(component.artists[0]).toEqual(artist1);
            selectedArtistTypeChangedMock.next(ArtistType.trackArtists);
            expect(component.albums[0]).toEqual(album1);
            // Arrange

            // Act
            artistServiceMock.verify((x) => x.getArtists(ArtistType.albumArtists), Times.once());

            const component: CollectionArtistsComponent = createComponent();
            selectedArtistTypeChangedMock.next(ArtistType.albumArtists);
        albumsPersisterMock = Mock.ofType<ArtistsAlbumsPersister>();
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist1, artist2]);
            const component: CollectionArtistsComponent = createComponent();
            // Assert
            // Assert
        schedulerMock = Mock.ofType<Scheduler>();
            // Assert
            const artist2: ArtistModel = createArtistModel('artist2');
            // Arrange

    describe('constructor', () => {
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
            // Assert
            const artist2: ArtistModel = createArtistModel('artist2');
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);


            // Arrange
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.trackArtists);
            const album1: AlbumModel = createAlbumModel('albumKey1');

    let searchServiceMock: IMock<SearchServiceBase>;
            expect(component.tracks.tracks[0]).toEqual(track1);
            const artist1: ArtistModel = createArtistModel('artist1');
        it('should set right pane size from settings', () => {
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
            trackServiceMock.reset();
            // Assert

            await flushPromises();
            trackServiceMock.object,
    let selectedArtistsChangedMock: Subject<string[]>;
    });
        it('should reset the selected albums if the selected artist type has changed to trackArtists', async () => {
            const component: CollectionArtistsComponent = createComponent();
            // Assert
        it('should get all albums if the selected artists have changed and there are no selected artists', async () => {
            // Assert
            const album1: AlbumModel = createAlbumModel('albumKey1');
            expect(component.tracks.tracks[1]).toEqual(track2);
            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);
            // Assert
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => [album1, album2]);
            // Act
        it('should get tracks for the selected albums if there are no selected artists but there are selected albums', async () => {
            // Arrange
            trackServiceMock.reset();
            const trackModels: TrackModels = createTrackModels([track1, track2]);
    });
import { Observable, Subject } from 'rxjs';
            expect(component.albums.length).toEqual(2);
            // Assert
import { AlbumOrder } from '../album-order';
            artistServiceMock.verify((x) => x.getArtists(ArtistType.allArtists), Times.once());


            // Arrange
            const component: CollectionArtistsComponent = createComponent();
            expect(component).toBeDefined();
        it('should fill the lists when indexing is finished', async () => {
            artistsPersisterMock.object,
    describe('splitDragEnd', () => {
            expect(component.tracks.tracks.length).toEqual(2);
            expect(component.albums.length).toEqual(2);


            await component.ngOnInit();
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
        it('should reset the selected albums if the selected artists have changed and there are selected artists', async () => {
            // Act
            selectedArtistTypeChangedMock.next(ArtistType.allArtists);
            const album2: AlbumModel = createAlbumModel('albumKey2');

            // Act
        artistsPersisterMock = Mock.ofType<ArtistsPersister>();

import { ArtistModel } from '../../../../services/artist/artist-model';
            collectionChangedMock.next();
            expect(component.albums.length).toEqual(2);
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            expect(component.tracks.tracks[0]).toEqual(track1);

        });
            component.ngOnDestroy();
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsStub);
            // Assert
            const album2: AlbumModel = createAlbumModel('albumKey2');

            const trackModels: TrackModels = createTrackModels([track1, track2]);
            const component: CollectionArtistsComponent = createComponent();
        it('should get tracks for the selected artists if the selected artists have changed and there are selected artists', async () => {
            // Act
            albumServiceMock.verify((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists), Times.once());
            // Arrange
            expect(component.tracks.tracks[0]).toEqual(track1);

            const album1: AlbumModel = createAlbumModel('albumKey1');
            albumServiceMock.setup((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists)).returns(() => [album1, album2]);
            // Assert
        selectedArtistsChangedMock = new Subject();

        it('should fill the lists when collection has changed ', async () => {
            await component.ngOnInit();


            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
            component.artists = [];
    }


        });
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);

            const artist1: ArtistModel = createArtistModel('artist1');
            albumServiceMock.reset();

            artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => []);

            await component.ngOnInit();
        it('should reset the selected albums if the selected artists have changed and there are no selected artists', async () => {


        it('should clear the tracks', () => {
            await component.ngOnInit();
            artistsPersisterMock.setup((x) => x.getSelectedArtistType()).returns(() => ArtistType.trackArtists);
            expect(component.albums.length).toEqual(0);
            trackServiceMock.verify((x) => x.getTracksForArtists([artist1, artist2], ArtistType.allArtists), Times.once());
            await component.ngOnInit();
    let albumsPersisterMock: IMock<ArtistsAlbumsPersister>;
            expect(component.tracks.tracks[0]).toEqual(track1);

            // Arrange
            albumServiceMock.verify((x) => x.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists), Times.once());
            artistServiceMock.setup((x) => x.getArtists(ArtistType.trackArtists)).returns(() => [artist1, artist2]);
            expect(component.tracks.tracks.length).toEqual(2);
    beforeEach(() => {
