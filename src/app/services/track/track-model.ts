
        this.track.playCount++;
    public get albumKey(): string {

        private dateTime: DateTime,

    public get sortableArtists(): string {

    }
    public get path(): string {

    }
    public get sortableGenres(): string {
    }
        }
        return StringUtils.getSortableString(this.genres, false);
    public get fileSizeInBytes(): number {
            return '';
    public get discCount(): number {
        const trackGenres: string[] = DataDelimiter.fromDelimitedString(this.track.genres);
    }
    }
        return nonEmptyArtists[0];
            return trackArtists.join(', ');
    }

    public get love(): number {

    public get dateAdded(): number {
    public get albumTitle(): string {
    public isPlaying: boolean = false;

        return this.track.playCount ?? 0;
    }


    }
        } else if (this.albumKeyIndex === '3') {

        if (StringUtils.isNullOrWhiteSpace(this.track.albumTitle)) {
    }
export class TrackModel implements ISelectable {
    }
        return trackArtists.filter((x) => !StringUtils.isNullOrWhiteSpace(x));




import { Constants } from '../../common/application/constants';
            return this.translatorService.get(Constants.unknownGenre);
        this.track.rating = v;



    public get rating(): number {
        this.track.trackTitle = v;


        if (commaSeparatedArtists.length === 0) {
        if (commaSeparatedGenres.length === 0) {
    public get sortableAlbumArtists(): string {

    }
        if (!DataDelimiter.isUnknownValue(trackArtists)) {
    public constructor(
        return this.translatorService.get(Constants.unknownArtist);

        return commaSeparatedGenres;
        return new TrackModel(this.track, this.dateTime, this.translatorService, this.albumKeyIndex);

        this.track.dateLastPlayed = this.dateTime.convertDateToTicks(new Date());
import { Track } from '../../data/entities/track';
        return this.track.albumTitle!;
    public set title(v: string) {
        this.track.skipCount++;
        }

        return this.track.skipCount ?? 0;
        }
        return this.track.year ?? 0;
        if (DataDelimiter.isUnknownValue(trackArtists)) {
            return albumArtists.join(', ');
        if (this.track.playCount == undefined) {
    public setTrack(track: Track): void {

import { DateTime } from '../../common/date-time';
        if (this.track.skipCount == undefined) {
    public get rawArtists(): string[] {
    }
    public get sortableTitle(): string {
        return this.track.fileName;
        }

        return StringUtils.getSortableString(`${this.discNumber}${this.albumKey}${this.number}`, false);

    }

    public showHeader: boolean = false;
        }
    public get sortableAlbumProperties(): string {
import { TranslatorServiceBase } from '../translator/translator.service.base';
    public get rawAlbumTitle(): string {
        const commaSeparatedGenres: string = CollectionUtils.toCommaSeparatedString(trackGenres);
    public get title(): string {
    }
        return StringUtils.getSortableString(this.title, false);
        return this.track.discNumber ?? 0;

            return '';
            return this.translatorService.get('unknown-album');
        return this.track.trackId;
    }
        this.track = track;

        return StringUtils.getSortableString(this.artists, false);

    }
    }
    public get genres(): string {
        const trackArtists: string[] = DataDelimiter.fromDelimitedString(this.track.artists);

    }

            return this.translatorService.get(Constants.unknownArtist);
        private translatorService: TranslatorServiceBase,
    }
        if (this.albumKeyIndex === '') {
    }
    public get number(): number {
        return this.track.duration ?? 0;
    }
    public increaseSkipCount(): void {


        return this.track.discCount ?? 0;

        }
        return this.track.path;
import { DataDelimiter } from '../../data/data-delimiter';
        }
        return this.track.dateAdded ?? 0;
    public playlistPath: string = '';
        return commaSeparatedArtists;
    }


    }
        }
            this.track.playCount = 0;

    public get albumArtists(): string {
    public get year(): number {
        if (!DataDelimiter.isUnknownValue(albumArtists)) {


        }
    }
    public get id(): number {
            return '';
        private track: Track,


            return this.translatorService.get(Constants.unknownArtist);
    public get skipCount(): number {
            return this.translatorService.get(Constants.unknownGenre);
    public get playCount(): number {
    public isSelected: boolean = false;

    public get durationInMilliseconds(): number {
        const trackArtists: string[] = DataDelimiter.fromDelimitedString(this.track.artists);
        const trackArtists: string[] = DataDelimiter.fromDelimitedString(this.track.artists);
    }
        if (StringUtils.isNullOrWhiteSpace(this.track.albumTitle)) {
    }
    }
        const albumArtists: string[] = DataDelimiter.fromDelimitedString(this.track.albumArtists);
    public increasePlayCountAndDateLastPlayed(): void {

        const nonEmptyArtists: string[] = this.rawArtists.filter((x) => !StringUtils.isNullOrWhiteSpace(x));
            return [];
        return this.track.albumKey ?? '';

        return this.track.dateLastPlayed ?? 0;
        }
    public set love(v: number) {
        private albumKeyIndex: string,
            return this.track.trackTitle!;

        }

import { CollectionUtils } from '../../common/utils/collections-utils';
    }
        }
        if (!StringUtils.isNullOrWhiteSpace(this.track.trackTitle)) {
        }




        }
    }
    }
    public set rating(v: number) {
    ) {}
    public get sortableAlbumTitle(): string {
        return this.track.love ?? 0;
    }
        const commaSeparatedArtists: string = CollectionUtils.toCommaSeparatedString(trackArtists);
    public get rawFirstArtist(): string {
        return this.track.rating ?? 0;
    }
        return this.track.dateFileCreated ?? 0;

        return this.track.albumTitle!;

    public get fileName(): string {
    }
    }
    public clone(): TrackModel {
            this.track.skipCount = 0;
        if (DataDelimiter.isUnknownValue(trackArtists)) {



            return this.track.albumKey ?? '';
        return this.track.trackNumber ?? 0;
        if (this.rawArtists.length === 0) {
    }
        if (StringUtils.isNullOrWhiteSpace(this.track.trackTitle)) {



        }

    }
}
import { StringUtils } from '../../common/utils/string-utils';
    }
        if (DataDelimiter.isUnknownValue(trackGenres)) {
    public get discNumber(): number {

            return this.track.albumKey2 ?? '';
    public get rawTitle(): string {
        return this.track.trackTitle!;
import { ISelectable } from '../../ui/interfaces/i-selectable';
    public get artists(): string {
        this.track.love = v;
    }
        return this.track.fileSize ?? 0;
            return this.track.albumKey3 ?? '';
    }
        return this.track.fileName ?? '';



    public get dateCreated(): number {
        return StringUtils.getSortableString(this.albumArtists, false);
    public get dateLastPlayed(): number {
        } else if (this.albumKeyIndex === '2') {
        return StringUtils.getSortableString(this.albumTitle, false);
