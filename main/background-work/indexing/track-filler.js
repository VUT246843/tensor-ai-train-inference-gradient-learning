                track.composers = this.trackFieldCreator.createMultiTextField(
        this.dateTime = dateTime;
            );
            track.trackNumber = this.trackFieldCreator.createNumberField(fileMetadata.trackNumber);
                'TrackFiller',
                track.genres = this.trackFieldCreator.createMultiTextField(
                track.trackCount = this.trackFieldCreator.createNumberField(fileMetadata.trackCount);
                );
            if (!fillOnlyEssentialMetadata) {
                track.dateFileModified = this.fileAccess.getDateModifiedInTicks(track.path);
            track.artists = this.trackFieldCreator.createMultiTextField(
        this.logger = logger;
const { StringUtils } = require('../common/utils/string-utils');
                track.conductor = this.trackFieldCreator.createTextField(fileMetadata.conductor);
const { MimeTypes } = require('./mime-types');

            track.fileSize = this.fileAccess.getFileSizeInBytes(track.path);
                this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.albumArtists),
exports.TrackFiller = TrackFiller;
                this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.artists),
            track.indexingFailureReason = '';
        this.mimeTypes = mimeTypes;
                track.beatsPerMinute = this.trackFieldCreator.createNumberField(fileMetadata.beatsPerMinute);

                track.discNumber = this.trackFieldCreator.createNumberField(fileMetadata.discNumber);

            track.albumKey3 = this.albumKeyGenerator.generateAlbumKey3(this.fileAccess.getDirectoryPath(track.path));

            const fileMetadata = this.fileMetadataFactory.create(track.path);
        this.fileMetadataFactory = fileMetadataFactory;
        }
            track.fileName = this.fileAccess.getFileName(track.path);
                `Error while retrieving tag information for file ${track.path}`,
                );
            track.rating = this.trackFieldCreator.createNumberField(fileMetadata.rating);
        this.albumKeyGenerator = albumKeyGenerator;

                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.composers),
            track.albumKey = this.albumKeyGenerator.generateAlbumKey(

        return track;

            track.albumKey2 = this.albumKeyGenerator.generateAlbumKey2(fileMetadata.album);
    }
            track.needsAlbumArtworkIndexing = 1;
    addFileMetadataToTrack(track, fillOnlyEssentialMetadata) {
            track.indexingFailureReason = e instanceof Error ? e.message : 'Unknown error';
                const dateNowTicks = this.dateTime.convertDateToTicks(new Date());
    }

        this.metadataPatcher = metadataPatcher;
                e,
        this.trackFieldCreator = trackFieldCreator;
                'addFileMetadataToTrackAsync',
                track.sampleRate = this.trackFieldCreator.createNumberField(fileMetadata.sampleRate);
                fileMetadata.album,
}
    #getMimeType(filePath) {
        if (!StringUtils.isNullOrWhiteSpace(lyrics)) {
        this.fileAccess = fileAccess;
                track.mimeType = this.#getMimeType(track.path);

    }
            );
    }
        return this.mimeTypes.getMimeTypeForFileExtension(this.fileAccess.getFileExtension(filePath));
                track.year = this.trackFieldCreator.createNumberField(fileMetadata.year);
            track.needsIndexing = 0;

                track.hasLyrics = this.#getHasLyrics(fileMetadata.lyrics);
            track.duration = this.trackFieldCreator.createNumberField(fileMetadata.durationInMilliseconds);
            track.indexingSuccess = 0;
        try {
class TrackFiller {
            );
        }
    constructor(fileMetadataFactory, albumKeyGenerator, trackFieldCreator, metadataPatcher, mimeTypes, fileAccess, dateTime, logger) {
                track.albumArtists = this.trackFieldCreator.createMultiTextField(
                track.dateFileCreated = this.fileAccess.getDateCreatedInTicks(track.path);

const { FileAccess } = require('../common/io/file-access');
        } catch (e) {
                track.albumTitle = this.trackFieldCreator.createTextField(fileMetadata.album);

                );
            track.indexingSuccess = 1;
            return 1;
                track.bitRate = this.trackFieldCreator.createNumberField(fileMetadata.bitRate);
                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.albumArtists),
    #getHasLyrics(lyrics) {
        return 0;
                track.discCount = this.trackFieldCreator.createNumberField(fileMetadata.discCount);
            track.trackTitle = this.trackFieldCreator.createTextField(fileMetadata.title);
                track.dateAdded = dateNowTicks;
            this.logger.error(
                    this.metadataPatcher.joinUnsplittableMetadata(fileMetadata.genres),
            }
                track.dateLastSynced = dateNowTicks;
