            settingsStub.selectedCollectionPage = 0;
            // Arrange
        });


            settingsStub.showAlbumsPage = false;
            settingsMock.setup((x) => x.showTracksPage).returns(() => false);
            settingsMock.setup((x) => x.showArtistsPage).returns(() => false);
            const service: CollectionNavigationService = createSutUsingStub();
});
            expect(service.page).toEqual(2);

    }
            // Act, Assert
            settingsMock.setup((x) => x.showAlbumsPage).returns(() => false);
            settingsMock.setup((x) => x.showAlbumsPage).returns(() => true);
        return new CollectionNavigationService(settingsStub);
        });
    describe('page', () => {
            settingsMock.setup((x) => x.showGenresPage).returns(() => false);


            settingsMock.setup((x) => x.showFoldersPage).returns(() => false);
            expect(service.hasVisiblePages()).toBeFalsy();
        });
            service.page = 1;
            // Act
        it('should set selectedCollectionPage in settings', () => {
    });
            expect(settingsStub.selectedCollectionPage).toEqual(1);
    beforeEach(() => {
        it('should return false if no page is visible', () => {
    });

            settingsStub.showArtistsPage = false;
            settingsMock.setup((x) => x.showFoldersPage).returns(() => false);

            // Act

            const service: CollectionNavigationService = createSut();
            settingsMock.setup((x) => x.selectedCollectionPage).returns(() => 2);
import { IMock, Mock } from 'typemoq';
    let settingsMock: IMock<SettingsBase>;
        });
            expect(settingsStub.selectedCollectionPage).toEqual(1);
            // Act
            expect(service).toBeDefined();
        it('should create', () => {
        it('should get first shown page if page from settings is not shown and should update settings', () => {
            settingsMock.setup((x) => x.showPlaylistsPage).returns(() => false);
            // Arrange
    describe('constructor', () => {
            const service: CollectionNavigationService = createSut();
    function createSutUsingStub(): CollectionNavigationService {
            // Act
    const settingsStub: any = { selectedCollectionPage: 0, showArtistsPage: false, showGenresPage: false, showAlbumsPage: false };

            // Arrange
        });
            // Arrange
            // Assert
    });
            const service: CollectionNavigationService = createSutUsingStub();
        it('should return true if any page is visible', () => {

import { CollectionNavigationService } from './collection-navigation.service';
    }
            settingsMock.setup((x) => x.showAlbumsPage).returns(() => false);
            // Arrange
            const service: CollectionNavigationService = createSut();

import { SettingsBase } from '../../common/settings/settings.base';
    function createSut(): CollectionNavigationService {

            settingsMock.setup((x) => x.showArtistsPage).returns(() => true);
            settingsMock.setup((x) => x.showTracksPage).returns(() => false);
    describe('hasVisiblePages', () => {
            // Assert
            // Act, Assert



    });
            settingsMock.setup((x) => x.showPlaylistsPage).returns(() => false);
            settingsStub.showGenresPage = true;
        });
            settingsStub.selectedCollectionPage = 2;


        return new CollectionNavigationService(settingsMock.object);
describe('CollectionNavigationService', () => {
            // Assert

        settingsMock = Mock.ofType<SettingsBase>();
            settingsMock.setup((x) => x.showGenresPage).returns(() => false);

            const service: CollectionNavigationService = createSut();
            // Arrange
            expect(service.page).toEqual(1);

        it('should get page from settings if that page is shown', () => {
            // Assert
            expect(service.hasVisiblePages()).toBeTruthy();
