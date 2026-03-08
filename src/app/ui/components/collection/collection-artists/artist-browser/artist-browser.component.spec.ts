            component.artistsPersister = artistsPersisterMock.object;
            // Arrange
            // Assert
            // Assert
import { GuidFactory } from '../../../../../common/guid.factory';
    private _scrollToIndexIndex: number = -1;
            component.artists = [artist1, artist2];
            const event: any = {};
            const component: ArtistBrowserComponent = createComponent();
import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';
            // Assert
            // Act
import { Constants } from '../../../../../common/application/constants';
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);
        artistSorterMock.setup((x) => x.sortDescending([])).returns(() => []);
            artistsPersisterMock.verify((x) => x.setSelectedArtists([artist1, artist2]), Times.never());

    });
            expect(component.artists[0].isSelected).toBeFalsy();

            component.artistsPersister = artistsPersisterMock.object;
            component.selectedArtistOrder = ArtistOrder.byArtistDescending;

            // Assert
            const tracks: TrackModels = new TrackModels();
        });
    });
        it('should not set the selected items on mouseSelectionWatcher if the artist is a zoom header', () => {
            component.selectedArtistOrder = ArtistOrder.byArtistAscending;

        schedulerMock = Mock.ofType<SchedulerBase>();
            component.artists = [];

            // Arrange
            component.artists = [artist1, artist2];
            contextMenuOpenerMock.object,
        guidFactoryMock = Mock.ofType<GuidFactory>();
            // Arrange
            // Arrange
            artistSorterMock.object,
            // Arrange
            component.artists = [artist1, artist2];

            // Arrange


            mouseSelectionWatcherMock.object,


            const viewportMockAny: any = new CdkVirtualScrollViewportMock() as any;
            // Arrange
            // Act
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);

        semanticZoomHeaderAdderMock = Mock.ofType<SemanticZoomHeaderAdder>();

            // Assert
            // Arrange

        it('should set and return artistsPersister', () => {
        );


            // Act
            // Assert

        artistSorterMock.setup((x) => x.sortDescending(It.isAny())).returns(() => [artist2, artist1]);
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistAscending);
            component.selectedArtistOrder = ArtistOrder.byArtistDescending;
            component.artistsPersister = artistsPersisterMock.object;
    });
                Times.once(),
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);

            const component: ArtistBrowserComponent = createComponentWithSemanticZoomAdderMock();
            component.artistsPersister = artistsPersisterMock.object;
        });

        });
        const semanticZoomService_zoomOutRequested$: Observable<void> = semanticZoomService_zoomOutRequested.asObservable();

            // Act
            // Assert
            component.artistsPersister = artistsPersisterMock.object;
