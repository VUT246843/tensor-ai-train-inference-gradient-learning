        if (StringUtils.isNullOrWhiteSpace(textToContain)) {
import { AlbumModel } from '../../services/album/album-model';
    }


import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../common/utils/string-utils';
        const filteredAlbums: AlbumModel[] = [];
            if (this.searchService.matchesSearchText(textToSearch, textToContain!)) {
}
        for (const album of albums) {
        }
        }

                filteredAlbums.push(album);
    public transform(albums: AlbumModel[], textToContain: string | undefined): AlbumModel[] {
@Pipe({ name: 'albumsFilter' })
            }
            const textToSearch = [album.albumTitle, album.albumArtist, album.year.toString(), album.genres.join(' ')].join(' ');
import { SearchServiceBase } from '../../services/search/search.service.base';
            return albums;
        return filteredAlbums;


export class AlbumsFilterPipe implements PipeTransform {
    public constructor(private searchService: SearchServiceBase) {}
