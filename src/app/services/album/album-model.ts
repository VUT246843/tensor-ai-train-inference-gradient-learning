    }

    public get playCount(): number {

    }
import { StringUtils } from '../../common/utils/string-utils';
import { ApplicationPaths } from '../../common/application/application-paths';
import { ISelectable } from '../../ui/interfaces/i-selectable';
    public get year(): number {

    }
import { Constants } from '../../common/application/constants';
    }
    public yearHeader: string = '';

            return trackArtists[0];

        if (!DataDelimiter.isUnknownValue(albumArtists)) {
        return genres;
        return this.albumData.dateLastPlayed ?? 0;

        }
        if (StringUtils.isNullOrWhiteSpace(this.albumData.artworkId)) {
    ) {}
    public showYear: boolean = false;
            return albumArtists[0];
            return this.translatorService.get(Constants.unknownTitle);
    public get dateAddedInTicks(): number {
    public get albumArtist(): string {
    public get albumTitle(): string {

    public get genres(): string[] {

    }

    public get dateLastPlayedInTicks(): number {
        private applicationPaths: ApplicationPaths,
    }
import { DataDelimiter } from '../../data/data-delimiter';
        private translatorService: TranslatorServiceBase,
    }

    public get albumKey(): string {
        }
        const genres = DataDelimiter.fromDelimitedString(this.albumData.genres);
        if (!DataDelimiter.isUnknownValue(trackArtists)) {
        return this.albumData.albumTitle!;
    public get dateFileCreatedInTicks(): number {

import { AlbumData } from '../../data/entities/album-data';
    }

        }
        return this.albumData.playCount ?? 0;
    public constructor(
    public isSelected: boolean = false;
        return this.albumData.year ?? 0;
        if (StringUtils.isNullOrWhiteSpace(this.albumData.albumTitle)) {
        const albumArtists = DataDelimiter.fromDelimitedString(this.albumData.albumArtists);
export class AlbumModel implements ISelectable {
        private albumData: AlbumData,
        }
}
        return this.translatorService.get(Constants.unknownArtist);
        return 'file:///' + this.applicationPaths.coverArtFullPath(this.albumData.artworkId!);



            return Constants.emptyImage;

        return this.albumData.dateAdded ?? 0;
        }

        return this.albumData.albumKey ?? '';
    }
        const trackArtists = DataDelimiter.fromDelimitedString(this.albumData.artists);
        return this.albumData.dateFileCreated ?? 0;
    public get artworkPath(): string {
            return [this.translatorService.get(Constants.unknownGenre)];
import { TranslatorServiceBase } from '../translator/translator.service.base';
        if (DataDelimiter.isUnknownValue(genres)) {


    }

