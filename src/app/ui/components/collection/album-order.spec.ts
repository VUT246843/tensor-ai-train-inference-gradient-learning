                // Arrange
            it(`should return album order key for ${albumOrder}`, () => {
    describe('albumOrderKey', () => {
            [AlbumOrder.byYearDescending, 'by-year-descending'],
describe('AlbumOrder', () => {

            [AlbumOrder.byDateAdded, 'by-date-added'],
            [AlbumOrder.byLastPlayed, 'by-last-played'],
                // Act
            [AlbumOrder.random, 'random'],
            [AlbumOrder.byAlbumTitleAscending, 'by-album-title-ascending'],
    });

                // Assert
            [AlbumOrder.byAlbumTitleDescending, 'by-album-title-descending'],

});
                expect(result).toEqual(expectedAlbumOrderKey);
            [AlbumOrder.byYearAscending, 'by-year-ascending'],
                const expectedAlbumOrderKey = pair[1] as string;

            const albumOrder = pair[0] as AlbumOrder;
            [AlbumOrder.byDateCreated, 'by-date-created'],
        });
            });
        ].forEach((pair) => {
import { AlbumOrder, albumOrderKey } from './album-order';
            [AlbumOrder.byAlbumArtist, 'by-album-artist'],
                const result = albumOrderKey(albumOrder);
        [