import { SchedulerBase } from '../../../../../common/scheduling/scheduler.base';
            component.setSelectedArtists(event, artist1);
            // Arrange
                        false,
            artistsPersisterMock.verify((x) => x.setSelectedArtists([artist1, artist2]), Times.exactly(1));

            await component.onShuffleAndPlayAsync(artist1);

    public get scrollToIndexIndex(): number {

            // Arrange
            component.setSelectedArtists(event, artist1);

                    ),
            // Act
            const component: ArtistBrowserComponent = createComponent();
                        ),

            const component: ArtistBrowserComponent = createComponent();
            component.artistsPersister = artistsPersisterMock.object;
        it('should show the headers for the ordered artists', () => {
            const artistOrder = ArtistOrder.byArtistDescending;
        });
        it('should define mouseSelectionWatcher', () => {
            // Assert
        applicationServiceMock = Mock.ofType<ApplicationServiceBase>();


            applicationService_mouseButtonReleased.next();
            const component: ArtistBrowserComponent = createComponentWithSemanticZoomAdderMock();

            expect(component.orderedArtists.length).toEqual(0);
            const persister: ArtistsPersister = component.artistsPersister;
                                artists.length === 2 &&
import { TrackServiceBase } from '../../../../../services/track/track.service.base';
            component.artistsPersister = artistsPersisterMock.object;

            expect(component.orderedArtists[1]).toEqual(artist1);
    function createComponentWithSemanticZoomAdderMock(): ArtistBrowserComponent {
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);

            component.ngOnInit();
            expect(component.selectedArtistOrder).toEqual(ArtistOrder.byArtistDescending);

            expect(component.addToPlaylistMenu).toBeDefined();
            // Arrange
            const component: ArtistBrowserComponent = createComponent();
    private _scrollToIndexBehavior: ScrollBehavior | undefined;
        it('should define artistOrderKey', () => {
            contextMenuOpenerMock.object,
            expect(viewportMockAny.scrollToIndexIndex).toEqual(0);
            const component: ArtistBrowserComponent = createComponent();
        });

            component.artistsPersister = artistsPersisterMock.object;

            const component: ArtistBrowserComponent = createComponent();
            component.artists = [artist1, artist2];
});
        it('should order the artists by artist descending if artistsPersister is not undefined and if the selected artist order is byArtistDescending', () => {
            semanticZoomServiceMock.object,
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([artist1, artist2])).returns(() => [artist1, artist2]);


        it('should set shouldZoomOut to true when zoom out is requested', () => {



            // Act
    });
import { ArtistOrder, artistOrderKey } from './artist-order';
        });
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
            // Act
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
    function createComponent(): ArtistBrowserComponent {
    describe('applyArtistType', () => {
            loggerMock.object,
import { PlaybackService } from '../../../../../services/playback/playback.service';


            component.artistsPersister = artistsPersisterMock.object;
                (x) =>
        const semanticZoomHeaderAdder: SemanticZoomHeaderAdder = new SemanticZoomHeaderAdder(guidFactoryMock.object);
        });
            // Assert

    });

            // Act
            component.artists = [artist1, artist2];
    let artist1: ArtistModel;
            );
    });
            playbackServiceMock.object,
        });
