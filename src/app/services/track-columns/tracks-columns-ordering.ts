        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
            return tracksToOrder.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1));
        }
        }

    }
            return tracksToOrder.sort((a, b) => (a.playCount > b.playCount ? 1 : -1));
    public getTracksOrderedByRating(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
    }
    public getTracksOrderedByAlbum(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
            return tracksToOrder.sort((a, b) => (a.rating > b.rating ? 1 : -1));
                return a.number > b.number ? 1 : -1;
            return tracksToOrder.sort((a, b) => (a.year < b.year ? 1 : -1));
            return tracksToOrder.sort((a, b) => (a.durationInMilliseconds > b.durationInMilliseconds ? 1 : -1));
            return tracksToOrder.sort((a, b) => (a.sortableArtists > b.sortableArtists ? 1 : -1));
    }
            return tracksToOrder.sort((a, b) => (a.number < b.number ? 1 : -1));
    public getTracksOrderedByYear(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
    public getTracksOrderedByTrackNumber(
        }


            if (a.sortableAlbumTitle === b.sortableAlbumTitle && a.discNumber === b.discNumber) {

    }

        }

    ): TrackModel[] {
            return tracksToOrder.sort((a, b) => (a.sortableArtists < b.sortableArtists ? 1 : -1));
        } else {
        tracksColumnsOrderDirection: TracksColumnsOrderDirection,
            return tracksToOrder.sort((a, b) => (a.sortableTitle < b.sortableTitle ? 1 : -1));
        }
            }
            return tracksToOrder.sort((a, b) => (a.skipCount < b.skipCount ? 1 : -1));
        tracksToOrder: TrackModel[],
        });
    }
    public getTracksOrderedByArtists(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
        tracksColumnsOrderDirection: TracksColumnsOrderDirection,
            return tracksToOrder.sort((a, b) => (a.sortableGenres < b.sortableGenres ? 1 : -1));
    ): TrackModel[] {
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
            return tracksToOrder.sort((a, b) => (a.sortableTitle > b.sortableTitle ? 1 : -1));
import { TrackModel } from '../track/track-model';

        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
            } else {
            return tracksToOrder.sort((a, b) => (a.dateLastPlayed < b.dateLastPlayed ? 1 : -1));
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
@Injectable()
    public getTracksOrderedByDateAdded(
        tracksColumnsOrderDirection: TracksColumnsOrderDirection,

        }

            if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        } else {
                return a.sortableAlbumTitle < b.sortableAlbumTitle ? 1 : -1;
        }
    public getTracksOrderedByGenres(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
        tracksColumnsOrderDirection: TracksColumnsOrderDirection,
    ): TrackModel[] {
        tracksToOrder: TrackModel[],
            return tracksToOrder.sort((a, b) => (a.dateAdded < b.dateAdded ? 1 : -1));
            return tracksToOrder.sort((a, b) => (a.rating < b.rating ? 1 : -1));
export class TracksColumnsOrdering {

    }
        tracksToOrder: TrackModel[],
            }

        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        }
import { TracksColumnsOrderDirection } from './tracks-columns-order-direction';
    }
import { Injectable } from '@angular/core';
            return tracksToOrder.sort((a, b) => (a.skipCount > b.skipCount ? 1 : -1));
    }
        tracksToOrder: TrackModel[],
                return a.sortableAlbumTitle > b.sortableAlbumTitle ? 1 : -1;
            return tracksToOrder.sort((a, b) => (a.year > b.year ? 1 : -1));
        } else {
    }
        tracksToOrder: TrackModel[],
    public getTracksOrderedByTitle(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
    ): TrackModel[] {
        } else {
    }
        }
            return tracksToOrder.sort((a, b) => (a.durationInMilliseconds < b.durationInMilliseconds ? 1 : -1));
            return tracksToOrder.sort((a, b) => (a.number > b.number ? 1 : -1));
            return tracksToOrder.sort((a, b) => (a.dateLastPlayed > b.dateLastPlayed ? 1 : -1));


        } else {
        tracksColumnsOrderDirection: TracksColumnsOrderDirection,
}
    public getTracksOrderedByDuration(tracksToOrder: TrackModel[], tracksColumnsOrderDirection: TracksColumnsOrderDirection): TrackModel[] {
        return tracksToOrder.sort((a, b) => {
            return tracksToOrder.sort((a, b) => (a.playCount < b.playCount ? 1 : -1));
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        } else {
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        } else {
    }
        }
            return tracksToOrder.sort((a, b) => (a.sortableGenres > b.sortableGenres ? 1 : -1));
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
    public getTracksOrderedByDateLastPlayed(
        } else {
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
    ): TrackModel[] {
        } else {
    }
    public getTracksOrderedBySkipCount(
        } else {
        } else {
    public getTracksOrderedByPlayCount(
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        if (tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        }
