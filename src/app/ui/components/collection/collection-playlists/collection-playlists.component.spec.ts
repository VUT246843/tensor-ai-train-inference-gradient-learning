//             // Arrange
// import { ContextMenuOpener } from '../../../common/context-menu-opener';
//             const component: CollectionPlaylistsComponent = createComponent();
//             dialogServiceMock.verify(
//         playlistFoldersSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
//             expect(component.playlistFolders[0].path).toEqual('path1');
//             await component.onDeletePlaylistFolderAsync(playlistFolder1);
//                 .returns(async () => true);
//             expect(numberOfPlaylistFoldersAfterDelete).toEqual(1);
//             // Arrange
//             await component.createPlaylistFolderAsync();
//             expect(component.playlistFolders[1].path).toEqual('path2');
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//         });
//             playlistServiceMock.reset();
//             // Arrange
//         it('should get the playlists for the selected playlist folders', async () => {
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             const component: CollectionPlaylistsComponent = createComponent();

//             await component.ngOnInit();
//             playlistFoldersSelectionWatcherMock.verify((x) => x.initialize(component.playlistFolders, false), Times.once());
//             // Assert
//             // Act
//             playlistFoldersSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [playlistFolder1, playlistFolder2]);


//             await component.onRenamePlaylistFolderAsync(playlistFolder1);
//     });
//             // Assert
//             playlistFoldersSelectionWatcherMock.object
//             const playlistFolder1AfterRename: PlaylistFolderModel = createPlaylistFolderModel('new name1', 'path1');
//             contextMenuOpenerMock.object,
//             dialogServiceMock

//             await component.createPlaylistFolderAsync();
//                 .setup((x) => x.showInputDialogAsync('Rename playlist folder', 'Playlist folder name', playlistFolder1BeforeRename.name))


//         it('should show an error dialog if creation of the playlist folder fails', async () => {

//             dialogServiceMock
//                 (x) => x.showInputDialogAsync('Rename playlist folder', 'Playlist folder name', playlistFolder1.name),
//                 .setup((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''))

//             const component: CollectionPlaylistsComponent = createComponent();
//             // Act

//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//         });
//             .returns(async () => `Delete playlist folder 'name1'?`);
//         it('should initialize playlistFoldersSelectionWatcher if the selected tab is playlists', async () => {
//                 .throws(new Error('An error occurred'));
//             await component.createPlaylistFolderAsync();
//         it('should not create the playlists folder if playlistFolderName is space', async () => {

//         selectedTabChangedMock = new Subject();
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//         it('should set left pane size from settings', async () => {
//         selectedTabChangedMock$ = selectedTabChangedMock.asObservable();

//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             const component: CollectionPlaylistsComponent = createComponent();
//             const playlist1: PlaylistModel = createPlaylistModel('Playlist 1', 'Playlist 1 path');
//                 .returns(async () => undefined);

//         it('should set center pane size from settings', async () => {
//             const event: any = {};

//                 .returns(async () => 'My playlist folder');
//         });
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             const component: CollectionPlaylistsComponent = createComponent();
//             // Act

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             expect(settingsStub.playlistsLeftPaneWidthPercent).toEqual(30);
//     describe('createPlaylistFolderAsync', () => {

//             expect(component.playlistFolders.length).toEqual(0);


//         contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();

//     });
//         });
//         it('should get all playlist folders', async () => {
//         translatorServiceMock.setup((x) => x.getAsync('confirm-delete-playlist-folder')).returns(async () => 'Delete playlist folder?');
//         collectionPersisterMock = Mock.ofType<CollectionPersister>();
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             // Arrange
//             // Arrange

//             const numberOfPlaylistFoldersAfterDelete: number = component.playlistFolders.length;

// import { PlaylistFolderModel } from '../../../services/playlist/playlist-folder-model';
//         translatorServiceMock.setup((x) => x.get('create-playlist-folder')).returns(() => 'Create playlist folder');
//             await flushPromises();
//             playlistServiceMock
//     describe('onDeletePlaylistFolderAsync', () => {
//             component.playlists = [playlist1];
//         it('should not create the playlists folder if playlistFolderName is empty', async () => {

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             // Arrange
//             // Assert

//                 .returns(async () => [playlist1, playlist2]);
//             await component.onRenamePlaylistFolderAsync(playlistFolder1);
//             // Assert
//             const component: CollectionPlaylistsComponent = createComponent();
//         });
//         translatorServiceMock = Mock.ofType<BaseTranslatorService>();

