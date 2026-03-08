            try {
        sortedMigrations = migrations.sort((a, b) => (a.id > b.id ? 1 : -1));
        new Migration7(),
import { Migration9 } from './migrations/migration9';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
            return 0;
import { DatabaseFactory } from './database-factory';
                this.logger.info(`Migration ${migration.name} success`, 'DatabaseMigrator', 'migrateAsync');
/* eslint-disable @typescript-eslint/no-unsafe-call */
        const migrations: Migration[] = this.migrations.filter((x) => x.id > databaseVersion);
        new Migration1(),
        } else if (mostRecentMigration > databaseVersion) {
            } catch (e: unknown) {
        const migrationsSortedByIdDescending: Migration[] = this.migrations.sort((a, b) => (a.id > b.id ? -1 : 1));
import { Migration } from './migration';
        }
        }

                this.logger.error(e, `Could not perform migration: ${migration.name}`, 'DatabaseMigrator', 'migrateAsync');
import { Migration3 } from './migrations/migration3';
                database.prepare(`PRAGMA user_version = ${migration.id};`).run();
                for (const statement of migration.statements) {
            this.logger.info(
    private getDatabaseVersion(): number {
            migrationsToApply = this.getMigrationsToApply(databaseVersion);
import { Migration7 } from './migrations/migration7';

@Injectable()
        new Migration9(),
                database.prepare('COMMIT;').run();
        new Migration4(),
import { Migration5 } from './migrations/migration5';

    public constructor(
    }
import { Migration1 } from './migrations/migration1';

    private migrations: Migration[] = [
import { Injectable } from '@angular/core';
                'getMigrationsAsync',

        if (this.migrations.length === 0) {


        if (mostRecentMigration === databaseVersion) {
        new Migration5(),
        let sortedMigrations: Migration[] = [];


        const result = database.prepare('PRAGMA user_version').get();
    private getMostRecentMigration(): number {
                migration.up();
export class DatabaseMigrator implements DatabaseMigratorBase {
            this.logger.info('The database is up to date. No migrations to perform.', 'DatabaseMigrator', 'migrateAsync');

    }
        new Migration3(),
        }
        let migrationsToApply: Migration[] = [];
                    database.prepare(statement).run();
/* eslint-disable @typescript-eslint/no-unsafe-return */
        private logger: Logger,
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Logger } from '../common/logger';
        if (migrationsToApply.length > 0) {
        const databaseVersion: number = this.getDatabaseVersion();
        for (const migration of migrationsToApply) {
import { Migration8 } from './migrations/migration8';
            }
        const mostRecentMigration: number = this.getMostRecentMigration();
        private databaseFactory: DatabaseFactory,
import { Migration2 } from './migrations/migration2';
        new Migration6(),
        const database: any = this.databaseFactory.create();
                `Found migrations: ${migrationsToApply.map((x) => x.name).toString()}`,
                database.prepare('ROLLBACK;').run();
        new Migration2(),

        return migrationsSortedByIdDescending[0].id;
            this.logger.info(`Database is too old (v${databaseVersion}). Applying migrations.`, 'DatabaseMigrator', 'migrateAsync');

    }
    private getMigrationsToApply(databaseVersion: number): Migration[] {

    ];
        return result.user_version;

                'DatabaseMigrator',
        return sortedMigrations;

        new Migration8(),

    }

import { Migration6 } from './migrations/migration6';
import { DatabaseMigratorBase } from './database-migrator.base';

    ) {}
                this.logger.info('Applying migration', 'DatabaseMigrator', 'migrateAsync');
                database.prepare('BEGIN TRANSACTION;').run();
import { Migration4 } from './migrations/migration4';
        }
                }

            );
}

    public migrate(): void {

        const database: any = this.databaseFactory.create();
