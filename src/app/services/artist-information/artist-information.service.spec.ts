    }


                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))
            onlineArtistImageGetterMock
            expect(artist.similarArtists.length).toEqual(1);
            expect(artist.url).toEqual('');
            // Arrange
                .returns(() => Promise.resolve(createArtistWithGermanBiography()));
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))

import { Track } from '../../data/entities/track';
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
            const service: ArtistInformationServiceBase = createService();

            expect(artist.imageUrl).toEqual('');
            // Act




    describe('constructor', () => {
            // Arrange
        const similarLastfmArtists: LastfmArtist[] = [];
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'German biography'))
                .setup((x) => x.create('Madonna', '', '', ''))
        lastfmArtist.musicBrainzId = '6925db17-f35e-42f3-a4eb-84ee6bf5d4b0';
            // Arrange
        });
            expect(artist.name).toEqual('');
        lastfmArtist.musicBrainzId = '20244d07-534f-4eff-b4d4-930878889970';
            expect(artist.url).toEqual('TaylorSwiftUrl');
            artistInformationFactoryMock

        it('should return empty ArtistInformation when track.rawFirstArtist is empty', async () => {


            const service: ArtistInformationServiceBase = createService();

            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
        const lastfmArtist = createArtistWithoutBiography();

    });
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'English biography'))
            onlineArtistImageGetterMock
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
        it('should return similar artists when no error', async () => {
            lastfmApiMock
        track.artists = `;${artist};`;
            // Arrange

            lastfmApiMock

                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
import { OnlineArtistImageGetter } from './online-artist-image-getter';
            const service: ArtistInformationServiceBase = createService();
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'English biography'))

        lastfmArtist.musicBrainzId = 'f7441bc7-d7de-4813-a2fc-31a4033d396d';
            lastfmApiMock.verify((x) => x.getArtistInfoAsync(trackModel.rawFirstArtist, true, 'DE'), Times.once());
        settingsMock = new SettingsMock();


        it('should return English biography when localized biography not available', async () => {
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
            expect(artist.name).toEqual('Taylor Swift');
import { ArtistInformationService } from './artist-information.service';
            // Arrange
            lastfmApiMock.setup((x) => x.getArtistInfoAsync('Olivia Rodrigo', true, 'EN')).throws(new Error('An error occurred'));
        });
            expect(artist.similarArtists[0].name).toEqual('Gracie Abrams');
        biography.content = 'English biography';
            lastfmApiMock
            // Assert

        lastfmArtist.url = 'OliviaRodrigoUrl';
        const desktopMock: IMock<DesktopBase> = Mock.ofType<DesktopBase>();
                .returns(() => createArtistInformation('German biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
            // Assert

                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))

            const artist: ArtistInformation = service.getQuickArtistInformation(trackModel);
    function createArtistWithGermanBiography(): LastfmArtist {
        });
            // Assert
        similarLastfmArtists.push(createGracieAbramsArtist());

    }
            expect(artist.url).toEqual('');

    }
        });


            const service: ArtistInformationServiceBase = createService();
            lastfmApiMock
            expect(artist.imageUrl).toEqual('TaylorSwiftImageUrl');
            // Act
            // Assert

            lastfmApiMock.object,
        it('should return empty artist image url when error', async () => {
    let dateTimeMock: IMock<DateTime>;
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
describe('ArtistInformationService', () => {
                .returns(() => Promise.resolve(createGracieAbramsArtist()));
            lastfmApiMock
        });
            const service: ArtistInformationServiceBase = createService();
        artistInformationFactoryMock = Mock.ofType<ArtistInformationFactory>();
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'EN');

    function createArtistInformation(biography: string, url: string, imageUrl: string): ArtistInformation {
            artistInformationFactoryMock
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
            // Arrange
    function createTrackModel(artist: string): TrackModel {
        );
    let settingsMock: any;
            expect(artist.name).toEqual('Taylor Swift');
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
            const service: ArtistInformationServiceBase = createService();
        dateTimeMock = Mock.ofType<DateTime>();

            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);

            lastfmApiMock

            const trackModel: TrackModel = createTrackModel('');

            // Act

        it('should return empty ArtistInformation when track is undefined', async () => {

    let loggerMock: IMock<Logger>;
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'EN'))
            // Assert
        biography.content = 'English biography';
        it('should return remaining similar artists when a similar artist has an error', async () => {
            onlineArtistImageGetterMock
        const lastfmArtist = createArtistWithoutBiography();
            expect(artist.biography).toEqual('German biography');
            const service: ArtistInformationServiceBase = createService();
            artistInformationFactoryMock
        it('should return empty ArtistInformation when track is undefined', () => {
            const artist: ArtistInformation = await service.getArtistInformationAsync(undefined);



import { ArtistInformation } from './artist-information';

                .returns(() => Promise.resolve(createArtistWithGermanBiography()));
                .returns(() => createArtistInformation('English biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
            expect(artist.biography).toEqual('German biography');
            expect(artist.name).toEqual('');
});
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
        similarLastfmArtists.push(createOliviaRodrigoArtist());

    }

            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
            // Act
            onlineArtistImageGetterMock
            artistInformationFactoryMock
        });
            lastfmApiMock.reset();


            const service: ArtistInformationServiceBase = createService();
            const service: ArtistInformationServiceBase = createService();

        return new ArtistInformationService(
            const trackModel: TrackModel = createTrackModel('Madonna');
        biography.content = 'English biography';
            expect(artist.url).toEqual('TaylorSwiftUrl');
    }
            lastfmApiMock
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'EN'))
            artistInformationFactoryMock
            artistInformationFactoryMock
        it('should return ArtistInformation from Last.fm when there is no cached artist information', async () => {

            // Act

        });
        const track: Track = new Track('path');
            expect(artist.imageUrl).toEqual('');
        return new ArtistInformation(desktopMock.object, 'Taylor Swift', url, imageUrl, biography);
            const service: ArtistInformationServiceBase = createService();
                .returns(() => Promise.resolve(createArtistWithGermanBiography()));
        it('should return non-empty ArtistInformation when Last.fm returns artist', async () => {
            expect(artist.imageUrl).toEqual('');
        });
            lastfmApiMock.verify((x) => x.getArtistInfoAsync(trackModel2.rawFirstArtist, true, 'DE'), Times.once());
    });
            // Assert
                .throws(new Error('An error occurred'));
                .returns(() => createArtistInformation('German biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))

                .returns(() => createArtistInformation('English biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))
        const biography = new LastfmBiography();
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
            expect(artist.url).toEqual('');
                .setup((x) => x.getArtistInfoAsync('Gracie Abrams', true, 'EN'))
            expect(artist.imageUrl).toEqual('');
                .returns(() => Promise.resolve(createGracieAbramsArtist()));
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));

    let onlineArtistImageGetterMock: IMock<OnlineArtistImageGetter>;
            // Assert
            expect(artist.biography).toEqual('German biography');
            artistInformationFactoryMock

                .returns(() => createArtistInformation('German biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');
        });
import { TranslatorServiceBase } from '../translator/translator.service.base';
                .returns(() => Promise.resolve(createArtistWithEnglishBiography()));

            expect(artist.biography).toEqual('German biography');
        return lastfmArtist;
            expect(artist.name).toEqual('Madonna');
    let artistInformationFactoryMock: IMock<ArtistInformationFactory>;

                .returns(() => Promise.resolve(createArtistWithGermanBiography()));
    function createArtistWithEnglishBiography(): LastfmArtist {
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))
                .returns(() => Promise.resolve(createArtistWithGermanBiography()));

            lastfmApiMock
    }

            onlineArtistImageGetterMock
        lastfmArtist.similarArtists = createSimilarLastfmArtists();
        onlineArtistImageGetterMock = Mock.ofType<OnlineArtistImageGetter>();


    }

            onlineArtistImageGetterMock
