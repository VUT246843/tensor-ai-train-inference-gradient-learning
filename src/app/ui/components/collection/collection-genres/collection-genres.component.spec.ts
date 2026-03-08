            const album1: AlbumModel = createAlbumModel('albumKey1');

            const track2: TrackModel = createTrackModel('path2');
            expect(component.albums.length).toEqual(2);

            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);

import { GenreModel } from '../../../../services/genre/genre-model';

            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
            // Arrange
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
        albumData.albumKey = albumKey;
        }
            expect(component.albums[1]).toEqual(album2);
            component.albums = [];
            schedulerMock.object,
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => [album1, album2]);
            // Assert
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            expect(component.albums[0]).toEqual(album1);
    }
        it('should get tracks for the selected genres if the selected genres have changed and there are selected genres', async () => {
    });
            const trackModels: TrackModels = createTrackModels([track1, track2]);


            expect(component.genres[1]).toEqual(genre2);
import { CollectionGenresComponent } from './collection-genres.component';
            expect(component.albums[0]).toEqual(album1);


    let collectionChangedMock$: Observable<void>;
        it('should clear the albums', () => {

            const component: CollectionGenresComponent = createComponent();
            // Assert

            const component: CollectionGenresComponent = createComponent();
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            const component: CollectionGenresComponent = createComponent();
            const album2: AlbumModel = createAlbumModel('albumKey2');
        it('should persist the selected album order', () => {

            selectedGenresChangedMock.next([]);
            const album1: AlbumModel = createAlbumModel('albumKey1');

            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            expect(component.albums.length).toEqual(2);
            const genre1: GenreModel = createGenreModel('genre1');
            // Assert
import { TrackModels } from '../../../../services/track/track-models';

            component.tracks = new TrackModels();
            const component: CollectionGenresComponent = createComponent();
            // Act


            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            const genre2: GenreModel = createGenreModel('genre2');
            const track1: TrackModel = createTrackModel('path1');
    function createComponent(): CollectionGenresComponent {

        albumsPersisterMock.setup((x) => x.selectedAlbumsChanged$).returns(() => selectedAlbumsChangedMock$);
            // Assert
            await component.ngOnInit();
            // Assert
        it('should get all genres', async () => {
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            await component.ngOnInit();
        });
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
import { Observable, Subject } from 'rxjs';
        selectedGenresChangedMock$ = selectedGenresChangedMock.asObservable();
            // Arrange
        it('should set center pane size from settings', () => {
            // Assert

            expect(component.tracks.tracks[0]).toEqual(track1);


            albumsPersisterMock.object,
            trackServiceMock.setup((x) => x.getTracksForGenres([genre1.name, genre2.name])).returns(() => trackModels);

    });
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            expect(component.tracks.tracks[0]).toEqual(track1);




import { GenresAlbumsPersister } from './genres-albums-persister';

import { GenreServiceBase } from '../../../../services/genre/genre.service.base';
            albumServiceMock.reset();


            expect(component.tracks.tracks[0]).toEqual(track1);

            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            const track1: TrackModel = createTrackModel('path1');
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            const album2: AlbumModel = createAlbumModel('albumKey2');
            genreServiceMock.reset();

            expect(component.genres.length).toEqual(2);

    let selectedGenresChangedMock: Subject<string[]>;

            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);

            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
        it('should fill the lists when collection has changed', async () => {

    let trackServiceMock: IMock<TrackServiceBase>;
            expect(component.tracks.tracks[1]).toEqual(track2);

            const track2: TrackModel = createTrackModel('path2');

            expect(component.tracks.tracks[1]).toEqual(track2);
            expect(component.albums[0]).toEqual(album1);
            await component.ngOnInit();
import { Logger } from '../../../../common/logger';
        it('should get tracks for the selected albums if the selected albums have changed and there are selected albums', async () => {
        const track: Track = new Track(path);
            expect(component.genres[0]).toEqual(genre1);
    let selectedAlbumsChangedMock: Subject<string[]>;
            // Arrange
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            genreServiceMock.verify((x) => x.getGenres(), Times.once());
            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
        it('should define albums as empty', () => {


            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            const genre1: GenreModel = createGenreModel('genre1');
        });
        });
        });

        it('should get all tracks if there are no selected genres and no selected albums', async () => {

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
        });
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const component: CollectionGenresComponent = createComponent();

            const album1: AlbumModel = createAlbumModel('albumKey1');
        });
            albumServiceMock.reset();
            // Assert
            // Act

            // Assert
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
        });
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            indexingFinishedMock.next();

            component.ngOnDestroy();

            // Arrange
        genresPersisterMock.setup((x) => x.selectedGenresChanged$).returns(() => selectedGenresChangedMock$);


            await flushPromises();
            component.genres = [genre];
            // Act

        it('should define genres as empty', () => {

            expect(component.albums[1]).toEqual(album2);
            // Act
        it('should get tracks for the selected albums if there are no selected genres but there are selected albums', async () => {
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);

        });
            const genre2: GenreModel = createGenreModel('genre2');
            genreServiceMock.object,
            // Act
        indexingFinishedMock$ = indexingFinishedMock.asObservable();
            // Act

            indexingServiceMock.object,
            // Act
            const track2: TrackModel = createTrackModel('path2');

            // Arrange
            const track2: TrackModel = createTrackModel('path2');
            await flushPromises();
            const album2: AlbumModel = createAlbumModel('albumKey2');

            const component: CollectionGenresComponent = createComponent();
            expect(component.albums.length).toEqual(0);
            const album2: AlbumModel = createAlbumModel('albumKey2');
            expect(component.albums.length).toEqual(0);
            const track2: TrackModel = createTrackModel('path2');
    describe('ngOnDestroy', () => {
            await component.ngOnInit();
            component.albums = [album];
            const track1: TrackModel = createTrackModel('path1');
    }
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            // Assert


            const genre1: GenreModel = createGenreModel('genre1');
            // Arrange
            const component: CollectionGenresComponent = createComponent();

        searchServiceMock = Mock.ofType<SearchServiceBase>();
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1]);
            albumServiceMock.verify((x) => x.getAlbumsForGenres(It.isAny()), Times.never());
            // Arrange
            trackServiceMock.setup((x) => x.getTracksForGenres([genre1.name, genre2.name])).returns(() => trackModels);

            const album: AlbumModel = createAlbumModel('albumKey1');
            const album1: AlbumModel = createAlbumModel('albumKey1');
            // Act
    let indexingFinishedMock$: Observable<void>;
            // Assert
            expect(settingsStub.genresRightPaneWidthPercent).toEqual(15);
        it('should save the right pane width to the settings', () => {
            expect(component.genres[0]).toEqual(genre1);
            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());
            const component: CollectionGenresComponent = createComponent();

            expect(settingsStub.genresLeftPaneWidthPercent).toEqual(30);
import { IOutputData } from 'angular-split';
            // Act

            const genre2: GenreModel = createGenreModel('genre2');

import { AlbumData } from '../../../../data/entities/album-data';
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            trackServiceMock.reset();
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);

            expect(component.tracks.tracks[1]).toEqual(track2);
        albumServiceMock = Mock.ofType<AlbumServiceBase>();
