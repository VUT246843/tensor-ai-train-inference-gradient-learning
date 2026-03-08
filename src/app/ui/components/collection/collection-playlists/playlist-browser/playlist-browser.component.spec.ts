            expect(component.playlists).toEqual(playlists);
            const component = createComponent();

            expect(component.playlistOrders).toEqual([PlaylistOrder.byPlaylistNameAscending, PlaylistOrder.byPlaylistNameDescending]);
        dialogServiceBaseMock = Mock.ofType<DialogServiceBase>();
            const playlists = [playlistModel1, playlistModel2];



            // Arrange
    describe('onDeletePlaylistAsync', () => {
            // Assert

        });
                .setup((x) =>
            // Act
            mouseButtonReleased.next();
            mouseSelectionWatcherMock.verify((x) => x.initialize(playlists, false), Times.once());

                )
            // Assert
            // Assert
        playlistServiceMock = Mock.ofType<PlaylistServiceBase>();
            expect(component.playlistRows).toEqual(playlistRows);
            // Arrange
            nativeElementProxyMock.setup((x) => x.getElementWidth(playlistBrowserElement)).returns(() => 600);
                    }),
import { PlaylistBrowserComponent } from './playlist-browser.component';
            // Assert
            // Act
import { ElementRef } from '@angular/core';
            playlistsPersisterMock.verify((x) => x.getSelectedPlaylists(It.isAny()), Times.never());
                        playlistName: playlistModel2.name,
        });
import { PlaylistOrder, playlistOrderKey } from '../playlist-order';

            const component = createComponent();
            const dialogText = 'text';
            const component = createComponent();
            const playlistBrowserElement: ElementRef = { nativeElement: {} };
    describe('createPlaylistAsync', () => {
            jest.runAllTimers();
            // Assert
            // Arrange
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
    });
                .returns(() => Promise.resolve(dialogText));
            jest.runAllTimers();
            // Assert
            translatorServiceMock.verify((x) => x.getAsync('delete-playlist-error'), Times.never());
            // Act
            await component.onDeletePlaylistAsync(playlistModel2);
            expect(playlistModel2.isSelected).toBeTruthy();
            const component = createComponent();
            await component.onAddToQueueAsync(playlistModel2);
            dialogServiceBaseMock.setup((x) => x.showConfirmationDialogAsync(dialogTitle, dialogText)).returns(() => Promise.resolve(true));



        });
            // Arrange
            component.playlistBrowserElement = playlistBrowserElement;
            playlistsPersisterMock.verify((x) => x.setSelectedPlaylists(playlists), Times.once());
            // Act

            const component = createComponent();


