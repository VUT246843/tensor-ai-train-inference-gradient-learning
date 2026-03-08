    private getSortedPlaylists(unsortedPlaylists: PlaylistModel[], playlistOrder: PlaylistOrder): PlaylistModel[] {
            case PlaylistOrder.byPlaylistNameDescending:
import { PlaylistRow } from '../playlist-browser/playlist-row';
    }
import { PlaylistSorter } from '../../../../../common/sorting/playlist-sorter';
            return playlistRows;
        }
            case PlaylistOrder.byPlaylistNameAscending:
        for (const playlist of sortedPlaylists) {
@Injectable()
                break;
    }
                break;
                playlistRows.push(new PlaylistRow());
        }
import { ItemSpaceCalculator } from '../../item-space-calculator';
        if (playlists.length === 0) {
        if (playlists == undefined) {
        private playlistSpaceCalculator: ItemSpaceCalculator,
import { PlaylistOrder } from '../playlist-order';

            return playlistRows;
            availableWidthInPixels,

        switch (playlistOrder) {
export class PlaylistRowsGetter {
            if (playlistRows.length === 0 || playlistRows[playlistRows.length - 1].playlists.length === numberOfPlaylistsPerRow) {
import { PlaylistModel } from '../../../../../services/playlist/playlist-model';
        return sortedPlaylists;


import { Constants } from '../../../../../common/application/constants';
                sortedPlaylists = this.playlistSorter.sortAscending(unsortedPlaylists);
        );
import { Injectable } from '@angular/core';
        private playlistSorter: PlaylistSorter,
        let sortedPlaylists: PlaylistModel[] = [];

                sortedPlaylists = this.playlistSorter.sortAscending(unsortedPlaylists);
        }

                break;
    public constructor(
            Constants.albumSizeInPixels,
}
            }


        }
        const sortedPlaylists: PlaylistModel[] = this.getSortedPlaylists(playlists, playlistOrder);
            }
    ) {}
        const numberOfPlaylistsPerRow: number = this.playlistSpaceCalculator.calculateNumberOfItemsPerRow(
            playlistRows[playlistRows.length - 1].playlists.push(playlist);
                sortedPlaylists = unsortedPlaylists.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
                sortedPlaylists = this.playlistSorter.sortDescending(unsortedPlaylists);
        return playlistRows;


            default: {

    public getPlaylistRows(availableWidthInPixels: number, playlists: PlaylistModel[], playlistOrder: PlaylistOrder): PlaylistRow[] {
        const playlistRows: PlaylistRow[] = [];