//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);



//             playlistServiceMock.verify((x) => x.createPlaylistFolder(''), Times.never());
//                 .returns(async () => 'new name1');
// import { PlaylistModel } from '../../../services/playlist/playlist-model';
//             await component.onDeletePlaylistFolderAsync(playlistFolder1);
//             collectionPersisterMock.reset();


//             component.splitDragEnd({ sizes: [30, 55, 15] });
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);

//     let playlistFoldersSelectionWatcherMock: IMock<MouseSelectionWatcher>;
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.artists);
//         });
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             component.splitDragEnd({ sizes: [30, 55, 15] });
//         });
//             expect(component.playlistFolders.length).toEqual(2);
//             const component: CollectionPlaylistsComponent = createComponent();

//                 .returns(async () => undefined);
//     });
//             expect(component.playlistFolders[0]).toBe(playlistFolder2);
//             settingsStub,
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             schedulerMock.object,
describe('CollectionPlaylistsComponent', () => {
//         });
//             // Arrange
//         it('should save the right pane width to the settings', async () => {
//             // Act
//                 x.getAsync('confirm-delete-playlist-folder-long', {
//             // Assert
//             await component.setSelectedPlaylistFoldersAsync(event, playlistFolder1);
//             // Assert
//             // Arrange
//             // Arrange
//         });
//             dialogServiceMock.verify((x) => x.showErrorDialog('Delete playlist folder error'), Times.once());

//             // Act
//             // Arrange

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');


//             playlistServiceMock.verify((x) => x.createPlaylistFolder(undefined), Times.never());
//             expect(component.playlistFolders[1]).toEqual(playlistFolder2);
//             // Assert
//             .setup((x) =>
//                 .returns(async () => true);
//             dialogServiceMock
//             // Act
//             const component: CollectionPlaylistsComponent = createComponent();
//             // Act

//     describe('ngOnDestroy', () => {
//             // Assert
//             playlistServiceMock.reset();

//             const component: CollectionPlaylistsComponent = createComponent();

//                 .setup((x) => x.getPlaylistFoldersAsync())
//             await flushPromises();
//             // Act

//             const component: CollectionPlaylistsComponent = createComponent();
//     let appearanceServiceMock: IMock<BaseAppearanceService>;
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//         });
//             expect(component.playlistFolders.length).toEqual(2);
//     describe('onRenamePlaylistFolderAsync', () => {
//             // Arrange

//                 .returns(async () => true);
//     });
//             // Act
    test.todo('should write tests');
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             expect(component.playlistFolders[0]).toEqual(playlistFolder1);
//     describe('ngOnInit', () => {
//             playlistServiceMock.verify((x) => x.getPlaylistFoldersAsync(), Times.never());
//             expect(component.centerPaneSize).toEqual(50);

//                 .setup((x) => x.getPlaylistFoldersAsync())
//             playlistServiceMock.verify((x) => x.deletePlaylistFolder(playlistFolder1), Times.never());

//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             const playlistFolder1AfterRename: PlaylistFolderModel = createPlaylistFolderModel('new name1', 'path1');

//             playlistServiceMock

//             const component: CollectionPlaylistsComponent = createComponent();
//             expect(component.rightPaneSize).toEqual(25);
//             // Act

//             selectedTabChangedMock.next();
//         return playlistFolderModel;

//         translatorServiceMock.setup((x) => x.get('playlist-folder-name')).returns(() => 'Playlist folder name');
//             expect(component.playlistFolders[0]).toEqual(playlistFolder1);

//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             // Assert
//             // Arrange

//         it('should initialize playlistFoldersSelectionWatcher if the selected tab has changed to playlists', async () => {

//             playlistServiceMock.reset();
//                 .setup((x) => x.getPlaylistsAsync([playlistFolder1, playlistFolder2]))
//             // Assert
//             // Assert
//     let selectedTabChangedMock: Subject<void>;
//         it('should update the playlist folders if the user has confirmed', async () => {

//             expect(component.playlistFolders[1]).toEqual(playlistFolder2);

//         });
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//         it('should update the playlist folders if a new name was provided', async () => {
//             await component.onRenamePlaylistFolderAsync(playlistFolder1);



//     function createComponent(): CollectionPlaylistsComponent {
//             // Act

//             expect(component.playlistService).toBeDefined();
//         it('should show an error dialog if renaming the playlist folder fails', async () => {
//             // Assert

//             // Assert
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             // Assert


//                 .returns(async () => 'My playlist folder');
//             )



//         it('should not delete the playlist folder if the user has not confirmed', async () => {
//             playlistServiceMock.setup((x) => x.deletePlaylistFolder(playlistFolder1)).throws(new Error('An error occurred'));
//                 .returns(async () => 'new name1');
//             // Assert

//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             // Assert
//         translatorServiceMock

//             translatorServiceMock.object,
// import { IMock, It, Mock, Times } from 'typemoq';


//             dialogServiceMock.verify(
//         it('should save the left pane width to the settings', async () => {

//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//         });
//             // Act
//         it('should open an input dialog', async () => {
//     });
//             // Act
//             expect(component.leftPaneSize).toEqual(25);
//         dialogServiceMock = Mock.ofType<BaseDialogService>();
//             component.ngOnDestroy();

//             // Assert
//         });
//             playlistServiceMock.verify((x) => x.getPlaylistFoldersAsync(), Times.once());
//             await component.ngOnInit();
//             const component: CollectionPlaylistsComponent = createComponent();
//             expect(playlistFolder1NameBeforeRename).toEqual('name1');
//             component.playlistFolders = [playlistFolder1];

//         it('should initialize playlistFolders as empty', async () => {
//             // Arrange
//             const playlistFolder1NameAfterRename: string = component.playlistFolders[0].name;
//             const component: CollectionPlaylistsComponent = createComponent();

//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder2]);
//                     playlistFolderName: 'name1',
//         return playlistModel;
//             // Assert

//         });
//             await component.onDeletePlaylistFolderAsync(playlistFolder1);
//             // Arrange
//         });
//             // Arrange
//             // Assert

//             dialogServiceMock.verify((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''), Times.once());
//             const playlist1: PlaylistModel = createPlaylistModel('Playlist1', 'Playlist path 1');
//             // Arrange
//             // Arrange
//             // Arrange
//             // Act
//                 .setup((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''))
//         });
//             // Arrange

//         appearanceServiceMock = Mock.ofType<BaseAppearanceService>();
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder2]);
//             );
//                 .setup((x) => x.showInputDialogAsync('Rename playlist folder', 'Playlist folder name', playlistFolder1BeforeRename.name))


