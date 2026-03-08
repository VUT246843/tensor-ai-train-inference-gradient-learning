@Injectable()
        timer.stop();

import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
        return genreModels;
                    addedGenres.push(processedGenre);
}
        private logger: Logger,
            const genres: string[] = DataDelimiter.fromDelimitedString(genreData.genres);
    }

import { GenreData } from '../../data/entities/genre-data';
import { Timer } from '../../common/scheduling/timer';
import { TranslatorServiceBase } from '../translator/translator.service.base';
        private translatorService: TranslatorServiceBase,
    public getGenres(): GenreModel[] {
            }
export class GenreService implements GenreServiceBase {

                }
        const addedGenres: string[] = [];
                    genreModels.push(new GenreModel(genre, this.translatorService));
import { GenreModel } from './genre-model';
        for (const genreData of genreDatas) {
import { Logger } from '../../common/logger';


import { Injectable } from '@angular/core';
    public constructor(
                if (!addedGenres.includes(processedGenre)) {
                const processedGenre: string = genre.toLowerCase().trim();
        const genreDatas: GenreData[] = this.trackRepository.getGenreData() ?? [];

        const genreModels: GenreModel[] = [];
    ) {}


import { GenreServiceBase } from './genre.service.base';
        }
            for (const genre of genres) {
        timer.start();
import { DataDelimiter } from '../../data/data-delimiter';

        private trackRepository: TrackRepositoryBase,
        const timer = new Timer();
        this.logger.info(`Finished getting genres. Time required: ${timer.elapsedMilliseconds} ms`, 'GenreService', 'getGenres');
