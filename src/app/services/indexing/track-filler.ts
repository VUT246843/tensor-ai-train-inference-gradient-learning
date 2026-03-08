                track.albumArtists = this.trackFieldCreator.createMultiTextField(
    }
        }
                const dateNowTicks: number = this.dateTime.convertDateToTicks(new Date());
                track.sampleRate = this.trackFieldCreator.createNumberField(fileMetadata.sampleRate);
        } catch (e: unknown) {
            );
                'addFileMetadataToTrackAsync',
            track.indexingFailureReason = e instanceof Error ? e.message : 'Unknown error';
@Injectable()

        private albumKeyGenerator: AlbumKeyGenerator,
            if (!fillOnlyEssentialMetadata) {
        track: Track,
                track.bitRate = this.trackFieldCreator.createNumberField(fileMetadata.bitRate);
            track.needsIndexing = 0;

        try {
    ) {}
                );

    private getHasLyrics(lyrics: string): number {
                'addGivenFileMetadataToTrackAsync',
            track.albumKey = this.albumKeyGenerator.generateAlbumKey(
            track.artists = this.trackFieldCreator.createMultiTextField(
    public constructor(
    }
                'Error while retrieving tag information for file ${track.path}',
    public async addFileMetadataToTrackAsync(track: Track, fillOnlyEssentialMetadata: boolean): Promise<Track> {
import { FileAccessBase } from '../../common/io/file-access.base';
                e,
                track.composers = this.trackFieldCreator.createMultiTextField(
            track.trackNumber = this.trackFieldCreator.createNumberField(fileMetadata.trackNumber);
        private mimeTypes: MimeTypes,
            return 1;

    private getMimeType(filePath: string): string {
                this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.artists),
            track.indexingSuccess = 0;
            track.duration = this.trackFieldCreator.createNumberField(fileMetadata.durationInMilliseconds);
                track.dateAdded = dateNowTicks;
export class TrackFiller {
        }
        private logger: Logger,
                track.discNumber = this.trackFieldCreator.createNumberField(fileMetadata.discNumber);
            track.indexingSuccess = 1;
                track.albumTitle = this.trackFieldCreator.createTextField(fileMetadata.album);
import { Injectable } from '@angular/core';

                track.hasLyrics = this.getHasLyrics(fileMetadata.lyrics);
            track.fileName = this.fileAccess.getFileName(track.path);
    ): Promise<Track> {
        return 0;
                track.mimeType = this.getMimeType(track.path);
import { DateTime } from '../../common/date-time';
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
        return track;
        fileMetadata: IFileMetadata,
                track.discCount = this.trackFieldCreator.createNumberField(fileMetadata.discCount);
            track.albumKey2 = this.albumKeyGenerator.generateAlbumKey2(fileMetadata.album);
    }
                track.trackCount = this.trackFieldCreator.createNumberField(fileMetadata.trackCount);
        private metadataPatcher: MetadataPatcher,
        fillOnlyEssentialMetadata: boolean,
                fileMetadata.album,

            }
import { MimeTypes } from '../../common/metadata/mime-types';
                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.composers),
                track.beatsPerMinute = this.trackFieldCreator.createNumberField(fileMetadata.beatsPerMinute);
import { StringUtils } from '../../common/utils/string-utils';

                track.year = this.trackFieldCreator.createNumberField(fileMetadata.year);
}
            );
        private dateTime: DateTime,

import { FileMetadataFactoryBase } from '../../common/metadata/file-metadata.factory.base';
            track.trackTitle = this.trackFieldCreator.createTextField(fileMetadata.title);
        private fileAccess: FileAccessBase,
            );
            return this.addGivenFileMetadataToTrackAsync(track, fileMetadata, fillOnlyEssentialMetadata);

import { Logger } from '../../common/logger';
import { TrackFieldCreator } from './track-field-creator';
        return this.mimeTypes.getMimeTypeForFileExtension(this.fileAccess.getFileExtension(filePath));
                e,
                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.albumArtists),
            track.needsAlbumArtworkIndexing = 1;
    public async addGivenFileMetadataToTrackAsync(
                );
            this.logger.error(
        } catch (e: unknown) {
            track.indexingFailureReason = '';


                track.dateLastSynced = dateNowTicks;
import { Track } from '../../data/entities/track';

    }
                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.genres),
            track.albumKey3 = this.albumKeyGenerator.generateAlbumKey3(this.fileAccess.getDirectoryPath(track.path));
                track.dateFileModified = this.fileAccess.getDateModifiedInTicks(track.path);

            track.fileSize = this.fileAccess.getFileSizeInBytes(track.path);
            );
            const fileMetadata: IFileMetadata = await this.fileMetadataFactory.createAsync(track.path);
                );
                'TrackFiller',
        try {
                'Error while retrieving tag information for file ${track.path}',
                this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.albumArtists),
import { AlbumKeyGenerator } from '../../data/album-key-generator';
        if (!StringUtils.isNullOrWhiteSpace(lyrics)) {
                track.conductor = this.trackFieldCreator.createTextField(fileMetadata.conductor);
        return track;
                track.dateFileCreated = this.fileAccess.getDateCreatedInTicks(track.path);
                track.genres = this.trackFieldCreator.createMultiTextField(
                'TrackFiller',
            track.rating = this.trackFieldCreator.createNumberField(fileMetadata.rating);
        private trackFieldCreator: TrackFieldCreator,
import { MetadataPatcher } from '../../common/metadata/metadata-patcher';
        }
            this.logger.error(
        private fileMetadataFactory: FileMetadataFactoryBase,
