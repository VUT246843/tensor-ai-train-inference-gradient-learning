        playlistServiceMock = Mock.ofType<PlaylistServiceBase>();
    let desktopMock: IMock<DesktopBase>;
            playlistServiceMock.object,
import { MatDialogRef } from '@angular/material/dialog';
import { DesktopBase } from '../../../../common/io/desktop.base';
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();


        it('should create', () => {
import { EditPlaylistDialogComponent } from './edit-playlist-dialog.component';
        );
            dialogRefMock.object,
            desktopMock.object,
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
    });
import { PlaylistServiceBase } from '../../../../services/playlist/playlist.service.base';

        });
describe('EditPlaylistDialogComponent', () => {
            // Assert
            expect(component).toBeDefined();
    });

        desktopMock = Mock.ofType<DesktopBase>();

        component = new EditPlaylistDialogComponent(
            // Act
            translatorServiceMock.object,
    let playlistServiceMock: IMock<PlaylistServiceBase>;
            // Arrange
import { IMock, Mock } from 'typemoq';
    beforeEach(() => {
            dataMock,
    let dialogRefMock: IMock<MatDialogRef<EditPlaylistDialogComponent>>;
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    describe('constructor', () => {
        dialogRefMock = Mock.ofType<MatDialogRef<EditPlaylistDialogComponent>>();
    const dataMock: any = { inputText: '' };
    let component: EditPlaylistDialogComponent;
});

