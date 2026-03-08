        it('should define contextMenuOpener', () => {
        it('should not set the selected items on mouseSelectionWatcher if the genre is a zoom header', () => {
    let trackServiceMock: IMock<TrackServiceBase>;
        });
    describe('constructor', () => {
            expect(component.orderedGenres[3]).toEqual(genre2);
            const component: GenreBrowserComponent = createComponent();

        });
            // Act
        });


            const component: GenreBrowserComponent = createComponent();
            expect(component.orderedGenres[1]).toEqual(genre2);


        });
        it('should set shouldZoomOut to false when mouse button is released', () => {


            mouseSelectionWatcherMock.object,
    }
            const genreOrder = GenreOrder.byGenreAscending;
        semanticZoomServiceMock.setup((x) => x.zoomOutRequested$).returns(() => semanticZoomService_zoomOutRequested$);
            expect(component.selectedGenreOrder).toEqual(genreOrder);
            expect(component.genres[0].isSelected).toBeFalsy();
            component.setSelectedGenres(event, genre1);
            genre1.isZoomHeader = false;

            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, genre1), Times.never());
            expect(persister).toBe(genresPersisterMock.object);

            // Act
            component.applyGenreOrder(genreOrder);
            component.genres = [genre1, genre2];
            // Arrange
            // Arrange
import { GenreModel } from '../../../../../services/genre/genre-model';
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);

            component.genresPersister = genresPersisterMock.object;
        it('should define orderedGenres as empty', () => {
        });
        });
            genresPersisterMock.reset();
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
        contextMenuOpenerMock = Mock.ofType<ContextMenuOpener>();
        });
            genre1.isZoomHeader = true;
            const component: GenreBrowserComponent = createComponent();
            // Arrange


        });
    let applicationService_mouseButtonReleased: Subject<void>;
        guidFactoryMock = Mock.ofType<GuidFactory>();
            // Arrange
    let applicationServiceMock: IMock<ApplicationServiceBase>;
            expect(component.orderedGenres[1]).toEqual(genre2);
            playbackServiceMock.verify((x) => x.enqueueAndPlayGenreAsync(genre1), Times.once());

            // Act
            component.ngOnInit();


            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([genre2, genre1])).returns(() => [genre2, genre1]);
        it('should not order the genres if genresPersister is undefined', () => {

            // Assert
            // Act
            const component: GenreBrowserComponent = createComponent();
            // Arrange
            component.genresPersister = genresPersisterMock.object;
            addToPlaylistMenuMock.object,
            // Arrange
            component.genresPersister = genresPersisterMock.object;
        });
        );
        });
            mouseSelectionWatcherMock.verify((x) => x.setSelectedItems(event, genre1), Times.exactly(1));

            // Act
            // Act
        schedulerMock = Mock.ofType<SchedulerBase>();
            component.genresPersister = genresPersisterMock.object;
        it('should show the headers for the ordered genres', () => {
            // Arrange
            component.genres = [genre1, genre2];
        genreSorterMock.setup((x) => x.sortAscending([])).returns(() => []);


            // Assert
            // Act
        applicationServiceMock = Mock.ofType<ApplicationServiceBase>();
        });
        applicationServiceMock.setup((x) => x.mouseButtonReleased$).returns(() => applicationService_mouseButtonReleased$);
            // Assert
        });
        trackServiceMock = Mock.ofType<TrackServiceBase>();

            component.setSelectedGenres(event, genre1);
        const applicationService_mouseButtonReleased$: Observable<void> = applicationService_mouseButtonReleased.asObservable();
        return new GenreBrowserComponent(
            genresPersisterMock.reset();
            genre1.isZoomHeader = true;

        });
        return this._scrollToIndexBehavior;


            const component: GenreBrowserComponent = createComponent();
            const component: GenreBrowserComponent = createComponent();
            const event: any = {};
            // Assert
        });


            genre1.isZoomHeader = true;
            expect(component.contextMenuOpener).toBeDefined();
        });
        semanticZoomService_zoomOutRequested = new Subject();
        });

    let semanticZoomService_zoomOutRequested: Subject<void>;
            semanticZoomHeaderAdderMock.reset();
        });

                            (genres: GenreModel[]) =>
            // Assert
                        ),
            // Arrange

            component.genres = [genre1, genre2];
            genreSorterMock.object,
            // Act

            component.selectedGenreOrder = GenreOrder.byGenreAscending;
        genre2 = new GenreModel('Two genre', translatorServiceMock.object);
                const component: GenreBrowserComponent = createComponent();
            // Act
            component.genresPersister = genresPersisterMock.object;
            const event: any = {};
        it('should apply genre order by genre ascending', () => {
    let semanticZoomHeaderAdderMock: IMock<SemanticZoomHeaderAdder>;

        it('should force shuffle and play the selected genre', async () => {
            semanticZoomHeaderAdderMock.verify(
            });
            // Assert
            applicationServiceMock.object,
            // Assert
            // Assert
                (x) =>
            component.genres = [genre1, genre2];
            component.genres = [genre1, genre2];
        });
            component.genresPersister = genresPersisterMock.object;
            const component: GenreBrowserComponent = createComponent();
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([genre2, genre1])).returns(() => [genre2, genre1]);
export class CdkVirtualScrollViewportMock {
            component.genresPersister = genresPersisterMock.object;
                // Arrange

