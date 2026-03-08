const { TrackVerifier } = require('../indexing/track-verifier');
                Ioc.get('TrackIndexer'),
            ),
const { Indexer } = require('../indexing/indexer');
                Ioc.get('WorkerProxy'),
const { DatabaseFactory } = require('../data/database.factory');

                Ioc.get('Logger'),
            new TrackRemover(
        global.iocContainer.set('FolderRepository', new FolderRepository(Ioc.get('DatabaseFactory')));

const { ApplicationPaths } = require('../common/application/application-paths');
                Ioc.get('TrackRepository'),
                Ioc.get('Logger'),
        global.iocContainer.set(
const { TrackFiller } = require('../indexing/track-filler');
                Ioc.get('TrackUpdater'),
        global.iocContainer.set('TrackVerifier', new TrackVerifier(Ioc.get('FileAccess')));
        global.iocContainer.set('FileMetadataFactory', new FileMetadataFactory());
        );
                Ioc.get('CollectionChecker'),
        global.iocContainer.set('LastfmApi', new LastfmApi());
                Ioc.get('TrackFiller'),
            ),
const { AlbumKeyGenerator } = require('../indexing/album-key-generator');
const { WorkerProxy } = require('../worker-proxy');
                Ioc.get('AlbumKeyGenerator'),
        global.iocContainer.set('MimeTypes', new MimeTypes());
const { CollectionChecker } = require('../indexing/collection-checker');
        );
        global.iocContainer.set(
            new TrackUpdater(
        global.iocContainer.set('FileAccess', new FileAccess(Ioc.get('DateTime')));
                Ioc.get('Logger'),
const { IndexablePathFetcher } = require('../indexing/indexable-path-fetcher');

                Ioc.get('TrackRepository'),
        global.iocContainer.set(
const { RemovedTrackRepository } = require('../data/removed-track-repository');
            'IndexablePathFetcher',
        );
const { FolderRepository } = require('../data/folder-repository');
                Ioc.get('Logger'),
            'TrackFiller',
const { TrackUpdater } = require('../indexing/track-updater');
const { FileMetadataFactory } = require('../indexing/file-metadata.factory');
            new TrackIndexer(
            'TrackIndexer',
                Ioc.get('Logger'),
const { TrackRemover } = require('../indexing/track-remover');
        global.iocContainer.set('GuidFactory', new GuidFactory());
                Ioc.get('TrackRepository'),
                Ioc.get('TrackFieldCreator'),
                Ioc.get('RemovedTrackRepository'),
            'Indexer',
                Ioc.get('WorkerProxy'),
        );
    static registerAll() {
const { TrackFieldCreator } = require('../indexing/track-field-creator');
                Ioc.get('DateTime'),
        global.iocContainer.set('DatabaseFactory', new DatabaseFactory(Ioc.get('FileAccess'), Ioc.get('WorkerProxy')));
            new TrackFiller(

                Ioc.get('WorkerProxy'),
                Ioc.get('TrackRepository'),
const { DateTime } = require('../common/date-time');
                Ioc.get('FileMetadataFactory'),
                Ioc.get('WorkerProxy'),
            ),
    static get(name) {
                Ioc.get('TrackRemover'),
        global.iocContainer.set('ApplicationPaths', new ApplicationPaths(Ioc.get('FileAccess'), Ioc.get('WorkerProxy')));
const { TrackAdder } = require('../indexing/track-adder');
        );
        );
            'TrackAdder',
const { TrackIndexer } = require('../indexing/track-indexer');
        global.iocContainer.set('Logger', new Logger());
const { MimeTypes } = require('../indexing/mime-types');
                Ioc.get('MetadataPatcher'),
                Ioc.get('FileAccess'),
        global.iocContainer.set(
        );
const { TrackRepository } = require('../data/track-repository');
        global.iocContainer.set('DirectoryWalker', new DirectoryWalker(Ioc.get('FileAccess')));
        global.iocContainer.set('FolderTrackRepository', new FolderTrackRepository(Ioc.get('DatabaseFactory')));
        global.iocContainer.set('MetadataPatcher', new MetadataPatcher());

                Ioc.get('IndexablePathFetcher'),
class Ioc {
    }
        global.iocContainer.set(
exports.Ioc = Ioc;


                Ioc.get('TrackFiller'),

global.iocContainer = new Map();
            'TrackRemover',




            ),
const { FolderTrackRepository } = require('../data/folder-track-repository');
    }
const { FileAccess } = require('../common/io/file-access');
const { DirectoryWalker } = require('../indexing/directory-walker');
        global.iocContainer.set(

                Ioc.get('FolderTrackRepository'),
        global.iocContainer.set('WorkerProxy', new WorkerProxy());

                Ioc.get('MimeTypes'),
const { GuidFactory } = require('../common/guid.factory');
                Ioc.get('TrackAdder'),
                Ioc.get('FolderTrackRepository'),
            new CollectionChecker(Ioc.get('TrackRepository'), Ioc.get('IndexablePathFetcher'), Ioc.get('Logger')),
                Ioc.get('FileAccess'),
            ),

                Ioc.get('Logger'),
            new IndexablePathFetcher(Ioc.get('FolderRepository'), Ioc.get('DirectoryWalker'), Ioc.get('FileAccess'), Ioc.get('Logger')),
        global.iocContainer.set('RemovedTrackRepository', new RemovedTrackRepository(Ioc.get('DatabaseFactory')));
        );
                Ioc.get('WorkerProxy'),
const { LastfmApi } = require('../common/api/lastfm.api');
            ),
        return global.iocContainer.get(name);
const { Logger } = require('../common/logger');
        global.iocContainer.set('TrackRepository', new TrackRepository(Ioc.get('DatabaseFactory')));

            new TrackAdder(
                Ioc.get('TrackVerifier'),
            'CollectionChecker',
        global.iocContainer.set(
        global.iocContainer.set(

        global.iocContainer.set('AlbumKeyGenerator', new AlbumKeyGenerator());
        global.iocContainer.set('DateTime', new DateTime());
            'TrackUpdater',
const { MetadataPatcher } = require('../indexing/metadata-patcher');
}
        global.iocContainer.set('TrackFieldCreator', new TrackFieldCreator());
            new Indexer(
