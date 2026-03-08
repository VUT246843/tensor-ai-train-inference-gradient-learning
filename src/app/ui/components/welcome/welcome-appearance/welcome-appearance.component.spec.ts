describe('WelcomeAppearanceComponent', () => {
            expect(component.appearanceService).toBeDefined();


            // Arrange
            expect(component).toBeDefined();
import { IMock, Mock } from 'typemoq';
            const component: WelcomeAppearanceComponent = new WelcomeAppearanceComponent(appearanceServiceMock.object);
    });
            const component: WelcomeAppearanceComponent = new WelcomeAppearanceComponent(appearanceServiceMock.object);
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
            // Act
            // Assert

        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();

    describe('constructor', () => {
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        it('should create', () => {
            // Act, Assert
import { WelcomeAppearanceComponent } from './welcome-appearance.component';

    beforeEach(() => {
        });
    });
            // Arrange

        });
        it('should define appearanceService', () => {

});
