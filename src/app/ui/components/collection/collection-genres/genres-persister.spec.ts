

            settingsStub.genresTabSelectedGenre = 'genre 2';

            persister = new GenresPersister(settingsStub, loggerMock.object);
            // Assert
        it('should create', () => {
            expect(persister.getSelectedGenres([genre1, genre2])).toEqual([]);
            expect(persister.getSelectedGenres([genre1, genre2, genre3])).toEqual([genre1]);
    describe('setSelectedGenres', () => {
    });

            let receivedGenreNames: string[] = [];
            persister.setSelectedGenres(undefined);
            expect(selectedGenres).toEqual([]);
    let genre1: GenreModel;


            settingsStub.genresTabSelectedGenreOrder = 'byGenreDescending';
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());

import { Logger } from '../../../../common/logger';
            // Act
            persister = new GenresPersister(settingsStub, loggerMock.object);
            // Act
    describe('setSelectedGenreOrder', () => {
    let genre2: GenreModel;
            const selectedGenres: GenreModel[] = persister.getSelectedGenres([genre1, genre2]);
            persister = new GenresPersister(settingsStub, loggerMock.object);
            expect(persister.getSelectedGenreOrder()).toEqual(GenreOrder.byGenreDescending);
            // Assert
            expect(selectedGenres).toEqual([]);
import { GenresPersister } from './genres-persister';
        });
            settingsStub.genresTabSelectedGenreOrder = 'byGenreDescending';

        });


                }),


            const selectedGenres: GenreModel[] = persister.getSelectedGenres([genre1, genre2]);

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            expect(receivedGenreNames[1]).toEqual('');

            // Assert
            persister.setSelectedGenres([genre3]);
    describe('constructor', () => {

        });
            settingsStub.genresTabSelectedGenreOrder = 'byGenreDescending';
            // Arrange
            // Act
            expect(settingsStub.genresTabSelectedGenre).toEqual('genre 1');
            // Assert
            // Arrange
});
        });
            // Assert
            settingsStub.genresTabSelectedGenre = 'genre 1';
        it('should set the selected genre order', () => {
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());



    });
            // Arrange
        });
        });
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
            const selectedGenres: GenreModel[] = persister.getSelectedGenres([]);
            // Assert
        });
            expect(settingsStub.genresTabSelectedGenre).toEqual('');
            // Arrange
            settingsStub.genresTabSelectedGenreOrder = 'byGenreDescending';
        settingsStub = { genresTabSelectedGenre: '', genresTabSelectedGenreOrder: '' };

        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Act
            persister = new GenresPersister(settingsStub, loggerMock.object);
            settingsStub.genresTabSelectedGenreOrder = 'byGenreDescending';
            // Arrange

        it('should notify that the selected genres have changed', () => {
        genre1 = new GenreModel('genre 1', translatorServiceMock.object);
            // Assert
    let loggerMock: IMock<Logger>;
            // Assert
            // Assert
        it('should clear the selected genres if selectedGenres is undefined', () => {

            // Act

                    receivedGenreNames = genreNames;
        });
            subscription.unsubscribe();
        genre2 = new GenreModel('genre 2', translatorServiceMock.object);
    let persister: GenresPersister;
        it('should set the selected genres if selectedGenres has elements', () => {
    beforeEach(() => {
            // Arrange
describe('GenresPersister', () => {
        it('should return the selected genres if the selected genres are found in availableGenres', () => {
            // Act
            expect(settingsStub.genresTabSelectedGenreOrder).toEqual('byGenreDescending');
        persister = new GenresPersister(settingsStub, loggerMock.object);
            persister.setSelectedGenres([]);

        loggerMock = Mock.ofType<Logger>();
            // Act
        });
            expect(persister).toBeDefined();

            // Act
            const selectedGenres: GenreModel[] = persister.getSelectedGenres(undefined);
            expect(selectedGenres).toEqual([genre1, genre2]);

        it('should return an empty collection if the selected genres are not found in availableGenres', () => {
        });

            persister.setSelectedGenres([genre1, genre3]);
            expect(persister.getSelectedGenreOrder()).toEqual(GenreOrder.byGenreDescending);
            // Arrange


        it('should return an empty collection if availableGenres is undefined', () => {
            // Arrange
            );

        });

            persister.setSelectedGenres([genre1, genre2, genre3]);

import { IMock, It, Mock, Times } from 'typemoq';
    });
import { GenreOrder } from './genre-browser/genre-order';

        subscription = new Subscription();
            persister.setSelectedGenres([genre1, genre3]);
import { GenreModel } from '../../../../services/genre/genre-model';

        it('should initialize from the settings', () => {


            subscription.add(
    let settingsStub: any;
            // Act
    describe('getSelectedGenres', () => {
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
    let genre3: GenreModel;
            // Act
            // Arrange
            expect(selectedGenres).toEqual([]);
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());

            persister.setSelectedGenres([genre1, genre2]);
            persister.setSelectedGenres([genre1, genre2]);
    });
            // Arrange
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
            persister = new GenresPersister(settingsStub, loggerMock.object);

            persister.setSelectedGenreOrder(GenreOrder.byGenreDescending);
            // Assert
            persister.setSelectedGenres([genre1, genre2]);
                persister.selectedGenresChanged$.subscribe((genreNames: string[]) => {
            // Act

import { Subscription } from 'rxjs';
            expect(receivedGenreNames.length).toEqual(2);

            expect(persister.getSelectedGenres([genre1, genre2, genre3])).toEqual([]);
    });
            // Arrange
        genre3 = new GenreModel('', translatorServiceMock.object);
    let subscription: Subscription;
            expect(receivedGenreNames[0]).toEqual('genre 1');

    let translatorServiceMock: IMock<TranslatorServiceBase>;
            expect(persister.getSelectedGenres([genre3])).toEqual([genre3]);
        it('should return an empty collection if availableGenres is empty', () => {

            // Assert
        it('should clear the selected genres if selectedGenres is empty', () => {
