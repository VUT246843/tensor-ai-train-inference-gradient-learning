        it('should create', () => {
            // Assert
        });
            // Act
import { VolumeIconComponent } from './volume-icon.component';
    describe('constructor', () => {
    });
        playbackServiceMock = { volume: 0 };
    beforeEach(() => {
            expect(component).toBeDefined();
import { PlaybackService } from '../../../services/playback/playback.service';

import { Mock } from 'typemoq';
    let playbackServiceMock: any;

});


describe('VolumeIconComponent', () => {
            const component: VolumeIconComponent = new VolumeIconComponent(playbackServiceMock.object);
            const playbackServiceMock = Mock.ofType<PlaybackService>();
            // Arrange
    });

