            expect(lyrics.text).toEqual('lrc text');

            // Assert
            expect(lyrics.text).toEqual('embedded text');
            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyOnlineLyricsMock));
            // Assert
            expect(lyrics.sourceName).toEqual('lrc source');
        });
import { IMock, It, Mock, Times } from 'typemoq';
            expect(lyrics.sourceType).toEqual(LyricsSourceType.none);
    let settingsMock: IMock<SettingsBase>;
            expect(lyrics.text).toEqual('');
    let onlineLyricsGetterMock: IMock<OnlineLyricsGetter>;
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock2)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
        });
            expect(lyrics.track).toBe(trackMock2);
            // Arrange
    let fullEmbeddedLyricsMock: LyricsModel;
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock2);
            await sut.getLyricsAsync(trackMock);
        return new LyricsService(
            embeddedLyricsGetterMock.verify((x) => x.getLyricsAsync(trackMock), Times.once());
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
            expect(lyrics.track).toEqual(trackMock);
            lrcLyricsGetterMock.reset();

            onlineLyricsGetterMock.reset();
        it('should still get embedded lyrics even if there are cached lyrics', async () => {
            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullOnlineLyricsMock));
            expect(lyrics.sourceType).toEqual(LyricsSourceType.embedded);
            // Assert
            // Act
            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullOnlineLyricsMock));
            expect(lyrics.sourceName).toEqual('online source');

    function createSut(): LyricsServiceBase {
            const sut: LyricsServiceBase = createSut();
            // Arrange
            expect(lyrics.track).toBe(trackMock);
        fullLrcLyricsMock = new LyricsModel(trackMock, 'lrc source', LyricsSourceType.lrc, 'lrc text');
            expect(lyrics.text).toEqual('online text 2');


            expect(lyrics.sourceName).toEqual('online source');
    let emptyEmbeddedLyricsMock: LyricsModel;
            embeddedLyricsGetterMock.object,
            expect(lyrics.sourceType).toEqual(LyricsSourceType.online);



            expect(lyrics.sourceType).toEqual(LyricsSourceType.lrc);
        it('should return empty lyrics if there are no embedded lyrics and no lrc lyrics but there are online lyrics and online download is disabled', async () => {



            // Arrange
            loggerMock.object,
            await sut.getLyricsAsync(trackMock);
        emptyOnlineLyricsMock = new LyricsModel(trackMock, '', LyricsSourceType.none, '');
            const sut: LyricsServiceBase = createSut();
            expect(lyrics.text).toEqual('');
    let lrcLyricsGetterMock: IMock<LrcLyricsGetter>;
            const sut: LyricsServiceBase = createSut();
            // Act
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyLrcLyricsMock));
        it('should still get lrc lyrics even if there are cached lyrics', async () => {



    });

            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullEmbeddedLyricsMock));
            const sut: LyricsServiceBase = createSut();
            expect(lyrics.sourceType).toEqual(LyricsSourceType.online);
            expect(lyrics.sourceType).toEqual(LyricsSourceType.none);
            const sut: LyricsServiceBase = createSut();
import { LyricsServiceBase } from './lyrics.service.base';
            lrcLyricsGetterMock.verify((x) => x.getLyricsAsync(trackMock), Times.once());
            settingsMock.setup((x) => x.downloadLyricsOnline).returns(() => true);
            expect(lyrics.sourceName).toEqual('lrc source');
            // Act
        fullOnlineLyricsMock = new LyricsModel(trackMock, 'online source', LyricsSourceType.online, 'online text');
import { OnlineLyricsGetter } from './online-lyrics-getter';
            // Act
});
            expect(lyrics.track).toBe(trackMock);
import { Logger } from '../../common/logger';
        it('should create', () => {
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);

            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullOnlineLyricsMock));
            expect(lyrics.track).toBe(trackMock);
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyLrcLyricsMock));
            lrcLyricsGetterMock.reset();
        });

            expect(lyrics.sourceName).toEqual('embedded source');
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
            settingsMock.setup((x) => x.downloadLyricsOnline).returns(() => true);

            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyLrcLyricsMock));
        });

            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);

            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);
            expect(sut).toBeDefined();
    let embeddedLyricsGetterMock: IMock<EmbeddedLyricsGetter>;
            // Act
            await sut.getLyricsAsync(trackMock);
        it('should return lrc lyrics if there are no embedded lyrics but there are lrc lyrics', async () => {
        });
            embeddedLyricsGetterMock.reset();
        it('should return cached lyrics and not download lyrics when there are no embedded lyrics and no lrc lyrics but there are cached lyrics and online download is enabled', async () => {
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullLrcLyricsMock));
            const sut: LyricsServiceBase = createSut();
            // Arrange
            expect(lyrics.track).toBe(trackMock);
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
    let trackMock: TrackModel;
            expect(lyrics.sourceType).toEqual(LyricsSourceType.online);
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyOnlineLyricsMock));
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock2)).returns(() => Promise.resolve(emptyLrcLyricsMock));
        );
        it('should return empty lyrics if there are no embedded lyrics and no lrc lyrics and no online lyrics', async () => {
            const trackMock2 = MockCreator.createTrackModel('path2', 'title2', 'artists2');
            await sut.getLyricsAsync(trackMock);
        lrcLyricsGetterMock = Mock.ofType<LrcLyricsGetter>();
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullLrcLyricsMock));

            // Assert