import { DateTime } from '../../../../common/date-time';
            // Act
            const component: CollectionGenresComponent = createComponent();
            const genre1: GenreModel = createGenreModel('genre1');
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
    function createTrackModels(tracks: TrackModel[]): TrackModels {

            expect(component.albums.length).toEqual(2);
            await component.ngOnInit();
    function createTrackModel(path: string): TrackModel {
            expect(component.genres[1]).toEqual(genre2);
            // Act
            expect(component.tracks.tracks[1]).toEqual(track2);
            // Arrange
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            // Act
        });
            expect(component.tracks.tracks[0]).toEqual(track1);
            // Act
            expect(component.genres[0]).toEqual(genre1);
            const track: TrackModel = createTrackModel('path1');
            // Act
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
        collectionServiceMock.setup((x) => x.collectionChanged$).returns(() => collectionChangedMock$);
            selectedGenresChangedMock.next([]);
        indexingServiceMock = Mock.ofType<IndexingService>();

        });
            // Arrange
        });
            // Assert
            // Assert
        collectionChangedMock = new Subject();
            const genre1: GenreModel = createGenreModel('genre1');
            const album2: AlbumModel = createAlbumModel('albumKey2');
            const genre: GenreModel = createGenreModel('genre1');
            selectedGenresChangedMock.next([genre1.name, genre2.name]);
            // Act

            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            expect(component.tracks.tracks[1]).toEqual(track2);

    function createGenreModel(genreName: string): GenreModel {
            const genre1: GenreModel = createGenreModel('genre1');
        });
        });
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            const album2: AlbumModel = createAlbumModel('albumKey2');
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
            const genre1: GenreModel = createGenreModel('genre1');
            expect(component.tracks.tracks[1]).toEqual(track2);
            const album1: AlbumModel = createAlbumModel('albumKey1');
            const component: CollectionGenresComponent = createComponent();
        it('should clear the tracks', () => {
    });
            // Act
            // Act
            const component: CollectionGenresComponent = createComponent();
        });
            trackServiceMock.verify((x) => x.getTracksForGenres([genre1.name, genre2.name]), Times.once());
            trackServiceMock.object,
            expect(component.albums[0]).toEqual(album1);
            const track1: TrackModel = createTrackModel('path1');
            const album2: AlbumModel = createAlbumModel('albumKey2');
            const genre2: GenreModel = createGenreModel('genre2');
            // Act
        it('should set left pane size from settings', () => {
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            // Arrange

import { SearchServiceBase } from '../../../../services/search/search.service.base';

            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());

            albumServiceMock.setup((x) => x.getAlbumsForGenres([genre1.name, genre2.name])).returns(() => [album1, album2]);
            expect(component.leftPaneSize).toEqual(25);
            const component: CollectionGenresComponent = createComponent();
            albumServiceMock.reset();
            expect(component.albums.length).toEqual(2);
        });

            const component: CollectionGenresComponent = createComponent();

            expect(component.genres.length).toEqual(0);
            loggerMock.object,
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);

            await component.ngOnInit();

