

            metaDataMock.setup((x) => x.album).returns(() => 'My album title');


            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))

                .returns(() => Promise.resolve(expectedAlbumArtwork));

            // Act

            metaDataMock.setup((x) => x.title).returns(() => 'My track title');

import { OnlineAlbumArtworkGetter } from './online-album-artwork-getter';
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);
            lastfmApiMock
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);


                .returns(() => Promise.resolve(expectedAlbumArtwork));
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))

                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))
            // Act
        });
describe('OnlineAlbumArtworkGetter', () => {

            imageProcessorMock
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
        onlineAlbumArtworkGetter = new OnlineAlbumArtworkGetter(imageProcessorMock.object, lastfmApiMock.object, loggerMock.object);
    let lastfmApiMock: IMock<LastfmApi>;
                .returns(() => Promise.resolve(lastfmAlbum));

            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);

        });
            expect(actualAlbumArtwork).toBeUndefined();
        it('should return artwork if fileMetaData has titles and only track artists', async () => {
            // Assert
                .returns(() => Promise.resolve(lastfmAlbum));
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);

        it('should return artwork if fileMetaData has artists and titles', async () => {
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
            // Arrange
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
                .returns(() => Promise.resolve(lastfmAlbum));
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);
        it('should return undefined if fileMetaData is undefined', async () => {
                .throws(new Error('An error occurred'));
            metaDataMock.setup((x) => x.title).returns(() => 'My track title');
import { LastfmAlbum } from '../../common/api/lastfm/lastfm-album';
                .returns(() => Promise.resolve(expectedAlbumArtwork));
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
            // Act
        it('should return undefined if fileMetaData has artists but no titles', async () => {
            // Arrange


            imageProcessorMock
            // Arrange
                .returns(() => Promise.resolve(lastfmAlbum));
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
            // Arrange
        lastfmAlbum = new LastfmAlbum();
            lastfmApiMock
    let imageProcessorMock: IMock<ImageProcessor>;


            // Arrange
        it('should return artwork if fileMetaData has artists and only a track title', async () => {

            // Assert
    describe('getOnlineArtworkAsync', () => {
            imageProcessorMock
            imageProcessorMock
            imageProcessorMock
        });
            expect(actualAlbumArtwork).toBeUndefined();

import { LastfmApi } from '../../common/api/lastfm/lastfm.api';



        it('should return artwork if fileMetaData has artists and only an album title', async () => {
            lastfmApiMock

    });
            // Act
        });

                .returns(() => Promise.resolve(expectedAlbumArtwork));
            metaDataMock.setup((x) => x.album).returns(() => '');
            lastfmApiMock
            // Arrange
                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))

            // Act
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);
            // Assert
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);

        it('should return artwork if fileMetaData has titles and only album artists', async () => {
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
    beforeEach(() => {
    let loggerMock: IMock<Logger>;
            // Arrange
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();

            metaDataMock.setup((x) => x.title).returns(() => 'My track title');

            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);
                .returns(() => Promise.resolve(lastfmAlbum));
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            metaDataMock.setup((x) => x.artists).returns(() => []);
                .returns(() => Promise.resolve(lastfmAlbum));
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);


                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))

            lastfmApiMock
        it('should return undefined if getting online album info throws error', async () => {
            // Assert

                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);


        lastfmApiMock = Mock.ofType<LastfmApi>();
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            // Act

            imageProcessorMock
            lastfmApiMock

            // Arrange

            // Arrange
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            imageProcessorMock.setup((x) => x.convertOnlineImageToBufferAsync(It.isAnyString())).throws(new Error('An error occurred'));
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);
                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(undefined);
            metaDataMock.setup((x) => x.albumArtists).returns(() => []);
    });
            metaDataMock.setup((x) => x.title).returns(() => '');
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            expect(actualAlbumArtwork).toBeUndefined();
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
        imageProcessorMock = Mock.ofType<ImageProcessor>();
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);
                .returns(() => Promise.resolve(expectedAlbumArtwork));
            // Assert
        });
            metaDataMock.setup((x) => x.title).returns(() => 'My track title');
            // Assert
        });
            metaDataMock.setup((x) => x.title).returns(() => 'My track title');

                .returns(() => Promise.resolve(expectedAlbumArtwork));
                .returns(() => Promise.resolve(lastfmAlbum));
                .setup((x) => x.convertOnlineImageToBufferAsync('http://images.com/image.png'))

            lastfmApiMock
            // Assert
            // Assert
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
        it('should return undefined if converting file to data throws error', async () => {
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
});
            metaDataMock.setup((x) => x.album).returns(() => '');
    let lastfmAlbum: LastfmAlbum;
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();

            metaDataMock.setup((x) => x.title).returns(() => 'My track title');
                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
    let onlineAlbumArtworkGetter: OnlineAlbumArtworkGetter;
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);

            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
            metaDataMock.setup((x) => x.albumArtists).returns(() => ['Album artist 1', 'Album artist 2']);
            lastfmApiMock
            lastfmApiMock
            metaDataMock.setup((x) => x.album).returns(() => 'My album title');
        });


                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
import { Logger } from '../../common/logger';
        });
            imageProcessorMock
                .returns(() => Promise.resolve(expectedAlbumArtwork));
            metaDataMock.setup((x) => x.album).returns(() => 'My album title');
            metaDataMock.setup((x) => x.album).returns(() => 'My album title');
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            metaDataMock.setup((x) => x.album).returns(() => 'My album title');
            // Act


            expect(actualAlbumArtwork).toBeUndefined();


            metaDataMock.setup((x) => x.album).returns(() => 'My album title');
import { IMock, It, Mock } from 'typemoq';
            metaDataMock.setup((x) => x.title).returns(() => '');
            // Act
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);

            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();


        loggerMock = Mock.ofType<Logger>();

                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
            // Act

import { ImageProcessor } from '../../common/image-processor';

                .setup((x) => x.getAlbumInfoAsync(It.isAnyString(), It.isAnyString(), false, 'EN'))
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            const actualAlbumArtwork: Buffer | undefined = await onlineAlbumArtworkGetter.getOnlineArtworkAsync(metaDataMock.object);
            const expectedAlbumArtwork: Buffer = Buffer.from([1, 2, 3]);
            imageProcessorMock
            metaDataMock.setup((x) => x.artists).returns(() => ['Artist 1', 'Artist 2']);
                .returns(() => Promise.resolve(lastfmAlbum));
        });

        lastfmAlbum.imageMega = 'http://images.com/image.png';
            // Assert
                .returns(() => Promise.resolve(expectedAlbumArtwork));


