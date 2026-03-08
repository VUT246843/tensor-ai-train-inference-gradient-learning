    getAlbumInfoAsyncReturnValues = {};

        } else {
exports.LastfmApiMock = LastfmApiMock;
    getAlbumInfoAsyncThrowsError = false;
    }
        if (this.getAlbumInfoAsyncThrowsError) {
            throw new Error('Error while getting album info');
    async getAlbumInfoAsync(artist, album, autoCorrect, languageCode) {
        }
            return this.getAlbumInfoAsyncReturnValues[`${artist};${album};${autoCorrect};${languageCode}`];
}

class LastfmApiMock {
