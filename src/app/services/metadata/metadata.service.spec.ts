            expect(loveSaved).toBeTruthy();

            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');

            // Act


            const service: MetadataService = createService();
                }),

        });
            const track: TrackModel = new TrackModel(new Track('path2.ogg'), dateTimeMock.object, translatorServiceMock.object, '');
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);

            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(coverArt)).returns(() => 'bufferAsImageUrl');

            cachedAlbumArtworkGetterMock.object,
        });
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
            expect(imageUrl).toEqual('file:///cachedAlbumArtworkPath1');
            const fileMetaDataMock: any = {};
        it('should return cached album artwork if file metadata could not be created and there is cached album artwork', async () => {
            const service: MetadataService = createService();
    public title: string;
        it('should update the track love in the database', () => {

        });
            const service: MetadataService = createService();
            const fileMetaDataMock: any = {};
    public bitRate: number;
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
                service.loveSaved$.subscribe(() => {
            const fileMetaDataMock: any = {};
    let loggerMock: IMock<Logger>;
            // Act
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
    let cachedAlbumArtworkGetterMock: IMock<CachedAlbumArtworkGetter>;
    public path: string;
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(coverArt));
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);
    });
            const coverArt: Buffer = Buffer.from([1, 2, 3]);

            // Act
            // Arrange


    public picture: Buffer;
            fileAccessMock.object,
        it('should resize cover art if maximumSize larger than 0 is given', async () => {

            const service: MetadataService = createService();

            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);
            const service: MetadataService = createService();
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => false);
            const service: MetadataService = createService();

            const imageUrl: string = await service.createAlbumImageUrlAsync(track, -1);
import { MockCreator } from '../../testing/mock-creator';

            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
    public conductor: string;
        });
                service.ratingSaved$.subscribe(() => {
            await service.saveTrackRatingAsync(track);

            trackRepositoryMock.verify((x) => x.updateRating(track.id, track.rating), Times.once());
    public isSaved: boolean = false;
    public trackCount: number;

            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
        it('should not save the rating to the audio file if the setting saveRatingToAudioFiles is false', async () => {
import { MetadataService } from './metadata.service';
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            // Arrange

            const fileMetaDataMock: any = {};
            // Arrange
            trackRepositoryMock.verify((x) => x.updateLove(track.id, track.love), Times.once());
        return new MetadataService(
            // Assert
        });
        albumArtworkGetterMock = Mock.ofType<AlbumArtworkGetter>();
        it('should create an empty image url if file metadata could be created and there is no album artwork', async () => {
        });
            // Arrange
    let fileAccessMock: IMock<FileAccessBase>;
            subscription.add(
        });
            const service: MetadataService = createService();
            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
            imageProcessorMock.verify((x) => x.toResizedJpegBufferAsync(coverArt, 500, 500, 80), Times.once());
    let settingsMock: IMock<SettingsBase>;
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => true);
            const service: MetadataService = createService();
    public discNumber: number;
            // Act
            expect(fileMetadataStub.isSaved).toBeFalsy();
            expect(imageUrl).toEqual(Constants.emptyImage);
    public grouping: string;
    let imageProcessorMock: IMock<ImageProcessor>;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
}

            expect(fileMetadataStub.isSaved).toBeFalsy();
            service.saveTrackLove(track);
