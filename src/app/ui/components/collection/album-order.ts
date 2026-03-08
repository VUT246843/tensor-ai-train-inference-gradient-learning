    byAlbumArtist = 5,
            return 'by-album-title-descending';
export enum AlbumOrder {
            return 'by-album-artist';
    }
        case AlbumOrder.byYearAscending:
}
            return 'random';
    byAlbumTitleDescending = 2,
    switch (albumOrder) {
    random = 9,
    byDateCreated = 4,
        case AlbumOrder.byAlbumTitleAscending:

            return 'by-album-title-ascending';
        case AlbumOrder.byAlbumTitleDescending:
            return 'by-year-descending';
    byLastPlayed = 8,
export function albumOrderKey(albumOrder: AlbumOrder): string {
            return 'by-date-added';
    byDateAdded = 3,
        case AlbumOrder.byYearDescending:
            return 'by-last-played';
        case AlbumOrder.byDateAdded:
        case AlbumOrder.byDateCreated:
    byYearAscending = 6,
            return 'by-year-ascending';
            return 'by-date-created';
}
        case AlbumOrder.byLastPlayed:
        case AlbumOrder.byAlbumArtist:
        case AlbumOrder.random:
    byYearDescending = 7,
    byAlbumTitleAscending = 1,
