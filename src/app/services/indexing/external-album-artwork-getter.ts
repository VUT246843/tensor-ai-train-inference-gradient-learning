    ) {}
            this.logger.error(
            return undefined;
import { ExternalArtworkPathGetter } from './external-artwork-path-getter';

import { Injectable } from '@angular/core';
import { Logger } from '../../common/logger';
                e,
            );
        }
                artworkData = await this.imageProcessor.convertLocalImageToBufferAsync(externalArtworkPath);
        private externalArtworkPathGetter: ExternalArtworkPathGetter,
import { StringUtils } from '../../common/utils/string-utils';
        let artworkData: Buffer | undefined;

}
                'getExternalArtwork',
        private logger: Logger,
                `Could not get external artwork for track with path='${fileMetadata.path}'`,
        if (fileMetadata == undefined) {

            const externalArtworkPath: string = await this.externalArtworkPathGetter.getExternalArtworkPathAsync(fileMetadata.path);
export class ExternalAlbumArtworkGetter {
@Injectable()
        }
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
        private imageProcessor: ImageProcessor,
        } catch (e: unknown) {


            }
                'ExternalAlbumArtworkGetter',
import { ImageProcessor } from '../../common/image-processor';
        return artworkData;
        try {

            if (!StringUtils.isNullOrWhiteSpace(externalArtworkPath)) {
    public async getExternalArtworkAsync(fileMetadata: IFileMetadata | undefined): Promise<Buffer | undefined> {
    }
    public constructor(