//             // Act
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             playlistServiceMock
//             // Act
//         it('should show an input dialog to the user', async () => {
//             expect(settingsStub.playlistsRightPaneWidthPercent).toEqual(15);
//             // Act
//             expect(component.playlists.length).toEqual(0);
//             dialogServiceMock
//             // Arrange
//             // Arrange

//             dialogServiceMock.verify((x) => x.showErrorDialog('Create playlist folder error'), Times.once());
// import { Observable, Subject } from 'rxjs';
//             const component: CollectionPlaylistsComponent = createComponent();

//         it('should not get all playlist folders if the selected tab is not playlists', async () => {
//             selectedTabChangedMock.next();
//     const flushPromises = () => new Promise(process.nextTick);
//             playlistServiceMock.setup((x) => x.createPlaylistFolder('My playlist folder')).throws(new Error('An error occurred'));

//     function createPlaylistModel(name: string, path: string): PlaylistModel {


//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             const component: CollectionPlaylistsComponent = createComponent();
//             // Assert
//             await component.onDeletePlaylistFolderAsync(playlistFolder1);
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             collectionPersisterMock.reset();
//                 .setup((x) => x.renamePlaylistFolder(playlistFolder1BeforeRename, 'new name1'))



// import { BaseTranslatorService } from '../../../services/translator/base-translator.service';


//         it('should not rename the playlist folder if no new name was provided', async () => {
//             dialogServiceMock

//             expect(numberOfPlaylistFoldersBeforeDelete).toEqual(2);
//             collectionPersisterMock.reset();
//             expect(component.playlists.length).toEqual(0);
//             // Assert
//         });
//         it('should get all playlist folders if the selected tab is playlists', async () => {
//         });
//             const component: CollectionPlaylistsComponent = createComponent();
//         it('should show an error dialog if deleting the playlist folder fails', async () => {
//             // Arrange
//             expect(playlistFolder1NameAfterRename).toEqual('new name1');
//             playlistServiceMock.object,

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             const playlist2: PlaylistModel = createPlaylistModel('Playlist 2', 'Playlist 2 path');
//             // Assert
//     function createPlaylistFolderModel(name: string, path: string): PlaylistFolderModel {
//         playlistServiceMock = Mock.ofType<BasePlaylistService>();
//             dialogServiceMock

