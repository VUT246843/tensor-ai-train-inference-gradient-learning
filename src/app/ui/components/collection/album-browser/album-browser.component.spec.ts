
describe('AlbumBrowserComponent', () => {
            const albums: AlbumModel[] = [album1, album2];
    });
            component.albumsPersister = albumsPersisterMock.object;
        applicationServiceMock = Mock.ofType<ApplicationServiceBase>();
            // Act
            const tracks: TrackModels = new TrackModels();
            // Act
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
        it('should declare albumBrowserElement', () => {


            albumRowsGetterMock.reset();
            // Arrange
                AlbumOrder.byLastPlayed,
            const event: any = {};
            // Assert
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Assert
    let windowSizeChanged: Subject<void>;
            settingsMock,
        it('should set the selected album order', () => {
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            expect(component.useCompactYearView).toBe(false);
            windowSizeChanged.next();
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), albums, AlbumOrder.byAlbumArtist, It.isAny()), Times.never());

            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), It.isAny(), It.isAny(), It.isAny()), Times.never());

            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
        return new AlbumBrowserComponent(

        });
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            const component: AlbumBrowserComponent = createComponent();
            applicationServiceMock.object,
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
            expect(albums[1].isSelected).toBeTruthy();
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
        it('should set the selected items on mouseSelectionWatcher', () => {
            const albums: AlbumModel[] = [album1, album2];
        });
            // Act
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            // Assert
            const albumData1: AlbumData = new AlbumData();
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), albums, AlbumOrder.byYearAscending, false), Times.exactly(1));

    let trackServiceMock: IMock<TrackServiceBase>;
    describe('setSelectedAlbums', () => {
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    describe('onAddToQueueAsync', () => {
            expect(component.albumRows).toBeDefined();
            component.toggleYearView();
            nativeElementProxyMock.reset();
            albumRowsGetterMock.reset();
            const albumData1: AlbumData = new AlbumData();
            // Arrange
        });

            component.ngOnInit();

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        });
            const albumData1: AlbumData = new AlbumData();
            // Arrange
            const component: AlbumBrowserComponent = createComponent();
    });
            // Assert
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            jest.useFakeTimers();
            const component: AlbumBrowserComponent = createComponent();
        albumRowsGetterMock = Mock.ofType<AlbumRowsGetter>();
            // Arrange
            component.toggleYearView();
            albumData1.albumKey = 'albumKey1';

            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            albumRowsGetterMock.reset();
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Arrange
            settingsMock.useCompactYearView = true;
