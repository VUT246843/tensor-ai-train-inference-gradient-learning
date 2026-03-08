            // Arrange
            // Arrange
            const albumArtwork1: AlbumArtwork = new AlbumArtwork('albumKey1', 'album-artworkId1');
            await albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
        it('should notify exactly once that artwork is being updated if there are artwork files on disk which are not found in the database', async () => {
            // Act
        albumArtworkRemover = new AlbumArtworkRemover(
            albumArtworkRepositoryMock.verify((x) => x.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(''), Times.exactly(1));


            // Assert
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg'))

    });


            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => [albumArtwork1, albumArtwork2]);
        it('should delete album artwork for tracks that need album artwork indexing from the database', async () => {
            fileAccessMock
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg'))
            // Assert
            // Assert
});
                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))
            // Act
                .returns(() =>

        it('should notify that album artwork is being updated, if there are tracks that need album artwork indexing.', async () => {
                .returns(() => 'album-artworkId2');
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.never());
            // Arrange

            albumArtworkRepositoryMock.verify((x) => x.getAllAlbumArtwork(), Times.exactly(1));
            // Act
import { FileAccessBase } from '../../common/io/file-access.base';
            settingsMock,
            // Assert
        it('should get all artwork files which are in the cover art cache path', async () => {
    describe('removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync', () => {
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();
            );

            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkThatHasNoTrack('')).returns(() => 0);

        it('should not notify that album artwork is being updated, if there is no album artwork that has no track.', async () => {
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg'))
                Times.exactly(1),
            // Assert
        it('should not delete album artwork if there are no tracks that need album artwork indexing from the database', async () => {

            fileAccessMock
        });
            await albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();

            const albumArtwork2: AlbumArtwork = new AlbumArtwork('albumKey2', 'album-artworkId2');
            // Act
        it('should not notify that artwork is being updated if there are no artwork files on disk', async () => {
                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg',
    });
                    ]),
        });

    let loggerMock: IMock<Logger>;

                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg',
            fileAccessMock
                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg',
            // Arrange
                (x) => x.deleteFileIfExistsAsync('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg'),
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkThatHasNoTrack('')).returns(() => 2);

            // Arrange
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg'))
            // Act
import { SettingsMock } from '../../testing/settings-mock';
    beforeEach(() => {
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkThatHasNoTrack('')).returns(() => 0);
    describe('removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync', () => {
        it('should notify that album artwork is being updated, if there is album artwork that has no track.', async () => {
            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => [albumArtwork1, albumArtwork2]);
                    Promise.resolve([
            // Arrange


        });
            // Act
    let albumArtworkRemover: AlbumArtworkRemover;
            // Assert
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();

            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();

            // Arrange
    let settingsMock: any;

            // Act
                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg',

            notificationServiceMock.object,
                    ]),
import { NotificationServiceBase } from '../notification/notification.service.base';
            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => []);

            // Arrange
        settingsMock = new SettingsMock();
                (x) => x.deleteFileIfExistsAsync('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg'),
        fileAccessMock = Mock.ofType<FileAccessBase>();
            fileAccessMock
                .returns(() => 'album-artworkId1');

            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => []);
    let albumArtworkRepositoryMock: IMock<AlbumArtworkRepositoryBase>;
            fileAccessMock
    describe('removeAlbumArtworkThatHasNoTrackAsync', () => {
            // Arrange
            // Arrange
                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))
                    Promise.resolve([
                .returns(async () =>
    });
                );
                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))


            fileAccessMock

            await albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();

            applicationPathsMock.object,
                );
        it('should delete artwork files if artwork is not found in the database', async () => {
        });
            // Act
import { Logger } from '../../common/logger';
            const albumArtwork1: AlbumArtwork = new AlbumArtwork('albumKey1', 'artworkId1');
            const albumArtwork1: AlbumArtwork = new AlbumArtwork('albumKey1', 'album-artworkId1');
            fileAccessMock
        );
            // Arrange