import { IndexingService } from '../../../../services/indexing/indexing.service';
        it('should get all tracks if the selected genres have changed and there are no selected genres', async () => {

            // Act
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1, genre2]);
            // Act
            expect(component.genres.length).toEqual(2);
            const album2: AlbumModel = createAlbumModel('albumKey2');
            expect(component.tracks.tracks[0]).toEqual(track1);
            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
            const genre1: GenreModel = createGenreModel('genre1');
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            const genre1: GenreModel = createGenreModel('genre1');
            await component.ngOnInit();
        return new GenreModel(genreName, translatorServiceMock.object);
import { GenresPersister } from './genres-persister';
            const genre2: GenreModel = createGenreModel('genre2');
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
        });
        });
});
            expect(component.tracks.tracks[0]).toEqual(track1);

            // Assert
        });

            const track2: TrackModel = createTrackModel('path2');
    }

            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1, genre2]);

        it('should set the selected album order', () => {
        return new CollectionGenresComponent(
        });


        albumsPersisterMock = Mock.ofType<GenresAlbumsPersister>();
            albumServiceMock.setup((x) => x.getAlbumsForGenres([genre1.name])).returns(() => [album1]);
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());

            component.ngOnDestroy();
            searchServiceMock.object,
            const track1: TrackModel = createTrackModel('path1');
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
import { Scheduler } from '../../../../common/scheduling/scheduler';
            component.albums = [];
        });

        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsStub);
            // Act
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => [album1, album2]);
        it('should not get tracks', async () => {

        it('should set the album order', async () => {
            // Arrange

            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
        });
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
    let tracksPersisterMock: IMock<GenresTracksPersister>;

            // Assert

        dateTimeMock = Mock.ofType<DateTime>();
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            selectedAlbumsChangedMock.next([album1.albumKey, album2.albumKey]);

    }
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);

            const album1: AlbumModel = createAlbumModel('albumKey1');
            const genre2: GenreModel = createGenreModel('genre2');
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
        selectedAlbumsChangedMock$ = selectedAlbumsChangedMock.asObservable();
            expect(component.tracks.tracks.length).toEqual(0);
            const selectedAlbumOrder: AlbumOrder = component.selectedAlbumOrder;
            // Arrange
        const trackModels: TrackModels = new TrackModels();

            // Assert
            const album1: AlbumModel = createAlbumModel('albumKey1');
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());
            const album1: AlbumModel = createAlbumModel('albumKey1');
            // Assert
            genreServiceMock.verify((x) => x.getGenres(), Times.once());

            expect(component.tracks.tracks.length).toEqual(2);
            expect(component.tracks.tracks[1]).toEqual(track2);

            // Assert
        });
        return new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Assert


            // Assert
            // Assert
        const albumData: AlbumData = new AlbumData();
