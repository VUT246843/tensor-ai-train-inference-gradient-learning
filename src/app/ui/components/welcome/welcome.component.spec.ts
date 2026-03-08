        component = new WelcomeComponent(appearanceServiceMock.object, welcomeServiceMock.object);


import { IMock, Mock, Times } from 'typemoq';
        it('should get page', () => {
        });
            expect(component.currentPage).toEqual(5);
    let component: WelcomeComponent;


    describe('isLoaded', () => {
        });
import { WelcomeGreetingComponent } from './welcome-greeting/welcome-greeting.component';
        it('should have 7 pages', () => {
            // Assert
        it('should set page', () => {
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
        });
        it('should create', () => {
            component.currentPage = 5;

    let welcomeServiceMock: IMock<WelcomeServiceBase>;


            welcomeServiceMock.setup((x) => x.isLoaded).returns(() => true);
        });
            expect(component.isLoaded).toBeTruthy();
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
    describe('constructor', () => {

import { WelcomeComponent } from './welcome.component';

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';

    });
            // Act
            component.page = 6;

        welcomeServiceMock = Mock.ofType<WelcomeServiceBase>();
    });
            component.page = 6;

describe('WelcomeComponent', () => {
import { WelcomeServiceBase } from '../../../services/welcome/welcome.service.base';


            // Arrange
        });
            // Act
            // Assert
            // Arrange
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
});
            // Act
            // Act, Assert
            // Arrange
            expect(component).toBeDefined();
            // Arrange
            expect(component.currentPage).toEqual(6);
        it('should return isLoaded from WelcomeService', () => {
    beforeEach(() => {
    });

            expect(component.totalPages).toEqual(7);


            // Act, Assert
            // Arrange
    });
            // Assert
    describe('currentPage', () => {
