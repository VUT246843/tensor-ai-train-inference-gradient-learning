    beforeEach(() => {
    describe('constructor', () => {
            // Assert
        });
            // Arrange
            const component: VolumeControlComponent = new VolumeControlComponent(playbackServiceMock);
        it('should call playbackService.toggleMute()', () => {
});


    describe('volume', () => {
        playbackServiceMock = { volume: 0 };
        it('should get playbackService.volume', () => {
            // Assert

            playbackServiceMock.verify((x) => x.toggleMute(), Times.once());
            const component: VolumeControlComponent = new VolumeControlComponent(playbackServiceMock);

            // Act
    });


            // Arrange
import { Mock, Times } from 'typemoq';
    });
            const playbackServiceMock: any = { volume: 40 };
            const playbackServiceMock = Mock.ofType<PlaybackService>();
        });

            component.toggleMute();
    });
            expect(playbackServiceMock.volume).toEqual(20);

    let playbackServiceMock: any;

            // Act
            expect(component).toBeDefined();
            // Act
        });
import { PlaybackService } from '../../../services/playback/playback.service';
            // Assert
    });

        it('should set playbackService.volume', () => {

import { VolumeControlComponent } from './volume-control.component';
    describe('toggleMute', () => {
            // Arrange
        it('should create', () => {
            const component: VolumeControlComponent = new VolumeControlComponent(playbackServiceMock.object);
            expect(component.volume).toEqual(40);
            component.volume = 20;
            const component: VolumeControlComponent = new VolumeControlComponent(playbackServiceMock.object);
        });
describe('VolumeControlComponent', () => {
            const playbackServiceMock = Mock.ofType<PlaybackService>();
            // Act & Assert
            const playbackServiceMock: any = { volume: 50 };


            // Arrange
