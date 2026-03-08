    describe('openThemesDirectory', () => {

    describe('constructor', () => {
    });
            expect(component.appearanceService).toBeDefined();

            desktopMock.object,
            appearanceServiceMock.object,
            audioVisualizerServiceMock.object,
    });
            expect(component).toBeDefined();
            expect(component.settings).toBeDefined();
            // Arrange, Act
            expect(component.audioVisualizerService).toBeDefined();

            // Assert

    });
import { DesktopBase } from '../../../../common/io/desktop.base';

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            await component.openThemesDirectoryAsync();
    let settingsMock: IMock<SettingsBase>;
        appearanceServiceMock.setup((x) => x.themesDirectoryPath).returns(() => '/my/path');
            component.ngOnInit();
    let audioVisualizerServiceMock: IMock<AudioVisualizerServiceBase>;
            appearanceServiceMock.verify((x) => x.stopWatchingThemesDirectory(), Times.once());
        });

    describe('ngOnInit', () => {
            desktopMock.verify((x) => x.openPathAsync('/my/path'), Times.once());
        });
            // Arrange, Act, Assert
            // Arrange, Act, Assert
            translatorServiceMock.object,
            // Arrange, Act, Assert
            // Arrange, Act

    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { AppearanceSettingsComponent } from './appearance-settings.component';

        it('should define audioVisualizerService', () => {
import { SettingsBase } from '../../../../common/settings/settings.base';
        it('should define translatorService', () => {
            // Arrange, Act, Assert
    let component: AppearanceSettingsComponent;
            expect(component.translatorService).toBeDefined();
});
    describe('ngOnDestroy', () => {

        });
        audioVisualizerServiceMock = Mock.ofType<AudioVisualizerServiceBase>();
        it('should create', () => {
        );
describe('AppearanceSettingsComponent', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
    let desktopMock: IMock<DesktopBase>;
            // Assert
        it('should define appearanceService', () => {

        });

            // Assert
    beforeEach(() => {
        it('should stop watching of the themes directory', () => {
import { IMock, Mock, Times } from 'typemoq';
        settingsMock = Mock.ofType<SettingsBase>();
    });
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        desktopMock = Mock.ofType<DesktopBase>();
        it('should define settings', () => {
        });
        it('should start watching of the themes directory', () => {
            appearanceServiceMock.verify((x) => x.startWatchingThemesDirectory(), Times.once());
import { AudioVisualizerServiceBase } from '../../../../services/audio-visualizer/audio-visualizer.service.base';
            // Arrange, Act
            // Arrange, Act, Assert

import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';

        });
        });

            settingsMock.object,

        it('should open the themes directory', async () => {
        component = new AppearanceSettingsComponent(
        });
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            component.ngOnDestroy();

    });