import { EmbeddedLyricsGetter } from './embedded-lyrics-getter';
        settingsMock = Mock.ofType<SettingsBase>();
            // Assert
    let emptyLrcLyricsMock: LyricsModel;

            expect(lyrics.sourceType).toEqual(LyricsSourceType.embedded);
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullLrcLyricsMock));

import { SettingsBase } from '../../common/settings/settings.base';

            onlineLyricsGetterMock.object,
            // Assert
        it('should return online lyrics if there are no embedded lyrics and no lrc lyrics but there are online lyrics and online download is enabled', async () => {
            // Arrange

    describe('constructor', () => {
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);
        });
            onlineLyricsGetterMock.verify((x) => x.getLyricsAsync(trackMock2), Times.once());
    let fullLrcLyricsMock: LyricsModel;
        it('should return embedded lyrics if there are embedded lyrics', async () => {
    }
            // Act
            expect(lyrics.track).toEqual(trackMock);
            // Arrange

            // Act

        onlineLyricsGetterMock = Mock.ofType<OnlineLyricsGetter>();
        });
            const sut: LyricsServiceBase = createSut();
            // Arrange, Act
import { LrcLyricsGetter } from './lrc-lyrics-getter';
    let fullOnlineLyricsMock: LyricsModel;
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyLrcLyricsMock));
            embeddedLyricsGetterMock.reset();
    describe('getLyricsAsync', () => {
            expect(lyrics.sourceName).toEqual('');
            const sut: LyricsServiceBase = createSut();
            // Assert
            expect(lyrics.track).toBe(trackMock);
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
            expect(lyrics.text).toEqual('online text');
            const sut: LyricsServiceBase = createSut();
            expect(lyrics.track).toBe(trackMock);
import { LyricsModel } from './lyrics-model';
            lrcLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyLrcLyricsMock));

            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);
            expect(lyrics.text).toEqual('lrc text');
        });
            expect(lyrics.text).toEqual('online text');
            settingsMock.object,
        emptyEmbeddedLyricsMock = new LyricsModel(trackMock, '', LyricsSourceType.none, '');

            // Arrange
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullEmbeddedLyricsMock));

import { TrackModel } from '../track/track-model';
            // Assert

        });

            settingsMock.setup((x) => x.downloadLyricsOnline).returns(() => true);
    });
        trackMock = MockCreator.createTrackModel('path', 'title', 'artists');


            expect(lyrics.sourceType).toEqual(LyricsSourceType.lrc);
        });
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';

        embeddedLyricsGetterMock = Mock.ofType<EmbeddedLyricsGetter>();
            const fullOnlineLyricsMock2 = new LyricsModel(trackMock2, 'online source', LyricsSourceType.online, 'online text 2');
            // Arrange


            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullEmbeddedLyricsMock));
            onlineLyricsGetterMock.verify((x) => x.getLyricsAsync(It.isAny()), Times.never());
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));
describe('LyricsService', () => {
            const lyrics: LyricsModel = await sut.getLyricsAsync(trackMock);

            onlineLyricsGetterMock.reset();
import { LyricsService } from './lyrics.service';
            settingsMock.setup((x) => x.downloadLyricsOnline).returns(() => true);
    beforeEach(() => {

import { MockCreator } from '../../testing/mock-creator';
            settingsMock.setup((x) => x.downloadLyricsOnline).returns(() => false);
            expect(lyrics.sourceName).toEqual('');
            const sut: LyricsServiceBase = createSut();
    });

    let emptyOnlineLyricsMock: LyricsModel;
            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(fullOnlineLyricsMock));
            // Act
        fullEmbeddedLyricsMock = new LyricsModel(trackMock, 'embedded source', LyricsSourceType.embedded, 'embedded text');
            // Arrange
    let loggerMock: IMock<Logger>;
        emptyLrcLyricsMock = new LyricsModel(trackMock, '', LyricsSourceType.none, '');
            lrcLyricsGetterMock.object,
            onlineLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock2)).returns(() => Promise.resolve(fullOnlineLyricsMock2));
            embeddedLyricsGetterMock.setup((x) => x.getLyricsAsync(trackMock)).returns(() => Promise.resolve(emptyEmbeddedLyricsMock));

            // Assert
            expect(lyrics.sourceName).toEqual('embedded source');
            // Act
            // Assert
        loggerMock = Mock.ofType<Logger>();

        it('should not return cached lyrics and should download new lyrics when the track has changed', async () => {
            expect(lyrics.sourceName).toEqual('online source');
            expect(lyrics.text).toEqual('embedded text');
