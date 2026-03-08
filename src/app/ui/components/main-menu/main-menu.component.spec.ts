            // Assert
            // Act
import { UpdateServiceBase } from '../../../services/update/update.service.base';
        updateServiceMock = Mock.ofType<UpdateServiceBase>();
            navigationServiceMock.verify((x) => x.navigateToSettingsAsync(), Times.exactly(1));
            // Assert

    });
            await component.goToSettingsAsync();
        component = new MainMenuComponent(navigationServiceMock.object, updateServiceMock.object);

});
    let navigationServiceMock: IMock<NavigationServiceBase>;
        it('should create', () => {
            // Arrange
    });

        });
    describe('downloadLatestRelease', () => {



            // Act

    let updateServiceMock: IMock<UpdateServiceBase>;
    describe('applicationName', () => {




    });
        });
            // Assert
    });
            await component.goToInformationAsync();
    });
            expect(component.updateService).toBeDefined();
        });




        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
        it('should navigate to manage collection', async () => {
            // Assert
            // Assert
        it('should define updateService', () => {
            navigationServiceMock.verify((x) => x.navigateToManageCollectionAsync(), Times.exactly(1));
        });

        it('should navigate to settings', async () => {
        it('should provide correct application name', () => {
            updateServiceMock.verify((x) => x.downloadLatestReleaseAsync(), Times.exactly(1));
        it('should navigate to information', async () => {
import { MainMenuComponent } from './main-menu.component';

        });
        });
    let component: MainMenuComponent;


            // Act
            // Assert
import { IMock, Mock, Times } from 'typemoq';
    describe('goToInformation', () => {
            // Arrange
describe('MainMenuComponent', () => {
            // Act
            // Act
            // Assert
            // Arrange

            expect(component.applicationName).toEqual('Dopamine');
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';

            navigationServiceMock.verify((x) => x.navigateToInformationAsync(), Times.exactly(1));

    beforeEach(() => {
            // Act
            // Act
    });
        it('should download the latest release', async () => {
            // Arrange

            // Arrange
    describe('goToManageCollection', () => {
    describe('goToSettings', () => {
            // Arrange
    describe('constructor', () => {

            await component.downloadLatestReleaseAsync();
    });

            expect(component).toBeDefined();
            // Arrange
        });
            await component.goToManageCollectionAsync();