describe('MetadataService', () => {

            // Assert
        });

        it('should not resize cover art if maximumSize of 0 is given', async () => {
import { ImageProcessor } from '../../common/image-processor';
        cachedAlbumArtworkGetterMock = Mock.ofType<CachedAlbumArtworkGetter>();
import { FileMetadataFactory } from '../../common/metadata/file-metadata.factory';
            const coverArt: Buffer = Buffer.from([]);
            let loveSaved: boolean = false;


import { AlbumArtworkGetter } from '../indexing/album-artwork-getter';
            // Assert
    let trackRepositoryMock: IMock<TrackRepositoryBase>;

            cachedAlbumArtworkGetterMock.setup((x) => x.getCachedAlbumArtworkPath('albumKey1')).returns(() => '');
    public durationInMilliseconds: number;
        it('should not resize cover art if maximumSize smaller than 0 is given', async () => {
            cachedAlbumArtworkGetterMock.setup((x) => x.getCachedAlbumArtworkPath('albumKey1')).returns(() => 'cachedAlbumArtworkPath1');
            // Arrange
            const fileMetadataStub = new FileMetadataImplementation();
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
    function createService(): MetadataService {
        });
            // Act
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);
        it('should notify that rating is saved', async () => {
    public albumArtists: string[];
            // Arrange
            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(coverArt)).returns(() => 'bufferAsImageUrl');
            // Arrange
    });
    let fileMetadataFactoryMock: IMock<FileMetadataFactory>;
            expect(service).toBeDefined();
            // Act
            fileMetadataFactoryMock.object,
        });
    describe('createImageUrlAsync', () => {
            // Arrange
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 500);
            // Assert
        it('should create', () => {
            // Arrange
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            expect(imageUrl).toEqual('bufferAsImageUrl');
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => true);

            // Arrange

    describe('saveTrackRatingAsync', () => {
        fileAccessMock.setup((x) => x.getFileExtension('path1.mp3')).returns(() => '.mp3');
            trackRepositoryMock.object,
            const fileMetaDataMock: any = {};
        it('should create an empty image url if trackModel is undefined', async () => {



            // Assert
            const service: MetadataService = createService();
            const fileMetadataStub = new FileMetadataImplementation();
import { IMock, It, Mock, Times } from 'typemoq';
            const fileMetaDataMock: any = {};
            await service.saveTrackRatingAsync(track);
});
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => false);

                    ratingSaved = true;
import { DateTime } from '../../common/date-time';
        });
        loggerMock = Mock.ofType<Logger>();
            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');
            const coverArt: Buffer = Buffer.from([1, 2, 3]);
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
            const subscription: Subscription = new Subscription();
            expect(imageUrl).toEqual(Constants.emptyImage);
            imageProcessorMock.verify((x) => x.toResizedJpegBufferAsync(It.isAny(), It.isAny(), It.isAny(), It.isAny()), Times.never());
            const subscription: Subscription = new Subscription();
    public discCount: number;
        this.isSaved = true;
        it('should notify that love is saved', () => {

            // Act
            // Act
import { Constants } from '../../common/application/constants';

            const service: MetadataService = createService();
    });
import { Logger } from '../../common/logger';
    describe('saveTrackLove', () => {
            const service: MetadataService = createService();
        });
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => false);
            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => false);
            const service: MetadataService = createService();
            const service: MetadataService = createService();
