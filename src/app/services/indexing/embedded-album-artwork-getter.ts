        }
import { Logger } from '../../common/logger';
        let artworkData: Buffer | undefined;
import { Injectable } from '@angular/core';
import { IFileMetadata } from '../../common/metadata/i-file-metadata';

            );

@Injectable()
            return undefined;
                'EmbeddedAlbumArtworkGetter',
    public constructor(private logger: Logger) {}
        } catch (e: unknown) {

            artworkData = fileMetadata.picture;

    }
        try {
        if (fileMetadata == undefined) {
            this.logger.error(
}
export class EmbeddedAlbumArtworkGetter {

        return artworkData;
                e,
                `Could not get embedded artwork for track with path='${fileMetadata.path}'`,
                'getEmbeddedArtwork',
        }
    public getEmbeddedArtwork(fileMetadata: IFileMetadata | undefined): Buffer | undefined {
