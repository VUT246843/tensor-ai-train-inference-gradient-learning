            );
import { IMock, Mock } from 'typemoq';

            expect(playlistFolderModel.isModifiable).toBeTruthy();
    describe('constructor', () => {
        it('should create', () => {
        it('should create a modifiable PlaylistFolderModel', () => {
            );
            );
                translatorServiceMock.object,
    });
            expect(playlistFolderModelFactory).toBeDefined();
        });

        });
            // Act
        fileAccessMock = Mock.ofType<FileAccessBase>();

        it('should create an unmodifiable unsorted PlaylistFolderModel', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

    let translatorServiceMock: IMock<TranslatorServiceBase>;
                fileAccessMock.object,
            expect(playlistFolderModel.name).toEqual('Unsorted');
                fileAccessMock.object,
            // Arrange
    });
            // Act
            // Act
            expect(playlistFolderModel.name).toEqual('');
            // Assert
    describe('create', () => {
                '/home/username/Music/Dopamine/Playlists/Folder 1',
            expect(playlistFolderModel.path).toEqual('/home/username/Music/Dopamine/Playlists');
import { PlaylistFolderModel } from './playlist-folder-model';
            // Act
                translatorServiceMock.object,
import { FileAccessBase } from '../../common/io/file-access.base';
        it('should create a default PlaylistFolderModel', () => {

import { TranslatorServiceBase } from '../translator/translator.service.base';
                fileAccessMock.object,
            expect(playlistFolderModel.name).toEqual('Folder 1');
            const playlistFolderModelFactory: PlaylistFolderModelFactory = new PlaylistFolderModelFactory(
    let fileAccessMock: IMock<FileAccessBase>;
            // Arrange
            expect(playlistFolderModel.isDefault).toBeTruthy();
            // Assert
            const playlistFolderModel: PlaylistFolderModel = playlistFolderModelFactory.create(
    beforeEach(() => {
    });
        });
            const playlistFolderModelFactory: PlaylistFolderModelFactory = new PlaylistFolderModelFactory(
            expect(playlistFolderModel.isModifiable).toBeFalsy();


                fileAccessMock.object,
    describe('createDefault', () => {
            const playlistFolderModel: PlaylistFolderModel = playlistFolderModelFactory.createUnsorted(
            // Assert

            const playlistFolderModelFactory: PlaylistFolderModelFactory = new PlaylistFolderModelFactory(
            );
    });
            // Arrange

        });
describe('PlaylistFolderModelFactory', () => {
import { PlaylistFolderModelFactory } from './playlist-folder-model-factory';
            );
                translatorServiceMock.object,
            );
    });
            const playlistFolderModel: PlaylistFolderModel = playlistFolderModelFactory.createDefault();


    describe('createUnsorted', () => {
                '/home/username/Music/Dopamine/Playlists',
        translatorServiceMock.setup((x) => x.get('unsorted')).returns(() => 'Unsorted');
            const playlistFolderModelFactory: PlaylistFolderModelFactory = new PlaylistFolderModelFactory(
            // Arrange
            // Assert

                translatorServiceMock.object,
        fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/username/Music/Dopamine/Playlists/Folder 1')).returns(() => 'Folder 1');
            expect(playlistFolderModel.isModifiable).toBeFalsy();

            expect(playlistFolderModel.path).toEqual('/home/username/Music/Dopamine/Playlists/Folder 1');

            expect(playlistFolderModel.path).toEqual('');
});
