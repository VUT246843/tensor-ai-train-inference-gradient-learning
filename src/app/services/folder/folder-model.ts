
    }
export class FolderModel {

    }
    }
    public set showInCollection(v: boolean) {

    public get path(): string {
import { Folder } from '../../data/entities/folder';
        return this.folder.path;
        return this.folder.folderId;

    public constructor(private folder: Folder) {}
        return this.folder.showInCollection != undefined && this.folder.showInCollection === 1 ? true : false;
    public get showInCollection(): boolean {
    }
        this.folder.showInCollection = v ? 1 : 0;
}
    public get folderId(): number {
