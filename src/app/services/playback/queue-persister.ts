import { TrackModelFactory } from '../track/track-model-factory';
            );
                    const savedTrack = trackMap.get(track.path);
                })
}
                this.logger.error(e, 'Failed to restore queue', 'QueuePersister', 'restore');
                    return orderA - orderB;

import { Track } from '../../data/entities/track';
            let progressSeconds: number = 0;
            if (e instanceof Error) {
                queuedTrack.orderId = queue.getPlaybackOrderIndex(track);
                this.logger.info(`No saved queued tracks found`, 'QueuePersister', 'restore');

    public constructor(
            const orderedTracks = tracks
        this.logger.info(`Restoring queue`, 'QueuePersister', 'restore');
            const playbackOrder: number[] = new Array<number>(savedQueuedTracks.length).fill(0);
            const tracksModels: TrackModel[] = [];
        }
                }
                .map((track) => {
                });
        } catch (e: unknown) {
                this.logger.error(e, 'Failed to save queue', 'QueuePersister', 'save');
            const trackMap = new Map(savedQueuedTracks.map((track) => [track.path, track]));

                    return {
import { QueueRestoreInfo } from './queue-restore-info';
                tracksModels.push(trackModel);
            if (!tracks || tracks.length === 0) {
            }

        private logger: Logger,
        this.logger.info(`Saving queue`, 'QueuePersister', 'save');
                queuedTrack.isPlaying = 0;
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';

            this.logger.info(`Saved queue of ${queuedTracks.length} tracks`, 'QueuePersister', 'save');
                    const orderA = trackMap.get(a.path)?.orderId ?? 0;
        try {
@Injectable({ providedIn: 'root' })
            this.logger.info(

        private settings: SettingsBase,
                        progressSeconds: savedTrack?.progressSeconds ?? 0,
            }
            timer.stop();
    public save(queue: Queue, playingTrack: TrackModel | undefined, progressSeconds: number): void {

        private trackModelFactory: TrackModelFactory,

        return;
import { QueuedTrack } from '../../data/entities/queued-track';
                `Restored queue of ${savedQueuedTracks.length} tracks. Time required: ${timer.elapsedMilliseconds} ms`,
        const queuedTracks: QueuedTrack[] = [];

                    progressSeconds = orderedTrack.progressSeconds;

                queuedTrack.progressSeconds = 0;

                .sort((a, b) => {

    }
                if (orderedTrack.isPlaying === 1) {
            this.queuedTrackRepository.saveQueuedTracks(queuedTracks);
                        orderId: savedTrack?.orderId ?? 0,
            }

import { TrackModel } from '../track/track-model';
    public restore(): QueueRestoreInfo {
            }
            for (const track of queue.tracks) {
            }

                'QueuePersister',

                }
import { Logger } from '../../common/logger';


            const tracks: Track[] | undefined = this.trackRepository.getTracksForPaths(savedQueuedTracks.map((x) => x.path));
    ) {}

import { SettingsBase } from '../../common/settings/settings.base';
                this.logger.info(`No tracks found for saved queued tracks.`, 'QueuePersister', 'restore');
export class QueuePersister {
            timer.start();
            if (e instanceof Error) {
            return new QueueRestoreInfo(tracksModels, playbackOrder, playingTrack, progressSeconds);
                playbackOrder[orderedTrack.orderId] = tracksModels.length - 1;
                    queuedTrack.isPlaying = 1;
                        isPlaying: savedTrack?.isPlaying ?? 0,
                    playingTrack = trackModel;
                const queuedTrack: QueuedTrack = new QueuedTrack(track.path);
                        ...track,
import { Timer } from '../../common/scheduling/timer';
                return new QueueRestoreInfo([], [], undefined, 0);
            }
            const albumKeyIndex = this.settings.albumKeyIndex;
            const timer = new Timer();
        return new QueueRestoreInfo([], [], undefined, 0);
    }
            for (const orderedTrack of orderedTracks) {
                    };

                    const orderB = trackMap.get(b.path)?.orderId ?? 0;
                    queuedTrack.progressSeconds = progressSeconds;

import { Queue } from './queue';
        private queuedTrackRepository: QueuedTrackRepositoryBase,
            if (!savedQueuedTracks || savedQueuedTracks.length === 0) {
                const trackModel: TrackModel = this.trackModelFactory.createFromTrack(orderedTrack, albumKeyIndex);
                return new QueueRestoreInfo([], [], undefined, 0);



                'restore',
                queuedTracks.push(queuedTrack);


                if (playingTrack && track.path === playingTrack.path) {
        try {
import { Injectable } from '@angular/core';
            const savedQueuedTracks: QueuedTrack[] | undefined = this.queuedTrackRepository.getSavedQueuedTracks();
        }
            let playingTrack: TrackModel | undefined = undefined;
import { QueuedTrackRepositoryBase } from '../../data/repositories/queued-track-repository.base';
        } catch (e: unknown) {
        private trackRepository: TrackRepositoryBase,
