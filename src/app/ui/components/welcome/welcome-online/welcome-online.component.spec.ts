            expect(component).toBeDefined();
            const component: WelcomeOnlineComponent = new WelcomeOnlineComponent(settingsMock.object);
import { SettingsBase } from '../../../../common/settings/settings.base';
        });
            // Assert
import { IMock, Mock } from 'typemoq';
            // Act
    let settingsMock: IMock<SettingsBase>;
            // Arrange

    });

            // Act, Assert
import { WelcomeOnlineComponent } from './welcome-online.component';
describe('WelcomeOnlineComponent', () => {
        it('should create', () => {




            const component: WelcomeOnlineComponent = new WelcomeOnlineComponent(settingsMock.object);
        settingsMock = Mock.ofType<SettingsBase>();
            expect(component.settings).toBeDefined();
    describe('constructor', () => {
        it('should define settings', () => {
    beforeEach(() => {
});
            // Arrange
    });

        });
