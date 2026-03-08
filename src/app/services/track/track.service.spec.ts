            // Assert
        trackRepositoryMock.setup((x) => x.getTracksForAlbumArtists(['Source artist3', 'Source artist4'])).returns(() => [track3]);
        track4 = new Track('path4');
            // Arrange

import { FileAccessBase } from '../../common/io/file-access.base';
            // Arrange
        it('should check that the given non empty or undefined path exists', async () => {
            const tracksModels: TrackModels = service.getTracksForArtists([artist3, artist4], ArtistType.trackArtists);
            // Act
            expect(tracksModels.tracks.length).toEqual(2);
            // Act
            trackRepositoryMock.object,
            fileAccessMock.setup((x) => x.pathExists('/home/user/Music/Subfolder1')).returns(() => true);
            const genres: string[] = [];

import { TrackModels } from './track-models';
            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track2.ogg')).toBeFalsy();

            const subfolderPath: string = '/home/user/Music/Subfolder1';
            const service: TrackService = createService();
            const track: Track = new Track('path');
            expect(tracksModels.tracks[1].path).toEqual(track3.path);
            fileAccessMock.setup((x) => x.pathExists('/home/user/Music/Subfolder1')).returns(() => false);
            service.saveSkipCount(trackModel);
    });
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const service: TrackService = createService();

            // Act
            // Act
            const service: TrackService = createService();
            expect(tracksModels.tracks.length).toEqual(0);
        it('should return a TrackModels containing no tracks if no tracks are found for the given albumKeys', () => {

        trackRepositoryMock.setup((x) => x.getTracksForAlbums('', [])).returns(() => []);
        });
            .returns(() => new TrackModel(track4, dateTimeMock.object, translatorServiceMock.object, ''));
            artistServiceMock.setup((x) => x.getSourceArtists([artist3, artist4])).returns(() => ['Source artist3', 'Source artist4']);

            // Assert
            // Assert

            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, '');

            .setup((x) => x.createFromFileAsync('/home/user/Music/Subfolder1/track1.mp3', ''))
            expect(tracksModels.tracks.length).toEqual(2);
            // Arrange

    let trackRepositoryMock: IMock<TrackRepositoryBase>;
            // Assert
            // Assert
            const service: TrackService = createService();
