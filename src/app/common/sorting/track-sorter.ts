        timer.stop();
    }

                asc: (t) => t.sortableTitle,
            {
        const sorted = sort(tracks).by([{ desc: (t) => t.dateCreated }, { desc: (t) => t.number }]);
        timer.stop();
        );
    }
            `Finished sorting tracks by title ascending. Time required: ${timer.elapsedMilliseconds} ms`,
        const timer = new Timer();
        const timer = new Timer();
            {
        );



        );
            'sortByDateCreatedDescending',
            'TrackSorter',


        // Use track number as a secondary key to ensure stable ordering when dateCreated values are equal

            `Finished sorting tracks by date created ascending. Time required: ${timer.elapsedMilliseconds} ms`,
        this.logger.info(
            'sortByDateCreatedAscending',
        // Use track number as a secondary key to ensure stable ordering when dateCreated values are equal
                desc: (t) => t.sortableTitle,
        const sorted = sort(tracks).by([{ asc: (t) => t.dateCreated }, { asc: (t) => t.number }]);

        this.logger.info(`Finished sorting tracks by album. Time required: ${timer.elapsedMilliseconds} ms`, 'TrackSorter', 'sortByAlbum');

        );
            'sortByTitleAscending',

import { Timer } from '../scheduling/timer';
        timer.start();
        const sorted: TrackModel[] = sort(tracks).by([
        return sorted;
                asc: (t) => t.sortableAlbumProperties,

                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
import { Injectable } from '@angular/core';
        timer.stop();
            'TrackSorter',
        timer.stop();



            },
    }
        timer.start();

        ]);
    public sortByAlbum(tracks: TrackModel[]): TrackModel[] {
    public constructor(private logger: Logger) {}
@Injectable({ providedIn: 'root' })

    public sortByTitleAscending(tracks: TrackModel[]): TrackModel[] {


        ]);
        this.logger.info(
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
    }
        const timer = new Timer();

export class TrackSorter {
        return sorted;
        timer.stop();
            'TrackSorter',

}
import { Logger } from '../logger';
    }
            'TrackSorter',
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
        return sorted;
        const timer = new Timer();
        timer.start();

        ]);
        this.logger.info(
import { TrackModel } from '../../services/track/track-model';
        const sorted: TrackModel[] = sort(tracks).by([

        this.logger.info(
    public sortByDateCreatedAscending(tracks: TrackModel[]): TrackModel[] {
        timer.start();
        const timer = new Timer();
            `Finished sorting tracks by date created descending. Time required: ${timer.elapsedMilliseconds} ms`,
        return sorted;
    public sortByDateCreatedDescending(tracks: TrackModel[]): TrackModel[] {
        return sorted;
            },
            },
        const sorted: TrackModel[] = sort(tracks).by([
            {
import { sort } from 'fast-sort';
            'sortByTitleDescending',
        timer.start();


            `Finished sorting tracks by title descending. Time required: ${timer.elapsedMilliseconds} ms`,

    public sortByTitleDescending(tracks: TrackModel[]): TrackModel[] {

