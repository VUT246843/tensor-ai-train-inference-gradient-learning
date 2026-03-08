

        }
        }

        return this.selectedArtistType;
        }
    public getSelectedArtistOrder(): ArtistOrder {
import { SettingsBase } from '../../../../common/settings/settings.base';


        }

        public logger: Logger,
        }
            this.selectedArtistOrder = selectedArtistOrder;
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedArtistTypeFromSettings())) {
            if (selectedArtists.length > 0) {
        try {
        if (this.selectedArtistOrder == undefined) {
        this.setSelectedArtists([]);
    private saveSelectedArtistOrderToSettings(selectedArtistOrderName: string): void {
            } else {
    }
        try {
        return [];
        }
    }
    }
        return this.settings.artistsTabSelectedArtist;
            return ArtistOrder.byArtistAscending;
            }
    private getSelectedArtistOrderFromSettings(): string {

            this.resetSelectedArtists();


import { ArtistType } from '../../../../services/artist/artist-type';
        } catch (e: unknown) {
            return [];
            this.selectedArtistsChanged.next(this.selectedArtistNames);
    private getSelectedArtistTypeFromSettings(): string {
        this.settings.artistsTabSelectedArtistOrder = selectedArtistOrderName;
    private saveSelectedArtistToSettings(selectedArtist: string): void {
    private resetSelectedArtists(): void {
            this.logger.error(e, 'Could not set selected artist type', 'ArtistsPersister', 'setSelectedArtistType');

    }
                this.saveSelectedArtistToSettings(this.selectedArtistNames[0]);
            this.logger.error(e, 'Could not set selected artist order', 'ArtistsPersister', 'setSelectedArtistOrder');
}

    }
        return this.selectedArtistOrder;
                this.selectedArtistNames = selectedArtists.map((x) => x.displayName);

    private initializeFromSettings(): void {
            return availableArtists.filter((x) => this.selectedArtistNames.includes(x.displayName));

import { Observable, Subject } from 'rxjs';

    }
    private selectedArtistsChanged: Subject<string[]> = new Subject();
    }

import { ArtistModel } from '../../../../services/artist/artist-model';


            this.selectedArtistNames = [this.getSelectedArtistFromSettings()];
        this.settings.artistsTabSelectedArtistType = selectedArtistTypeName;
            this.saveSelectedArtistOrderToSettings(ArtistOrder[selectedArtistOrder]);

        public settings: SettingsBase,
    private saveSelectedArtistTypeToSettings(selectedArtistTypeName: string): void {
        }
        }
    }
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedArtistFromSettings())) {
    ) {
        } catch (e: unknown) {
        if (this.selectedArtistType == undefined) {
        }
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedArtistOrderFromSettings())) {

        try {
            }
    private selectedArtistNames: string[] = [];
    private selectedArtistOrder: ArtistOrder;
            this.saveSelectedArtistTypeToSettings(ArtistType[selectedArtistType]);
        this.settings.artistsTabSelectedArtist = selectedArtist;
        this.initializeFromSettings();
@Injectable()
        return this.settings.artistsTabSelectedArtistOrder;
    }
    public constructor(
    public getSelectedArtistType(): ArtistType {

        } catch (e: unknown) {
        if (availableArtists == undefined) {
        }
            this.logger.error(e, 'Could not get selected artists', 'ArtistsPersister', 'getSelectedArtists');
            } else {
        } catch (e: unknown) {
        }
            this.selectedArtistType = ArtistType[this.getSelectedArtistTypeFromSettings()] as ArtistType;
    }

import { StringUtils } from '../../../../common/utils/string-utils';
import { ArtistOrder } from './artist-browser/artist-order';
            this.selectedArtistTypeChanged.next(selectedArtistType);
    }
            this.logger.error(e, 'Could not set selected artists', 'ArtistsPersister', 'setSelectedArtists');

import { Injectable } from '@angular/core';
    public setSelectedArtistOrder(selectedArtistOrder: ArtistOrder): void {

export class ArtistsPersister {
    }
    public selectedArtistTypeChanged$: Observable<ArtistType> = this.selectedArtistTypeChanged.asObservable();
            return [];

        try {
            this.selectedArtistType = selectedArtistType;
            this.selectedArtistOrder = ArtistOrder[this.getSelectedArtistOrderFromSettings()] as ArtistOrder;
        if (availableArtists.length === 0) {
    public setSelectedArtistType(selectedArtistType: ArtistType): void {
    }
                this.selectedArtistNames = [];
                this.saveSelectedArtistToSettings('');
    }
    private getSelectedArtistFromSettings(): string {
import { Logger } from '../../../../common/logger';

    }
        return this.settings.artistsTabSelectedArtistType;
    private selectedArtistTypeChanged: Subject<ArtistType> = new Subject();
            if (this.selectedArtistNames.length > 0) {
    public setSelectedArtists(selectedArtists: ArtistModel[]): void {
    private selectedArtistType: ArtistType;

    public selectedArtistsChanged$: Observable<string[]> = this.selectedArtistsChanged.asObservable();
    public getSelectedArtists(availableArtists: ArtistModel[]): ArtistModel[] {
            return ArtistType.trackArtists;
