    let loggerMock: IMock<Logger>;
            albumData1.albumKey = 'Album key 1';

    });
            const albumData1: AlbumData = new AlbumData();
    });
        });
    describe('constructor', () => {
        });
            const albumData1: AlbumData = new AlbumData();
            settingsMock,
            expect(returnedAlbums[0].albumKey).toEqual('Album key 1');

                .setup((x) => x.getAlbumDataForTrackArtists('', ['Source artist 1', 'Source artist 2']))

import { ApplicationPaths } from '../../common/application/application-paths';
            expect(returnedAlbums[1].albumKey).toEqual('Album key 2');
            albumData2.albumKey = 'Album key 2';
            albumData2.albumKey = 'Album key 2';

            const artist2: ArtistModel = new ArtistModel('Artist 2', translatorServiceMock.object);

        settingsMock = new SettingsMock();
        it('should return albums for track artists if albumData is found in the database', () => {
            const service: AlbumService = createService();
            albumData1.albumKey = 'Album key 1';
            const artist1: ArtistModel = new ArtistModel('Artist 1', translatorServiceMock.object);
                .setup((x) => x.getAlbumDataForAlbumArtists('', ['Source artist 1', 'Source artist 2']))
            expect(service).toBeDefined();
            albumData2.albumKey = 'Album key 2';
            trackRepositoryMock
        });
        artistServiceMock = Mock.ofType<ArtistServiceBase>();
            trackRepositoryMock.verify((x) => x.getAlbumDataForTrackArtists('', ['Source artist 1', 'Source artist 2']), Times.exactly(1));
            albumData1.albumKey = 'Album key 1';
            // Act


            trackRepositoryMock.verify((x) => x.getAllAlbumData(''), Times.exactly(1));
            const artist2: ArtistModel = new ArtistModel('Artist 2', translatorServiceMock.object);

        });
            const returnedAlbums: AlbumModel[] = service.getAllAlbums();
    });
            expect(returnedAlbums.length).toEqual(2);
            expect(returnedAlbums.length).toEqual(2);

            // Arrange

            // Assert
            albumData1.albumKey = 'Album key 1';
            const albumData1: AlbumData = new AlbumData();

            const albumDatas: AlbumData[] = [albumData1, albumData2];
            expect(returnedAlbums.length).toEqual(2);
                .returns(() => [albumData2]);
            const albumData1: AlbumData = new AlbumData();
    describe('getAlbumsForGenres', () => {
        });
    let artistServiceMock: IMock<ArtistServiceBase>;
import { FileAccessBase } from '../../common/io/file-access.base';
        return new AlbumService(

import { ArtistModel } from '../artist/artist-model';
import { SettingsBase } from '../../common/settings/settings.base';
            // Act
            expect(returnedAlbums[0].albumKey).toEqual('Album key 1');
            // Arrange
            // Arrange
import { Logger } from '../../common/logger';
            // Assert

        );
            albumData2.albumKey = 'Album key 2';
        it('should return albums for genres if albumData is found in the database', () => {
            // Assert
        it('should create', () => {

        });
                .returns(() => albumDatas);
});
            // Assert
            expect(returnedAlbums[0].albumKey).toEqual('Album key 1');
            const albumData2: AlbumData = new AlbumData();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const returnedAlbums: AlbumModel[] = service.getAlbumsForArtists([artist1, artist2], ArtistType.trackArtists);
import { IMock, Mock, Times } from 'typemoq';

            expect(returnedAlbums.length).toEqual(2);
            const service: AlbumService = createService();
