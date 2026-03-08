            await ratingComponent.setRatingAsync(4);
    }


    describe('setRatingAsync', () => {
            await ratingComponent.setRatingAsync(3);

                ratingComponent.track = createTrackModelWithRating(8);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Act
            const ratingComponent: RatingComponent = createComponent();
    function createComponent(): RatingComponent {
        it('should set and get track', () => {
        });
            // Act
        settingsMock = new SettingsMock();

            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            ratingComponent.track = trackModel;
        describe('empty stars', () => {
            // Assert
    function createTrackModelWithRating(rating: number): TrackModel {
                expect(ratingComponent.getStarClass(4)).toEqual('fas fa-star-half-alt accent-color-important');


            // Assert
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        it('should return empty star when track is undefined', () => {
            expect(ratingComponent.fontSize).toEqual(13);
            // Arrange

                ratingComponent.track = createTrackModelWithRating(0);

            translatorServiceMock.object,
            // Act
            // Arrange
            const ratingComponent: RatingComponent = createComponent();
                ratingComponent.track = createTrackModelWithRating(1);

        });
    let settingsMock: any;
            ratingComponent.track = trackModel;
            // Arrange
            // Arrange

        });
                ratingComponent.track = createTrackModelWithRating(6);

            expect(cls).toEqual('far fa-star secondary-text');
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        describe('full stars', () => {
            });
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);



    beforeEach(() => {
            // Arrange
            await ratingComponent.setRatingAsync(3);

    describe('track', () => {
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
});


            const track: Track = new Track('Path');
describe('RatingComponent', () => {
            dialogServiceMock.verify((x) => x.showErrorDialog('save-rating-error'), Times.never());
            const ratingComponent: RatingComponent = createComponent();

        dateTimeMock = Mock.ofType<DateTime>();
import { IMock, It, Mock, Times } from 'typemoq';

            const ratingComponent: RatingComponent = createComponent();
        track.rating = rating;
        metadataServiceMock = Mock.ofType<MetadataService>();
            it('star 1 should be full when rating >= 2', () => {
    let metadataServiceMock: IMock<MetadataService>;
                expect(ratingComponent.getStarClass(3)).toEqual('fas fa-star accent-color-important');
            // Assert
            // Act
        });
        beforeEach(() => {
        });

            const ratingComponent: RatingComponent = createComponent();

    let dialogServiceMock: IMock<DialogServiceBase>;

            expect(track.rating).toEqual(0);
            // Assert
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        it('should initialize lineHeight as 1', () => {
            // Assert
                expect(ratingComponent.getStarClass(1)).toEqual('fas fa-star-half-alt accent-color-important');
        );
            // Arrange
            // Act

            });
        it('should initialize fontSize from the selected font size', () => {
    });

            ratingComponent.track = trackModel;
        it('should not show an error dialog when saving the track rating is successful', async () => {
            ratingComponent = createComponent();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { RatingComponent } from './rating.component';
            metadataServiceMock.verify((x) => x.saveTrackRatingAsync(trackModel), Times.once());

        });
            });
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        it('should set track rating to 0 when given 0', async () => {
        });
            });
        return new RatingComponent(
            metadataServiceMock.setup((x) => x.saveTrackRatingAsync(It.isAny())).throws(new Error('The error text'));
            // Act
            const track: Track = new Track('Path');
    });
            // Assert
            });
        it('should save the track rating', async () => {
        const track: Track = new Track('Path');

        it('should set track rating to given rating when it is not equal to the given rating', async () => {



                expect(ratingComponent.getStarClass(1)).toEqual('fas fa-star accent-color-important');


    });


            // Assert

        translatorServiceMock.setup((x) => x.getAsync('save-rating-error')).returns(() => Promise.resolve('save-rating-error'));
        describe('half stars', () => {

            metadataServiceMock.object,
            const ratingComponent: RatingComponent = createComponent();
            const track: Track = new Track('Path');
import { SettingsMock } from '../../../testing/settings-mock';
            dialogServiceMock.object,
import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
            await ratingComponent.setRatingAsync(3);
            const ratingComponent: RatingComponent = createComponent();
            // Act
            // Arrange
            ratingComponent.track = trackModel;
        });
            // Assert
            track.rating = 3;
            expect(ratingComponent.lineHeight).toEqual(1);
            ratingComponent.track = createTrackModelWithRating(3);

            it('star 3 should be full when rating >= 6', () => {
            it('star 1 should be empty when rating = 0', () => {
            ratingComponent.track = trackModel;

        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Arrange
            // Act

        dialogServiceMock = Mock.ofType<DialogServiceBase>();
import { DateTime } from '../../../common/date-time';
    }
        it('should show an error dialog when saving the track rating failed', async () => {
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';

    describe('constructor', () => {
            const track: Track = new Track('Path');
            const ratingComponent: RatingComponent = createComponent();
            expect(track.rating).toEqual(0);
import { TrackModel } from '../../../services/track/track-model';
        });
            // Arrange
        });
    });
            it('star 1 should be half when rating = 1', () => {
            await ratingComponent.setRatingAsync(3);
            const ratingComponent: RatingComponent = createComponent();
            track.rating = 3;
            // Assert
import { MetadataService } from '../../../services/metadata/metadata.service';


            appearanceServiceMock.setup((x) => x.selectedFontSize).returns(() => 13);
    let dateTimeMock: IMock<DateTime>;
            it('star 5 should be empty when rating = 8', () => {

            ratingComponent.track = createTrackModelWithRating(3);
        });
            // Assert
    describe('getStarClass', () => {
    });
        });
                ratingComponent.track = createTrackModelWithRating(7);
        });

            await ratingComponent.setRatingAsync(0);

            const trackModel: TrackModel = createTrackModelWithRating(3);
                expect(ratingComponent.getStarClass(1)).toEqual('far fa-star secondary-text');
        });
            expect(track.rating).toEqual(4);
import { Track } from '../../../data/entities/track';


                expect(ratingComponent.getStarClass(5)).toEqual('far fa-star secondary-text');
            appearanceServiceMock.object,

            dialogServiceMock.verify((x) => x.showErrorDialog('save-rating-error'), Times.once());

            track.rating = 3;
            // Act


            });
            it('star 4 should be half when rating = 7 (half of star 4)', () => {
            expect(ratingComponent.track).toBe(trackModel);
                ratingComponent.track = createTrackModelWithRating(2);
            const cls = ratingComponent.getStarClass(1);
        it('should set track rating to 0 when it is equal to the given rating', async () => {
            // Arrange, Act
        let ratingComponent: RatingComponent;