import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
            loggerMock.verify((x) => x.error(It.isAny(), It.isAny(), It.isAny(), It.isAny()), Times.never());
    describe('setSelectedPlaylists', () => {
            const component = createComponent();
    beforeEach(() => {


        });

            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(0, playlists, playlistOrder), Times.once());
            dialogServiceBaseMock.verify((x) => x.showErrorDialog(It.isAny()), Times.never());

    describe('onEditPlaylistAsync', () => {
            nativeElementProxyMock.setup((x) => x.getElementWidth(playlistBrowserElement)).returns(() => 600);




                    x.getAsync('confirm-delete-playlist-long', {
    });


    let playbackServiceMock: IMock<PlaybackService>;
            component.setSelectedPlaylists(mouseEvent, playlistModel2);

            component.onPlaylistContextMenu(mouseEvent, playlistModel2);
            component.playlistsPersister = playlistsPersisterMock.object;
        });
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
            playlistsPersisterMock.verify((x) => x.getSelectedPlaylistOrder(), Times.once());
            component.playlists = [playlistModel1, playlistModel2];
        });
            component.playlists = [playlistModel1, playlistModel2];


            // Arrange
            component.ngAfterViewInit();
            // Assert


            const result = component.playlistsPersister;
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;


    });
            // Arrange
            playlistServiceMock.verify((x) => x.deletePlaylistAsync(playlistModel2), Times.once());
        it('should show edit playlist dialog', async () => {
    describe('ngOnChanges', () => {
            expect(component.playlistOrderKey).toEqual(playlistOrderKey);
            jest.runAllTimers();
            // Act
            jest.useFakeTimers();
            playlistRowsGetterMock.reset();

                )

            // Act
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;

            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
            playbackServiceMock.verify((x) => x.addPlaylistToQueueAsync(playlistModel2), Times.once());
            // Arrange

        playlistsPersisterMock = Mock.ofType<PlaylistsPersister>();
    let playlistModel1: PlaylistModel;
                    x.getAsync('confirm-delete-playlist-long', {
        it('should return default playlists', () => {

            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());
            playlistRowsGetterMock.reset();
            const playlistsPersisterChanges: any = {
            jest.useFakeTimers();



        });
            // Arrange

            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-playlist')).returns(() => Promise.resolve(dialogTitle));
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());
            // Arrange
            playlistRowsGetterMock.setup((x) => x.getPlaylistRows(0, playlists, playlistOrder)).returns(() => playlistRows);
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            // Arrange
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);

            const dialogTitle = 'title';
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;
            playlistRowsGetterMock.reset();


    let loggerMock: IMock<Logger>;
            // Act
});
                .setup((x) =>
            const component = createComponent();
            // Act
            // Assert

            contextMenuOpenerMock.object,
    });

            const playlists = [playlistModel1, playlistModel2];

        it('should apply playlist order when playlistRowsGetter throws an exception', () => {
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
        it('should not fill the playlist rows on mouse button released if the available width has not changed', () => {
            const playlistsChanges: any = { playlists: { previousValue: [], currentValue: playlists } };
            const error = new Error('An error occurred');
            jest.runAllTimers();
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => PlaylistOrder.byPlaylistNameAscending);
import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';
        it('should show create playlist dialog', async () => {
            const playlists = [playlistModel1, playlistModel2];

    });
                .setup((x) =>
        playlistRowsGetterMock = Mock.ofType<PlaylistRowsGetter>();
            loggerMock.verify(
            component.playlistBrowserElement = playlistBrowserElement;
        });

            // Act
            expect(component.selectedPlaylistOrder).toEqual(playlistOrder);
            // Arrange
            expect(component.hasPlaylists).toBeFalsy();
    let windowSizeChanged$: Observable<void>;
    });
            // Arrange

            playlistsPersisterMock.verify((x) => x.setSelectedPlaylistOrder(playlistOrder), Times.once());

        it('should define playlistOrders', () => {

            const component = createComponent();

            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
        windowSizeChanged$ = windowSizeChanged.asObservable();
                .returns(() => Promise.resolve(dialogText));

            component.playlistsPersister = playlistsPersisterMock.object;
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
            // Assert

    describe('ngAfterViewInit', () => {
            // Arrange
            loggerMock.verify(
            // Assert
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const component = createComponent();
            );
            // Act

            expect(component.playlistRows).toEqual(playlistRows);
            nativeElementProxyMock.setup((x) => x.getElementWidth(playlistBrowserElement)).returns(() => 600);
            component.playlists = playlists;
            jest.runAllTimers();
            component.applyPlaylistOrder(playlistOrder);
        });
                    }),

            // Assert
            // Act
        });

            // Act

            nativeElementProxyMock.reset();
        mouseButtonReleased = new Subject();
        it('should fill the playlist rows on window size changed if the available width has changed', () => {
            playlistsPersisterMock.verify((x) => x.setSelectedPlaylistOrder(playlistOrder), Times.once());


            const result = component.playlists;
    let applicationServiceMock: IMock<ApplicationServiceBase>;
            // Assert
            translatorServiceMock.setup((x) => x.getAsync('delete-playlist-error')).returns(() => Promise.resolve(errorText));
        it('should delete playlist when user has confirmed', async () => {
        });
            await component.onDeletePlaylistAsync(playlistModel2);
        });
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            component.playlistsPersister = playlistsPersisterMock.object;
import { PlaylistServiceBase } from '../../../../../services/playlist/playlist.service.base';

            const dialogText = 'text';

            jest.runAllTimers();
            component.playlists = playlists;
            const dialogTitle = 'title';
            // Assert
            playlistServiceMock.object,
    let mouseButtonReleased: Subject<void>;
            const errorText = 'error text';
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
            jest.useFakeTimers();
            component.playlistsPersister = playlistsPersisterMock.object;
            const component = createComponent();
            dialogServiceBaseMock.verify((x) => x.showEditPlaylistDialogAsync(playlistModel2), Times.once());
        it('should not delete playlist when user has not confirmed', async () => {
        it('should apply playlist order', () => {

    describe('onAddToQueueAsync', () => {
            component.playlists = playlists;
            const component = createComponent();
            component.ngOnChanges(playlistsPersisterChanges);
import { PlaybackService } from '../../../../../services/playback/playback.service';
import { PlaylistRowsGetter } from '../playlist-folder-browser/playlist-rows-getter';

    let nativeElementProxyMock: IMock<NativeElementProxy>;


            windowSizeChanged.next();
import { MatMenuTrigger } from '@angular/material/menu';
            dialogServiceBaseMock.verify((x) => x.showErrorDialog(errorText), Times.once());
            // Assert
            // Assert

            // Act
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
        it('should not order the playlists when given changes for playlists and playlists is empty', () => {

                .returns(() => Promise.resolve(dialogText));
    });

        return new PlaylistBrowserComponent(
            component.ngAfterViewInit();
            const playlists = [playlistModel1, playlistModel2];

        });
            component.playlistContextMenu = playlistContextMenu;
        loggerMock = Mock.ofType<Logger>();
            expect(component.selectedPlaylistOrder).toEqual(playlistOrder);
        });
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(600, playlists, playlistOrder), Times.once());

            const playlists = [playlistModel1, playlistModel2];
    let playlistModel2: PlaylistModel;
        it('should set playlists', () => {

            nativeElementProxyMock.reset();

            // Act
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
                .setup((x) => x.showConfirmationDialogAsync(dialogTitle, dialogText))
            // Arrange
            jest.runAllTimers();
            // Arrange

        });

        it('should not fill the playlist rows on window size changed if the available width has changed after ngOnDestroy invocation', () => {
            // Arrange

            playlistRowsGetterMock.reset();
            component.playlists = playlists;

            playlistServiceMock.verify((x) => x.deletePlaylistAsync(playlistModel2), Times.once());
        });
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(600, playlists, playlistOrder), Times.once());
            dialogServiceBaseMock
            const component = createComponent();
            const component = createComponent();
            component.ngAfterViewInit();
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());


    });
            // Act
            component.playlists = [playlistModel1, playlistModel2];
            expect(playlistModel2.isSelected).toBeFalsy();
            // Arrange


        playlistRows = [playlistRow];
            playlistRowsGetterMock.object,
    describe('constructor', () => {
            playlistRowsGetterMock.setup((x) => x.getPlaylistRows(0, playlists, playlistOrder)).returns(() => playlistRows);

        applicationServiceMock = Mock.ofType<ApplicationServiceBase>();
        it('should set selected playlists', () => {
            // Assert

            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => playlists);
            translatorServiceMock
        });
            expect(playlistModel1.isSelected).toBeFalsy();
        it('should show create playlist dialog', async () => {
            component.playlistsPersister = playlistsPersisterMock.object;

            const mouseEvent = new MouseEvent('');
            playlistServiceMock.verify((x) => x.deletePlaylistAsync(playlistModel2), Times.never());
            jest.useFakeTimers();
            const component = createComponent();
            // Assert
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylists(playlists)).returns(() => [playlistModel2]);
            // Act
import { PlaylistsPersister } from '../playlists-persister';
        );
        playbackServiceMock = Mock.ofType<PlaybackService>();
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());

                    x.getAsync('confirm-delete-playlist-long', {
                playlistsPersister: { previousValue: undefined, currentValue: playlistsPersisterMock.object },
            expect(component.selectedPlaylistOrder).toEqual(playlistOrder);

            component.playlistsPersister = playlistsPersisterMock.object;
            // Assert
            const component = createComponent();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Assert

            component.ngOnDestroy();
                        playlistName: playlistModel2.name,
            expect(component.hasPlaylists).toBeTruthy();
            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-playlist')).returns(() => Promise.resolve(dialogTitle));
    });
            jest.useFakeTimers();
            expect(component.selectedPlaylistOrder).toEqual(playlistOrder);

            playlistRowsGetterMock.setup((x) => x.getPlaylistRows(0, playlists, playlistOrder)).returns(() => playlistRows);

            jest.useFakeTimers();
            jest.runAllTimers();
            // Act
                (x) => x.error(error, 'Could not delete playlist', 'PlaylistBrowserComponent', 'onDeletePlaylistAsync'),
            // Arrange
    let dialogServiceBaseMock: IMock<DialogServiceBase>;
    let playlistRow: PlaylistRow;
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;

            playlistsPersisterMock.setup((x) => x.getSelectedPlaylists(playlists)).returns(() => [playlistModel2]);

            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
            jest.runAllTimers();
        it('should show error dialog when playlistService throws an exception', async () => {
                Times.once(),

            const component = createComponent();
            component.applyPlaylistOrder(playlistOrder);
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => PlaylistOrder.byPlaylistNameAscending);
            const playlistBrowserElement: ElementRef = { nativeElement: {} };
    describe('applyPlaylistOrder', () => {

            nativeElementProxyMock.object,
            // Assert
    let playlistServiceMock: IMock<PlaylistServiceBase>;
            const component = createComponent();

import { ContextMenuOpener } from '../../../context-menu-opener';
import { IMock, It, Mock, Times } from 'typemoq';
            const component = createComponent();

            applicationServiceMock.object,
import { Logger } from '../../../../../common/logger';
            // Act
            component.playlistsPersister = playlistsPersisterMock.object;


            jest.useFakeTimers();

            const mouseEvent = new MouseEvent('');
            // Arrange
            component.playlistBrowserElement = playlistBrowserElement;
            translatorServiceMock
            component.playlistsPersister = playlistsPersisterMock.object;
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();

            component.playlistsPersister = playlistsPersisterMock.object;
            expect(playlistModel2.isSelected).toBeTruthy();
import { Observable, Subject } from 'rxjs';
            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
            translatorServiceMock
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylists(playlists)).returns(() => [playlistModel2]);
            // Arrange

            const component = createComponent();
        });
        it('should open playlist context menu', () => {
            nativeElementProxyMock.reset();
            expect(component.selectedPlaylistOrder).toEqual(playlistOrder);
            const component = createComponent();
                (x) => x.error(error, 'Could not order playlists', 'PlaylistBrowserComponent', 'orderPlaylists'),
            expect(playlistModel2.isSelected).toBeTruthy();


        });
    let playlistsPersisterMock: IMock<PlaylistsPersister>;
            dialogServiceBaseMock.setup((x) => x.showConfirmationDialogAsync(dialogTitle, dialogText)).returns(() => Promise.resolve(true));
            // Arrange
            mouseButtonReleased.next();
        playlistRow = new PlaylistRow();
            await component.onEditPlaylistAsync(playlistModel2);

            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
