import { IMock, Mock, Times } from 'typemoq';
                (x) => x.createFullDirectoryPathIfDoesNotExist('/home/user/.config/Dopamine/Cache/CoverArt'),
            const imageBuffer = Buffer.from([1, 2, 3]);
                    ),
        it('should create the full directory path to the artwork cache if it does not exist', () => {
            // Assert
            service = new AlbumArtworkCacheService(

            // Arrange
            imageProcessorMock


        });
            const albumArtworkCacheId: AlbumArtworkCacheId | undefined = await service.addArtworkDataToCacheAsync(undefined);
            );
            expect(service).toBeDefined();
        it('should return undefined when the data is undefined', async () => {
            // Arrange
        it('should return a valid AlbumArtworkCacheId when the data is not empty', async () => {
import { FileAccessBase } from '../../common/io/file-access.base';

        guidFactoryMock = Mock.ofType<GuidFactory>();
            albumArtworkCacheIdFactoryMock.setup((x) => x.create()).returns(() => albumArtworkCacheIdToCreate);
    describe('addArtworkDataToCacheAsync', () => {
            const albumArtworkCacheIdToCreate: AlbumArtworkCacheId = new AlbumArtworkCacheId(guidFactoryMock.object);
    });
            albumArtworkCacheIdFactoryMock.setup((x) => x.create()).returns(() => albumArtworkCacheIdToCreate);
            applicationPathsMock.setup((x) => x.coverArtFullPath(albumArtworkCacheIdToCreate.id)).returns(() => cachedArtworkFilePath);
                .returns(() => Promise.resolve(resizedImageBuffer));
        );
            // Act
            // Act
            // Arrange
        it('should return undefined when the data is empty', async () => {
            applicationPathsMock.object,
        });
            // Act
            // Assert
            const albumArtworkCacheIdToCreate: AlbumArtworkCacheId = new AlbumArtworkCacheId(guidFactoryMock.object);
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/.config/Dopamine/Cache/CoverArt');
import { AlbumArtworkCacheIdFactory } from './album-artwork-cache-id-factory';
    let imageProcessorMock: IMock<ImageProcessor>;
            loggerMock.object,

            // Arrange
            applicationPathsMock.setup((x) => x.coverArtFullPath(albumArtworkCacheIdToCreate.id)).returns(() => cachedArtworkFilePath);
    });
        });
            const albumArtworkCacheIdToCreate: AlbumArtworkCacheId = new AlbumArtworkCacheId(guidFactoryMock.object);
    beforeEach(() => {
            const imageBuffer = Buffer.alloc(0);
            );
        albumArtworkCacheIdFactoryMock = Mock.ofType<AlbumArtworkCacheIdFactory>();
    });
                )
import { ApplicationPaths } from '../../common/application/application-paths';


    let loggerMock: IMock<Logger>;
        it('should save thumbnail to file when the data is not empty', async () => {
import { AlbumArtworkCacheService } from './album-artwork-cache.service';

                        Constants.cachedCoverArtMaximumSize,
    let service: AlbumArtworkCacheService;
            const resizedImageBuffer = Buffer.from([4, 5, 6]);
            await service.removeArtworkDataFromCacheAsync(albumArtworkCacheIdToCreate.id);
    let fileAccessMock: IMock<FileAccessBase>;
            fileAccessMock.verify(
            albumArtworkCacheIdFactoryMock.setup((x) => x.create()).returns(() => albumArtworkCacheIdToCreate);

            // Assert
                applicationPathsMock.object,
            // Assert
    let albumArtworkCacheIdFactoryMock: IMock<AlbumArtworkCacheIdFactory>;

        });
            // Arrange
            expect(albumArtworkCacheId).toBeUndefined();
});
        it('should delete cached artwork file if it exists', async () => {

                        Constants.cachedCoverArtMaximumSize,
            fileAccessMock.verify((x) => x.deleteFileIfExistsAsync(cachedArtworkFilePath), Times.exactly(1));
    describe('constructor', () => {

            // Arrange
import { AlbumArtworkCacheId } from './album-artwork-cache-id';
        imageProcessorMock = Mock.ofType<ImageProcessor>();

            const imageBuffer = Buffer.from([1, 2, 3]);

            const albumArtworkCacheIdToReturn: AlbumArtworkCacheId | undefined = await service.addArtworkDataToCacheAsync(imageBuffer);
            imageProcessorMock.object,
            const cachedArtworkFilePath: string = '/home/user/Dopamine/Cache/CoverArt/Dummy.jpg';
            applicationPathsMock.setup((x) => x.coverArtCacheFullPath()).returns(() => '/home/user/Dopamine/Cache/CoverArt');


import { GuidFactory } from '../../common/guid.factory';
    let applicationPathsMock: IMock<ApplicationPaths>;
                loggerMock.object,


                Times.exactly(1),
                imageProcessorMock.object,
        service = new AlbumArtworkCacheService(
            albumArtworkCacheIdFactoryMock.object,
            // Act
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            imageProcessorMock.verify((x) => x.convertImageBufferToFileAsync(resizedImageBuffer, cachedArtworkFilePath), Times.once());
                        Constants.cachedCoverArtJpegQuality,
        loggerMock = Mock.ofType<Logger>();
                fileAccessMock.object,

        });
            expect(albumArtworkCacheIdToCreate.id).toEqual(albumArtworkCacheIdToReturn!.id);
                        imageBuffer,
                albumArtworkCacheIdFactoryMock.object,
        fileAccessMock = Mock.ofType<FileAccessBase>();
        });
                .setup((x) =>
            // Assert
            // Act
    let guidFactoryMock: IMock<GuidFactory>;
            // Assert
import { Logger } from '../../common/logger';
            await service.addArtworkDataToCacheAsync(imageBuffer);
            // Act

    describe('removeArtworkDataFromCache', () => {
            const cachedArtworkFilePath: string = '/home/user/Dopamine/Cache/CoverArt/Dummy.jpg';
import { Constants } from '../../common/application/constants';
            expect(albumArtworkCacheId).toBeUndefined();
            fileAccessMock.object,
import { ImageProcessor } from '../../common/image-processor';


        it('should create', () => {
    });
describe('AlbumArtworkCacheService', () => {
                    x.toResizedJpegBufferAsync(
            const albumArtworkCacheId: AlbumArtworkCacheId | undefined = await service.addArtworkDataToCacheAsync(imageBuffer);
        });