describe('TrackService', () => {
            // Act

        it('should return a TrackModels containing no tracks if genres empty', () => {
    let settingsMock: SettingsMock;
        });
        });
        return new TrackService(

            const service: TrackService = createService();
            // Assert

            const artist3: ArtistModel = new ArtistModel('Artist3', translatorServiceMock.object);

            // Arrange
    }
            .setup((x) => x.createFromTrack(track1, ''))
    describe('savePlayCountAndDateLastPlayed', () => {
            // Arrange
            const artist4: ArtistModel = new ArtistModel('Artist4', translatorServiceMock.object);
            const track: Track = new Track('path');
            trackRepositoryMock.verify((x) => x.updateSkipCount(9, 1), Times.once());
        it('should create', () => {
        });

                    new TrackModel(
import { TrackService } from './track.service';
            const albumKeys: string[] = ['albumKey1', 'albumKey2'];

            const service: TrackService = createService();
        it('should create TrackModels from files', async () => {
                        new Track('/home/user/Music/Subfolder1/track1.mp3'),

            track.trackId = 9;
            expect(tracksModels.tracks[0].path).toEqual('path1');
        loggerMock = Mock.ofType<Logger>();
            trackRepositoryMock.verify((x) => x.getTracksForAlbums('', albumKeys), Times.exactly(1));
            const service: TrackService = createService();
            expect(tracksModels.tracks.length).toEqual(0);
            const tracksModels: TrackModels = service.getTracksForGenres(genres);
        });
            trackRepositoryMock.verify((x) => x.updatePlayCountAndDateLastPlayed(9, track.playCount!, track.dateLastPlayed!), Times.once());

            .returns(() => new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, ''));



            expect(tracksModels.tracks[0].path).toEqual(track2.path);
            // Act
            expect(tracksModels.tracks[0].path).toEqual('path1');
    describe('getTracksForGenres', () => {
            // Assert

            trackRepositoryMock.verify((x) => x.getTracksForAlbums('', albumKeys), Times.exactly(1));
            // Arrange
            // Assert
            const service: TrackService = createService();
            const tracksModels: TrackModels = await service.getTracksInSubfolderAsync(subfolderPath);
            expect(tracksModels.tracks.length).toEqual(0);

            // Assert
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, '');
    let track1: Track;
import { TranslatorServiceBase } from '../translator/translator.service.base';
            const tracksModels: TrackModels = service.getTracksForAlbums(albumKeys);
            expect(tracksModels.tracks.length).toEqual(0);
                        '',
        trackModelFactoryMock
            expect(tracksModels.tracks[0].path).toEqual(track3.path);


    function createService(): TrackService {
            // Act
            // Act
            trackModelFactoryMock.verify((x) => x.createFromFileAsync('/home/user/Music/Subfolder1/track1.mp3', ''), Times.once());
            const tracksModels: TrackModels = service.getTracksForGenres(genres);
            fileAccessMock.setup((x) => x.pathExists('/home/user/Music/Subfolder1')).returns(() => true);

            trackRepositoryMock.verify((x) => x.getTracksForGenres(genres), Times.exactly(1));
            artistServiceMock.setup((x) => x.getSourceArtists([artist3, artist4])).returns(() => ['Source artist3', 'Source artist4']);

        });
            const artists: ArtistModel[] = [];
    });
            fileAccessMock.setup((x) => x.pathExists('/home/user/Music/Subfolder1')).returns(() => true);

            const artistType: ArtistType = ArtistType.albumArtists;
        });

            trackRepositoryMock.verify((x) => x.getTracksForAlbumArtists(['Source artist3', 'Source artist4']), Times.once());
            expect(tracksModels.totalFileSizeInBytes).toEqual(0);
            // Assert

        });
            fileAccessMock.verify((x) => x.pathExists('/home/user/Music/Subfolder1'), Times.exactly(1));
            trackRepositoryMock.verify((x) => x.getTracksForGenres(genres), Times.never());
    describe('getTracksInSubfolderAsync', () => {
        trackModelFactoryMock = Mock.ofType<TrackModelFactory>();
        test.todo('should write tests');
            trackRepositoryMock.verify((x) => x.getTracksForGenres(genres), Times.exactly(1));
    let track4: Track;
            const service: TrackService = createService();
    let artistServiceMock: IMock<ArtistServiceBase>;
            const tracksModels: TrackModels = service.getTracksForArtists([artist3, artist4], ArtistType.albumArtists);

            // Act

            const service: TrackService = createService();
            trackModelFactoryMock.object,
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        fileAccessMock
            // Act
            trackRepositoryMock.verify((x) => x.getTracksForAlbumArtists(['Source artist3', 'Source artist4']), Times.once());
            // Assert
            // Act
                    ),
import { IMock, It, Mock, Times } from 'typemoq';
        });
        });

            const subfolderPath: string = '/home/user/Music/Subfolder1';
            const artist4: ArtistModel = new ArtistModel('artist4', translatorServiceMock.object);
            fileAccessMock.verify((x) => x.getFilesInDirectoryAsync('/home/user/Music/Subfolder1'), Times.exactly(1));
    let trackModelFactoryMock: IMock<TrackModelFactory>;
            const service: TrackService = createService();

            expect(service).toBeDefined();
            .returns(() => Promise.resolve(['/home/user/Music/Subfolder1/track1.mp3', '/home/user/Music/Subfolder1/track1.png']));
            // Act
        it('should return a TrackModels containing tracks if tracks are found for the given genres', () => {
            expect(tracksModels.tracks.length).toEqual(0);
            );
            // Assert
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            service.savePlayCountAndDateLastPlayed(trackModel);
            track.trackId = 9;
            .setup((x) => x.createFromTrack(track3, ''))
        it('should update play count and date last played in the database', () => {
            const subfolderPath: string = '/home/user/Music/Subfolder1';
        fileAccessMock.setup((x) => x.getFileExtension('/home/user/Music/Subfolder1/track1.mp3')).returns(() => '.mp3');
                        translatorServiceMock.object,

    });
        fileAccessMock.setup((x) => x.getFileExtension('/home/user/Music/Subfolder1/track1.png')).returns(() => '.png');

            const service: TrackService = createService();

            const genres: string[] = ['unknownGenre1', 'unknownGenre2'];
            const service: TrackService = createService();

            const artist3: ArtistModel = new ArtistModel('Artist3', translatorServiceMock.object);
        });
