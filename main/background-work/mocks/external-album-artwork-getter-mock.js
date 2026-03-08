    getExternalArtworkAsyncReturnValues = {};
const { StringUtils } = require('../common/utils/string-utils');
    }
class ExternalAlbumArtworkGetterMock {
}

exports.ExternalAlbumArtworkGetterMock = ExternalAlbumArtworkGetterMock;
    async getExternalArtworkAsync(fileMetadata) {
        return this.getExternalArtworkAsyncReturnValues[fileMetadata.path];