//             await component.ngOnInit();
//             // Act
//             // Arrange
//             expect(component).toBeDefined();

//         });
//     });
//         it('should clear the lists if the selected tab has changed to not playlists', async () => {
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//         translatorServiceMock.setup((x) => x.getAsync('delete-playlist-folder-error')).returns(async () => 'Delete playlist folder error');

//     let contextMenuOpenerMock: IMock<ContextMenuOpener>;
//             const component: CollectionPlaylistsComponent = createComponent();
//             // Arrange

//             const component: CollectionPlaylistsComponent = createComponent();
//         });

//             playlistServiceMock
//         it('should show a confirmation dialog to the user', async () => {
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');

//             const component: CollectionPlaylistsComponent = createComponent();
//             // Assert
//             await component.ngOnInit();
//     });
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//                 .setup((x) => x.showInputDialogAsync('Rename playlist folder', 'Playlist folder name', playlistFolder1.name))
//     let selectedTabChangedMock$: Observable<void>;
//             await component.ngOnInit();

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');

//     }
//         });

//         translatorServiceMock.setup((x) => x.getAsync('rename-playlist-folder-placeholder')).returns(async () => 'Playlist folder name');

//             // Arrange
//             selectedTabChangedMock.next();
//                 .setup((x) => x.getPlaylistFoldersAsync())
//         it('should initialize playlists as empty', async () => {

//             component.playlists = [playlistFolder1, playlistFolder2];
//         it('should not initialize playlistFoldersSelectionWatcher if the selected tab has changed to not playlists', async () => {
//     let dialogServiceMock: IMock<BaseDialogService>;
//             await component.createPlaylistFolderAsync();
//             playlistServiceMock.verify((x) => x.renamePlaylistFolder(playlistFolder1, 'new name1'), Times.once());
//             const component: CollectionPlaylistsComponent = createComponent();
//         collectionPersisterMock.setup((x) => x.selectedTabChanged$).returns(() => selectedTabChangedMock$);
// });
//             const component: CollectionPlaylistsComponent = createComponent();
//             loggerMock.object,
//                 .returns(async () => undefined);
//             // Act

//             await component.createPlaylistFolderAsync();
//             // Arrange
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.artists);
//         );
//             await component.ngOnInit();
//                 .returns(async () => [playlistFolder1BeforeRename, playlistFolder2]);
//         });

//             playlistServiceMock

//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             dialogServiceMock

//             // Act
//             // Act
//             dialogServiceMock.object,
//             playlistServiceMock.reset();
//             expect(component.appearanceService).toBeDefined();
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             playlistFoldersSelectionWatcherMock.verify((x) => x.setSelectedItems(event, playlistFolder1), Times.once());
});
//             // Arrange



//             await flushPromises();
//                 .setup((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''))
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             const component: CollectionPlaylistsComponent = createComponent();

//     }


//         it('should fill the lists if the selected tab has changed to playlists', async () => {
//             const component: CollectionPlaylistsComponent = createComponent();
//         const playlistFolderModel: PlaylistFolderModel = new PlaylistFolderModel(name, path);


//             const component: CollectionPlaylistsComponent = createComponent();
//         });
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.albums);
// import { Logger } from '../../../common/logger';
//             // Act

//             // Act
//             await component.onDeletePlaylistFolderAsync(playlistFolder1);
//             playlistFoldersSelectionWatcherMock.verify((x) => x.initialize(component.playlistFolders, false), Times.never());
//         });
//             const component: CollectionPlaylistsComponent = createComponent();
//         loggerMock = Mock.ofType<Logger>();

//             // Act
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             collectionPersisterMock.reset();

//         settingsStub = { playlistsLeftPaneWidthPercent: 25, playlistsRightPaneWidthPercent: 25 };
//             const component: CollectionPlaylistsComponent = createComponent();

//             await component.ngOnInit();
//                 Times.once()
//     let settingsStub: any;
//             const component: CollectionPlaylistsComponent = createComponent();
//         return new CollectionPlaylistsComponent(
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//         });
//             // Assert



