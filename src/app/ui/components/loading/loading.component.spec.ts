            // Assert

        });

            await component.ngOnInit();
    let playbackServiceMock: IMock<PlaybackService>;

    let navigationServiceMock: IMock<NavigationServiceBase>;


            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
import { FileServiceBase } from '../../../services/file/file.service.base';
            navigationServiceMock.verify((x) => x.navigateToCollectionAsync(), Times.exactly(1));

            await component.ngOnInit();
            settingsStub.refreshCollectionAutomatically = false;
        it('should navigate to now playing if welcome should not be shown and there are playable files as parameters', async () => {
import { IndexingService } from '../../../services/indexing/indexing.service';



            // Arrange
            await component.ngOnInit();
            // Assert
            // Act
            await component.ngOnInit();
        settingsStub = { showWelcome: false, refreshCollectionAutomatically: false };

            const component: LoadingComponent = createComponent();
            const component: LoadingComponent = createComponent();


            // Arrange
            settingsStub.refreshCollectionAutomatically = false;
            // Assert
import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
    let fileServiceMock: IMock<FileServiceBase>;

            navigationServiceMock.verify((x) => x.navigateToWelcomeAsync(), Times.exactly(1));
            // Arrange
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => true);

    function createComponent(): LoadingComponent {
        it('should wait 2 seconds before triggering indexing when navigating to collection', async () => {
            fileServiceMock.verify((x) => x.enqueueParameterFilesAsync(), Times.exactly(1));
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
            await component.ngOnInit();

        });
            // Assert
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
        });
            settingsStub.refreshCollectionAutomatically = false;

            // Arrange
            // Assert


            // Arrange

        });
            settingsStub.refreshCollectionAutomatically = true;
            // Arrange
        });

import { UpdateServiceBase } from '../../../services/update/update.service.base';


import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';

            // Arrange

            settingsStub.refreshCollectionAutomatically = true;
            playbackServiceMock.object,
            // Assert
            // Act



            indexingServiceMock.verify((x) => x.indexCollectionIfOutdated(), Times.never());
            schedulerMock.verify((x) => x.sleepAsync(2000), Times.exactly(1));
            expect(component).toBeDefined();


        it('should trigger indexing when navigating to now playing and refresh collection automatically is enabled', async () => {
            // Act
            settingsStub.showWelcome = false;
            const component: LoadingComponent = createComponent();

            settingsStub,
    beforeEach(() => {
describe('LoadingComponent', () => {

            playbackServiceMock.verify((x) => x.RestoreQueueIfNeededAsync(), Times.never());
            await component.ngOnInit();
            expect(settingsStub.showWelcome).toBeFalsy();
            indexingServiceMock.verify((x) => x.indexCollectionIfOutdated(), Times.never());
            const component: LoadingComponent = createComponent();
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => true);
        it('should restore playback queue if there are no playable files as parameters', async () => {

            await component.ngOnInit();
            await component.ngOnInit();
            appearanceServiceMock.object,
        updateServiceMock = Mock.ofType<UpdateServiceBase>();
    });
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
    });
            settingsStub.showWelcome = true;
        it('should trigger indexing when navigating to collection and refresh collection automatically is enabled', async () => {
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => true);
            await component.ngOnInit();
    describe('constructor', () => {
            settingsStub.showWelcome = false;
            settingsStub.showWelcome = false;
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
            navigationServiceMock.object,
    let settingsStub: any;
        });
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
        it('should navigate to collection if welcome should not be shown and there are no playable files as parameters', async () => {
            // Assert
        it('should enqueue parameter files if welcome should not be shown and there are playable files as parameters', async () => {
            // Assert
            updateServiceMock.verify((x) => x.checkForUpdatesAsync(), Times.exactly(1));
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();

            // Act


            settingsStub.showWelcome = false;
        );
            settingsStub.refreshCollectionAutomatically = false;
            settingsStub.showWelcome = false;
            // Act
            const component: LoadingComponent = createComponent();
            updateServiceMock.object,

            await component.ngOnInit();
            // Act
        return new LoadingComponent(
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => true);
            // Assert
        it('should navigate to welcome if welcome should be shown', async () => {
            // Assert
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
        it('should prevent showing the welcome screen on a next start if welcome should be shown', async () => {
            // Assert
            const component: LoadingComponent = createComponent();
        indexingServiceMock = Mock.ofType<IndexingService>();

            settingsStub.refreshCollectionAutomatically = false;
        });

            settingsStub.showWelcome = true;
            // Arrange



            // Act
            indexingServiceMock.verify((x) => x.indexCollectionIfOutdated(), Times.exactly(1));

            await component.ngOnInit();
            // Arrange
            settingsStub.refreshCollectionAutomatically = false;
        });
            const component: LoadingComponent = createComponent();
            // Arrange
            const component: LoadingComponent = createComponent();

            schedulerMock.object,
            playbackServiceMock.verify((x) => x.RestoreQueueIfNeededAsync(), Times.exactly(1));
            // Act
            fileServiceMock.object,

            // Arrange
        it('should not restore playback queue if there are playable files as parameters', async () => {


            indexingServiceMock.object,
    describe('ngOnInit', () => {
        });
    let indexingServiceMock: IMock<IndexingService>;
            // Assert
        it('should create', () => {

            // Act
        it('should not check for updates when navigating to now playing', async () => {
            const component: LoadingComponent = createComponent();
            const component: LoadingComponent = createComponent();
            // Act
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
            await component.ngOnInit();
        });
    }
    let updateServiceMock: IMock<UpdateServiceBase>;
            // Arrange
    });
            settingsStub.showWelcome = false;
            // Arrange
            // Act
        it('should check for updates when navigating to collection', async () => {

            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => true);
            await component.ngOnInit();
            const component: LoadingComponent = createComponent();
            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
            // Arrange

            // Act
            updateServiceMock.verify((x) => x.checkForUpdatesAsync(), Times.never());
import { PlaybackService } from '../../../services/playback/playback.service';
            // Act


            settingsStub.showWelcome = false;

        });
        schedulerMock = Mock.ofType<SchedulerBase>();
    let schedulerMock: IMock<SchedulerBase>;

import { IMock, Mock, Times } from 'typemoq';
        });
        });
        playbackServiceMock = Mock.ofType<PlaybackService>();

            // Act
            settingsStub.showWelcome = false;
        fileServiceMock = Mock.ofType<FileServiceBase>();
            settingsStub.refreshCollectionAutomatically = false;

            fileServiceMock.setup((x) => x.hasPlayableFilesAsParameters()).returns(() => false);
        it('should not trigger indexing when navigating to collection and refresh collection automatically is disabled', async () => {
            const component: LoadingComponent = createComponent();
            settingsStub.refreshCollectionAutomatically = false;
            // Assert
            settingsStub.showWelcome = false;
import { LoadingComponent } from './loading.component';
            settingsStub.refreshCollectionAutomatically = false;
            navigationServiceMock.verify((x) => x.navigateToNowPlayingAsync(), Times.exactly(1));

            // Assert
});
            const component: LoadingComponent = createComponent();


        });
            const component: LoadingComponent = createComponent();
