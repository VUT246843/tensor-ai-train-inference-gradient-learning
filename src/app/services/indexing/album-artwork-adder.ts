        let albumArtwork: Buffer | undefined;

            const fileMetadata: IFileMetadata = await this.fileMetadataFactory.createAsync(track.path);
            this.logger.error(

                }
import { AlbumArtworkGetter } from './album-artwork-getter';
        const track: Track | undefined = this.trackRepository.getLastModifiedTrackForAlbumKeyAsync(albumKeyIndex, albumKey);
                    this.logger.error(
                'addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',
                try {
                );
        if (albumArtwork == undefined) {
            // Only show this notification the 1st time indexing runs.
        try {
        const albumArtworkCacheId: AlbumArtworkCacheId | undefined =

            }
import { AlbumArtwork } from '../../data/entities/album-artwork';
    public constructor(
    private async addAlbumArtworkAsync(albumKeyIndex: string, albumKey: string): Promise<void> {
                    await this.addAlbumArtworkAsync(albumKeyIndex, albumData.albumKey);
            const albumKeyIndex = this.settings.albumKeyIndex;
            );
@Injectable({ providedIn: 'root' })
}
                e,
                        e,
import { AlbumData } from '../../data/entities/album-data';
            for (const albumData of albumDataThatNeedsIndexing) {
import { AlbumArtworkCacheId } from '../album-artwork-cache/album-artwork-cache-id';
                        'AlbumArtworkAdder',
                this.logger.info(
            const numberOfAlbumArtwork: number = this.albumArtworkRepository.getNumberOfAlbumArtwork();
import { AlbumArtworkRepositoryBase } from '../../data/repositories/album-artwork-repository.base';
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
                `Found ${albumDataThatNeedsIndexing.length} album data that needs indexing`,
    }
            if (albumDataThatNeedsIndexing.length === 0) {
                    'AlbumArtworkAdder',
    public async addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync(): Promise<void> {
        } catch (e: unknown) {
        private settings: SettingsBase,

            const albumDataThatNeedsIndexing: AlbumData[] = this.trackRepository.getAlbumDataThatNeedsIndexing(albumKeyIndex) ?? [];
            return;
        private albumArtworkRepository: AlbumArtworkRepositoryBase,
        if (albumArtworkCacheId == undefined) {
import { Track } from '../../data/entities/track';
            }
        if (track == undefined) {
        this.trackRepository.disableNeedsAlbumArtworkIndexing(albumKey);
            return;
        }
    ) {}
import { Logger } from '../../common/logger';

                } catch (e: unknown) {
        this.albumArtworkRepository.addAlbumArtwork(newAlbumArtwork);
            albumArtwork = await this.albumArtworkGetter.getAlbumArtworkAsync(fileMetadata, true);

        const newAlbumArtwork: AlbumArtwork = new AlbumArtwork(albumKey, albumArtworkCacheId.id);
    }
import { FileMetadataFactoryBase } from '../../common/metadata/file-metadata.factory.base';

        private albumArtworkCacheService: AlbumArtworkCacheServiceBase,
        }
            }
        private trackRepository: TrackRepositoryBase,

                'AlbumArtworkAdder',
                return;
import { NotificationServiceBase } from '../notification/notification.service.base';
        } catch (e: unknown) {
                        `Could not add album artwork for albumKey=${albumData.albumKey}`,
        private fileMetadataFactory: FileMetadataFactoryBase,

        private albumArtworkGetter: AlbumArtworkGetter,

        private logger: Logger,
import { AlbumArtworkCacheServiceBase } from '../album-artwork-cache/album-artwork-cache.service.base';
                'Could not add album artwork for tracks that need album artwork indexing',
                    'addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',
                'addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',
import { SettingsBase } from '../../common/settings/settings.base';
import { Injectable } from '@angular/core';
            this.logger.error(e, `Could not create file metadata for path='${track.path}'`, 'AlbumArtworkAdder', 'addAlbumArtworkAsync');

        }




                await this.notificationService.updatingAlbumArtworkAsync();
        }
            if (numberOfAlbumArtwork === 0) {
            return;
        try {
export class AlbumArtworkAdder {

            );
        private notificationService: NotificationServiceBase,
                'AlbumArtworkAdder',
                    `Found no album data that needs indexing`,
            await this.albumArtworkCacheService.addArtworkDataToCacheAsync(albumArtwork);
            this.logger.info(
        }
                    );
                        'addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';

