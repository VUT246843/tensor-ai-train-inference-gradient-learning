            expect(component.isLoaded).toBeTruthy();

    describe('isLoaded', () => {
    });
            // Act, Assert
    });
    let welcomeServiceMock: IMock<WelcomeServiceBase>;
        it('should create', () => {
            // Act
describe('WelcomeGreetingComponent', () => {
import { WelcomeGreetingComponent } from './welcome-greeting.component';
    describe('constructor', () => {
});
            expect(component).toBeDefined();
            // Arrange
        welcomeServiceMock = Mock.ofType<WelcomeServiceBase>();
            const component: WelcomeGreetingComponent = new WelcomeGreetingComponent(welcomeServiceMock.object);

        it('should return isLoaded from WelcomeService', () => {
import { WelcomeServiceBase } from '../../../../services/welcome/welcome.service.base';
            // Arrange



            welcomeServiceMock.setup((x) => x.isLoaded).returns(() => true);

    beforeEach(() => {
            const component: WelcomeGreetingComponent = new WelcomeGreetingComponent(welcomeServiceMock.object);
        });
            // Assert
    });

        });
import { IMock, Mock } from 'typemoq';
