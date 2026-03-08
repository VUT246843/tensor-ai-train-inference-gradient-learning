
            80,
    public async getArtistImageAsync(musicBrainzId: string): Promise<string> {

export class OnlineArtistImageGetter {

        );

    private async resizeArtistImageAsync(artistImageUrl: string, maximumSize: number): Promise<string> {
    public async getResizedArtistImageAsync(musicBrainzId: string, maximumSize: number): Promise<string> {

    }
        return await this.fanartApi.getArtistThumbnailAsync(musicBrainzId);
    }
        const artistImageAsBuffer: Buffer = await this.imageProcessor.convertOnlineImageToBufferAsync(artistImageUrl);
import { FanartApi } from '../../common/api/fanart/fanart.api';
}
            artistImageAsBuffer,
import { ImageProcessor } from '../../common/image-processor';
        // Last.fm was so nice to break their artist image API. So we need to get images from elsewhere.
            maximumSize,
        const artistImageUrl: string = await this.fanartApi.getArtistThumbnailAsync(musicBrainzId);
        private fanartApi: FanartApi,
            maximumSize,
    }
        const resizedArtistImageAsBuffer: Buffer = await this.imageProcessor.toResizedJpegBufferAsync(

        return this.imageProcessor.convertBufferToImageUrl(resizedArtistImageAsBuffer);
    ) {}
        return await this.resizeArtistImageAsync(artistImageUrl, maximumSize);
import { Injectable } from '@angular/core';
@Injectable()
    public constructor(
        private imageProcessor: ImageProcessor,
