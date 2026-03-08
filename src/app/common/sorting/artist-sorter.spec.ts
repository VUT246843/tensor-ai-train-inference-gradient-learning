
    let loggerMock: IMock<Logger>;
            expect(sortedArtists[11]).toBe(artistModel10);
            artistModel12,
            artistModel4,
            expect(sortedArtists[1]).toBe(artistModel9);
    beforeEach(() => {
        ];
        artistModel3 = new ArtistModel('Artist3', translatorServiceMock.object);
            const sortedArtists: ArtistModel[] = artistSorter.sortAscending([]);
        });
            // Act
            expect(sortedArtists.length).toEqual(0);
    });
    describe('sortAscending', () => {

    let artistModel1: ArtistModel;
            // Act
import { IMock, Mock } from 'typemoq';

            expect(sortedArtists[0]).toBe(artistModel11);

            artistModel1,
            const sortedArtists: ArtistModel[] = artistSorter.sortAscending(artists);
            expect(sortedArtists.length).toEqual(0);
            expect(sortedArtists[6]).toBe(artistModel5);

            expect(sortedArtists[7]).toBe(artistModel3);
        it('should return an empty collection if empty is provided', () => {
        artistModel10 = new ArtistModel('Artist10', translatorServiceMock.object);
        artistSorter = new ArtistSorter(loggerMock.object);
            artistModel6,
            // Assert
            // Assert
    let artistSorter: ArtistSorter;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

    let artistModel3: ArtistModel;
    let artistModel2: ArtistModel;
            artistModel11,

    });
    let artistModel10: ArtistModel;



            artistModel7,
            artistModel8,
            // Act
            // Arrange
        it('should return an empty collection when undefined is provided', () => {
            expect(sortedArtists[9]).toBe(artistModel8);

            // Act
            artistModel5,
import { ArtistModel } from '../../services/artist/artist-model';
        it('should sort ascending', () => {
            // Act
        artistModel2 = new ArtistModel('Artist2', translatorServiceMock.object);

            expect(sortedArtists[7]).toBe(artistModel6);
            // Assert
            expect(sortedArtists[10]).toBe(artistModel9);
    describe('sortDescending', () => {
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            expect(sortedArtists[2]).toBe(artistModel1);
            expect(sortedArtists[0]).toBe(artistModel10);
        artistModel7 = new ArtistModel('Artist7', translatorServiceMock.object);
        });
        loggerMock = Mock.ofType<Logger>();

            expect(sortedArtists[3]).toBe(artistModel2);
            const sortedArtists: ArtistModel[] = artistSorter.sortAscending(undefined);

            expect(sortedArtists[10]).toBe(artistModel12);
            artistModel9,
            artistModel3,
        it('should return an empty collection if undefined is provided', () => {

    let artistModel5: ArtistModel;
            artistModel10,

        });
            artistModel2,
        artistModel1 = new ArtistModel('Artist1', translatorServiceMock.object);
        artistModel5 = new ArtistModel('Artist5', translatorServiceMock.object);
            expect(sortedArtists.length).toEqual(12);

            expect(sortedArtists[8]).toBe(artistModel7);

            // Act
    let artistModel7: ArtistModel;
    let artistModel6: ArtistModel;
    let artistModel8: ArtistModel;
            expect(sortedArtists[9]).toBe(artistModel1);
            expect(sortedArtists[3]).toBe(artistModel7);
        artistModel4 = new ArtistModel('Artist4', translatorServiceMock.object);
    let artistModel11: ArtistModel;

            // Arrange
        artists = [
        it('should return an empty collection if empty is provided', () => {
});
            expect(sortedArtists[8]).toBe(artistModel2);
            // Assert
    let artists: ArtistModel[];
            // Arrange
        });
            // Assert
            // Arrange
    let artistModel12: ArtistModel;
            const sortedArtists: ArtistModel[] = artistSorter.sortDescending([]);

    });
describe('ArtistSorter', () => {
            expect(sortedArtists[5]).toBe(artistModel4);
            expect(sortedArtists[4]).toBe(artistModel6);

    let artistModel9: ArtistModel;
            expect(sortedArtists[6]).toBe(artistModel4);
import { Logger } from '../logger';
            // Arrange
        });
            expect(sortedArtists[11]).toBe(artistModel11);
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';

            expect(sortedArtists[1]).toBe(artistModel12);
            expect(sortedArtists.length).toEqual(0);
import { ArtistSorter } from './artist-sorter';
            const sortedArtists: ArtistModel[] = artistSorter.sortDescending(artists);
        artistModel6 = new ArtistModel('Artist6', translatorServiceMock.object);
    let artistModel4: ArtistModel;
            expect(sortedArtists.length).toEqual(0);

        artistModel8 = new ArtistModel('Artist8', translatorServiceMock.object);
            expect(sortedArtists[2]).toBe(artistModel8);
            expect(sortedArtists[5]).toBe(artistModel5);
        artistModel12 = new ArtistModel('Артист', translatorServiceMock.object);
        });

        artistModel11 = new ArtistModel('', translatorServiceMock.object);

            const sortedArtists: ArtistModel[] = artistSorter.sortDescending(undefined);
            expect(sortedArtists.length).toEqual(12);
        it('should sort descending', () => {
            // Arrange
            // Assert
        artistModel9 = new ArtistModel('Artist9', translatorServiceMock.object);
            expect(sortedArtists[4]).toBe(artistModel3);
