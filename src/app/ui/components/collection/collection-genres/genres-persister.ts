        return this.settings.genresTabSelectedGenre;
    }
    }


            return GenreOrder.byGenreAscending;
    public selectedGenresChanged$: Observable<string[]> = this.selectedGenresChanged.asObservable();

    public setSelectedGenres(selectedGenres: GenreModel[] | undefined): void {
    private initializeFromSettings(): void {
    private getSelectedGenreFromSettings(): string {
        }



    private selectedGenresChanged: Subject<string[]> = new Subject();

import { GenreModel } from '../../../../services/genre/genre-model';

        this.initializeFromSettings();
            this.selectedGenreOrder = selectedGenreOrder;
        } catch (e: unknown) {
            this.logger.error(e, 'Could not set selected genres', 'GenresPersister', 'setSelectedGenres');
            if (selectedGenres != undefined && selectedGenres.length > 0) {
    public getSelectedGenreOrder(): GenreOrder {
            this.logger.error(e, 'Could not set selected genre order', 'GenresPersister', 'setSelectedGenreOrder');
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedGenreOrderFromSettings())) {
            this.selectedGenreOrder = GenreOrder[this.getSelectedGenreOrderFromSettings()] as GenreOrder;
    public setSelectedGenreOrder(selectedGenreOrder: GenreOrder): void {

    private selectedGenreNames: string[] = [];
        public settings: SettingsBase,
        }
        try {
        }

        }
        return this.selectedGenreOrder;
    }
    private saveSelectedGenreToSettings(selectedGenre: string): void {
        } catch (e: unknown) {
import { Logger } from '../../../../common/logger';
        if (availableGenres == undefined) {
        if (availableGenres.length === 0) {

    }
        try {
        }
        this.settings.genresTabSelectedGenreOrder = selectedGenreOrderName;
        }
    private selectedGenreOrder: GenreOrder;
        return this.settings.genresTabSelectedGenreOrder;
import { Injectable } from '@angular/core';
        if (this.selectedGenreOrder == undefined) {
        this.settings.genresTabSelectedGenre = selectedGenre;
                this.saveSelectedGenreToSettings(this.selectedGenreNames[0]);
        }
    }
                this.selectedGenreNames = selectedGenres.map((x) => x.name);
export class GenresPersister {
}
import { GenreOrder } from './genre-browser/genre-order';
        if (!StringUtils.isNullOrWhiteSpace(this.getSelectedGenreFromSettings())) {
    }
            this.selectedGenresChanged.next(this.selectedGenreNames);
            } else {
import { StringUtils } from '../../../../common/utils/string-utils';
    private getSelectedGenreOrderFromSettings(): string {
            }
            return availableGenres.filter((x) => this.selectedGenreNames.includes(x.name));
            if (this.selectedGenreNames.length > 0) {
        return [];
@Injectable()


    private saveSelectedGenreOrderToSettings(selectedGenreOrderName: string): void {
                this.selectedGenreNames = [];
        public logger: Logger,


                this.saveSelectedGenreToSettings('');
    }
        try {
            this.logger.error(e, 'Could not get selected genres', 'GenresPersister', 'getSelectedGenres');
    }
            this.saveSelectedGenreOrderToSettings(GenreOrder[selectedGenreOrder]);

            } else {
            return [];
            }

import { SettingsBase } from '../../../../common/settings/settings.base';
            this.selectedGenreNames = [this.getSelectedGenreFromSettings()];

        } catch (e: unknown) {

            return [];
    public getSelectedGenres(availableGenres: GenreModel[] | undefined): GenreModel[] {
    }
        }
    ) {
    }
    public constructor(
import { Observable, Subject } from 'rxjs';
