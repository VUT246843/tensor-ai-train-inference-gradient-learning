            // Act
            // Arrange
            // Arrange

    describe('getOpenedFolder', () => {
            settingsStub.foldersTabOpenedSubfolder = '';
        });
            // Arrange
            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));
    });
            settingsStub.foldersTabOpenedFolder = '/some/folder';
            settingsStub.foldersTabOpenedFolder = '';

            const folder2: FolderModel = new FolderModel(new Folder('/some/other/folder'));
            const openedSubfolder: SubfolderModel | undefined = foldersPersister.getOpenedSubfolder();
            // Act
import { Logger } from '../../../../common/logger';
            const openedSubfolder: SubfolderModel | undefined = foldersPersister.getOpenedSubfolder();

            expect(foldersPersister).toBeDefined();
            expect(openedSubfolder!.path).toEqual('/some/folder/subfolder');
import { FolderModel } from '../../../../services/folder/folder-model';
            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));

            // Arrange
            // Act
            // Assert
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            // Act

            expect(settingsStub.foldersTabOpenedSubfolder).toEqual(subfolder.path);
        });
            foldersPersister.setOpenedSubfolder(subfolder);


            const openedFolder: FolderModel | undefined = foldersPersister.getOpenedFolder(availableFolders);


        });
            // Assert
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            // Arrange
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);

            settingsStub.foldersTabOpenedFolder = '/some/unknown/folder';

        it('should set the opened folder given that the opened folder is not undefined', () => {
            foldersPersister.setOpenedFolder(folder1);

            // Act
        it('should return the first folder of the provided list of available folders given that there is no saved opened folder', () => {
        });
    describe('constructor', () => {
});

            // Assert
        });
            settingsStub.foldersTabOpenedSubfolder = '';
            // Assert
            expect(settingsStub.foldersTabOpenedFolder).toEqual(folder1.path);
            // Act



            // Act

        it('should not clear the opened subfolder in the settings given that the opened folder is not undefined', () => {
            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));

        });
            settingsStub.foldersTabOpenedSubfolder = '';
            expect(openedFolder).toBeUndefined();
    describe('setOpenedSubfolder', () => {
            const folder2: FolderModel = new FolderModel(new Folder('/some/other/folder'));

    });

            settingsStub.foldersTabOpenedFolder = '/some/folder';


            // Assert
            // Arrange
        });


            settingsStub.foldersTabOpenedFolder = '';
        });
            const availableFolders: FolderModel[] = [];
    });
            // Act
        it('should return undefined given that the opened folder is not undefined but the opened subfolder is undefined', () => {

            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            expect(foldersPersister.getOpenedFolder(availableFolders)).toBe(folder1);
            // Arrange
    });
    });
            foldersPersister.setOpenedSubfolder(subfolder);
import { SubfolderModel } from '../../../../services/folder/subfolder-model';


    let foldersPersister: FoldersPersister;

            // Assert
            // Arrange

            expect(openedSubfolder).toBeUndefined();

        it('should return the first folder of the provided list of available folders given that the saved opened folder is not found in the provided list of available folders', () => {

            // Assert

    beforeEach(() => {
            foldersPersister.setOpenedFolder(folder1);
import { IMock, Mock } from 'typemoq';

    let loggerMock: IMock<Logger>;
            const availableFolders: FolderModel[] = [folder1, folder2];
import { Folder } from '../../../../data/entities/folder';
            // Act
            expect(settingsStub.foldersTabOpenedSubfolder).toEqual('/some/folder/subfolder');
        it('should return the opened subfolder given that the opened subfolder is a child folder of the opened folder', () => {
            // Assert

            const openedSubfolder: SubfolderModel | undefined = foldersPersister.getOpenedSubfolder();
            settingsStub.foldersTabOpenedSubfolder = '/some/folder/subfolder';
        });

            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));
            expect(openedSubfolder).toBeUndefined();
    describe('setOpenedFolder', () => {

            // Act
            settingsStub.foldersTabOpenedFolder = '';

    let settingsStub: any;
            // Arrange
        foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
        });

            const openedFolder: FolderModel | undefined = foldersPersister.getOpenedFolder(availableFolders);
            // Arrange

            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
        });

            // Arrange
            const subfolder: SubfolderModel = new SubfolderModel('/some/folder/subfolder', false);

            // Assert

            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));



        it('should return undefined given that the provided list of available folders is empty', () => {
            expect(foldersPersister.getOpenedSubfolder()!.path).toEqual(subfolder.path);
            const openedFolder: FolderModel | undefined = foldersPersister.getOpenedFolder(availableFolders);
        it('should set the opened folder in the settings given that the opened folder is not undefined', () => {
        loggerMock = Mock.ofType<Logger>();
import { FoldersPersister } from './folders-persister';
            // Act
        it('should return the opened folder given that the saved opened folder is found in the provided list of available folders', () => {
        it('should set the opened subfolder given that the opened subfolder is not undefined', () => {
        it('should set the opened subfolder in the settings given that the opened subfolder is not undefined', () => {
            // Assert
            // Assert
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            expect(openedFolder).toBe(availableFolders[0]);
            settingsStub.foldersTabOpenedFolder = '';
        it('should create', () => {

            expect(openedSubfolder).toBeUndefined();
            const availableFolders: FolderModel[] = [folder1, folder2];
        it('should return undefined given that the opened subfolder is not a child folder of the opened folder', () => {
            const openedFolder: FolderModel | undefined = foldersPersister.getOpenedFolder(availableFolders);
            settingsStub.foldersTabOpenedFolder = '/some/folder';
            settingsStub.foldersTabOpenedSubfolder = '/some/folder/subfolder';

            const folder2: FolderModel = new FolderModel(new Folder('/some/other/folder'));
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            // Arrange
            foldersPersister.setOpenedFolder(folder1);

            const openedSubfolder: SubfolderModel | undefined = foldersPersister.getOpenedSubfolder();
            expect(openedFolder).toBe(folder1);
            const folder1: FolderModel = new FolderModel(new Folder('/some/folder'));
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            // Act
    describe('getOpenedSubfolder', () => {


            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
            // Assert
            settingsStub.foldersTabOpenedFolder = '/some/folder';


            const availableFolders: FolderModel[] = [folder1];
            // Assert
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
        });
            // Assert
            settingsStub.foldersTabOpenedSubfolder = '/some/not/folder/subfolder';

            settingsStub.foldersTabOpenedFolder = '/some/folder';
        });
            // Act

            // Act
            // Arrange
            settingsStub.foldersTabOpenedFolder = '/some/folder';
            const subfolder: SubfolderModel = new SubfolderModel('/some/folder/subfolder', false);
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
    });
            const availableFolders: FolderModel[] = [folder1, folder2];
            expect(openedFolder).toBe(availableFolders[0]);
            // Arrange
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
        settingsStub = { foldersTabOpenedFolder: '', foldersTabOpenedSubfolder: '' };
        it('should return undefined given that the opened folder is undefined', () => {
        });
describe('FoldersPersister', () => {
            foldersPersister = new FoldersPersister(settingsStub, loggerMock.object);
