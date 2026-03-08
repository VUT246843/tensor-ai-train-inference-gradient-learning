

        if (track.fileSize !== this.fileAccess.getFileSizeInBytes(track.path)) {
    }
        }
            return true;
    }
    doesTrackNeedIndexing(track) {



        }

        if (track.fileSize === 0) {
class TrackVerifier {
    constructor(fileAccess) {

    isTrackOutOfDate(track) {
exports.TrackVerifier = TrackVerifier;
        if (track.needsIndexing === undefined || track.needsIndexing === null) {
            return true;
        if (Number.isNaN(track.needsIndexing)) {
            return true;
}
        }
        }
        return track.dateFileModified !== this.fileAccess.getDateModifiedInTicks(track.path);
        return track.needsIndexing === 1;
            return true;
        this.fileAccess = fileAccess;
    }
