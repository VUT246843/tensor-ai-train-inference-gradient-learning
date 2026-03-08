    let onlineAlbumArtworkGetterMock: IMock<OnlineAlbumArtworkGetter>;
    describe('getAlbumArtwork', () => {
            onlineAlbumArtworkGetterMock.setup((x) => x.getOnlineArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));
    beforeEach(() => {
            onlineAlbumArtworkGetterMock
            expect(actualAlbumArtwork).toBeUndefined();
            expect(actualAlbumArtwork).toBeUndefined();
    });
        albumArtworkGetter = new AlbumArtworkGetter(
        it('should return undefined when there is no embedded and no external and no online artwork', async () => {
            // Act
            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);
            // Assert

    });
            expect(actualAlbumArtwork).toBeUndefined();
    let externalAlbumArtworkGetterMock: IMock<ExternalAlbumArtworkGetter>;
            externalAlbumArtworkGetterMock

            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
        });
                .returns(() => Promise.resolve(expectedAlbumArtwork));


            // Assert
            onlineAlbumArtworkGetterMock.object,

            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, false);
            // Arrange
    let embeddedAlbumArtworkGetterMock: IMock<EmbeddedAlbumArtworkGetter>;

            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, true);


        });

            // Arrange
            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, true);
            externalAlbumArtworkGetterMock.setup((x) => x.getExternalArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));
            // Arrange
                .setup((x) => x.getOnlineArtworkAsync(It.isAny()))
        it('should return online artwork when settings require downloading missing covers when there is no embedded and no external artwork but there is online artwork and getOnlineArtwork is false', async () => {
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
                .returns(() => Promise.resolve(expectedAlbumArtwork));

            settingsStub.downloadMissingAlbumCovers = false;

            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, true);
        externalAlbumArtworkGetterMock = Mock.ofType<ExternalAlbumArtworkGetter>();

    let albumArtworkGetter: AlbumArtworkGetter;
            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => expectedAlbumArtwork);
            externalAlbumArtworkGetterMock.setup((x) => x.getExternalArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));

            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
                .setup((x) => x.getOnlineArtworkAsync(It.isAny()))
            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);
                .returns(() => Promise.resolve(expectedAlbumArtwork));
            // Assert
        it('should return undefined when settings do not require downloading missing covers when there is no embedded and no external artwork but there is online artwork and getOnlineArtwork is true', async () => {
            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);
            onlineAlbumArtworkGetterMock
            // Assert

            // Act
import { AlbumArtworkGetter } from './album-artwork-getter';

            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            // Arrange
        it('should return external artwork when there is no embedded artwork but there is external artwork', async () => {
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();

});

            // Act
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            expect(actualAlbumArtwork).toBe(expectedAlbumArtwork);
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();

        settingsStub = { downloadMissingAlbumCovers: true };


                .returns(() => Promise.resolve(expectedAlbumArtwork));
        it('should return undefined when settings do not require downloading missing covers when there is no embedded and no external artwork but there is online artwork and getOnlineArtwork is false', async () => {
            externalAlbumArtworkGetterMock.setup((x) => x.getExternalArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
        });
        );
            // Act
            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);

            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);
            // Assert
    let settingsStub: any;
            expect(actualAlbumArtwork).toBeUndefined();
describe('AlbumArtworkGetter', () => {
                .setup((x) => x.getOnlineArtworkAsync(It.isAny()))
            externalAlbumArtworkGetterMock.setup((x) => x.getExternalArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));
            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);
        });

        onlineAlbumArtworkGetterMock = Mock.ofType<OnlineAlbumArtworkGetter>();

            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);
                .returns(() => Promise.resolve(expectedAlbumArtwork));
            externalAlbumArtworkGetterMock.object,
            // Act
import { EmbeddedAlbumArtworkGetter } from './embedded-album-artwork-getter';
            externalAlbumArtworkGetterMock.setup((x) => x.getExternalArtworkAsync(It.isAny())).returns(() => Promise.resolve(undefined));
                .setup((x) => x.getExternalArtworkAsync(It.isAny()))
            onlineAlbumArtworkGetterMock
            settingsStub,
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
            // Arrange
            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);
            // Act
            // Assert
            // Act
            onlineAlbumArtworkGetterMock

                .setup((x) => x.getOnlineArtworkAsync(It.isAny()))
            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);
            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, true);
            // Assert
            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);
import { IMock, It, Mock } from 'typemoq';
        });




            embeddedAlbumArtworkGetterMock.setup((x) => x.getEmbeddedArtwork(It.isAny())).returns(() => undefined);

            embeddedAlbumArtworkGetterMock.object,
            const metaDataMock: IMock<IFileMetadata> = Mock.ofType<IFileMetadata>();
import { OnlineAlbumArtworkGetter } from './online-album-artwork-getter';
            // Arrange

        it('should return embedded artwork when there is embedded artwork', async () => {
            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, true);
        it('should return online artwork when settings require downloading missing covers when there is no embedded and no external artwork but there is online artwork and getOnlineArtwork is true', async () => {
            const actualAlbumArtwork: Buffer | undefined = await albumArtworkGetter.getAlbumArtworkAsync(metaDataMock.object, false);
        embeddedAlbumArtworkGetterMock = Mock.ofType<EmbeddedAlbumArtworkGetter>();
        });

import { ExternalAlbumArtworkGetter } from './external-album-artwork-getter';
        });
            // Arrange
            const expectedAlbumArtwork = Buffer.from([1, 2, 3]);