//                 .setup((x) => x.getPlaylistFoldersAsync())
//             // Act
//     let schedulerMock: IMock<BaseScheduler>;
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');

//             collectionPersisterMock.object,
//         });
//             // Assert
//             // Act

//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             // Arrange
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             expect(component.playlistFolders.length).toEqual(0);
//             // Assert
// import { BasePlaylistService } from '../../../services/playlist/base-playlist.service';

//         it('should clear the lists', () => {
//         });
//                 .setup((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''))
//         translatorServiceMock.setup((x) => x.getAsync('rename-playlist-folder')).returns(async () => 'Rename playlist folder');
//         });
//             selectedTabChangedMock.next();

//             const component: CollectionPlaylistsComponent = createComponent();
//                 .setup((x) => x.showConfirmationDialogAsync('Delete playlist folder?', `Delete playlist folder 'name1'?`))

//             // Act
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//     beforeEach(() => {
//         });
//         });
// import { BaseScheduler } from '../../../common/scheduler/base-scheduler';
//         });
//             const playlistFolder1BeforeRename: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//         });

//             // Arrange
//             // Assert
//     let collectionPersisterMock: IMock<CollectionPersister>;


//             // Act

//             // Assert

//         it('should define playlistService', async () => {
//             const component: CollectionPlaylistsComponent = createComponent();
//             dialogServiceMock.verify((x) => x.showErrorDialog('Rename playlist folder error'), Times.once());
//             await component.ngOnInit();
//             // Assert
//             // Arrange
//             await component.createPlaylistFolderAsync();

//             dialogServiceMock
//         translatorServiceMock.setup((x) => x.getAsync('create-playlist-folder-error')).returns(async () => 'Create playlist folder error');
//             playlistServiceMock.verify((x) => x.getPlaylistFoldersAsync(), Times.once());

//             // Act
//             await component.ngOnInit();
//             // Arrange
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             await component.createPlaylistFolderAsync();
//             // Assert
//         it('should create', () => {
//         });
//             // Arrange
//             // Assert
//             // Arrange


//         });
//         it('should set right pane size from settings', async () => {


//             const component: CollectionPlaylistsComponent = createComponent();
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//             component.playlists = [];
//                 .returns(async () => '');
//             // Arrange
//         });
//             playlistServiceMock.verify((x) => x.getPlaylistFoldersAsync(), Times.once());
//     });

//             dialogServiceMock
//             const event: any = {};
//                 .setup((x) => x.showConfirmationDialogAsync('Delete playlist folder?', `Delete playlist folder 'name1'?`))
//             dialogServiceMock
//             await flushPromises();
//             await component.ngOnInit();
//                 .setup((x) => x.showInputDialogAsync('Rename playlist folder', 'Playlist folder name', playlistFolder1.name))

//             playlistServiceMock.verify((x) => x.createPlaylistFolder(' '), Times.never());
//     }
//             // Act
//             );

//             // Act
//         });
//         });
//             component.playlistFolders = [playlistFolder1, playlistFolder2];

//     let loggerMock: IMock<Logger>;
//             // Act
//     describe('setSelectedPlaylistFoldersAsync', () => {
//             const component: CollectionPlaylistsComponent = createComponent();
//             // Act
//                 .returns(async () => 'new name1');
//             const component: CollectionPlaylistsComponent = createComponent();

//                 .returns(async () => [playlistFolder1BeforeRename, playlistFolder2]);

//         it('should not create the playlists folder if playlistFolderName is undefined', async () => {
//         it('should not initialize playlistFoldersSelectionWatcher if the selected tab is not playlists', async () => {
// import { BaseDialogService } from '../../../services/dialog/base-dialog.service';
//             await component.ngOnInit();
//         it('should delete the playlist folder if the user has confirmed', async () => {
//             playlistFoldersSelectionWatcherMock.verify((x) => x.initialize(component.playlistFolders, false), Times.once());

//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.albums);

//             // Act
//             // Act
//             // Assert
//             const playlistFolder1BeforeRename: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');
//         it('should define appearanceService', async () => {
//     describe('splitDragEnd', () => {
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);

//             // Assert
//             playlistFoldersSelectionWatcherMock.verify((x) => x.initialize(component.playlistFolders, false), Times.never());