import { SettingsMock } from '../../testing/settings-mock';
            translatorServiceMock.object,

import { DesktopBase } from '../../common/io/desktop.base';
            expect(artist.url).toEqual('TaylorSwiftUrl');
            // Assert
        });


    beforeEach(() => {
            expect(service).toBeDefined();
            const trackModel2: TrackModel = createTrackModel('Madonna');
                .setup((x) => x.getArtistInfoAsync('Madonna', true, 'DE'))
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
            lastfmApiMock

            // Arrange

            expect(artist.biography).toEqual('');

            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'EN');
import { ArtistInformationFactory } from './artist-information-factory';

        it('should return fanart artist image url when no error', async () => {

        const lastfmArtist = new LastfmArtist();

            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'EN');
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
            // Act
            // Act
import { LastfmArtist } from '../../common/api/lastfm/lastfm-artist';
        const biography = new LastfmBiography();

        lastfmArtist.biography = biography;
            lastfmApiMock
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
                .returns(() => Promise.resolve(createArtistWithEnglishBiography()));
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        lastfmApiMock = Mock.ofType<LastfmApi>();
        const biography = new LastfmBiography();
        lastfmArtist.name = 'Gracie Abrams';
            artistInformationFactoryMock

            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel2);
            expect(artist.url).toEqual('TaylorSwiftUrl');
        });
            onlineArtistImageGetterMock
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');
            onlineArtistImageGetterMock.object,
                .returns(() => createArtistInformation('English biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
            // Arrange
            // Act
import { DateTime } from '../../common/date-time';
    function createService(): ArtistInformationServiceBase {
            // Act
            lastfmApiMock.verify((x) => x.getArtistInfoAsync(It.isAny(), It.isAny(), It.isAny()), Times.never());
                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'German biography'))
        it('should create', () => {
            expect(artist.imageUrl).toEqual('TaylorSwiftImageUrl');
            expect(artist.biography).toEqual('English biography');

                .returns(() => Promise.resolve('TaylorSwiftImageUrl'));
            expect(artist.imageUrl).toEqual('TaylorSwiftImageUrl');

import { IMock, It, Mock, Times } from 'typemoq';
            lastfmApiMock.reset();
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'English biography'))
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'German biography'))

                .returns(() => createArtistInformation('German biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
import { LastfmBiography } from '../../common/api/lastfm/lastfm-biography';
        lastfmArtist.name = 'Taylor Swift';
    function createGracieAbramsArtist(): LastfmArtist {
            onlineArtistImageGetterMock
            expect(artist.biography).toEqual('German biography');
                .setup((x) => x.getArtistInfoAsync('Olivia Rodrigo', true, 'EN'))
    });
            expect(artist.biography).toEqual('');
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))
        });
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'EN'))
            onlineArtistImageGetterMock
            // Assert

            expect(artist.imageUrl).toEqual('TaylorSwiftImageUrl');
        });
        loggerMock = Mock.ofType<Logger>();
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
    function createSimilarLastfmArtists(): LastfmArtist[] {
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'EN'))
            // Act
        return similarLastfmArtists;


            // Arrange
            // Assert
            // Arrange
            // Act
        const biography = new LastfmBiography();
            // Arrange
            expect(artist.similarArtists[1].name).toEqual('Gracie Abrams');
            expect(artist.imageUrl).toEqual('TaylorSwiftImageUrl');
            const artist: ArtistInformation = service.getQuickArtistInformation(undefined);
                .returns(() => createArtistInformation('English biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
            artistInformationFactoryMock.object,
    let lastfmApiMock: IMock<LastfmApi>;
import { TrackModel } from '../track/track-model';
    describe('getQuickArtistInformation', () => {

        return lastfmArtist;

    function createArtistWithoutBiography(): LastfmArtist {

            const service: ArtistInformationServiceBase = createService();
            // Arrange
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');
        it('should return cached ArtistInformation when there is cached artist information and the artist has not changed', async () => {
            // Arrange
                .returns(() => createArtistInformation('English biography', 'TaylorSwiftUrl', ''));
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'EN');
        lastfmArtist.name = 'Olivia Rodrigo';

            await service.getArtistInformationAsync(trackModel);
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))
        });

            const service: ArtistInformationServiceBase = createService();
            lastfmApiMock


            // Assert
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'German biography'))
            // Act
        lastfmArtist.url = 'GracieAbramsUrl';
        });
            expect(artist.name).toEqual('Taylor Swift');
