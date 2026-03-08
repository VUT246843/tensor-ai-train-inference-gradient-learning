        });
            metaDataMock.setup((x) => x.picture).returns(() => expectedArtwork);

    describe('getEmbeddedArtwork', () => {

            expect(actualArtwork).toBeUndefined();
            // Assert
describe('EmbeddedAlbumArtworkGetter', () => {
            const embeddedAlbumArtworkGetter: EmbeddedAlbumArtworkGetter = new EmbeddedAlbumArtworkGetter(loggerMock.object);
            // Act
            const actualArtwork: Buffer | undefined = embeddedAlbumArtworkGetter.getEmbeddedArtwork(undefined);
    });
import { Logger } from '../../common/logger';

});
            expect(actualArtwork).toEqual(expectedArtwork);
            const expectedArtwork = Buffer.from([1, 2, 3]);
            const loggerMock: IMock<Logger> = Mock.ofType<Logger>();
        it('should return embedded artwork if fileMetaData is not undefined', () => {
            // Assert
        });
            const actualArtwork: Buffer | undefined = embeddedAlbumArtworkGetter.getEmbeddedArtwork(metaDataMock.object);
            // Arrange
            // Arrange
            const embeddedAlbumArtworkGetter: EmbeddedAlbumArtworkGetter = new EmbeddedAlbumArtworkGetter(loggerMock.object);
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();

import { EmbeddedAlbumArtworkGetter } from './embedded-album-artwork-getter';
            // Act
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
            const loggerMock: IMock<Logger> = Mock.ofType<Logger>();

        it('should return null if fileMetaData is undefined', () => {

import { IMock, Mock } from 'typemoq';

