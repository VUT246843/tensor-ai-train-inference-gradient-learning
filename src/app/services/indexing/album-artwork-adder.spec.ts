    public async loadAsync(): Promise<void> {}
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
        albumArtworkRepositoryMock = Mock.ofType<AlbumArtworkRepositoryBase>();
            // Act
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            trackRepositoryMock.verify((x) => x.getAlbumDataThatNeedsIndexing(''), Times.exactly(1));
        });
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
            fileMetadataFactoryMock.verify((x) => x.createAsync(It.isAny()), Times.never());
import { Track } from '../../data/entities/track';
            // Assert
            fileMetadataFactoryMock.object,
            // Assert
            // Act
        );

        settingsMock = new SettingsMock();

            // Act
                .returns(() => Promise.resolve(fileMetadataStub));
            const fileMetadataStub = new FileMetadataImplementation();
    });
            albumArtworkCacheServiceMock.object,
            albumArtworkRepositoryMock.verify((x) => x.addAlbumArtwork(newAlbumArtwork1), Times.exactly(1));
        it('should notify that album artwork is being updated if it is the first time that indexing runs', async () => {
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => []);
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
        it('should add album artwork to the cache if album artwork data was found', async () => {
    public artists: string[];
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
}
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
            albumData1.albumKey = 'AlbumKey1';
            const albumData1: AlbumData = new AlbumData();
            // Arrange
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
        });
            const albumArtworkData1: Buffer = Buffer.from([1, 2, 3]);
    public genres: string[];
            const albumArtworkCacheId1: AlbumArtworkCacheId = new AlbumArtworkCacheId(guidFactoryMock.object);


        it('should get album artwork if a read-only file metadata was created', async () => {
                .returns(() => Promise.resolve(undefined));
            albumData1.albumKey = 'AlbumKey1';

            // Arrange
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
            const albumArtworkCacheId1: AlbumArtworkCacheId = new AlbumArtworkCacheId(guidFactoryMock.object);
import { SettingsBase } from '../../common/settings/settings.base';
            albumArtworkCacheServiceMock.verify((x) => x.addArtworkDataToCacheAsync(It.isAny()), Times.never());
            // Act

            const albumData1: AlbumData = new AlbumData();

            const albumData1: AlbumData = new AlbumData();
            // Arrange
            const fileMetadataStub = new FileMetadataImplementation();

            // Act
        it('should not get the last modified track for an album key if there is no album data that needs indexing', async () => {
            const albumData1: AlbumData = new AlbumData();
            const track1: Track = new Track('/home/user/Music/track1.mp3');

            const albumArtworkData1: Buffer = Buffer.from([1, 2, 3]);
            // Arrange
            albumArtworkGetterMock
            // Assert
        it('should create a read-only file metadata if there is a last modified track for the given album key', async () => {
import { AlbumData } from '../../data/entities/album-data';
    public discNumber: number;
    public rating: number;


    public trackCount: number;

                .returns(() => Promise.resolve(fileMetadataStub));


            albumArtworkRepositoryMock.verify((x) => x.addAlbumArtwork(It.isAny()), Times.never());
            loggerMock.object,
                .returns(() => Promise.resolve(albumArtworkData1));
            // Act

            albumArtworkCacheServiceMock

            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            const track1: Track = new Track('/home/user/Music/track1.mp3');

import { AlbumArtworkAdder } from './album-artwork-adder';
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.never());
class FileMetadataImplementation implements IFileMetadata {
            // Assert
            const albumData1: AlbumData = new AlbumData();
            albumData1.albumKey = 'AlbumKey1';
    let loggerMock: IMock<Logger>;
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
            // Act
import { IMock, It, Mock, Times } from 'typemoq';
    let albumArtworkRepositoryMock: IMock<AlbumArtworkRepositoryBase>;
            fileMetadataFactoryMock.verify((x) => x.createAsync('/home/user/Music/track1.mp3'), Times.exactly(1));
            // Assert
    let albumArtworkGetterMock: IMock<AlbumArtworkGetter>;
import { AlbumArtworkCacheId } from '../album-artwork-cache/album-artwork-cache-id';
                .returns(() => Promise.resolve(albumArtworkData1));
            // Act
            const fileMetadataStub = new FileMetadataImplementation();
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
    public trackNumber: number;

            albumArtworkCacheServiceMock
    public grouping: string;
            // Assert


                .returns(() => Promise.resolve(undefined));
        fileMetadataFactoryMock = Mock.ofType<FileMetadataFactory>();
describe('AlbumArtworkAdder', () => {

                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))

                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))
            // Assert
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
            fileMetadataFactoryMock
    public discCount: number;
import { AlbumArtworkRepositoryBase } from '../../data/repositories/album-artwork-repository.base';
    public save(): void {}




                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))

        albumArtworkGetterMock = Mock.ofType<AlbumArtworkGetter>();
            // Assert
                .returns(() => Promise.resolve(fileMetadataStub));

            // Arrange
            trackRepositoryMock.verify((x) => x.disableNeedsAlbumArtworkIndexing('AlbumKey1'), Times.exactly(1));
            const albumData1: AlbumData = new AlbumData();

            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
                .setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true))

            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