import { AlbumData } from '../../data/entities/album-data';
    function createService(): AlbumService {
            const service: AlbumService = createService();
            artistServiceMock.setup((x) => x.getSourceArtists([artist1, artist2])).returns(() => ['Source artist 1', 'Source artist 2']);


            expect(returnedAlbums[1].albumKey).toEqual('Album key 2');

            trackRepositoryMock.setup((x) => x.getAlbumDataForGenres('', ['Genre 1', 'Genre 2'])).returns(() => albumDatas);
            trackRepositoryMock.setup((x) => x.getAllAlbumData('')).returns(() => albumDatas);
        loggerMock = Mock.ofType<Logger>();
            const service: AlbumService = createService();
            trackRepositoryMock.verify((x) => x.getAlbumDataForTrackArtists('', ['Source artist 1', 'Source artist 2']), Times.exactly(1));
            // Act
            const albums: AlbumModel[] = service.getAllAlbums();

    beforeEach(() => {

            trackRepositoryMock.verify((x) => x.getAlbumDataForAlbumArtists('', ['Source artist 1', 'Source artist 2']), Times.exactly(1));
            const albumDatas: AlbumData[] = [albumData1, albumData2];

                .setup((x) => x.getAlbumDataForAlbumArtists('', ['Source artist 1', 'Source artist 2']))
            // Arrange
                .setup((x) => x.getAlbumDataForTrackArtists('', ['Source artist 1', 'Source artist 2']))
import { SettingsMock } from '../../testing/settings-mock';
            // Arrange
            trackRepositoryMock.verify((x) => x.getAlbumDataForAlbumArtists('', ['Source artist 1', 'Source artist 2']), Times.exactly(1));
            expect(returnedAlbums[1].albumKey).toEqual('Album key 2');


            const returnedAlbums: AlbumModel[] = service.getAlbumsForArtists([artist1, artist2], ArtistType.allArtists);
            trackRepositoryMock
        it('should return albums for all artists if albumData is found in the database', () => {
            // Act

        it('should return albums for album artists if albumData is found in the database', () => {
            const albumData2: AlbumData = new AlbumData();
            const artist1: ArtistModel = new ArtistModel('Artist 1', translatorServiceMock.object);
import { AlbumModel } from './album-model';
            const service: AlbumService = createService();

            // Arrange
    });

            const service: AlbumService = createService();
            // Act
            expect(returnedAlbums[0].albumKey).toEqual('Album key 1');

            const artist1: ArtistModel = new ArtistModel('Artist 1', translatorServiceMock.object);
            albumData1.albumKey = 'Album key 1';
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
            trackRepositoryMock.object,
import { ArtistType } from '../artist/artist-type';

            trackRepositoryMock.verify((x) => x.getAlbumDataForGenres('', ['Genre 1', 'Genre 2']), Times.exactly(1));
            // Assert
            expect(returnedAlbums[0].albumKey).toEqual('Album key 1');
            expect(returnedAlbums[1].albumKey).toEqual('Album key 2');
    });

            artistServiceMock.setup((x) => x.getSourceArtists([artist1, artist2])).returns(() => ['Source artist 1', 'Source artist 2']);
import { AlbumService } from './album-service';
            // Assert
    let settingsMock: SettingsMock;
            const returnedAlbums: AlbumModel[] = service.getAlbumsForGenres(['Genre 1', 'Genre 2']);
            trackRepositoryMock


                .returns(() => [albumData1]);
    describe('getAllAlbums', () => {
        applicationPathsMock = Mock.ofType<ApplicationPaths>();

import { TranslatorServiceBase } from '../translator/translator.service.base';

            translatorServiceMock.object,
    describe('getAlbumsForArtists', () => {
            const artist2: ArtistModel = new ArtistModel('Artist 2', translatorServiceMock.object);
    let applicationPathsMock: IMock<ApplicationPaths>;
        it('should return all albums if albumData is found in the database', () => {
            const albumData2: AlbumData = new AlbumData();

        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
        });
            const service: AlbumService = createService();
            // Assert
            const albumDatas: AlbumData[] = [albumData1, albumData2];
            artistServiceMock.object,
describe('AlbumService', () => {

            const returnedAlbums: AlbumModel[] = service.getAlbumsForArtists([artist1, artist2], ArtistType.albumArtists);
    }
            expect(albums.length).toEqual(0);
            trackRepositoryMock
            const albumData1: AlbumData = new AlbumData();
                .returns(() => albumDatas);
            const albumData2: AlbumData = new AlbumData();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
            artistServiceMock.setup((x) => x.getSourceArtists([artist1, artist2])).returns(() => ['Source artist 1', 'Source artist 2']);
            // Act

            expect(returnedAlbums[1].albumKey).toEqual('Album key 2');

            loggerMock.object,
            albumData2.albumKey = 'Album key 2';
import { ArtistServiceBase } from '../artist/artist.service.base';
        it('should return an empty collection if no albumData is found in the database', () => {
            const albumData2: AlbumData = new AlbumData();

            expect(returnedAlbums.length).toEqual(2);
            const albumDatas: AlbumData[] = [albumData1, albumData2];
            applicationPathsMock.object,

            // Act
            trackRepositoryMock.setup((x) => x.getAllAlbumData('')).returns(() => undefined);
