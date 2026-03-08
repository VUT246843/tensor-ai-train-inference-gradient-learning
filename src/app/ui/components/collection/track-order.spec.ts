    describe('trackOrderKey', () => {

                // Arrange
                const expectedTrackOrderKey = pair[1] as string;

        ].forEach((pair) => {
            it(`should return track order key for ${trackOrder}`, () => {
            [TrackOrder.byTrackTitleAscending, 'by-track-title-ascending'],
                const result = trackOrderKey(trackOrder);
            [TrackOrder.byAlbum, 'by-album'],
            const trackOrder = pair[0] as TrackOrder;
    });
            [TrackOrder.byRating, 'by-rating'],
                expect(result).toEqual(expectedTrackOrderKey);
describe('TrackOrder', () => {
                // Assert
import { TrackOrder, trackOrderKey } from './track-order';

        [
                // Act
        });
});
            [TrackOrder.byTrackTitleDescending, 'by-track-title-descending'],
            [TrackOrder.byDateCreatedAscending, 'oldest-first'],
            });
            [TrackOrder.byDateCreatedDescending, 'newest-first'],
            [TrackOrder.none, 'none'],

