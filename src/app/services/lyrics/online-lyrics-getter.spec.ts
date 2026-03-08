    }
            chartLyricsApiMock
            // Arrange
        loggerMock = Mock.ofType<Logger>();
    });
            expect(lyricsModel.track).toEqual(track);

            const lyricsModel: LyricsModel = await instance.getLyricsAsync(track);
            expect(lyricsModel.text).toEqual('ChartLyrics text');
            expect(lyricsModel.track).toEqual(track);
            // Arrange
                .returns(() => Promise.resolve(Lyrics.empty()));
            azLyricsApiMock
                .setup((x) => x.getLyricsAsync(track.rawFirstArtist, track.rawTitle))
        return new OnlineLyricsGetter(chartLyricsApiMock.object, azLyricsApiMock.object, loggerMock.object);
            // Assert
            const instance: OnlineLyricsGetter = createInstance();
            expect(instance).toBeDefined();
            // Assert
            // Act
        });
            expect(lyricsModel.track).toEqual(track);
            const track: TrackModel = MockCreator.createTrackModel('path', 'title', 'artists');
                .returns(() => Promise.resolve(Lyrics.empty()));
            const instance: OnlineLyricsGetter = createInstance();
            expect(lyricsModel.sourceName).toEqual('ChartLyrics source');

            const lyrics: Lyrics = new Lyrics('ChartLyrics source', 'ChartLyrics text');
            const instance: OnlineLyricsGetter = createInstance();
        });

            azLyricsApiMock.setup((x) => x.getLyricsAsync(track.rawFirstArtist, track.rawTitle)).returns(() => Promise.resolve(lyrics));
import { LyricsModel } from './lyrics-model';
            // Assert

            // Arrange
                .setup((x) => x.getLyricsAsync(track.rawFirstArtist, track.rawTitle))

        });
import { ChartLyricsApi } from '../../common/api/lyrics/chart-lyrics.api';
    let azLyricsApiMock: IMock<AZLyricsApi>;
            expect(lyricsModel.sourceType).toEqual(LyricsSourceType.online);
        it('should create', () => {
            chartLyricsApiMock.setup((x) => x.getLyricsAsync(track.rawFirstArtist, track.rawTitle)).returns(() => Promise.resolve(lyrics));
            // Act
            expect(lyricsModel.text).toEqual('');
            expect(lyricsModel.sourceType).toEqual(LyricsSourceType.online);
            expect(lyricsModel.text).toEqual('AZLyrics text');

            // Act
import { MockCreator } from '../../testing/mock-creator';
            chartLyricsApiMock.verify((x) => x.getLyricsAsync(It.isAny(), It.isAny()), Times.never());
            expect(lyricsModel.sourceType).toEqual(LyricsSourceType.none);
            const lyrics: Lyrics = new Lyrics('AZLyrics source', 'AZLyrics text');

    beforeEach(() => {
        chartLyricsApiMock = Mock.ofType<ChartLyricsApi>();

            // Arrange, Act
            expect(lyricsModel.sourceName).toEqual('');
    });
            expect(lyricsModel.track).toEqual(track);
import { AZLyricsApi } from '../../common/api/lyrics/a-z-lyrics.api';
            expect(lyricsModel.sourceName).toEqual('');

        azLyricsApiMock = Mock.ofType<AZLyricsApi>();
            const track: TrackModel = MockCreator.createTrackModel('path', 'title', 'artists');
import { TrackModel } from '../track/track-model';
                .returns(() => Promise.resolve(Lyrics.empty()));
            // Assert
import { Logger } from '../../common/logger';


            // Act
            expect(lyricsModel.sourceType).toEqual(LyricsSourceType.none);
            const track: TrackModel = MockCreator.createTrackModel('path', 'title', 'artists');
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
            azLyricsApiMock
            expect(lyricsModel.sourceName).toEqual('AZLyrics source');
            const instance: OnlineLyricsGetter = createInstance();
            const lyricsModel: LyricsModel = await instance.getLyricsAsync(track);
import { Lyrics } from '../../common/api/lyrics/lyrics';
    describe('constructor', () => {
        it('should return empty lyrics if track has no artist and title', async () => {
            const lyricsModel: LyricsModel = await instance.getLyricsAsync(track);

import { OnlineLyricsGetter } from './online-lyrics-getter';
    function createInstance(): OnlineLyricsGetter {
            expect(lyricsModel.text).toEqual('');
            const instance: OnlineLyricsGetter = createInstance();
    let chartLyricsApiMock: IMock<ChartLyricsApi>;
    let loggerMock: IMock<Logger>;
import { IMock, It, Mock, Times } from 'typemoq';
            azLyricsApiMock.verify((x) => x.getLyricsAsync(It.isAny(), It.isAny()), Times.never());
    });

        });
describe('OnlineLyricsGetter', () => {
        });

            const lyrics: Lyrics = new Lyrics('ChartLyrics source', 'ChartLyrics text');
            const lyricsModel: LyricsModel = await instance.getLyricsAsync(track);
                .setup((x) => x.getLyricsAsync(track.rawFirstArtist, track.rawTitle))


        it('should return lyrics from ChartLyrics if no lyrics from AZLyrics are available', async () => {

            // Assert
        it('should return empty lyrics if no online lyrics are availalble', async () => {
        it('should return lyrics from AZLyrics if available', async () => {
            // Arrange
});
    describe('getLyricsAsync', () => {
            const track: TrackModel = MockCreator.createTrackModel('path', '', '');
