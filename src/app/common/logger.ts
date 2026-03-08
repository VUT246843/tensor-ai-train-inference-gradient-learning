        log.warn(this.formattedMessage(message, callerClass, callerMethod));
    public error(error: unknown, message: string, callerClass: string, callerMethod: string): void {
    }
    }
            return `${base} Error: ${error}`;

            try {

        log.error(this.formattedMessageWithError(error, message, callerClass, callerMethod));
    }

    public warn(message: string, callerClass: string, callerMethod: string): void {
import { Injectable } from '@angular/core';
import log from 'electron-log';
    public info(message: string, callerClass: string, callerMethod: string): void {
    }
                return `${base} Error: ${String(error)}`;
export class Logger {
        } else {
}
@Injectable()
        } else if (typeof error === 'string') {
    }
            }

                return `${base} Error: ${JSON.stringify(error, undefined, 2)}`;

        } else if (error !== undefined && error !== null) {
            return `${base} Error: ${error.message}\nStack:\n${error.stack ?? ''}`;
    private formattedMessage(message: string, callerClass: string, callerMethod: string): string {
        }
        return `[${callerClass}] [${callerMethod}] ${message}`;
    private formattedMessageWithError(error: unknown, message: string, callerClass: string, callerMethod: string): string {
        log.info(this.formattedMessage(message, callerClass, callerMethod));
        if (error instanceof Error) {
            return base;
            } catch {

        const base = `[${callerClass}] [${callerMethod}]  ${message.endsWith('.') ? message : message + '.'}`;
