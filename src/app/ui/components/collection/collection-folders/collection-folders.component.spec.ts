        });
            playbackIndicationServiceMock.reset();
            // Assert

            // Arrange
            // Act
        });
            expect(component.appearanceService).toBeDefined();
            // Assert
            subfolder1 = new SubfolderModel('/home/user/Music/subfolder1', false);
            );

            // Assert

        it('should set the playing subfolder on playback started', async () => {
    let playbackServicePlaybackStoppedMock: Subject<void>;
            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(folder1.path), Times.exactly(1));

            contextMenuOpenerMock.verify((x) => x.open(component.subfolderContextMenu, event, subfolder), Times.exactly(1));
            // Arrange
    describe('ngOnInit', () => {
    let playbackServiceMock: IMock<PlaybackService>;
        });
            expect(component.folders).toBeDefined();
            // Act
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';

            // Act
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));

            // Arrange
            await component.ngOnInit();

            await component.ngOnInit();

        });
        });
            // Arrange
            // Assert


            folderServiceMock.reset();
            // Act



            component.setSelectedSubfolder(subfolder1);
            const component: CollectionFoldersComponent = createComponent();
            // Arrange
        track1 = new Track('track1');
            // Assert
            // Act
            // Act
        });
            // Act
            const component: CollectionFoldersComponent = createComponent();
            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, folder1.path), Times.exactly(1));
            folderServiceMock.verify((x) => x.getSubfoldersAsync(It.isAny(), It.isAny()), Times.never());
        it('should get the folders when indexing is finished', async () => {
            // Act
            const component: CollectionFoldersComponent = createComponent();
            // Assert
            schedulerMock.object,
            // Act

            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);


import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
        });
            const component: CollectionFoldersComponent = createComponent();
            // Act
    describe('onSubfolderContextMenu', () => {
            foldersPersisterMock.verify(
        });
            // Assert
            // Assert

        subfolder2 = new SubfolderModel('/home/user/Music/subfolder2', false);
            await component.ngOnInit();
                Times.exactly(1),
            foldersPersisterMock.verify(


    let indexingServiceIndexingFinishedMock: Subject<void>;

        tracks = new TrackModels();
            await component.setOpenedSubfolderAsync(subfolder1);
            // Assert
        it('should save the opened subfolder to the settings', async () => {
        it('should save the opened subfolder to the settings', async () => {

import { Scheduler } from '../../../../common/scheduling/scheduler';

            );
            subfolder2 = new SubfolderModel('/home/user/Music/subfolder2', false);


        it('should declare but not define selectedSubfolder', () => {
            // Arrange
            // Act
            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, subfolder1.path), Times.exactly(1));
        it('should get tracks for the opened folder if there are no subfolders', async () => {
    let desktopMock: IMock<DesktopBase>;

                (x) => x.setOpenedSubfolder(It.isObjectWith<SubfolderModel>({ path: subfolder1.path })),

            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve([]));
            await component.ngOnInit();
    let trackServiceMock: IMock<TrackServiceBase>;
        return new CollectionFoldersComponent(
            hacksMock.object,
            await component.ngOnInit();
            // Assert

            folderServiceMock.verify((x) => x.getSubfoldersAsync(folder1, subfolder1), Times.exactly(1));
            expect(component.subfolderBreadcrumbs).toBeDefined();
            await component.setOpenedSubfolderAsync(subfolder1);
        it('should set the selected subfolder', () => {
        it('should create', () => {
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
            // Arrange
            const component: CollectionFoldersComponent = createComponent();
import { ContextMenuOpener } from '../../context-menu-opener';
        metadataService_ratingSaved = new Subject();
import { Logger } from '../../../../common/logger';
    });
            await component.ngOnInit();
        });
            // Assert
            folderServiceMock.reset();
            const component: CollectionFoldersComponent = createComponent();


        metadataServiceMock = Mock.ofType<MetadataService>();
            // Assert
        it('should define subfolders', () => {
        playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
import { TrackModel } from '../../../../services/track/track-model';
        it('should get tracks for the first go to parent subfolder if there are subfolders and at least one is go to parent', async () => {
    describe('goToManageCollection', () => {

        collectionChangedMock = new Subject();
            // Arrange

            const component: CollectionFoldersComponent = createComponent();
            // Act
    let schedulerMock: IMock<Scheduler>;

        settingsStub = { foldersLeftPaneWidthPercent: 30 };

            component.getFolders();
        });

            const component: CollectionFoldersComponent = createComponent();

            subfolders = [subfolder1, subfolder2];

            await component.ngOnInit();
        it('should set the playing subfolder', async () => {
            folderServiceMock.reset();
            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(subfolder1.path), Times.exactly(1));

            // Arrange
            const component: CollectionFoldersComponent = createComponent();
            expect(component.leftPaneSize).toEqual(30);

        it('should save the opened folder to the settings', async () => {

            // Assert
            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(subfolder1.path), Times.exactly(1));
            collectionServiceMock.object,
            const component: CollectionFoldersComponent = createComponent();
            const component: CollectionFoldersComponent = createComponent();

            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            const component: CollectionFoldersComponent = createComponent();
        it('should get breadcrumbs for the opened folder if there are subfolders but none is go to parent', async () => {
            // Assert
        });
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
        playbackServicePlaybackStoppedMock = new Subject();
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;
            // Arrange
            const subfolder: SubfolderModel = subfolder1;
        subfolder1 = new SubfolderModel('/home/user/Music/subfolder1', true);
            // Act
            await component.ngOnInit();
            // Arrange


    let subfolder2: SubfolderModel;
            const component: CollectionFoldersComponent = createComponent();

        });
            // Arrange

            subfolder2 = new SubfolderModel('/home/user/Music/subfolder2', false);
            // Assert
            await component.setOpenedFolderAsync(folder1);
        it('should initialize MouseSelectionWatcher using tracks', async () => {
import { Folder } from '../../../../data/entities/folder';
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve([]));
            // Arrange

            // Assert
        });
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
            // Arrange
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        it('should define mouseSelectionWatcher', () => {
            const component: CollectionFoldersComponent = createComponent();
            // Act
    let metadataService_ratingSaved: Subject<TrackModel>;
    let playbackIndicationServiceMock: IMock<PlaybackIndicationServiceBase>;
            await component.ngOnInit();
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
        it('should get subfolders for the given opened subfolder if the opened folder is not undefined', async () => {
            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(folder1.path), Times.exactly(1));
        folderServiceMock = Mock.ofType<FolderServiceBase>();
            const component: CollectionFoldersComponent = createComponent();
        it('should get tracks for the opened folder if there are no subfolders', async () => {

    let hacksMock: IMock<Hacks>;
            addToPlaylistMenuMock.object,
            await component.setOpenedSubfolderAsync(subfolder1);
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;

            folderTracksPersisterMock.object,

    let trackModel1: TrackModel;
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
    let folderServiceMock: IMock<FolderServiceBase>;
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            expect(component.openedFolder).toEqual(folder1);
    let settingsStub: any;
                (x) => x.setOpenedSubfolder(It.isObjectWith<SubfolderModel>({ path: subfolder1.path })),
import { DateTime } from '../../../../common/date-time';

            expect(component.playbackService).toBeDefined();
            subfolder1 = new SubfolderModel('/home/user/Music/subfolder1', false);
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
            playbackIndicationServiceMock.verify((x) => x.setPlayingSubfolder(subfolders, trackModel1), Times.exactly(1));


        folderServiceMock.setup((x) => x.getSubfolderBreadcrumbs(It.isAny(), It.isAny())).returns(() => subfolders);

            // Assert
            expect(component.selectedSubfolder).toBeUndefined();
        const metadataService_ratingSaved$: Observable<TrackModel> = metadataService_ratingSaved.asObservable();


            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(folder1.path), Times.exactly(1));
            // Act
            trackServiceMock.setup((x) => x.getTracksInSubfolderAsync(It.isAny())).returns(() => Promise.resolve(new TrackModels()));

        });
        it('should save the left pane width to the settings', () => {
            await component.setOpenedSubfolderAsync(subfolder1);
            // Assert
            // Assert
        track2 = new Track('track2');
            foldersPersisterMock.setup((x) => x.getOpenedSubfolder()).returns(() => subfolder1);
    });
            foldersPersisterMock.object,
            folderServiceMock.reset();
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';

        it('should set the opened folder from the settings', async () => {
        });
            // Arrange
            subfolders = [subfolder1, subfolder2];
            collectionChangedMock.next();
            expect(component.selectedSubfolder).toBe(subfolder1);
            // Arrange
            // Arrange
import { PlaybackService } from '../../../../services/playback/playback.service';
            await component.setOpenedSubfolderAsync(subfolder1);

            await component.ngOnInit();
        });
            // Arrange
import { FolderServiceBase } from '../../../../services/folder/folder.service.base';
            await component.ngOnInit();
            // Act
            // Assert
    let appearanceServiceMock: IMock<AppearanceServiceBase>;

            const component: CollectionFoldersComponent = createComponent();
            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, folder1.path), Times.exactly(1));

            folderServiceMock.reset();
            subfolder1 = new SubfolderModel('/home/user/Music/subfolder1', false);
        });
    const flushPromises = () => new Promise(process.nextTick);

            // Act
            // Assert
        collectionServiceMock.setup((x) => x.collectionChanged$).returns(() => collectionChangedMock$);

        it('should set left pane size from settings', () => {
            // Arrange
    });
            foldersPersisterMock.verify(
            expect(component.addToPlaylistMenu).toBeDefined();
            // Assert
        it('should get the folders', async () => {
        indexingServiceMock.setup((x) => x.indexingFinished$).returns(() => indexingServiceIndexingFinishedMock$);
        folder2 = new FolderModel(new Folder('/home/user/Downloads'));

            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, subfolder1.path), Times.exactly(1));
    let track2: Track;
            playbackIndicationServiceMock.verify((x) => x.setPlayingSubfolder(subfolders, trackModel1), Times.exactly(1));
            const component: CollectionFoldersComponent = createComponent();
    let foldersPersisterMock: IMock<FoldersPersister>;
            const component: CollectionFoldersComponent = createComponent();
            // Act

    let trackModel2: TrackModel;
describe('CollectionFoldersComponent', () => {
            expect(component.mouseSelectionWatcher).toBeDefined();
            const component: CollectionFoldersComponent = createComponent();
import { MetadataService } from '../../../../services/metadata/metadata.service';
            // Assert
            // Assert
            // Act
            // Assert
        });

        collectionChangedMock$ = collectionChangedMock.asObservable();



import { CollectionFoldersComponent } from './collection-folders.component';
    let indexingServiceMock: IMock<IndexingService>;
            const component: CollectionFoldersComponent = createComponent();
        });
    let tracks: TrackModels;
            subfolder2 = new SubfolderModel('/home/user/Music/subfolder2', false);
                Times.exactly(1),
        playbackIndicationServiceMock = Mock.ofType<PlaybackIndicationServiceBase>();
            folderServiceMock.object,
            // Arrange
            // Arrange

            // Act
            const component: CollectionFoldersComponent = createComponent();
    describe('getFoldersAsync', () => {

        loggerMock = Mock.ofType<Logger>();



    describe('setSelectedSubfolder', () => {
            // Assert
import { IndexingService } from '../../../../services/indexing/indexing.service';
            const component: CollectionFoldersComponent = createComponent();

        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
            subfolder1 = new SubfolderModel('/home/user/Music/subfolder1', false);
    let dateTimeMock: IMock<DateTime>;
            await scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds + Constants.shortListLoadDelayMilliseconds + 100);

        });


            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);

        it('should define folderService', () => {
            // Assert

        playbackServicePlaybackStartedMock = new Subject();
            // Arrange
            // Act
    let folders: FolderModel[];
            // Act
            // Arrange


        });
        trackServiceMock = Mock.ofType<TrackServiceBase>();
            // Act
            // Act
            trackServiceMock.verify((x) => x.getTracksInSubfolderAsync(folder1.path), Times.exactly(1));
            // Arrange
            component.splitDragEnd({ sizes: [40, 60] } as IOutputData);
    let subfolder1: SubfolderModel;
            // Arrange
        it('should define folders', () => {

            // Act
    describe('setOPenedFolderAsync', () => {
        it('should get tracks for the opened folder if there are subfolders but none is go to parent', async () => {
    describe('splitDragEnd', () => {
            // Assert

            // Act


            await component.ngOnInit();
            const component: CollectionFoldersComponent = createComponent();
        it('should define appearanceService', () => {
            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, folder1.path), Times.exactly(1));
    });
            // Act
    let searchServiceMock: IMock<SearchServiceBase>;

    let collectionChangedMock: Subject<void>;

            // Arrange
            folderServiceMock.reset();
import { TrackModels } from '../../../../services/track/track-models';
            await component.ngOnInit();
            // Arrange
            const scheduler: Scheduler = new Scheduler();
    let collectionServiceMock: IMock<CollectionServiceBase>;
    let folder2: FolderModel;
        });
        folderTracksPersisterMock = Mock.ofType<FolderTracksPersister>();
        track2.rating = 2;
            folderServiceMock.verify((x) => x.getSubfoldersAsync(folder1, subfolder1), Times.exactly(1));
        dateTimeMock = Mock.ofType<DateTime>();

            // Assert
            const component: CollectionFoldersComponent = createComponent();
        });
            searchServiceMock.object,
            await component.ngOnInit();
            await component.ngOnInit();
        });

            // Arrange
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';

            await component.ngOnInit();
import { Hacks } from '../../../../common/hacks';

            playbackServiceMock.object,

        it('should get breadcrumbs for the opened folder if there are no subfolders', async () => {
        it('should get tracks for the opened folder if there are subfolders but none is go to parent', async () => {
        it('should set the playing track', async () => {


            const component: CollectionFoldersComponent = createComponent();
        const playbackServicePlaybackStartedMock$: Observable<PlaybackStarted> = playbackServicePlaybackStartedMock.asObservable();
            foldersPersisterMock.reset();
            await component.ngOnInit();


            // Arrange

            settingsStub,

            // Assert
            // Act
        it('should get breadcrumbs for the first go to parent subfolder if there are subfolders and at least one is go to parent', async () => {

            subfolders = [subfolder1, subfolder2];
            const component: CollectionFoldersComponent = createComponent();
            expect(component.folderService).toBeDefined();
        folders = [folder1, folder2];
    });

            playbackIndicationServiceMock.object,
            indexingServiceMock.object,

            // Act
    });
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));

            await component.setOpenedSubfolderAsync(subfolder1);
        searchServiceMock = Mock.ofType<SearchServiceBase>();
    let track1: Track;
        it('should define subfolderBreadcrumbs', () => {


            // Assert
            folderServiceMock.verify((x) => x.getSubfolderBreadcrumbs(folder1, folder1.path), Times.exactly(1));

            folderServiceMock.reset();


            // Act
            await component.ngOnInit();

            navigationServiceMock.verify((x) => x.navigateToManageCollectionAsync(), Times.exactly(1));
        });
            // Act
        it('should open the given folder in the desktop', async () => {
            await component.setOpenedSubfolderAsync(undefined);
            expect(component.subfolders).toBeDefined();



            component.onSubfolderContextMenu(event, subfolder);
            const component: CollectionFoldersComponent = createComponent();
            // Act
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStartedMock$);
            // Act

            expect(component.tracks).toBeDefined();
            const component: CollectionFoldersComponent = createComponent();
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
            await component.setOpenedSubfolderAsync(subfolder1);
            // Arrange
            // Arrange
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
        folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
        it('should get tracks for the first go to parent subfolder if there are subfolders and at least one is go to parent', async () => {
            await component.ngOnInit();
            folderServiceMock.verify((x) => x.getSubfoldersAsync(folder1, subfolder1), Times.exactly(1));

        it('should define contextMenuOpener', () => {

    let subfolders: SubfolderModel[];
            // Assert


import { FolderModel } from '../../../../services/folder/folder-model';
            await component.setOpenedFolderAsync(folder1);
import { SubfolderModel } from '../../../../services/folder/subfolder-model';
            // Assert
            await component.ngOnInit();

            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));

            // Assert
            // Arrange
        it('should define tracks', () => {
    });


            foldersPersisterMock.reset();
            const component: CollectionFoldersComponent = createComponent();
            playbackIndicationServiceMock.verify((x) => x.setPlayingTrack(component.tracks.tracks, trackModel1), Times.exactly(1));
            const component: CollectionFoldersComponent = createComponent();

            foldersPersisterMock.setup((x) => x.getOpenedFolder(It.isAny())).returns(() => undefined);
            // Arrange


            // Act
            // Arrange
            const component: CollectionFoldersComponent = createComponent();
import { FoldersPersister } from './folders-persister';
            // Act

            // Act
        });



                Times.exactly(1),
            const scheduler: Scheduler = new Scheduler();
import { Observable, Subject } from 'rxjs';
            // Act
            // Assert
            // Arrange

        schedulerMock = Mock.ofType<Scheduler>();
            const component: CollectionFoldersComponent = createComponent();
            folderServiceMock.reset();
            await component.ngOnInit();
        });
            const component: CollectionFoldersComponent = createComponent();
            await component.onOpenSubfolderAsync(subfolder1);
        it('should get breadcrumbs for the opened folder if there are subfolders but none is go to parent', async () => {
                (x) => x.setOpenedSubfolder(It.isObjectWith<SubfolderModel>({ path: subfolder1.path })),
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
            const component: CollectionFoldersComponent = createComponent();
            desktopMock.verify((x) => x.openPathAsync(subfolder1.path), Times.exactly(1));

            indexingServiceIndexingFinishedMock.next();
            // Arrange
            const component: CollectionFoldersComponent = createComponent();
        foldersPersisterMock.setup((x) => x.getOpenedSubfolder()).returns(() => subfolder1);
            subfolders = [subfolder1, subfolder2];
        });
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);

        });

            // Assert

            const component: CollectionFoldersComponent = createComponent();
            appearanceServiceMock.object,
        });
        });
            navigationServiceMock.object,

            // Assert
        folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
        });
        );
            // Arrange
            await component.setOpenedFolderAsync(folder1);
        playbackServiceMock = Mock.ofType<PlaybackService>();

    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;

            // Arrange
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);

            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
            // Assert

            loggerMock.object,
        it('should define playbackService', () => {
import { IMock, It, Mock, Times } from 'typemoq';

            // Act
        it('should get subfolders for the the opened subfolder from the settings', async () => {
        it('should get breadcrumbs for the first go to parent subfolder if there are subfolders and at least one is go to parent', async () => {
import { Track } from '../../../../data/entities/track';
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
        it('should set the opened folder', async () => {
    let folderTracksPersisterMock: IMock<FolderTracksPersister>;
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsStub);
            // Arrange
        });
            desktopMock.setup((x) => x.openPathAsync(subfolder1.path)).returns(() => Promise.resolve());

            await component.goToManageCollectionAsync();
        it('should open the context menu', () => {
            await component.ngOnInit();
        subfolders = [subfolder1, subfolder2];
        });
            // Arrange
            folderServiceMock.reset();
    });
            // Act
            // Arrange
        hacksMock = Mock.ofType<Hacks>();
        it('should declare subfolderContextMenu', () => {



        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        });
        it('should get breadcrumbs for the opened folder if there are no subfolders', async () => {
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve([]));
        desktopMock = Mock.ofType<DesktopBase>();
            // Act
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
        folder1 = new FolderModel(new Folder('/home/user/Music'));
import { TrackServiceBase } from '../../../../services/track/track.service.base';
            expect(component).toBeDefined();

    let collectionChangedMock$: Observable<void>;
            // Arrange
            component.selectedSubfolder = undefined;
        const indexingServiceIndexingFinishedMock$: Observable<void> = indexingServiceIndexingFinishedMock.asObservable();
            await scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds + Constants.shortListLoadDelayMilliseconds + 100);
            const component: CollectionFoldersComponent = createComponent();
        it('should save the opened subfolder to the settings', async () => {
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve([]));
            const component: CollectionFoldersComponent = createComponent();
        metadataServiceMock.setup((x) => x.ratingSaved$).returns(() => metadataService_ratingSaved$);
            // Act
            expect(component.contextMenuOpener).toBeDefined();
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
            // Arrange
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);

            const component: CollectionFoldersComponent = createComponent();

            folderServiceMock.reset();
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve(subfolders));
            expect(component.openedFolder).toBe(folder1);
import { PlaybackStarted } from '../../../../services/playback/playback-started';

    let loggerMock: IMock<Logger>;
        });
        });
            // Act
            component.openedFolder = folder2;