import { AlbumOrder, albumOrderKey } from '../album-order';
        windowSizeChanged$ = windowSizeChanged.asObservable();
            component.albums = albums;
    });
            component.albumsPersister = albumsPersisterMock.object;

    });
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
    beforeEach(() => {

            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Act

            // Act
        it('should apply the selected albums', () => {
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            // Arrange
    });
    describe('constructor', () => {
            // Assert
            expect(component.albumOrderKey).toEqual(albumOrderKey);
            const albumsPersisterChanges: any = { albumsPersister: { currentValue: albumsPersisterMock.object } };
            component.albumsPersister = albumsPersisterMock.object;
            const albums: AlbumModel[] = [album1, album2];

            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
        it('should fill the album rows', () => {

        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;
            component.ngOnInit();
            component.albumsPersister = albumsPersisterMock.object;
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
        });

            const albumsChanges: any = { albums: { currentValue: albums } };
            // Assert

        });
            albumRowsGetterMock.verify((x) => x.getAlbumRows(600, albums, AlbumOrder.byAlbumArtist, false), Times.exactly(1));


            expect(component.albums).toBe(albums);
        it('should save useCompactYearView to settings when toggling from true to false', () => {

            const albumData1: AlbumData = new AlbumData();
        it('should declare albumsPersister', () => {
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
        it('should define contextMenuOpener', () => {
            expect(component.addToPlaylistMenu).toBeDefined();
import { IMock, It, Mock, Times } from 'typemoq';
            component.albumsPersister = albumsPersisterMock.object;
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
import { AlbumModel } from '../../../../services/album/album-model';

            // Arrange
            // Act
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const component: AlbumBrowserComponent = createComponent();
            const albums: AlbumModel[] = [album1, album2];
        it('should toggle useCompactYearView from true to false', () => {
    describe('albums', () => {
            // Assert
        });


            // Arrange
    let settingsMock: SettingsMock;
            component.albumsPersister = albumsPersisterMock.object;
            // Act

            const albumData2: AlbumData = new AlbumData();
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => [album2]);
            const component: AlbumBrowserComponent = createComponent();
            const albumData2: AlbumData = new AlbumData();
            settingsMock.useCompactYearView = false;
            // Assert

            jest.runAllTimers();
        it('should not order the albums given changes for albumsPersister and albumsPersister is undefined', () => {
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Act
            component.albums = albums;
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
            // Assert
            // Act
            // Arrange
            // Act
            expect(component.useCompactYearView).toBe(false);
            const albumData2: AlbumData = new AlbumData();

            playbackServiceMock.verify((x) => x.enqueueAndPlayAlbumAsync(album1), Times.once());
            albumData1.albumKey = 'albumKey1';
        });



            const component: AlbumBrowserComponent = createComponent();
            albumData2.albumKey = 'albumKey2';
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            expect(albums[0].isSelected).toBeFalsy();
            // Arrange
        });
            await component.onAddToQueueAsync(album1);
        });
        it('should initialize mouseSelectionWatcher using albums', () => {

        playbackServiceMock = Mock.ofType<PlaybackService>();
    });
    let loggerMock: IMock<Logger>;
    });
    let applicationPathsMock: IMock<ApplicationPaths>;
        it('should order the albums given changes for albumsPersister and albums if albumsPersister is not undefined', () => {
            // Arrange


                AlbumOrder.byDateCreated,
            // Arrange
        });

            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            albumsPersisterMock.reset();
            component.ngOnChanges({ albumsPersister: albumsPersisterChanges, albums: albumsChanges });
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
import { AlbumBrowserComponent } from './album-browser.component';
            component.albumsPersister = albumsPersisterMock.object;
import { ContextMenuOpener } from '../../context-menu-opener';
        it('should toggle useCompactYearView from false to true', () => {

        });
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            const albumData1: AlbumData = new AlbumData();


        });
            component.albums = albums;


            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
        });
            // Assert
            // Assert
            const albums: AlbumModel[] = [album1, album2];
            // Assert
            const component: AlbumBrowserComponent = createComponent();
            expect(component.useCompactYearView).toBe(true);


    describe('ngOnChanges', () => {
            const albumData1: AlbumData = new AlbumData();
            expect(settingsMock.useCompactYearView).toBe(false);
            // Arrange
            mouseButtonReleased.next();
            // Assert
    }
        nativeElementProxyMock = Mock.ofType<NativeElementProxy>();
            jest.runAllTimers();

            component.albumsPersister = albumsPersisterMock.object;
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            // Arrange

            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());
            playbackServiceMock.verify((x) => x.addAlbumToQueueAsync(album1), Times.once());

        });

            const component: AlbumBrowserComponent = createComponent();
            // Arrange

        it('should persist the selected albums', () => {
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
        albumsPersisterMock = Mock.ofType<BaseAlbumsPersister>();
            jest.runAllTimers();
            // Arrange
        it('should force shuffle and play the selected album', async () => {
            windowSizeChanged.next();


            // Assert
            jest.runAllTimers();
            component.toggleYearView();
            settingsMock.useCompactYearView = true;

            ]);
            // Act
            component.albumsPersister = albumsPersisterMock.object;
            component.ngOnInit();
            const component: AlbumBrowserComponent = createComponent();
            const albumsPersisterChanges: any = { albumsPersister: { currentValue: albumsPersisterMock.object } };
            // Assert
            const component: AlbumBrowserComponent = createComponent();
            // Arrange
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), albums, AlbumOrder.byYearAscending, true), Times.exactly(1));
import { SettingsMock } from '../../../../testing/settings-mock';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
        });
            jest.runAllTimers();
        });
