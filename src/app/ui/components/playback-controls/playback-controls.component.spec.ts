import { PlaybackControlsComponent } from './playback-controls.component';

            expect(component.loopModeEnum).toBeDefined();
        it('should define playbackService', () => {

    let playbackServiceMock: IMock<PlaybackService>;
        it('should create', () => {
    describe('constructor', () => {
import { PlaybackService } from '../../../services/playback/playback.service';
            // Act



            // Arrange
});
    });
            // Arrange
            expect(component.playbackService).toBeDefined();
            // Assert
            // Assert



    let component: PlaybackControlsComponent;
        });
        });
            // Assert
        it('should define loopModeEnum', () => {
            // Act
            // Arrange
        component = new PlaybackControlsComponent(playbackServiceMock.object);

        playbackServiceMock = Mock.ofType<PlaybackService>();
import { IMock, Mock } from 'typemoq';
        });
            expect(component).toBeDefined();
    });

describe('PlaybackControlsComponent', () => {

            // Act
    beforeEach(() => {