import { Track } from '../../../../data/entities/track';
            component.genres = [];
            // Assert
            await component.ngOnInit();

            // Arrange
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            const album2: AlbumModel = createAlbumModel('albumKey2');
            // Arrange
        genresPersisterMock = Mock.ofType<GenresPersister>();
            const component: CollectionGenresComponent = createComponent();
            component.splitDragEnd({ sizes: [30, 55, 15] } as IOutputData);
        indexingFinishedMock = new Subject();
            // Arrange
            expect(component.tracks.tracks.length).toEqual(2);

            // Act
            const component: CollectionGenresComponent = createComponent();
            const component: CollectionGenresComponent = createComponent();
    describe('selectedAlbumOrder', () => {
        it('should reset the selected albums if the selected genres have changed and there are no selected genres', async () => {
describe('CollectionGenresComponent', () => {
            trackServiceMock.reset();
            // Act

            const track1: TrackModel = createTrackModel('path1');


            // Act
            expect(component.tracks.tracks[1]).toEqual(track2);
            // Assert
        it('should define tracks as empty', () => {
            // Arrange
    let applicationPathsMock: IMock<ApplicationPaths>;

    let translatorServiceMock: IMock<TranslatorServiceBase>;
        settingsStub = { genresLeftPaneWidthPercent: 25, genresRightPaneWidthPercent: 25 };
            expect(component.genres[1]).toEqual(genre2);
            // Act


            const trackModels: TrackModels = createTrackModels([track1, track2]);
            // Act
            expect(component.tracks.tracks.length).toEqual(2);
            // Arrange
    });
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            const track1: TrackModel = createTrackModel('path1');
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());
            expect(component.tracks.tracks.length).toEqual(2);
            const track2: TrackModel = createTrackModel('path2');

            await component.ngOnInit();
            const genre1: GenreModel = createGenreModel('genre1');



            albumServiceMock.verify((x) => x.getAlbumsForGenres([genre1.name]), Times.once());

            await component.ngOnInit();
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            expect(component.centerPaneSize).toEqual(50);
            const component: CollectionGenresComponent = createComponent();
            albumServiceMock.object,
            const genre2: GenreModel = createGenreModel('genre2');

            const album2: AlbumModel = createAlbumModel('albumKey2');
        });
            expect(component.searchService).toBeDefined();
            // Assert
            selectedGenresChangedMock.next([genre1.name, genre2.name]);
            // Assert
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
    let searchServiceMock: IMock<SearchServiceBase>;
            const trackModels: TrackModels = createTrackModels([track1, track2]);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            // Act
import { AlbumServiceBase } from '../../../../services/album/album-service.base';
            const component: CollectionGenresComponent = createComponent();
            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());

            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);

            const trackModels: TrackModels = createTrackModels([track1, track2]);
        it('should reset the selected albums if the selected genres have changed and there are selected genres', async () => {
            const component: CollectionGenresComponent = createComponent();
            genreServiceMock.verify((x) => x.getGenres(), Times.once());
        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingFinishedMock$);
            // Assert
            albumsPersisterMock.verify((x) => x.resetSelectedAlbums(), Times.once());
            // Assert
            await component.ngOnInit();
import { TrackModel } from '../../../../services/track/track-model';
        });

            const genre1: GenreModel = createGenreModel('genre1');

import { AlbumOrder } from '../album-order';
    const flushPromises = () => new Promise(process.nextTick);
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
    beforeEach(() => {

            // Arrange
        it('should define searchService', () => {


            const component: CollectionGenresComponent = createComponent();
        collectionChangedMock$ = collectionChangedMock.asObservable();
            const album1: AlbumModel = createAlbumModel('albumKey1');
    function createAlbumModel(albumKey: string): AlbumModel {
            component.ngOnDestroy();
            const album2: AlbumModel = createAlbumModel('albumKey2');
            // Arrange

            expect(component.tracks.tracks.length).toEqual(2);
            const component: CollectionGenresComponent = createComponent();

            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());
            await component.ngOnInit();
            // Arrange
            // Act

            expect(component.albums[1]).toEqual(album2);
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            expect(component.genres.length).toEqual(2);
            // Arrange

            // Act
            expect(selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);

            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            trackModels.addTrack(track);
            const album1: AlbumModel = createAlbumModel('albumKey1');
        it('should get albums for the selected genres if there are selected genres', async () => {
            // Assert
            const component: CollectionGenresComponent = createComponent();
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1, genre2]);
            expect(component.albums[0]).toEqual(album1);
            albumServiceMock.reset();
            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());

        });
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => []);
            const genre1: GenreModel = createGenreModel('genre1');
        });

            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            const genre2: GenreModel = createGenreModel('genre2');
    let indexingServiceMock: IMock<IndexingService>;
            const track2: TrackModel = createTrackModel('path2');
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const genre2: GenreModel = createGenreModel('genre2');
            await component.ngOnInit();
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);

            // Arrange
            const track1: TrackModel = createTrackModel('path1');
            // Arrange
        loggerMock = Mock.ofType<Logger>();
            expect(component.tracks.tracks[1]).toEqual(track2);

            expect(component.albums.length).toEqual(1);
