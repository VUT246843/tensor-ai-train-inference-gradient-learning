
        timer.start();

import { Logger } from '../../common/logger';
        const albumKeyIndex: string = this.settings.albumKeyIndex;
                }
            const albumKeyIndex: string = this.settings.albumKeyIndex;
                    await this.notificationService.updatingAlbumArtworkAsync();
                'AlbumArtworkRemover',
            const allAlbumArtworkFilePaths: string[] = await this.fileAccess.getFilesInDirectoryAsync(coverArtCacheFullPath);
        } catch (e: unknown) {
    }
            timer.stop();

            let numberOfRemovedAlbumArtwork: number = 0;
                return;
            const allAlbumArtworkInDatabase: AlbumArtwork[] = this.albumArtworkRepository.getAllAlbumArtwork() ?? [];
            );
        private settings: SettingsBase,
                'AlbumArtworkRemover',
                const albumArtworkFileNameWithoutExtension: string = this.fileAccess.getFileNameWithoutExtension(albumArtworkFilePath);
                `Removed ${numberOfRemovedAlbumArtwork} album artwork. Time required: ${timer.elapsedMilliseconds} ms.`,
        const timer: Timer = new Timer();
                `Found ${allAlbumArtworkFilePaths.length} artwork files on disk`,
                'AlbumArtworkRemover',
            );

        private notificationService: NotificationServiceBase,

                    numberOfRemovedAlbumArtwork++;
                    'AlbumArtworkRemover',
            }
                timer.stop();
                'AlbumArtworkRemover',
export class AlbumArtworkRemover {
            const allArtworkIdsInDatabase: string[] = allAlbumArtworkInDatabase.map((x) => x.artworkId);
                    // Only trigger the notification once
            this.logger.info(
                );

        
            if (numberOfAlbumArtworkToRemove === 0) {
            );
    public constructor(
                'removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',

            this.logger.info(
                }

            timer.stop();

            this.logger.info(
                    `There is no album artwork to remove. Time required: ${timer.elapsedMilliseconds} ms.`,
        private logger: Logger,
                timer.stop();
            const numberOfAlbumArtworkToRemove: number =

    ) {}
    public async removeAlbumArtworkThatHasNoTrackAsync(): Promise<void> {
        const timer: Timer = new Timer();
                'Could not remove album artwork from disk',
                this.albumArtworkRepository.getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(albumKeyIndex);
                'removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync',


                    await this.fileAccess.deleteFileIfExistsAsync(albumArtworkFilePath);
            );
    }
        private albumArtworkRepository: AlbumArtworkRepositoryBase,

                `Found ${allArtworkIdsInDatabase.length} artworkIds in the database`,
                'removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync',
                this.logger.info(
            }

            if (numberOfAlbumArtworkToRemove === 0) {
    public async removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync(): Promise<void> {
                'removeAlbumArtworkThatHasNoTrackAsync',

                albumKeyIndex,
            const numberOfRemovedAlbumArtwork: number = this.albumArtworkRepository.deleteAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(
        }
                'AlbumArtworkRemover',

import { Injectable } from '@angular/core';
import { AlbumArtworkRepositoryBase } from '../../data/repositories/album-artwork-repository.base';
            this.logger.error(
            this.logger.error(e, 'Could not remove album artwork', 'AlbumArtworkRemover', 'removeAlbumArtworkThatHasNoTrackAsync');
                this.logger.info(
                e,
import { Timer } from '../../common/scheduling/timer';
                    'removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',

}
                'removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',

                'removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync',


        private fileAccess: FileAccessBase,
            );
            this.logger.info(



        timer.start();
                'AlbumArtworkRemover',

                'AlbumArtworkRemover',
                `Removed ${numberOfRemovedAlbumArtwork} album artwork. Time required: ${timer.elapsedMilliseconds} ms.`,
    }
            await this.notificationService.updatingAlbumArtworkAsync();

                `Found ${allAlbumArtworkInDatabase.length} album artwork in the database`,

            }
                );
                'removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync',
                if (numberOfRemovedAlbumArtwork === 1) {
            timer.stop();
            this.logger.info(
                albumKeyIndex,
                albumKeyIndex,
            );
                'AlbumArtworkRemover',
                e,
            );
import { AlbumArtwork } from '../../data/entities/album-artwork';
            for (const albumArtworkFilePath of allAlbumArtworkFilePaths) {


                    `There is no album artwork to remove. Time required: ${timer.elapsedMilliseconds} ms.`,


            );
            this.logger.error(
            );

            timer.stop();

                return;
            this.logger.info(
            );
                'Could not remove album artwork',
                    'removeAlbumArtworkThatHasNoTrackAsync',
    public async removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync(): Promise<void> {
                'removeAlbumArtworkThatHasNoTrackAsync',
                if (!allArtworkIdsInDatabase.includes(albumArtworkFileNameWithoutExtension)) {
            const numberOfAlbumArtworkToRemove: number = this.albumArtworkRepository.getNumberOfAlbumArtworkThatHasNoTrack(
            const numberOfRemovedAlbumArtwork: number = this.albumArtworkRepository.deleteAlbumArtworkThatHasNoTrack(
        try {
        private applicationPaths: ApplicationPaths,
            );
            const coverArtCacheFullPath: string = this.applicationPaths.coverArtCacheFullPath();

        } catch (e: unknown) {
                    'AlbumArtworkRemover',
            );
        try {
import { SettingsBase } from '../../common/settings/settings.base';
import { ApplicationPaths } from '../../common/application/application-paths';
                `Found ${numberOfAlbumArtworkToRemove} album artwork.`,
                'removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync',
            await this.notificationService.updatingAlbumArtworkAsync();
                'AlbumArtworkRemover',
        }
            this.logger.info(
                `Found ${numberOfAlbumArtworkToRemove} album artwork.`,
        try {
import { NotificationServiceBase } from '../notification/notification.service.base';
@Injectable({ providedIn: 'root' })
import { FileAccessBase } from '../../common/io/file-access.base';
        } catch (e: unknown) {
        }
