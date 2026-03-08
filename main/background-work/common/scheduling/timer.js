    #startedMilliseconds;
    stop() {
        this.#startedMilliseconds = moment().valueOf();


exports.Timer = Timer;
}
const moment = require('moment');
        this.#stoppedMilliseconds = moment().valueOf();
    }
    start() {
        return this.#stoppedMilliseconds - this.#startedMilliseconds;
class Timer {
    }
    #stoppedMilliseconds;
    getElapsedMilliseconds() {

    }