import { ArtistInformationServiceBase } from './artist-information.service.base';
        lastfmArtist.biography = biography;

    });
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');


        lastfmArtist.biography = biography;
            // Assert
            expect(artist.similarArtists.length).toEqual(2);
            // Arrange

                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))

                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))
            lastfmApiMock
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            await service.getArtistInformationAsync(trackModel);
                .returns(() => Promise.resolve(createArtistWithGermanBiography()));
            lastfmApiMock
        return lastfmArtist;
    }
        return lastfmArtist;
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'DE'))
            expect(artist.similarArtists[0].name).toEqual('Olivia Rodrigo');
    }
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))


        it('should return localized biography when available', async () => {



            const service: ArtistInformationServiceBase = createService();
            // Act
            expect(artist.name).toEqual('');
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))
        it('should return ArtistInformation from Last.fm when there is cached artist information and the artist has changed', async () => {
    function createOliviaRodrigoArtist(): LastfmArtist {
                .returns(() => Promise.resolve(createOliviaRodrigoArtist()));


                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'German biography'))


                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))
            // Assert
        const lastfmArtist = new LastfmArtist();
import { LastfmApi } from '../../common/api/lastfm/lastfm.api';

        lastfmArtist.url = 'TaylorSwiftUrl';
            artistInformationFactoryMock
            onlineArtistImageGetterMock

                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', '', 'English biography'))

            const trackModel: TrackModel = createTrackModel('Taylor Swift');
            artistInformationFactoryMock
        const lastfmArtist = new LastfmArtist();
        lastfmArtist.biography = biography;
                .returns(() => Promise.resolve(createArtistWithEnglishBiography()));
            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
        return lastfmArtist;
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
    describe('getArtistInformationAsync', () => {
            lastfmApiMock
                .setup((x) => x.create('Taylor Swift', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl', 'English biography'))

            artistInformationFactoryMock
            expect(artist.biography).toEqual('');

                .returns(() => Promise.resolve(createArtistWithEnglishBiography()));
            const service: ArtistInformationServiceBase = createService();
            // Act
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');
        biography.content = 'German biography';
            expect(artist.name).toEqual('Taylor Swift');


                .returns(() => new ArtistInformation(undefined, 'Madonna', '', '', ''));
            const trackModel: TrackModel = createTrackModel('Taylor Swift');
            // Arrange, Act
            const trackModel: TrackModel = createTrackModel('Taylor Swift');

            const artist: ArtistInformation = await service.getArtistInformationAsync(trackModel);
                .setup((x) => x.getArtistInfoAsync('Taylor Swift', true, 'EN'))
            lastfmApiMock
            const service: ArtistInformationServiceBase = createService();
            // Assert
        it('should return ArtistInformation containing artist name when track is not undefined', () => {
            // Assert

                .returns(() => createArtistInformation('German biography', 'TaylorSwiftUrl', 'TaylorSwiftImageUrl'));
                .setup((x) => x.getResizedArtistImageAsync('20244d07-534f-4eff-b4d4-930878889970', 300))

            loggerMock.object,

                .returns(() => Promise.resolve(createArtistWithoutBiography()));
            translatorServiceMock.setup((x) => x.get('language-code')).returns(() => 'DE');
                .returns(() => Promise.resolve(createArtistWithEnglishBiography()));
                .setup((x) => x.getArtistInfoAsync('Gracie Abrams', true, 'EN'))
import { Logger } from '../../common/logger';
