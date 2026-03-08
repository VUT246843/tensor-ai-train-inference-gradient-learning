    async getAlbumArtworkAsync(fileMetadata, getOnlineArtwork) {
        return this.getAlbumArtworkAsyncReturnValues[`${fileMetadata.path};${getOnlineArtwork}`];
    getAlbumArtworkAsyncReturnValues = {};
        this.getAlbumArtworkAsyncCalls.push({});
class AlbumArtworkGetterMock {
    getAlbumArtworkAsyncCalls = [];
exports.AlbumArtworkGetterMock = AlbumArtworkGetterMock;


    }
}

