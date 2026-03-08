            // Arrange
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();


        it('should request to show now playing', async () => {
            // Act
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
    let component: CollectionPlaybackPaneComponent;
describe('CollectionPlaybackPaneComponent', () => {
            // Arrange
            expect(component.settings).toBeDefined();
        });
            // Act
    });



    });
        it('should request to show the playback queue', () => {

            // Act
            // Assert
            // Arrange
            component.showPlaybackQueue();
            expect(component.appearanceService).toBeDefined();
        component = new CollectionPlaybackPaneComponent(appearanceServiceMock.object, settingsMock.object, navigationServiceMock.object);
});
            // Assert
        });

        settingsMock = Mock.ofType<SettingsBase>();
    });
            // Arrange
            // Act
    });
            // Assert

import { IMock, Mock, Times } from 'typemoq';
            // Arrange

    describe('showPlaybackQueue', () => {

            // Assert
            navigationServiceMock.verify((x) => x.navigateToNowPlayingAsync(), Times.exactly(1));
            navigationServiceMock.verify((x) => x.showPlaybackQueue(), Times.exactly(1));

        });
    describe('showNowPlaying', () => {
import { SettingsBase } from '../../../../common/settings/settings.base';


    describe('constructor', () => {
        it('should define appearanceService', () => {
        });
        it('should create', () => {
            expect(component).toBeDefined();
            // Assert
    beforeEach(() => {
        it('should define settings', () => {

        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
import { CollectionPlaybackPaneComponent } from './collection-playback-pane.component';

    let settingsMock: IMock<SettingsBase>;
            // Act
            await component.showNowPlayingAsync();

import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
    let navigationServiceMock: IMock<NavigationServiceBase>;

        });
