//             // Arrange
//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder3]);
//             expect(receivedPlaylistFolderNames[0]).toEqual('Playlist folder 1');
//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//             expect(persister.getSelectedPlaylistFolders([playlistFolder1, playlistFolder2])).toEqual([]);
//             // Act
//             settingsStub.playlistsTabSelectedPlaylistFolder = 'Playlist folder 1';

//         });
// import { IMock, Mock } from 'typemoq';
//             persister.setSelectedPlaylistFolders(undefined);
//         persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);
//         });
//             persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);
//             // Assert

//             // Assert
//     });
//         });
//             // Arrange
//         settingsStub = { playlistsTabSelectedPlaylistFolder: '' };
    test.todo('should write tests');

//             expect(receivedPlaylistFolderNames[1]).toEqual('Playlist folder 3');

//         playlistFolder1 = new PlaylistFolderModel('Playlist folder 1', 'Playlist folder path 1');
//             expect(persister.getSelectedPlaylistFolders([playlistFolder1, playlistFolder2])).toEqual([]);

//     let persister: PlaylistFoldersPersister;
//             // Assert

//                 })
//     });
// import { PlaylistFolderModel } from '../../../services/playlist/playlist-folder-model';
// import { Subscription } from 'rxjs';
// });
//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//             persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);
//             // Act
//         it('should notify that the selected playlist folders have changed', () => {




//             // Act

//             expect(receivedPlaylistFolderNames.length).toEqual(2);
//     let subscription: Subscription;
//     describe('setSelectedPlaylistFolders', () => {
//             expect(selectedPlaylistFolders).toEqual([]);
//     beforeEach(() => {
//             expect(selectedPlaylistFolders).toEqual([playlistFolder1, playlistFolder2]);

//             persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);
//             const selectedPlaylistFolders: PlaylistFolderModel[] = persister.getSelectedPlaylistFolders([]);
//             expect(persister.getSelectedPlaylistFolders([playlistFolder3])).toEqual([playlistFolder3]);
//             persister.setSelectedPlaylistFolders([playlistFolder3]);

//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//             // Act
//             // Assert
//         });
//             // Arrange
//         playlistFolder3 = new PlaylistFolderModel('Playlist folder 3', 'Playlist folder path 3');
// import { PlaylistFoldersPersister } from './playlist-folders-persister';

//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder3]);
//     let playlistFolder2: PlaylistFolderModel;
//             // Arrange

//         it('should return an empty collection if the selected playlist folders are not found in availablePlaylistFolders', () => {
//             // Act
//             // Arrange
//             // Arrange
// import { Logger } from '../../../common/logger';
//             // Arrange
//         });
//             const selectedPlaylistFolders: PlaylistFolderModel[] = persister.getSelectedPlaylistFolders(undefined);

//             persister.setSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//         it('should return an empty collection if availablePlaylistFolders is empty', () => {


});
//         subscription = new Subscription();
//             // Assert
//             // Act
//             // Act
//         it('should create', () => {
//             const selectedPlaylistFolders: PlaylistFolderModel[] = persister.getSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//             expect(selectedPlaylistFolders).toEqual([]);
//     });

//             // Assert

//         playlistFolder2 = new PlaylistFolderModel('Playlist folder 2', 'Playlist folder path 2');
//             const selectedPlaylistFolders: PlaylistFolderModel[] = persister.getSelectedPlaylistFolders([playlistFolder1, playlistFolder2]);
//     let playlistFolder1: PlaylistFolderModel;
//     });
//         it('should clear the selected playlist folders if selectedPlaylistFolders is empty', () => {

//             );

//     let settingsStub: any;
//             // Assert
//             expect(selectedPlaylistFolders).toEqual([]);


//         });

//             // Assert
//             // Act
//         it('should clear the selected playlist folders if selectedPlaylistFolders is undefined', () => {
//     let loggerMock: IMock<Logger>;

//         });
//             persister.setSelectedPlaylistFolders([]);
//             // Arrange
//             expect(persister.getSelectedPlaylistFolders([playlistFolder1, playlistFolder2])).toEqual([playlistFolder1]);
//         it('should return the selected playlist folders if the selected playlist folders are found in availablePlaylistFolders', () => {
//             // Assert
//             // Assert
//         it('should set the selected playlist folders if selectedPlaylistFolders has elements', () => {
//         });
//             let receivedPlaylistFolderNames: string[] = [];

//         it('should return an empty collection if availablePlaylistFolders is undefined', () => {

//     describe('constructor', () => {

// describe('PlaylistFoldersPersister', () => {

//             // Arrange

//         loggerMock = Mock.ofType<Logger>();
//             subscription.unsubscribe();
//     let playlistFolder3: PlaylistFolderModel;
//                     receivedPlaylistFolderNames = playlistFolderNames;

//             persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);

//         });

//         it('should initialize from the settings', () => {
//             // Act
//             subscription.add(
//             expect(persister).toBeDefined();
//             // Arrange
//     describe('getSelectedPlaylistFolders', () => {
//             // Act
//             persister = new PlaylistFoldersPersister(settingsStub, loggerMock.object);
describe('PlaylistFoldersPersister', () => {
//         });
//                 persister.selectedPlaylistFoldersChanged$.subscribe((playlistFolderNames: string[]) => {
