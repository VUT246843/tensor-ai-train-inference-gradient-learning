            expect(filteredAlbums[0]).toEqual(albums[1]);
            // Assert
        });

        albumData1.albumTitle = 'album_title1';
        });
            // Arrange
            // Assert
    let searchServiceMock: IMock<SearchServiceBase>;
            // Act

        const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            const albums: AlbumModel[] = createAlbumModels();
            const filteredAlbums: AlbumModel[] = pipe.transform(albums, undefined);
            searchServiceMock.setup((x) => x.matchesSearchText(It.isAny(), It.isAny())).returns(() => false);
            // Assert
            const albums: AlbumModel[] = createAlbumModels();
    function createAlbumModels(): AlbumModel[] {
            // Assert
            // Act
describe('AlbumsFilterPipe', () => {
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
import { ApplicationPaths } from '../../common/application/application-paths';
    beforeEach(() => {
        });

            const pipe: AlbumsFilterPipe = createPipe();
        const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
    });
            // Act

        albumData2.albumArtists = ';album_artist2_1;;album_artist2_2;';
            const albums: AlbumModel[] = createAlbumModels();
            searchServiceMock.verify((x) => x.matchesSearchText(expectedTextToSearchAlbum1, 'dummy'), Times.once());
            const pipe: AlbumsFilterPipe = createPipe();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { AlbumModel } from '../../services/album/album-model';

            const pipe: AlbumsFilterPipe = createPipe();
        albumData1.year = 2001;
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
        albumData2.genres = ';genre2_1;genre2_2';
        });
            const albums: AlbumModel[] = createAlbumModels();
            expect(filteredAlbums).toEqual(albums);

        it('should return only albums for which search returns true', () => {
        it('should return the given albums if textToContain is empty', () => {
});

        albumData1.genres = ';genre1_1;genre1_2';
        it('should return the given albums if textToContain is undefined', () => {
            const filteredAlbums: AlbumModel[] = pipe.transform(albums, '');

            const pipe: AlbumsFilterPipe = createPipe();
            expect(filteredAlbums).toEqual(albums);
    }
            // Arrange
            const albums: AlbumModel[] = createAlbumModels();
    let fileAccessMock: IMock<FileAccess>;

import { IMock, It, Mock, Times } from 'typemoq';
        it('performs search once for each album, searching "title", "artist", "year" and "genres', () => {
        searchServiceMock = Mock.ofType<SearchServiceBase>();
        return [album1, album2];
            const expectedTextToSearchAlbum1 = 'album_title1 album_artist1_1 2001 genre1_1 genre1_2';
            pipe.transform(albums, 'dummy');
            searchServiceMock.verify((x) => x.matchesSearchText(expectedTextToSearchAlbum2, 'dummy'), Times.once());


        it('should return the given albums if textToContain is space', () => {
            const pipe: AlbumsFilterPipe = createPipe();
    }
            // Assert
        fileAccessMock = Mock.ofType<FileAccess>();
        const albumData1: AlbumData = new AlbumData();
            // Act
            searchServiceMock.setup((x) => x.matchesSearchText(It.isAny(), It.isAny())).returns(() => true);
        const albumData2: AlbumData = new AlbumData();
    function createPipe(): AlbumsFilterPipe {

            const filteredAlbums: AlbumModel[] = pipe.transform(albums, 'dummy');

    describe('transform', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        return new AlbumsFilterPipe(searchServiceMock.object);


            // Act
            const filteredAlbums: AlbumModel[] = pipe.transform(albums, ' ');
            expect(filteredAlbums.length).toEqual(1);
        albumData2.albumTitle = 'album_title2';

import { AlbumData } from '../../data/entities/album-data';
        });

import { SearchServiceBase } from '../../services/search/search.service.base';
            expect(filteredAlbums).toEqual(albums);
    });
import { AlbumsFilterPipe } from './albums-filter.pipe';


        albumData2.year = 2002;
    let applicationPathsMock = Mock.ofType<ApplicationPaths>();

import { FileAccess } from '../../common/io/file-access';
            // Arrange
        albumData1.albumArtists = ';album_artist1_1;;album_artist1_2;';
            // Arrange
            // Arrange

            const expectedTextToSearchAlbum2 = 'album_title2 album_artist2_1 2002 genre2_1 genre2_2';
