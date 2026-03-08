                const expectedPlaylistOrderKey = pair[1] as string;
                // Arrange
        [
    });
            const playlistOrder = pair[0] as PlaylistOrder;
                expect(result).toEqual(expectedPlaylistOrderKey);

    describe('playlistOrderKey', () => {
            [PlaylistOrder.byPlaylistNameDescending, 'by-playlist-name-descending'],
                // Act
                const result = playlistOrderKey(playlistOrder);
            });

            it(`should return playlist order key for ${playlistOrder}`, () => {
import { PlaylistOrder, playlistOrderKey } from './playlist-order';
                // Assert

        ].forEach((pair) => {
        });
});

describe('PlaylistOrder', () => {
            [PlaylistOrder.byPlaylistNameAscending, 'by-playlist-name-ascending'],
