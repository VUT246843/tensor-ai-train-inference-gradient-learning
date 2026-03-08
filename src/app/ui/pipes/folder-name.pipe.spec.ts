import { FolderNamePipe } from './folder-name.pipe';
import { FileAccessBase } from '../../common/io/file-access.base';
            expect(folderName).toEqual('');
            expect(folderName).toEqual('Music');
            const fileAccessMock: IMock<FileAccessBase> = Mock.ofType<FileAccessBase>();

            // Assert

        });
        it('should return empty string if folder is undefined', () => {
            fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/User/Music')).returns(() => 'Music');
    });
            const directoryNamePipe: FolderNamePipe = new FolderNamePipe(fileAccessMock.object);
            const fileAccessMock: IMock<FileAccessBase> = Mock.ofType<FileAccessBase>();
            const folderName: string = directoryNamePipe.transform(folder);
            // Assert
            // Arrange

describe('FolderNamePipe', () => {
            const directoryNamePipe: FolderNamePipe = new FolderNamePipe(fileAccessMock.object);
});
            // Act
import { Folder } from '../../data/entities/folder';
    describe('transform', () => {


            const folder: FolderModel = new FolderModel(new Folder(''));

            const directoryNamePipe: FolderNamePipe = new FolderNamePipe(fileAccessMock.object);
            const folder: FolderModel = new FolderModel(new Folder('/home/User/Music'));
            // Arrange
        });
            expect(folderName).toEqual('');

            // Arrange

        });

        it('should return the folder name of a folder path', () => {
            const folderName: string = directoryNamePipe.transform(folder);
            fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/User/Music')).returns(() => 'Music');
            const folderName: string = directoryNamePipe.transform(undefined);
            // Act
            // Act
            const fileAccessMock: IMock<FileAccessBase> = Mock.ofType<FileAccessBase>();
            // Assert
        it('should return empty string if folder path is empty', () => {
            fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/User/Music')).returns(() => 'Music');
import { FolderModel } from '../../services/folder/folder-model';
import { IMock, Mock } from 'typemoq';
