    public abstract deleteFolder(folderId: number): void;
import { Folder } from '../entities/folder';
    public abstract setAllFoldersShowInCollection(showInCollection: number): void;
    public abstract addFolder(folder: Folder): void;
    public abstract getFolders(): Folder[] | undefined;
    public abstract getFolderByPath(folderPath: string): Folder | undefined;
    public abstract setFolderShowInCollection(folderId: number, showInCollection: number): void;
}

export abstract class FolderRepositoryBase {
