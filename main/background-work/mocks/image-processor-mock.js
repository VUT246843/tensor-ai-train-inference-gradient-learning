            throw new Error('Error while converting image buffer to file');
        return this.resizeImageAsyncReturnValues[`${imageBuffer};${maxWidth};${maxHeight};${jpegQuality}`];
    resizeImageAsyncReturnValues = {};

    async convertLocalImageToBufferAsync(imagePath) {
    async convertOnlineImageToBufferAsync(imageUrl) {
    }
    async convertImageBufferToFileAsync(imageBuffer, imagePath) {
        }
    convertOnlineImageToBufferAsyncReturnValues = {};

    }

    async resizeImageAsync(imageBuffer, maxWidth, maxHeight, jpegQuality) {
        if (this.convertImageBufferToFileAsyncShouldThrowError) {
        return this.convertOnlineImageToBufferAsyncReturnValues[imageUrl];
    convertLocalImageToBufferAsyncReturnValues = {};
    convertImageBufferToFileAsyncShouldThrowError = false;
        return this.convertLocalImageToBufferAsyncReturnValues[imagePath];
exports.ImageProcessorMock = ImageProcessorMock;
class ImageProcessorMock {


}
    }
    }
