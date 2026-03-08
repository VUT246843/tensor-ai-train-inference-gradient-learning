            return availableAlbums.filter((x) => this.selectedAlbumKeys.includes(x.albumKey));
            return AlbumOrder.byAlbumTitleAscending;
    public constructor(
        }
    }
        if (availableAlbums.length === 0) {
                this.saveSelectedAlbumToSettings('');
import { Logger } from '../../../common/logger';
    private selectedAlbumKeys: string[] = [];
        }


    public setSelectedAlbums(selectedAlbums: AlbumModel[]): void {
    public setSelectedAlbumOrder(selectedAlbumOrder: AlbumOrder): void {
        return [];
import { Injectable } from '@angular/core';
            this.selectedAlbumsChanged.next(this.selectedAlbumKeys);
            this.saveSelectedAlbumOrderToSettings(AlbumOrder[selectedAlbumOrder]);
        }

    }
        } catch (e: unknown) {
import { Observable, Subject } from 'rxjs';
    private selectedAlbumsChanged: Subject<string[]> = new Subject();
    public abstract saveSelectedAlbumOrderToSettings(selectedAlbumOrderName: string): void;
}
        return this.selectedAlbumOrder;
    public getSelectedAlbumOrder(): AlbumOrder {
        this.initializeFromSettings();

    }
        public logger: Logger,

            }

        }
    public resetSelectedAlbums(): void {
            } else {
        if (this.selectedAlbumOrder == undefined) {
        try {
        try {


        try {
                this.selectedAlbumKeys = [];
    }
    public getSelectedAlbums(availableAlbums: AlbumModel[]): AlbumModel[] {
    ) {
            return [];
    }
    public abstract saveSelectedAlbumToSettings(selectedAlbumKey: string): void;

        public settings: SettingsBase,
            this.selectedAlbumKeys = [this.getSelectedAlbumFromSettings()];

import { SettingsBase } from '../../../common/settings/settings.base';
            this.logger.error(e, 'Could not set selected albums', 'BaseAlbumsPersister', 'setSelectedAlbums');
    }
        } catch (e: unknown) {
        }
        }
        this.selectedAlbumKeys = [];
            this.selectedAlbumOrder = selectedAlbumOrder;

            } else {


            if (selectedAlbums.length > 0) {
                this.selectedAlbumKeys = selectedAlbums.map((x) => x.albumKey);
    public abstract getSelectedAlbumOrderFromSettings(): string;
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedAlbumFromSettings())) {
            }
            this.logger.error(e, 'Could not set selected album order', 'BaseAlbumsPersister', 'setSelectedAlbumOrder');
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedAlbumOrderFromSettings())) {
                this.saveSelectedAlbumToSettings(this.selectedAlbumKeys[0]);
@Injectable()
export abstract class BaseAlbumsPersister {
    }
    public selectedAlbumsChanged$: Observable<string[]> = this.selectedAlbumsChanged.asObservable();
        } catch (e: unknown) {
import { StringUtils } from '../../../common/utils/string-utils';
import { AlbumOrder } from './album-order';
            if (this.selectedAlbumKeys.length > 0) {

            this.selectedAlbumOrder = AlbumOrder[this.getSelectedAlbumOrderFromSettings()] as AlbumOrder;
        this.saveSelectedAlbumToSettings('');
    private initializeFromSettings(): void {
    public abstract getSelectedAlbumFromSettings(): string;
import { AlbumModel } from '../../../services/album/album-model';
        }
            this.logger.error(e, 'Could not get selected albums', 'BaseAlbumsPersister', 'getSelectedAlbums');

    private selectedAlbumOrder: AlbumOrder;