import { ApplicationPaths } from '../../../../common/application/application-paths';
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
        });
        });

            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            component.tracks = createTrackModels([track]);
        return trackModels;
            albumsPersisterMock.setup((x) => x.getSelectedAlbums([album1, album2])).returns(() => []);
        );
            const album1: AlbumModel = createAlbumModel('albumKey1');
            // Assert
            const trackModels: TrackModels = createTrackModels([track1, track2]);

            // Act
            // Assert
            // Arrange
    describe('splitDragEnd', () => {


            // Assert
            // Arrange
            albumServiceMock.setup((x) => x.getAlbumsForGenres([genre1.name, genre2.name])).returns(() => [album1, album2]);
            // Assert
        });

            await component.ngOnInit();

            const component: CollectionGenresComponent = createComponent();
    });

            expect(component.albums[1]).toEqual(album2);
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            selectedGenresChangedMock.next([]);
            tracksPersisterMock.object,


            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
            component.tracks = new TrackModels();


            expect(component.genres.length).toEqual(0);
            const genre2: GenreModel = createGenreModel('genre2');
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        genreServiceMock = Mock.ofType<GenreServiceBase>();
        it('should get albums for the selected genres if the selected genres have changed and there are selected genres', async () => {
            const genre2: GenreModel = createGenreModel('genre2');

        it('should get tracks for the selected albums if there are selected genres and there are selected albums', async () => {
    let collectionServiceMock: IMock<CollectionServiceBase>;
            // Arrange
            const genre2: GenreModel = createGenreModel('genre2');
            // Act
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
        it('should return the selected album order', () => {
            albumServiceMock.verify((x) => x.getAllAlbums(), Times.never());
            await component.ngOnInit();
            component.splitDragEnd({ sizes: [30, 55, 15] } as IOutputData);
            const track1: TrackModel = createTrackModel('path1');
            const genre1: GenreModel = createGenreModel('genre1');
    let schedulerMock: IMock<Scheduler>;
            // Act
            // Act
            // Arrange
            selectedGenresChangedMock.next([genre1.name, genre2.name]);
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            // Arrange

            genresPersisterMock.object,
            trackServiceMock.verify((x) => x.getTracksForGenres(It.isAny()), Times.never());
    let dateTimeMock: IMock<DateTime>;

            const genre2: GenreModel = createGenreModel('genre2');
            expect(component.tracks.tracks.length).toEqual(2);
            expect(component).toBeDefined();
            const album2: AlbumModel = createAlbumModel('albumKey2');
            albumServiceMock.setup((x) => x.getAlbumsForGenres([genre1.name, genre2.name])).returns(() => [album1, album2]);
    let albumServiceMock: IMock<AlbumServiceBase>;
    let loggerMock: IMock<Logger>;
        });
            const component: CollectionGenresComponent = createComponent();
            const component: CollectionGenresComponent = createComponent();
        for (const track of tracks) {
        });
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);


            // Arrange
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey]), Times.once());

            const album2: AlbumModel = createAlbumModel('albumKey2');

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            const component: CollectionGenresComponent = createComponent();

            albumServiceMock.verify((x) => x.getAllAlbums(), Times.once());
