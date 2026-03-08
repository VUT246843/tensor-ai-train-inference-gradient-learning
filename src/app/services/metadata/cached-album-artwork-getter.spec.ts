    });
            // Act
            trackRepositoryMock.setup((x) => x.getAlbumDataForAlbumKey('', albumKey)).returns(() => [albumData1, albumData2]);
            // Act
    let applicationPathsMock: IMock<ApplicationPaths>;
            trackRepositoryMock.setup((x) => x.getAlbumDataForAlbumKey('', albumKey)).returns(() => []);
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
            // Assert

        });
            // Assert
    }
            // Arrange
            expect(cachedAlbumArtworkPath).toEqual('/my/path/id1');
import { FileAccessBase } from '../../common/io/file-access.base';

            const albumKey: string = 'my-album-key';

            const albumData2: AlbumData = createAlbumData('id2');
        it('should return cached album artwork path if something found for given albumKey', () => {
            // Act

            // Arrange
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            // Arrange
        });

    beforeEach(() => {

            const instance: CachedAlbumArtworkGetter = createInstance();
    });
import { ApplicationPaths } from '../../common/application/application-paths';
        it('should create', () => {

            applicationPathsMock.setup((x) => x.coverArtFullPath('id1')).returns(() => '/my/path/id1');
            // Assert
    });
    function createInstance(): CachedAlbumArtworkGetter {
import { IFileMetadata } from '../../common/metadata/i-file-metadata';

import { AlbumData } from '../../data/entities/album-data';
    describe('constructor', () => {

describe('CachedAlbumArtworkGetter', () => {
});
import { CachedAlbumArtworkGetter } from './cached-album-artwork-getter';
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
        return new CachedAlbumArtworkGetter(trackRepositoryMock.object, applicationPathsMock.object, settingsMock);
            const albumKey: string = 'my-album-key';

            expect(instance).toBeDefined();
    describe('getCachedAlbumArtworkPath', () => {
        albumData.artworkId = artworkId;

import { IMock, Mock } from 'typemoq';
    function createAlbumData(artworkId: string): AlbumData {
        settingsMock = new SettingsMock();
            const instance: CachedAlbumArtworkGetter = createInstance();

        });
            const cachedAlbumArtworkPath: string = instance.getCachedAlbumArtworkPath(albumKey);
    let settingsMock: any;
            expect(cachedAlbumArtworkPath).toEqual('');
        const albumData: AlbumData = new AlbumData();
import { SettingsMock } from '../../testing/settings-mock';

    let trackRepositoryMock: IMock<TrackRepositoryBase>;
        return albumData;


            const cachedAlbumArtworkPath: string = instance.getCachedAlbumArtworkPath(albumKey);
            const instance: CachedAlbumArtworkGetter = createInstance();
        it('should return empty string if nothing found for given albumKey', () => {
            const albumData1: AlbumData = createAlbumData('id1');
    }
