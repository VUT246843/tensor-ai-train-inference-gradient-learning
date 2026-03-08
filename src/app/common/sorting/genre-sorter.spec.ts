            // Arrange
    describe('sortAscending', () => {
import { Logger } from '../logger';

            genreModel11,

            expect(sortedGenres[9]).toBe(genreModel8);
            // Arrange
    let genreModel8: GenreModel;
            expect(sortedGenres.length).toEqual(0);


            // Assert
        });
            expect(sortedGenres[5]).toBe(genreModel4);
            const sortedGenres: GenreModel[] = genreSorter.sortAscending([]);
            expect(sortedGenres[6]).toBe(genreModel5);
    let loggerMock: IMock<Logger>;
            expect(sortedGenres[4]).toBe(genreModel3);
            expect(sortedGenres[4]).toBe(genreModel6);
            genreModel8,
            expect(sortedGenres.length).toEqual(12);
            expect(sortedGenres[11]).toBe(genreModel10);

            expect(sortedGenres[10]).toBe(genreModel12);
            genreModel5,

        genreModel1 = new GenreModel('Genre1', translatorServiceMock.object);
            // Assert

import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            expect(sortedGenres[8]).toBe(genreModel7);
            expect(sortedGenres[10]).toBe(genreModel9);
import { GenreModel } from '../../services/genre/genre-model';
            genreModel4,
        genreSorter = new GenreSorter(loggerMock.object);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const sortedGenres: GenreModel[] = genreSorter.sortAscending(genres);
        });
        loggerMock = Mock.ofType<Logger>();
            genreModel12,
    let genreModel9: GenreModel;
        genreModel2 = new GenreModel('Genre2', translatorServiceMock.object);
    let genreModel2: GenreModel;

            // Act


            expect(sortedGenres[11]).toBe(genreModel11);
            expect(sortedGenres[7]).toBe(genreModel6);

            expect(sortedGenres[2]).toBe(genreModel8);
            // Arrange
        it('should return an empty collection if undefined is provided', () => {
    let genreModel12: GenreModel;
            genreModel9,
            expect(sortedGenres[1]).toBe(genreModel9);
    let genreModel4: GenreModel;
    describe('sortDescending', () => {
            // Act
    });

            // Assert
    let genres: GenreModel[];
        genreModel7 = new GenreModel('Genre7', translatorServiceMock.object);
            expect(sortedGenres[8]).toBe(genreModel2);
        });
        genres = [
            genreModel7,
        genreModel11 = new GenreModel('', translatorServiceMock.object);
    let genreModel6: GenreModel;
            expect(sortedGenres[6]).toBe(genreModel4);
    let genreModel1: GenreModel;
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        genreModel5 = new GenreModel('Genre5', translatorServiceMock.object);
            genreModel10,
    beforeEach(() => {
            expect(sortedGenres[9]).toBe(genreModel1);
            expect(sortedGenres[0]).toBe(genreModel11);

            genreModel6,
            const sortedGenres: GenreModel[] = genreSorter.sortDescending(undefined);
            const sortedGenres: GenreModel[] = genreSorter.sortDescending(genres);
        genreModel3 = new GenreModel('Genre3', translatorServiceMock.object);
        genreModel8 = new GenreModel('Genre8', translatorServiceMock.object);
            expect(sortedGenres.length).toEqual(0);
            expect(sortedGenres[5]).toBe(genreModel5);
            // Act
        it('should return an empty collection if empty is provided', () => {
        it('should return an empty collection if empty is provided', () => {

        genreModel6 = new GenreModel('Genre6', translatorServiceMock.object);

        it('should sort descending', () => {

            // Assert

            expect(sortedGenres.length).toEqual(0);
            // Act
    let genreSorter: GenreSorter;
            expect(sortedGenres[2]).toBe(genreModel1);
        genreModel4 = new GenreModel('Genre4', translatorServiceMock.object);
            expect(sortedGenres.length).toEqual(12);
        it('should sort ascending', () => {
            genreModel2,
    });
            // Arrange
    let genreModel10: GenreModel;
            // Arrange
    });
import { IMock, Mock } from 'typemoq';

        ];
            expect(sortedGenres.length).toEqual(0);
    let genreModel5: GenreModel;
    let genreModel11: GenreModel;
        genreModel12 = new GenreModel('Жанр', translatorServiceMock.object);

});
            expect(sortedGenres[7]).toBe(genreModel3);
        });
        genreModel9 = new GenreModel('Genre9', translatorServiceMock.object);
            genreModel3,
            const sortedGenres: GenreModel[] = genreSorter.sortAscending(undefined);
            expect(sortedGenres[3]).toBe(genreModel7);
            expect(sortedGenres[1]).toBe(genreModel12);
    let genreModel7: GenreModel;
            // Assert
            expect(sortedGenres[3]).toBe(genreModel2);

        genreModel10 = new GenreModel('Genre10', translatorServiceMock.object);
            // Arrange
        });
            // Act

    let genreModel3: GenreModel;
            expect(sortedGenres[0]).toBe(genreModel10);

        });


            // Act
        it('should return an empty collection if undefined is provided', () => {
            // Assert
describe('GenreSorter', () => {
import { GenreSorter } from './genre-sorter';

            const sortedGenres: GenreModel[] = genreSorter.sortDescending([]);
            genreModel1,
