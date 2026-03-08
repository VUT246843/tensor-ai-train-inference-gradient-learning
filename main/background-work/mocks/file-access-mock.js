        return this.getFileSizeInBytesReturnValues[filePath];
            throw new Error('Error');
        this.getFilesInDirectoryAsyncReturnValues = {};

    }

    }
    pathExistsCalls = [];

    getFilesInDirectoryAsyncCalls = [];
        return this.getFilesInDirectoryAsyncReturnValues[directoryPath];

    }
    combinePathReturnValue = '';
    combinePath(pathPieces) {
    combinePathCalls = [];
        this.getDateModifiedInTicksReturnValues = {};

        return this.getFileNameReturnValues[fileNameOrPath];
    }
}
    getFileExtension(fileNameOrPath) {

        this.getFileSizeInBytesReturnValues = {};
        }
        return this.getDateModifiedInTicksReturnValues[fileOrDirectory];

        return this.getDirectoriesInDirectoryAsyncReturnValues[directoryPath];
    getFileExtensionReturnValues = {};
class FileAccessMock {
    getFileSizeInBytesReturnValues = {};
        this.combinePathCalls = [];
    pathExistsReturnValues = {};

    }
    }


        if (this.getFilesInDirectoryAsyncReturnValues[directoryPath] === 'throw') {
    pathExists(pathToCheck) {
    getFileNameWithoutExtensionReturnValues = {};

    getDirectoryPath(directoryOrFilePath) {
        return this.getFileNameWithoutExtensionReturnValues[fileNameOrPath];
        this.getFileNameWithoutExtensionReturnValues = {};

    }
    deleteFileIfExistsAsyncCalls = [];
        this.getFileNameReturnValues = {};
        this.getDirectoriesInDirectoryAsyncReturnValues = {};


        this.combinePathCalls.push(pathPieces);
    }

    }
exports.FileAccessMock = FileAccessMock;
        this.getDirectoryPathReturnValues = {};
        this.combinePathReturnValue = '';
    async getDirectoriesInDirectoryAsync(directoryPath, continueOnError, errors) {
    getFileName(fileNameOrPath) {
    }
    async getFilesInDirectoryAsync(directoryPath, continueOnError, errors) {
        this.getFilesInDirectoryAsyncCalls.push(directoryPath);
    getDirectoriesInDirectoryAsyncReturnValues = {};
        return 0;
    async deleteFileIfExistsAsync(filePath) {
        return this.pathExistsReturnValues[pathToCheck];
    getDateModifiedInTicksReturnValues = {};

    }
        return this.combinePathReturnValue;

        return this.getDirectoryPathReturnValues[directoryOrFilePath];
    }
    getDateModifiedInTicks(fileOrDirectory) {
    getFilesInDirectoryAsyncReturnValues = {};
        this.deleteFileIfExistsAsyncCalls.push(filePath);
    reset() {
    getFileNameWithoutExtension(fileNameOrPath) {
    }
    getFileNameReturnValues = {};
        return Buffer.from([]);
    getFileSizeInBytes(filePath) {
        this.pathExistsCalls.push(pathToCheck);
    async getFileContentAsBufferAsync(filePath) {
        return this.getFileExtensionReturnValues[fileNameOrPath];
    getDirectoryPathReturnValues = {};
    getDateCreatedInTicks(fileOrDirectory) {
    }
