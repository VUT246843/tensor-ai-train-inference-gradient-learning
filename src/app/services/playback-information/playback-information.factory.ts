
import { MetadataService } from '../metadata/metadata.service';
import { TrackModel } from '../track/track-model';
@Injectable({ providedIn: 'root' })

    public constructor(private metadataService: MetadataService) {}
}
import { PlaybackInformation } from './playback-information';
        return new PlaybackInformation(undefined, '');
    }
    public async createAsync(track: TrackModel | undefined): Promise<PlaybackInformation> {

export class PlaybackInformationFactory {
import { Injectable } from '@angular/core';
        if (track != undefined) {
        }
            return new PlaybackInformation(track, newImage);
            const newImage: string = await this.metadataService.createAlbumImageUrlAsync(track, 0);

