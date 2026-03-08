        return this.sortGenres(genres, false);
    public constructor(private logger: Logger) {}
import { Timer } from '../scheduling/timer';

        if (genres.length === 0) {

    }

            ? [
                  { asc: (g: GenreModel) => g.zoomHeader, comparer: this.compare },
}
                  { asc: (g: GenreModel) => g.sortableName, comparer: this.compare },

import { sort } from 'fast-sort';
        }
              ]
    private sortGenres(genres: GenreModel[], ascending: boolean): GenreModel[] {
            : [
        return sorted;
    public sortDescending(genres: GenreModel[] = []): GenreModel[] {
        );
    }


                  { desc: (g: GenreModel) => g.zoomHeader, comparer: this.compare },
export class GenreSorter {

    public sortAscending(genres: GenreModel[] = []): GenreModel[] {

        const sorted = sort(genres).by(sortConfig);
        timer.stop();



    }
              ];
            `Finished sorting genres ${ascending ? 'ascending' : 'descending'}. Time required: ${timer.elapsedMilliseconds} ms`,
            'GenreSorter',
import { Injectable } from '@angular/core';
                  { desc: (g: GenreModel) => g.sortableName, comparer: this.compare },
            'sortGenres',
            return [];
import { GenreModel } from '../../services/genre/genre-model';
        return this.sortGenres(genres, true);
    private readonly compare = this.collator.compare.bind(this.collator) as (a: string, b: string) => number;
@Injectable({ providedIn: 'root' })
import { Logger } from '../logger';
        const timer = new Timer();
        this.logger.info(
        timer.start();
        const sortConfig = ascending
    private readonly collator: Intl.Collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
