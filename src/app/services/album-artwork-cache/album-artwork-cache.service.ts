    private createCoverArtCacheOnDisk(): void {
        private applicationPaths: ApplicationPaths,
        }
        private logger: Logger,
            const resizedImageBuffer: Buffer = await this.imageProcessor.toResizedJpegBufferAsync(
        } catch (e: unknown) {
    ) {
        return undefined;
    public constructor(
            return albumArtworkCacheId;
        try {
            this.logger.error(e, 'Could not create artwork cache directory', 'AlbumArtworkCacheService', 'createDirectories');
    }
            await this.fileAccess.deleteFileIfExistsAsync(cachedArtworkFilePath);
@Injectable()
        }
export class AlbumArtworkCacheService implements AlbumArtworkCacheServiceBase {
            throw e;

import { Logger } from '../../common/logger';

        }
        try {
            const cachedArtworkFilePath: string = this.applicationPaths.coverArtFullPath(albumArtworkCacheId.id);


import { AlbumArtworkCacheServiceBase } from './album-artwork-cache.service.base';
        private imageProcessor: ImageProcessor,
            return undefined;
import { ImageProcessor } from '../../common/image-processor';
            await this.imageProcessor.convertImageBufferToFileAsync(resizedImageBuffer, cachedArtworkFilePath);
            return undefined;
        }

            );

import { ApplicationPaths } from '../../common/application/application-paths';
import { Constants } from '../../common/application/constants';
            // We cannot proceed if the above fails
        if (imageBuffer.length === 0) {
            this.logger.error(e, 'Could not add artwork data to cache', 'AlbumArtworkCacheService', 'addArtworkDataToCacheAsync');
import { AlbumArtworkCacheIdFactory } from './album-artwork-cache-id-factory';
        }
            this.fileAccess.createFullDirectoryPathIfDoesNotExist(this.applicationPaths.coverArtCacheFullPath());

        this.createCoverArtCacheOnDisk();
}
            this.logger.error(e, 'Could not remove artwork data from cache', 'AlbumArtworkCacheService', 'removeArtworkDataFromCacheAsync');
        try {
                Constants.cachedCoverArtJpegQuality,
import { FileAccessBase } from '../../common/io/file-access.base';
            const albumArtworkCacheId: AlbumArtworkCacheId = this.albumArtworkCacheIdFactory.create();
        if (imageBuffer == undefined) {

    public async addArtworkDataToCacheAsync(imageBuffer: Buffer | undefined): Promise<AlbumArtworkCacheId | undefined> {
    public async removeArtworkDataFromCacheAsync(artworkId: string): Promise<void> {
        private albumArtworkCacheIdFactory: AlbumArtworkCacheIdFactory,
        } catch (e: unknown) {
import { AlbumArtworkCacheId } from './album-artwork-cache-id';
                imageBuffer,
                Constants.cachedCoverArtMaximumSize,
    }
        } catch (e: unknown) {
    }
        private fileAccess: FileAccessBase,
                Constants.cachedCoverArtMaximumSize,
            const cachedArtworkFilePath: string = this.applicationPaths.coverArtFullPath(artworkId);

import { Injectable } from '@angular/core';
    }
