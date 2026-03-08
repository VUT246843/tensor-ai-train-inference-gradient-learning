    let mediaSessionServiceMock: IMock<MediaSessionService>;
    let loggerMock: IMock<Logger>;
        );
            settingsMock.object,
        loggerMock = Mock.ofType<Logger>();
        it('should define mediaSessionService', () => {
            // Act
    });

import { SettingsBase } from '../../../../common/settings/settings.base';

    let settingsMock: IMock<SettingsBase>;

        component = new BehaviorSettingsComponent(
            mediaSessionServiceMock.object,
        });
        });
        trayServiceMock = Mock.ofType<TrayServiceBase>();

    let dialogServiceMock: IMock<DialogServiceBase>;

            loggerMock.object,
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';


            // Assert
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        it('should define settings', () => {
            expect(component.settings).toBeDefined();
        });
            expect(component).toBeDefined();
            // Arrange
            // Act
        settingsMock = Mock.ofType<SettingsBase>();
            dialogServiceMock.object,
    let component: BehaviorSettingsComponent;

import { MediaSessionService } from '../../../../services/media-session/media-session.service';
import { BehaviorSettingsComponent } from './behavior-settings.component';
            trayServiceMock.object,

            translatorServiceMock.object,
        mediaSessionServiceMock = Mock.ofType<MediaSessionService>();
            expect(component.mediaSessionService).toBeDefined();
import { TrayServiceBase } from '../../../../services/tray/tray.service.base';
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
import { Logger } from '../../../../common/logger';
            // Act

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';

        it('should create', () => {

});
        it('should define trayService', () => {
import { IMock, Mock } from 'typemoq';


            // Arrange
            // Act

    let trayServiceMock: IMock<TrayServiceBase>;
describe('BehaviorSettingsComponent', () => {
    });
            // Assert
    beforeEach(() => {
            // Assert
        });
            // Assert
        dialogServiceMock = Mock.ofType<DialogServiceBase>();
    describe('constructor', () => {
            // Arrange
            // Arrange
            expect(component.trayService).toBeDefined();
