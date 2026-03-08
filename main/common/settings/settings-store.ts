/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
            this.data = {};

            }
    }
        } catch (err) {
        this.data[key] = value;
            if (fs.existsSync(SETTINGS_FILE)) {

    }
const SETTINGS_FILE = path.join(app.getPath('userData'), 'config.json');
    }
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
            console.error('Failed to load settings:', err);
        let changed = false;
import { app } from 'electron';
}
    public getAll(): Record<string, any> {
    }
        this.load();

import { DEFAULT_SETTINGS } from './default-settings';
        this.save();
            fs.writeFileSync(tmpPath, JSON.stringify(this.data, null, 2), 'utf-8');
        } catch (err) {

            }
            fs.renameSync(tmpPath, SETTINGS_FILE);
    public constructor() {
    }
    private applyDefaults() {

        }
                this.data[key] = defaultValue;
                }
        try {
        return { ...this.data };
    private load() {
                if (content.trim().length > 0) {
    }
        try {
        if (changed) this.save();
        }
    public get<T = any>(key: string): T {
    }


    private save() {

        }
        return this.data[key] as T;
            const tmpPath = SETTINGS_FILE + '.tmp';
import * as path from 'path';
            console.error('Failed to save settings:', err);
    public set<T = any>(key: string, value: T): void {
                const content = fs.readFileSync(SETTINGS_FILE, 'utf-8');
        for (const [key, defaultValue] of Object.entries(DEFAULT_SETTINGS)) {
export class SettingsStore {
                changed = true;
import * as fs from 'fs-extra';
    private data: Record<string, any> = {};
            if (!(key in this.data)) {
                    this.data = JSON.parse(content);

        this.applyDefaults();
