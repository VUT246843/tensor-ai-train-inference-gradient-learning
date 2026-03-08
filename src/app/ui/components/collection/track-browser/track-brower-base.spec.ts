            expect(trackBrowserBase.logger).toBeDefined();
        track1.trackNumber = 1;
            expect(trackBrowserBase).toBeDefined();
            const trackBrowserBase: TrackBrowserBase = create();
            // Assert

            // Act
});
            await trackBrowserBase.onDeleteAsync();
        translatorServiceMock.setup((x) => x.getAsync('delete-songs')).returns(() => Promise.resolve('delete-songs'));
        });
        loggerMock = Mock.ofType<Logger>();
        track1.love = 0;
        settingsMock = new SettingsMock();

    let dialogServiceMock: IMock<DialogServiceBase>;

            const trackBrowserBase: TrackBrowserBase = create();
            await trackBrowserBase.onDeleteAsync();

            expect(trackBrowserBase.trackContextMenu).toBeUndefined();
        it('should define addToPlaylistMenu', () => {
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;

            desktopMock.verify((x) => x.showFileInDirectory(trackModel1.path), Times.once());


        });
            collectionServiceMock.verify((x) => x.deleteTracksAsync([trackModel1, trackModel2]), Times.once());
            // Act

import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
        track2.love = 0;
        });
    let trackModel1: TrackModel;
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1, trackModel2]);


        });
        it('should define dialogService', () => {
            // Assert
            const trackBrowserBase: TrackBrowserBase = create();
        it('should not show in folder if there are no tracks selected', () => {
        });
import { Logger } from '../../../../common/logger';

        dialogServiceMock = Mock.ofType<DialogServiceBase>();
            // Assert
    describe('onShowInFolder', () => {

                .setup((x) => x.showConfirmationDialogAsync('delete-songs', 'confirm-delete-songs'))


import { DesktopBase } from '../../../../common/io/desktop.base';
            await trackBrowserBase.onDeleteAsync();
            // Arrange
        });

        translatorServiceMock.setup((x) => x.getAsync('confirm-delete-song')).returns(() => Promise.resolve('confirm-delete-song'));
        const dateTimeMock: IMock<DateTime> = Mock.ofType<DateTime>();

        });

    });

        track2.rating = 2;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        track2.discNumber = 2;
        it('should define mouseSelectionWatcher', () => {
            // Act
            // Assert
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';

        track1.rating = 1;
        it('should declare trackContextMenu', () => {
            // Arrange
        track1 = new Track('Path 1');
            // Arrange
            const trackBrowserBase: TrackBrowserBase = create();
            expect(trackBrowserBase.mouseSelectionWatcher).toBeDefined();
            // Assert
            dialogServiceMock
    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;


            dialogServiceMock.verify((x) => x.showConfirmationDialogAsync('delete-songs', 'confirm-delete-songs'), Times.once());
            contextMenuOpenerMock.verify((x) => x.open(trackBrowserBase.trackContextMenu, event, trackModel2), Times.once());
            // Arrange
    });
        });
            // Act
        });
        });
            desktopMock.verify((x) => x.showFileInDirectory(It.isAny()), Times.never());
            const trackBrowserBase: TrackBrowserBase = create();
    });
        track1.discNumber = 1;
            playbackServiceMock.object,
        it('should define playbackService', () => {
        translatorServiceMock.setup((x) => x.getAsync('delete-song')).returns(() => Promise.resolve('delete-song'));
            dialogServiceMock.verify((x) => x.showConfirmationDialogAsync('delete-song', 'confirm-delete-song'), Times.once());
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1, trackModel2]);
            await trackBrowserBase.onAddToQueueAsync();
            trackBrowserBase.onShowInFolder();

    describe('onAddToQueueAsync', () => {

import { Track } from '../../../../data/entities/track';

        it('should add the selected tracks to the queue', async () => {

            translatorServiceMock.object,
            // Act
    let loggerMock: IMock<Logger>;

            // Arrange
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
    let desktopMock: IMock<DesktopBase>;

            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1, trackModel2]);

            // Act
import { PlaybackService } from '../../../../services/playback/playback.service';
        });
            // Assert
        track2.albumTitle = 'Album title 1';
            // Act
            // Act
                .returns(() => Promise.resolve(true));
            // Arrange

    describe('onTrackContextMenu', () => {
import { SettingsMock } from '../../../../testing/settings-mock';
            playbackServiceMock.verify((x) => x.addTracksToQueueAsync([trackModel1, trackModel2]), Times.once());
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1, trackModel2]);
            // Act
            // Arrange



            const trackBrowserBase: TrackBrowserBase = create();
            // Assert
        it('should show confirmation dialog with plural text when more than 1 track is provided', async () => {
        it('should not delete tracks if the user has not confirmed', async () => {
            const trackBrowserBase: TrackBrowserBase = create();
            // Act
            // Assert
            // Assert
            addToPlaylistMenuMock.object,
            dialogServiceMock
        });
    let track1: Track;
        track1.trackTitle = 'Title 1';
            const trackBrowserBase: TrackBrowserBase = create();
            // Act

                .returns(() => Promise.resolve(false));
            // Arrange
        track2 = new Track('Path 2');
            // Arrange
            expect(trackBrowserBase.playbackService).toBeDefined();
            // Arrange
        track2.trackTitle = 'Title 2';
import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
    function create(): TrackBrowserBase {
            const trackBrowserBase: TrackBrowserBase = create();
    describe('constructor', () => {
            // Assert
        it('should delete tracks if the user has confirmed', async () => {
            const trackBrowserBase: TrackBrowserBase = create();

        it('should open the track context menu', () => {
    let collectionServiceMock: IMock<CollectionServiceBase>;
            // Assert
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);


            trackBrowserBase.onShowInFolder();
    describe('onDeleteAsync', () => {
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
        desktopMock = Mock.ofType<DesktopBase>();
            // Act
            // Act
            // Assert
import { TrackModel } from '../../../../services/track/track-model';
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';

            // Arrange


import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
            trackBrowserBase.onTrackContextMenu(event, trackModel2);
            // Arrange
            // Arrange
    beforeEach(() => {

    }
            // Arrange
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1, trackModel2]);
            dialogServiceMock.object,
        });
            desktopMock.object,
        it('should create', () => {


            // Act
            const trackBrowserBase: TrackBrowserBase = create();

            await trackBrowserBase.onDeleteAsync();

import { DateTime } from '../../../../common/date-time';
describe('TrackBrowserBase', () => {
            const trackBrowserBase: TrackBrowserBase = create();
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
        track1.albumTitle = 'Album title 1';
        });
        track1.albumArtists = ';Album artist 1;';
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [trackModel1]);
import { IMock, It, Mock, Times } from 'typemoq';
        );
            // Assert
            mouseSelectionWatcherMock.object,
            loggerMock.object,

    let settingsMock: any;
            contextMenuOpenerMock.object,
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert


            collectionServiceMock.verify((x) => x.deleteTracksAsync(It.isAny()), Times.never());

        playbackServiceMock = Mock.ofType<PlaybackService>();
            const event: any = {};

        });
        });
import { ContextMenuOpener } from '../../context-menu-opener';

            expect(trackBrowserBase.addToPlaylistMenu).toBeDefined();
            const trackBrowserBase: TrackBrowserBase = create();
    });
    let playbackServiceMock: IMock<PlaybackService>;
import { TrackBrowserBase } from './track-brower-base';
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
        it('should show confirmation dialog with singular text when 1 track is provided', async () => {
    let track2: Track;

            const trackBrowserBase: TrackBrowserBase = create();
        it('should show the first selected track in folder if there are tracks selected', () => {
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
        return new TrackBrowserBase(
            expect(trackBrowserBase.contextMenuOpener).toBeDefined();
            expect(trackBrowserBase.dialogService).toBeDefined();

            const trackBrowserBase: TrackBrowserBase = create();

            collectionServiceMock.object,
        it('should define logger', () => {
            // Assert
            // Assert
    });

                .setup((x) => x.showConfirmationDialogAsync('delete-songs', 'confirm-delete-songs'))

            // Arrange
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => []);
    });
        track2.albumArtists = ';Album artist 1;';
            // Act
    let trackModel2: TrackModel;
        it('should define contextMenuOpener', () => {
            // Arrange
        track2.trackNumber = 1;

            const trackBrowserBase: TrackBrowserBase = create();

        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Act
        translatorServiceMock.setup((x) => x.getAsync('confirm-delete-songs')).returns(() => Promise.resolve('confirm-delete-songs'));
