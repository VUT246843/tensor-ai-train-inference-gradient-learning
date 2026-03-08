            }
            let numberOfUpdatedTracks = 0;

                    }
    }
        this.workerProxy = workerProxy;
                'updateTracksThatAreOutOfDateAsync',
                            !loggedPercentages.has(percentageOfProcessedTracks)
            timer.stop();
        const timer = new Timer();
                    if (this.trackVerifier.doesTrackNeedIndexing(tracks[i]) || this.trackVerifier.isTrackOutOfDate(tracks[i])) {
                'TrackUpdater',
            );
                            this.logger.info(`Processed ${i + 1} tracks`, 'TrackUpdater', 'updateTracksThatAreOutOfDateAsync');

}
const { UpdatingTracksMessage } = require('./messages/updating-tracks-message');
                        `A problem occurred while updating track with path='${tracks[i].path}'`,
exports.TrackUpdater = TrackUpdater;

            for (let i = 0; i < tracks.length; i++) {
const { MathUtils } = require('../common/utils/math-utils');
                        // Only send message once
                        'TrackUpdater',
                        }
                        if (numberOfUpdatedTracks === 1) {
                        'updateTracksThatAreOutOfDateAsync',

    async updateTracksThatAreOutOfDateAsync() {
                        this.trackRepository.updateTrack(filledTrack);
            this.logger.info(


                        e,


    constructor(trackRepository, trackVerifier, trackFiller, workerProxy, logger) {
const { Timer } = require('../common/scheduling/timer');
                        const filledTrack = await this.trackFiller.addFileMetadataToTrack(tracks[i], false);
        try {
            const tracks = this.trackRepository.getAllTracks() ?? [];


                        ) {
                        if (

        timer.start();
            this.logger.error(e, 'A problem occurred while updating tracks', 'TrackUpdater', 'updateTracksThatAreOutOfDateAsync');
                `Updated tracks: ${numberOfUpdatedTracks}. Time required: ${timer.getElapsedMilliseconds()} ms`,
    }
class TrackUpdater {
                        const percentageOfProcessedTracks = MathUtils.calculatePercentage(i + 1, tracks.length);
            const loggedPercentages = new Set();
        } catch (e) {
                }

        this.trackVerifier = trackVerifier;
                        numberOfUpdatedTracks++;
        }
        this.trackRepository = trackRepository;
                } catch (e) {
            timer.stop();

        this.trackFiller = trackFiller;
                        }
                            this.workerProxy.postMessage(new UpdatingTracksMessage());
                try {
        this.logger = logger;
                            loggedPercentages.add(percentageOfProcessedTracks);
                    );
                    this.logger.error(
                            (percentageOfProcessedTracks % 20 === 0 || percentageOfProcessedTracks === 100) &&
