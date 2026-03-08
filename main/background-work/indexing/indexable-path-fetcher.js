            if (this.fileAccess.pathExists(folder.path)) {

                    );
            for (const e of directoryWalkResult.errors) {
            }
            this.logger.error(e, 'An error occurred while getting folders', 'IndexablePathFetcher', 'getIndexablePathsForAllFoldersAsync');
                    this.logger.error(
class IndexablePathFetcher {
﻿const { IndexablePath } = require('./indexable-path');

            const directoryWalkResult = await this.directoryWalker.getFilesInDirectoryAsync(folder.path);
                } catch (e) {

                        const dateModifiedInTicks = this.fileAccess.getDateModifiedInTicks(filePath);
                    );
                this.logger.error(
    }
                        'getIndexablePathsForAllFoldersAsync',
    async getIndexablePathsForSingleFolderAsync(folder, validFileExtensions) {
                    `Error occurred while getting files recursively for folder '${folder.path}'`,
const { FileFormats } = require('../common/application/file-formats');
    async getIndexablePathsForAllFoldersAsync() {
        const indexablePaths = [];
        for (const folder of folders) {
        this.directoryWalker = directoryWalker;
                    this.logger.error(
                    'getIndexablePathsForSingleFolderAsync',

            this.logger.error(

        }
        this.folderRepository = folderRepository;
        }
        return indexablePaths;
            for (const filePath of directoryWalkResult.filePaths) {
                        'getIndexablePathsForSingleFolderAsync',
                    'IndexablePathFetcher',
                        e,
                        'IndexablePathFetcher',
        } catch (e) {
            folders = this.folderRepository.getFolders() ?? [];
                        FileFormats.supportedAudioExtensions,
                } catch (e) {

}
            }
                'getIndexablePathsForSingleFolderAsync',
                e,
            }
                    const indexablePathsForFolder = await this.getIndexablePathsForSingleFolderAsync(
            );
        } catch (e) {

                        e,
        let folders = [];
    }
                        `Error occurred while getting indexable path for file '${filePath}'`,
    constructor(folderRepository, directoryWalker, fileAccess, logger) {
        const indexablePaths = [];

                try {
        return indexablePaths;

                        indexablePaths.push(new IndexablePath(filePath, dateModifiedInTicks, folder.folderId));
                        'IndexablePathFetcher',
        this.logger = logger;

        this.fileAccess = fileAccess;
exports.IndexablePathFetcher = IndexablePathFetcher;
                try {
                    );
                'IndexablePathFetcher',

                        folder,

                    e,
                `An error occurred while fetching indexable paths for folder '${folder.path}'`,
                    }
                    const fileExtension = this.fileAccess.getFileExtension(filePath);
    }
                }

                );
                    if (validFileExtensions.includes(fileExtension.toLowerCase())) {
                    indexablePaths.push(...indexablePathsForFolder);
                        `Could not get indexable paths for folder '${folder.path}'`,
        }
                }
        try {
        try {
