            expect(filteredArtists[0]).toEqual(artists[0]);
            expect(filteredArtists).toEqual(artists);
import { ArtistsFilterPipe } from './artists-filter.pipe';

        });
            // Assert

    function createArtists(): ArtistModel[] {

            const pipe: ArtistsFilterPipe = createPipe();

        return new ArtistsFilterPipe(searchServiceMock.object);

        const artist2: ArtistModel = new ArtistModel('artist2', translatorServiceMock.object);
            expect(filteredArtists).toEqual(artists);

            const filteredArtists: ArtistModel[] = pipe.transform(artists, '');
            // Assert

    }
            expect(filteredArtists).toEqual(artists);
            const artists: ArtistModel[] = createArtists();
        it('should return only artists with a name containing the search text', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const filteredArtists: ArtistModel[] = pipe.transform(artists, 'dummy');
            const filteredArtists: ArtistModel[] = pipe.transform(artists, undefined);
            searchServiceMock.setup((x) => x.matchesSearchText('artist1', It.isAny())).returns(() => false);
            const artists: ArtistModel[] = createArtists();
    describe('transform', () => {
        it('should return the given artists if textToContain is empty', () => {
            // Arrange
        it('should return no artists if none of their names contain the search text', () => {
            // Act

import { ArtistModel } from '../../services/artist/artist-model';

            const pipe: ArtistsFilterPipe = createPipe();
describe('ArtistFilterPipe', () => {
            const pipe: ArtistsFilterPipe = createPipe();


            // Assert

        it('should return the given artists if textToContain is space', () => {
            // Arrange

        });

import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
        it('should return the given artists if textToContain is undefined', () => {


            // Act

    function createPipe(): ArtistsFilterPipe {
            // Arrange
            const pipe: ArtistsFilterPipe = createPipe();
            const artists: ArtistModel[] = createArtists();
        searchServiceMock = Mock.ofType<SearchServiceBase>();
        return [artist1, artist2];
            expect(filteredArtists.length).toEqual(0);
import { SearchServiceBase } from '../../services/search/search.service.base';
    });

            expect(filteredArtists.length).toEqual(1);

    }
        });
            const filteredArtists: ArtistModel[] = pipe.transform(artists, ' ');
            const filteredArtists: ArtistModel[] = pipe.transform(artists, 'dummy');
            // Act
});
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Arrange
        });
        const artist1: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
        });
            searchServiceMock.setup((x) => x.matchesSearchText('artist2', It.isAny())).returns(() => false);
    beforeEach(() => {
            const artists: ArtistModel[] = createArtists();
            // Arrange

    let searchServiceMock: IMock<SearchServiceBase>;
            searchServiceMock.setup((x) => x.matchesSearchText('artist2', It.isAny())).returns(() => false);
            const pipe: ArtistsFilterPipe = createPipe();
            // Assert
            // Act
            // Assert
            const artists: ArtistModel[] = createArtists();

    });

            searchServiceMock.setup((x) => x.matchesSearchText('artist1', It.isAny())).returns(() => true);
import { IMock, It, Mock } from 'typemoq';
            // Act