import { Logger } from '../../../../common/logger';
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);


            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            albumsPersisterMock.verify((x) => x.setSelectedAlbumOrder(AlbumOrder.byAlbumArtist), Times.exactly(1));
        it('should define mouseSelectionWatcher', () => {
            const component: AlbumBrowserComponent = createComponent();
            component.albumsPersister = albumsPersisterMock.object;
        it('should fill the album rows on mouse button released if the available width has changed', () => {


            component.albums = albums;

        });
            const component: AlbumBrowserComponent = createComponent();


            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);

            albumsPersisterMock.verify((x) => x.setSelectedAlbums(albums), Times.exactly(1));
            addToPlaylistMenuMock.object,
    });
            expect(component.playbackService).toBeDefined();
            await component.onShuffleAndPlayAsync(album1);
            component.albumBrowserElement = { nativeElement: {} };
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Act
            albumsPersisterMock.setup((x) => x.getSelectedAlbums(albums)).returns(() => [album2]);

        applicationServiceMock.setup((x) => x.windowSizeChanged$).returns(() => windowSizeChanged$);
            // Arrange
            mouseSelectionWatcherMock.object,
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
            // Act
            trackServiceMock.object,
            component.albums = albums;
            const component: AlbumBrowserComponent = createComponent();
            const albumData2: AlbumData = new AlbumData();

            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);

            // Assert
            const component: AlbumBrowserComponent = createComponent();
            const persister: BaseAlbumsPersister = component.albumsPersister;

            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            const albumData1: AlbumData = new AlbumData();

    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;

            // Act
            const albums: AlbumModel[] = [album1, album2];
            const component: AlbumBrowserComponent = createComponent();
            albumRowsGetterMock.reset();

            // Assert
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);

            component.ngOnInit();
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 600);

            const albumData1: AlbumData = new AlbumData();

            const albumData2: AlbumData = new AlbumData();
        it('should save useCompactYearView to settings when toggling from false to true', () => {
                AlbumOrder.byYearDescending,
        it('should define albumRows as empty', () => {
            // Arrange
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), albums, AlbumOrder.byAlbumArtist, false), Times.exactly(1));
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
    let albumRowsGetterMock: IMock<AlbumRowsGetter>;
            // Arrange
                AlbumOrder.byAlbumTitleDescending,
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            const albums: AlbumModel[] = [album1, album2];
            contextMenuOpenerMock.object,
            // Arrange
            nativeElementProxyMock.object,
            const albumData1: AlbumData = new AlbumData();
            const albums: AlbumModel[] = [album1, album2];
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
        });

            const event: any = {};
    let nativeElementProxyMock: IMock<NativeElementProxy>;
            const albumData1: AlbumData = new AlbumData();
            const component: AlbumBrowserComponent = createComponent();

            const component: AlbumBrowserComponent = createComponent();

            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
        });

            // Act
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            component.albumBrowserElement = { nativeElement: {} };
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();

            const albumData2: AlbumData = new AlbumData();
            jest.runAllTimers();
            // Act
            await component.shuffleAllAsync();
            const albumData1: AlbumData = new AlbumData();
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            component.albumsPersister = albumsPersisterMock.object;
            component.applyAlbumOrder(AlbumOrder.byYearAscending);
            // Assert
            component.albumsPersister = albumsPersisterMock.object;
            // Arrange
            // Act
            const component: AlbumBrowserComponent = createComponent();
        it('should not order the albums when give no changes for albumsPersister and albums', () => {
            // Assert
            settingsMock.useCompactYearView = false;
            // Assert
            component.albums = albums;
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            component.ngAfterViewInit();
            const component: AlbumBrowserComponent = createComponent();

            const albumData1: AlbumData = new AlbumData();

            const component: AlbumBrowserComponent = createComponent();
            // Act
            component.albums = albums;
            expect(component.albumRows.length).toEqual(0);
            const component: AlbumBrowserComponent = createComponent();
    let playbackServiceMock: IMock<PlaybackService>;
            const albums: AlbumModel[] = [album1, album2];
            // Arrange
            const albumData1: AlbumData = new AlbumData();
            const component: AlbumBrowserComponent = createComponent();

            settingsMock.useCompactYearView = false;



        });
            // Act
                AlbumOrder.byDateAdded,
        });
            const albumData1: AlbumData = new AlbumData();
            // Act
            const albumData2: AlbumData = new AlbumData();
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);


            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);

        it('should fill the album rows on window size changed if the available width has changed', () => {
            // Act
            // Assert
            const albums: AlbumModel[] = [album1, album2];

        it('should initialize useCompactYearView as false when settings is false', () => {
            const component: AlbumBrowserComponent = createComponent();
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const albumData1: AlbumData = new AlbumData();
        it('should set and get the albums', () => {
            const albumData1: AlbumData = new AlbumData();
            // Assert

            const albumData1: AlbumData = new AlbumData();
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
});
            component.albumsPersister = albumsPersisterMock.object;
        it('should apply the selected albums', () => {
        mouseButtonReleased = new Subject();
            const albumData2: AlbumData = new AlbumData();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
            albumRowsGetterMock.reset();
            const component: AlbumBrowserComponent = createComponent();
        });
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
import { Observable, Subject } from 'rxjs';
            // Arrange
        });
            component.albums = albums;
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, album1), Times.exactly(1));
            component.albumsPersister = albumsPersisterMock.object;
        it('should not fill the album rows on mouse button released if the available width has not changed', () => {
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), albums, AlbumOrder.byAlbumArtist, It.isAny()), Times.never());
            // Arrange
            // Act
            const albumsChanges: any = { albums: { currentValue: albums } };
            component.albumsPersister = albumsPersisterMock.object;

            expect(albums[0].isSelected).toBeFalsy();
            // Assert

    });
            const component: AlbumBrowserComponent = createComponent();
            // Assert
            component.ngOnChanges({ albumsPersister: albumsPersisterChanges, albums: albumsChanges });

        });
            component.albums = [];
            const component: AlbumBrowserComponent = createComponent();

            // Act
            const albumData1: AlbumData = new AlbumData();
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
    });
            // Assert
            expect(component).toBeDefined();
            component.toggleYearView();
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

            const albumData2: AlbumData = new AlbumData();
            playbackServiceMock.object,
            component.albums = albums;
    });
                AlbumOrder.byAlbumTitleAscending,
            const component: AlbumBrowserComponent = createComponent();
            component.albumBrowserElement = { nativeElement: {} };
            const component: AlbumBrowserComponent = createComponent();


            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            expect(component.contextMenuOpener).toBeDefined();
            // Assert
            const component: AlbumBrowserComponent = createComponent();
    describe('ngAfterViewInit', () => {
            // Act
            component.albums = albums;
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
            component.applyAlbumOrder(AlbumOrder.byAlbumArtist);
            // Arrange
            jest.useFakeTimers();
            // Assert
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            const component: AlbumBrowserComponent = createComponent();
            const albums: AlbumModel[] = [album1, album2];
            const albumsPersisterChanges: any = { albumsPersister: { currentValue: albumsPersisterMock.object } };
            const component: AlbumBrowserComponent = createComponent();
            // Assert

        it('should define playbackService', () => {
            // Act

            const component: AlbumBrowserComponent = createComponent();
            const albumData1: AlbumData = new AlbumData();
            const albums: AlbumModel[] = [album1, album2];
import { NativeElementProxy } from '../../../../common/native-element-proxy';
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            const albums: AlbumModel[] = [album1, album2];
            jest.runAllTimers();
            // Arrange
            const albumData2: AlbumData = new AlbumData();
            // Act
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        it('should not fill the album rows on window size changed if the available width has not changed', () => {
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            const albumData2: AlbumData = new AlbumData();
            component.albumsPersister = albumsPersisterMock.object;
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);



            // Arrange
            const albums: AlbumModel[] = [album1, album2];
            const albumData1: AlbumData = new AlbumData();


        });
            const albumData2: AlbumData = new AlbumData();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumTitleAscending);
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            // Arrange

    let mouseButtonReleased: Subject<void>;
            settingsMock.useCompactYearView = false;
                AlbumOrder.random,

            component.albums = albums;
            expect(component.useCompactYearView).toBe(true);
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);

            component.albums = albums;
    function createComponent(): AlbumBrowserComponent {
        it('should define addToPlaylistMenu', () => {
            mouseSelectionWatcherMock.verify((x) => x.initialize(albums, false), Times.exactly(1));
            const albums: AlbumModel[] = [album1, album2];
            component.albums = albums;

            component.ngOnInit();
            // Assert
        applicationServiceMock.setup((x) => x.mouseButtonReleased$).returns(() => mouseButtonReleased$);
import { AlbumRowsGetter } from './album-rows-getter';

            component.selectedAlbumOrder = AlbumOrder.random;
    let windowSizeChanged$: Observable<void>;
            const albums: AlbumModel[] = [album1, album2];
            const albums: AlbumModel[] = [album1, album2];
        });
                AlbumOrder.byYearAscending,
        it('should set and return albumsPersister', () => {

            component.setSelectedAlbums(event, album1);
            jest.runAllTimers();
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
import { TrackModels } from '../../../../services/track/track-models';
            // Arrange
            component.setSelectedAlbums(event, album1);
            const albumData1: AlbumData = new AlbumData();
            // Act
            const component: AlbumBrowserComponent = createComponent();
            // Assert
            // Arrange
            albumRowsGetterMock.verify((x) => x.getAlbumRows(600, albums, AlbumOrder.byAlbumArtist, false), Times.exactly(1));
            // Assert
            // Assert
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            // Arrange

            component.ngOnChanges({ albumsPersister: albumsPersisterChanges, albums: albumsChanges });
    describe('toggleYearView', () => {
        it('should reorder albums after toggling', () => {
            component.albumsPersister = albumsPersisterMock.object;
        loggerMock = Mock.ofType<Logger>();
        it('should define albumOrderKey', () => {
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);

import { ApplicationPaths } from '../../../../common/application/application-paths';
            albumRowsGetterMock.reset();
        it('should create', () => {
            nativeElementProxyMock.reset();

import { AlbumData } from '../../../../data/entities/album-data';
            component.albumsPersister = albumsPersisterMock.object;
            expect(settingsMock.useCompactYearView).toBe(true);
        mouseButtonReleased$ = mouseButtonReleased.asObservable();
            component.albums = albums;
    });
            component.ngOnInit();
import { ApplicationServiceBase } from '../../../../services/application/application.service.base';


            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            mouseButtonReleased.next();
            const component: AlbumBrowserComponent = createComponent();


            const albumData2: AlbumData = new AlbumData();

            // Arrange
            const albumsChanges: any = { albums: { currentValue: albums } };
            component.albumsPersister = albumsPersisterMock.object;
            component.albums = albums;
            // Act
import { BaseAlbumsPersister } from '../base-albums-persister';
            expect(component.albumBrowserElement).toBeUndefined();
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
        });
            albumData2.albumKey = 'albumKey2';
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 0);
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            const component: AlbumBrowserComponent = createComponent();
            const albumData2: AlbumData = new AlbumData();
            // Act

            component.albumsPersister = albumsPersisterMock.object;
            jest.useFakeTimers();

            albums[0].isSelected = false;

            // Act
            // Act
            // Assert
            // Act
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
        it('should define albumOrders', () => {
            const albumData1: AlbumData = new AlbumData();
        trackServiceMock = Mock.ofType<TrackServiceBase>();
            expect(component.selectedAlbumOrder).toBeUndefined();
            const component: AlbumBrowserComponent = createComponent();

            // Assert

            albumRowsGetterMock.reset();
        });
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            jest.useFakeTimers();
            jest.useFakeTimers();
            albumRowsGetterMock.reset();
            albumRowsGetterMock.object,

            // Act
            component.albums = albums;

    let mouseButtonReleased$: Observable<void>;
        });
    describe('onShuffleAndPlayAsync', () => {
            settingsMock.useCompactYearView = true;
    describe('ngOnInit', () => {
            jest.useFakeTimers();
            // Arrange
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Act
            albumRowsGetterMock.reset();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);
            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);

            const album2: AlbumModel = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
    describe('applyAlbumOrder', () => {
    let applicationServiceMock: IMock<ApplicationServiceBase>;
    describe('shuffleAllAsync', () => {

            albumRowsGetterMock.reset();
            expect(component.albumOrders).toEqual([
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;

        it('should initialize useCompactYearView from settings', () => {
            const albumData2: AlbumData = new AlbumData();
            // Assert
            // Act
            const album1: AlbumModel = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            component.ngAfterViewInit();
            jest.useFakeTimers();
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 500);

            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byYearAscending);
            // Act
            component.toggleYearView();
            const albumData2: AlbumData = new AlbumData();
        });
        });
        });
            component.selectedAlbumOrder = AlbumOrder.random;
            const component: AlbumBrowserComponent = createComponent();
            expect(albums[1].isSelected).toBeTruthy();

            component.albumsPersister = albumsPersisterMock.object;
        });
import { PlaybackService } from '../../../../services/playback/playback.service';
            const component: AlbumBrowserComponent = createComponent();
            loggerMock.object,
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
        it('should persist the selected album order', () => {
            // Assert
            albums[1].isSelected = false;
            expect(component.albumsPersister).toBeUndefined();
        });
            albumRowsGetterMock.verify((x) => x.getAlbumRows(It.isAny(), It.isAny(), It.isAny(), It.isAny()), Times.never());
        it('should declare selectedAlbumOrder', () => {
        );
            const albums: AlbumModel[] = [album1, album2];
            const albumData2: AlbumData = new AlbumData();

                AlbumOrder.byAlbumArtist,
            // Arrange
            // Act
    let albumsPersisterMock: IMock<BaseAlbumsPersister>;
    });
            // Assert
        });
            // Act
            component.ngOnInit();
            // Arrange
            albumRowsGetterMock.reset();
            component.selectedAlbumOrder = AlbumOrder.random;
        it('should add the selected album to the queue', async () => {
    describe('albumsPersister', () => {
            expect(component.selectedAlbumOrder).toEqual(AlbumOrder.byAlbumTitleAscending);
            // Assert
            component.albumsPersister = albumsPersisterMock.object;



            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
        windowSizeChanged = new Subject();
            component.selectedAlbumOrder = AlbumOrder.byAlbumArtist;
            component.albums = albums;
            component.albumBrowserElement = { nativeElement: {} };
        it('should force shuffle and play all tracks', async () => {

        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
            const albums: AlbumModel[] = [album1, album2];

            component.ngOnChanges({});
            expect(persister).toBe(albumsPersisterMock.object);
            // Arrange
            jest.useFakeTimers();
            component.applyAlbumOrder(AlbumOrder.byAlbumArtist);
            albumsPersisterMock.setup((x) => x.getSelectedAlbumOrder()).returns(() => AlbumOrder.byAlbumArtist);
            const albumData2: AlbumData = new AlbumData();
            component.ngAfterViewInit();
        });
            expect(component.mouseSelectionWatcher).toBeDefined();
            // Arrange
        settingsMock = new SettingsMock();


            component.ngAfterViewInit();
            const albumData2: AlbumData = new AlbumData();
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => albums);

            component.albums = albums;
            nativeElementProxyMock.setup((x) => x.getElementWidth(It.isAny())).returns(() => 600);
        });
