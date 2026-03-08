
    });

import { SettingsBase } from '../../../../common/settings/settings.base';
    });


            expect(component).toBeDefined();
            // Act
    });

        it('should create', () => {

            // Arrange
    describe('viewLog', () => {
        it('should open the log file', () => {
});
import { LogViewer } from '../../../../common/io/log-viewer';
    let navigationServiceMock: IMock<NavigationServiceBase>;

            // Arrange

        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
            const component: AdvancedSettingsComponent = createComponent();
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';

        settingsMock = Mock.ofType<SettingsBase>();
            await component.showWelcomeScreenAsync();
        });
            // Assert
            // Assert
    describe('constructor', () => {
            // Arrange

        logViewerMock = Mock.ofType<LogViewer>();
            // Act
        it('should define settings', () => {
    function createComponent(): AdvancedSettingsComponent {
    let settingsMock: IMock<SettingsBase>;
    describe('showWelcomeScreenAsync', () => {

            // Act
            const component: AdvancedSettingsComponent = createComponent();
            const component: AdvancedSettingsComponent = createComponent();
            expect(component.settings).toBeDefined();
        });
            const component: AdvancedSettingsComponent = createComponent();

import { AdvancedSettingsComponent } from './advanced-settings.component';
        });
describe('AdvancedSettingsComponent', () => {

            // Assert

    }
        });
    });
            component.viewLog();
            navigationServiceMock.verify((x) => x.navigateToWelcomeAsync(), Times.once());
    beforeEach(() => {
            // Arrange
        return new AdvancedSettingsComponent(settingsMock.object, navigationServiceMock.object, logViewerMock.object);
import { IMock, Mock, Times } from 'typemoq';
        it('should navigate to welcome screen', async () => {
            // Act
            logViewerMock.verify((x) => x.viewLog(), Times.once());

            // Assert
    let logViewerMock: IMock<LogViewer>;
