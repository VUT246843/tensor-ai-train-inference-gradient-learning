
import { MockCreator } from '../../testing/mock-creator';
            const instance = new LyricsModel(trackMock, 'sourceName', LyricsSourceType.embedded, 'text');

    });
            // Assert
});
        it('should set text', () => {
        });
        });

            const trackMock: TrackModel = MockCreator.createTrackModel('path', 'trackTitle', 'artists');
        });

            // Arrange, Act
            expect(instance.sourceType).toEqual(LyricsSourceType.embedded);
            expect(instance.text).toEqual('text');
        it('should set sourceType', () => {
            const trackMock: TrackModel = MockCreator.createTrackModel('path', 'trackTitle', 'artists');
describe('LyricsModel', () => {

            expect(instance.sourceName).toEqual('sourceName');

            // Arrange, Act

            // Assert
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
            expect(instance).toBeDefined();
            // Assert
    describe('constructor', () => {
            const trackMock: TrackModel = MockCreator.createTrackModel('path', 'trackTitle', 'artists');
        it('should set sourceName', () => {
            const instance = new LyricsModel(trackMock, 'sourceName', LyricsSourceType.embedded, 'text');
            // Arrange, Act
            // Arrange, Act
        it('should create', () => {
            const instance = new LyricsModel(trackMock, 'sourceName', LyricsSourceType.embedded, 'text');
            const instance = new LyricsModel(trackMock, 'sourceName', LyricsSourceType.embedded, 'text');
        });
            // Assert
import { LyricsModel } from './lyrics-model';
            const trackMock: TrackModel = MockCreator.createTrackModel('path', 'trackTitle', 'artists');

import { TrackModel } from '../track/track-model';
