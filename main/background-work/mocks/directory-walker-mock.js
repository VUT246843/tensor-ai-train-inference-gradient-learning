        this.recursivelyGetFilesInDirectoryAsyncCalls.push({ directoryPath });
    async recursivelyGetFilesInDirectoryAsync(directoryPath, filePaths, errors) {
        return this.recursivelyGetFilesInDirectoryAsyncReturnValues[directoryPath];
    getFilesInDirectoryAsyncReturnValues = {};
exports.DirectoryWalkerMock = DirectoryWalkerMock;
    recursivelyGetFilesInDirectoryAsyncReturnValues = {};
class DirectoryWalkerMock {

}
        this.getFilesInDirectoryAsyncCalls.push(directoryPath);


    async getFilesInDirectoryAsync(directoryPath) {
        return this.getFilesInDirectoryAsyncReturnValues[directoryPath];

    }
    getFilesInDirectoryAsyncCalls = [];
    recursivelyGetFilesInDirectoryAsyncCalls = [];
    }
