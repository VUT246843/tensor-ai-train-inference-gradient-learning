        const filteredGenres: GenreModel[] = [];
            return genres;
}
import { GenreModel } from '../../services/genre/genre-model';

        }
export class GenresFilterPipe implements PipeTransform {
import { Pipe, PipeTransform } from '@angular/core';


    }
        if (StringUtils.isNullOrWhiteSpace(textToContain)) {
@Pipe({ name: 'genresFilter' })
import { StringUtils } from '../../common/utils/string-utils';
import { SearchServiceBase } from '../../services/search/search.service.base';
        for (const genre of genres) {
        return filteredGenres;
            if (this.searchService.matchesSearchText(genre.displayName, textToContain!)) {

            }

    public transform(genres: GenreModel[], textToContain: string | undefined): GenreModel[] {
        }
    public constructor(private searchService: SearchServiceBase) {}
                filteredGenres.push(genre);
