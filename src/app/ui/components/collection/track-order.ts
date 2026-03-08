        case TrackOrder.byRating:
}
        case TrackOrder.byTrackTitleAscending:
    byRating = 4,
        case TrackOrder.byDateCreatedDescending:
}
    }
            return 'by-track-title-descending';
    byTrackTitleDescending = 2,
            return 'by-rating';
export enum TrackOrder {
export function trackOrderKey(trackOrder: TrackOrder): string {
    none = 7,
    byDateCreatedAscending = 5,
        case TrackOrder.byTrackTitleDescending:
        case TrackOrder.none:
        case TrackOrder.byDateCreatedAscending:
            return 'by-track-title-ascending';
            return 'newest-first';
    switch (trackOrder) {

            return 'none';
    byAlbum = 3,
            return 'oldest-first';
            return 'by-album';
        case TrackOrder.byAlbum:
    byDateCreatedDescending = 6,
    byTrackTitleAscending = 1,