import { PlaybackIndicationServiceBase } from '../../../../services/playback-indication/playback-indication.service.base';
            // Assert
        });
            // Arrange
            subfolder2 = new SubfolderModel('/home/user/Music/subfolder2', false);
            const component: CollectionFoldersComponent = createComponent();
        });
    beforeEach(() => {
});
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsStub);
            // Arrange

            await component.setOpenedSubfolderAsync(subfolder1);




            // Assert
        indexingServiceIndexingFinishedMock = new Subject();


            // Act
        tracks.addTrack(trackModel2);
            component.subfolders = subfolders;

            mouseSelectionWatcherMock.reset();
            // Assert
        indexingServiceMock = Mock.ofType<IndexingService>();
            contextMenuOpenerMock.object,
        });
        it('should not get subfolders if the opened folder is undefined', async () => {
            folderServiceMock.reset();
    });
            playbackServicePlaybackStartedMock.next(new PlaybackStarted(trackModel1, false));
            // Assert
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            desktopMock.object,
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            await component.setOpenedSubfolderAsync(subfolder1);
        const playbackServicePlaybackStoppedMock$: Observable<void> = playbackServicePlaybackStoppedMock.asObservable();
        });
        tracks.addTrack(trackModel1);
        });

            const component: CollectionFoldersComponent = createComponent();
            await component.ngOnInit();
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            // Assert
            const component: CollectionFoldersComponent = createComponent();
            trackServiceMock.reset();
            // Arrange
