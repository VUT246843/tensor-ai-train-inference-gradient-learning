            expect(component).toBeDefined();
            // Arrange



        });
    });
            // Assert
        });

        it('should define appearanceService', () => {
            // Act
            // Act

            // Act
            expect(component.track).toBeUndefined();
            // Assert
        });
            // Act


            // Arrange
    });

            // Arrange
            // Assert
    let settingsMock: IMock<SettingsBase>;

        it('should define settings', () => {
            // Arrange
            expect(component.canShowHeader).toBeFalsy();
        });

        });
import { SettingsBase } from '../../../../common/settings/settings.base';

            expect(component.settings).toBeDefined();
    let component: TrackComponent;
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
            // Act
        it('should declare but not define Track', () => {


import { TrackComponent } from './track.component';

    beforeEach(() => {
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Assert
        component = new TrackComponent(appearanceServiceMock.object, settingsMock.object);
            expect(component.appearanceService).toBeDefined();

describe('TrackComponent', () => {
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';

            // Assert
        it('should create', () => {
});
        settingsMock = Mock.ofType<SettingsBase>();
    describe('constructor', () => {
        it('should define canShowHeader as false', () => {

            // Arrange
import { IMock, Mock } from 'typemoq';

