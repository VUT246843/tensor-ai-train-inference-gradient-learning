        const database = this.databaseFactory.create();


    getNumberOfFolderTracksForInexistingTracks() {
            'SELECT COUNT(*) AS numberOfFolderTracks FROM FolderTrack WHERE TrackID NOT IN (SELECT TrackID FROM Track);',
        this.databaseFactory = databaseFactory;
        const result = statement.get();
class FolderTrackRepository {
    }
    }
    deleteFolderTracksForInexistingTracks() {
        return info.changes;


    }
    addFolderTrack(folderTrack) {
exports.FolderTrackRepository = FolderTrackRepository;
        const statement = database.prepare('INSERT INTO FolderTrack (FolderID, TrackID) VALUES (?, ?);');
        const statement = database.prepare('DELETE FROM FolderTrack WHERE TrackID NOT IN (SELECT TrackID FROM Track);');
        const info = statement.run();

        const statement = database.prepare(
        const database = this.databaseFactory.create();
        );
        const database = this.databaseFactory.create();
        statement.run(folderTrack.folderId, folderTrack.trackId);
        return result.numberOfFolderTracks;

    }
}


    constructor(databaseFactory) {
