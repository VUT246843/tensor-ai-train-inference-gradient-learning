import { SearchServiceBase } from '../../services/search/search.service.base';
        if (StringUtils.isNullOrWhiteSpace(textToContain)) {

                track.year.toString(),

import { Pipe, PipeTransform } from '@angular/core';
        }
                track.fileName,
            ].join(' ');
            const textToSearch = [
import { TrackModels } from '../../services/track/track-models';
                track.albumTitle,
        for (const track of tracks.tracks) {
                filteredTracks.addTrack(track);
    }
        return filteredTracks;
            if (this.searchService.matchesSearchText(textToSearch, textToContain!)) {

                track.title,

            }
        const filteredTracks: TrackModels = new TrackModels();
@Pipe({ name: 'tracksFilter' })
            return tracks;
    public constructor(private searchService: SearchServiceBase) {}

}
    public transform(tracks: TrackModels, textToContain: string | undefined): TrackModels {
export class TracksFilterPipe implements PipeTransform {
                track.albumArtists,

                track.genres,
                track.artists,
        }
import { StringUtils } from '../../common/utils/string-utils';
