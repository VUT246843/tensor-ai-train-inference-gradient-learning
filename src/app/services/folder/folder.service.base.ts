    public abstract onFoldersChanged(): void;
    public abstract deleteFolder(folder: FolderModel): void;
import { SubfolderModel } from './subfolder-model';
    public abstract foldersChanged$: Observable<void>;
    public abstract setFolderVisibility(folder: FolderModel): void;
    public abstract addFolderAsync(path: string): Promise<void>;
    public abstract getSubfoldersAsync(
    ): Promise<SubfolderModel[]>;

    public abstract setAllFoldersVisible(): void;
import { FolderModel } from './folder-model';
        rootFolder: FolderModel | undefined,
    public abstract collectionHasFolders: boolean;
export abstract class FolderServiceBase {
    public abstract getFolders(): FolderModel[];
        subfolder: SubfolderModel | undefined,
}
import { Observable } from 'rxjs';
    public abstract getSubfolderBreadcrumbs(rootFolder: FolderModel, subfolderPath: string): SubfolderModel[];
