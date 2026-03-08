            fileAccessMock.setup((x) => x.pathExists(subfolderPath)).returns(() => false);
            expect(subfolderBreadcrumbs[0].path).toEqual('/home/user/Music');

            service.onFoldersChanged();
            // Arrange
                }),
    });
            // Assert
            let foldersHaveChanged: boolean = false;
            // Arrange
            // Assert
            // Assert
    describe('addFolderAsync', () => {
            // Act

            fileAccessMock.setup((x) => x.getDirectoryPath('/home/user/Music')).returns(() => '/home/user');
            // Arrange
            const folder1: Folder = new Folder('path1');
                    foldersHaveChanged = true;
            subscription.unsubscribe();
            const subscription: Subscription = service.foldersChanged$.subscribe(() => {
        it('should return a collection of folderModels for each folder found in the database', () => {
            // Arrange
        });
                .returns(() => '/home/user/Music/subfolder1');
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);

            notificationServiceMock.verify((x) => x.folderAlreadyAddedAsync(), Times.exactly(1));
                foldersHaveChanged = true;
            const subDirectories: string[] = ['Root child 1', 'Root child 2', 'Root child 3'];

            // Act
    describe('getSubfolderBreadcrumbs', () => {
            // Act
            const folder1: Folder = new Folder('path1');
            folderRepositoryMock.verify((x) => x.getFolders(), Times.once());
            // Arrange

        });
        });

            // Arrange

                '/home/user/Music/subfolder1/subfolder2/subfolder3',

            expect(subfolders[2].path).toEqual('Root child 3');
            // Arrange
            const subfolder: SubfolderModel = new SubfolderModel(subfolderPath, true);

                foldersHaveChanged = true;
            // Act

            folderRepositoryMock.verify((x) => x.addFolder(It.isObjectWith<Folder>({ path: '/home/me/Music' })), Times.exactly(1));

import { SubfolderModel } from './subfolder-model';
            // Act
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);
            service.setFolderVisibility(folderModel);
        it('should not add an existing folder with the selected path to the database', async () => {


            const rootFolder: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            await service.addFolderAsync('/home/me/Music');
            fileAccessMock
                .setup((x) => x.getDirectoryPath('/home/user/Music/subfolder1/subfolder2'))
            // Assert
            expect(service.collectionHasFolders).toBeFalsy();
        it('should initialize collectionHasFolders as false', () => {

            const rootFolderPath: string = '/home/user/Music';
import { FileAccessBase } from '../../common/io/file-access.base';
            expect(subfolders[0].isGoToParent).toBeTruthy();
            const subfolder: SubfolderModel = new SubfolderModel(subfolderPath, false);
            // Act
        it('should return no subfolders, given a root folder and a subfolder, and the subfolder path does not exist.', async () => {
            expect(subfolderBreadcrumbs[1].path).toEqual('/home/user/Music/subfolder1');
            // Arrange
import { Subscription } from 'rxjs';
            // Assert
            const folder: Folder = new Folder('/home/user/Music');
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
            databaseFolder2.folderId = 2;

            // Assert
            });
            const folder2: Folder = new Folder('path2');
            expect(foldersHaveChanged).toBeTruthy();

            // Assert
            expect(subfolders.length).toEqual(3);

            const databaseFolder2: Folder = new Folder('Two');
            folderRepositoryMock.verify((x) => x.setAllFoldersShowInCollection(1), Times.exactly(1));


            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);

        });
            await service.addFolderAsync('/home/me/Music');
            // Arrange
            // Act
            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, subfolder);
            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, subfolder);
        it('should get folders from the database', () => {
            // Arrange
            fileAccessMock


            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));
            const rootFolderPath: string = '/home/user/Music';
    });
            folder.folderId = 1;


            );
        it('should return the subfolders of the parent folder, given a go to parent subfolder', async () => {
            const folder: Folder = new Folder('/home/user/Music');
            expect(folders.length).toEqual(0);

    });
            // Assert
        });
            folderRepositoryMock.reset();

            // Act
            const folders: FolderModel[] = service.getFolders();

            expect(subfolders[2].path).toEqual('Root child 3');
            service.setAllFoldersVisible();
            const rootFolder: FolderModel = new FolderModel(new Folder('/home/user/Music'));
            expect(subfolders.length).toEqual(0);
        it('should notify that folders have changed when a folder is added', async () => {
            expect(subfolders[3].path).toEqual('Root child 3');
        it('should delete a folder from the database', () => {
            const rootFolder: FolderModel = new FolderModel(new Folder('/home/user/Music'));
        folderRepositoryMock = Mock.ofType<FolderRepositoryBase>();
                .returns(() => Promise.resolve(rootFolderDirectories));
            const folder2: Folder = new Folder('path2');
            folderRepositoryMock.reset();
            expect(subfolders[1].path).toEqual('Root child 1');

        });
            service.onFoldersChanged();
            const folderToDelete: FolderModel = new FolderModel(folder);
    describe('setAllFoldersVisible', () => {
            const rootFolderPath: string = '/home/user/Music';

            folderRepositoryMock.verify((x) => x.getFolders(), Times.exactly(1));
        it('should create', () => {
        it('should return a go to parent subfolder and subfolders of the sub folder, given a root folder and a subfolder which is not the root folder.', async () => {
            service.onFoldersChanged();
            expect(subfolderBreadcrumbs.length).toEqual(4);
            service.onFoldersChanged();
            expect(subfolders[2].path).toEqual('Root child 2');
            expect(folders[0].folderId).toEqual(1);
            expect(subfolders.length).toEqual(4);
            service.onFoldersChanged();
            folderRepositoryMock.verify((x) => x.setFolderShowInCollection(1, 1), Times.exactly(1));
            // Assert
            const folder2: Folder = new Folder('path2');
    describe('getFoldersAsync', () => {
            // Act
            folderRepositoryMock.verify((x) => x.getFolders(), Times.never());
            subscription.unsubscribe();


            // Arrange
            const subfolderPath: string = '/home/user/Music/Sub1/Sub2';
            folderRepositoryMock.setup((x) => x.getFolderByPath('/home/me/Music')).returns(() => undefined);
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);
            // Act
        });
            const collectionHasFoldersFirstTime: boolean = service.collectionHasFolders;
            // Assert
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [databaseFolder1, databaseFolder2]);
            // Act
            expect(folders[0].path).toEqual('One');
            fileAccessMock.setup((x) => x.getDirectoryPath('/home/user/Music/subfolder1')).returns(() => '/home/user/Music');



            folderRepositoryMock.verify((x) => x.addFolder(It.isObjectWith<Folder>({ path: '/home/me/Music' })), Times.never());
            // Act
            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));
    let loggerMock: IMock<Logger>;
            fileAccessMock.setup((x) => x.getDirectoriesInDirectoryAsync(subfolderPath)).returns(() => Promise.resolve(subDirectories));
            const subfolderPath: string = '/home/user/Music';

            fileAccessMock.setup((x) => x.getDirectoriesInDirectoryAsync(subfolderPath)).returns(() => Promise.resolve(subDirectories));
            const folder1: Folder = new Folder('path1');
            const collectionHasFolders: boolean = service.collectionHasFolders;
import { FolderRepositoryBase } from '../../data/repositories/folder-repository.base';

            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, subfolder);
            databaseFolder1.folderId = 1;
            // Assert
            folderRepositoryMock.setup((x) => x.getFolderByPath('/home/me/Music')).returns(() => new Folder('/home/me/Music'));
        });
            expect(collectionHasFolders).toBeTruthy();
    });
        it('should always contain the root folder in first position', () => {
            expect(subfolderBreadcrumbs.length).toEqual(1);
            fileAccessMock.setup((x) => x.getDirectoryPath('/home/user/Music/subfolder1')).returns(() => '/home/user/Music');
        it('should return an empty collection when database folders are empty', () => {
        it('should notify the user if a folder was already added', async () => {
        });

            expect(foldersHaveChanged).toBeTruthy();
            fileAccessMock.setup((x) => x.pathExists(rootFolderPath)).returns(() => true);
            expect(subfolders[2].path).toEqual('Root child 2');

            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, undefined);
            // Act
            // Arrange
        it('should define foldersChanged$', () => {
            // Assert

            // Arrange
                service.foldersChanged$.subscribe(() => {
            const subfolderPath: string = '/home/user/Music/Subfolder1';
            const folder: Folder = new Folder('/home/user/Music');
            // Arrange
    });
        it('should only contain the root folder if the subfolder path is the root folder path', () => {
            service.collectionHasFolders;
            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));
import { IMock, It, Mock, Times } from 'typemoq';
            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));
            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));

            fileAccessMock.setup((x) => x.pathExists(subfolderPath)).returns(() => true);
import { FolderModel } from './folder-model';
            const databaseFolder1: Folder = new Folder('One');
    describe('collectionHasFolders', () => {
            // Act
            subscription.add(
        });


            // Arrange
    });
            // Assert
        it('should count the folders from the database the first time it is called', () => {
        it('should contain subdirectories of the root folder until the given subfolder path included', () => {
            expect(subfolders.length).toEqual(4);
            const folder2: Folder = new Folder('path2');
            // Act
            const folderModel: FolderModel = new FolderModel(folder);
            // Act
            expect(subfolders[1].path).toEqual('Root child 2');
        });

            );
            fileAccessMock.setup((x) => x.pathExists(rootFolderPath)).returns(() => false);


            const subfolder: SubfolderModel = new SubfolderModel(subfolderPath, false);
            // Assert
        it('should return no subfolders, given no root folder.', async () => {
        it('should set folder visibility in the database', () => {
            // Assert
            service.collectionHasFolders;
            // Act
            // Act
            const collectionHasFolders: boolean = service.collectionHasFolders;

        loggerMock = Mock.ofType<Logger>();
            expect(foldersHaveChanged).toBeTruthy();
            // Act
            // Arrange
        fileAccessMock = Mock.ofType<FileAccessBase>();
            // Arrange
            // Act

    });
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => []);
            const folders: FolderModel[] = service.getFolders();
            folderRepositoryMock.verify((x) => x.getFolders(), Times.once());
            let foldersHaveChanged: boolean = false;
            fileAccessMock.setup((x) => x.pathExists(subfolderPath)).returns(() => true);
            // Arrange
            // Assert

            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, subfolder);
            // Arrange
            folder.folderId = 1;
        it('should return an empty collection when database folders are undefined', () => {
        it('should add a new folder with the selected path to the database', async () => {
        });
            expect(subfolderBreadcrumbs[3].path).toEqual('/home/user/Music/subfolder1/subfolder2/subfolder3');
            // Assert
    beforeEach(() => {
            // Act

        it('should not notify that folders have changed when a folder is not added', async () => {
            // Assert
            // Arrange
            // Arrange
            // Assert
            expect(foldersHaveChanged).toBeFalsy();
            folderRepositoryMock.setup((x) => x.getFolderByPath('/home/me/Music')).returns(() => new Folder('/home/me/Music'));
            // Act
            // Arrange
            expect(service.foldersChanged$).toBeDefined();
import { FolderService } from './folder.service';
            // Arrange
        });

            // Assert
            // Act


            const rootFolderPath: string = '/home/user/Music';
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);


        });

            // Act

            // Arrange
                .setup((x) => x.getDirectoriesInDirectoryAsync('/home/user/Music/Sub1'))

                .setup((x) => x.getDirectoriesInDirectoryAsync(rootFolderPath))
            const folder1: Folder = new Folder('path1');

            expect(subfolders[1].path).toEqual('Root child 1');
            service.getFolders();
            expect(folders[1].path).toEqual('Two');
    let fileAccessMock: IMock<FileAccessBase>;
            });
            folderRepositoryMock.verify((x) => x.getFolders(), Times.once());
            const folderToDelete: FolderModel = new FolderModel(folder);
            const folder2: Folder = new Folder('path2');
            // Act
        });



            // Act
            fileAccessMock



            service.deleteFolder(folderToDelete);
            const rootFolderDirectories: string[] = ['Root child 1', 'Root child 2', 'Root child 3'];
            // Assert

        it('should return no subfolders, given a root folder but no subfolder, and the root folder path does not exist.', async () => {
            expect(subfolders[0].path).toEqual('/home/user/Music/Sub1');
            await service.addFolderAsync('/home/me/Music');

            const subscription: Subscription = service.foldersChanged$.subscribe(() => {
            // Act
        });
            folderModel.showInCollection = true;
        });
            expect(folders.length).toEqual(2);
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);
        it('should return the subfolders of the root folder, given a root folder but no subfolder, and the root folder path exists.', async () => {
    let folderRepositoryMock: IMock<FolderRepositoryBase>;
        it('should count the folders from the database the second time it is called', () => {
        it('should notify that folders have changed when deleting a folder', () => {
            const subDirectories: string[] = ['Root child 1', 'Root child 2', 'Root child 3'];
            // Arrange
            folderRepositoryMock.reset();

describe('FolderService', () => {


            // Assert
            folderRepositoryMock.setup((x) => x.getFolderByPath('/home/me/Music')).returns(() => undefined);
        });
            folderRepositoryMock.verify((x) => x.deleteFolder(folderToDelete.folderId), Times.exactly(1));


            expect(subfolders[1].path).toEqual('Root child 2');
            const subscription: Subscription = service.foldersChanged$.subscribe(() => {
        });
import { Logger } from '../../common/logger';
            const rootFolderPath: string = '/home/user/Music';
        });
            fileAccessMock.setup((x) => x.getDirectoryPath(subfolderPath)).returns(() => '/home/user/Music/Sub1');



            // Assert
        it('should return subfolders of the subfolder, given a root folder and a subfolder which is the root folder.', async () => {
    describe('deleteFolderAsync', () => {
            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(undefined, undefined);

            await service.addFolderAsync('/home/me/Music');
            // Arrange
    });
    let service: FolderService;
        });
            service.collectionHasFolders;
                foldersHaveChanged = true;






            service.onFoldersChanged();
            // Arrange
            // Act
            expect(subfolderBreadcrumbs[0].path).toEqual(rootFolder.path);
            // Act

            const rootFolderPath: string = '/home/user/Music';
            const subfolderBreadcrumbs: SubfolderModel[] = service.getSubfolderBreadcrumbs(
            expect(subfolders[3].path).toEqual('Root child 3');
            // Assert
            // Arrange

            // Act
            // Assert
        });

    describe('getSubfolders', () => {
            expect(subfolders[0].path).toEqual('Root child 1');

            // Act

        it('should set visibility of all folders in the database', () => {
        });
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => []);
            service.deleteFolder(folderToDelete);


            // Assert
        it('should trigger a foldersChanged event', () => {
            expect(subfolders[0].path).toEqual('Root child 1');
        });
            // Assert
            // Assert
                .setup((x) => x.getDirectoryPath('/home/user/Music/subfolder1/subfolder2/subfolder3'))
        });
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);
            const subfolderPath: string = '/home/user/Music/Sub1';
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => []);
        });
    });
            expect(subfolderBreadcrumbs[0].path).toEqual(rootFolder.path);

    describe('onFoldersChanged', () => {
            // Act
        it('should update collectionHasFolders each time it is called', () => {


            expect(folders[1].folderId).toEqual(2);
            const folder2: Folder = new Folder('path2');

                rootFolder,
            const collectionHasFoldersSecondTime: boolean = service.collectionHasFolders;
            folderRepositoryMock.setup((x) => x.getFolderByPath('/home/me/Music')).returns(() => new Folder('/home/me/Music'));
});
                .returns(() => Promise.resolve(subDirectories));
            expect(subfolders[0].path).toEqual('/home/user/Music/Sub1');
            // Act

            // Act
import { Folder } from '../../data/entities/folder';
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => undefined);
            const folder1: Folder = new Folder('path1');
            const subfolders: SubfolderModel[] = await service.getSubfoldersAsync(rootFolder, undefined);
            expect(subfolders.length).toEqual(0);

            // Assert
            // Assert
        it('should not count the folders from the database the second time it is called', () => {
        });
        it('should return true if the number of folders is larger than 0', () => {
    });

    });

            const subfolder: SubfolderModel = new SubfolderModel(subfolderPath, false);

        });


        });
            expect(folders.length).toEqual(0);



            // Assert
            fileAccessMock.setup((x) => x.pathExists(subfolderPath)).returns(() => true);

            // Arrange
            expect(collectionHasFolders).toBeFalsy();
            // Arrange
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => [folder1, folder2]);
            expect(subfolders.length).toEqual(0);
            // Arrange
            const folders: FolderModel[] = service.getFolders();

            expect(service).toBeDefined();
            const subscription: Subscription = new Subscription();
