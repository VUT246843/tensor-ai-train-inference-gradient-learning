
    }
    });
            expect(lyrics.sourceType).toEqual(LyricsSourceType.none);
                '[ar:Chubby Checker oppure  Beatles, The]',

            // Arrange
            const instance: LrcLyricsGetter = createInstance();

    });

    });
    describe('constructor', () => {
            expect(lyrics.text).toEqual('');
            // Act
import { LyricsModel } from './lyrics-model';
            fileAccessMock.setup((x) => x.getPathWithoutExtension(track.path)).returns(() => '/path/to/audio/file');
            const instance: LrcLyricsGetter = createInstance();

import { IMock, Mock } from 'typemoq';
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
            // Assert
            expect(lyrics.sourceType).toEqual(LyricsSourceType.lrc);

        it('should return the lrc lyrics ignoring timestamps and metadata if lrc file exists', async () => {
        fileAccessMock = Mock.ofType<FileAccessBase>();
            fileAccessMock.setup((x) => x.pathExists('/path/to/audio/file.lrc')).returns(() => true);
            fileAccessMock.setup((x) => x.getPathWithoutExtension(track.path)).returns(() => '/path/to/audio/file');
import { TrackModel } from '../track/track-model';
            const lyrics: LyricsModel = await instance.getLyricsAsync(track);
        it('should return empty lyrics if lrc file does not exist', async () => {
    beforeEach(() => {
                '[00:28.25]Line 5 lyrics',
            fileAccessMock.setup((x) => x.readLinesAsync('/path/to/audio/file.lrc')).returns(() => Promise.resolve(lrcFileLines));
            const lrcFileLines: string[] = [];

            const track: TrackModel = MockCreator.createTrackModel('/path/to/audio/file.mp3', 'title', 'artists');
            ];

            expect(lyrics.track).toEqual(track);
                '[au:Written by Kal Mann / Dave Appell, 1961]',
    describe('getLyricsAsync', () => {
            const lyrics: LyricsModel = await instance.getLyricsAsync(track);
            fileAccessMock.setup((x) => x.readLinesAsync('/path/to/audio/file.lrc')).returns(() => Promise.resolve(lrcFileLines));
            // Act
            expect(lyrics.sourceName).toEqual('');
        it('should create', () => {
            expect(lyrics.sourceType).toEqual(LyricsSourceType.none);


        it('should return empty lyrics if lrc file exists but is empty', async () => {

});
            fileAccessMock.setup((x) => x.pathExists('/path/to/audio/file.lrc')).returns(() => false);
                '[00:24.00]Line 4 lyrics',
            expect(lyrics.track).toEqual(track);

                "[al:Hits Of The 60's - Vol. 2 – Oldies]",
            // Arrange
            const instance: LrcLyricsGetter = createInstance();
            // Act
            const track: TrackModel = MockCreator.createTrackModel('/path/to/audio/file.mp3', 'title', 'artists');
            const instance: LrcLyricsGetter = createInstance();

import { MockCreator } from '../../testing/mock-creator';
            // Assert
            // Arrange, Act
            const lrcFileLines: string[] = [
        });
                '[00:21.10]Line 3 lyrics',
            expect(lyrics.sourceName).toEqual('');
        });

    function createInstance(): LrcLyricsGetter {


            // Assert


            expect(lyrics.text).toEqual('');
            const lyrics: LyricsModel = await instance.getLyricsAsync(track);
import { FileAccessBase } from '../../common/io/file-access.base';

                '[00:29.02]Line 6 lyrics',
            fileAccessMock.setup((x) => x.getPathWithoutExtension(track.path)).returns(() => '/path/to/audio/file');
            const track: TrackModel = MockCreator.createTrackModel('/path/to/audio/file.mp3', 'title', 'artists');
                '[00:12.00]Line 1 lyrics',
            // Arrange
            // Assert
                '[00:17.20]Line 2 lyrics',
            expect(lyrics.track).toEqual(track);
describe('LrcLyricsGetter', () => {
        });
    let fileAccessMock: IMock<FileAccessBase>;
                '[length: 2:23]',
        return new LrcLyricsGetter(fileAccessMock.object);
            expect(lyrics.sourceName).toEqual('');
            expect(lyrics.text).toEqual('Line 1 lyrics\nLine 2 lyrics\nLine 3 lyrics\nLine 4 lyrics\nLine 5 lyrics\nLine 6 lyrics');
            expect(instance).toBeDefined();
            fileAccessMock.setup((x) => x.pathExists('/path/to/audio/file.lrc')).returns(() => true);
        });
import { LrcLyricsGetter } from './lrc-lyrics-getter';
                "[ti:Let's Twist Again]",
