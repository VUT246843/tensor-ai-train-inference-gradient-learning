

                '/home/username/Music/Dopamine/Playlists',
                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u',
            expect(playlistModel.name).toEqual('Playlist 1');
        it('should create a default PlaylistFolderModel', () => {
import { Constants } from '../../common/application/constants';
        });
            );

    function createFactory(): PlaylistModelFactory {
            const playlistModelFactory: PlaylistModelFactory = createFactory();
            expect(playlistModel.path).toEqual('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u');
            const playlistModelFactory: PlaylistModelFactory = createFactory();


            const playlistModel: PlaylistModel = playlistModelFactory.create(
            expect(playlistModel.path).toEqual('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u');
        baseTranslatorServiceMock.setup((x) => x.get('unsorted')).returns(() => 'Unsorted');

        });
            expect(playlistModel.imagePath).toEqual(
        return new PlaylistModelFactory(baseTranslatorServiceMock.object, fileAccessMock.object);
    });
    describe('create', () => {
            // Arrange
        });


            expect(playlistModel.name).toEqual('');
        fileAccessMock

                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u',
            // Act

            // Assert
                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1-d79a5db9-daaf-4c3c-8f94-ea5e56b7245d.png',
        fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/username/Music/Dopamine/Playlists/Folder 1')).returns(() => 'Folder 1');
                '/home/username/Music/Dopamine/Playlists',
            .returns(() => '/home/username/Music/Dopamine/Playlists');
            const playlistModelFactory: PlaylistModelFactory = createFactory();
    describe('constructor', () => {
            .returns(() => 'Playlist 1');
        fileAccessMock = Mock.ofType<FileAccessBase>();
            const playlistModel: PlaylistModel = playlistModelFactory.create(
            fileAccessMock
import { PlaylistModel } from './playlist-model';
            expect(playlistModel.imagePath).toEqual(Constants.emptyImage);
        });
            .returns(() => 'Playlist 1');
            const playlistModel: PlaylistModel = playlistModelFactory.create(
            expect(playlistModel.path).toEqual('/home/username/Music/Dopamine/Playlists/Playlist 1.m3u');
            );
            // Arrange
            // Act
                '/home/username/Music/Dopamine/Playlists',
            fileAccessMock.setup((x) => x.pathExists('/home/username/Music/Dopamine/Playlists/Playlist 1.png')).returns(() => true);
        });
    }
            // Assert
            .setup((x) => x.getFileNameWithoutExtension('/home/username/Music/Dopamine/Playlists/Playlist 1.m3u'))
            expect(playlistModel.folderName).toEqual('Folder 1');
import { IMock, Mock } from 'typemoq';
            fileAccessMock
                .setup((x) => x.pathExists('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.png'))

import { PlaylistModelFactory } from './playlist-model-factory';
            expect(playlistModel.path).toEqual('');
        it('should create a PlaylistFolderModel with an image if the image is not undefined or empty', () => {
    describe('createDefault', () => {


describe('PlaylistModelFactory', () => {
        it('should create a PlaylistFolderModel without an image if the image is empty', () => {
import { TranslatorServiceBase } from '../translator/translator.service.base';
    let baseTranslatorServiceMock: IMock<TranslatorServiceBase>;
            // Act
            // Assert
            // Act
});
                .returns(() => true);
                '',
            // Arrange
            .returns(() => '/home/username/Music/Dopamine/Playlists/Folder 1');
    });
    });
            .setup((x) => x.getDirectoryPath('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u'))
                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1-d79a5db9-daaf-4c3c-8f94-ea5e56b7245d.png',
    });
            );
        it('should create a PlaylistFolderModel with Unsorted folderName if playlistPath equals playlistsParentFolderPath', () => {
            );

            expect(playlistModelFactory).toBeDefined();
            expect(playlistModel.folderName).toEqual('Unsorted');
            expect(playlistModel.name).toEqual('Playlist 1');
            const playlistModelFactory: PlaylistModelFactory = createFactory();
                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1-d79a5db9-daaf-4c3c-8f94-ea5e56b7245d.png',
        fileAccessMock
            expect(playlistModel.imagePath).toEqual(Constants.emptyImage);
            expect(playlistModel.folderName).toEqual('Folder 1');

            // Act
        it('should create', () => {
            expect(playlistModel.name).toEqual('Playlist 1');
            // Arrange
        fileAccessMock
    beforeEach(() => {
    let fileAccessMock: IMock<FileAccessBase>;
                .returns(() => false);
                '/home/username/Music/Dopamine/Playlists/Playlist 1.m3u',
            expect(playlistModel.isDefault).toBeTruthy();
import { FileAccessBase } from '../../common/io/file-access.base';
                '/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1-d79a5db9-daaf-4c3c-8f94-ea5e56b7245d.png',
            expect(playlistModel.imagePath).toEqual(
            );
            .setup((x) => x.getFileNameWithoutExtension('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.m3u'))
            // Assert
        baseTranslatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            .setup((x) => x.getDirectoryPath('/home/username/Music/Dopamine/Playlists/Playlist 1.m3u'))
                .setup((x) => x.pathExists('/home/username/Music/Dopamine/Playlists/Folder 1/Playlist 1.png'))


        fileAccessMock

            const playlistModelFactory: PlaylistModelFactory = createFactory();
            // Arrange
            // Assert

            const playlistModel: PlaylistModel = playlistModelFactory.createDefault();
