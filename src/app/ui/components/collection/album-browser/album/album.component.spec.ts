    describe('formatYear', () => {
            // Act
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();


            expect(result).toEqual('2023');
            // Act
            // Arrange

            const result = component.formatYear(undefined as any);
            // Arrange

        settingsMock = Mock.ofType<SettingsBase>();
            // Arrange
        });
        it('should return "?" when year is undefined', () => {
        it('should return the year as a string when year is a negative number', () => {
            expect(component.appearanceService).toBeDefined();
            // Arrange
            // Act
    let settingsMock: IMock<SettingsBase>;
        component = new AlbumComponent(appearanceServiceMock.object, settingsMock.object);
            // Act

        });
            const result = component.formatYear(2023);

            // Arrange

            const result = component.formatYear(-500);
            // Arrange

import { IMock, Mock } from 'typemoq';
            // Act
    let component: AlbumComponent;
    });
        });

            expect(result).toEqual('?');


import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
            // Act
        });
import { SettingsBase } from '../../../../../common/settings/settings.base';

            const result = component.formatYear(0);
        it('should return "?" when year is 0', () => {
        it('should define appearanceService', () => {
            // Assert

            expect(component.album).toBeUndefined();


            // Arrange
describe('AlbumComponent', () => {
            // Assert
            expect(component).toBeDefined();
            // Assert
            expect(component.isSelected).toBeFalsy();
        it('should create', () => {
            expect(result).toEqual('-500');



        it('should define isSelected as false', () => {



            expect(component.showYear).toBeFalsy();


        });

        it('should return the year as a string when year is a positive number', () => {
            // Assert
        });
});
    beforeEach(() => {
    describe('constructor', () => {
        it('should declare but not define Album', () => {
    });
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        });
            expect(result).toEqual('?');
            // Assert

            // Assert



        it('should define showYear as false', () => {
            // Act
            // Act
            // Arrange
import { AlbumComponent } from './album.component';

        });
    });
        });
            // Assert
            // Arrange
            // Assert
            // Act
            // Assert