import { AlbumModel } from '../../../../services/album/album-model';
        tracksPersisterMock = Mock.ofType<GenresTracksPersister>();
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);



            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
        it('should create', () => {
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
            const trackModels: TrackModels = createTrackModels([track1, track2]);
    let indexingFinishedMock: Subject<void>;

            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
            const component: CollectionGenresComponent = createComponent();
            trackServiceMock.verify((x) => x.getTracksForAlbums(It.isAny()), Times.never());

            const component: CollectionGenresComponent = createComponent();
    let genreServiceMock: IMock<GenreServiceBase>;
            albumServiceMock.verify((x) => x.getAlbumsForGenres([genre1.name, genre2.name]), Times.once());
            const genre1: GenreModel = createGenreModel('genre1');
        it('should save the left pane width to the settings', () => {

            expect(component.albums[0]).toEqual(album1);
            selectedAlbumsChangedMock.next([]);
    });
            genreServiceMock.setup((x) => x.getGenres()).returns(() => [genre1, genre2]);
        it('should fill the lists when indexing is finished', async () => {

    let genresPersisterMock: IMock<GenresPersister>;


            await component.ngOnInit();
            expect(component.albums[1]).toEqual(album2);
            const component: CollectionGenresComponent = createComponent();
            component.genres = [];
            expect(component.tracks.tracks[0]).toEqual(track1);
        it('should clear the genres', () => {

            albumsPersisterMock.verify((x) => x.setSelectedAlbumOrder(component.selectedAlbumOrder), Times.once());
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    }
        });
            const genre1: GenreModel = createGenreModel('genre1');
            // Act

            const component: CollectionGenresComponent = createComponent();
            trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey, album2.albumKey])).returns(() => trackModels);
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1, genre2]);
            expect(component.tracks.tracks[1]).toEqual(track2);

            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            const genre1: GenreModel = createGenreModel('genre1');
            // Assert
    let settingsStub: any;
            // Assert


    let collectionChangedMock: Subject<void>;

        });
            const genre2: GenreModel = createGenreModel('genre2');
import { IMock, It, Mock, Times } from 'typemoq';

            await component.ngOnInit();
            // Arrange
            const component: CollectionGenresComponent = createComponent();
            // Arrange
            expect(component.tracks.tracks.length).toEqual(2);
            albumServiceMock.setup((x) => x.getAlbumsForGenres([genre1.name, genre2.name])).returns(() => [album1, album2]);
            collectionChangedMock.next();
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byYearAscending);
        it('should get tracks for the selected genres if there are selected genres but no selected albums', async () => {
            const genre2: GenreModel = createGenreModel('genre2');
            component.selectedAlbumOrder = AlbumOrder.byYearAscending;
            const genre2: GenreModel = createGenreModel('genre2');
        it('should set right pane size from settings', () => {

            // Arrange

        trackServiceMock = Mock.ofType<TrackServiceBase>();
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
    let albumsPersisterMock: IMock<GenresAlbumsPersister>;
            expect(component.tracks.tracks.length).toEqual(2);
        it('should get all albums if there are no selected genres', async () => {
            settingsStub,
    describe('constructor', () => {
            // Arrange

            expect(component.tracks.tracks.length).toEqual(2);

            expect(component.tracks.tracks[0]).toEqual(track1);


            expect(component.tracks.tracks.length).toEqual(0);
    let selectedAlbumsChangedMock$: Observable<string[]>;
            // Assert
import { GenresTracksPersister } from './genres-tracks-persister';
    describe('ngOnInit', () => {
            const component: CollectionGenresComponent = createComponent();
            expect(component.tracks.tracks.length).toEqual(0);

            expect(component.albums.length).toEqual(2);
            trackServiceMock.verify((x) => x.getTracksForGenres([genre1.name, genre2.name]), Times.once());



    let selectedGenresChangedMock$: Observable<string[]>;
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Arrange
            const track2: TrackModel = createTrackModel('path2');

            const component: CollectionGenresComponent = createComponent();
            const track2: TrackModel = createTrackModel('path2');

            expect(component.tracks.tracks.length).toEqual(2);
        it('should get all albums if the selected genres have changed and there are no selected genres', async () => {

        it('should get all tracks if the selected albums have changed and there are no selected albums', async () => {
            // Act
        selectedAlbumsChangedMock = new Subject();
            // Arrange
        });


            await component.ngOnInit();
            collectionServiceMock.object,
            const track1: TrackModel = createTrackModel('path1');
            genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre1, genre2]);
        selectedGenresChangedMock = new Subject();
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            albumServiceMock.setup((x) => x.getAllAlbums()).returns(() => [album1, album2]);
            genreServiceMock.reset();
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.never());

        });
            await component.ngOnInit();

            expect(component.rightPaneSize).toEqual(25);
            const component: CollectionGenresComponent = createComponent();

            albumServiceMock.verify((x) => x.getAlbumsForGenres(It.isAny()), Times.never());
        schedulerMock = Mock.ofType<Scheduler>();
            expect(component.tracks.tracks[0]).toEqual(track1);


            const component: CollectionGenresComponent = createComponent();
            expect(component.tracks.tracks[0]).toEqual(track1);
            // Assert
            const album1: AlbumModel = createAlbumModel('albumKey1');
