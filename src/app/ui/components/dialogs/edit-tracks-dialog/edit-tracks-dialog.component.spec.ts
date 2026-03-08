import { OnlineAlbumArtworkGetter } from '../../../../services/indexing/online-album-artwork-getter';
import { Logger } from '../../../../common/logger';
    let loggerMock: IMock<Logger>;

            fileMetadataFactoryMock.object,

    let imageProcessorMock: IMock<ImageProcessor>;
import { FileMetadataFactoryBase } from '../../../../common/metadata/file-metadata.factory.base';
import { TrackModel } from '../../../../services/track/track-model';
        imageProcessorMock = Mock.ofType<ImageProcessor>();
            desktopMock.object,
            metadataServiceMock.object,
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        metadataServiceMock = Mock.ofType<MetadataService>();
            // Arrange
            expect(component).toBeDefined();
import { EditTracksDialogComponent } from './edit-tracks-dialog.component';


    let dialogServiceMock: IMock<DialogServiceBase>;
        fileMetadataFactoryMock = Mock.ofType<FileMetadataFactoryBase>();
            metadataPatcherMock.object,
        metadataPatcherMock = Mock.ofType<MetadataPatcher>();
});
import { IndexingService } from '../../../../services/indexing/indexing.service';
        );
import { MatDialogRef } from '@angular/material/dialog';
        it('should create', () => {
            loggerMock.object,
        desktopMock = Mock.ofType<DesktopBase>();
            // Act
import { DesktopBase } from '../../../../common/io/desktop.base';
            translatorServiceMock.object,
    let metadataServiceMock: IMock<MetadataService>;
import { ImageProcessor } from '../../../../common/image-processor';
    let onlineAlbumArtworkGetterMock: IMock<OnlineAlbumArtworkGetter>;
    let desktopMock: IMock<DesktopBase>;
    let indexingServiceMock: IMock<IndexingService>;
        component = new EditTracksDialogComponent(

import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
            dataMock,
            dialogServiceMock.object,
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    let metadataPatcherMock: IMock<MetadataPatcher>;
    let component: EditTracksDialogComponent;
    });
            onlineAlbumArtworkGetterMock.object,

        dialogServiceMock = Mock.ofType<DialogServiceBase>();
        });
    beforeEach(() => {
            indexingServiceMock.object,
import { MetadataPatcher } from '../../../../common/metadata/metadata-patcher';
        loggerMock = Mock.ofType<Logger>();

            // Assert
    const dataMock: TrackModel[] = [];
    describe('constructor', () => {
describe('EditTracksDialogComponent', () => {
            imageProcessorMock.object,
    let fileMetadataFactoryMock: IMock<FileMetadataFactoryBase>;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
import { MetadataService } from '../../../../services/metadata/metadata.service';
import { IMock, Mock } from 'typemoq';
    });
        onlineAlbumArtworkGetterMock = Mock.ofType<OnlineAlbumArtworkGetter>();
        indexingServiceMock = Mock.ofType<IndexingService>();
