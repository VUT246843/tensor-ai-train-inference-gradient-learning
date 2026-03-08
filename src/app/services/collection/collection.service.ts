export class CollectionService implements CollectionServiceBase {
        private playbackService: PlaybackService,
        return couldDeleteAllTracks;

            }

            } catch (e: unknown) {



                await this.desktop.moveFileToTrashAsync(track.path);
}
        private logger: Logger,
        private trackRepository: TrackRepositoryBase,
        }
            try {

import { Logger } from '../../common/logger';

    public collectionChanged$: Observable<void> = this.collectionChanged.asObservable();
        private desktop: DesktopBase,
import { CollectionServiceBase } from './collection.service.base';
    public constructor(
        this.trackRepository.deleteTracks(tracks.map((x) => x.id));


import { TrackModel } from '../track/track-model';
import { Observable, Subject } from 'rxjs';
import { PlaybackService } from '../playback/playback.service';
@Injectable()
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
    }
    private collectionChanged: Subject<void> = new Subject();
    ) {}
        for (const track of tracks) {
                this.logger.error(e, `Could not move file '${track.path}' to the trash`, 'CollectionService', 'deleteTracksAsync');
        this.collectionChanged.next();
        let couldDeleteAllTracks: boolean = true;
import { Injectable } from '@angular/core';
    public async deleteTracksAsync(tracks: TrackModel[]): Promise<boolean> {
import { DesktopBase } from '../../common/io/desktop.base';
            await this.playbackService.stopIfPlayingAsync(track);
                couldDeleteAllTracks = false;

