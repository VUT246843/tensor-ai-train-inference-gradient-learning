        });
        it('should remove artwork that is not in the database from disk', async () => {
            // Assert
        });
            albumArtworkAdderMock.verify((x) => x.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync(), Times.exactly(1));
    let albumArtworkAdderMock: IMock<AlbumArtworkAdder>;
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();

        });
    let albumArtworkRemoverMock: IMock<AlbumArtworkRemover>;
    describe('indexAlbumArtworkAsync', () => {
            await albumArtworkIndexer.indexAlbumArtworkAsync();
import { AlbumArtworkRemover } from './album-artwork-remover';

    let albumArtworkIndexer: AlbumArtworkIndexer;
            albumArtworkAdderMock.object,
        it('should remove artwork that has no track', async () => {
import { IMock, Mock, Times } from 'typemoq';
            // Arrange, Act
            // Assert

        albumArtworkIndexer = new AlbumArtworkIndexer(
    });
        });
    let notificationServiceMock: IMock<NotificationServiceBase>;
            // Arrange, Act


import { AlbumArtworkAdder } from './album-artwork-adder';
            await albumArtworkIndexer.indexAlbumArtworkAsync();

            // Assert
            albumArtworkRemoverMock.verify((x) => x.removeAlbumArtworkThatHasNoTrackAsync(), Times.exactly(1));
            // Arrange, Act
import { AlbumArtworkIndexer } from './album-artwork-indexer';
        it('should add artwork for tracks that need album artwork indexing', async () => {
import { NotificationServiceBase } from '../notification/notification.service.base';

    beforeEach(() => {
        it('should dismiss the indexing notification', async () => {
describe('AlbumArtworkIndexer', () => {
        it('should remove artwork for tracks that need album artwork indexing', async () => {
            notificationServiceMock.verify((x) => x.dismiss(), Times.exactly(1));
            notificationServiceMock.object,
            await albumArtworkIndexer.indexAlbumArtworkAsync();
        });
            await albumArtworkIndexer.indexAlbumArtworkAsync();

        loggerMock = Mock.ofType<Logger>();

import { Logger } from '../../common/logger';
    let loggerMock: IMock<Logger>;

            await albumArtworkIndexer.indexAlbumArtworkAsync();

        albumArtworkRemoverMock = Mock.ofType<AlbumArtworkRemover>();
        albumArtworkAdderMock = Mock.ofType<AlbumArtworkAdder>();
            albumArtworkRemoverMock.object,

        );
            // Arrange, Act
            albumArtworkRemoverMock.verify((x) => x.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync(), Times.exactly(1));
    });
            // Assert
});
            // Arrange, Act
            loggerMock.object,
            albumArtworkRemoverMock.verify((x) => x.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync(), Times.exactly(1));
            // Assert
