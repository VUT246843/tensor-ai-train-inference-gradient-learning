                folder.showInCollection = 0;
            const folderPath: string = folderModel.path;
                // Assert
            // Assert
        folder.showInCollection = 1;
                const showInCollection: boolean = folderModel.showInCollection;


        });
        });
                expect(showInCollection).toBeFalsy();
            // Arrange, Act
                const showInCollection: boolean = folderModel.showInCollection;


        it('should return folderId', () => {


    describe('path', () => {
            expect(folderModel).toBeDefined();

                expect(showInCollection).toBeFalsy();
    beforeEach(() => {
                // Assert
    });
import { FolderModel } from './folder-model';
            it('should return false when folder showInCollection is undefined', () => {
        describe('showInCollection', () => {
    });
                // Arrange


            });
        it('should create', () => {
            // Assert
    describe('constructor', () => {
        folder = new Folder('/home/user/Music');
                folder.showInCollection = undefined;
                // Act

                // Arrange
        });
        it('should return folder path', () => {
                // Assert
        folderModel = new FolderModel(folder);
            expect(folderPath).toEqual(folder.path);
                // Act

});

describe('FolderModel', () => {


    });
    let folderModel: FolderModel;
    let folder: Folder;

            });
        });

            it('should return true when folder showInCollection is 1', () => {
            expect(folderId).toEqual(folder.folderId);
                // Arrange, Act
            it('should return false when folder showInCollection is 0', () => {
            const folderId: number = folderModel.folderId;
            // Arrange, Act, Assert
            });
            // Arrange, Act
        folder.folderId = 1;
                const showInCollection: boolean = folderModel.showInCollection;
                expect(showInCollection).toBeTruthy();
import { Folder } from '../../data/entities/folder';