import { ArtistType, artistTypeKey } from '../../../../../services/artist/artist-type';
            // Act
            const artistType = ArtistType.allArtists;
        });
            // Arrange
            // Act
        it('should not show the headers for the ordered artists if artistsPersister is undefined', () => {
            expect(component.shouldZoomOut).toBeTruthy();
            component.viewPort = viewportMockAny;
        it('should define artistOrders', () => {
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);
        });

            await component.shuffleAllAsync();




            // Act
            component.artistsPersister = artistsPersisterMock.object;

            expect(component.orderedArtists[1]).toEqual(artist1);
        });
            component.artists = [artist1, artist2];
            artistsPersisterMock.verify((x) => x.setSelectedArtistOrder(artistOrder), Times.once());
            component.artists = [artist1, artist2];
            // Assert


                                artists[0].displayName === artist1.displayName &&
                        ),
            expect(component.orderedArtists[3]).toEqual(artist1);
        });
                                artists[1].displayName === artist1.displayName,
            const component: ArtistBrowserComponent = createComponent();

            const component: ArtistBrowserComponent = createComponent();

            const component: ArtistBrowserComponent = createComponent();
            expect(component.artists[1].isSelected).toBeTruthy();
            // Assert
            // Arrange
            // Assert
            component.artistsPersister = artistsPersisterMock.object;

                                artists[0].displayName === artist2.displayName &&
            component.artists = [artist1, artist2];
        it('should define contextMenuOpener', () => {

        it('should order the artists by artist ascending if the selected artist order is byArtistAscending', () => {
            schedulerMock.verify((x) => x.sleepAsync(Constants.semanticZoomInDelayMilliseconds), Times.once());
            applicationServiceMock.object,
            // Arrange
        it('should force shuffle and play the selected artist', async () => {
            const component: ArtistBrowserComponent = createComponent();
            const component: ArtistBrowserComponent = createComponent();
            const component: ArtistBrowserComponent = createComponent();
        it('should force shuffle and play all tracks', async () => {
        it('should declare shouldZoomOut as false', () => {
            // Assert

            // Arrange
        it('should set shouldZoomOut to false when mouse button is released', () => {
import { ArtistsPersister } from '../artists-persister';

        const semanticZoomService_zoomInRequested$: Observable<string> = semanticZoomService_zoomInRequested.asObservable();
            expect(component.orderedArtists[3]).toEqual(artist1);
            // Act
            expect(component.artistsPersister).toBeUndefined();

        artist1 = new ArtistModel('One artist', translatorServiceMock.object);



            expect(component.orderedArtists[1]).toEqual(artist1);
            // Assert
            artistsPersisterMock.verify((x) => x.setSelectedArtistOrder(artistOrder), Times.once());
            addToPlaylistMenuMock.object,
        it('should show the headers for the ordered artists', () => {

            component.shouldZoomOut = true;
            expect(component.orderedArtists[1]).toEqual(artist2);
            component.artists = [artist1, artist2];
            component.setSelectedArtists(event, artist1);
        it('should not order the artists if artistsPersister is undefined', () => {
                                artists[1].displayName === artist2.displayName,
        });
                Times.once(),
        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');
}

            // Act
                                artists.length === 2 &&
            artistsPersisterMock.verify((x) => x.setSelectedArtistType(artistType), Times.once());
        it('should declare selectedArtistOrder', () => {
            semanticZoomHeaderAdderMock.object,
            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedArtists), Times.once());

            // Act
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([artist2, artist1])).returns(() => [artist2, artist1]);
            expect(component.artists[0].isSelected).toBeFalsy();
        semanticZoomServiceMock.setup((x) => x.zoomInRequested$).returns(() => semanticZoomService_zoomInRequested$);
            const component: ArtistBrowserComponent = createComponent();
        artist2 = new ArtistModel('Two artist', translatorServiceMock.object);

            expect(component.orderedArtists).toBeDefined();
    describe('onAddToQueueAsync', () => {

            // Act

            // Arrange
        it('should order the artists by artist descending if the selected artist order is byArtistDescending', () => {
            // Arrange

    }
        this._scrollToIndexBehavior = behavior;
            // Assert
            // Assert
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [artist1, artist2]);

        semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders(It.isAny())).returns(() => [artist2, artist1]);
            const component: ArtistBrowserComponent = createComponentWithSemanticZoomAdderMock();
            artist2.isZoomHeader = true;
            const component: ArtistBrowserComponent = createComponent();
            // Arrange


            artist1.isZoomHeader = true;

    beforeEach(() => {
            const component: ArtistBrowserComponent = createComponent();

        it('should show the headers for the ordered artists if artistsPersister is not undefined', () => {
            // Act
            // Assert
            mouseSelectionWatcherMock.verify(
            // Act

        it('should apply the selected artists', () => {
    let artistsPersisterMock: IMock<ArtistsPersister>;

            artist1.isZoomHeader = false;
            semanticZoomService_zoomInRequested.next('t');
            artist1.isZoomHeader = true;
        it('should define artistTypes', () => {
            // Assert


        });

        applicationServiceMock.setup((x) => x.mouseButtonReleased$).returns(() => applicationService_mouseButtonReleased$);
    public get scrollToIndexbehavior(): ScrollBehavior | undefined {
    });
            const component: ArtistBrowserComponent = createComponent();
            component.ngOnInit();

            semanticZoomHeaderAdder,
        );
            // Assert
            expect(persister).toBe(artistsPersisterMock.object);
import { ArtistBrowserComponent } from './artist-browser.component';
            artistsPersisterMock.reset();
            // Assert

            // Act
            component.ngOnInit();

    let artist2: ArtistModel;
            // Act
            // Arrange
import { Observable, Subject } from 'rxjs';
                        It.is(
        const applicationService_mouseButtonReleased$: Observable<void> = applicationService_mouseButtonReleased.asObservable();

            component.artists = [artist1, artist2];
            component.artistsPersister = artistsPersisterMock.object;

            component.artists = [artist1, artist2];

        return new ArtistBrowserComponent(
        });
            expect(component.artists[0].isSelected).toBeFalsy();
            component.artistsPersister = artistsPersisterMock.object;
            // Assert

            // Assert

        });
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';

            component.artists = [artist1, artist2];

            component.selectedArtistOrder = ArtistOrder.byArtistAscending;
    describe('applyArtistOrder', () => {
            const component: ArtistBrowserComponent = createComponent();
            component.selectedArtistType = ArtistType.trackArtists;

    });
            const event: any = {};
            expect(component.orderedArtists[3]).toEqual(artist2);
    let loggerMock: IMock<Logger>;
            // Act
    let semanticZoomService_zoomInRequested: Subject<string>;
            expect(component.orderedArtists[1]).toEqual(artist2);
            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistAscending);
            component.artistsPersister = artistsPersisterMock.object;
        it('should add the selected artist for the selected artist type to the queue', async () => {
    let artistSorterMock: IMock<ArtistSorter>;

        it('should not apply the selected artists if artistsPersister is undefined', () => {
        return this._scrollToIndexBehavior;
            semanticZoomHeaderAdderMock.reset();


        });


        });
            const component: ArtistBrowserComponent = createComponent();
            expect(component.artists[1].isSelected).toBeTruthy();
        it('should define artists', () => {
            expect(component.selectedArtistOrder).toEqual(artistOrder);
describe('ArtistBrowserComponent', () => {

            // Arrange
            expect(component.artists[1].isSelected).toBeFalsy();
        });

        applicationService_mouseButtonReleased = new Subject();
        });


            // Assert

            // Arrange
            component.artists = [artist1, artist2];
            // Act
    });
            // Assert

            // Assert

        });
        });
            // Assert
            const component: ArtistBrowserComponent = createComponent();

import { TrackModels } from '../../../../../services/track/track-models';
        artistsPersisterMock.setup((x) => x.getSelectedArtists([artist1, artist2])).returns(() => [artist2]);
            component.artists = [artist1, artist2];
export class CdkVirtualScrollViewportMock {
            artistSorterMock.object,
        return new ArtistBrowserComponent(

        });
            trackServiceMock.object,
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [artist1, artist2]);
            // Act



            // Assert
        });
            // Act
            component.artistsPersister = artistsPersisterMock.object;
        it('should set and get the artists', () => {


            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, artist1), Times.exactly(1));
            component.artists = [artist1, artist2];
        });

            // Act
            expect(component.playbackService).toBeDefined();

            const component: ArtistBrowserComponent = createComponent();
            component.selectedArtistType = ArtistType.albumArtists;
            semanticZoomHeaderAdderMock.verify(
            // Arrange
            // Arrange


            const event: any = {};
            const component: ArtistBrowserComponent = createComponent();
            expect(component.artistTypes).toEqual([ArtistType.trackArtists, ArtistType.albumArtists, ArtistType.allArtists]);
            // Arrange
        });
    public scrollToIndex(index: number, behavior?: ScrollBehavior): void {
            // Assert
    describe('artists', () => {
            // Assert
            playbackServiceMock.verify((x) => x.enqueueAndPlayArtistAsync(artist1, ArtistType.albumArtists), Times.once());
        it('should initialize mouseSelectionWatcher using artists', () => {
            // Act
        return this._scrollToIndexIndex;
            component.applyArtistType(artistType);
            // Arrange
            await component.onAddToQueueAsync(artist1);
        artistsPersisterMock = Mock.ofType<ArtistsPersister>();
            component.artists = [artist1, artist2];
        artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);
            const component: ArtistBrowserComponent = createComponent();


            component.artists = [artist1, artist2];
            const component: ArtistBrowserComponent = createComponent();
    let playbackServiceMock: IMock<PlaybackService>;
            component.shouldZoomOut = false;
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
            artistsPersisterMock.reset();
            const component: ArtistBrowserComponent = createComponent();
                            (artists: ArtistModel[]) =>
        it('should define orderedArtists as empty', () => {
            expect(component.artistOrderKey).toEqual(artistOrderKey);

        trackServiceMock = Mock.ofType<TrackServiceBase>();

            const component: ArtistBrowserComponent = createComponent();
    describe('setSelectedArtists', () => {
        artistSorterMock.setup((x) => x.sortAscending(It.isAny())).returns(() => [artist1, artist2]);

            component.artists = [artist1, artist2];

            component.shouldZoomOut = true;
            artist1.isZoomHeader = false;
            // Assert
        it('should persist the selected artist if the artist is a not zoom header', () => {

    }
            component.artists = [artist1, artist2];
            // Act
            artistsPersisterMock.reset();
        it('should apply artist order by artist descending', () => {
            expect(component.orderedArtists[3]).toEqual(artist2);
            // Act
        playbackServiceMock = Mock.ofType<PlaybackService>();
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());
            mouseSelectionWatcherMock.reset();
            // Assert
            component.artists = [artist1, artist2];
            // Act
            // Arrange
            // Arrange
    let schedulerMock: IMock<SchedulerBase>;

import { IMock, It, Mock, Times } from 'typemoq';


        it('should define artistTypeKey', () => {
                    x.addZoomHeaders(

            // Assert
            const component: ArtistBrowserComponent = createComponent();
            // Act
            // Act
            expect(component.artists).toEqual([artist1, artist2]);

            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
            // Arrange
            // Arrange
            component.selectedArtistType = ArtistType.albumArtists;
            component.artists = [artist1, artist2];
            expect(component.shouldZoomOut).toBeFalsy();
                        It.is(
            expect(component.orderedArtists[1]).toEqual(artist2);
        });
        it('should set the selected artist order', () => {
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
            component.selectedArtistOrder = ArtistOrder.byArtistDescending;
import { SemanticZoomHeaderAdder } from '../../../../../common/semantic-zoom-header-adder';
            // Arrange
        semanticZoomService_zoomInRequested = new Subject();

        });



        it('should define playbackService', () => {

            component.artists = [artist1, artist2];
            expect(component.selectedArtistOrder).toEqual(artistOrder);
        this._scrollToIndexIndex = index;
            const component: ArtistBrowserComponent = createComponent();
            const component: ArtistBrowserComponent = createComponent();
            component.applyArtistOrder(artistOrder);

            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedArtists), Times.never());
            const component: ArtistBrowserComponent = createComponent();
            artistsPersisterMock.reset();
            // Act
            const component: ArtistBrowserComponent = createComponent();
    let trackServiceMock: IMock<TrackServiceBase>;
import { ArtistModel } from '../../../../../services/artist/artist-model';

            await flushPromises();
            // Act
            applicationServiceMock.object,
            expect(component.shouldZoomOut).toBeFalsy();
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, artist1), Times.never());

            artistsPersisterMock.setup((x) => x.getSelectedArtistOrder()).returns(() => ArtistOrder.byArtistDescending);
            // Act
            expect(component.mouseSelectionWatcher).toBeDefined();
            // Assert
            // Assert
            const component: ArtistBrowserComponent = createComponent();

                    x.initialize(
    let semanticZoomService_zoomOutRequested: Subject<void>;
            expect(component.artists).toBeDefined();
            component.artistsPersister = artistsPersisterMock.object;
        });
    describe('ngOnInit', () => {
            // Act
            mouseSelectionWatcherMock.reset();
        });

            expect(component.artistOrders).toEqual([ArtistOrder.byArtistAscending, ArtistOrder.byArtistDescending]);
            // Assert


            playbackServiceMock.verify((x) => x.addArtistToQueueAsync(artist1, ArtistType.albumArtists), Times.once());
    }
            artistsPersisterMock.reset();
            // Arrange
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([artist2, artist1])).returns(() => [artist2, artist1]);
            // Act
    let semanticZoomServiceMock: IMock<SemanticZoomServiceBase>;
            expect(component.shouldZoomOut).toBeFalsy();
            const component: ArtistBrowserComponent = createComponent();
        guidFactoryMock.setup((x) => x.create()).returns(() => '91c70666-8ad0-4037-8590-47f0c453c97d');

            // Assert

        });

            const component: ArtistBrowserComponent = createComponentWithSemanticZoomAdderMock();
        loggerMock = Mock.ofType<Logger>();
            expect(component.selectedArtistOrder).toBeUndefined();



            loggerMock.object,
            const component: ArtistBrowserComponent = createComponent();

        });
            component.selectedArtistOrder = ArtistOrder.byArtistDescending;
        });
    }
    let guidFactoryMock: IMock<GuidFactory>;

            component.artistsPersister = artistsPersisterMock.object;
            // Arrange
            component.artistsPersister = artistsPersisterMock.object;
            component.selectedArtistOrder = ArtistOrder.byArtistDescending;
            // Assert
        it('should create', () => {
    });
            component.artists = [artist1, artist2];

            const component: ArtistBrowserComponent = createComponent();
            // Act

        });



            component.selectedArtistOrder = ArtistOrder.byArtistAscending;
            component.setSelectedArtists(event, artist1);
        });
        });
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;

            // Assert
            trackServiceMock.object,
            const component: ArtistBrowserComponent = createComponent();
        });
    }
            // Arrange
            component.applyArtistOrder(ArtistOrder.byArtistAscending);
            artist1.isZoomHeader = true;
