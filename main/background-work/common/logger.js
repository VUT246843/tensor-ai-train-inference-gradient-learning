        log.info(this.#formattedMessage(message, callerClass, callerMethod));
        return `[${callerClass}] [${callerMethod}] ${message}`;
    }


    info(message, callerClass, callerMethod) {

    #formattedMessage(message, callerClass, callerMethod) {
    }
        }`;
            error instanceof Error ? ' Error: ' + error.message : ''


        log.warn(this.#formattedMessage(message, callerClass, callerMethod));
    }
    #formattedMessageWithError(error, message, callerClass, callerMethod) {
    }
exports.Logger = Logger;
}
        return `[${callerClass}] [${callerMethod}]  ${message.endsWith('.') ? message : message + '.'}${
    error(error, message, callerClass, callerMethod) {
class Logger {

    warn(message, callerClass, callerMethod) {
        log.error(this.#formattedMessageWithError(error, message, callerClass, callerMethod));
﻿const log = require('electron-log');
    }
