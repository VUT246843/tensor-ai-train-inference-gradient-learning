    async indexTracksAsync() {

            'indexTracksAsync',
        this.workerProxy.postMessage(new RefreshingMessage());
        // Add tracks

        // Remove tracks
            'TrackIndexer',
class TrackIndexer {
        this.workerProxy = workerProxy;
        await this.trackRemover.removeTracksThatDoNoNotBelongToFoldersAsync();
        this.logger = logger;
        const timer = new Timer();
    constructor(trackAdder, trackUpdater, trackRemover, workerProxy, logger) {
        this.trackAdder = trackAdder;
        this.trackRemover = trackRemover;

        this.logger.info('+++ STARTED INDEXING TRACKS +++', 'TrackIndexer', 'indexTracksAsync');
        await this.trackRemover.removeTracksThatAreNotFoundOnDiskAsync();


        this.logger.info(
    }

        timer.stop();

        timer.start();

const { Timer } = require('../common/scheduling/timer');
const { DismissMessage } = require('./messages/dismiss-message');
        // Update tracks
        await this.trackRemover.removeFolderTracksForInexistingTracksAsync();
const { RefreshingMessage } = require('./messages/refreshing-message');
        await this.trackAdder.addTracksThatAreNotInTheDatabaseAsync();

        this.workerProxy.postMessage(new DismissMessage());
        this.trackUpdater = trackUpdater;
exports.TrackIndexer = TrackIndexer;
        await this.trackUpdater.updateTracksThatAreOutOfDateAsync();
            `+++ FINISHED INDEXING TRACKS (Time required: ${timer.getElapsedMilliseconds()} ms) +++`,

    }
        );

}
