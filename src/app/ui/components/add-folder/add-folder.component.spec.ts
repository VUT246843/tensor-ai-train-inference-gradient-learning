                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            translatorServiceMock
            // Assert

            dialogServiceMock
                (x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'),
            // Arrange
        it('should allow selecting for a folder on the computer', async () => {

    describe('constructor', () => {

            // Act
            // Act
            dialogServiceMock.verify((x) => x.showErrorDialog('Error while deleting folder'), Times.exactly(1));
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
            // Assert
        });
            translatorServiceMock.verify((x) => x.getAsync('confirm-delete-folder'), Times.exactly(1));
        });
            // Act
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            settingsMock.object,

            // Assert
            folderServiceMock.verify((x) => x.setAllFoldersVisible(), Times.exactly(1));
            translatorServiceMock


                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))
import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
            // Act
            await component.addFolderAsync();
        it('should get settings showAllFoldersInCollection', () => {
            folderServiceMock.verify((x) => x.getFolders(), Times.never());


            // Act
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
            translatorServiceMock.object,
        });
    let folderServiceMock: IMock<FolderServiceBase>;
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
    });
            // Arrange

            dialogServiceMock.object,
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));
            expect(component.folders).toBeDefined();
                .returns(() => Promise.resolve(false));
            dialogServiceMock
        });

            component.showAllFoldersInCollection = true;