import { NotificationServiceBase } from '../notification/notification.service.base';
            // Assert
        });

            const rootFolder: FolderModel = new FolderModel(new Folder(rootFolderPath));
            expect(subfolderBreadcrumbs[2].path).toEqual('/home/user/Music/subfolder1/subfolder2');
            const folder1: Folder = new Folder('path1');
            // Assert
        });
            folderRepositoryMock.setup((x) => x.getFolders()).returns(() => []);

            expect(subfolders.length).toEqual(3);

        });
            // Arrange
            expect(subfolders[0].isGoToParent).toBeTruthy();


            const subDirectories: string[] = ['Root child 1', 'Root child 2', 'Root child 3'];

            // Assert

            subscription.unsubscribe();

            // Arrange
            const subfolderBreadcrumbs: SubfolderModel[] = service.getSubfolderBreadcrumbs(rootFolder, '/home/user/Music/subfolder1');



        it('should count the folders from the database the first time it is called', () => {
            await service.addFolderAsync('/home/me/Music');
            expect(collectionHasFoldersSecondTime).toBeTruthy();
        });
            });
    describe('constructor', () => {
                .returns(() => '/home/user/Music/subfolder1/subfolder2');
        service = new FolderService(folderRepositoryMock.object, loggerMock.object, notificationServiceMock.object, fileAccessMock.object);
        });
            let foldersHaveChanged: boolean = false;
            // Arrange

        it('should return false if the number of folders is 0', () => {

            folder.folderId = 1;
    let notificationServiceMock: IMock<NotificationServiceBase>;
            fileAccessMock
    describe('setFolderVisibility', () => {

            let foldersHaveChanged: boolean = false;
            expect(collectionHasFoldersFirstTime).toBeFalsy();
            const subfolderBreadcrumbs: SubfolderModel[] = service.getSubfolderBreadcrumbs(rootFolder, rootFolder.path);
