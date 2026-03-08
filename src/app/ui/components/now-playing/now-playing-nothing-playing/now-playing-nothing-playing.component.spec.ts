    describe('constructor', () => {
    let trackServiceMock: IMock<TrackServiceBase>;
            expect(sut).toBeDefined();
    describe('shuffleAll', () => {
        });
    let playbackServiceMock: IMock<PlaybackService>;
        });

import { TrackServiceBase } from '../../../../services/track/track.service.base';
    }
            const sut: NowPlayingNothingPlayingComponent = createSut();
    beforeEach(() => {
            const sut: NowPlayingNothingPlayingComponent = createSut();
    function createSut(): NowPlayingNothingPlayingComponent {
import { PlaybackService } from '../../../../services/playback/playback.service';
            await sut.shuffleAllAsync();
});

            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());

            // Arrange, Act
    });
    });
describe('NowPlayingNothingPlayingComponent', () => {
        it('should enqueue all tracks without shuffle', async () => {
            // Assert
        playbackServiceMock = Mock.ofType<PlaybackService>();
            const sut: NowPlayingNothingPlayingComponent = createSut();
    });
        });

            // Arrange
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);



import { NowPlayingNothingPlayingComponent } from './now-playing-nothing-playing.component';
            // Arrange

            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());
        it('should create', () => {
    });
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
            // Assert
            // Act
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());

        it('should enqueue all tracks with shuffle', async () => {
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
import { IMock, Mock, Times } from 'typemoq';
            await sut.playAllAsync();
            // Assert
            const tracks: TrackModels = new TrackModels();
import { TrackModels } from '../../../../services/track/track-models';
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.never());
    describe('playAll', () => {
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
            // Act
        return new NowPlayingNothingPlayingComponent(playbackServiceMock.object, trackServiceMock.object);

        trackServiceMock = Mock.ofType<TrackServiceBase>();
            const tracks: TrackModels = new TrackModels();

