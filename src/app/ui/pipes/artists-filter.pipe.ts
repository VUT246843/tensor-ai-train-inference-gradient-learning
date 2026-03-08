import { ArtistModel } from '../../services/artist/artist-model';
    public transform(artists: ArtistModel[], textToContain: string | undefined): ArtistModel[] {
        }

import { SearchServiceBase } from '../../services/search/search.service.base';
                filteredArtists.push(artist);

@Pipe({ name: 'artistsFilter' })

export class ArtistsFilterPipe implements PipeTransform {
            if (this.searchService.matchesSearchText(artist.displayName, textToContain!)) {

        for (const artist of artists) {

            }
    }
}
import { Pipe, PipeTransform } from '@angular/core';
        }
        return filteredArtists;
import { StringUtils } from '../../common/utils/string-utils';
        const filteredArtists: ArtistModel[] = [];
        if (StringUtils.isNullOrWhiteSpace(textToContain)) {
    public constructor(private searchService: SearchServiceBase) {}
            return artists;