            // Arrange
            genresPersisterMock.verify((x) => x.setSelectedGenres([genre1, genre2]), Times.exactly(1));
            // Arrange

            // Act


describe('GenreBrowserComponent', () => {
        });
            expect(component.orderedGenres[3]).toEqual(genre2);
    function createComponentWithSemanticZoomAdderMock(): GenreBrowserComponent {
                    x.addZoomHeaders(
            component.genres = [genre1, genre2];
                await component.onAddToQueueAsync(genre1);
            // Arrange
            expect(component.shouldZoomOut).toBeFalsy();
            expect(component.genres[1].isSelected).toBeFalsy();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
    let mouseSelectionWatcherMock: IMock<MouseSelectionWatcher>;


        });


            // Act
            component.genres = [genre1, genre2];
            // Assert
            expect(component.shouldZoomOut).toBeFalsy();
            const persister: GenresPersister = component.genresPersister;
            component.shouldZoomOut = true;
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);
            const component: GenreBrowserComponent = createComponent();
            component.setSelectedGenres(event, genre1);
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
            const component: GenreBrowserComponent = createComponent();
        describe('onAddToQueueAsync', () => {
            expect(component.genreOrderKey).toEqual(genreOrderKey);
});
import { ContextMenuOpener } from '../../../context-menu-opener';
import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';
            const component: GenreBrowserComponent = createComponent();
        });
            expect(component.orderedGenres[1]).toEqual(genre2);
            expect(component.orderedGenres[3]).toEqual(genre1);
        it('should define genreOrders', () => {


    describe('ngOnInit', () => {

            component.genres = [genre1, genre2];
            component.ngOnInit();
            expect(component.orderedGenres[3]).toEqual(genre1);
                                genres.length === 2 &&

            // Assert

        this._scrollToIndexIndex = index;
            const component: GenreBrowserComponent = createComponent();
    const flushPromises = () => new Promise(process.nextTick);
            // Act



            const component: GenreBrowserComponent = createComponent();
            const component: GenreBrowserComponent = createComponentWithSemanticZoomAdderMock();
            component.shouldZoomOut = true;
            expect(component.orderedGenres[3]).toEqual(genre1);
            const component: GenreBrowserComponent = createComponent();
            // Act
            // Act


            semanticZoomHeaderAdderMock.object,
            component.genres = [genre1, genre2];
            contextMenuOpenerMock.object,

            const component: GenreBrowserComponent = createComponent();
        });
            component.genresPersister = genresPersisterMock.object;
    });
        it('should declare shouldZoomOut as false', () => {
            semanticZoomServiceMock.object,

            expect(component.genres[0].isSelected).toBeFalsy();
            // Assert
    });

            const tracks: TrackModels = new TrackModels();

            const viewportMockAny: any = new CdkVirtualScrollViewportMock() as any;

