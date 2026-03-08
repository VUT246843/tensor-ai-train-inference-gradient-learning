

    });
    }
        return new AudioVisualizerService(settingsMock.object);

            expect(sut.audioVisualizerFrameRates[3]).toEqual(20);
            expect(sut.audioVisualizerStyles[0]).toEqual('flames');
    const settingsStub: any = { showAudioVisualizer: true, audioVisualizerStyle: 'flames', audioVisualizerFrameRate: 10 };
        return new AudioVisualizerService(settingsStub);
            sut.showAudioVisualizer = false;
            // Arrange
            expect(sut.audioVisualizerFrameRates[0]).toEqual(5);
    describe('audioVisualizerFrameRates', () => {

            // Arrange
            // Arrange
            expect(sut.audioVisualizerFrameRates[1]).toEqual(10);
            // Act, Assert
            expect(settingsStub.audioVisualizerFrameRate).toEqual(45);
            expect(sut.showAudioVisualizer).toBeTruthy();
            expect(sut.audioVisualizerFrameRates[5]).toEqual(30);
            // Assert
            // Assert
        });

            const sut: AudioVisualizerServiceBase = createSut();
            // Act
            expect(sut.audioVisualizerStyles[1]).toEqual('lines');
            expect(sut.audioVisualizerStyles.length).toEqual(3);
    describe('selectedAudioVisualizerFrameRate', () => {
    describe('selectedAudioVisualizerStyle', () => {

        it('should save the selected audio visualizer style in the settings', () => {
    }
    let settingsMock: IMock<SettingsBase>;
            // Act
            expect(sut.audioVisualizerFrameRates[4]).toEqual(25);
            expect(sut.audioVisualizerFrameRates[9]).toEqual(50);

        settingsMock = Mock.ofType<SettingsBase>();

            const sut: AudioVisualizerServiceBase = createSut();
            const sut: AudioVisualizerServiceBase = createSutWithSettingsStub();

            // Arrange
        });
            expect(sut.audioVisualizerFrameRates[2]).toEqual(15);
            expect(sut.audioVisualizerFrameRates[10]).toEqual(55);
            settingsStub.audioVisualizerStyle = 'flames';

});
    describe('audioVisualizerStyles', () => {
            expect(sut.audioVisualizerFrameRates.length).toEqual(12);
    function createSut(): AudioVisualizerServiceBase {
    function createSutWithSettingsStub(): AudioVisualizerServiceBase {
            settingsStub.audioVisualizerFrameRate = 10;
            const sut: AudioVisualizerServiceBase = createSutWithSettingsStub();
            const sut: AudioVisualizerServiceBase = createSut();
        it('should return showAudioVisualizer from settings', () => {
import { SettingsBase } from '../../common/settings/settings.base';
            sut.selectedAudioVisualizerStyle = 'lines';
    beforeEach(() => {
    });
            // Assert
        it('should save the selected audio visualizer frame rate in the settings', () => {
            expect(sut.audioVisualizerFrameRates[7]).toEqual(40);

import { AudioVisualizerServiceBase } from './audio-visualizer.service.base';
        });
            // Arrange
            expect(sut.audioVisualizerFrameRates[6]).toEqual(35);
import { AudioVisualizerService } from './audio-visualizer.service';
    });
            expect(settingsStub.showAudioVisualizer).toBeFalsy();
            sut.selectedAudioVisualizerFrameRate = 45;
            expect(sut.audioVisualizerFrameRates[8]).toEqual(45);
        });
        });
            const sut: AudioVisualizerServiceBase = createSutWithSettingsStub();
import { IMock, Mock } from 'typemoq';
    describe('showAudioVisualizer', () => {
            expect(sut.audioVisualizerFrameRates[11]).toEqual(60);
            expect(sut.audioVisualizerStyles[2]).toEqual('bars');
            settingsMock.setup((x) => x.showAudioVisualizer).returns(() => true);

            // Act, Assert


            // Act, Assert
            // Act
            // Arrange


    });
            expect(settingsStub.audioVisualizerStyle).toEqual('lines');
        it('should save showAudioVisualizer in settings', () => {

describe('AudioVisualizerService', () => {
        });
            settingsStub.showAudioVisualizer = true;
    });
    });
        it('should return the audio visualizer styles', () => {
        it('should return the audio visualizer frame rates', () => {


