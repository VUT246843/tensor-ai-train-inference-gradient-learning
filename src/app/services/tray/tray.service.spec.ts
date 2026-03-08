            const service: TrayService = createService();
        translatorServiceMock.setup((x) => x.get('exit')).returns(() => 'Exit');
            createService();
        ipcProxyMock = Mock.ofType<IpcProxyBase>();
                showDopamineLabel: 'Show Dopamine',
        it('should create', () => {
            // Act
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        });


import { TrayService } from './tray.service';
        it('should trigger update the tray context menu on language changed', () => {
                showDopamineLabel: 'Show Dopamine',


            // Assert
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
    let ipcProxyMock: IMock<IpcProxyBase>;
            };
            // Arrange
            ipcProxyMock.verify((x) => x.sendToMainProcess('update-tray-context-menu', arg), Times.once());
        });

                exitLabel: 'Exit',
    let settingsMock: IMock<SettingsBase>;
            // Assert

                exitLabel: 'Exit',
        translateServiceProxyLanguageChanged = new Subject();
            // Act
    function createService(): TrayService {
import { IMock, Mock, Times } from 'typemoq';
            // Assert
    }

import { Observable, Subject } from 'rxjs';

    let translateServiceProxyLanguageChanged: Subject<void>;

            createService();
            // Arrange
            const arg: any = {

        it('should update the tray context menu', () => {

    });
            ipcProxyMock.verify((x) => x.sendToMainProcess('update-tray-context-menu', arg), Times.once());
        translatorServiceMock.setup((x) => x.get('show-dopamine')).returns(() => 'Show Dopamine');
            ipcProxyMock.reset();
    describe('updateTrayContextMenu', () => {
    beforeEach(() => {
        translatorServiceMock.setup((x) => x.languageChanged$).returns(() => translateServiceProxyLanguageChanged$);
import { TranslatorServiceBase } from '../translator/translator.service.base';


            const arg: any = {

            // Act
            // Arrange
import { SettingsBase } from '../../common/settings/settings.base';
        settingsMock = Mock.ofType<SettingsBase>();
            expect(service).toBeDefined();

            ipcProxyMock.reset();
    });
            // Assert
            };
            ipcProxyMock.verify((x) => x.sendToMainProcess('update-tray-context-menu', arg), Times.once());

});

        });
                showDopamineLabel: 'Show Dopamine',
            const arg: any = {

describe('TrayService', () => {
            };
            const service: TrayService = createService();
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
            service.updateTrayContextMenu();
            // Act
        it('should update the tray context menu', () => {

    });

        const translateServiceProxyLanguageChanged$: Observable<void> = translateServiceProxyLanguageChanged.asObservable();
        });
        return new TrayService(translatorServiceMock.object, settingsMock.object, ipcProxyMock.object);
    describe('constructor', () => {
                exitLabel: 'Exit',
            translateServiceProxyLanguageChanged.next();
            // Arrange
