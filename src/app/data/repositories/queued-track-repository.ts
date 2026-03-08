    public constructor(private databaseFactory: DatabaseFactory) {}
            `SELECT QueuedTrackID   as queuedTrackId,
                    IsPlaying       as isPlaying,
            );

        const database: any = this.databaseFactory.create();
        database.exec('DELETE FROM QueuedTrack;');

        // First, clear old queued tracks.
            statement.run(track.path, track.path.toLowerCase(), track.isPlaying, track.progressSeconds, track.orderId);
                'INSERT INTO QueuedTrack (Path, SafePath, IsPlaying, ProgressSeconds, OrderID) VALUES (?, ?, ?, ?, ?);',

        }
                    ProgressSeconds as progressSeconds,
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
}
        );

        const statement = database.prepare(
    }
                    Path            as path,
        for (const track of tracks) {
@Injectable()
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
        // Then, insert new queued tracks.

        const database: any = this.databaseFactory.create();
        database.exec('COMMIT;');
        return queuedTracks;
        database.exec('BEGIN TRANSACTION;');
    public saveQueuedTracks(tracks: QueuedTrack[]): void {
import { QueuedTrackRepositoryBase } from './queued-track-repository.base';
import { Injectable } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
             FROM QueuedTrack


                    OrderID         as orderId

             ORDER BY QueuedTrackID;`,
        const queuedTracks: QueuedTrack[] | undefined = statement.all();
export class QueuedTrackRepository implements QueuedTrackRepositoryBase {
            const statement = database.prepare(


    }
    public getSavedQueuedTracks(): QueuedTrack[] | undefined {
import { QueuedTrack } from '../entities/queued-track';
import { DatabaseFactory } from '../database-factory';