import { AlbumArtworkGetter } from './album-artwork-getter';

        it('should get album data that needs indexing', async () => {
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            albumData1.albumKey = 'AlbumKey1';
            // Assert
    let albumArtworkAdder: AlbumArtworkAdder;
                .returns(() => Promise.resolve(fileMetadataStub));

            // Arrange
    public picture: Buffer;
    public conductor: string;
    public year: number;
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))

        albumArtworkAdder = new AlbumArtworkAdder(

                .returns(() => Promise.resolve(albumArtworkCacheId1));
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
            // Act
            albumData1.albumKey = 'AlbumKey1';

            // Arrange
        albumArtworkCacheServiceMock = Mock.ofType<AlbumArtworkCacheServiceBase>();
import { AlbumArtwork } from '../../data/entities/album-artwork';
            albumArtworkCacheServiceMock
                .setup((x) => x.addArtworkDataToCacheAsync(albumArtworkData1))
        });
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            const track1: Track = new Track('/home/user/Music/track1.mp3');
        });
            // Arrange
    let albumArtworkCacheServiceMock: IMock<AlbumArtworkCacheServiceBase>;
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtwork()).returns(() => 10);
                .setup((x) => x.addArtworkDataToCacheAsync(albumArtworkData1))
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
        it('should get the last modified track for an album key if there is album data that needs indexing', async () => {
    public lyrics: string;
        });


            const fileMetadataStub = new FileMetadataImplementation();
    public path: string;
    let settingsMock: SettingsBase;
            // Act
            // Act
        it('should not create a read-only file metadata if there is no last modified track for the given album key', async () => {
    public composers: string[];
                .returns(() => Promise.resolve(albumArtworkData1));
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();

                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))
            const albumData1: AlbumData = new AlbumData();
            albumArtworkGetterMock
            fileMetadataFactoryMock



            albumData1.albumKey = 'AlbumKey1';
            const albumData1: AlbumData = new AlbumData();
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
    public title: string;
            settingsMock,

            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
            // Assert
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            // Assert
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
                .setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true))


            // Act

            albumData1.albumKey = 'AlbumKey1';
