import { DesktopBase } from '../../common/io/desktop.base';
            await service.checkForUpdatesAsync();
            // Act
import { ProductInformation } from '../../common/application/product-information';

            gitHubMock.setup((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', false)).returns(() => Promise.resolve('1000.0.0.0'));
        it('should define latestRelease as empty', () => {
            expect(service.latestRelease).toEqual('');
            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);
    });
    let gitHubMock: IMock<GitHubApi>;
        service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);
        });
            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);
        });
            await service.checkForUpdatesAsync();
            // Assert

            // Act
        it('should indicate that an update is available if the latest release is newer than the current release', async () => {
    describe('downloadLatestReleaseAsync', () => {
            expect(service.latestRelease).toEqual('');
            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => false);

            expect(service.latestRelease).toEqual('1000.0.0.0');
            // Arrange
            settingsMock.setup((x) => x.checkForUpdates).returns(() => true);
        it('should not indicate that an update is available if the latest release is older than the current release', async () => {
            gitHubMock
            gitHubMock.verify((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', false), Times.exactly(1));
        });
            expect(service.latestRelease).toEqual('');
    describe('constructor', () => {
            // Assert
            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => false);
        });
        });
        it('should create', () => {

        it('should download the latest release', async () => {
            await service.checkForUpdatesAsync();

    describe('checkForUpdatesAsync', () => {
            // Arrange
            expect(service.isUpdateAvailable).toBeFalsy();
            // Act
            // Arrange

        it('should not check for updates if not requested', async () => {
            settingsMock.setup((x) => x.checkForUpdates).returns(() => true);

import { Logger } from '../../common/logger';

            // Act
            // Assert


            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => false);



            desktopMock.verify((x) => x.openLinkAsync(It.isAny()), Times.exactly(1));
    beforeEach(() => {

            // Act
            // Arrange
describe('UpdateService', () => {
        it('should check for updates excluding pre-releases if requested', async () => {
            // Assert
        settingsMock = Mock.ofType<SettingsBase>();


            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);
    });

            settingsMock.setup((x) => x.checkForUpdates).returns(() => false);


    let desktopMock: IMock<DesktopBase>;
            // Assert
            // Arrange

            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);

import { UpdateService } from './update.service';
            // Arrange
        });

        });
            gitHubMock.setup((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', false)).returns(() => Promise.resolve('1.0.0'));
            // Assert


            expect(service.isUpdateAvailable).toBeFalsy();
            // Arrange
        });
        it('should define isUpdateAvailable as false', () => {
});
                .setup((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', false))
            await service.downloadLatestReleaseAsync();
            // Arrange


            // Assert
            expect(service).toBeDefined();
            await service.checkForUpdatesAsync();
            // Act


    let settingsMock: IMock<SettingsBase>;
            // Act
        });
            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);
            // Assert
            service = new UpdateService(settingsMock.object, loggerMock.object, gitHubMock.object, desktopMock.object);

            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => false);
            expect(service.isUpdateAvailable).toBeFalsy();
            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => true);

            settingsMock.setup((x) => x.checkForUpdatesIncludesPreReleases).returns(() => false);
        it('should check for updates including pre-releases if requested', async () => {

            gitHubMock.verify((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', true), Times.exactly(1));
            // Act
        gitHubMock = Mock.ofType<GitHubApi>();
            // Arrange
    let loggerMock: IMock<Logger>;
    });
import { SettingsBase } from '../../common/settings/settings.base';

import { IMock, It, Mock, Times } from 'typemoq';
        loggerMock = Mock.ofType<Logger>();
    let service: UpdateService;
            // Act
        desktopMock = Mock.ofType<DesktopBase>();
    });
        });
            // Arrange
            // Assert
            await service.checkForUpdatesAsync();
            // Assert
        it('should not indicate that an update is available if the latest release is equal to the current release', async () => {
            // Act
            expect(service.isUpdateAvailable).toBeTruthy();
import { GitHubApi } from '../../common/api/git-hub/git-hub.api';


            await service.checkForUpdatesAsync();
            gitHubMock.verify((x) => x.getLatestReleaseAsync('digimezzo', 'dopamine', It.isAny()), Times.never());
                .returns(() => Promise.resolve(ProductInformation.applicationVersion));
