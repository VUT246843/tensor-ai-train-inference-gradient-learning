    });
            expect(artist).toBeDefined();
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
    });
    beforeEach(() => {
        it('should be false when there are no similar artists', () => {

            // Act, Assert
import { DesktopBase } from '../../common/io/desktop.base';


            expect(artist.name).toEqual('name');
    describe('constructor', () => {
        it('should create', () => {
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', '');
            expect(artist.name).toEqual('');
        it('should browse to url when desktop is defined and url is not empty', async () => {
        it('should not browse to url when url is empty', async () => {
    describe('hasSimilarArtists', () => {
            // Arrange

        it('should create instance with empty properties', () => {


        });
    describe('empty', () => {
            expect(artist).toBeDefined();
        });

import { IMock, It, Mock, Times } from 'typemoq';

    });
            await artist.browseToUrlAsync();
            expect(artist.name).toEqual('');

        it('should set properties', () => {

        desktopMock = Mock.ofType<DesktopBase>();
        });
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', '', 'imageUrl', 'biography');
            // Act, Assert

            expect(artist.biography).toEqual('biography');
            expect(artist.hasSimilarArtists).toBeTruthy();
        });
            // Assert

            expect(artist.url).toEqual('url');
            // Arrange
            artist.addSimilarArtist('similarName', 'similarUrl', 'similarImageUrl');
        });
            // Arrange
        it('should be false when there is no biography', () => {
            expect(artist.imageUrl).toEqual('imageUrl');



            // Assert
            // Arrange
            // Act, Assert
            // Arrange
            expect(artist.similarArtists.length).toEqual(1);

            // Act
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
            // Act
    describe('addSimilarArtist', () => {
            // Act
    });
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
            expect(artist.name).toEqual('');
import { ArtistInformation } from './artist-information';
            await artist.browseToUrlAsync();

            desktopMock.verify((x) => x.openLinkAsync(It.isAny()), Times.never());
            // Assert
    describe('hasBiography', () => {
        it('should not browse to url when desktop is undefined', async () => {
            desktopMock.verify((x) => x.openLinkAsync(It.isAny()), Times.never());
        });

        });
            const artist: ArtistInformation = new ArtistInformation(undefined, 'name', 'url', 'imageUrl', 'biography');

            desktopMock.verify((x) => x.openLinkAsync('url'), Times.once());
            const artist: ArtistInformation = ArtistInformation.empty();


            // Act
            // Arrange
        it('should be true when there are similar artists', () => {
            // Assert
            expect(artist.hasSimilarArtists).toBeTruthy();
            expect(artist.similarArtists[0].url).toEqual('similarUrl');


            // Act, Assert
            // Act, Assert
            expect(artist.hasSimilarArtists).toBeFalsy();
            // Assert
    let desktopMock: IMock<DesktopBase>;
    });
        it('should be true when there is a biography', () => {
            // Act
        it('should add a similar artist', () => {
});
describe('ArtistInformation', () => {
            expect(artist.hasBiography).toBeTruthy();
    describe('browseToUrlAsync', () => {

            // Arrange
            expect(artist.hasBiography).toBeFalsy();
            expect(artist.similarArtists[0].name).toEqual('similarName');
            expect(artist.similarArtists[0].imageUrl).toEqual('similarImageUrl');

            artist.addSimilarArtist('similarName', 'similarUrl', 'similarImageUrl');
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
        });

        });

            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
    });
            // Assert
            const artist: ArtistInformation = new ArtistInformation(desktopMock.object, 'name', 'url', 'imageUrl', 'biography');
            await artist.browseToUrlAsync();
            // Arrange

    });
            // Arrange
        });

        });
            // Arrange
            // Arrange
            expect(artist.name).toEqual('');
            // Act