import { FileMetadataFactory } from '../../common/metadata/file-metadata.factory';

            // Act
                .setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true))

            notificationServiceMock.object,


            albumData1.albumKey = 'AlbumKey1';
    public albumArtists: string[];
        it('should not add album artwork to the cache if no album artwork data was found', async () => {
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
                .returns(() => Promise.resolve(fileMetadataStub));
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
        guidFactoryMock = Mock.ofType<GuidFactory>();
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
import { AlbumArtworkCacheServiceBase } from '../album-artwork-cache/album-artwork-cache.service.base';

        });
    public comment: string;
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true)).returns(() => Promise.resolve(undefined));
            albumData1.albumKey = 'AlbumKey1';
            // Arrange

        });
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
            const track1: Track = new Track('/home/user/Music/track1.mp3');

                .setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true))
            trackRepositoryMock.verify((x) => x.disableNeedsAlbumArtworkIndexing('AlbumKey1'), Times.never());
    public sampleRate: number;
            // Assert
            const albumArtworkData1: Buffer = Buffer.from([1, 2, 3]);
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();

            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => undefined);
        });
    describe('addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync', () => {
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            // Assert
    beforeEach(() => {
    });
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtwork()).returns(() => 0);
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
import { GuidFactory } from '../../common/guid.factory';

                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))
                .setup((x) => x.addArtworkDataToCacheAsync(albumArtworkData1))
            // Act
            const albumData1: AlbumData = new AlbumData();
            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
        it('should not add album artwork to the database if the artwork was not added to the cache', async () => {
    let notificationServiceMock: IMock<NotificationServiceBase>;
            trackRepositoryMock.verify((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1'), Times.exactly(1));
            // Arrange
            albumArtworkGetterMock
            const albumData1: AlbumData = new AlbumData();
                .setup((x) => x.createAsync('/home/user/Music/track1.mp3'))
            // Assert
            // Arrange


            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
import { Logger } from '../../common/logger';
                .returns(() => Promise.resolve(fileMetadataStub));
});

            const fileMetadataStub = new FileMetadataImplementation();
                .setup((x) => x.addArtworkDataToCacheAsync(albumArtworkData1))
            fileMetadataFactoryMock
            albumArtworkGetterMock
        });

            albumArtworkCacheServiceMock.verify((x) => x.addArtworkDataToCacheAsync(albumArtworkData1), Times.exactly(1));
            fileMetadataFactoryMock

            trackRepositoryMock.setup((x) => x.getLastModifiedTrackForAlbumKeyAsync('', 'AlbumKey1')).returns(() => track1);
        it('should disable album artwork indexing for the given album key if the artwork was added to the cache', async () => {
import { NotificationServiceBase } from '../notification/notification.service.base';
            albumArtworkRepositoryMock.object,
    public beatsPerMinute: number;
            const fileMetadataStub = new FileMetadataImplementation();

    public album: string;
            albumData1.albumKey = 'AlbumKey1';
    public bitRate: number;

            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            albumArtworkCacheServiceMock
                .returns(() => Promise.resolve(albumArtworkCacheId1));
            albumArtworkGetterMock.verify((x) => x.getAlbumArtworkAsync(It.isAny(), true), Times.exactly(1));
            // Arrange
        it('should add album artwork to the database if the artwork was added to the cache', async () => {
                .setup((x) => x.getAlbumArtworkAsync(fileMetadataStub, true))
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            await albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            trackRepositoryMock.object,
        });
        it('should not notify that album artwork is being updated if it is not the first time that indexing runs', async () => {
    let guidFactoryMock: IMock<GuidFactory>;

            albumArtworkGetterMock.object,

        it('should not disable album artwork indexing for the given album key if the artwork was not added to the cache', async () => {
            albumData1.albumKey = 'AlbumKey1';
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
    public durationInMilliseconds: number;
            const fileMetadataStub = new FileMetadataImplementation();
import { SettingsMock } from '../../testing/settings-mock';
            trackRepositoryMock.verify((x) => x.getLastModifiedTrackForAlbumKeyAsync('', It.isAny()), Times.never());
            fileMetadataFactoryMock

                .returns(() => Promise.resolve(albumArtworkData1));
            const albumArtworkData1: Buffer = Buffer.from([1, 2, 3]);
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.exactly(1));

            albumData1.albumKey = 'AlbumKey1';
        });

                .returns(() => Promise.resolve(albumArtworkData1));
                .returns(() => Promise.resolve(fileMetadataStub));
        });
        });
            const newAlbumArtwork1: AlbumArtwork = new AlbumArtwork('AlbumKey1', albumArtworkCacheId1.id);
            const albumData1: AlbumData = new AlbumData();
            fileMetadataFactoryMock
    let fileMetadataFactoryMock: IMock<FileMetadataFactory>;
            albumArtworkGetterMock
        loggerMock = Mock.ofType<Logger>();
            const albumData1: AlbumData = new AlbumData();

        });

            // Arrange
            trackRepositoryMock.setup((x) => x.getAlbumDataThatNeedsIndexing('')).returns(() => [albumData1]);
            fileMetadataFactoryMock
            // Arrange
            const albumArtworkData1: Buffer = Buffer.from([1, 2, 3]);
