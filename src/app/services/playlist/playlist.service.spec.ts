
//     });
//         it('should throw an error if playlistFolderName is undefined', () => {


//         fileSystemMock

//             // Act
//                 service.playlistFoldersChanged$.subscribe(() => {
//             .setup((x) => x.create('/home/User/Music/Dopamine/Playlists'))
//         it('should ensure that the playlists folder exists', () => {
//     let playlistModelFactoryMock: IMock<PlaylistModelFactory>;
//             expect(playlistFolders.length).toEqual(2);
//             // Assert
//             // Assert
//             expect(playlistFolders[2].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 2');
//             // Act
//             service.renamePlaylistFolder(playlistFolders[0], 'My new dirty playlist folder');
//             const playlistFolders: PlaylistFolderModel[] = await service.getPlaylistFoldersAsync();
//         playlistFoldersChanged$ = playlistFoldersChanged.asObservable();
//         playlistModelFactoryMock
//                 (x) => x.createFullDirectoryPathIfDoesNotExist('/home/User/Music/Dopamine/Playlists/My playlist folder'),

// import { PlaylistFolderModel } from './playlist-folder-model';
//             const service: BasePlaylistService = createService();
//             const service: BasePlaylistService = createService();
//             // Act
//             service.renamePlaylistFolder(playlistFolders[0], 'My new dirty playlist folder');
//             .setup((x) => x.create('/home/User/Music/Dopamine/Playlists/Folder 1'))
//             service.deletePlaylistFolder(playlistFolders[0]);

//                 })
//             expect(playlistFolders[0].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 1');
//             .returns(
//             expect(playlistFolders[1].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 2');



//             // Act
//     describe('constructor', () => {
//             expect(playlistFolders[0].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 1');
//     beforeEach(() => {
//     function createPlaylistFolders(): PlaylistFolderModel[] {

//         playlistFolderModelFactoryMock
//             expect(() => service.createPlaylistFolder(undefined)).toThrow(Error);
//             expect(playlistFolders.length).toEqual(3);
//             // Act
//             // Act


//                 () =>
//         it('should get the playlist folders without parent folder if there are files which are not playlists in the parent folder', async () => {

//             .setup((x) => x.create('/home/User/Music/Dopamine/Playlists/Folder 2/Playlist 2.m3u'))
//             playlistModelFactoryMock.object,


//             );
//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();
//         fileSystemMock.setup((x) => x.musicDirectory()).returns(() => '/home/User/Music');
//     describe('getPlaylistsAsync', () => {
//             // Arrange
//             // Act
// import { PlaylistService } from './playlist.service';
//             fileSystemMock.verify((x) => x.deleteDirectoryRecursively(playlistFolders[0].path), Times.once());

//             // Arrange
// import { BasePlaylistService } from './base-playlist.service';

//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();
//         it('should define playlistFoldersChanged$', () => {
//         });
//             .returns(async () => ['/home/User/Music/Dopamine/Playlists/Folder 2/Playlist 2.m3u']);
//             // Arrange
//             fileSystemMock.verify((x) => x.createFullDirectoryPathIfDoesNotExist('/home/User/Music/Dopamine/Playlists'), Times.once());
//             fileSystemMock.setup((x) => x.getFilesInDirectoryAsync('/home/User/Music/Dopamine/Playlists')).returns(async () => []);




//             // Act
//             const service: BasePlaylistService = createService();
//             playlistFolderModelFactoryMock.object,
//             expect(playlists[0].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u');
//             const playlistFolders: PlaylistFolderModel[] = await service.getPlaylistFoldersAsync();
//             expect(wasNotified).toBeTruthy();
//             expect(playlists.length).toEqual(2);
//             // Arrange
//             const playlists: PlaylistModel[] = await service.getPlaylistsAsync(playlistFolders);

//         return [playlistFolder1, playlistFolder2];
//             // Act



//         const playlistFolder1: PlaylistFolderModel = new PlaylistFolderModel('Folder 1', '/home/User/Music/Dopamine/Playlists/Folder 1');
//         fileSystemMock = Mock.ofType<FileSystem>();
//             const subscription: Subscription = new Subscription();
//                         '/home/User/Music/Dopamine/Playlists/Folder 1/Playlist 1.png'
// import { TextSanitizer } from '../../common/text-sanitizer';
//             // Arrange

//         });
//             // Arrange
//             .setup((x) => x.getDirectoriesInDirectoryAsync('/home/User/Music/Dopamine/Playlists'))
//     });
//         });

//         const playlistFolder2: PlaylistFolderModel = new PlaylistFolderModel('Folder 2', '/home/User/Music/Dopamine/Playlists/Folder 2');

