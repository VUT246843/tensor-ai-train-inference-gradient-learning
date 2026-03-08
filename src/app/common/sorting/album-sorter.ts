    public constructor(private logger: Logger) {}

    }
                asc: (a) => a.albumTitle.toLowerCase(),
        if (albums == undefined) {
        );

        );

        const sorted: AlbumModel[] = sort(albums!).by([
        const sorted: AlbumModel[] = sort(albums).desc((a) => a.year);
        timer.start();
export class AlbumSorter {

        timer.stop();
            `Finished sorting albums by year ascending. Time required: ${timer.elapsedMilliseconds} ms`,
    public sortByDateAdded(albums: AlbumModel[] | undefined): AlbumModel[] {
        );

            'AlbumSorter',
        timer.start();
            'sortByDateCreated',
        timer.stop();


            return [];
            'AlbumSorter',

        timer.start();
        timer.start();
            `Finished sorting albums by date added. Time required: ${timer.elapsedMilliseconds} ms`,


        ]);

            'AlbumSorter',
import { AlbumModel } from '../../services/album/album-model';
            'sortByDateLastPlayed',
            `Finished sorting albums by year ascending. Time required: ${timer.elapsedMilliseconds} ms`,
        return sorted;
    public sortByYearAscending(albums: AlbumModel[] | undefined): AlbumModel[] {

            },
        );
        this.logger.info(
import { Timer } from '../scheduling/timer';
            'AlbumSorter',

    public sortByDateLastPlayed(albums: AlbumModel[] | undefined): AlbumModel[] {
            return [];
    public sortByYearDescending(albums: AlbumModel[] | undefined): AlbumModel[] {
        const timer = new Timer();
        if (albums == undefined) {
            return [];
            'sortByAlbumTitleAscending',
        return sorted;
    }
        timer.stop();
        const sorted: AlbumModel[] = sort(albums).asc((a) => a.year);
            `Finished sorting albums by date created. Time required: ${timer.elapsedMilliseconds} ms`,
        return sorted;
        if (albums == undefined) {

        );
        }
    }

    }
            'sortByAlbumTitleDescending',

        const timer = new Timer();
            {
        this.logger.info(

        const sorted: AlbumModel[] = sort(albums).desc((a) => a.dateAddedInTicks);
    public sortByAlbumTitleDescending(albums: AlbumModel[] | undefined): AlbumModel[] {
            `Finished sorting albums by title descending. Time required: ${timer.elapsedMilliseconds} ms`,
        const sorted: AlbumModel[] = sort(albums!).by([

                asc: (a) => a.albumArtist.toLowerCase(),

        timer.stop();
            'AlbumSorter',


        const timer = new Timer();

        this.logger.info(


        return sorted;

        }
        this.logger.info(
        timer.start();
        ]);
}
            'sortByYearAscending',


    public sortByAlbumArtist(albums: AlbumModel[] | undefined): AlbumModel[] {
        );
    public sortByDateCreated(albums: AlbumModel[] | undefined): AlbumModel[] {
@Injectable({ providedIn: 'root' })
        }
        }

        this.logger.info(
        this.logger.info(
            'AlbumSorter',

            'AlbumSorter',
    }

            return [];
            return [];
    }
        const sorted: AlbumModel[] = sort(albums).desc((a) => a.dateFileCreatedInTicks);
        const timer = new Timer();

            'sortByYearDescending',

                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
            },
            },
        if (albums == undefined) {
        if (albums == undefined) {
        timer.start();
        if (albums == undefined) {


import { sort } from 'fast-sort';
            'AlbumSorter',
            `Finished sorting albums by album artist. Time required: ${timer.elapsedMilliseconds} ms`,

            `Finished sorting albums by date last played. Time required: ${timer.elapsedMilliseconds} ms`,
            'sortByDateAdded',



        timer.start();
        const timer = new Timer();
            {
    }

        const timer = new Timer();
            {
import { Logger } from '../logger';

    }
        return sorted;
        timer.stop();
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
        const timer = new Timer();
        }
            'sortByAlbumArtist',
        }
        return sorted;
        ]);


        }
﻿import { Injectable } from '@angular/core';
        timer.stop();
        if (albums == undefined) {
        const sorted: AlbumModel[] = sort(albums).desc((a) => a.dateLastPlayedInTicks);
            return [];
            `Finished sorting albums by title ascending. Time required: ${timer.elapsedMilliseconds} ms`,
        this.logger.info(
        return sorted;

    public sortByAlbumTitleAscending(albums: AlbumModel[] | undefined): AlbumModel[] {
        timer.stop();
        this.logger.info(
        );
        timer.start();
        const timer = new Timer();
        }
        timer.stop();
        const sorted: AlbumModel[] = sort(albums!).by([
                comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
            return [];
        );

                desc: (a) => a.albumTitle.toLowerCase(),

        return sorted;
            return [];


        if (albums == undefined) {