describe('AddFolderComponent', () => {
            const showAllFoldersInCollection = component.showAllFoldersInCollection;
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));

            await component.addFolderAsync();
    });
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            // Act

        });
            translatorServiceMock
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
        it('should get translated text for the delete folder confirmation dialog title', async () => {
        });
            await component.deleteFolderAsync(folderToDelete);
    });
    let dialogServiceMock: IMock<DialogServiceBase>;

            expect(settingsStub.showAllFoldersInCollection).toBeTruthy();
            // Arrange
            // Arrange

            // Assert
            folderServiceMock.object,
    describe('setFolderVisibility', () => {

        it('should get folders from the database', async () => {
            // Arrange
        it('should get the translation for the error dialog if deleting a folder fails', async () => {
    describe('getFoldersAsync', () => {

            translatorServiceMock.verify((x) => x.getAsync('add-folder-error'), Times.exactly(1));
            settingsStub,
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            // Arrange
            translatorServiceMock
        it('should not show check boxes by default', () => {
            dialogServiceMock.verify((x) => x.showErrorDialog('Error while adding folder'), Times.exactly(1));
            folderServiceMock.object,
    let settingsMock: IMock<SettingsBase>;



            translatorServiceMock
            // Arrange
        });
        folderServiceMock = Mock.ofType<FolderServiceBase>();
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
            await component.addFolderAsync();
            await component.deleteFolderAsync(folderToDelete);


            // Assert
    let settingsStub: any;
            // Act
import { AddFolderComponent } from './add-folder.component';
            await component.deleteFolderAsync(folderToDelete);
            // Assert
            // Assert
            folderServiceMock.verify((x) => x.addFolderAsync('/home/me/Music'), Times.exactly(1));
    describe('deleteFolderAsync', () => {


            expect(component).toBeDefined();

        desktopMock = Mock.ofType<DesktopBase>();
                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))

            folderServiceMock.setup((x) => x.deleteFolder(folderToDelete)).throws(new Error('An error occurred'));


import { Logger } from '../../../common/logger';
            await component.deleteFolderAsync(folderToDelete);

            translatorServiceMock
        it('should create', () => {
            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve('/home/user/music'));
            await component.addFolderAsync();
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            // Arrange

        });
        it('should not get all the folders if the user has not confirmed deletion', async () => {
                .returns(() => Promise.resolve(true));
import { FolderServiceBase } from '../../../services/folder/folder.service.base';
            // Assert
            // Act
            component.setFolderVisibility(folder);

            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            // Arrange
                .returns(() => Promise.resolve(true));

            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))
        });
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));

        translatorServiceMock.setup((x) => x.getAsync('select-folder')).returns(() => Promise.resolve('Select a folder'));

            );
                        folderPath: folderToDelete.path,
            translatorServiceMock.verify((x) => x.getAsync('select-folder'), Times.exactly(1));
        });
        });
            // Act
            await component.ngOnInit();
            // Act
            // Act

            translatorServiceMock.object,
        });
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));

                .returns(() => Promise.resolve(true));
            folderServiceMock.verify((x) => x.deleteFolder(folderToDelete), Times.never());
            loggerMock.object,
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
});
            await component.deleteFolderAsync(folderToDelete);
            // Act
            // Arrange
            // Arrange
            // Act
            folderServiceMock.setup((x) => x.addFolderAsync('/home/user/music')).throws(new Error('An error occurred'));
            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve(''));

            // Act
            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
        it('should save folder visibility', () => {

            // Act
            // Act
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';

            // Assert
            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve('/home/user/music'));

            componentWithStub.setFolderVisibility(folder);

                    }),

        });
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
    let indexingServiceMock: IMock<IndexingService>;

        it('should not add a folder with the selected path to the database if the path is empty', async () => {
        });
            // Assert
            // Act
                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))

            // Act
            // Arrange
        });
        it('should delete the folder if the user has confirmed deletion', async () => {

            // Arrange


            folderServiceMock.setup((x) => x.deleteFolder(folderToDelete)).throws(new Error('An error occurred'));
        it('should show an error dialog if deleting a folder fails', async () => {
            await component.deleteFolderAsync(folderToDelete);
    });

            const folder: FolderModel = new FolderModel(new Folder('/home/user/Music'));
                Times.exactly(1),
            settingsMock.verify((x) => x.showAllFoldersInCollection, Times.exactly(1));

        });
    });
        );

            translatorServiceMock


            folderServiceMock.verify((x) => x.getFolders(), Times.exactly(1));
            desktopMock.verify((x) => x.showSelectFolderDialogAsync('Select a folder'), Times.exactly(1));
        it('should not set all folders visible if false', () => {
            // Assert
    beforeEach(() => {

            // Act
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));

        });
                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))
                .returns(() => Promise.resolve(true));
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            // Assert
        indexingServiceMock = Mock.ofType<IndexingService>();
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            expect(component.indexingService).toBeDefined();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            folderServiceMock.verify((x) => x.setAllFoldersVisible(), Times.never());
            // Assert
        });
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
            // Arrange
            translatorServiceMock
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
    let desktopMock: IMock<DesktopBase>;

            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve('/home/user/music'));

            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));
            folderServiceMock.setup((x) => x.addFolderAsync('/home/user/music')).throws(new Error('An error occurred'));
            // Arrange
import { DesktopBase } from '../../../common/io/desktop.base';
            // Act
            // Assert
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
                (x) =>