import { Observable, Subject } from 'rxjs';

            semanticZoomService_zoomOutRequested.next();

        it('should not persist the selected genre if the genre is a zoom header', () => {
            component.genres = [genre1, genre2];
            expect(component.addToPlaylistMenu).toBeDefined();
                    ),
            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedGenres), Times.never());
            // Assert
                        It.is(
            component.shouldZoomOut = false;
            // Arrange
    let schedulerMock: IMock<SchedulerBase>;
            // Act
            // Arrange

            component.genresPersister = genresPersisterMock.object;
    describe('applyGenreOrder', () => {

        const semanticZoomService_zoomOutRequested$: Observable<void> = semanticZoomService_zoomOutRequested.asObservable();
            schedulerMock.object,
        it('should order the genres by genre ascending if the selected genre order is byGenreAscending', () => {
            // Act

            // Act

            // Act
    let semanticZoomService_zoomInRequested: Subject<string>;
            // Assert

        genreSorterMock = Mock.ofType<GenreSorter>();
            component.genres = [genre1, genre2];
            expect(component.genres).toEqual([genre1, genre2]);

            // Assert
    let semanticZoomServiceMock: IMock<SemanticZoomServiceBase>;
            // Arrange
            // Arrange
    let genre1: GenreModel;

        genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);
                (x) =>
            // Act
                Times.once(),

        });
            // Assert
    }
    });

            // Arrange
        semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders(It.isAny())).returns(() => [genre2, genre1]);
        );
            component.genresPersister = genresPersisterMock.object;

            component.selectedGenreOrder = GenreOrder.byGenreDescending;
    private _scrollToIndexIndex: number = -1;

            component.genresPersister = genresPersisterMock.object;
            genresPersisterMock.verify((x) => x.setSelectedGenreOrder(genreOrder), Times.once());
        });
        it('should persist the selected genre if the genre is a not zoom header', () => {
            // Assert
    let genreSorterMock: IMock<GenreSorter>;
            genre2.isZoomHeader = true;
        genreSorterMock.setup((x) => x.sortAscending(It.isAny())).returns(() => [genre1, genre2]);
            const component: GenreBrowserComponent = createComponentWithSemanticZoomAdderMock();
            const event: any = {};
            expect(component.selectedGenreOrder).toEqual(genreOrder);
            // Arrange
            component.genres = [genre1, genre2];


            genreSorterMock.object,
    }
            component.genres = [genre1, genre2];
            // Assert
import { GuidFactory } from '../../../../../common/guid.factory';


    let loggerMock: IMock<Logger>;

            expect(component.playbackService).toBeDefined();
        addToPlaylistMenuMock = Mock.ofType<AddToPlaylistMenu>();

        return new GenreBrowserComponent(
            // Assert
        genreSorterMock.setup((x) => x.sortDescending([])).returns(() => []);
            // Assert
            applicationServiceMock.object,
            component.genresPersister = genresPersisterMock.object;

        });


            component.genres = [genre1, genre2];
        guidFactoryMock.setup((x) => x.create()).returns(() => '91c70666-8ad0-4037-8590-47f0c453c97d');


        it('should declare genresPersister', () => {
            genresPersisterMock.reset();
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';

import { GenresPersister } from '../genres-persister';
            component.viewPort = viewportMockAny;
    });
            // Act
            expect(component.shouldZoomOut).toBeTruthy();
            // Act
            it('should add the selected genre to the queue', async () => {
            // Act
            // Assert
            const component: GenreBrowserComponent = createComponent();
            component.applyGenreOrder(genreOrder);

                                genres.length === 2 &&
                // Act
            await component.onShuffleAndPlayAsync(genre1);
            component.genresPersister = genresPersisterMock.object;
            const event: any = {};


            const component: GenreBrowserComponent = createComponent();

        });

        it('should define addToPlaylistMenu', () => {
            expect(viewportMockAny.scrollToIndexbehavior).toEqual('smooth');
                // Assert

            // Act
            mouseSelectionWatcherMock.object,

            // Assert
            addToPlaylistMenuMock.object,
            component.genres = [genre1, genre2];
            loggerMock.object,
            await flushPromises();
        });
            const component: GenreBrowserComponent = createComponent();
            // Arrange
            // Arrange

        it('should set and get the genres', () => {
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);


        it('should set the selected items on mouseSelectionWatcher if the genre is a not zoom header', () => {

        this._scrollToIndexBehavior = behavior;
            const genreOrder = GenreOrder.byGenreDescending;
        semanticZoomServiceMock = Mock.ofType<SemanticZoomServiceBase>();
            genresPersisterMock.reset();
            // Arrange
            component.genresPersister = genresPersisterMock.object;
        genresPersisterMock.setup((x) => x.getSelectedGenres([genre1, genre2])).returns(() => [genre2]);
                                genres[0].displayName === genre2.displayName &&
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [genre1, genre2]);
    public get scrollToIndexbehavior(): ScrollBehavior | undefined {

            loggerMock.object,
import { Logger } from '../../../../../common/logger';
            // Act
        it('should order the genres by genre ascending if genresPersister is not undefined and if the selected genre order is byGenreAscending', () => {
            expect(component.orderedGenres.length).toEqual(0);
        });
            // Act
import { SemanticZoomHeaderAdder } from '../../../../../common/semantic-zoom-header-adder';

            const component: GenreBrowserComponent = createComponent();

                        ),
            component.genres = [genre1, genre2];
            const component: GenreBrowserComponent = createComponent();
            expect(component.orderedGenres[1]).toEqual(genre1);

    }
import { GenreBrowserComponent } from './genre-browser.component';
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(tracks.tracks), Times.once());
                            (genres: GenreModel[]) =>
            component.genresPersister = genresPersisterMock.object;
            expect(component.genreOrders).toEqual([GenreOrder.byGenreAscending, GenreOrder.byGenreDescending]);
            genresPersisterMock.verify((x) => x.setSelectedGenreOrder(genreOrder), Times.once());

        it('should define genres', () => {
            // Arrange
            playbackServiceMock.object,
            // Arrange

                                genres[1].displayName === genre1.displayName,
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([])).returns(() => []);
        loggerMock = Mock.ofType<Logger>();
            expect(component.orderedGenres[3]).toEqual(genre2);
            // Act
            );
            contextMenuOpenerMock.object,
            const component: GenreBrowserComponent = createComponent();

            const component: GenreBrowserComponent = createComponent();
            // Assert

                    ),
            // Assert
            playbackServiceMock.verify((x) => x.forceShuffled(), Times.once());
            // Act
            // Act


            expect(component.genres).toBeDefined();
            // Arrange
    public get scrollToIndexIndex(): number {
            // Assert

            component.genresPersister = genresPersisterMock.object;
            // Act
            // Arrange

        const semanticZoomHeaderAdder: SemanticZoomHeaderAdder = new SemanticZoomHeaderAdder(guidFactoryMock.object);

            expect(component.genresPersister).toBeUndefined();
        semanticZoomHeaderAdderMock = Mock.ofType<SemanticZoomHeaderAdder>();
import { TrackModels } from '../../../../../services/track/track-models';

                    x.initialize(
        it('should apply the selected genres', () => {
    }
    describe('genresPersister', () => {




            // Assert
            expect(component.orderedGenres.length).toEqual(0);


            genresPersisterMock.reset();
    });

            // Assert
            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedGenres), Times.once());
    });
            component.genresPersister = genresPersisterMock.object;
            );
    let playbackServiceMock: IMock<PlaybackService>;
            expect(component.genres[0].isSelected).toBeFalsy();
            // Act
            // Act
            const component: GenreBrowserComponent = createComponent();

    function createComponent(): GenreBrowserComponent {
            // Assert
    let genresPersisterMock: IMock<GenresPersister>;
            genre1.isZoomHeader = false;

        });
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreAscending);
            trackServiceMock.object,
            // Arrange
            const component: GenreBrowserComponent = createComponentWithSemanticZoomAdderMock();

        it('should define genreOrderKey', () => {
                                genres[1].displayName === genre2.displayName,
            // Assert
    describe('genres', () => {
            const component: GenreBrowserComponent = createComponent();
        it('should set and return genresPersister', () => {

            // Assert
            applicationService_mouseButtonReleased.next();



            // Assert
        });

            component.applyGenreOrder(GenreOrder.byGenreAscending);
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([genre1, genre2])).returns(() => [genre1, genre2]);
            const component: GenreBrowserComponent = createComponent();

        it('should apply genre order by genre descending', () => {


            // Assert
            // Arrange
    });



            component.genresPersister = genresPersisterMock.object;
            expect(component.mouseSelectionWatcher).toBeDefined();


        it('should declare selectedGenreOrder', () => {
    });
        });
            // Arrange
            genresPersisterMock.verify((x) => x.setSelectedGenres([genre1, genre2]), Times.never());

        it('should show the headers for the ordered genres if genresPersister is not undefined', () => {
        it('should initialize mouseSelectionWatcher using genres', () => {

            component.genres = [];
}
import { SchedulerBase } from '../../../../../common/scheduling/scheduler.base';
        });
        it('should define mouseSelectionWatcher', () => {
            component.selectedGenreOrder = GenreOrder.byGenreDescending;
        it('should create', () => {

    describe('setSelectedGenres', () => {
import { Constants } from '../../../../../common/application/constants';
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Act
        mouseSelectionWatcherMock = Mock.ofType<MouseSelectionWatcher>();
    describe('onShuffleAndPlayAsync', () => {
            semanticZoomHeaderAdderMock.verify((x) => x.addZoomHeaders(component.orderedGenres), Times.once());
            // Assert
            // Act
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);
        it('should order the genres by genre descending if genresPersister is not undefined and if the selected genre order is byGenreDescending', () => {
            expect(component.orderedGenres[1]).toEqual(genre1);

            const component: GenreBrowserComponent = createComponent();

            const component: GenreBrowserComponent = createComponent();
        });
            // Assert
            playbackServiceMock.object,

            // Act
            // Arrange
            // Assert
            mouseSelectionWatcherMock.reset();
            component.genres = [genre1, genre2];

        semanticZoomService_zoomInRequested = new Subject();
                                genres[0].displayName === genre1.displayName &&
import { TrackServiceBase } from '../../../../../services/track/track.service.base';
        });
            // Act
import { GenreOrder, genreOrderKey } from './genre-order';

import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
            const component: GenreBrowserComponent = createComponentWithSemanticZoomAdderMock();
            // Arrange
            component.genres = [genre1, genre2];
            trackServiceMock.object,
            const component: GenreBrowserComponent = createComponentWithSemanticZoomAdderMock();
            genresPersisterMock.reset();
            const component: GenreBrowserComponent = createComponent();
        it('should not show the headers for the ordered genres if genresPersister is undefined', () => {
    let contextMenuOpenerMock: IMock<ContextMenuOpener>;
        it('should define playbackService', () => {

            component.genresPersister = genresPersisterMock.object;
        it('should force shuffle and play all tracks', async () => {
    let genre2: GenreModel;
        genre1 = new GenreModel('One genre', translatorServiceMock.object);
            component.genres = [genre1, genre2];
            schedulerMock.verify((x) => x.sleepAsync(Constants.semanticZoomInDelayMilliseconds), Times.once());
            // Arrange

            expect(viewportMockAny.scrollToIndexIndex).toEqual(0);

        });

            // Assert
            component.selectedGenreOrder = GenreOrder.byGenreDescending;
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => tracks);
    private _scrollToIndexBehavior: ScrollBehavior | undefined;
        });

            await component.shuffleAllAsync();
            component.genres = [genre1, genre2];

        it('should order the genres by genre descending if the selected genre order is byGenreDescending', () => {
            component.selectedGenreOrder = GenreOrder.byGenreAscending;

            genresPersisterMock.reset();

            expect(component.selectedGenreOrder).toBeUndefined();
                Times.once(),
        });
            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreAscending);
            // Act
        it('should not apply the selected genres if genresPersister is undefined', () => {
            // Act
    beforeEach(() => {
import { GenreSorter } from '../../../../../common/sorting/genre-sorter';



        });
        translatorServiceMock.setup((x) => x.get('unknown-genre')).returns(() => 'Unknown genre');
        it('should apply the selected genres if genresPersister is not undefined', () => {
        });
    let addToPlaylistMenuMock: IMock<AddToPlaylistMenu>;
            component.genres = [genre1, genre2];
            expect(component.genres[1].isSelected).toBeTruthy();
import { PlaybackService } from '../../../../../services/playback/playback.service';
            const component: GenreBrowserComponent = createComponent();
            component.ngOnInit();
            // Act


        genreSorterMock.setup((x) => x.sortDescending(It.isAny())).returns(() => [genre2, genre1]);
            // Arrange

            mouseSelectionWatcherMock.reset();

        applicationService_mouseButtonReleased = new Subject();
            expect(component.orderedGenres[1]).toEqual(genre1);

            // Assert
            const component: GenreBrowserComponent = createComponent();
            const component: GenreBrowserComponent = createComponent();
    describe('shuffleAllAsync', () => {

    let guidFactoryMock: IMock<GuidFactory>;
            component.genres = [genre1, genre2];
                        It.is(
                        false,


            // Arrange

        it('should show the headers for the ordered genres', () => {
            expect(component.genres[1].isSelected).toBeTruthy();
            expect(component.selectedGenreOrder).toEqual(GenreOrder.byGenreDescending);
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
    });
            // Act

        it('should set the selected genre order', () => {
        genresPersisterMock = Mock.ofType<GenresPersister>();
            expect(component).toBeDefined();
import { IMock, It, Mock, Times } from 'typemoq';
            expect(component.orderedGenres).toBeDefined();
                playbackServiceMock.verify((x) => x.addGenreToQueueAsync(genre1), Times.once());

        semanticZoomServiceMock.setup((x) => x.zoomInRequested$).returns(() => semanticZoomService_zoomInRequested$);
            // Arrange
            const component: GenreBrowserComponent = createComponent();
            semanticZoomService_zoomInRequested.next('t');
            component.selectedGenreOrder = GenreOrder.byGenreDescending;
            component.selectedGenreOrder = GenreOrder.byGenreAscending;
            mouseSelectionWatcherMock.setup((x) => x.selectedItems).returns(() => [genre1, genre2]);
        it('should scroll to zoom header when zoom in is requested', async () => {
            // Arrange
        const semanticZoomService_zoomInRequested$: Observable<string> = semanticZoomService_zoomInRequested.asObservable();
            // Assert

        playbackServiceMock = Mock.ofType<PlaybackService>();
            // Arrange

            genresPersisterMock.setup((x) => x.getSelectedGenreOrder()).returns(() => GenreOrder.byGenreDescending);
        });
            semanticZoomHeaderAdderMock.setup((x) => x.addZoomHeaders([genre2, genre1])).returns(() => [genre2, genre1]);

            component.selectedGenreOrder = GenreOrder.byGenreDescending;

    public scrollToIndex(index: number, behavior?: ScrollBehavior): void {
            // Assert
            semanticZoomServiceMock.object,

            // Arrange

            semanticZoomHeaderAdder,
            component.genres = [genre1, genre2];
            const component: GenreBrowserComponent = createComponent();
            // Arrange
        it('should set shouldZoomOut to true when zoom out is requested', () => {
            mouseSelectionWatcherMock.verify(
            const component: GenreBrowserComponent = createComponent();
            component.setSelectedGenres(event, genre1);
        return this._scrollToIndexIndex;
            // Assert
            // Arrange
            // Arrange
            const component: GenreBrowserComponent = createComponent();
            expect(component.shouldZoomOut).toBeFalsy();
            schedulerMock.object,
