import { IMock, Mock } from 'typemoq';


});
            // Act
describe('PlaybackTimeComponent', () => {
        it('should create', () => {
            expect(component).toBeDefined();
            // Assert


            // Arrange
    });
        });
            // Assert
    let component: PlaybackTimeComponent;
        });

import { PlaybackTimeComponent } from './playback-time.component';
    describe('constructor', () => {



        playbackServiceMock = Mock.ofType<PlaybackService>();
    let playbackServiceMock: IMock<PlaybackService>;
            // Arrange
        it('should define playbackService', () => {
        component = new PlaybackTimeComponent(playbackServiceMock.object);

import { PlaybackService } from '../../../services/playback/playback.service';
            // Act
    });
    beforeEach(() => {
            expect(component.playbackService).toBeDefined();
