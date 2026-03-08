    create() {

        this.fileAccess = fileAccess;


    constructor(fileAccess, workerProxy) {
        this.workerProxy = workerProxy;
        return new Database(databaseFile);
        const databaseFile = this.fileAccess.combinePath([this.workerProxy.applicationDataDirectory(), 'Dopamine.db']);
    }
}
    }
exports.DatabaseFactory = DatabaseFactory;
const Database = require('better-sqlite3');
class DatabaseFactory {

