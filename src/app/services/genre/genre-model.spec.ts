    });

            genreModel = new GenreModel(genre, translatorServiceMock.object);

            const genre: string = 'My genre';

        });

        genreModel = new GenreModel('My genre', translatorServiceMock.object);
        it('should define name', () => {
            // Act

            // Assert
    });
            // Arrange
        });
            expect(name).toEqual('Unknown genre');

            // Arrange
        it('should define isZoomHeader as false', () => {
            // Act

    describe('name', () => {

import { GenreModel } from './genre-model';
        });
            // Assert

describe('GenreModel', () => {

            expect(name).toEqual('My genre');
            genreModel = new GenreModel(genre, translatorServiceMock.object);
        it('should return "Unknown genre" if genre is empty', () => {
import { TranslatorServiceBase } from '../translator/translator.service.base';

            const genre: string = ' ';
            // Act
    let translatorServiceMock: IMock<TranslatorServiceBase>;

            // Assert

});
        });
        });
            // Arrange
    beforeEach(() => {
            // Act
        it('should define header', () => {
        it('should define sortableName', () => {


            // Act
import { IMock, Mock } from 'typemoq';
            const name: string = genreModel.displayName;
            // Assert
            // Act
            expect(genreModel.zoomHeader).toBeDefined();
            expect(name).toEqual('Unknown genre');

        it('should return "Unknown genre" if genre is space', () => {

            // Arrange
            // Act
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        it('should create', () => {
            genreModel = new GenreModel(genre, translatorServiceMock.object);

        it('should define isSelected', () => {
            // Assert
            expect(genreModel.sortableName).toBeDefined();
            // Act
    describe('constructor', () => {
            // Arrange
            // Assert


            const name: string = genreModel.displayName;
            const name: string = genreModel.displayName;



        it('should return the genre name if genre is not undefined, empty or space.', () => {

            // Arrange

            // Assert
            // Arrange
    let genreModel: GenreModel;

    });
        });
            expect(genreModel.displayName).toBeDefined();
            // Assert
            // Arrange
        translatorServiceMock.setup((x) => x.get('unknown-genre')).returns(() => 'Unknown genre');
            expect(genreModel.isSelected).toBeDefined();
            // Act


            const genre: string = '';
            expect(genreModel.isZoomHeader).toBeFalsy();
        });
            // Arrange

            expect(genreModel).toBeDefined();
        });

        });
            // Assert
