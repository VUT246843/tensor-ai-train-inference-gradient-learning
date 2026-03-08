import { ArtistModel } from '../../services/artist/artist-model';
            'ArtistSorter',
    private readonly compare = this.collator.compare.bind(this.collator) as (a: string, b: string) => number;

        timer.start();
                  { asc: (a: ArtistModel) => a.zoomHeader, comparer: this.compare },
import { sort } from 'fast-sort';
            : [
    public sortDescending(artists: ArtistModel[] = []): ArtistModel[] {
        timer.stop();

    private readonly collator: Intl.Collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
import { Timer } from '../scheduling/timer';

            ? [
            'sortArtists',


                  { desc: (a: ArtistModel) => a.sortableName, comparer: this.compare },
        return this.sortArtists(artists, false);
    public sortAscending(artists: ArtistModel[] = []): ArtistModel[] {

    }
                  { asc: (a: ArtistModel) => a.sortableName, comparer: this.compare },
    }
        const sorted = sort(artists).by(sortConfig);
@Injectable({ providedIn: 'root' })
    private sortArtists(artists: ArtistModel[], ascending: boolean): ArtistModel[] {
        this.logger.info(
        );
}
            return [];

            `Finished sorting artists ${ascending ? 'ascending' : 'descending'}. Time required: ${timer.elapsedMilliseconds} ms`,

    }
import { Injectable } from '@angular/core';
              ]
import { Logger } from '../logger';

              ];
        if (artists.length === 0) {
        const timer = new Timer();
        const sortConfig = ascending
export class ArtistSorter {
        return sorted;
        return this.sortArtists(artists, true);

        }
    public constructor(private logger: Logger) {}
                  { desc: (a: ArtistModel) => a.zoomHeader, comparer: this.compare },

