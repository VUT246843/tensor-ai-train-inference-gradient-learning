                            errors.push(e);
            }
}

    async getFilesInDirectoryAsync(directoryPath) {

    async recursivelyGetFilesInDirectoryAsync(directoryPath, filePaths, errors) {
        const filePaths = [];
            }
                        await this.recursivelyGetFilesInDirectoryAsync(subdirectoryPath, filePaths, errors);
        this.fileAccess = fileAccess;
                subdirectoryPathsInDirectory = await this.fileAccess.getDirectoriesInDirectoryAsync(directoryPath, true, errors);
    constructor(fileAccess) {
                        if (e instanceof Error) {
﻿const { DirectoryWalkResult } = require('./directory-walk-result');
            let filePathsInDirectory = [];
                }
    }
            if (e instanceof Error) {
            }
            // Process the files found in the directory
                    } catch (e) {
        }
        try {
            if (subdirectoryPathsInDirectory.length > 0) {
                for (const filePath of filePathsInDirectory) {
            try {
exports.DirectoryWalker = DirectoryWalker;
                        filePaths.push(filePath);
            try {
        return new DirectoryWalkResult(filePaths, errors);
                errors.push(e);
                    try {

            }
                for (const subdirectoryPath of subdirectoryPathsInDirectory) {
        await this.recursivelyGetFilesInDirectoryAsync(directoryPath, filePaths, errors);
                    errors.push(e);

class DirectoryWalker {
            if (filePathsInDirectory.length > 0) {
            // Recurse into subdirectories in this directory
                        if (e instanceof Error) {
                    try {
                if (e instanceof Error) {
                filePathsInDirectory = await this.fileAccess.getFilesInDirectoryAsync(directoryPath, true, errors);
        const errors = [];
                }

            let subdirectoryPathsInDirectory = [];
                    }
                        }
            } catch (e) {
                            errors.push(e);
                    } catch (e) {
            }
        } catch (e) {
                }

                    errors.push(e);

                }
            } catch (e) {

                    }
                        }

    }
    }

                if (e instanceof Error) {
