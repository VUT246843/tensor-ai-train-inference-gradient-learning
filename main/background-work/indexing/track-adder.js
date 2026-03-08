        }
    async addTracksThatAreNotInTheDatabaseAsync() {
    async #getIndexablePathsAsync(skipRemovedFiles) {
            for (let i = 0; i < indexablePaths.length; i++) {
            }
                    if (numberOfAddedTracks % 20 === 0 || percentageOfAddedTracks === 100) {
                    }
                }
        return indexablePaths;
                        'TrackAdder',

        this.indexablePathFetcher = indexablePathFetcher;
        this.trackFiller = trackFiller;
                    const percentageOfAddedTracks = Math.round((numberOfAddedTracks / indexablePaths.length) * 100);
    }
        const allIndexablePaths = await this.indexablePathFetcher.getIndexablePathsForAllFoldersAsync();

        this.workerProxy = workerProxy;



        this.trackRepository = trackRepository;
                        'addTracksThatAreNotInTheDatabaseAsync',
                    this.trackFiller.addFileMetadataToTrack(newTrack, false);
            this.logger.info(
                    }
                    ) {
const { FolderTrack } = require('../data/entities/folder-track');
    constructor(removedTrackRepository, folderTrackRepository, trackRepository, indexablePathFetcher, trackFiller, workerProxy, logger) {
                    const newTrack = new Track(indexablePaths[i].path);
                'addTracksThatAreNotInTheDatabaseAsync',
                    );
        }
                        e,

                    indexablePaths.push(indexablePath);
            this.logger.error(e, 'A problem occurred while adding tracks', 'TrackAdder', 'addTracksThatAreNotInTheDatabaseAsync');

        this.folderTrackRepository = folderTrackRepository;

                        this.logger.info(`Processed ${i + 1} tracks`, 'TrackAdder', 'addTracksThatAreNotInTheDatabaseAsync');
            const allowReAddingRemovedTracks = !skipRemovedFiles;
const { MathUtils } = require('../common/utils/math-utils');

                        loggedPercentages.add(percentageOfProcessedTracks);
                    this.folderTrackRepository.addFolderTrack(new FolderTrack(indexablePaths[i].folderId, addedTrack.trackId));
            timer.stop();
        this.logger = logger;
}

class TrackAdder {

                }
                    const percentageOfProcessedTracks = MathUtils.calculatePercentage(i + 1, indexablePaths.length);

                        this.workerProxy.postMessage(new AddingTracksMessage(numberOfAddedTracks, percentageOfAddedTracks));


            timer.stop();
        for (const indexablePath of allIndexablePaths) {

const { Timer } = require('../common/scheduling/timer');

    }
        const trackPaths = (this.trackRepository.getAllTracks() ?? []).map((x) => x.path);

                    this.logger.error(
                if (!isTrackThatWasPreviouslyRemoved || isTrackThatWasPreviouslyRemovedAndCanBeReAdded) {
            const isTrackThatWasPreviouslyRemoved = removedTrackPaths.includes(indexablePath.path);
        try {
const { AddingTracksMessage } = require('./messages/adding-tracks-message');
        const timer = new Timer();
                    this.trackRepository.addTrack(newTrack);
                        !loggedPercentages.has(percentageOfProcessedTracks)
                    numberOfAddedTracks++;
                try {
        timer.start();
                    const addedTrack = this.trackRepository.getTrackByPath(newTrack.path);
                    // Only send message once every 20 tracks or when all tracks have been added
        const removedTrackPaths = (this.removedTrackRepository.getRemovedTracks() ?? []).map((x) => x.path);
            const loggedPercentages = new Set();
                    if (

            }
        this.removedTrackRepository = removedTrackRepository;
    }

            let numberOfAddedTracks = 0;
            const isTrackInDatabase = trackPaths.includes(indexablePath.path);
            );
            const indexablePaths = await this.#getIndexablePathsAsync(this.workerProxy.skipRemovedFilesDuringRefresh());
                `Added tracks: ${numberOfAddedTracks}. Time required: ${timer.getElapsedMilliseconds()} ms`,
                } catch (e) {
exports.TrackAdder = TrackAdder;
const { Track } = require('../data/entities/track');
        const indexablePaths = [];
                        `A problem occurred while adding track with path='${indexablePaths[i].path}'`,
        } catch (e) {


                        (percentageOfProcessedTracks % 20 === 0 || percentageOfProcessedTracks === 100) &&
            if (!isTrackInDatabase) {
                'TrackAdder',
            const isTrackThatWasPreviouslyRemovedAndCanBeReAdded = isTrackThatWasPreviouslyRemoved && allowReAddingRemovedTracks;
