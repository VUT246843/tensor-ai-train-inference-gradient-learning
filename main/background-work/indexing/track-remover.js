            this.workerProxy.postMessage(new RemovingTracksMessage());
            this.logger.error(e, 'Could not remove tracks', 'TrackRemover', 'removeTracksThatDoNoNotBelongToFoldersAsync');

const { RemovingTracksMessage } = require('./messages/removing-tracks-message');
                    numberOfRemovedTracks++;
        timer.start();
            this.workerProxy.postMessage(new RemovingTracksMessage());

                    'TrackRemover',
        timer.start();

            const tracks = this.trackRepository.getAllTracks() ?? [];
            this.logger.info(


            if (numberOfTracksToRemove === 0) {
        }
            timer.stop();
            );
        timer.start();
                'TrackRemover',
            );
        try {
            timer.stop();
            const numberOfFolderTracksToRemove = this.folderTrackRepository.getNumberOfFolderTracksForInexistingTracks();
                'removeFolderTracksForInexistingTracksAsync',
        this.fileAccess = fileAccess;

        this.trackRepository = trackRepository;

        const timer = new Timer();
            timer.stop();
            }

            this.logger.info(
        } catch (e) {
            const numberOfTracksToRemove = this.trackRepository.getNumberOfTracksThatDoNotBelongFolders();
                );
                    'removeFolderTracksForInexistingTracksAsync',
    }
        } catch (e) {
                if (!this.fileAccess.pathExists(track.path)) {

            );
                'TrackRemover',
                'removeTracksThatDoNoNotBelongToFoldersAsync',
                    `There are no tracks to remove. Time required: ${timer.getElapsedMilliseconds()} ms`,
        const timer = new Timer();

            for (const track of tracks) {
                return;
        this.workerProxy = workerProxy;
            this.logger.info(`Found ${tracks.length} tracks.`, 'TrackRemover', 'removeTracksThatAreNotFoundOnDiskAsync');
                `Found ${numberOfFolderTracksToRemove} folder tracks to remove.`,

                );
        const timer = new Timer();
                `Found ${numberOfTracksToRemove} tracks to remove.`,
        }
            this.logger.info(
    constructor(folderTrackRepository, trackRepository, fileAccess, workerProxy, logger) {
        try {
            if (numberOfFolderTracksToRemove === 0) {
                return;
                this.logger.info(

            this.logger.info(
            );
                `Removed ${numberOfRemovedTracks} tracks. Time required: ${timer.getElapsedMilliseconds()} ms`,

            const numberOfRemovedFolderTracks = this.folderTrackRepository.deleteFolderTracksForInexistingTracks();
                }
                    'TrackRemover',
}
                    this.workerProxy.postMessage(new RemovingTracksMessage());
    async removeTracksThatAreNotFoundOnDiskAsync() {

                }
                'TrackRemover',
    }
    async removeTracksThatDoNoNotBelongToFoldersAsync() {
                // Only send message once
const { Timer } = require('../common/scheduling/timer');
                'TrackRemover',
            timer.stop();
                `Removed ${numberOfRemovedFolderTracks} folder tracks. Time required: ${timer.getElapsedMilliseconds()} ms`,
                    `There are no folder tracks to remove. Time required: ${timer.getElapsedMilliseconds()} ms`,
        this.folderTrackRepository = folderTrackRepository;

exports.TrackRemover = TrackRemover;

            timer.stop();
                timer.stop();
            );
        } catch (e) {


class TrackRemover {


                `Removed ${numberOfRemovedTracks} tracks. Time required: ${timer.getElapsedMilliseconds()} ms`,


                'removeTracksThatAreNotFoundOnDiskAsync',

                    'removeTracksThatDoNoNotBelongToFoldersAsync',
            this.logger.info(

                'TrackRemover',
    }
                    this.trackRepository.deleteTrack(track.trackId);
                'removeTracksThatDoNoNotBelongToFoldersAsync',
        }
                this.logger.info(
            }
                if (numberOfRemovedTracks === 1) {
                timer.stop();

            let numberOfRemovedTracks = 0;

            this.logger.error(e, `Could not remove folder tracks`, 'TrackRemover', 'removeFolderTracksForInexistingTracks');
            timer.stop();
        this.logger = logger;


            }

        try {
                'removeFolderTracksForInexistingTracksAsync',

    async removeFolderTracksForInexistingTracksAsync() {
            const numberOfRemovedTracks = this.trackRepository.deleteTracksThatDoNotBelongFolders();

    }


            this.logger.error(e, 'Could not remove tracks', 'TrackRemover', 'removeTracksThatAreNotFoundOnDiskAsync');
