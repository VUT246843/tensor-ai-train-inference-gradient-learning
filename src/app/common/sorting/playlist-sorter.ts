
                desc: (p) => p.name.toLowerCase(),
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
            'sortAscending',
        ]);
        const sorted: PlaylistModel[] = sort(playlists!).by([
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
        const timer = new Timer();

            'sortDescending',

        const sorted: PlaylistModel[] = sort(playlists!).by([
                asc: (p) => p.name.toLowerCase(),
            return [];
    }
        return sorted;
            {
    public sortAscending(playlists: PlaylistModel[] | undefined): PlaylistModel[] {

        timer.start();
        if (playlists == undefined) {

        return sorted;
        );


        timer.start();
    }

        ]);
            `Finished sorting playlists descending. Time required: ${timer.elapsedMilliseconds} ms`,
            },
        }
﻿import { Injectable } from '@angular/core';



import { Logger } from '../logger';
import { Timer } from '../scheduling/timer';
        );
import { sort } from 'fast-sort';
            'PlaylistSorter',
        this.logger.info(
        const timer = new Timer();
            {
            'PlaylistSorter',
}
        }
@Injectable({ providedIn: 'root' })
import { PlaylistModel } from '../../services/playlist/playlist-model';
        timer.stop();
            `Finished sorting playlists ascending. Time required: ${timer.elapsedMilliseconds} ms`,
export class PlaylistSorter {
            },
    public constructor(private logger: Logger) {}
    public sortDescending(playlists: PlaylistModel[] | undefined): PlaylistModel[] {
        this.logger.info(

            return [];

        timer.stop();
        if (playlists == undefined) {