import { Logger } from '../../common/logger';
        dateTimeMock = Mock.ofType<DateTime>();
            // Assert
        it('should get all files in an existing directory', async () => {
        });
    describe('getTracksForAlbums', () => {
    });
            expect(tracksModels.totalDurationInMilliseconds).toEqual(0);
        it('should return a TrackModels containing no tracks if artists is empty', () => {
            await service.getTracksInSubfolderAsync(subfolderPath);
            const service: TrackService = createService();


            trackRepositoryMock.verify((x) => x.getTracksForAlbums('', albumKeys), Times.never());
    describe('getVisibleTracks', () => {
            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track3.flac')).toBeFalsy();
            .setup((x) => x.createFromTrack(track4, ''))
            const tracksModels: TrackModels = await service.getTracksInSubfolderAsync(subfolderPath);
        trackRepositoryMock.setup((x) => x.getTracksForGenres(['unknownGenre1', 'unknownGenre2'])).returns(() => []);
    });
        track1 = new Track('path1');
            // Arrange

        trackRepositoryMock.setup((x) => x.getTracksForAlbums('', ['albumKey1', 'albumKey2'])).returns(() => [track1, track2]);
import { DateTime } from '../../common/date-time';
            // Act
        it('should return a TrackModels for track artists only if artistType is trackArtists', () => {
            // Assert
            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track4.wav')).toBeFalsy();
        it('should update play count in the database', () => {
            // Assert
            await service.getTracksInSubfolderAsync('/home/user/Music/Subfolder1');
        it('should return a TrackModels for both track and album artists if artistType is allArtists', () => {
            const subfolderPath: string = '/home/user/Music/Subfolder1';
            trackRepositoryMock.verify((x) => x.getTracksForTrackArtists(['Source artist3', 'Source artist4']), Times.once());
            await service.getTracksInSubfolderAsync('');

        });
    let fileAccessMock: IMock<FileAccessBase>;
            const service: TrackService = createService();
            // Assert
            trackRepositoryMock.verify((x) => x.getTracksForTrackArtists([]), Times.never());

import { TrackModel } from './track-model';
            // Arrange
            expect(tracksModels.tracks.length).toEqual(2);
            const tracksModels: TrackModels = service.getTracksForAlbums(albumKeys);
        trackRepositoryMock.setup((x) => x.getTracksForTrackArtists(['Source artist3', 'Source artist4'])).returns(() => [track2]);
import { TrackModelFactory } from './track-model-factory';
import { ArtistType } from '../artist/artist-type';

            // Assert
        it('should return a TrackModels containing no tracks if no tracks are found for the given genres', () => {
            // Arrange
            const service: TrackService = createService();
        it('should include tracks for files which have a supported audio extension', async () => {
            // Arrange
                Promise.resolve(
        track2 = new Track('path2');
            // Act
            artistServiceMock.setup((x) => x.getSourceArtists([artist3, artist4])).returns(() => ['Source artist3', 'Source artist4']);

        });
            .returns(() => new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, ''));

            .returns(() => new TrackModel(track3, dateTimeMock.object, translatorServiceMock.object, ''));
            expect(tracksModels.totalDurationInMilliseconds).toEqual(0);
        });

            // Arrange

            // Arrange
        });
            const subfolderPath: string = '/home/user/Music/Subfolder1';
            await service.getTracksInSubfolderAsync(subfolderPath);


        });
            // Arrange
            loggerMock.object,
        it('should not include tracks for files which have an unsupported audio extension', async () => {
    });
        it('should return a TrackModels for album artists only if artistType is albumArtists', () => {
        settingsMock = new SettingsMock();

        trackModelFactoryMock
            settingsMock,
        trackRepositoryMock.setup((x) => x.getTracksForAlbums('', ['unknownAlbumKey1', 'unknownAlbumKey2'])).returns(() => []);

            expect(tracksModels.tracks.length).toEqual(1);
        fileAccessMock = Mock.ofType<FileAccessBase>();
            const artist4: ArtistModel = new ArtistModel('Artist4', translatorServiceMock.object);
            // Arrange
        artistServiceMock = Mock.ofType<ArtistServiceBase>();
        it('should return an empty TrackModels when the subfolder path is empty', async () => {
            artistServiceMock.object,
            // Act

        trackModelFactoryMock

            const service: TrackService = createService();
    });

            // Act
            trackRepositoryMock.verify((x) => x.getTracksForAlbumArtists([]), Times.never());

            const albumKeys: string[] = ['unknownAlbumKey1', 'unknownAlbumKey2'];


    let track2: Track;
    describe('constructor', () => {

    });

            // Arrange
            // Act
            // Arrange
            expect(tracksModels.tracks.length).toEqual(1);
});
            // Arrange



            const albumKeys: string[] = [];
        trackModelFactoryMock
            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track1.mp3')).toBeTruthy();
            const service: TrackService = createService();
                        dateTimeMock.object,
    let loggerMock: IMock<Logger>;
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';

            trackRepositoryMock.verify((x) => x.getTracksForTrackArtists(['Source artist3', 'Source artist4']), Times.once());
            trackModel.increasePlayCountAndDateLastPlayed();
import { SettingsMock } from '../../testing/settings-mock';
        });
            const tracksModels: TrackModels = service.getTracksForArtists(artists, artistType);
            .setup((x) => x.getFilesInDirectoryAsync('/home/user/Music/Subfolder1'))
        dateTimeMock.setup((x) => x.convertDateToTicks(It.isAny())).returns(() => 123456);
            .returns(() =>
            // Arrange
        trackRepositoryMock.setup((x) => x.getTracksForGenres(['genre1', 'genre2'])).returns(() => [track1, track3]);
            const tracksModels: TrackModels = service.getTracksForAlbums(albumKeys);
        );
    describe('getTracksForArtists', () => {
            trackModel.increaseSkipCount();
            expect(tracksModels.tracks[1].path).toEqual('path2');

    describe('saveSkipCount', () => {
            // Act
    let dateTimeMock: IMock<DateTime>;
            // Act
    let track3: Track;
            // Assert
            const genres: string[] = ['genre1', 'genre2'];
import { Track } from '../../data/entities/track';
            const tracksModels: TrackModels = service.getTracksForArtists([artist3, artist4], ArtistType.allArtists);
            // Assert
            expect(tracksModels.totalFileSizeInBytes).toEqual(0);
            const tracksModels: TrackModels = service.getTracksForGenres(genres);


            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track5.aac')).toBeFalsy();
        it('should return an empty TrackModels when the subfolder path does not exist', async () => {
        });
                ),
            // Act
            fileAccessMock.object,
        trackRepositoryMock.setup((x) => x.getTracksForGenres([])).returns(() => []);
            const service: TrackService = createService();

    beforeEach(() => {

            expect(tracksModels.tracks.length).toEqual(0);
import { ArtistModel } from '../artist/artist-model';
import { ArtistServiceBase } from '../artist/artist.service.base';
            // Assert
            expect(tracksModels.tracks[1].path).toEqual('path3');
            expect(tracksModels.tracks[0].path).toEqual(track2.path);
            const service: TrackService = createService();
            const tracksModels: TrackModels = await service.getTracksInSubfolderAsync('');
        it('should return a TrackModels containing no tracks if albumKeys empty', () => {

        it('should return a TrackModels containing tracks if tracks are found for the given albumKeys', () => {
            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track6.wma')).toBeFalsy();
        track3 = new Track('path3');
            expect(tracksModels.tracks.length).toEqual(0);
            // Arrange
        it('should not check if an empty path exists', async () => {
        });
            const service: TrackService = createService();
            fileAccessMock.setup((x) => x.pathExists('/home/user/Music/Subfolder1')).returns(() => true);


            expect(tracksModels.tracks.map((x) => x.path).includes('/home/user/Music/Subfolder1/track1.png')).toBeFalsy();

        trackModelFactoryMock
            const artist3: ArtistModel = new ArtistModel('artist3', translatorServiceMock.object);

            const tracksModels: TrackModels = await service.getTracksInSubfolderAsync(subfolderPath);
            // Act
            .setup((x) => x.createFromTrack(track2, ''))
            // Assert

            fileAccessMock.verify((x) => x.pathExists(It.isAny()), Times.never());
        });

            // Arrange
    });
