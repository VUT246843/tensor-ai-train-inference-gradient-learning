            expect(albumModel.artworkPath).toBeDefined();

            const expectedDateLastPlayedInTicks: number = 12369845;
        });
        });

            albumData.genres = ';Foo;;Bar/Baz;';
            // Act
            // Arrange
    let albumModel: AlbumModel;
        it('should return the albumData dateAdded', () => {
import { AlbumData } from '../../data/entities/album-data';
            translatorServiceMock.verify((x) => x.get('unknown-genre'), Times.once());

        });

            expect(artworkPath).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
            const expectedAlbumArtist: string = 'Artist 1';
            // Assert
            translatorServiceMock.verify((x) => x.get('unknown-genre'), Times.once());
            // Arrange
        });

            albumData.albumTitle = '';
        it('should return "Unknown genre" if albumData genres is empty', () => {
            const albumArtist: string = albumModel.albumArtist;
        it('should return "Unknown artist" if albumData albumArtists is empty and artists is undefined', () => {
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            expect(albumTitle).toEqual(expectedAlbumTitle);
            // Arrange
        albumData = new AlbumData();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            // Assert
            albumData.albumArtists = ';Album artist 1;;Album artist 2;';

            // Assert
        it('should create', () => {
            // Arrange
        it('should return albumData genres when there is one genre', () => {
            // Assert
            albumData.albumArtists = undefined;
describe('AlbumModel', () => {

        albumData.albumKey = 'my-album-key';
            const dateLastPlayedInTicks: number = albumModel.dateLastPlayedInTicks;

            // Assert
            // Act
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            const expectedAlbumTitle: string = 'Album title';


            albumData.artists = ';Artist 1;;Artist 2;';
            const albumArtist: string = albumModel.albumArtist;
        });
            const albumTitle: string = albumModel.albumTitle;
        it('should return albumData genres when there are several genres', () => {
            const dateFileCreatedInTicks: number = albumModel.dateFileCreatedInTicks;

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Assert
            // Assert
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);

            albumData.artists = ';Artist 1;;Artist 2;';
            // Assert
            // Arrange
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
        });
            // Arrange
            // Assert
        it('should return the albumData dateFileCreated', () => {
    });
            albumData.genres = undefined;



            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
        });
            expect(albumArtist).toEqual(expectedAlbumArtist);

            applicationPathsMock.setup((x) => x.coverArtFullPath('dummy')).returns(() => '/root/directory/dummy');
        });
        it('should return "Unknown title" if albumData albumTitle is undefined', () => {
            // Act
            const expectedAlbumArtist: string = 'Unknown artist';
            // Assert

            albumData.artists = undefined;
    describe('genres', () => {
            albumData.albumArtists = ';Album artist 1;;Album artist 2;';

            // Act

            expect(albumArtist).toEqual(expectedAlbumArtist);
            // Assert
            // Arrange
    beforeEach(() => {
        it('should return the albumData year', () => {
import { TranslatorServiceBase } from '../translator/translator.service.base';

            expect(albumModel).toBeDefined();

        it('should return full artwork path if albumData.artworkId is not undefined, empty or space.', () => {
            const expectedAlbumArtist: string = 'Unknown artist';
        it('should return "Unknown genre" if albumData genres is undefined', () => {
            // Arrange
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);

            albumData.artists = undefined;
            albumData.artists = '';
            // Assert
    describe('albumTitle', () => {
            albumData.artists = '';
            const albumTitle: string = albumModel.albumTitle;
            // Arrange

        });
            // Arrange
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
        });
            // Arrange
            // Act
        it('should return "Unknown artist" if albumData albumArtists is undefined and artists is empty', () => {

    });


            const genres: string[] = albumModel.genres;
    });

            const expectedAlbumTitle: string = 'Unknown title';

            // Act

            const genres: string[] = albumModel.genres;
            const expectedAlbumTitle: string = 'Unknown title';
            // Assert


        it('should return the first album artist if album albumArtists is not undefined and not empty, and artists is not undefined and not empty.', () => {
            const albumArtist: string = albumModel.albumArtist;
            expect(dateFileCreatedInTicks).toEqual(expectedDateFileCreatedInTicks);



            // Arrange
            expect(albumArtist).toEqual(expectedAlbumArtist);
        it('should return the first album artist if albumData albumArtists is not undefined and not empty, and artists is empty.', () => {
        albumData.albumTitle = 'Album title';
});
            // Act



            // Arrange
            albumData.artworkId = 'dummy';
            // Arrange
    });

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
        });
import { IMock, It, Mock, Times } from 'typemoq';
            albumData.albumArtists = undefined;
            const artworkPath: string = albumModel.artworkPath;

            expect(genres).toEqual(['Unknown genre']);

    });

        it('should return the first album artist if albumData albumArtists is not undefined and not empty, and artists is undefined.', () => {
        it('should return "Unknown artist" if albumData albumArtists and artists are undefined', () => {
        albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);

            expect(genres).toEqual(['Unknown genre']);
            expect(albumArtist).toEqual(expectedAlbumArtist);
            // Act


            // Arrange
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            albumData.artworkId = undefined;
            albumData.artists = '';


            // Act
        it('should return empty Gif if albumData.artworkId is empty', () => {
            expect(year).toEqual(expectedYear);
            // Arrange
            expect(artworkPath).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
        });

            // Assert

            // Assert

            const genres: string[] = albumModel.genres;

            // Arrange
        albumData.dateFileCreated = 987654321;
            expect(albumTitle).toEqual(expectedAlbumTitle);
            expect(genres).toEqual(['Foo', 'Bar/Baz']);
            // Act

        it('should return "Unknown genre" if albumData genres is white space', () => {
            // Assert
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Act
        albumData.dateLastPlayed = 12369845;
            // Assert

            expect(albumArtist).toEqual(expectedAlbumArtist);

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Assert
            albumData.artists = undefined;
            const expectedAlbumArtist: string = 'Album artist 1';
            // Act

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);


            // Act

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Act

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);

    });
            // Arrange
            const dateAddedInTicks: number = albumModel.dateAddedInTicks;
            // Assert
            expect(albumTitle).toEqual(expectedAlbumTitle);
            expect(artworkPath).toEqual('file:////root/directory/dummy');
            albumData.artworkId = ' ';

            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());

    describe('year', () => {
            // Arrange
        });



            const expectedAlbumArtist: string = 'Artist 1';

            // Arrange
        it('should return "Unknown title" if albumData albumTitle is empty', () => {
            expect(albumTitle).toEqual(expectedAlbumTitle);
            const albumArtist: string = albumModel.albumArtist;
            const albumArtist: string = albumModel.albumArtist;
        });
            albumData.albumArtists = '';

    describe('dateFileCreatedInTicks', () => {
        });
        });

            expect(dateAddedInTicks).toEqual(expectedDateAddedInTicks);
            // Act
        });
            // Act
            expect(albumArtist).toEqual(expectedAlbumArtist);
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert
    describe('albumArtist', () => {

            // Act
        });
            // Assert
        it('should return empty Gif if albumData.artworkId is undefined', () => {
            const expectedAlbumArtist: string = 'Album artist 1';
    describe('constructor', () => {

            const expectedAlbumArtist: string = 'Unknown artist';
        translatorServiceMock.setup((x) => x.get('unknown-genre')).returns(() => 'Unknown genre');
            expect(albumModel.isSelected).toBeFalsy();
            albumData.albumArtists = '';
            expect(genres).toEqual(['Foo']);
            const albumArtist: string = albumModel.albumArtist;
            // Assert
            expect(albumArtist).toEqual(expectedAlbumArtist);

            const albumArtist: string = albumModel.albumArtist;
            const year: number = albumModel.year;


            albumData.albumArtists = undefined;
        });
            // Act
            // Act
import { AlbumModel } from './album-model';
    describe('dateAddedInTicks', () => {

        it('should return empty gif if albumData.artworkId is space', () => {
import { ApplicationPaths } from '../../common/application/application-paths';
            // Assert
    describe('dateLastPlayedInTicks', () => {
            const genres: string[] = albumModel.genres;
            // Act
        });
        albumData.albumArtists = ';Album artist 1;;Album artist 2;';
        });

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);


        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');

        it('should return the albumData albumKey', () => {
            const expectedYear: number = 2021;
            const albumTitle: string = albumModel.albumTitle;

            albumData.genres = '';
        albumData.artists = ';Artist 1;;Artist 2;';
            albumData.albumTitle = 'Album title';
        albumData.genres = ';Foo;;Bar/Baz;';
            // Assert
            // Act


            // Arrange
        it('should return the albumData dateLastPlayed', () => {
    });
            // Assert
    describe('albumKey', () => {
        });
        it('should return the first artist if album albumArtists is undefined, and artists is not undefined and not empty.', () => {
            albumData.albumArtists = ';Album artist 1;;Album artist 2;';


            const albumKey: string = albumModel.albumKey;
            const expectedAlbumArtist: string = 'Album artist 1';

        it('should return albumData albumTitle if albumData albumTitle is not undefined, empty or white space.', () => {

    let albumData: AlbumData;
            const expectedAlbumKey: string = 'my-album-key';
            // Arrange
        });
            const expectedDateAddedInTicks: number = 123456789;
    });

    });
            // Act



            expect(genres).toEqual(['Unknown genre']);

        });
            expect(dateLastPlayedInTicks).toEqual(expectedDateLastPlayedInTicks);
            translatorServiceMock.verify((x) => x.get('unknown-genre'), Times.once());
            // Arrange
        it('should return "Unknown artist" if albumData albumArtists and artists are empty', () => {
            expect(artworkPath).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
    });
            // Arrange
        });
            albumData.albumTitle = undefined;


            // Arrange
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            albumData.artists = ';Artist 1;;Artist 2;';
            expect(albumKey).toEqual(expectedAlbumKey);
            // Act
            albumData.albumArtists = '';
            albumData.artworkId = '';
            // Act
            expect(albumArtist).toEqual(expectedAlbumArtist);

        it('should return the first artist if album albumArtists is empty, and artists is not undefined and not empty.', () => {

    let applicationPathsMock: IMock<ApplicationPaths>;
            // Assert
            // Act
            const albumArtist: string = albumModel.albumArtist;

            const albumArtist: string = albumModel.albumArtist;

            // Assert
            // Act


        });



            // Act
            // Assert
            // Act
        });
            // Arrange
            expect(albumArtist).toEqual(expectedAlbumArtist);
        it('should initialize isSelected as false', () => {


            const artworkPath: string = albumModel.artworkPath;
            const expectedAlbumTitle: string = 'Unknown title';
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            const artworkPath: string = albumModel.artworkPath;
    describe('artworkPath', () => {

            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            const artworkPath: string = albumModel.artworkPath;
            // Assert
            // Arrange

            const expectedDateFileCreatedInTicks: number = 987654321;
            albumData.albumTitle = ' ';
            const albumTitle: string = albumModel.albumTitle;
        });
        it('should return "Unknown title" if albumData albumTitle is white space', () => {
            albumModel = new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            const genres: string[] = albumModel.genres;
        albumData.year = 2021;
            // Act
            const expectedAlbumArtist: string = 'Unknown artist';
            // Act
            // Arrange
        });
        });
            // Arrange
            albumData.genres = ';Foo;';
    });
        translatorServiceMock.setup((x) => x.get('unknown-title')).returns(() => 'Unknown title');
            albumData.genres = ' ';
        albumData.dateAdded = 123456789;
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());

        it('should define artworkPath', () => {
            // Assert
            // Arrange