import { FileAccessBase } from '../../common/io/file-access.base';
    public composers: string[];
    public lyrics: string;
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(undefined));
import { TranslatorServiceBase } from '../translator/translator.service.base';
            fileAccessMock.setup((x) => x.pathExists('cachedAlbumArtworkPath1')).returns(() => true);
            // Act

        it('should create an empty image url if file metadata could be created and there is empty album artwork', async () => {
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
    public sampleRate: number;


        settingsMock = Mock.ofType<SettingsBase>();
    public artists: string[];

            );
            // Assert
            cachedAlbumArtworkGetterMock.setup((x) => x.getCachedAlbumArtworkPath('albumKey1')).returns(() => 'cachedAlbumArtworkPath1');
import { Subscription } from 'rxjs';
            const service: MetadataService = createService();
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');

            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');

            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
            await service.saveTrackRatingAsync(track);
            // Arrange
            // Assert
    public async loadAsync(): Promise<void> {}
            expect(ratingSaved).toBeTruthy();
        imageProcessorMock = Mock.ofType<ImageProcessor>();

            // Assert
            loggerMock.object,
        dateTimeMock = Mock.ofType<DateTime>();
            albumArtworkGetterMock.object,
            const fileMetadataStub = new FileMetadataImplementation();


            const service: MetadataService = createService();
        fileMetadataFactoryMock = Mock.ofType<FileMetadataFactory>();
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
import { SettingsBase } from '../../common/settings/settings.base';
    });
    let dateTimeMock: IMock<DateTime>;
        fileAccessMock.setup((x) => x.getFileExtension('path2.ogg')).returns(() => '.ogg');
            // Assert

            // Act
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(coverArt));

            // Arrange
            // Act
            // Act
            service.saveTrackLove(track);
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(coverArt));
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1.mp3')).returns(() => Promise.resolve(fileMetadataStub));
    describe('constructor', () => {
    }
            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');

            expect(imageUrl).toEqual(Constants.emptyImage);
            expect(fileMetadataStub.isSaved).toBeTruthy();
    });
            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(coverArt)).returns(() => 'bufferAsImageUrl');


            // Arrange
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(coverArt));
import { TrackModel } from '../track/track-model';
            const coverArt: Buffer = Buffer.from([1, 2, 3]);
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));

    }
            imageProcessorMock.object,
            // Arrange
            albumArtworkGetterMock.setup((x) => x.getAlbumArtworkAsync(fileMetaDataMock, false)).returns(() => Promise.resolve(coverArt));
            // Assert
            await service.saveTrackRatingAsync(track);

            // Assert
        it('should not save the rating to the audio file if the setting saveRatingToAudioFiles is true but the file extension is not .mp3', async () => {
import { Track } from '../../data/entities/track';


    public trackNumber: number;

            settingsMock.setup((x) => x.saveRatingToAudioFiles).returns(() => false);
            );
            cachedAlbumArtworkGetterMock.setup((x) => x.getCachedAlbumArtworkPath('albumKey1')).returns(() => '');
        });
            imageProcessorMock.setup((x) => x.toJpegBufferAsync(coverArt, 80)).returns(() => Promise.resolve(coverArt));
        it('should update the track rating in the database', async () => {
    public comment: string;
    public album: string;
            // Assert

            // Act
            // Assert

            const track: TrackModel = new TrackModel(new Track('path1.mp3'), dateTimeMock.object, translatorServiceMock.object, '');
            const fileMetaDataMock: any = {};
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);
        it('should save the rating to the audio file if the setting saveRatingToAudioFiles is true and the file extension is .mp3', async () => {


        });
        it('should create an empty image url if file metadata could not be created and there is no cached album artwork', async () => {

            imageProcessorMock.verify((x) => x.toResizedJpegBufferAsync(It.isAny(), It.isAny(), It.isAny(), It.isAny()), Times.never());
            // Assert

    public save(): void {
                    loveSaved = true;
            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(coverArt)).returns(() => 'bufferAsImageUrl');
    public genres: string[];

    public beatsPerMinute: number;
            // Arrange
    public year: number;
        );
            settingsMock.object,
class FileMetadataImplementation implements IFileMetadata {
        });
            // Assert

    public rating: number;

import { CachedAlbumArtworkGetter } from './cached-album-artwork-getter';
            await service.saveTrackRatingAsync(track);
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
            const track: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');

            imageProcessorMock.setup((x) => x.convertBufferToImageUrl(coverArt)).returns(() => 'bufferAsImageUrl');
            const service: MetadataService = createService();
                }),

            const imageUrl: string = await service.createAlbumImageUrlAsync(undefined, 0);
            // Act
            const service: MetadataService = createService();
            // Arrange
            // Assert
            // Act
            // Act



            fileMetadataFactoryMock.setup((x) => x.createAsync('path1')).returns(() => Promise.resolve(fileMetaDataMock));
            subscription.add(
        it('should return cover art if album artwork was found', async () => {
            const imageUrl: string = await service.createAlbumImageUrlAsync(track, 0);
            // Assert
            fileMetadataFactoryMock.setup((x) => x.createAsync('path2.ogg')).returns(() => Promise.resolve(fileMetadataStub));
    let albumArtworkGetterMock: IMock<AlbumArtworkGetter>;
            expect(imageUrl).toEqual(Constants.emptyImage);

            const fileMetaDataMock: any = {};
            // Arrange
            const coverArt: Buffer = Buffer.from([1, 2, 3]);
            fileMetadataFactoryMock.setup((x) => x.createAsync('path1.mp3')).returns(() => Promise.resolve(fileMetadataStub));
        });

        fileAccessMock = Mock.ofType<FileAccessBase>();


            let ratingSaved: boolean = false;

    beforeEach(() => {
            // Act
        });
