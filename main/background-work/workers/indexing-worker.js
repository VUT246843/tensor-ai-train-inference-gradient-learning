        } else if (workerProxy.task() === 'always') {
    log.transports.file.resolvePath = () => path.join(workerProxy.applicationDataDirectory(), 'logs', 'Dopamine.log');
});
    const indexer = Ioc.get('Indexer');
            await indexer.indexCollectionAlwaysAsync();
            await indexer.indexCollectionIfOutdatedAsync();
        logger.error(e, 'Unexpected error', 'IndexingWorker', 'performTaskAsync');
const log = require('electron-log');


        }
        if (workerProxy.task() === 'outdated') {
    const logger = Ioc.get('Logger');
    }
performTaskAsync().then(() => {

}
const { Ioc } = require('../ioc/ioc');
const path = require('path');

    try {
    const workerProxy = Ioc.get('WorkerProxy');
    } catch (e) {
    workerProxy.postMessage('Done');

    Ioc.registerAll();
async function performTaskAsync() {
    const workerProxy = Ioc.get('WorkerProxy');
