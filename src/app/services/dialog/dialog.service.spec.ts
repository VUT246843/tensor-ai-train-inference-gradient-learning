        it('should create', () => {
    });


            // Arrange
    describe('constructor', () => {
});
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

        playlistModelFactoryMock = Mock.ofType<PlaylistModelFactory>();
import { MatDialog } from '@angular/material/dialog';

        matDialogMock = Mock.ofType<MatDialog>();

            // Assert
import { DialogService } from './dialog.service';
    let matDialogMock: IMock<MatDialog>;
        service = new DialogService(matDialogMock.object, playlistModelFactoryMock.object, translatorServiceMock.object);
        });
    });
    beforeEach(() => {

    let service: DialogService;
describe('DialogService', () => {

            // Act
import { IMock, Mock } from 'typemoq';
            expect(service).toBeDefined();
    let playlistModelFactoryMock: IMock<PlaylistModelFactory>;
import { PlaylistModelFactory } from '../playlist/playlist-model-factory';
import { TranslatorServiceBase } from '../translator/translator.service.base';
