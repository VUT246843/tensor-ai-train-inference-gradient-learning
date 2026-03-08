        const database: any = this.databaseFactory.create();
@Injectable()
            FROM AlbumArtwork
        WHERE AlbumKey IN (SELECT AlbumKey${albumKeyIndex} FROM Track WHERE NeedsAlbumArtworkIndexing = 1);`);
        return info.changes;
        return result.numberOfAlbumArtwork;
    }
}

    public getAllAlbumArtwork(): AlbumArtwork[] | undefined {

    public deleteAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(albumKeyIndex: string): number {


    }
            `SELECT AlbumArtworkID as albumArtworkId, AlbumKey as albumKey, ArtworkID as artworkId
    public getNumberOfAlbumArtworkThatHasNoTrack(albumKeyIndex: string): number {
    }
        const statement = database.prepare(`SELECT COUNT(*) AS numberOfAlbumArtwork FROM AlbumArtwork
        const statement = database.prepare(`SELECT COUNT(*) AS numberOfAlbumArtwork FROM AlbumArtwork;`);

        const statement = database.prepare(
/* eslint-disable @typescript-eslint/no-unsafe-call */
        const database: any = this.databaseFactory.create();


    public getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(albumKeyIndex: string): number {
        return albumArtwork;
        const statement = database.prepare(`DELETE FROM AlbumArtwork WHERE AlbumKey NOT IN (SELECT AlbumKey${albumKeyIndex} FROM Track);`);
        statement.run(albumArtwork.albumKey, albumArtwork.artworkId);


import { Injectable } from '@angular/core';
        const statement = database.prepare('INSERT INTO AlbumArtwork (AlbumKey, ArtworkID) VALUES (?, ?);');
        const database: any = this.databaseFactory.create();
import { DatabaseFactory } from '../database-factory';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AlbumArtworkRepositoryBase } from './album-artwork-repository.base';
        const database: any = this.databaseFactory.create();
        return result.numberOfAlbumArtwork;

        const statement = database.prepare(

        const statement = database.prepare(`DELETE FROM AlbumArtwork

        const database: any = this.databaseFactory.create();

        const database: any = this.databaseFactory.create();
export class AlbumArtworkRepository implements AlbumArtworkRepositoryBase {

    }
            `SELECT COUNT(*) AS numberOfAlbumArtwork


        const albumArtwork: AlbumArtwork[] | undefined = statement.all();
        const result: any = statement.get();
import { AlbumArtwork } from '../entities/album-artwork';

/* eslint-disable @typescript-eslint/no-explicit-any */
    }
            WHERE AlbumKey NOT IN (SELECT AlbumKey${albumKeyIndex} FROM Track);`,
    }
        );

        return result.numberOfAlbumArtwork;
            FROM AlbumArtwork;`,


        const result: any = statement.get();
        const database: any = this.databaseFactory.create();
        WHERE AlbumKey IN (SELECT AlbumKey${albumKeyIndex} FROM Track WHERE NeedsAlbumArtworkIndexing = 1);`);
    public deleteAlbumArtworkThatHasNoTrack(albumKeyIndex: string): number {
        const result: any = statement.get();
        const info = statement.run();

    public addAlbumArtwork(albumArtwork: AlbumArtwork): void {

        const info = statement.run();

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
        );

/* eslint-disable @typescript-eslint/no-unsafe-return */


    public constructor(private databaseFactory: DatabaseFactory) {}
    }

        return info.changes;
    public getNumberOfAlbumArtwork(): number {
