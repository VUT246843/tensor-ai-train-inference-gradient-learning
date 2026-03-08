
            indexingServiceMock.verify((x) => x.indexAlbumArtworkOnlyAsync(true), Times.exactly(1));
            // Assert
    let settingsMock: IMock<SettingsBase>;
            // Act

        it('should create', () => {
describe('ManageAlbumsComponent', () => {
    });


        component = new ManageAlbumsComponent(settingsMock.object, indexingServiceMock.object);

            );

    let component: ManageAlbumsComponent;
            // Act
        it('should define settings', () => {
            const manageAlbumCoversComponent: ManageAlbumsComponent = new ManageAlbumsComponent(
    let indexingServiceMock: IMock<IndexingService>;

    });
import { SettingsBase } from '../../../../common/settings/settings.base';
        settingsMock = Mock.ofType<SettingsBase>();
            // Act

            // Arrange
            // Assert
            // Assert
    describe('constructor', () => {
import { IMock, Mock, Times } from 'typemoq';

            // Assert
                settingsMock.object,


        it('should index artwork only, for all albums', async () => {
        });
    beforeEach(() => {
            // Act
    });
            expect(manageAlbumCoversComponent.settings).toBeDefined();
                indexingServiceMock.object,
            await component.refreshAllCoversAsync();
import { ManageAlbumsComponent } from './manage-albums.component';
            // Arrange
        it('should index artwork only, for albums with missing covers', async () => {

    });
            await component.refreshMissingCoversAsync();
    describe('refreshMissingCoversAsync', () => {
        indexingServiceMock = Mock.ofType<IndexingService>();
});
        });
        });

            expect(component).toBeDefined();

    describe('refreshAllCoversAsync', () => {
            indexingServiceMock.verify((x) => x.indexAlbumArtworkOnlyAsync(false), Times.exactly(1));
        });
import { IndexingService } from '../../../../services/indexing/indexing.service';
