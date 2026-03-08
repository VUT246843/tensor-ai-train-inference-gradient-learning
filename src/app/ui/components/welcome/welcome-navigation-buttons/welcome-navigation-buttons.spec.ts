    describe('goForward', () => {
            // Assert
        it('should create', () => {
            component.page = 6;
import { WelcomeServiceBase } from '../../../../services/welcome/welcome.service.base';


            // Act
            // Arrange
        it('should navigate to loading', async () => {

        });

        it('should return true when page is not equal to totalPages minus 1', () => {
            expect(component).toBeDefined();
            component.totalPages = 7;

            await component.finishAsync();

        it('should define totalPages as 0', () => {
        it('should return true when page larger than 0 and page is smaller than totalPages minus 1', () => {

        it('should return false when page is 0', () => {
        });
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';


            expect(component.page).toEqual(0);

    describe('canGoBack', () => {
            expect(component.canGoBack).toBeTruthy();
        it('should return false when page is larger than totalPages minus 1', () => {
    beforeEach(() => {

            expect(component.totalPages).toEqual(0);

            // Arrange
            // Arrange, Act, Assert
            component.pageChange.subscribe((page) => (receivedPage = page));
    describe('goBack', () => {

        });
        it('should decrease and emit page if possible to go back', () => {

            component.page = 3;
    });

        welcomeServiceMock = Mock.ofType<WelcomeServiceBase>();
            // Act
            // Act, Assert
            component.page = 3;
    describe('finishAsync', () => {
            expect(component.page).toEqual(7);
            // Arrange
            component.totalPages = 7;
        it('should increase and emit page if possible to go forward', () => {
            component.page = 7;
    });
            // Act, Assert
            // Assert
            component.totalPages = 7;
describe('WelcomeNavigationButtonsComponent', () => {
            expect(component.page).toEqual(6);
            expect(component.canGoForward).toBeTruthy();
            // Act, Assert
            component.totalPages = 7;

            component.totalPages = 7;
            expect(receivedPage).toEqual(4);
            component.page = 7;
            let receivedPage = 0;
        it('should define page as 0', () => {
            component.totalPages = 7;
        });
    let navigationServiceMock: IMock<NavigationServiceBase>;



            expect(component.canGoForward).toBeFalsy();
            expect(component.canGoBack).toBeFalsy();
            expect(component.canGoBack).toBeFalsy();
        });
        });

            component.page = 6;
    let component: WelcomeNavigationButtonsComponent;
            // Arrange
            component.page = 5;

        });
        it('should return false when page larger than 0 and page is larger than totalPages minus 1', () => {
            expect(component.canFinish).toBeTruthy();

    });

            // Act, Assert

            // Assert
            component.goForward();
    });
            // Arrange
        it('should return true when page is smaller than totalPages minus 1', () => {
            expect(component.canFinish).toBeFalsy();
            component.page = 7;
    describe('canFinish', () => {
            component.page = 5;
        });
    });
        });

        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
    describe('constructor', () => {
        it('should not decrease page if not possible to go back', () => {
            // Act


        it('should return false when page is not equal to totalPages minus 1', () => {
import { WelcomeNavigationButtonsComponent } from './welcome-navigation-buttons';
            // Arrange
            expect(receivedPage).toEqual(4);
            let receivedPage = 0;
            // Act

            // Arrange

            expect(component.page).toEqual(4);
    let welcomeServiceMock: IMock<WelcomeServiceBase>;
        component = new WelcomeNavigationButtonsComponent(welcomeServiceMock.object, navigationServiceMock.object);

            component.page = 5;


            // Assert
        });
        });


    });
            component.totalPages = 7;
            expect(component.page).toEqual(4);
            component.totalPages = 7;

            navigationServiceMock.verify((x) => x.navigateToLoadingAsync(), Times.once());
    });
            component.goForward();

            // Arrange, Act, Assert
            // Act, Assert
            // Arrange
            component.goBack();
            component.totalPages = 7;

    describe('canGoForward', () => {
            // Act, Assert
            component.totalPages = 7;
            // Assert
    });
            // Arrange
            // Arrange
        it('should not increase page if not possible to go forward', () => {

            component.pageChange.subscribe((page) => (receivedPage = page));


            // Arrange
            component.goBack();
            // Assert
            // Act
});
        });
        });
        });
            component.page = 0;
            // Arrange
        });
            // Act


            // Act, Assert
            // Arrange
import { IMock, Mock, Times } from 'typemoq';
