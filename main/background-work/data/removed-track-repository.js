
        const statement = database.prepare('INSERT INTO RemovedTrack (TrackID, Path, SafePath, DateRemoved) VALUES (?, ?, ?, ?);');
}

        statement.run(removedTrack.trackId, removedTrack.path, removedTrack.path.toLowerCase(), removedTrack.dateRemoved);
    deleteRemovedTrackByTrackId(trackId) {
        const statement = database.prepare('DELETE FROM RemovedTrack WHERE TrackID=?;');

        const database = this.databaseFactory.create();
    }
    }
    }
    getRemovedTracks() {
        const database = this.databaseFactory.create();

    constructor(databaseFactory) {
        const statement = database.prepare(`SELECT TrackID as trackId, Path as path, DateRemoved as dateRemoved FROM RemovedTrack;`);
class RemovedTrackRepository {
    }
        statement.run(trackId);
        this.databaseFactory = databaseFactory;
    addRemovedTrack(removedTrack) {
        const database = this.databaseFactory.create();
        return statement.all();
exports.RemovedTrackRepository = RemovedTrackRepository;
