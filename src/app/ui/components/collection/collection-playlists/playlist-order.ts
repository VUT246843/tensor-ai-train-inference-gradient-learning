        case PlaylistOrder.byPlaylistNameDescending:
        case PlaylistOrder.byPlaylistNameAscending:
    byPlaylistNameDescending = 2,
    byPlaylistNameAscending = 1,
export function playlistOrderKey(playlistOrder: PlaylistOrder): string {
            return 'by-playlist-name-ascending';
export enum PlaylistOrder {

}
}
            return 'by-playlist-name-descending';
    switch (playlistOrder) {
    }
