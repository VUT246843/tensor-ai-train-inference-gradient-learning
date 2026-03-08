    let loggerMock: IMock<Logger>;
        ipcProxyMock = Mock.ofType<IpcProxyBase>();
            settingsMock.object,
            expect(sut).toBeDefined();
    let folderServiceMock: IMock<FolderServiceBase>;
            // Arrange, Act
        );
            desktopMock.object,

            albumArtworkIndexerMock.object,
        desktopMock = Mock.ofType<DesktopBase>();
        albumArtworkIndexerMock = Mock.ofType<AlbumArtworkIndexer>();
    let onIndexingWorkerMessage: Subject<IIndexingMessage>;
    beforeEach(() => {
    let albumArtworkIndexerMock: IMock<AlbumArtworkIndexer>;
    let settingsMock: IMock<SettingsBase>;
import { Logger } from '../../common/logger';

        folderService_foldersChanged = new Subject();
        settingsMock = Mock.ofType<SettingsBase>();
        ipcProxyMock.setup((x) => x.onIndexingWorkerMessage$).returns(() => onIndexingWorkerMessage$);

            // Assert
        folderServiceMock.setup((x) => x.foldersChanged$).returns(() => folderService_foldersChanged$);
        playbackServiceMock = Mock.ofType<PlaybackService>();
        onIndexingWorkerMessage = new Subject();
    });

            const sut: IndexingService = createSut();
            folderServiceMock.object,
});

    }
    let onIndexingWorkerExit: Subject<void>;
        it('should create', () => {

        });
import { FolderServiceBase } from '../folder/folder.service.base';
    let notificationServiceMock: IMock<NotificationServiceBase>;
            trackRepositoryMock.object,
        trackFillerMock = Mock.ofType<TrackFiller>();
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
import { IIndexingMessage } from './messages/i-indexing-message';
        folderServiceMock = Mock.ofType<FolderServiceBase>();
import { SettingsBase } from '../../common/settings/settings.base';

import { Observable, Subject } from 'rxjs';
    test.todo('should write tests');
            notificationServiceMock.object,
import { TrackFiller } from './track-filler';
        const folderService_foldersChanged$: Observable<void> = folderService_foldersChanged.asObservable();

    });
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
        return new IndexingService(
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
            loggerMock.object,
    function createSut(): IndexingService {
import { DesktopBase } from '../../common/io/desktop.base';
    let folderService_foldersChanged: Subject<void>;
import { NotificationServiceBase } from '../notification/notification.service.base';
    let trackFillerMock: IMock<TrackFiller>;
import { IndexingService } from './indexing.service';
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
    let ipcProxyMock: IMock<IpcProxyBase>;
            trackFillerMock.object,
import { IMock, Mock } from 'typemoq';
import { FolderService } from '../folder/folder.service';
        onIndexingWorkerExit = new Subject();
    describe('constructor', () => {

import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
import { AlbumArtworkIndexer } from './album-artwork-indexer';
        const onIndexingWorkerMessage$: Observable<IIndexingMessage> = onIndexingWorkerMessage.asObservable();
            ipcProxyMock.object,
    let desktopMock: IMock<DesktopBase>;

describe('IndexingService', () => {
import { PlaybackService } from '../playback/playback.service';
        const onIndexingWorkerExit$: Observable<void> = onIndexingWorkerExit.asObservable();
            playbackServiceMock.object,

        ipcProxyMock.setup((x) => x.onIndexingWorkerExit$).returns(() => onIndexingWorkerExit$);
    let playbackServiceMock: IMock<PlaybackService>;
        loggerMock = Mock.ofType<Logger>();
