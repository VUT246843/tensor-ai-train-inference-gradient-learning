        const statement = database.prepare(`SELECT FolderID as folderId, Path as path, ShowInCollection as showInCollection FROM Folder;`);
    }
    getFolders() {
exports.FolderRepository = FolderRepository;
﻿class FolderRepository {

        this.databaseFactory = databaseFactory;
    constructor(databaseFactory) {
}
        return statement.all();

        const database = this.databaseFactory.create();

    }