import { ArtistSorter } from '../../../../../common/sorting/artist-sorter';
            artistsPersisterMock.reset();
import { Logger } from '../../../../../common/logger';
            const component: ArtistBrowserComponent = createComponent();

            const artistOrder = ArtistOrder.byArtistAscending;

            component.artistsPersister = artistsPersisterMock.object;
            mouseSelectionWatcherMock.object,
            const component: ArtistBrowserComponent = createComponent();
            expect(component.selectedArtistType).toEqual(artistType);
        semanticZoomService_zoomOutRequested = new Subject();
    describe('onShuffleAndPlayAsync', () => {
        });
            const component: ArtistBrowserComponent = createComponentWithSemanticZoomAdderMock();
        it('should apply the selected artists if artistsPersister is not undefined', () => {
            // Assert
    let applicationServiceMock: IMock<ApplicationServiceBase>;
            // Act
            // Act
        semanticZoomServiceMock = Mock.ofType<SemanticZoomServiceBase>();
            component.artists = [artist1, artist2];

            );
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([])).returns(() => []);
            schedulerMock.object,
    let applicationService_mouseButtonReleased: Subject<void>;
            component.artistsPersister = artistsPersisterMock.object;
            expect(component.selectedArtistType).toBeUndefined();
                    ),
        it('should set the selected items on mouseSelectionWatcher if the artist is a not zoom header', () => {

            // Arrange
        it('should apply artist order by artist ascending', () => {
                (x) =>
    describe('shuffleAllAsync', () => {
            // Act
            component.applyArtistOrder(artistOrder);
        });
    describe('artistsPersister', () => {
        });

    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;
            // Act
                            (artists: ArtistModel[]) =>


        });
            // Arrange
            // Assert
        it('should define addToPlaylistMenu', () => {
            // Arrange


        it('should order the artists by artist ascending if artistsPersister is not undefined and if the selected artist order is byArtistAscending', () => {
        it('should scroll to zoom header when zoom in is requested', async () => {

            expect(component.orderedArtists.length).toEqual(0);
            // Assert
        artistSorterMock = Mock.ofType<ArtistSorter>();
    describe('constructor', () => {
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedArtists), Times.once());
    let semanticZoomHeaderAdderMock: IMock<SemanticZoomHeaderAdder>;


            semanticZoomService_zoomOutRequested.next();

        it('should declare artistsPersister', () => {
    });
            semanticZoomServiceMock.object,
        artistSorterMock.setup((x) => x.sortAscending([])).returns(() => []);
            expect(component).toBeDefined();
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;

            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());

            // Act
            // Act
            // Arrange
import { ContextMenuOpener } from '../../../context-menu-opener';
            // Assert


            playbackServiceMock.object,
        });
            const event: any = {};
            // Assert
            expect(component.artistTypeKey).toEqual(artistTypeKey);
        it('should not persist the selected artist if the artist is a zoom header', () => {

            // Arrange
    const flushPromises = () => new Promise(process.nextTick);
            expect(component.orderedArtists[3]).toEqual(artist1);
            expect(component.contextMenuOpener).toBeDefined();
            // Arrange
        });

        it('should apply artist type', () => {


            // Arrange
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([artist2, artist1])).returns(() => [artist2, artist1]);
            // Arrange

        it('should declare selectedArtistType', () => {
            const component: ArtistBrowserComponent = createComponent();
            schedulerMock.object,
            // Arrange


            artistsPersisterMock.reset();
            // Act
            // Arrange
            // Act
            // Arrange
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
        });
            expect(component.orderedArtists[3]).toEqual(artist2);

            addToPlaylistMenuMock.object,
            // Assert
            const component: ArtistBrowserComponent = createComponent();
            expect(viewportMockAny.scrollToIndexbehavior).toEqual('smooth');
        semanticZoomServiceMock.setup((x) => x.zoomOutRequested$).returns(() => semanticZoomService_zoomOutRequested$);

