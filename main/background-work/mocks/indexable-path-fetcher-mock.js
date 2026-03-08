    async getIndexablePathsForSingleFolderAsync(folder, validFileExtensions) {
    }

    async getIndexablePathsForAllFoldersAsync() {
        this.getIndexablePathsForSingleFolderAsyncCalls.push(`${folder};${validFileExtensions}`);
        return this.getIndexablePathsForSingleFolderAsyncReturnValues[`${folder};${validFileExtensions}`];
    getIndexablePathsForSingleFolderAsyncCalls = {};
        this.getIndexablePathsForAllFoldersAsyncCalls++;

    }
exports.IndexablePathFetcherMock = IndexablePathFetcherMock;
    getIndexablePathsForAllFoldersAsyncCalls = 0;
}

    getIndexablePathsForAllFoldersAsyncReturnValue = [];
class IndexablePathFetcherMock {
        return this.getIndexablePathsForAllFoldersAsyncReturnValue;


    getIndexablePathsForSingleFolderAsyncReturnValues = {};
