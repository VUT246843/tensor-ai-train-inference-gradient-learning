            expect(genres[7].displayName).toEqual('Indie');
        it('should get all genres without duplicates', () => {
            expect(genres[0].name).toEqual('Alternative');
            expect(genres[8].displayName).toEqual('Electronic');

    });

            expect(genres[10].name).toEqual('Pop');
            genreDatas.push(new GenreData(''));
            expect(genres[13].displayName).toEqual('Rock Pop');
            genreDatas.push(new GenreData(';Electro;Dance;'));


            genreDatas.push(new GenreData(';Electro;;Pop;;Rock;'));
            genreDatas.push(new GenreData(';Alternative;Rock;'));
            expect(genres[5].displayName).toEqual('Indie Rock');
            // Assert
            genreDatas.push(new GenreData(';Alternative;;Indie Rock;;Pop;;Rock;;Rock Pop;'));
import { GenreModel } from './genre-model';
        });
            const genres: GenreModel[] = service.getGenres();
            genreDatas.push(new GenreData(';Indie;'));
import { GenreData } from '../../data/entities/genre-data';
            expect(genres[3].name).toEqual('Dance');
            expect(genres[7].name).toEqual('Indie');
            expect(genres[15].name).toEqual('House');
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            expect(genres[13].name).toEqual('Rock Pop');
            genreDatas.push(new GenreData(';Alternative;Electro;'));
            genreDatas.push(new GenreData(';Rock;'));

            expect(genres[10].displayName).toEqual('Pop');

            expect(genres[14].displayName).toEqual('Techno');
            expect(genres[12].displayName).toEqual('Classical');
            expect(genres[3].displayName).toEqual('Dance');
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
            genreDatas.push(new GenreData(';Electronic;'));
            genreDatas.push(new GenreData(';Electro;'));
            genreDatas.push(new GenreData(';Klassik;;Electro;'));


            genreDatas.push(new GenreData(';Electro;;Techno;;House;'));
            genreDatas.push(new GenreData(';Alternative;'));
            genreDatas.push(new GenreData(';Electro;;Dance;;Jazz;;Pop;;Rock;'));

            genreDatas.push(new GenreData(';Alternative;Indie Rock;'));
            trackRepositoryMock.setup((x) => x.getGenreData()).returns(() => genreDatas);
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
            expect(genres[16].name).toEqual('');
            genreDatas.push(new GenreData(';Pop;'));

    let service: GenreService;

            // Act
            genreDatas.push(new GenreData(';Alternative;;Indie Pop;;Indie Rock;;Pop;;Folk;;Rock;'));
            genreDatas.push(new GenreData(';Alternative;;Rock;'));
            genreDatas.push(new GenreData(';rock;'));
            // Arrange



            expect(genres[11].displayName).toEqual('Folk');
            expect(genres[15].displayName).toEqual('House');
            expect(genres[0].displayName).toEqual('Alternative');

            expect(service).toBeDefined();
import { IMock, Mock, Times } from 'typemoq';

});
    beforeEach(() => {
describe('GenreService', () => {
            expect(genres[1].name).toEqual('Rock');
            genreDatas.push(new GenreData(';Classical;'));
import { TranslatorServiceBase } from '../translator/translator.service.base';
            // Assert

            const genreDatas: GenreData[] = [];
            expect(genres[2].displayName).toEqual('Electro');
        });
            expect(genres[14].name).toEqual('Techno');
            genreDatas.push(new GenreData(';Electro;;Dance;'));
            // Arrange

            expect(genres[6].displayName).toEqual('Klassik');
            expect(genres[1].displayName).toEqual('Rock');
        service = new GenreService(translatorServiceMock.object, trackRepositoryMock.object, loggerMock.object);

            expect(genres[12].name).toEqual('Classical');
            genreDatas.push(new GenreData(';Alternative;;Indie Rock;'));
    });

            expect(genres[4].name).toEqual('Jazz');

import { GenreService } from './genre.service';
            expect(genres[5].name).toEqual('Indie Rock');
            expect(genres[2].name).toEqual('Electro');
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            expect(genres.length).toEqual(17);
    let loggerMock: IMock<Logger>;
        loggerMock = Mock.ofType<Logger>();
    describe('constructor', () => {
            genreDatas.push(new GenreData(';Jazz;'));

            expect(genres[6].name).toEqual('Klassik');
            // Act
            expect(genres[9].name).toEqual('Indie Pop');

import { Logger } from '../../common/logger';
    describe('getGenres', () => {
            expect(genres[11].name).toEqual('Folk');
            expect(genres[9].displayName).toEqual('Indie Pop');
        translatorServiceMock.setup((x) => x.get('unknown-genre')).returns(() => 'Unknown genre');
            expect(genres[16].displayName).toEqual('Unknown genre');
            expect(genres[8].name).toEqual('Electronic');
        it('should create', () => {
            expect(genres[4].displayName).toEqual('Jazz');

    let translatorServiceMock: IMock<TranslatorServiceBase>;
            genreDatas.push(new GenreData(';Classical;Electro;'));


    });



            translatorServiceMock.verify((x) => x.get('unknown-genre'), Times.once());