import { IndexingService } from '../../../services/indexing/indexing.service';
            await component.deleteFolderAsync(folderToDelete);
            translatorServiceMock.setup((x) => x.getAsync('add-folder-error')).returns(() => Promise.resolve('Error while adding folder'));

            await component.addFolderAsync();
        it('should get all folders from the database if adding a folder succeeds', async () => {
        it('should not get all folders from the database if adding a folder fails', async () => {
        it('should show an error dialog if adding a folder fails', async () => {

            // Act
        it('should get the translation for the error dialog if adding a folder fails', async () => {
            );
            // Act
    describe('addFolderAsync', () => {
            // Arrange
            componentWithStub.showAllFoldersInCollection = true;
        it('should get translated text for the delete folder confirmation dialog text', async () => {
            await component.getFoldersAsync();
        it('should define indexingService', () => {
            translatorServiceMock.verify((x) => x.getAsync('delete-folder-error'), Times.exactly(1));
            await component.addFolderAsync();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert
            // Assert
            // Arrange

            // Assert
        it('should get folders from the database', async () => {

            component.showAllFoldersInCollection = false;
            desktopMock.object,

            const folderToDelete: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            const folder: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            // Arrange

        });
        component = new AddFolderComponent(
            expect(componentWithStub).toBeDefined();
            // Act
    });
        it('should disable showAllFoldersInCollection', () => {
        });
            folderServiceMock.verify((x) => x.getFolders(), Times.never());
            // Arrange
        settingsStub = { showAllFoldersInCollection: false };
            await component.addFolderAsync();
                .returns(() => Promise.resolve(false));
        componentWithStub = new AddFolderComponent(
        });
import { Folder } from '../../../data/entities/folder';
            indexingServiceMock.object,
        });
import { FolderModel } from '../../../services/folder/folder-model';
                Times.exactly(1),
        it('should add a folder with the selected path to the database if the path is not empty', async () => {

            translatorServiceMock.verify(
            // Arrange
            componentWithStub.showAllFoldersInCollection = true;
        translatorServiceMock.setup((x) => x.getAsync('delete-folder-error')).returns(() => Promise.resolve('Error while deleting folder'));


            indexingServiceMock.object,
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))



        });
            // Assert
            folderServiceMock.verify((x) => x.addFolderAsync(It.isAnyString()), Times.never());
        });



            folderServiceMock.setup((x) => x.addFolderAsync('/home/user/music')).throws(new Error('An error occurred'));
            // Arrange
            // Assert
            await component.addFolderAsync();
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));

import { SettingsBase } from '../../../common/settings/settings.base';
    let componentWithStub: AddFolderComponent;
            // Act
        it('should get translated text for the open folder dialog', async () => {
        });
            // Assert
        });
            // Arrange
        loggerMock = Mock.ofType<Logger>();
        it('should not delete the folder if the user has not confirmed deletion', async () => {
        dialogServiceMock = Mock.ofType<DialogServiceBase>();
    let component: AddFolderComponent;
            expect(componentWithStub.showAllFoldersInCollection).toBeFalsy();

import { IMock, It, Mock, Times } from 'typemoq';
            dialogServiceMock


            dialogServiceMock
            // Act
            dialogServiceMock
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))



            await component.deleteFolderAsync(folderToDelete);
                .returns(() => Promise.resolve('Are you sure you want to delete this folder?'));
            // Arrange
            // Arrange


            // Act
            // Assert
                .setup((x) => x.getAsync('confirm-delete-folder-long', { folderPath: folderToDelete.path }))
                    x.getAsync('confirm-delete-folder-long', {
    });
            expect(component.showCheckBoxes).toBeFalsy();
        it('should get all folders if the user has confirmed deletion', async () => {

    describe('showAllFoldersInCollection', () => {
    let loggerMock: IMock<Logger>;

            loggerMock.object,
                .setup((x) => x.showConfirmationDialogAsync('Delete folder?', 'Are you sure you want to delete this folder?'))


            // Act
            // Arrange
        it('should set settings showAllFoldersInCollection', () => {

            desktopMock.object,
        it('should set all folders visible if true', () => {
            folderServiceMock.verify((x) => x.setFolderVisibility(folder), Times.exactly(1));
            // Assert

            dialogServiceMock
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));



            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve('/home/me/Music'));
            // Assert
            // Act

        settingsMock = Mock.ofType<SettingsBase>();
        });
            // Assert
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));
            // Assert

        );

            translatorServiceMock
            // Arrange
            // Assert
    describe('ngOnInit', () => {
        it('should show a confirmation dialog', async () => {
            desktopMock.setup((x) => x.showSelectFolderDialogAsync('Select a folder')).returns(() => Promise.resolve('/home/user/music'));
            // Act

            // Arrange
            // Arrange
            // Assert

            // Assert
        it('should define folders', () => {
    });
        });


            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-folder')).returns(() => Promise.resolve('Delete folder?'));

            dialogServiceMock.object,
        });
            // Arrange

            dialogServiceMock.verify(
            // Assert


            folderServiceMock.verify((x) => x.deleteFolder(folderToDelete), Times.exactly(1));
            await component.deleteFolderAsync(folderToDelete);