import { NativeElementProxy } from '../../../../../common/native-element-proxy';
            nativeElementProxyMock.reset();

            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());


            dialogServiceBaseMock.verify((x) => x.showCreatePlaylistDialogAsync(), Times.once());
            const playlistBrowserElement: ElementRef = { nativeElement: {} };

        it('should not order the playlists when no changes for playlists and playlistsPersister', () => {
            const playlists = [playlistModel1, playlistModel2];
            await component.createPlaylistAsync();
            nativeElementProxyMock.setup((x) => x.getElementWidth(playlistBrowserElement)).returns(() => 600);

                Times.once(),
            await component.onDeletePlaylistAsync(playlistModel2);
            jest.useFakeTimers();
            expect(playlistModel1.isSelected).toBeFalsy();
            // Act
        windowSizeChanged = new Subject();
            const component = createComponent();
            component.playlists = [playlistModel1, playlistModel2];

            // Arrange
            expect(result).toBeUndefined();
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(mouseEvent, playlistModel2), Times.once());
            // Assert
        it('should order the playlists when given changes for playlists', () => {
            const playlists = [playlistModel1, playlistModel2];

            jest.useFakeTimers();

            // Arrange
            // Act
            // Act
            expect(component.playlistRows).toEqual([]);
            // Assert


            const component = createComponent();
            const component = createComponent();

    function createComponent(): PlaylistBrowserComponent {
describe('PlaylistBrowserComponent', () => {
            // Act

        it('should not fill the playlist rows on mouse button released if the available width has changed after ngOnDestroy invocation', () => {
            component.playlists = playlists;
            // Assert

                    }),
            expect(playlistModel1.isSelected).toBeFalsy();
            const component = createComponent();
        playlistModel2 = new PlaylistModel('Playlist 2', 'Folder', 'Path 2', 'Image path 2');

            component.playlists = playlists;
            dialogServiceBaseMock.object,
            component.playlistsPersister = playlistsPersisterMock.object;
            // Assert
            mouseButtonReleased.next();

            expect(component.playlistRows).toEqual(playlistRows);

            translatorServiceMock.setup((x) => x.getAsync('confirm-delete-playlist')).returns(() => Promise.resolve(dialogTitle));
            component.playlistBrowserElement = { nativeElement: {} };
            playlistRowsGetterMock.verify((x) => x.getPlaylistRows(It.isAny(), It.isAny(), It.isAny()), Times.never());

    }
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    });
            playlistRowsGetterMock.setup((x) => x.getPlaylistRows(0, playlists, playlistOrder)).throws(error);
        it('should return default playlistsPersister', () => {


            const playlistOrder = PlaylistOrder.byPlaylistNameAscending;
        mouseButtonReleased$ = mouseButtonReleased.asObservable();
            // Arrange
            const playlistBrowserElement: ElementRef = { nativeElement: {} };
            component.ngAfterViewInit();
            // Assert
    let windowSizeChanged: Subject<void>;
        nativeElementProxyMock = Mock.ofType<NativeElementProxy>();
            const playlists = [playlistModel1, playlistModel2];

        });
            // Act


    let playlistRows: PlaylistRow[];

            jest.useFakeTimers();

            jest.useFakeTimers();
            expect(result).toEqual([]);
        });

            windowSizeChanged.next();
            playlistsPersisterMock.setup((x) => x.getSelectedPlaylistOrder()).returns(() => playlistOrder);
            playlistServiceMock.setup((x) => x.deletePlaylistAsync(playlistModel2)).throws(error);
        it('should set playlistsPersister', () => {
            // Act
        });
    describe('playlists', () => {
            // Act
        it('should define playlistOrderKey', () => {
    describe('onPlaylistContextMenu', () => {
    });
            jest.runAllTimers();


            // Arrange
            playbackServiceMock.object,
            component.ngAfterViewInit();


    let mouseButtonReleased$: Observable<void>;
            expect(component.playlistsPersister).toEqual(playlistsPersisterMock.object);
            // Assert
            component.ngOnChanges({});
            component.playlistBrowserElement = { nativeElement: {} };

            loggerMock.object,

        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();

                )
    describe('playlistsPersister', () => {
                .returns(() => Promise.resolve(false));

            component.ngOnChanges(playlistsChanges);

            component.playlists = playlists;
            component.ngOnChanges(playlistsChanges);

import { PlaylistModel } from '../../../../../services/playlist/playlist-model';
            component.playlistsPersister = playlistsPersisterMock.object;
            // Act

            const dialogTitle = 'title';

            const playlistContextMenu = Mock.ofType<MatMenuTrigger>().object;
            component.playlistsPersister = playlistsPersisterMock.object;
            // Arrange
import { PlaylistRow } from './playlist-row';
            const component = createComponent();
        playlistRow.playlists = [playlistModel1, playlistModel2];


        it('should order the playlists when given changes for playlistsPersister', () => {

            jest.useFakeTimers();
            const component = createComponent();
        });
            mouseSelectionWatcherMock.object,

        applicationServiceMock.setup((x) => x.windowSizeChanged$).returns(() => windowSizeChanged$);
        applicationServiceMock.setup((x) => x.mouseButtonReleased$).returns(() => mouseButtonReleased$);
            component.playlistBrowserElement = playlistBrowserElement;
        it('should fill the playlist rows on mouse button released if the available width has changed', () => {
            const error = new Error('An error occurred');
        });
    });
            };
            windowSizeChanged.next();
            jest.runAllTimers();
        playlistModel1 = new PlaylistModel('Playlist 1', 'Folder', 'Path 1', 'Image path 1');
        });

    });
        });
        it('should not fill the playlist rows on window size changed if the available width has not changed', () => {
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);


            const dialogText = 'text';
    let playlistRowsGetterMock: IMock<PlaylistRowsGetter>;
            translatorServiceMock.object,
                        playlistName: playlistModel2.name,
            jest.runAllTimers();
            component.ngOnDestroy();


            component.ngAfterViewInit();
            const playlistsChanges: any = { playlists: { previousValue: [], currentValue: [playlistModel2] } };
            expect(playlistModel1.isSelected).toBeFalsy();
            );
            contextMenuOpenerMock.verify((x) => x.open(playlistContextMenu, mouseEvent, playlistModel2), Times.once());

