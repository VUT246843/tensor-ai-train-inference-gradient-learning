        imageProcessorMock = Mock.ofType<ImageProcessor>();
        });
            // Arrange



            const artistImage: string = await service.getArtistImageAsync('musicBrainzId');
import { IMock, Mock, Times } from 'typemoq';
        return new OnlineArtistImageGetter(imageProcessorMock.object, fanartApiMock.object);
    beforeEach(() => {
                .setup((x) => x.convertOnlineImageToBufferAsync('thumbnailLink'))
    });
            const resizedArtistImageAsBuffer: Buffer = Buffer.from([1, 2, 3]);
            expect(artistImage).toEqual('thumbnailLink');
            fanartApiMock.verify((x) => x.getArtistThumbnailAsync('musicBrainzId'), Times.once());
import { ImageProcessor } from '../../common/image-processor';
            imageProcessorMock
    });
                .setup((x) => x.toResizedJpegBufferAsync(artistImageAsBuffer, 300, 300, 80))
    });
            // Assert
            // Arrange, Act
            imageProcessorMock.verify((x) => x.convertBufferToImageUrl(resizedArtistImageAsBuffer), Times.once());

            // Assert
            expect(service).toBeDefined();


            // Assert
            const artistImage: string = await service.getResizedArtistImageAsync('musicBrainzId', 300);
    });
        fanartApiMock = Mock.ofType<FanartApi>();
            const service: OnlineArtistImageGetter = createSut();
            imageProcessorMock
describe('OnlineArtistImageGetter', () => {
            const service: OnlineArtistImageGetter = createSut();
        it('should get artist image from fanart', async () => {
                .returns(() => Promise.resolve(resizedArtistImageAsBuffer));

    let imageProcessorMock: IMock<ImageProcessor>;
            fanartApiMock.verify((x) => x.getArtistThumbnailAsync('musicBrainzId'), Times.once());

            imageProcessorMock.verify((x) => x.convertOnlineImageToBufferAsync('thumbnailLink'), Times.once());
    function createSut(): OnlineArtistImageGetter {
            // Act
            imageProcessorMock.verify((x) => x.toResizedJpegBufferAsync(artistImageAsBuffer, 300, 300, 80), Times.once());

            // Act
    describe('constructor', () => {
    describe('resizeArtistImageAsync', () => {
        });

    let fanartApiMock: IMock<FanartApi>;
            const artistImageAsBuffer: Buffer = Buffer.from([1, 2, 3]);
    describe('getArtistImageAsync', () => {
import { OnlineArtistImageGetter } from './online-artist-image-getter';

            expect(artistImage).toEqual('imageUrl');
            fanartApiMock.setup((x) => x.getArtistThumbnailAsync('musicBrainzId')).returns(() => Promise.resolve('thumbnailLink'));
            // Arrange
    }
            fanartApiMock.setup((x) => x.getArtistThumbnailAsync('musicBrainzId')).returns(() => Promise.resolve('thumbnailLink'));
        it('should get resized artist image from fanart', async () => {

});
import { FanartApi } from '../../common/api/fanart/fanart.api';
            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(resizedArtistImageAsBuffer)).returns(() => 'imageUrl');
        });
        it('should create', () => {
            const service: OnlineArtistImageGetter = createSut();
                .returns(() => Promise.resolve(artistImageAsBuffer));
