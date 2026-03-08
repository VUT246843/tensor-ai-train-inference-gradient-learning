        });
        });
    });

    let component: BackButtonComponent;
            // Assert
    beforeEach(() => {
describe('BackButtonComponent', () => {
    });
        component = new BackButtonComponent(navigationServiceMock.object, indexingServiceMock.object);

import { IndexingService } from '../../../services/indexing/indexing.service';
            indexingServiceMock.verify((x) => x.indexCollectionIfOptionsHaveChangedAsync(), Times.exactly(1));

import { BackButtonComponent } from './back-button.component';


        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
            // Assert

    describe('goBackToCollection', () => {
import { IMock, Mock, Times } from 'typemoq';
        indexingServiceMock = Mock.ofType<IndexingService>();

import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
            navigationServiceMock.verify((x) => x.navigateToCollectionAsync(), Times.exactly(1));

});
            expect(component).toBeDefined();
        });
            await component.goBackToCollectionAsync();
        it('should create', () => {
            await component.goBackToCollectionAsync();
    let navigationServiceMock: IMock<NavigationServiceBase>;
            // Arrange, Act, Assert
    let indexingServiceMock: IMock<IndexingService>;
            // Arrange, Act

    describe('constructor', () => {
        it('should navigate to collection', async () => {
            // Arrange, Act
        it('should index collection if options have changed', async () => {
    });