//     }
//                 })
//         textSanitizerMock.setup((x) => x.sanitize('My dirty playlist folder')).returns(() => 'My playlist folder');
//         playlistFolderModelFactoryMock
//             const service: BasePlaylistService = createService();
//     let textSanitizerMock: IMock<TextSanitizer>;
//         });
//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();
//     let playlistFolderModelFactoryMock: IMock<PlaylistFolderModelFactory>;
//             fileSystemMock
//             // Arrange

//         it('should sanitize the playlist folder name', async () => {
// import { PlaylistFolderModelFactory } from './playlist-folder-model-factory';
//             // Assert
//             let wasNotified: boolean = false;


//             expect(() => service.createPlaylistFolder(' ')).toThrow(Error);
//             // Arrange
    test.todo('should write tests');
//             // Assert
//     describe('createPlaylistFolder', () => {
//             .returns(() => '/home/User/Music/Dopamine/Playlists/My playlist folder');


//     describe('getPlaylistFoldersAsync', () => {
//         });

//             // Assert
//             .setup((x) => x.getFilesInDirectoryAsync('/home/User/Music/Dopamine/Playlists/Folder 1'))
//                 Times.once()


//             );

//         });
//         textSanitizerMock.setup((x) => x.sanitize('My new dirty playlist folder')).returns(() => 'My new playlist folder');
//             .returns(
//         fileSystemMock
//             service.createPlaylistFolder('My dirty playlist folder');
//         fileSystemMock.setup((x) => x.getFileExtension('/home/User/Music/Dopamine/Playlists/File1.txt')).returns(() => '.txt');

//             // Assert
//                         '/home/User/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u',
//             .setup((x) => x.create('/home/User/Music/Dopamine/Playlists/Folder 2'))


//             expect(wasNotified).toBeTruthy();
//             // Assert
//         fileSystemMock
//             .returns(() => new PlaylistFolderModel('Playlists', '/home/User/Music/Dopamine/Playlists', true));
//         });
//             // Arrange
//             fileSystemMock
//             );


//     const playlistFoldersChanged: Subject<void> = new Subject();
//         });
//         });
//             // Assert
//             textSanitizerMock.verify((x) => x.sanitize('My new dirty playlist folder'), Times.once());
//                         'Playlist 1',
//             const service: BasePlaylistService = createService();
//                 service.playlistFoldersChanged$.subscribe(() => {
//         it('should sanitize playlistFolderName', () => {
//             const service: BasePlaylistService = createService();
//             // Act

//         it('should create', () => {
//             // Assert
//         fileSystemMock.setup((x) => x.getFileExtension('/home/User/Music/Dopamine/Playlists/File1.m3u')).returns(() => '.m3u');
//             // Assert



//                     wasNotified = true;

//             expect(playlistFolders.length).toEqual(2);
//         it('should throw an error if playlistFolderName is empty', () => {
//     describe('deletePlaylistFolder', () => {
//         loggerMock = Mock.ofType<Logger>();

// import { PlaylistModelFactory } from './playlist-model-factory';
//             // Act
//         return new PlaylistService(

//             fileSystemMock.verify((x) => x.renameFileOrDirectory(playlistFolders[0].path, 'My new playlist folder'), Times.once());
//                 () =>

//             // Arrange
//                     wasNotified = true;

// import { IMock, Mock, Times } from 'typemoq';
//         );
//             service.createPlaylistFolder('My dirty playlist folder');
//             .setup((x) => x.create('/home/User/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u'))

describe('PlaylistService', () => {
//             textSanitizerMock.verify((x) => x.sanitize('My dirty playlist folder'), Times.once());
//         it('should rename the playlist folder using the sanitized playlist folder name', async () => {
//             textSanitizerMock.object,
//     let loggerMock: IMock<Logger>;
//     let fileSystemMock: IMock<FileSystem>;
//             const service: BasePlaylistService = createService();

//             expect(() => service.createPlaylistFolder('')).toThrow(Error);

//             service.createPlaylistFolder('My dirty playlist folder');
//     describe('renamePlaylistFolder', () => {

//     });
//             expect(service.playlistFoldersChanged$).toBeDefined();
// import { PlaylistModel } from './playlist-model';
//                 .returns(async () => ['/home/User/Music/Dopamine/Playlists/File1.m3u']);
//             .returns(async () => ['/home/User/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u']);
//                         '/home/User/Music/Dopamine/Playlists/Folder 2/Playlist 2.png'
//         });

// import { Logger } from '../../common/logger';
//             fileSystemMock.object,
//         it('should notify that the playlist folders have changed', () => {
});
//             // Assert
// import { FileSystem } from '../../common/io/file-system';
//             .returns(async () => ['/home/User/Music/Dopamine/Playlists/Folder 1', '/home/User/Music/Dopamine/Playlists/Folder 2']);
//             expect(playlistFolders[0].path).toEqual('/home/User/Music/Dopamine/Playlists');
//             // Act
//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();

