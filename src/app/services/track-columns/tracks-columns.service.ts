                break;
                break;
        if (tracksColumnsVisibility.showRating) {
        this.tracksColumnsOrderChanged.next(newTracksColumnsOrder);
}
    private durationSettingsString: string = 'duration';
                    case this.dateLastPlayedSettingsString:
        }
export class TracksColumnsService implements TracksColumnsServiceBase {
    private ratingSettingsString: string = 'rating';
                    case this.artistsSettingsString:
        return tracksColumnsVisibility;
@Injectable()
        }
            case TracksColumnsOrderColumn.album:
                    break;
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.trackTitle;
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.trackNumber;
                        break;


                    case this.genresSettingsString:
            tracksPageVisibleColumns.push(this.dateAddedPlayedSettingsString);
                }
                break;
                    case this.albumSettingsString:
        }
                break;
        }
    public setTracksColumnsOrder(tracksColumnsOrderColumn: TracksColumnsOrderColumn): void {
                    break;
                    break;
            switch (tracksColumnsOrderFromSettingsParts[0]) {
                    break;
            }
        const tracksPageVisibleColumnsForSettings: string = tracksPageVisibleColumns.join(';');

        const tracksPageVisibleColumns: string[] = tracksPageVisibleColumnsFromSettings.split(';');

    private skipCountSettingsString: string = 'skipCount';
    }
            case TracksColumnsOrderDirection.descending:

            tracksPageVisibleColumns.push(this.genresSettingsString);
            case TracksColumnsOrderColumn.trackNumber:
        if (tracksColumnsOrderFromSettingsParts.length > 1) {

                tracksPageColumnsOrderForSettingsParts.push(this.trackTitleSettingsString);
        if (tracksPageVisibleColumns.length > 0) {
                tracksPageColumnsOrderForSettingsParts.push(this.yearSettingsString);
                tracksPageColumnsOrderForSettingsParts.push(this.dateAddedPlayedSettingsString);
            TracksColumnsOrderDirection.ascending,
                break;
                        break;
            case TracksColumnsOrderColumn.trackTitle:
                        break;
    private yearSettingsString: string = 'year';
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.duration;
        const currentTracksColumnsOrder: TracksColumnsOrder = this.getTracksColumnsOrder();
            tracksPageVisibleColumns.push(this.yearSettingsString);
        if (currentTracksColumnsOrder.tracksColumnsOrderDirection === TracksColumnsOrderDirection.ascending) {
        if (tracksColumnsVisibility.showArtists) {
        }
        switch (newTracksColumnsOrder.tracksColumnsOrderColumn) {

        if (tracksColumnsVisibility.showYear) {
                        break;
        if (tracksColumnsVisibility.showDateLastPlayed) {
        }
                break;

    private trackTitleSettingsString: string = 'trackTitle';
    private dateAddedPlayedSettingsString: string = 'dateAdded';
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.genres;
    private dateLastPlayedSettingsString: string = 'dateLastPlayed';
import { Observable, Subject } from 'rxjs';
        if (tracksColumnsVisibility.showPlayCount) {
                tracksPageColumnsOrderForSettingsParts.push(this.dateLastPlayedSettingsString);

                        break;
            case TracksColumnsOrderColumn.duration:
                        tracksColumnsVisibility.showTrackNumber = true;
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.artists;
    public tracksColumnsOrderChanged$: Observable<TracksColumnsOrder> = this.tracksColumnsOrderChanged.asObservable();
    }
                        tracksColumnsVisibility.showDuration = true;
        }
    public setTracksColumnsVisibility(tracksColumnsVisibility: TracksColumnsVisibility): void {
import { TracksColumnsOrderDirection } from './tracks-columns-order-direction';
                }
                switch (tracksPageVisibleColumn) {

                case this.trackTitleSettingsString:

                tracksPageColumnsOrderForSettingsParts.push(this.albumSettingsString);
    public getTracksColumnsOrder(): TracksColumnsOrder {
        const tracksColumnsOrderFromSettings: string = this.settings.tracksPageColumnsOrder;
        const tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
            tracksPageVisibleColumns.push(this.artistsSettingsString);
import { TracksColumnsVisibility } from './tracks-columns-visibility';
                case this.genresSettingsString:
            case TracksColumnsOrderColumn.dateAdded:
        }
            newTracksColumnsOrder.tracksColumnsOrderDirection = TracksColumnsOrderDirection.descending;

    private trackNumberSettingsString: string = 'trackNumber';
                    case this.skipCountSettingsString:
                    tracksColumnsOrder.tracksColumnsOrderDirection = TracksColumnsOrderDirection.ascending;

        );
        this.settings.tracksPageColumnsOrder = tracksPageColumnsOrderForSettings;
            tracksPageVisibleColumns.push(this.dateLastPlayedSettingsString);
                case this.playCountSettingsString:
    private tracksColumnsVisibilityChanged: Subject<TracksColumnsVisibility> = new Subject<TracksColumnsVisibility>();
            for (const tracksPageVisibleColumn of tracksPageVisibleColumns) {
    public getTracksColumnsVisibility(): TracksColumnsVisibility {
                case this.trackNumberSettingsString:


    public constructor(private settings: SettingsBase) {}
        const tracksColumnsOrderFromSettingsParts: string[] = tracksColumnsOrderFromSettings.split(';');
        const tracksColumnsOrder: TracksColumnsOrder = new TracksColumnsOrder(
    private albumSettingsString: string = 'album';
                tracksPageColumnsOrderForSettingsParts.push(this.artistsSettingsString);
        if (tracksColumnsVisibility.showDateAdded) {
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.dateAdded;
                case this.skipCountSettingsString:
                        tracksColumnsVisibility.showGenres = true;
    private playCountSettingsString: string = 'playCount';
    }
            default: {
                default: {
        }
import { TracksColumnsOrderColumn } from './tracks-columns-order-column';

                case this.artistsSettingsString:
                case this.ratingSettingsString:
    private descendingSettingsString: string = 'descending';

            tracksPageVisibleColumns.push(this.skipCountSettingsString);
import { Injectable } from '@angular/core';
                    break;
                        break;
            tracksPageVisibleColumns.push(this.playCountSettingsString);
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.playCount;
                break;

                break;
                tracksPageColumnsOrderForSettingsParts.push(this.skipCountSettingsString);
            case TracksColumnsOrderColumn.artists:
                        tracksColumnsVisibility.showAlbum = true;
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.none;
            }
                        tracksColumnsVisibility.showSkipCount = true;
        return tracksColumnsOrder;
            case TracksColumnsOrderColumn.skipCount:
            case TracksColumnsOrderColumn.rating:
        const tracksPageVisibleColumnsFromSettings: string = this.settings.tracksPageVisibleColumns;
                        break;
                default: {
                    case this.playCountSettingsString:
                    case this.ratingSettingsString:
            TracksColumnsOrderColumn.none,
                        tracksColumnsVisibility.showRating = true;
                tracksPageColumnsOrderForSettingsParts.push(this.ascendingSettingsString);
import { TracksColumnsServiceBase } from './tracks-columns.service.base';
                    tracksColumnsOrder.tracksColumnsOrderDirection = TracksColumnsOrderDirection.ascending;
    }
                tracksPageColumnsOrderForSettingsParts.push(this.trackNumberSettingsString);

        }
                break;
        if (tracksColumnsVisibility.showAlbum) {
        this.tracksColumnsVisibilityChanged.next(tracksColumnsVisibility);
        if (tracksColumnsVisibility.showDuration) {

                case this.durationSettingsString:
                        tracksColumnsVisibility.showDateLastPlayed = true;
        }
            case TracksColumnsOrderColumn.year:

                tracksPageColumnsOrderForSettingsParts.push(this.genresSettingsString);
                        break;
            }

                tracksPageColumnsOrderForSettingsParts.push(this.ascendingSettingsString);
                break;
                tracksPageColumnsOrderForSettingsParts.push(this.playCountSettingsString);
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.skipCount;
                    break;

                case this.yearSettingsString:
                    case this.yearSettingsString:
        }
                    case this.trackNumberSettingsString:

    private artistsSettingsString: string = 'artists';

import { SettingsBase } from '../../common/settings/settings.base';

        const newTracksColumnsOrder: TracksColumnsOrder = new TracksColumnsOrder(
                case this.dateAddedPlayedSettingsString:
            case TracksColumnsOrderColumn.genres:
        );
            tracksColumnsOrderColumn,
                case this.dateLastPlayedSettingsString:
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.dateLastPlayed;
            tracksPageVisibleColumns.push(this.albumSettingsString);
        this.settings.tracksPageVisibleColumns = tracksPageVisibleColumnsForSettings;
                    break;
        if (tracksColumnsVisibility.showSkipCount) {
                tracksPageColumnsOrderForSettingsParts.push(this.descendingSettingsString);
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.album;
    private tracksColumnsOrderChanged: Subject<TracksColumnsOrder> = new Subject<TracksColumnsOrder>();
                }
                break;

                        tracksColumnsVisibility.showPlayCount = true;
            tracksPageVisibleColumns.push(this.durationSettingsString);

                    break;
                        break;
                    break;
                        tracksColumnsVisibility.showDateAdded = true;
        const tracksPageVisibleColumns: string[] = [];
                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.rating;
    private ascendingSettingsString: string = 'ascending';
                tracksPageColumnsOrderForSettingsParts.push(this.ratingSettingsString);
            case TracksColumnsOrderColumn.playCount:

                    tracksColumnsOrder.tracksColumnsOrderColumn = TracksColumnsOrderColumn.year;
            case TracksColumnsOrderDirection.ascending:
        const tracksPageColumnsOrderForSettings: string = tracksPageColumnsOrderForSettingsParts.join(';');
                    break;
        if (tracksColumnsVisibility.showTrackNumber) {
                    tracksColumnsOrder.tracksColumnsOrderDirection = TracksColumnsOrderDirection.descending;

            TracksColumnsOrderDirection.ascending,
                        tracksColumnsVisibility.showArtists = true;
            }
    private genresSettingsString: string = 'genres';
                break;
            tracksPageVisibleColumns.push(this.ratingSettingsString);
            tracksPageVisibleColumns.push(this.trackNumberSettingsString);
                        break;
    public tracksColumnsVisibilityChanged$: Observable<TracksColumnsVisibility> = this.tracksColumnsVisibilityChanged.asObservable();
                    break;
                break;
                    case this.durationSettingsString:
import { TracksColumnsOrder } from './tracks-columns-order';
        }
                    case this.dateAddedPlayedSettingsString:


                break;
            case TracksColumnsOrderColumn.dateLastPlayed:
                break;
                case this.ascendingSettingsString:
                tracksPageColumnsOrderForSettingsParts.push(this.durationSettingsString);
                        break;
                    break;
                    break;
                break;
                case this.albumSettingsString:
                    break;
        const tracksPageColumnsOrderForSettingsParts: string[] = [];
        }
            switch (tracksColumnsOrderFromSettingsParts[1]) {

        if (tracksColumnsVisibility.showGenres) {
                        tracksColumnsVisibility.showYear = true;

                tracksPageColumnsOrderForSettingsParts.push(this.trackTitleSettingsString);
        }
        switch (newTracksColumnsOrder.tracksColumnsOrderDirection) {
            default: {
            }
                    break;
                    break;
        }

                case this.descendingSettingsString:
