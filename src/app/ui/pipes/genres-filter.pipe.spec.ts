
            // Act
        it('should return the given genres if textToContain is empty', () => {
            // Arrange
            searchServiceMock.setup((x) => x.matchesSearchText('genre1', It.isAny())).returns(() => false);
    function createPipe(): GenresFilterPipe {
            // Act
            // Act

            const genres: GenreModel[] = createGenres();
            const filteredGenres: GenreModel[] = pipe.transform(genres, undefined);

            searchServiceMock.setup((x) => x.matchesSearchText('genre1', It.isAny())).returns(() => true);
import { GenreModel } from '../../services/genre/genre-model';
            const genres: GenreModel[] = createGenres();

        return new GenresFilterPipe(searchServiceMock.object);
        return [genre1, genre2];
            const filteredGenres: GenreModel[] = pipe.transform(genres, ' ');
import { SearchServiceBase } from '../../services/search/search.service.base';


            searchServiceMock.setup((x) => x.matchesSearchText('genre2', It.isAny())).returns(() => false);
        });

        });
import { GenresFilterPipe } from './genres-filter.pipe';
import { IMock, It, Mock } from 'typemoq';
            // Act
            const pipe: GenresFilterPipe = createPipe();
            expect(filteredGenres).toEqual(genres);

            const genres: GenreModel[] = createGenres();
            // Assert
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const filteredGenres: GenreModel[] = pipe.transform(genres, '');
            // Assert
            expect(filteredGenres.length).toEqual(1);
describe('GenresFilterPipe', () => {
            expect(filteredGenres).toEqual(genres);

            const filteredGenres: GenreModel[] = pipe.transform(genres, 'dummy');


    let translatorServiceMock: IMock<TranslatorServiceBase>;
            const pipe: GenresFilterPipe = createPipe();
    }
            // Arrange
            // Assert


        searchServiceMock = Mock.ofType<SearchServiceBase>();

        });
    describe('transform', () => {
    beforeEach(() => {
            // Assert
            const genres: GenreModel[] = createGenres();
            const pipe: GenresFilterPipe = createPipe();
        it('should return the given genres if textToContain is undefined', () => {

});
            expect(filteredGenres[0]).toEqual(genres[0]);
        it('should return the given genres if textToContain is space', () => {

            // Arrange
            // Arrange
        const genre1: GenreModel = new GenreModel('genre1', translatorServiceMock.object);
    let searchServiceMock: IMock<SearchServiceBase>;
        });
    function createGenres(): GenreModel[] {

            const genres: GenreModel[] = createGenres();
            searchServiceMock.setup((x) => x.matchesSearchText('genre2', It.isAny())).returns(() => false);

            const filteredGenres: GenreModel[] = pipe.transform(genres, 'dummy');
        const genre2: GenreModel = new GenreModel('genre2', translatorServiceMock.object);
        });
            // Arrange
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';

    });

            expect(filteredGenres).toEqual(genres);
        it('should return only genres with a name containing the search text', () => {

    }
    });

            expect(filteredGenres.length).toEqual(0);
            // Act
            const pipe: GenresFilterPipe = createPipe();
        it('should return no artists if none of their names contain the search text', () => {
            const pipe: GenresFilterPipe = createPipe();
            // Assert
