    let externalArtworkPathGetterMock: IMock<ExternalArtworkPathGetter>;
            imageProcessorMock


        );
import { IFileMetadata } from '../../common/metadata/i-file-metadata';

            externalArtworkPathGetterMock
        loggerMock = Mock.ofType<Logger>();

    let loggerMock: IMock<Logger>;
            // Arrange
            const expectedArtwork = Buffer.from([1, 2, 3]);
    beforeEach(() => {
            const actualArtwork: Buffer | undefined = await externalAlbumArtworkGetter.getExternalArtworkAsync(metaDataMock.object);
            loggerMock.object,
import { ExternalArtworkPathGetter } from './external-artwork-path-getter';
        externalAlbumArtworkGetter = new ExternalAlbumArtworkGetter(
            // Arrange

            // Act

    let imageProcessorMock: IMock<ImageProcessor>;
            // Act
                .returns(() => Promise.resolve(''));
            const actualArtwork: Buffer | undefined = await externalAlbumArtworkGetter.getExternalArtworkAsync(metaDataMock.object);
            // Assert
        });
            // Assert
        imageProcessorMock = Mock.ofType<ImageProcessor>();
            // Act
});
            // Arrange
            const actualArtwork: Buffer | undefined = await externalAlbumArtworkGetter.getExternalArtworkAsync(undefined);
import { ExternalAlbumArtworkGetter } from './external-album-artwork-getter';
            expect(actualArtwork).toBeUndefined();
            externalArtworkPathGetterMock.object,

describe('ExternalAlbumArtworkGetter', () => {
            expect(actualArtwork).toBeUndefined();

            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
        it('should return undefined if fileMetaData is not undefined and external artwork path is empty', async () => {
            // Act
import { IMock, Mock } from 'typemoq';
                .setup((x) => x.getExternalArtworkPathAsync('/home/MyUser/Music/track.mp3'))

    describe('getExternalArtworkAsync', () => {
        it('should return undefined if fileMetaData is not undefined and external artwork path is space', async () => {
                .returns(() => Promise.resolve('  '));
            // Assert
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
        externalArtworkPathGetterMock = Mock.ofType<ExternalArtworkPathGetter>();
            imageProcessorMock.object,
        });
            externalArtworkPathGetterMock
    let externalAlbumArtworkGetter: ExternalAlbumArtworkGetter;
            metaDataMock.setup((x) => x.path).returns(() => '/home/MyUser/Music/track.mp3');

            externalArtworkPathGetterMock
    });


import { Logger } from '../../common/logger';
            // Arrange

            // Assert

        it('should return external artwork if fileMetaData is not undefined and an external artwork path was found', async () => {
                .returns(() => Promise.resolve(expectedArtwork));
import { ImageProcessor } from '../../common/image-processor';
                .setup((x) => x.convertLocalImageToBufferAsync('/home/MyUser/Music/front.png'))

                .returns(() => Promise.resolve('/home/MyUser/Music/front.png'));
                .setup((x) => x.getExternalArtworkPathAsync('/home/MyUser/Music/track.mp3'))

            expect(actualArtwork).toBe(expectedArtwork);
            metaDataMock.setup((x) => x.path).returns(() => '/home/MyUser/Music/track.mp3');
        it('should return undefined if fileMetaData is undefined', async () => {
                .setup((x) => x.getExternalArtworkPathAsync('/home/MyUser/Music/track.mp3'))
            const actualArtwork: Buffer | undefined = await externalAlbumArtworkGetter.getExternalArtworkAsync(metaDataMock.object);
            metaDataMock.setup((x) => x.path).returns(() => '/home/MyUser/Music/track.mp3');


        });
            expect(actualArtwork).toBeUndefined();

    });
        });
