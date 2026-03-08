import { TrackModel } from '../../../../services/track/track-model';
        }
                    fileMetaData.trackCount = this.saveSetNumberFromString(this.trackCount);

        this.imageComparisonStatus = this.metadataService.compareImages(this._fileMetaDatas);
                    fileMetaData.title = this.title;
                if (this.discNumber !== this._multipleValuesText) {
        if (!StringUtils.isNullOrWhiteSpace(selectedPath) && this.canExportImage) {
    public removeImage(): void {

                if (this.genres !== this._multipleValuesText) {
                    'saveMetadata',
            this.dialogService.showErrorDialog(await this.translatorService.getAsync('download-image-error'));
                }
            this.dialogService.showErrorDialog(message);
            this.translatorService.get('choose-image'),
    styleUrls: ['./edit-tracks-dialog.component.scss'],
            this.canShowRemoveButton = true;
            }
            this.imageComparisonStatus === ImageComparisonStatus.Identical &&
                ? CollectionUtils.toSemicolonSeparatedString(this._fileMetaDatas[0].albumArtists)
            this.genres = allGenresSame
        if (this.imageComparisonStatus !== ImageComparisonStatus.None) {

                        e,
                    fileMetaData.discNumber = this.saveSetNumberFromString(this.discNumber);
}
    private saveSetNumberFromString(value: string): number {
import { ImageComparisonStatus } from '../../../../services/metadata/image-comparison-status';
    public imagePath: string = '';
                        'getFileMetaDatasAsync',
import { FileMetadataFactoryBase } from '../../../../common/metadata/file-metadata.factory.base';
            this.grouping = this._fileMetaDatas[0].grouping;
        private logger: Logger,
            await this.indexingService.indexAfterTagChangeAsync(this._fileMetaDatas);
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
            );
            const allDiscNumbersSame = this._fileMetaDatas.every((track) => track.discNumber === this._fileMetaDatas[0].discNumber);
        this.imagePath = renderData.imageUrl;
        } catch (e: unknown) {
    public composers: string = '';
        try {
            this.dialogService.showErrorDialog(errorText);

                    `Failed to save metadata for file "${fileMetaData.path}"`,

    public trackCount: string = '';

                if (e instanceof Error) {
    public genres: string = '';

            this.year = this.saveGetNumberAsString(this._fileMetaDatas[0].year);
                if (this.artists !== this._multipleValuesText) {

        return number.toString();
        this.imageComparisonStatus = ImageComparisonStatus.Identical;
    private _fileMetaDatas: IFileMetadata[] = [];
import { StringUtils } from '../../../../common/utils/string-utils';
                ? CollectionUtils.toSemicolonSeparatedString(this._fileMetaDatas[0].genres)
    private _shouldRemoveImages: boolean = false;
                : this._multipleValuesText;

        const selectedFile: string = await this.desktop.showSelectFileDialogAsync(this.translatorService.get('choose-image'));
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetadataPatcher } from '../../../../common/metadata/metadata-patcher';
        private indexingService: IndexingService,
            this.composers = allComposersSame
import { Logger } from '../../../../common/logger';
                        `Failed to get metadata for track: ${track.path}`,
        try {
                }
                    : await this.translatorService.getAsync('save-tags-error-multiple-files', { numberOfFiles: numberOfErrors });

        }
    public comment: string = '';
    public artists: string = '';
@Component({
                if (this.albumTitle !== this._multipleValuesText) {

                this.metadataPatcher.joinUnsplittableMetadata(this._fileMetaDatas[0].genres),
    private setFields(): void {
                ? CollectionUtils.toSemicolonSeparatedString(this._fileMetaDatas[0].composers)

        this._tracks = this.data;
                );
                if (this.beatsPerMinute !== this._multipleValuesText) {
        }
            if (numberOfErrors > 1) {
            }
            this.trackCount = this.saveGetNumberAsString(this._fileMetaDatas[0].trackCount);

        } catch (e: unknown) {
import { IndexingService } from '../../../../services/indexing/indexing.service';

                }
            this.discNumber = allDiscNumbersSame ? this._fileMetaDatas[0].discNumber.toString() : this._multipleValuesText;
    public year: string = '';
        let errorText = await this.translatorService.getAsync('read-tags-error-single-file');
            const onlineAlbumArtwork: Buffer | undefined = await this.onlineAlbumArtworkGetter.getOnlineArtworkAsync(
            if (e instanceof Error) {
        }
    public async ngOnInit(): Promise<void> {
            try {
import { MetadataService } from '../../../../services/metadata/metadata.service';
        if (numberOfErrors > 0) {
                    e,
import { ImageProcessor } from '../../../../common/image-processor';
        let numberOfErrors: number = 0;
            this.conductor = allConductorsSame ? this._fileMetaDatas[0].conductor : this._multipleValuesText;
                    fileMetaData.picture = this._newImageBuffer;
        private desktop: DesktopBase,
        if (value === '') {
                    fileMetaData.discCount = this.saveSetNumberFromString(this.discCount);
                if (this.albumArtists !== this._multipleValuesText) {
    public beatsPerMinute: string = '';
            this.albumArtists = CollectionUtils.toSemicolonSeparatedString(
        );
        } else if (this._fileMetaDatas.length > 1) {
                this.setNewImageFromRenderData(renderData);

            } catch (e: unknown) {
            try {
            this.genres = CollectionUtils.toSemicolonSeparatedString(
    }
    public discCount: string = '';
        }
                this.metadataPatcher.joinUnsplittableMetadata(this._fileMetaDatas[0].artists),


    }
        private onlineAlbumArtworkGetter: OnlineAlbumArtworkGetter,

            this.trackCount = allTrackCountsSame ? this._fileMetaDatas[0].discCount.toString() : this._multipleValuesText;
            this.albumTitle = this._fileMetaDatas[0].album;
                const renderData: ImageRenderData = await this.metadataService.getImageRenderDataAsync(selectedFile);
        private dialogService: DialogServiceBase,
            this.beatsPerMinute = allBpmSame ? this._fileMetaDatas[0].beatsPerMinute.toString() : this._multipleValuesText;
    public canShowRemoveButton: boolean = false;
    public constructor(
                numberOfErrors === 1
                    fileMetaData.genres = CollectionUtils.fromSemicolonSeparatedString(this.genres);
                this.dialogService.showErrorDialog(await this.translatorService.getAsync('change-image-error'));
        this._newImageBuffer = renderData.imageBuffer;
        }
    public async downloadImageAsync(): Promise<void> {
                numberOfErrors++;

                    fileMetaData.composers = CollectionUtils.fromSemicolonSeparatedString(this.composers);
            );
            this.artists = allArtistsSame
        const selectedPath = await this.desktop.showSaveFileDialogAsync(
                this.logger.error(
        if (this._fileMetaDatas.length === 1) {


            const allBpmSame = this._fileMetaDatas.every((track) => track.beatsPerMinute === this._fileMetaDatas[0].beatsPerMinute);
            return '';
    private saveGetNumberAsString(number: number): string {
        await this.setImagePathAsync();

                    'EditTracksDialogComponent',

            this._fileMetaDatas[0].picture !== undefined
    }
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            } catch (e: unknown) {
                    fileMetaData.artists = CollectionUtils.fromSemicolonSeparatedString(this.artists);
import { CollectionUtils } from '../../../../common/utils/collections-utils';
        this.canShowRemoveButton = false;
    private setNewImageFromRenderData(renderData: ImageRenderData): void {
    selector: 'app-edit-tracks-dialog',

        }
            this.title = this._fileMetaDatas[0].title;
                }
                this.setNewImageFromRenderData(renderData);
                }
    public get canExportImage(): boolean {
    private async setImagePathAsync(): Promise<void> {
            const allArtistsSame = this._fileMetaDatas.every((track) => track.artists === this._fileMetaDatas[0].artists);
                    );
            return 0;

                    fileMetaData.picture = undefined;
        );
            this.trackNumber = allTrackNumbersSame ? this._fileMetaDatas[0].trackNumber.toString() : this._multipleValuesText;
            const allComposersSame = this._fileMetaDatas.every((track) => track.composers === this._fileMetaDatas[0].composers);
            const allConductorsSame = this._fileMetaDatas.every((track) => track.conductor === this._fileMetaDatas[0].conductor);
    public async changeImageAsync(): Promise<void> {
    }
import { IFileMetadata } from '../../../../common/metadata/i-file-metadata';
            await this.imageProcessor.convertImageBufferToFileAsync(this._fileMetaDatas[0].picture!, selectedPath);
        this.canShowRemoveButton = true;
import { ImageRenderData } from '../../../../services/metadata/image-render-data';
            const allAlbumArtistsSame = this._fileMetaDatas.every((track) => track.albumArtists === this._fileMetaDatas[0].albumArtists);
    public title: string = '';
        const number = parseInt(value);
    private _tracks: TrackModel[];

    }
            this.albumArtists = allAlbumArtistsSame
                : this._multipleValuesText;
import { DesktopBase } from '../../../../common/io/desktop.base';
        let numberOfErrors: number = 0;
            this.comment = allCommentsSame ? this._fileMetaDatas[0].comment : this._multipleValuesText;
            this.beatsPerMinute = this.saveGetNumberAsString(this._fileMetaDatas[0].beatsPerMinute);
    private async getFileMetaDatasAsync(): Promise<void> {
                this.metadataPatcher.joinUnsplittableMetadata(this._fileMetaDatas[0].albumArtists),
            `${this.translatorService.get('image')}.png`,
                if (this.conductor !== this._multipleValuesText) {
                : this._multipleValuesText;
                if (this.year !== this._multipleValuesText) {
    public async exportImageAsync(): Promise<void> {

                    fileMetaData.conductor = this.conductor;
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
        if (number === 0) {

            const allAlbumTitlesSame = this._fileMetaDatas.every((track) => track.album === this._fileMetaDatas[0].album);
            this.grouping = allGroupingsSame ? this._fileMetaDatas[0].grouping : this._multipleValuesText;
                    fileMetaData.beatsPerMinute = this.saveSetNumberFromString(this.beatsPerMinute);


    public grouping: string = '';
                if (this.trackNumber !== this._multipleValuesText) {
        }
        }
            this.title = allTitlesSame ? this._fileMetaDatas[0].title : this._multipleValuesText;
            this.discCount = this.saveGetNumberAsString(this._fileMetaDatas[0].discCount);

    templateUrl: './edit-tracks-dialog.component.html',
    }

        for (const fileMetaData of this._fileMetaDatas) {
                    fileMetaData.grouping = this.grouping;
                if (this.comment !== this._multipleValuesText) {
        this._shouldRemoveImages = true;
                        'EditTracksDialogComponent',

        private translatorService: TranslatorServiceBase,
            this.composers = CollectionUtils.toSemicolonSeparatedString(
            );
    }
                }
        for (const track of this._tracks) {
            const allGroupingsSame = this._fileMetaDatas.every((track) => track.grouping === this._fileMetaDatas[0].grouping);
        }

    public conductor: string = '';
                }
                    fileMetaData.trackNumber = this.saveSetNumberFromString(this.trackNumber);
            const allTrackCountsSame = this._fileMetaDatas.every((track) => track.discCount === this._fileMetaDatas[0].discCount);
    }
            this.discCount = allDiscCountsSame ? this._fileMetaDatas[0].discCount.toString() : this._multipleValuesText;
            this.year = allYearsSame ? this._fileMetaDatas[0].year.toString() : this._multipleValuesText;
            if (e instanceof Error) {
        }

            if (onlineAlbumArtwork) {
                this.logger.error(e, 'Failed to download image', 'EditTracksDialogComponent', 'downloadImageAsync');
            this.artists = CollectionUtils.toSemicolonSeparatedString(

                this.metadataPatcher.joinUnsplittableMetadata(this._fileMetaDatas[0].composers),
        @Inject(MAT_DIALOG_DATA) public data: TrackModel[],
                : this._multipleValuesText;
            const message =
import { OnlineAlbumArtworkGetter } from '../../../../services/indexing/online-album-artwork-getter';

            this.comment = this._fileMetaDatas[0].comment;
            const allTrackNumbersSame = this._fileMetaDatas.every((track) => track.trackNumber === this._fileMetaDatas[0].trackNumber);
            const allTitlesSame = this._fileMetaDatas.every((track) => track.title === this._fileMetaDatas[0].title);

                errorText = await this.translatorService.getAsync('read-tags-error-multiple-files', { numberOfFiles: numberOfErrors });
    public albumTitle: string = '';
    public imageComparisonStatusEnum: typeof ImageComparisonStatus = ImageComparisonStatus;
                if (this.title !== this._multipleValuesText) {
        private metadataPatcher: MetadataPatcher,
        }

})
    }
                fileMetaData.save();
                if (this._shouldRemoveImages) {
    ) {}
                }
                } else if (this._newImageBuffer != undefined) {
            const allCommentsSame = this._fileMetaDatas.every((track) => track.comment === this._fileMetaDatas[0].comment);
                }
                }
        private fileMetadataFactory: FileMetadataFactoryBase,
        return (
    }
    }

                    fileMetaData.year = this.saveSetNumberFromString(this.year);
    }
                }
                    ? await this.translatorService.getAsync('save-tags-error-single-file')

                if (this.grouping !== this._multipleValuesText) {
    public async saveMetadataAsync(): Promise<void> {
    private _multipleValuesText: string = '';
    public imageComparisonStatus: ImageComparisonStatus = ImageComparisonStatus.None;
                const renderData: ImageRenderData = await this.metadataService.getImageRenderDataAsync(onlineAlbumArtwork);
                if (this.composers !== this._multipleValuesText) {
        this.imagePath = '';
export class EditTracksDialogComponent implements OnInit {
                }
            const allYearsSame = this._fileMetaDatas.every((track) => track.year === this._fileMetaDatas[0].year);
            } catch (e: unknown) {
        this._multipleValuesText = await this.translatorService.getAsync('multiple-values');
                this.dialogService.showInfoDialog(await this.translatorService.getAsync('no-image-found-online'));
            try {
    public albumArtists: string = '';

            }
                }
                if (this.discCount !== this._multipleValuesText) {
        if (!StringUtils.isNullOrWhiteSpace(selectedFile)) {
        return number;
                    fileMetaData.album = this.albumTitle;
    encapsulation: ViewEncapsulation.None,
    public trackNumber: string = '';
    private _newImageBuffer: Buffer | undefined;
            );
            this.albumTitle = allAlbumTitlesSame ? this._fileMetaDatas[0].album : this._multipleValuesText;
            this.discNumber = this.saveGetNumberAsString(this._fileMetaDatas[0].discNumber);
        }

                    fileMetaData.albumArtists = CollectionUtils.fromSemicolonSeparatedString(this.albumArtists);
    }
            }
            }
                numberOfErrors++;


        this.setFields();
            );
        private metadataService: MetadataService,

            const allGenresSame = this._fileMetaDatas.every((track) => track.genres === this._fileMetaDatas[0].genres);
        this.imagePath = await this.metadataService.createTrackImageUrlAsync(this._tracks[0]);

                this.logger.error(e, 'Failed to index', 'EditTracksDialogComponent', 'saveMetadata');
                if (this.trackCount !== this._multipleValuesText) {
            }
                ? CollectionUtils.toSemicolonSeparatedString(this._fileMetaDatas[0].artists)
        private imageProcessor: ImageProcessor,
            }
            return 0;
                }
        await this.getFileMetaDatasAsync();
                this._fileMetaDatas.push(await this.fileMetadataFactory.createAsync(track.path));
            this.trackNumber = this.saveGetNumberAsString(this._fileMetaDatas[0].trackNumber);
            } else {
                }
    public discNumber: string = '';
            const allDiscCountsSame = this._fileMetaDatas.every((track) => track.discCount === this._fileMetaDatas[0].discCount);
                    this.logger.error(
                }
            this.imagePath !== '' &&
                }
        if (isNaN(number)) {
        if (numberOfErrors > 0) {
            this.conductor = this._fileMetaDatas[0].conductor;
                this._fileMetaDatas[0],
                    fileMetaData.comment = this.comment;