//         it('should create the playlist folder directory if it does not exist', () => {
//         playlistModelFactoryMock = Mock.ofType<PlaylistModelFactory>();
// describe('PlaylistService', () => {
//             expect(wasNotified).toBeTruthy();
//             // Arrange
//                         '/home/User/Music/Dopamine/Playlists/Folder 2/Playlist 2.m3u',
//             .returns(() => new PlaylistFolderModel('Folder 2', '/home/User/Music/Dopamine/Playlists/Folder 2', true));
//         playlistModelFactoryMock

//         playlistFolderModelFactoryMock
//                     )
//             // Arrange
//             loggerMock.object
//         });
//             );
//         });
//             const playlistFolders: PlaylistFolderModel[] = await service.getPlaylistFoldersAsync();
// import { Observable, Subject, Subscription } from 'rxjs';

//             const subscription: Subscription = new Subscription();
//             .setup((x) => x.combinePath(['/home/User/Music', 'Dopamine', 'Playlists']))
//             // Assert
//     }
//             // Assert
//             const service: BasePlaylistService = createService();
//             // Arrange
//             .returns(() => '/home/User/Music/Dopamine/Playlists');
//             const service: BasePlaylistService = createService();
//             const service: BasePlaylistService = createService();
//             let wasNotified: boolean = false;

//             // Act
//                         'Playlist 2',
//             );
//             // Assert

//         fileSystemMock.setup((x) => x.getFileExtension('/home/User/Music/Dopamine/Playlists/File2.m3u8')).returns(() => '.m3u8');
//         it('should notify that the playlist folders have changed', async () => {
//             fileSystemMock.verify(

//         });
//             );
//             // Act
//             service.renamePlaylistFolder(playlistFolders[0], 'My new dirty playlist folder');
//             // Arrange
//             // Assert
//             .returns(() => new PlaylistFolderModel('Folder 1', '/home/User/Music/Dopamine/Playlists/Folder 1', true));
//         it('should delete the playlist folder', async () => {
//         });
//             .setup((x) => x.getFilesInDirectoryAsync('/home/User/Music/Dopamine/Playlists/Folder 2'))
//             // Arrange

//             const service: BasePlaylistService = createService();



//         it('should get the playlist folders without parent folder if there are no files in the parent folder', async () => {
//             // Arrange
//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();
//     });
//                     new PlaylistModel(
//                     new PlaylistModel(
//             let wasNotified: boolean = false;
//             const service: BasePlaylistService = createService();

//             expect(service).toBeDefined();
//             .setup((x) => x.combinePath(['/home/User/Music/Dopamine/Playlists', 'My playlist folder']))
//         });
//         });
//                     )
//         it('should throw an error if playlistFolderName is space', () => {
//             const playlistFolders: PlaylistFolderModel[] = createPlaylistFolders();
//             const service: BasePlaylistService = createService();
//             const service: BasePlaylistService = createService();
//             const service: BasePlaylistService = createService();
//     function createService(): BasePlaylistService {

//             // Act
//             const service: BasePlaylistService = createService();

//                 .returns(async () => ['/home/User/Music/Dopamine/Playlists/File1.txt']);
//             service.deletePlaylistFolder(playlistFolders[0]);
//                 .setup((x) => x.getFilesInDirectoryAsync('/home/User/Music/Dopamine/Playlists'))
//                 })
//             expect(playlistFolders[1].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 1');
//             const service: BasePlaylistService = createService();
//     });
//         fileSystemMock

//             // Arrange
//     });
//         it('should get the playlist folders with parent folder if there are playlist files in the parent folder', async () => {
//             // Assert

//         it('should get the playlists', async () => {
//             subscription.add(
//     });
//     let playlistFoldersChanged$: Observable<void>;
//             const subscription: Subscription = new Subscription();
//             // Act



//             // Assert
//                     wasNotified = true;
//         fileSystemMock
//             // Assert

//             // Act
//         it('should notify that the playlist folders have changed', async () => {

//         });
//             // Act
//                 service.playlistFoldersChanged$.subscribe(() => {

// });
//             subscription.add(


//                 .setup((x) => x.getFilesInDirectoryAsync('/home/User/Music/Dopamine/Playlists'))
//             expect(playlistFolders[1].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 2');
//             subscription.add(
//         playlistFolderModelFactoryMock = Mock.ofType<PlaylistFolderModelFactory>();
//         });

//             expect(playlists[1].path).toEqual('/home/User/Music/Dopamine/Playlists/Folder 2/Playlist 2.m3u');
//             const service: BasePlaylistService = createService();

//         textSanitizerMock = Mock.ofType<TextSanitizer>();

//             // Arrange
