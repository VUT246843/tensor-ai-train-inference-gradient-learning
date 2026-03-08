        searchServiceMock = Mock.ofType<SearchServiceBase>();
    function createTrackModels(): TrackModels {
            const pipe: TracksFilterPipe = createPipe();
            const pipe: TracksFilterPipe = createPipe();
            const filteredTrackModels: TrackModels = pipe.transform(trackModels, undefined);
            // Assert
        const trackModel1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
import { Track } from '../../data/entities/track';
        track2.albumArtists = ';album_artist2_1;;album_artist2_2;';
        trackModels.addTrack(trackModel1);

            const trackModels: TrackModels = createTrackModels();
        const track1: Track = new Track('/path1/file1.mp3');
        it('should return the given trackModels if textToContain is empty', () => {
        return trackModels;
        track1.albumArtists = ';album_artist1_1;;album_artist1_2;';
    describe('transform', () => {
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            expect(filteredTrackModels.tracks[0]).toEqual(trackModels.tracks[1]);
        });

    let dateTimeMock: IMock<DateTime>;
            // Arrange
        it('should return the given trackModels if textToContain is space', () => {
        it('should return only tracks for which search returns true', () => {
        it('should return the given trackModels if textToContain is undefined', () => {

import { TrackModel } from '../../services/track/track-model';


            const pipe: TracksFilterPipe = createPipe();
        track1.genres = ';genre1_1;;genre1_2';
        track2.genres = ';genre2_1;;genre2_2;';
            const trackModels: TrackModels = createTrackModels();

            // Arrange
    });
            pipe.transform(trackModels, 'dummy');
                'title1 album1 album_artist1_1, album_artist1_2 artist1_1, artist1_2 file1.mp3 2001 genre1_1, genre1_2';
        return new TracksFilterPipe(searchServiceMock.object);
import { TracksFilterPipe } from './tracks-filter.pipe';
            const trackModels: TrackModels = createTrackModels();
            searchServiceMock.setup((x) => x.matchesSearchText(It.isAny(), It.isAny())).returns(() => false);
        track1.year = 2001;
    }
            expect(filteredTrackModels).toEqual(trackModels);
        });
            const expectedTextToSearchTrack1 =
        trackModels.addTrack(trackModel2);

        it('performs search once for each track, searching "title", "album title", "album artists", "artists", "fileName", "year" and "genres', () => {
            const trackModels: TrackModels = createTrackModels();
        });
    }
        track2.artists = ';artist2_1;;artist2_2;';
        });
            // Arrange
            expect(filteredTrackModels).toEqual(trackModels);
            const expectedTextToSearchTrack2 =
        track1.fileName = 'file1.mp3';

    let settingsMock: any;


});
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            // Arrange
            // Act
            const filteredTrackModels: TrackModels = pipe.transform(trackModels, '');
        track1.trackTitle = 'title1';
            // Arrange
        track1.artists = ';artist1_1;;artist1_2;';
        const track2: Track = new Track('/path2/file2.mp3');
            const filteredTrackModels: TrackModels = pipe.transform(trackModels, 'dummy');
    let searchServiceMock: IMock<SearchServiceBase>;


        track2.albumTitle = 'album2';




        dateTimeMock = Mock.ofType<DateTime>();
                'title2 album2 album_artist2_1, album_artist2_2 artist2_1, artist2_2 file2.mp3 2002 genre2_1, genre2_2';

    function createPipe(): TracksFilterPipe {
        track1.albumTitle = 'album1';
            // Act
        settingsMock = new SettingsMock();
            // Assert

import { SettingsMock } from '../../testing/settings-mock';
        const trackModel2: TrackModel = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            expect(filteredTrackModels).toEqual(trackModels);
    beforeEach(() => {
        const trackModels: TrackModels = new TrackModels();
            const trackModels: TrackModels = createTrackModels();
import { IMock, It, Mock, Times } from 'typemoq';
            // Assert
            // Act
            // Act
            // Assert
import { TrackModels } from '../../services/track/track-models';
            searchServiceMock.setup((x) => x.matchesSearchText(It.isAny(), It.isAny())).returns(() => true);

import { DateTime } from '../../common/date-time';
        });
            expect(filteredTrackModels.tracks.length).toEqual(1);
            searchServiceMock.verify((x) => x.matchesSearchText(expectedTextToSearchTrack1, 'dummy'), Times.once());

import { SearchServiceBase } from '../../services/search/search.service.base';
            // Act
            const pipe: TracksFilterPipe = createPipe();
            const pipe: TracksFilterPipe = createPipe();
            searchServiceMock.verify((x) => x.matchesSearchText(expectedTextToSearchTrack2, 'dummy'), Times.once());

        track2.year = 2002;

            // Assert
            const filteredTrackModels: TrackModels = pipe.transform(trackModels, ' ');
        track2.fileName = 'file2.mp3';
    });
        track2.trackTitle = 'title2';
describe('TracksFilterPipe', () => {
