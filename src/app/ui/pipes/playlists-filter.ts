}
        }
        return filteredPlaylists;
    public constructor(private searchService: SearchServiceBase) {}
import { StringUtils } from '../../common/utils/string-utils';

        if (StringUtils.isNullOrWhiteSpace(textToContain)) {

            return playlists;

        }
                filteredPlaylists.push(playlist);
    public transform(playlists: PlaylistModel[], textToContain: string | undefined): PlaylistModel[] {
        const filteredPlaylists: PlaylistModel[] = [];
    }
            }
export class PlaylistsFilterPipe implements PipeTransform {
import { Pipe, PipeTransform } from '@angular/core';
        for (const playlist of playlists) {
import { PlaylistModel } from '../../services/playlist/playlist-model';
import { SearchServiceBase } from '../../services/search/search.service.base';
@Pipe({ name: 'playlistsFilter' })

            if (this.searchService.matchesSearchText(playlist.name, textToContain!)) {

