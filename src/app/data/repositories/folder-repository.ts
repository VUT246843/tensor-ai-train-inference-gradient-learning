

        statement.run(folder.path, folder.path.toLowerCase());
        const database: any = this.databaseFactory.create();
    public getFolderByPath(folderPath: string): Folder | undefined {
            `SELECT FolderID as folderId, Path as path, ShowInCollection as showInCollection
        const statement = database.prepare(

        const database: any = this.databaseFactory.create();
/* eslint-disable @typescript-eslint/no-unsafe-call */

        const database: any = this.databaseFactory.create();

import { Injectable } from '@angular/core';

        const statement = database.prepare('DELETE FROM Folder WHERE FolderID=?;');


    }
        const database: any = this.databaseFactory.create();
            FROM Folder
    public setFolderShowInCollection(folderId: number, showInCollection: number): void {
            `SELECT FolderID as folderId, Path as path, ShowInCollection as showInCollection

    }
        return folders;
import { DatabaseFactory } from '../database-factory';
        const statement = database.prepare('INSERT INTO Folder (Path, SafePath, ShowInCollection) VALUES (?, ?, 1);');
import { FolderRepositoryBase } from './folder-repository.base';

    }
    }
    public addFolder(folder: Folder): void {

        const statement = database.prepare('UPDATE Folder SET ShowInCollection=? WHERE FolderID=?;');

        );
export class FolderRepository implements FolderRepositoryBase {
        const folders: Folder[] | undefined = statement.all();
        statement.run(showInCollection);
        const database: any = this.databaseFactory.create();
        const folder: Folder | undefined = statement.get(folderPath);
        );
        const statement = database.prepare('UPDATE Folder SET ShowInCollection=?;');
}
@Injectable()
    public deleteFolder(folderId: number): void {
        return folder;
        const statement = database.prepare(

        statement.run(showInCollection, folderId);
    }
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
    public constructor(private databaseFactory: DatabaseFactory) {}
        statement.run(folderId);
/* eslint-disable @typescript-eslint/no-unsafe-return */

            FROM Folder;`,
        const database: any = this.databaseFactory.create();
    public getFolders(): Folder[] | undefined {
    public setAllFoldersShowInCollection(showInCollection: number): void {


            WHERE Path=?;`,
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

    }
import { Folder } from '../entities/folder';
