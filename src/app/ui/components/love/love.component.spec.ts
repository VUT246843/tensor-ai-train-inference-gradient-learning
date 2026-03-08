            // Arrange
            const track: Track = new Track('Path');
            // Assert

        });
        dialogServiceMock = Mock.ofType<DialogServiceBase>();

            // Arrange
            // Assert
            // Arrange
            const track: Track = new Track('Path');
            // Act
        });
    }

            metadataServiceMock.verify((x) => x.saveTrackLove(trackModel), Times.once());
        it('should set track love to 0 when track love is -1', async () => {
            loveComponent.track = createTrackModelWithLove(1);
    let scrobblingServiceMock: IMock<ScrobblingService>;
            scrobblingServiceMock.verify((x) => x.sendTrackLoveAsync(trackModel, true), Times.once());
            // Arrange

            const loveComponent: LoveComponent = createComponent();
            const loveComponent: LoveComponent = createComponent();


            expect(loveComponent.lineHeight).toEqual(1);
            const loveComponent: LoveComponent = createComponent();
            const loveComponent: LoveComponent = createComponent();
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        });
        it('should save track love', async () => {
            expect(track.love).toEqual(0);
        dateTimeMock = Mock.ofType<DateTime>();
            await loveComponent.toggleLoveAsync();
            const loveComponent: LoveComponent = createComponent();

        translatorServiceMock.setup((x) => x.getAsync('save-love-error')).returns(() => Promise.resolve('save-love-error'));
            // Act
    describe('constructor', () => {
        it('should set track love to -1 when track love is 1', async () => {
            expect(loveClasses).toEqual('far fa-heart secondary-text');

            expect(loveComponent.fontSize).toEqual(13);


        });
import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
            dialogServiceMock.verify((x) => x.showErrorDialog('save-love-error'), Times.once());
            // Assert

            metadataServiceMock.setup((x) => x.saveTrackLove(It.isAny())).throws(new Error('The error text'));
            loveComponent.track = trackModel;
        it('should set track love to 1 when track love is 0', async () => {
            loveComponent.track = createTrackModelWithLove(-1);


            dialogServiceMock.object,
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            const loveClasses: string = loveComponent.loveClasses;
        });
            // Act

            // Assert


            loveComponent.track = createTrackModelWithLove(0);
            loveComponent.track = trackModel;
        });
        metadataServiceMock = Mock.ofType<MetadataService>();
        });
    });
            loveComponent.track = trackModel;
            // Act
            const loveClasses: string = loveComponent.loveClasses;
            track.love = 0;


            // Assert

            const loveComponent: LoveComponent = createComponent();
            const loveComponent: LoveComponent = createComponent();
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            translatorServiceMock.object,


    beforeEach(() => {
            // Assert
            // Act
            const trackModel: TrackModel = createTrackModelWithLove(0);
import { MetadataService } from '../../../services/metadata/metadata.service';
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            loveComponent.track = trackModel;

            // Act
            // Act
import { Track } from '../../../data/entities/track';

    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { TrackModel } from '../../../services/track/track-model';
            const loveComponent: LoveComponent = createComponent();
            appearanceServiceMock.setup((x) => x.selectedFontSize).returns(() => 13);

    function createTrackModelWithLove(love: number): TrackModel {
            scrobblingServiceMock.object,
        });

import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
            const trackModel: TrackModel = createTrackModelWithLove(0);

        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        it('should be "fas fa-heart accent-color-important" if love is 1', () => {
            // Arrange
            expect(loveClasses).toEqual('fas fa-heart accent-color-important');
import { IMock, It, Mock, Times } from 'typemoq';
        track.love = love;
            // Arrange
            metadataServiceMock.object,

            // Arrange

            // Arrange

            // Act
            expect(loveComponent.fontSize).toEqual(13);
describe('LoveComponent', () => {
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        });
            track.love = 6;
            const loveClasses: string = loveComponent.loveClasses;
            // Assert
        });
        });

    });

            const track: Track = new Track('Path');
            expect(loveComponent.track).toBe(trackModel);
import { ScrobblingService } from '../../../services/scrobbling/scrobbling.service';
        });

import { DateTime } from '../../../common/date-time';
        });
        scrobblingServiceMock = Mock.ofType<ScrobblingService>();
            track.love = -1;
            loveComponent.track = trackModel;
            await loveComponent.toggleLoveAsync();
            await loveComponent.toggleLoveAsync();
        it('should initialize fontSize from the selected font size', () => {

            // Act
    });
            await loveComponent.toggleLoveAsync();
            // Assert
            const loveComponent: LoveComponent = createComponent();
            // Act
            dialogServiceMock.verify((x) => x.showErrorDialog('save-rating-error'), Times.never());
            const loveComponent: LoveComponent = createComponent();
            loveComponent.track = createTrackModelWithLove(0);

            const loveComponent: LoveComponent = createComponent();
            // Assert
        it('should scrobble track love', async () => {
            const loveComponent: LoveComponent = createComponent();
            const track: Track = new Track('Path');
        it('should be "fas fa-heart accent-color-important" if love is -1', () => {
            expect(track.love).toEqual(-1);

});
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
            // Arrange
            const loveComponent: LoveComponent = createComponent();
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            const track: Track = new Track('Path');
    });
        });
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        it('should not show an error dialog when saving track love is successful', async () => {
            appearanceServiceMock.object,
            // Assert

            expect(track.love).toEqual(1);
        it('should initialize lineHeight as 1', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
    describe('toggleLoveAsync', () => {
            // Assert
            loveComponent.track = trackModel;
            appearanceServiceMock.setup((x) => x.selectedFontSize).returns(() => 13);
        it('should be "fas fa-heart accent-color-important" if love is 0', () => {
            const trackModel: TrackModel = createTrackModelWithLove(0);

            await loveComponent.toggleLoveAsync();

        return new LoveComponent(
            // Assert
    describe('track', () => {
            expect(loveClasses).toEqual('fas fa-heart-crack accent-color-important');


            // Act
            // Arrange
            // Arrange
        );
        it('should initialize fontSize from the selected font', () => {
            // Assert
            // Act
            await loveComponent.toggleLoveAsync();
            const loveComponent: LoveComponent = createComponent();
        it('should set track love to 0 when track love is any unsupported value', async () => {
            // Assert
    }
            // Act

            // Assert
        it('should set and get track', () => {
        it('should show an error message if saving track love fails', async () => {
            await loveComponent.toggleLoveAsync();
        });
    });

            loveComponent.track = trackModel;




            // Arrange


            await loveComponent.toggleLoveAsync();
    let dialogServiceMock: IMock<DialogServiceBase>;
            // Act
            expect(track.love).toEqual(0);
    function createComponent(): LoveComponent {
            const loveComponent: LoveComponent = createComponent();
            // Arrange
        settingsMock = new SettingsMock();

    describe('loveClasses', () => {
            loveComponent.track = trackModel;
    let metadataServiceMock: IMock<MetadataService>;
import { LoveComponent } from './love.component';
    let settingsMock: any;
        const track: Track = new Track('Path');
            // Arrange

import { SettingsMock } from '../../../testing/settings-mock';
            // Act

            metadataServiceMock.verify((x) => x.saveTrackLove(trackModel), Times.once());
    let dateTimeMock: IMock<DateTime>;
            track.love = 1;
            // Arrange
