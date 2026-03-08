                        PlayCount	        INTEGER,
        this.sql(`CREATE TABLE Folder (

                        NeedsIndexing 	            INTEGER,
                        PRIMARY KEY(TrackID));`);

}

                        FileName	                TEXT,
export class Migration1 extends Migration {
                        TrackNumber	                INTEGER,
                        Rating	            INTEGER,
                        NeedsAlbumArtworkIndexing   INTEGER,
                        Rating                      INTEGER,
                        TrackID	            INTEGER,
                        DiscCount	                INTEGER,
                        TrackTitle	                TEXT,
                        SafePath            TEXT,
                        Path	                    TEXT,
                        Duration	                INTEGER,
                        Artists	                    TEXT,
    }
                        SafePath	        TEXT,
                        PRIMARY KEY(TrackID));`);
                        SkipCount	        INTEGER,
                        FileSize	                INTEGER,
                        FolderID            INTEGER PRIMARY KEY AUTOINCREMENT,
        this.sql(`CREATE TABLE RemovedTrack (
                        QueuedTrackID       INTEGER,
                        IndexingFailureReason       TEXT,

                        DateFileModified	        INTEGER,
                        HasLyrics	                INTEGER,
        this.sql(`CREATE TABLE AlbumArtwork (
                        PlayCount                   INTEGER,
                        FolderID	        INTEGER,
                        PRIMARY KEY(QueuedTrackID));`);
                        Path	            TEXT,
        this.sql(`CREATE TABLE TrackStatistic (
        this.sql('CREATE INDEX TrackSafePathIndex ON Track(SafePath);');
                        SafePath	        TEXT,

    public up(): void {
    public name: string = 'Migration1';
                        DiscNumber	                INTEGER,
        this.sql(`CREATE TABLE QueuedTrack (

        this.sql('CREATE INDEX TrackStatisticSafePathIndex ON TrackStatistic(SafePath);');
                        ShowInCollection    INTEGER);`);
                        Path	            TEXT,

                        Genres	                    TEXT,
                        DateLastPlayed              INTEGER,
    public id: number = 1;
                        DateRemoved         INTEGER,
                        IsPlaying           INTEGER,

                        Year	                    INTEGER,
                        BitRate	                    INTEGER,
                        AlbumArtworkID	    INTEGER,
                        OrderID             INTEGER,
                        TrackID	            INTEGER);`);
                        SafePath	        TEXT,
                        DateAdded  	                INTEGER,
                        Path                TEXT,
        this.sql(`CREATE TABLE FolderTrack (
                        Love                        INTEGER,
                        IndexingSuccess             INTEGER,
                        TrackCount	                INTEGER,
                        SafePath	                TEXT,
                        DateFileCreated  	        INTEGER,
        this.sql('CREATE INDEX TrackPathIndex ON Track(Path);');
import { Migration } from '../migration';
                        Love	            INTEGER,
                        DateLastPlayed      INTEGER);`);
                        AlbumArtists	            TEXT,
                        PRIMARY KEY(AlbumArtworkID));`);
                        SampleRate	                INTEGER,
                        ProgressSeconds     INTEGER,
                        TrackStatisticID	INTEGER PRIMARY KEY AUTOINCREMENT,
                        DateLastSynced	            INTEGER,
                        AlbumTitle	                TEXT,
                        SkipCount                   INTEGER,
                        AlbumKey	        TEXT,

                        MimeType	                TEXT,
                        TrackID	                    INTEGER,

                        AlbumKey	                TEXT,
                        Path	            TEXT,
                        FolderTrackID      INTEGER PRIMARY KEY AUTOINCREMENT,
                        ArtworkID	        TEXT,
        this.sql(`CREATE TABLE Track (
