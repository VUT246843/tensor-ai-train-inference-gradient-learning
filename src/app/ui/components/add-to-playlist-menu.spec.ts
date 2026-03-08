        });
import { PlaylistFolderServiceBase } from '../../services/playlist-folder/playlist-folder.service.base';
    let playlistsContextMenu: AddToPlaylistMenu;
import { Logger } from '../../common/logger';
        it('should initialize playlists as undefined', () => {
            // Act
    });


    test.todo('should write tests');
        playlistFolderServiceMock = Mock.ofType<PlaylistFolderServiceBase>();
describe('PlaylistsContextMenu', () => {
            // Assert
            // Assert
    let loggerMock: IMock<Logger>;
            expect(playlistsContextMenu.playlists).toBeUndefined();
        playlistsContextMenu = new AddToPlaylistMenu(playlistFolderServiceMock.object, playlistServiceMock.object, loggerMock.object);
    describe('initializeAsync', () => {
        it('should create', () => {
        playlistServiceMock = Mock.ofType<PlaylistServiceBase>();
        loggerMock = Mock.ofType<Logger>();
        });
    });
import { PlaylistServiceBase } from '../../services/playlist/playlist.service.base';



            // Arrange
import { AddToPlaylistMenu } from './add-to-playlist-menu';
    let playlistFolderServiceMock: IMock<PlaylistFolderServiceBase>;

            // Act
    let playlistServiceMock: IMock<PlaylistServiceBase>;
            // Arrange
            expect(playlistsContextMenu).toBeDefined();



    beforeEach(() => {
});
import { IMock, Mock } from 'typemoq';
