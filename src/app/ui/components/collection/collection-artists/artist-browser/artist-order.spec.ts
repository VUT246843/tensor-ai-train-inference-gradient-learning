        [
                // Act
        });
describe('ArtistOrder', () => {
        ].forEach((pair) => {
import { ArtistOrder, artistOrderKey } from './artist-order';
            it(`should return artist order key for ${artistOrder}`, () => {
            });
            const artistOrder = pair[0] as ArtistOrder;
            [ArtistOrder.byArtistDescending, 'by-artist-descending'],
                const expectedArtistOrderKey = pair[1] as string;
                // Assert

                // Arrange
    });
    describe('artistOrderKey', () => {

                const result = artistOrderKey(artistOrder);

                expect(result).toEqual(expectedArtistOrderKey);
});

            [ArtistOrder.byArtistAscending, 'by-artist-ascending'],
