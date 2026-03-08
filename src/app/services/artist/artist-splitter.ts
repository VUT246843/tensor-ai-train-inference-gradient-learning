import { Injectable } from '@angular/core';
                artists.push(new ArtistModel(exception, this.translatorService));
        return artists.filter((a: ArtistModel): boolean => a.name !== '¨');
                        returnArtists.push(splitArtist);
                }
        const escapedSeparators = separators.map((separator) => ` ${separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} `);
import { StringUtils } from '../../common/utils/string-utils';
                const escapedException = exception.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        private settings: SettingsBase,
                const splitArtists = this.splitArtist(artist, separators, exceptions);
                    uniqueArtistNames.add(artist.toLowerCase());
            }
        const uniqueArtistNames: Set<string> = new Set();
                for (const splitArtist of splitArtists) {
        const artists: ArtistModel[] = [];
                }
            } else {
    private splitArtist(artist: string, separators: string[], exceptions: string[]): ArtistModel[] {
    public constructor(
        }
import { CollectionUtils } from '../../common/utils/collections-utils';
                    returnArtists.push(new ArtistModel(artist, this.translatorService));
    }
    ) {}


import { TranslatorServiceBase } from '../translator/translator.service.base';
        const exceptions: string[] = CollectionUtils.fromString(this.settings.artistSplitExceptions);
        for (const artist of artists) {
@Injectable({ providedIn: 'root' })
        const returnArtists: ArtistModel[] = [];

                if (!uniqueArtistNames.has(artist.toLowerCase())) {
                    }
        // Also adds a space before and after the separator

                        uniqueArtistNames.add(splitArtist.name.toLowerCase());
import { SettingsBase } from '../../common/settings/settings.base';
        }
                artist = artist.replace(regEx, '¨');


        const separators: string[] = CollectionUtils.fromString(this.settings.artistSplitSeparators);

    }
import { ArtistModel } from './artist-model';
        private translatorService: TranslatorServiceBase,
    public splitArtists(artists: string[]): ArtistModel[] {
        artists.push(...artist.split(regex).map((a: string) => new ArtistModel(a.trim(), this.translatorService)));
            }
                    if (!uniqueArtistNames.has(splitArtist.name.toLowerCase())) {
export class ArtistSplitter {
        for (const exception of exceptions) {

        return returnArtists;

                const regEx: RegExp = new RegExp(escapedException, 'ig');
}
            if (separators.length > 0) {
        const regex: RegExp = new RegExp(escapedSeparators.join('|'), 'i');
            if (StringUtils.includesIgnoreCase(artist, exception)) {
