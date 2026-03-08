describe('SubfolderNamePipe', () => {
        fileAccessMock = Mock.ofType<FileAccessBase>();
import { IMock, Mock } from 'typemoq';
            const subfolderName: string = subfolderNamePipe.transform(subfolder);
        });
            expect(subfolderName).toEqual('');
    describe('transform', () => {

            // Arrange
        it('should return the subfolder name of a subfolder path', () => {
            expect(subfolderName).toEqual('');

            const subfolder: SubfolderModel = new SubfolderModel('/home/User/Music/Subfolder1', true);
import { FileAccessBase } from '../../common/io/file-access.base';

import { SubfolderNamePipe } from './subfolder-name.pipe';
            // Assert
            expect(subfolderName).toEqual('..');
            const subfolderName: string = subfolderNamePipe.transform(subfolder);



            // Act
            // Arrange
        fileAccessMock.setup((x) => x.getDirectoryOrFileName('/home/User/Music/Subfolder1')).returns(() => 'Subfolder1');
            // Act
        });
import { SubfolderModel } from '../../services/folder/subfolder-model';
            // Arrange
            const subfolderName: string = subfolderNamePipe.transform(undefined);
            // Assert

            // Arrange
        });
        subfolderNamePipe = new SubfolderNamePipe(fileAccessMock.object);
    });
            // Act
            // Assert
            // Assert
            expect(subfolderName).toEqual('Subfolder1');
            const subfolderName: string = subfolderNamePipe.transform(subfolder);
});

        });

    let fileAccessMock: IMock<FileAccessBase> = Mock.ofType<FileAccessBase>();

            const subfolder: SubfolderModel = new SubfolderModel('/home/User/Music/Subfolder1', false);
            // Act
    let subfolderNamePipe: SubfolderNamePipe;

    beforeEach(() => {
    });

            const subfolder: SubfolderModel = new SubfolderModel('', false);
        it('should return empty string if subfolder path is empty', () => {
        it('should return empty string if subfolder is undefined', () => {
        it('should return double dots .. if subfolder path is not empty and is a go to parent subfolder', () => {