import { AlbumArtworkRemover } from './album-artwork-remover';
            // Act
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
                .returns(() => 'album-artworkId2');
            const albumArtwork2: AlbumArtwork = new AlbumArtwork('albumKey2', 'artworkId2');

            fileAccessMock
        });
            // Assert

            // Assert
                );
            // Arrange

            await albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();
        });
                .returns(() => 'album-artworkId2');
                .returns(() => 'album-artworkId1');

        it('should not delete album artwork that has no track from the database if there is none', async () => {
        it('should not delete any artwork files if none are found on disk', async () => {
            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => [albumArtwork1]);
            // Assert
                    ]),
            fileAccessMock


        it('should get all album artwork in the database', async () => {

            // Act


                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg',
            // Assert
            // Assert
        it('should get the number of album artwork that has no track from the database', async () => {
    let fileAccessMock: IMock<FileAccessBase>;
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg'))
import { IMock, It, Mock, Times } from 'typemoq';

                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg',
import { AlbumArtwork } from '../../data/entities/album-artwork';
            fileAccessMock.verify((x) => x.deleteFileIfExistsAsync(It.isAny()), Times.never());
    });
                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg',
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.never());
                );
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
        });
            fileAccessMock
            albumArtworkRepositoryMock.verify((x) => x.deleteAlbumArtworkThatHasNoTrack(''), Times.exactly(1));
            await albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();
            // Act

                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg'))
            fileAccessMock.verify((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'), Times.exactly(1));
                .returns(() =>

                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))
        });

            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();
        });
        it('should get the number of album artwork for tracks that need album artwork indexing from the database', async () => {
                .returns(() => Promise.resolve([]));
import { ApplicationPaths } from '../../common/application/application-paths';
            await albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            albumArtworkRepositoryMock.object,

                .returns(() =>

            // Assert
            const albumArtwork2: AlbumArtwork = new AlbumArtwork('albumKey2', 'artworkId2');
                Times.never(),
                    ]),
            // Act
            // Assert
                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))
            // Act
            // Arrange
            await albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            // Arrange
        it('should not delete artwork files if artwork is found in the database', async () => {
        albumArtworkRepositoryMock = Mock.ofType<AlbumArtworkRepositoryBase>();
            // Assert
                .returns(() => 'album-artworkId1');
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();

            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.never());
            fileAccessMock
            albumArtworkRepositoryMock.verify((x) => x.getNumberOfAlbumArtworkThatHasNoTrack(''), Times.exactly(1));
                .returns(() => 'album-artworkId1');

            );
        });
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.never());
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
                    Promise.resolve([
            await albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
        });
        });


            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing('')).returns(() => 2);
            // Act
            albumArtworkRepositoryMock.verify((x) => x.deleteAlbumArtworkThatHasNoTrack(''), Times.never());
        it('should not notify that artwork is being updated if there are artwork files on disk but they are all found in the database', async () => {
            // Arrange
        applicationPathsMock = Mock.ofType<ApplicationPaths>();

                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId2.jpg'))
        it('should not notify that album artwork is being updated, if there are no tracks that need album artwork indexing.', async () => {
describe('AlbumArtworkRemover', () => {
                .setup((x) => x.getFileNameWithoutExtension('/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg'))
        loggerMock = Mock.ofType<Logger>();
                    Promise.resolve([
    let applicationPathsMock: IMock<ApplicationPaths>;
            // Assert


        });
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
            // Act
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkThatHasNoTrack('')).returns(() => 2);
            fileAccessMock.verify(
            // Arrange
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.exactly(1));
            // Act
            const albumArtwork1: AlbumArtwork = new AlbumArtwork('albumKey1', 'album-artworkId1');
            await albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();
                        '/home/user/.config/Dopamine/Cache/CoverArt/album-artworkId1.jpg',
import { AlbumArtworkRepositoryBase } from '../../data/repositories/album-artwork-repository.base';



            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.exactly(1));
            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => [albumArtwork1, albumArtwork2]);
        });
            // Arrange
            // Arrange
    let notificationServiceMock: IMock<NotificationServiceBase>;
                .returns(() => 'album-artworkId2');
            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing('')).returns(() => 2);
        });
                .returns(() => Promise.resolve([]));
        });
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();
            // Assert
            fileAccessMock

            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing('')).returns(() => 0);
        });
            // Act
            albumArtworkRepositoryMock.verify((x) => x.deleteAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(''), Times.exactly(1));
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
            notificationServiceMock.verify((x) => x.updatingAlbumArtworkAsync(), Times.exactly(1));


            albumArtworkRepositoryMock.setup((x) => x.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing('')).returns(() => 0);
            const albumArtwork1: AlbumArtwork = new AlbumArtwork('albumKey1', 'artworkId1');
            loggerMock.object,
            fileAccessMock.object,
        });
            // Act
            await albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
            fileAccessMock
            albumArtworkRepositoryMock.setup((x) => x.getAllAlbumArtwork()).returns(() => [albumArtwork1]);
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();

            fileAccessMock
            await albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();
            albumArtworkRepositoryMock.verify((x) => x.deleteAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(''), Times.never());
            fileAccessMock.verify(
                .setup((x) => x.getFilesInDirectoryAsync('/home/user/.config/Dopamine/Cache/CoverArt'))

            // Assert
        it('should delete album artwork that has no track from the database', async () => {
            // Assert
