            // Arrange
            // Act
    beforeEach(() => {
describe('ManageRefreshComponent', () => {


});
    });

        });
            expect(component).toBeDefined();
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Assert

        it('should create', () => {

            // Assert
    let appearanceServiceMock: IMock<AppearanceServiceBase>;


    let component: ManageCollectionComponent;
            // Act

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    describe('constructor', () => {
        component = new ManageCollectionComponent(appearanceServiceMock.object);
import { IMock, Mock } from 'typemoq';
        });

            expect(component.appearanceService).toBeDefined();
import { ManageCollectionComponent } from './manage-collection.component';
    });
            // Arrange

        it('should define appearanceService', () => {
