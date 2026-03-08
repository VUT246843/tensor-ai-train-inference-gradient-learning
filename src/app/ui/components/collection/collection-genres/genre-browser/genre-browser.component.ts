        private logger: Logger,

        public contextMenuOpener: ContextMenuOpener,
                'GenreBrowserComponent',
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
            }),
    }
        const timer = new Timer();
                PromiseUtils.noAwait(this.scrollToZoomHeaderAsync(text));

        }
                    orderedGenres = this.genreSorter.sortAscending(this.genres);
                `Finished ordering genres. Time required: ${timer.elapsedMilliseconds} ms`,
    public async onShuffleAndPlayAsync(genre: GenreModel): Promise<void> {
        }
            }),
        this.playbackService.forceShuffled();
        private semanticZoomService: SemanticZoomServiceBase,
export class GenreBrowserComponent implements OnInit, OnDestroy {
        this.genresPersister.setSelectedGenreOrder(this.selectedGenreOrder);

    public constructor(
    public applyGenreOrder = (genreOrder: GenreOrder): void => {
    }
        // When the component is first rendered, it happens that genresPersister is undefined.
        let orderedGenres: GenreModel[] = [];
        }
        const selectedGenres: GenreModel[] = this.genresPersister.getSelectedGenres(this.genres);
            return;

        private semanticZoomHeaderAdder: SemanticZoomHeaderAdder,
                    orderedGenres = this.genreSorter.sortDescending(this.genres);
        } catch (e: unknown) {
        this.shouldZoomOut = false;
    }


        private applicationService: ApplicationServiceBase,
    public readonly genreOrders: GenreOrder[] = Object.values(GenreOrder).filter((x): x is GenreOrder => typeof x === 'number');

    }
    public orderedGenres: GenreModel[] = [];
                case GenreOrder.byGenreDescending:
    }

        return this._genresPersister;
                }
    styleUrls: ['./genre-browser.component.scss'],
    }
                'orderGenres',
    }
                this.shouldZoomOut = false;
    }
            this.genresPersister.setSelectedGenres(this.mouseSelectionWatcher.selectedItems as GenreModel[]);
import { GenreModel } from '../../../../../services/genre/genre-model';
    public set genresPersister(v: GenresPersister) {

import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

        timer.start();
        this.mouseSelectionWatcher.initialize(this.genres, false);

    @ViewChild('genreContextMenuAnchor', { read: MatMenuTrigger, static: false })
import { GenreOrder, genreOrderKey } from './genre-order';
        this.subscription.add(
        this.subscription.add(

            this.viewPort.scrollToIndex(selectedIndex, 'smooth');

import { AddToPlaylistMenu } from '../../../add-to-playlist-menu';

@Component({
        public playbackService: PlaybackService,


            orderedGenres = this.semanticZoomHeaderAdder.addZoomHeaders(orderedGenres) as GenreModel[];
}
    private subscription: Subscription = new Subscription();
    host: { style: 'display: block' },
import { SemanticZoomHeaderAdder } from '../../../../../common/semantic-zoom-header-adder';
        if (selectedIndex > -1) {
    public ngOnDestroy(): void {
        public trackService: TrackServiceBase,
    public onGenreContextMenu(event: MouseEvent, genre: GenreModel): void {
        if (selectedGenres == undefined) {
import { GenresPersister } from '../genres-persister';
            return;
import { ApplicationServiceBase } from '../../../../../services/application/application.service.base';
    };
    public get genresPersister(): GenresPersister {
    private applySelectedGenres(): void {
    public async shuffleAllAsync(): Promise<void> {
    }
        if (this.genresPersister != undefined) {
        public addToPlaylistMenu: AddToPlaylistMenu,
            this.semanticZoomService.zoomOutRequested$.subscribe(() => {
    selector: 'app-genre-browser',
    public get genres(): GenreModel[] {


        this.playbackService.forceShuffled();
    public setSelectedGenres(event: MouseEvent, genreToSelect: GenreModel): void {
        for (const selectedGenre of selectedGenres) {

                case GenreOrder.byGenreAscending:
    @Input()

    private _genres: GenreModel[] = [];
        this.subscription.add(
        return this._genres;

        await this.playbackService.addGenreToQueueAsync(genre);
        this.orderGenres();
})
    public readonly genreOrderKey = genreOrderKey;
        await this.scheduler.sleepAsync(Constants.semanticZoomInDelayMilliseconds);
import { SchedulerBase } from '../../../../../common/scheduling/scheduler.base';


        }
    public selectedGenreOrder: GenreOrder;
            }
import { Timer } from '../../../../../common/scheduling/timer';


        );
        this.selectedGenreOrder = genreOrder;


        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);
        private scheduler: SchedulerBase,
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
        if (!genreToSelect.isZoomHeader) {
    }
                default: {
                    break;
    public genreContextMenu: MatMenuTrigger;
import { Logger } from '../../../../../common/logger';
    public ngOnInit(): void {
import { Constants } from '../../../../../common/application/constants';

            this.logger.error(e, 'Could not order genres', 'GenreBrowserComponent', 'orderGenres');
    }
    }
        this._genres = v;
import { PlaybackService } from '../../../../../services/playback/playback.service';
            switch (this.selectedGenreOrder) {
import { Subscription } from 'rxjs';

            timer.stop();
        public mouseSelectionWatcher: MouseSelectionWatcher,
    }
            selectedGenre.isSelected = true;
        this.selectedGenreOrder = this.genresPersister.getSelectedGenreOrder();

            }),
import { MatMenuTrigger } from '@angular/material/menu';
    public set genres(v: GenreModel[]) {


            this.logger.info(
                this.shouldZoomOut = true;
    templateUrl: './genre-browser.component.html',
        const selectedIndex = this.orderedGenres.findIndex((elem) => elem.zoomHeader === text && elem.isZoomHeader);
        if (genre == undefined) {
    @ViewChild(CdkVirtualScrollViewport) public viewPort: CdkVirtualScrollViewport;
        }
        );
        const tracks: TrackModels = this.trackService.getVisibleTracks();
        await this.playbackService.enqueueAndPlayGenreAsync(genre);
        try {
    public async onAddToQueueAsync(genre: GenreModel): Promise<void> {
        );
    private async scrollToZoomHeaderAsync(text: string): Promise<void> {
    public shouldZoomOut: boolean = false;
import { PromiseUtils } from '../../../../../common/utils/promise-utils';
        this.contextMenuOpener.open(this.genreContextMenu, event, genre);
    ) {}


    private orderGenres(): void {
        this._genresPersister = v;
import { ContextMenuOpener } from '../../../context-menu-opener';
                    break;
import { GenreSorter } from '../../../../../common/sorting/genre-sorter';

                    orderedGenres = this.genreSorter.sortAscending(this.genres);
import { TrackServiceBase } from '../../../../../services/track/track.service.base';
            this.applicationService.mouseButtonReleased$.subscribe(() => {
    private _genresPersister: GenresPersister;
                    break;
            this.semanticZoomService.zoomInRequested$.subscribe((text: string) => {
    }
    @Input()
            this.orderGenres();
        }

        this.orderGenres();
        this.orderedGenres = [...orderedGenres];
            this.mouseSelectionWatcher.setSelectedItems(event, genreToSelect);
            );

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
            this.applySelectedGenres();

        private genreSorter: GenreSorter,
    providers: [MouseSelectionWatcher],
        this.subscription.unsubscribe();
import { TrackModels } from '../../../../../services/track/track-models';
        }
