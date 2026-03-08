            // Assert
            expect(component.appearanceService).toBe(appearanceServiceMock.object);

    let component: InformationComponent;
    beforeEach(() => {
        it('should create', () => {
            // Act

            // Act
    });
        });
import { IMock, Mock } from 'typemoq';
    });


        it('should set appearanceService', () => {
import { InformationComponent } from './information.component';

describe('InformationComponent', () => {
            // Assert
            // Arrange

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';

});

            expect(component).toBeDefined();
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
        component = new InformationComponent(appearanceServiceMock.object);
            // Arrange


    let appearanceServiceMock: IMock<AppearanceServiceBase>;
    describe('constructor', () => {
        });
