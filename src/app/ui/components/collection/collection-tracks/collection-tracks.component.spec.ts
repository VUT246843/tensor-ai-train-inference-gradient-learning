

import { Logger } from '../../../../common/logger';
        });
            // Act
import { SettingsMock } from '../../../../testing/settings-mock';
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());

        });
            // Act
            const component: CollectionTracksComponent = createComponent();
        searchServiceMock = Mock.ofType<SearchServiceBase>();
    });
            trackServiceMock.object,

    let loggerMock: IMock<Logger>;



        it('should define tracks as empty', () => {
            const component: CollectionTracksComponent = createComponent();

            expect(component.tracks.tracks[1]).toEqual(track2);
            expect(component.tracks.tracks.length).toEqual(2);

            // Assert
            const component: CollectionTracksComponent = createComponent();

        collectionServiceMock.setup((x) => x.collectionChanged$).returns(() => collectionChangedMock$);
        collectionChangedMock$ = collectionChangedMock.asObservable();
            // Act
import { TrackModels } from '../../../../services/track/track-models';
import { Scheduler } from '../../../../common/scheduling/scheduler';

            // Arrange

    function createTrackModel(path: string): TrackModel {
        loggerMock = Mock.ofType<Logger>();
        });
        it('should clear the tracks', () => {
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            expect(component.tracks.tracks.length).toEqual(0);
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            const trackModels: TrackModels = createTrackModels([track1, track2]);
            // Act
            loggerMock.object,
import { CollectionTracksComponent } from './collection-tracks.component';
            // Arrange
        collectionChangedMock = new Subject();

            await flushPromises();
describe('CollectionTracksComponent', () => {
            expect(component.tracks.tracks[1]).toEqual(track2);

    describe('constructor', () => {
            const track1: TrackModel = createTrackModel('path1');
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
            const track2: TrackModel = createTrackModel('path2');
            schedulerMock.object,
        });
import { Observable, Subject } from 'rxjs';
            // Assert
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
    let collectionChangedMock: Subject<void>;
    }
            expect(component).toBeDefined();
            // Arrange
    }
            // Assert
        settingsMock = new SettingsMock();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        it('should create', () => {
            const component: CollectionTracksComponent = createComponent();
            expect(component.tracks.tracks[0]).toEqual(track1);

            // Act

        const track: Track = new Track(path);
        it('should get all tracks if the collection has changed', async () => {
    const flushPromises = () => new Promise(process.nextTick);
            await component.ngOnInit();
import { IMock, Mock, Times } from 'typemoq';
            // Assert
    describe('ngOnDestroy', () => {


    let searchServiceMock: IMock<SearchServiceBase>;
        dateTimeMock = Mock.ofType<DateTime>();
    });
            trackServiceMock.reset();
        trackServiceMock = Mock.ofType<TrackServiceBase>();
            const trackModels: TrackModels = createTrackModels([track]);

            // Act

            expect(component.tracks.tracks.length).toEqual(2);
            trackModels.addTrack(track);
        });
            // Arrange
import { Track } from '../../../../data/entities/track';
        for (const track of tracks) {
    let settingsMock: any;
    let schedulerMock: IMock<Scheduler>;

    let collectionServiceMock: IMock<CollectionServiceBase>;


            component.ngOnDestroy();

    let dateTimeMock: IMock<DateTime>;
            expect(component.tracks.tracks.length).toEqual(0);
            trackServiceMock.reset();
            await component.ngOnInit();

        it('should get all tracks', async () => {
import { SearchServiceBase } from '../../../../services/search/search.service.base';
            const component: CollectionTracksComponent = createComponent();
            const track1: TrackModel = createTrackModel('path1');
            searchServiceMock.object,
    });
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        return component;

    });


            collectionServiceMock.object,
        return trackModel;

import { TrackModel } from '../../../../services/track/track-model';
            expect(component.searchService).toBeDefined();
            // Assert
    }
            // Arrange
            trackServiceMock.setup((x) => x.getVisibleTracks()).returns(() => trackModels);
    let collectionChangedMock$: Observable<void>;
            collectionChangedMock.next();
            expect(component.tracks.tracks[0]).toEqual(track1);
        );

        schedulerMock = Mock.ofType<Scheduler>();
            trackServiceMock.verify((x) => x.getVisibleTracks(), Times.once());
        });
        collectionServiceMock = Mock.ofType<CollectionServiceBase>();
});
        const trackModels: TrackModels = new TrackModels();
        it('should define searchService', () => {
        const component: CollectionTracksComponent = new CollectionTracksComponent(
    beforeEach(() => {
    describe('ngOnInit', () => {
    function createComponent(): CollectionTracksComponent {

import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    let trackServiceMock: IMock<TrackServiceBase>;
            const component: CollectionTracksComponent = createComponent();
            // Assert

            component.tracks = trackModels;

        const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
    function createTrackModels(tracks: TrackModel[]): TrackModels {
            const track: TrackModel = createTrackModel('path1');
        return trackModels;

            const track2: TrackModel = createTrackModel('path2');
        }
import { DateTime } from '../../../../common/date-time';
            // Arrange
