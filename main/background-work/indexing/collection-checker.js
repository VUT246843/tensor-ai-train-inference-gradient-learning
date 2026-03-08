            const numberOfTracksHasChanged = numberOfDatabaseTracks !== indexablePathsOnDisk.length;

            const lastDateFileModifiedInDatabase = this.trackRepository.getMaximumDateFileModified();
    #getLastDateFileModifiedOnDisk(indexablePathsOnDisk) {
                    'CollectionChecker',
        this.indexablePathFetcher = indexablePathFetcher;
            );
            if (collectionIsOutdated) {
                'CollectionChecker',
            const numberOfDatabaseTracks = this.trackRepository.getNumberOfTracks();
    constructor(trackRepository, indexablePathFetcher, logger) {
        if (indexablePathsOnDisk.length <= 1) {
        this.logger = logger;

            return 0;
            this.logger.error(

            collectionIsOutdated = tracksNeedIndexing || numberOfTracksHasChanged || lastDateModifiedHasChanged;


                    `Collection is outdated: tracksNeedIndexing=${tracksNeedIndexing}, numberOfTracksHasChanged=${numberOfTracksHasChanged}, lastDateModifiedHasChanged=${lastDateModifiedHasChanged}`,
        return collectionIsOutdated;
                this.logger.info('Collection is up to date', 'CollectionChecker', 'isCollectionOutdatedAsync');
            }
        try {
        }
    }
                'isCollectionOutdatedAsync',
            a.dateModifiedTicks > b.dateModifiedTicks ? -1 : 1,
                'An error occurred while checking if collection is outdated',
        } catch (e) {
            const tracksNeedIndexing = numberOfDatabaseTracksThatNeedIndexing > 0;
            } else {
                    'isCollectionOutdatedAsync',
                );
        const indexablePathsSortedByDateModifiedTicksDescending = indexablePathsOnDisk.sort((a, b) =>
            const indexablePathsOnDisk = await this.indexablePathFetcher.getIndexablePathsForAllFoldersAsync();
}

        );
        let collectionIsOutdated = false;
exports.CollectionChecker = CollectionChecker;
            const lastDateModifiedHasChanged = lastDateFileModifiedInDatabase < lastDateFileModifiedOnDisk;
class CollectionChecker {

            const lastDateFileModifiedOnDisk = this.#getLastDateFileModifiedOnDisk(indexablePathsOnDisk);
    }

        }
            const numberOfDatabaseTracksThatNeedIndexing = this.trackRepository.getNumberOfTracksThatNeedIndexing();
    }
                this.logger.info(
                e,


    async isCollectionOutdatedAsync() {
        return indexablePathsSortedByDateModifiedTicksDescending[0].dateModifiedTicks;
        this.trackRepository = trackRepository;
