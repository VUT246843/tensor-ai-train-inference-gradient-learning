            case AlbumOrder.byAlbumTitleAscending:
            case AlbumOrder.byAlbumArtist:
                albumRows[albumRows.length - 1].albums.push(album);
        let lastYear: number = -1;
        if (albums.length === 0) {
        const numberOfAlbumsPerRow: number = this.albumSpaceCalculator.calculateNumberOfItemsPerRow(
                if (albumRows.length === 0 || albumRows[albumRows.length - 1].albums.length === numberOfAlbumsPerRow) {

                    albumRows[albumRows.length - 1].albums.length === numberOfAlbumsPerRow ||

                break;
                }

        }
                }
                break;
            default: {
                album.showYear = false;
                break;
import { Shuffler } from '../../../../common/shuffler';
            case AlbumOrder.byYearDescending:
                albumRows[albumRows.length - 1].albums.push(album);
        const alreadyUsedYearHeaders: string[] = [];
    }
            }
@Injectable()
                sortedAlbums = this.albumSorter.sortByYearDescending(unsortedAlbums);
                    albumRows.push(new AlbumRow());
            case AlbumOrder.random:
                if (albumRows[albumRows.length - 1].albums[0].yearHeader.length === 0) {

    public constructor(
                album.showYear = true;
            availableWidthInPixels,

                break;
                    albumRows.push(new AlbumRow());

        return sortedAlbums;
                if (!alreadyUsedYearHeaders.includes(proposedHeader)) {
            return albumRows;
    }
                break;
import { AlbumOrder } from '../album-order';
export class AlbumRowsGetter {


import { YearFormatter } from './year-formatter';
            case AlbumOrder.byLastPlayed:
                sortedAlbums = this.shuffler.shuffle(unsortedAlbums);
        private albumSorter: AlbumSorter,
                    if (album.year !== lastYear) {
                    album.yearHeader = proposedHeader;
                    album.showYear = false;
                ) {
                }
        for (const album of sortedAlbums) {
            case AlbumOrder.byAlbumTitleDescending:
                if (
                        lastYear = album.year;
                sortedAlbums = this.albumSorter.sortByAlbumTitleAscending(unsortedAlbums);
        private shuffler: Shuffler,
import { AlbumModel } from '../../../../services/album/album-model';
                break;
        availableWidthInPixels: number,
import { ItemSpaceCalculator } from '../item-space-calculator';
            }
import { AlbumSorter } from '../../../../common/sorting/album-sorter';
    public getAlbumRows(


                sortedAlbums = this.albumSorter.sortByYearAscending(unsortedAlbums);
                    album.yearHeader = '';
                }
        albumOrder: AlbumOrder,
import { Injectable } from '@angular/core';
            Constants.albumSizeInPixels,
}

    ) {}
                sortedAlbums = this.albumSorter.sortByDateCreated(unsortedAlbums);
        }
                } else {
import { Constants } from '../../../../common/application/constants';
                    alreadyUsedYearHeaders.push(proposedHeader);
        switch (albumOrder) {
    ): AlbumRow[] {
        private albumSpaceCalculator: ItemSpaceCalculator,

                break;
            } else {
                const proposedHeader: string = YearFormatter.formatYear(album.year);
        const albumRows: AlbumRow[] = [];

                sortedAlbums = this.albumSorter.sortByDateLastPlayed(unsortedAlbums);
        return albumRows;
        let sortedAlbums: AlbumModel[] = [];
                sortedAlbums = this.albumSorter.sortByDateAdded(unsortedAlbums);
                break;

                    albumRows.length === 0 ||
            case AlbumOrder.byYearAscending:

                sortedAlbums = this.albumSorter.sortByAlbumArtist(unsortedAlbums);
        albums: AlbumModel[],
                sortedAlbums = this.albumSorter.sortByAlbumTitleAscending(unsortedAlbums);
        );
                    album.year !== lastYear
                    }
                break;
                break;
            case AlbumOrder.byDateAdded:

import { AlbumRow } from './album-row';
            case AlbumOrder.byDateCreated:
        const sortedAlbums: AlbumModel[] = this.getSortedAlbums(albums, albumOrder);
        }
            if ((albumOrder === AlbumOrder.byYearAscending || albumOrder === AlbumOrder.byYearDescending) && !useCompactYearView) {

                sortedAlbums = this.albumSorter.sortByAlbumTitleDescending(unsortedAlbums);
        useCompactYearView: boolean,

    private getSortedAlbums(unsortedAlbums: AlbumModel[], albumOrder: AlbumOrder): AlbumModel[] {