import { IOutputData } from 'angular-split';
            // Act
            const event: MouseEvent = new MouseEvent('contextmenu');

import { DesktopBase } from '../../../../common/io/desktop.base';
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
        foldersPersisterMock = Mock.ofType<FoldersPersister>();
            // Act
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            // Assert
        });


            const component: CollectionFoldersComponent = createComponent();
    let metadataServiceMock: IMock<MetadataService>;
        });

        playbackServiceMock.setup((x) => x.playbackStopped$).returns(() => playbackServicePlaybackStoppedMock$);

import { Constants } from '../../../../common/application/constants';
            // Act
            const component: CollectionFoldersComponent = createComponent();

            const component: CollectionFoldersComponent = createComponent();
            // Assert
            folderServiceMock.setup((x) => x.getFolders()).returns(() => folders);
            mouseSelectionWatcherMock.object,
            // Assert


        foldersPersisterMock.setup((x) => x.getOpenedFolder(It.isAny())).returns(() => folder1);
        it('should get subfolders for the the opened subfolder from the settings', async () => {

            await component.setOpenedFolderAsync(folder1);
            );
            mouseSelectionWatcherMock.verify((x) => x.initialize(component.tracks.tracks, false), Times.exactly(1));
    describe('onOpenSubfolderAsync', () => {
import { FolderTracksPersister } from './folder-tracks-persister';

            const component: CollectionFoldersComponent = createComponent();
            // Assert
import { SearchServiceBase } from '../../../../services/search/search.service.base';
    function createComponent(): CollectionFoldersComponent {
            folderServiceMock.setup((x) => x.getSubfoldersAsync(It.isAny(), It.isAny())).returns(() => Promise.resolve([]));
    describe('setOpenedSubfolderAsync', () => {
            // Assert
            // Assert


            expect(component.rightPaneSize).toEqual(70);
    let folder1: FolderModel;
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
        });
            trackServiceMock.object,


            // Act
        it('should get the folders', () => {
        it('should navigate to manage collection', async () => {

        });
            const component: CollectionFoldersComponent = createComponent();

    }
            expect(component.subfolderContextMenu).toBeUndefined();

        });
    });
            const component: CollectionFoldersComponent = createComponent();
            // Arrange

            folderServiceMock.reset();
            // Arrange
        trackServiceMock.setup((x) => x.getTracksInSubfolderAsync(It.isAny())).returns(() => Promise.resolve(tracks));
        it('should get the folders when collection has changed', async () => {
            foldersPersisterMock.verify((x) => x.setOpenedFolder(folder1), Times.exactly(1));


            // Assert
    });
        });
            const component: CollectionFoldersComponent = createComponent();
            // Act

    let navigationServiceMock: IMock<NavigationServiceBase>;
            // Act
            folderServiceMock.reset();
        track1.rating = 1;
            const component: CollectionFoldersComponent = createComponent();
        it('should define addToPlaylistMenu', () => {
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
            await component.ngOnInit();

        });
            expect(settingsStub.foldersLeftPaneWidthPercent).toEqual(40);
            // Arrange
            await component.ngOnInit();
            // Arrange
        it('should set right pane size from settings', () => {
            // Act
    describe('constructor', () => {
        });

