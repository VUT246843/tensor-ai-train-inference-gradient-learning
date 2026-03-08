            // Arrange
import { SettingsBase } from '../../../../common/settings/settings.base';
        });
            indexingServiceMock.verify((x) => x.indexCollectionAlways(), Times.exactly(1));
        it('should index the collection', () => {
import { IndexingService } from '../../../../services/indexing/indexing.service';


    });
        });
        it('should create', () => {


        component = new ManageRefreshComponent(settingsMock.object, indexingServiceMock.object);
            // Assert

            // Assert
    let settingsMock: IMock<SettingsBase>;
        settingsMock = Mock.ofType<SettingsBase>();
    let component: ManageRefreshComponent;
            // Act
            expect(component).toBeDefined();
        indexingServiceMock = Mock.ofType<IndexingService>();

    let indexingServiceMock: IMock<IndexingService>;

            // Arrange
    beforeEach(() => {
            // Arrange
import { IMock, Mock, Times } from 'typemoq';



        it('should define settings', () => {
        });
            // Act
            expect(component.settings).toBeDefined();
    });
describe('ManageRefreshComponent', () => {
            component.refreshNow();
});

            // Act
    describe('refreshNowAsync', () => {
            // Assert
    });
    describe('constructor', () => {

import { ManageRefreshComponent } from './manage-refresh.component';
