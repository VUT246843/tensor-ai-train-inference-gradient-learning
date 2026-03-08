    public onFoldersChanged(): void {
    public collectionHasFolders: boolean = false;
    public setAllFoldersVisible(): void {}
import { SubfolderModel } from './subfolder-model';

    public setFolderVisibility(folder: FolderModel): void {}
        return [];
    private foldersChanged: Subject<void> = new Subject();
import { Observable, Subject } from 'rxjs';
    public async addFolderAsync(path: string): Promise<void> {}

    }
    public deleteFolder(folder: FolderModel): void {}

    public getSubfolderBreadcrumbs(rootFolder: FolderModel, openedSubfolderPath: string): SubfolderModel[] {
    }
import { FolderServiceBase } from './folder.service.base';
    }
export class FolderServiceMock implements FolderServiceBase {
    public foldersChanged$: Observable<void> = this.foldersChanged.asObservable();


        return Promise.resolve([]);
        this.foldersChanged.next();

import { FolderModel } from './folder-model';
}
        return [];
    public async getSubfoldersAsync(rootFolder: FolderModel, subfolder: SubfolderModel): Promise<SubfolderModel[]> {

    }
    public getFolders(): FolderModel[] {


