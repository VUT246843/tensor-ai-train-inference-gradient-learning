
const { DismissMessage } = require('./messages/dismiss-message');
        await this.trackIndexer.indexTracksAsync();
    async indexCollectionIfOutdatedAsync() {
        this.workerProxy.postMessage(new DismissMessage());

        this.workerProxy.postMessage(new DismissMessage());
    }
            this.logger.info('Collection is outdated.', 'Indexer', 'indexCollectionIfOutdatedAsync');
        this.trackRepository = trackRepository;
        const collectionIsOutdated = await this.collectionChecker.isCollectionOutdatedAsync();
        this.trackIndexer = trackIndexer;

}
exports.Indexer = Indexer;
        this.logger.info('Indexing collection.', 'Indexer', 'indexCollectionIfOutdatedAsync');
        if (collectionIsOutdated) {
class Indexer {
        } else {

        this.collectionChecker = collectionChecker;
        this.workerProxy = workerProxy;
    }
    }
        }


            this.logger.info('Collection is not outdated.', 'Indexer', 'indexCollectionIfOutdatedAsync');
        this.logger.info('Indexing collection.', 'Indexer', 'indexCollectionAlwaysAsync');

    constructor(collectionChecker, trackIndexer, trackRepository, workerProxy, logger) {


            await this.trackIndexer.indexTracksAsync();
        this.logger = logger;
    async indexCollectionAlwaysAsync() {
