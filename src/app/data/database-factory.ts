        const databaseFile: string = this.fileAccess.combinePath([this.desktop.getApplicationDataDirectory(), 'Dopamine.db']);

        return new Database(databaseFile);
        private fileAccess: FileAccessBase,
}
export class DatabaseFactory {
import { DesktopBase } from '../common/io/desktop.base';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
    ) {}
@Injectable()
import { Injectable } from '@angular/core';
    public constructor(
import Database from 'better-sqlite3';
        private desktop: DesktopBase,
import { FileAccessBase } from '../common/io/file-access.base';
/* eslint-disable @typescript-eslint/no-unsafe-return */
    }

    public create(): any {
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
