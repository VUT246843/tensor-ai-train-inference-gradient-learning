    public createFromTrack(track: Track, albumKeyIndex: string): TrackModel {
        private translatorService: TranslatorServiceBase,
import { Injectable } from '@angular/core';
        return new TrackModel(track, this.dateTime, this.translatorService, albumKeyIndex);
        const filledTrack: Track = await this.trackFiller.addFileMetadataToTrackAsync(track, true);
import { DateTime } from '../../common/date-time';
    public async createFromFileAsync(filePath: string, albumKeyIndex: string): Promise<TrackModel> {

        const track: Track = new Track(filePath);
    }
import { Track } from '../../data/entities/track';
        private trackFiller: TrackFiller,
    public constructor(
import { TranslatorServiceBase } from '../translator/translator.service.base';
        private dateTime: DateTime,
        return new TrackModel(filledTrack, this.dateTime, this.translatorService, albumKeyIndex);
import { TrackModel } from './track-model';

@Injectable()
import { TrackFiller } from '../indexing/track-filler';
}
export class TrackModelFactory {


    ) {}
    }