//                 .setup((x) => x.showInputDialogAsync('Create playlist folder', 'Playlist folder name', ''))
// describe('CollectionPlaylistsComponent', () => {
//             await component.setSelectedPlaylistFoldersAsync(event, playlistFolder1);
//                 Times.once()
//             const playlistFolder1NameBeforeRename: string = component.playlistFolders[0].name;
//             playlistServiceMock.verify((x) => x.createPlaylistFolder('My playlist folder'), Times.once());
//         schedulerMock = Mock.ofType<BaseScheduler>();
//             expect(component.playlistFolders.length).toEqual(0);

//             playlistServiceMock.verify((x) => x.deletePlaylistFolder(playlistFolder1), Times.once());

//             const component: CollectionPlaylistsComponent = createComponent();
//             const component: CollectionPlaylistsComponent = createComponent();
//                 .returns(async () => false);
//             const numberOfPlaylistFoldersBeforeDelete: number = component.playlistFolders.length;
//     });
//                 })
//             component.playlistFolders = [playlistFolder1, playlistFolder2];
//         it('should rename the playlist folder if a new name was provided', async () => {

//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.albums);

// import { MouseSelectionWatcher } from '../../../common/mouse-selection-watcher';
//     let playlistServiceMock: IMock<BasePlaylistService>;
//             expect(component.playlistFolders.length).toEqual(0);

//             expect(component.playlistFolders.length).toEqual(2);
//             // Assert
//             const playlistFolder1: PlaylistFolderModel = createPlaylistFolderModel('name1', 'path1');

//             playlistServiceMock.verify((x) => x.getPlaylistFoldersAsync(), Times.never());
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//         it('should set the selected playlist folders', async () => {
//             // Act
//         });
//             dialogServiceMock
//             // Arrange
//             // Assert
// import { CollectionPlaylistsComponent } from './collection-playlists.component';

//             appearanceServiceMock.object,


//         const playlistModel: PlaylistModel = new PlaylistModel(name, path);
//             await component.onRenamePlaylistFolderAsync(playlistFolder1BeforeRename);

//                 .returns(async () => [playlistFolder1AfterRename, playlistFolder2]);
//     describe('constructor', () => {
//             const component: CollectionPlaylistsComponent = createComponent();

//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);

//     let translatorServiceMock: IMock<BaseTranslatorService>;
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.albums);
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
//             await component.ngOnInit();
//             // Act
//             playlistServiceMock
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             collectionPersisterMock.setup((x) => x.selectedTab).returns(() => CollectionTab.playlists);
//             playlistServiceMock.verify((x) => x.getPlaylistsAsync([playlistFolder1, playlistFolder2]), Times.once());
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//                 .setup((x) => x.showConfirmationDialogAsync('Delete playlist folder?', `Delete playlist folder 'name1'?`))

//             // Arrange
//             // Assert
//             // Arrange
//             dialogServiceMock
//                 .setup((x) => x.showConfirmationDialogAsync('Delete playlist folder?', `Delete playlist folder 'name1'?`))
//                 (x) => x.showConfirmationDialogAsync('Delete playlist folder?', `Delete playlist folder 'name1'?`),

//         translatorServiceMock.setup((x) => x.getAsync('rename-playlist-folder-error')).returns(async () => 'Rename playlist folder error');

//             // Act
//             playlistServiceMock.verify((x) => x.renamePlaylistFolder(playlistFolder1, It.isAny()), Times.never());
//             // Assert
//             // Assert
//             const component: CollectionPlaylistsComponent = createComponent();
//             const component: CollectionPlaylistsComponent = createComponent();
//         it('should create the playlists folder if playlistFolderName is not undefined, empty or space.', async () => {

//                 .returns(async () => [playlistFolder1AfterRename, playlistFolder2]);
//             const component: CollectionPlaylistsComponent = createComponent();
//             await component.onRenamePlaylistFolderAsync(playlistFolder1BeforeRename);
//             // Arrange
// import { BaseAppearanceService } from '../../../services/appearance/base-appearance.service';
//             dialogServiceMock

// import { CollectionPersister } from '../collection-persister';
//             playlistServiceMock.setup((x) => x.getPlaylistFoldersAsync()).returns(async () => [playlistFolder1, playlistFolder2]);
//             const playlistFolder2: PlaylistFolderModel = createPlaylistFolderModel('name2', 'path2');
