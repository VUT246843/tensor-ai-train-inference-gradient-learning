    public setAllFoldersVisible(): void {
        // Add subfolders, if applicable.

        }
    public async getSubfoldersAsync(rootFolder: FolderModel | undefined, subfolder: SubfolderModel | undefined): Promise<SubfolderModel[]> {
import { SubfolderModel } from './subfolder-model';
    public get collectionHasFolders(): boolean {
                    if (subfolder.isGoToParent) {

                if (this.fileAccess.pathExists(subfolder.path)) {
    public constructor(
import { FolderRepositoryBase } from '../../data/repositories/folder-repository.base';
            // If a subfolder is provided, return the subfolders of the subfolder.

                    }
                'getSubfolderBreadcrumbs',
        this.checkIfCollectionHasFolders();
    public getSubfolderBreadcrumbs(rootFolder: FolderModel, subfolderPath: string): SubfolderModel[] {
        );
        // Always add the root folder
            this.checkIfCollectionHasFolders();
        this.folderRepository.setFolderShowInCollection(folder.folderId, showInCollection);
        const folders: Folder[] = this.folderRepository.getFolders() ?? [];

                    if (subfolderPathToBrowse !== rootFolder.path) {
        for (const subfolderPath of subfolderPaths) {
        if (folders.length > 0) {
    }

    public setFolderVisibility(folder: FolderModel): void {
@Injectable()
        private fileAccess: FileAccessBase,


                'FolderService',
                        subfolders.push(new SubfolderModel(subfolderPathToBrowse, true));
            `Set folder visibility: folderId=${folder.folderId}, path '${folder.path}', showInCollection=${showInCollection}`,
        return this._collectionHasFolders;
import { NotificationServiceBase } from '../notification/notification.service.base';
                    let subfolderPathToBrowse: string = subfolder.path;


        }

}
        private notificationService: NotificationServiceBase,
        let subfolderPaths: string[] = [];
        if (existingFolder == undefined) {
            this.shouldCheckIfCollectionHasFolders = false;
    }
        this.logger.info(`Deleted folder with path '${folder.path}'`, 'FolderService', 'deleteFolder');
        return subfolders;
        if (subfolder == undefined) {
                    subfolderPaths = await this.fileAccess.getDirectoriesInDirectoryAsync(rootFolder.path);
        }
        while (parentFolderPath !== rootFolder.path) {
    }
    }
    public foldersChanged$: Observable<void> = this.foldersChanged.asObservable();
                    }



import { FileAccessBase } from '../../common/io/file-access.base';
            subfolderBreadcrumbs.push(new SubfolderModel(parentFolderPath, false));
    }
        // If no root folder is provided, return no subfolders.
        }



                    // If we're not browsing the root folder, show a folder to go up 1 level.
        private logger: Logger,
        this.logger.info('Set all folders visible', 'FolderService', 'setAllFoldersVisible');
import { FolderServiceBase } from './folder.service.base';

    public async addFolderAsync(path: string): Promise<void> {
            try {
            }
    private foldersChanged: Subject<void> = new Subject();
        this.folderRepository.setAllFoldersShowInCollection(1);
        return [];
        this._collectionHasFolders = numberOfFoldersInCollection > 0;

        const subfolders: SubfolderModel[] = [];
            parentFolderPath = this.fileAccess.getDirectoryPath(parentFolderPath);
    }
export class FolderService implements FolderServiceBase {
        let parentFolderPath: string = subfolderPath;
    public onFoldersChanged(): void {
    }
import { Injectable } from '@angular/core';
        } else {
            try {
        this.folderRepository.deleteFolder(folder.folderId);
            this.folderRepository.addFolder(newFolder);

    private shouldCheckIfCollectionHasFolders: boolean = true;

        }
        const existingFolder: Folder | undefined = this.folderRepository.getFolderByPath(path);
        if (rootFolder == undefined) {
            this.onFoldersChanged();
                        subfolderPathToBrowse = this.fileAccess.getDirectoryPath(subfolder.path);
            'FolderService',
            // If no subfolder is provided, return the subfolders of the root folder.
            await this.notificationService.folderAlreadyAddedAsync();
            }
            return [];


                    // If the ".." subfolder is selected, go to the parent folder.
    private _collectionHasFolders: boolean = false;
        const showInCollection: number = folder.showInCollection ? 1 : 0;
import { FolderModel } from './folder-model';
    ) {}
            this.logger.info(
    public getFolders(): FolderModel[] {
            subfolders.push(new SubfolderModel(subfolderPath, false));
        const numberOfFoldersInCollection: number = this.getFolders().length;
            'setFolderVisibility',
        } else {
        private folderRepository: FolderRepositoryBase,
    private checkIfCollectionHasFolders(): void {
    public deleteFolder(folder: FolderModel): void {
            } catch (e: unknown) {

        this.foldersChanged.next();
import { Folder } from '../../data/entities/folder';
                    // Return the subfolders of the provided subfolder
        this.onFoldersChanged();
import { Observable, Subject } from 'rxjs';
                this.logger.error(e, 'Could not get subfolderPaths for root folder', 'FolderService', 'getSubfoldersAsync');
        subfolderBreadcrumbs.push(new SubfolderModel(rootFolder.path, false));
                if (this.fileAccess.pathExists(rootFolder.path)) {
                this.logger.error(e, 'Could not get subfolderPaths for subfolder', 'FolderService', 'getSubfoldersAsync');
        const subfolderBreadcrumbs: SubfolderModel[] = [];
            this.logger.info(`Folder with path '${path}' was already added`, 'FolderService', 'addNewFolderAsync');
                }

    }
            return folders.map((x) => new FolderModel(x));
            } catch (e: unknown) {
            this.logger.info(`Added folder with path '${path}'`, 'FolderService', 'addNewFolderAsync');

        }

        return subfolderBreadcrumbs.reverse();
                    subfolderPaths = await this.fileAccess.getDirectoriesInDirectoryAsync(subfolderPathToBrowse);
        this.logger.info(
            const newFolder: Folder = new Folder(path);

        if (this.shouldCheckIfCollectionHasFolders) {
        }
                `parentFolderPath=${parentFolderPath}, rootFolder.path=${rootFolder.path}`,
                }
    }
            );
    }
import { Logger } from '../../common/logger';
