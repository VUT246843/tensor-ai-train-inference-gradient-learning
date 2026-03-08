
            expect(component).toBeDefined();
            // Assert

import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
            // Arrange
        component = new SettingsComponent(appearanceServiceMock.object);

            expect(component.appearanceService).toEqual(appearanceServiceMock.object);
    beforeEach(() => {
    });
            // Assert

    describe('constructor', () => {
            // Act
});
        });


    let component: SettingsComponent;
        });
    });
    let appearanceServiceMock: IMock<AppearanceServiceBase>;

        it('should create', () => {
import { SettingsComponent } from './settings.component';
describe('SettingsComponent', () => {
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
import { IMock, Mock } from 'typemoq';

            // Arrange

        it('should set appearanceService', () => {

            // Act
