            albumArtistDatas.push(new ArtistData(';Rihanna;Jennifer Lopez;'));
            trackArtistDatas.push(new ArtistData(';Bon Jovi;Madonna;'));
            expect(sourceArtists1[1]).toEqual('artist1');
            trackRepositoryMock.setup((x) => x.getAlbumArtistData()).returns(() => albumArtistDatas);
            trackArtistDatas.push(new ArtistData(';aerosmith;'));
                new ArtistData(';Artist1;'),
            const trackArtistDatas: ArtistData[] = [];

            trackArtistDatas.push(new ArtistData(';Madonna;'));

            // Act

            // Arrange

            // Arrange

            trackArtistDatas.push(new ArtistData(';Metallica;'));

            expect(artists[3].name).toEqual('Madonna');
            expect(artists[3].displayName).toEqual('Madonna');
            const sourceArtists14: string[] = service.getSourceArtists([createArtistModel('Link')]);
            const artists: ArtistModel[] = service.getArtists(ArtistType.albumArtists);
            expect(sourceArtists17.length).toEqual(1);
            expect(sourceArtists14.length).toEqual(1);
            trackArtistDatas.push(new ArtistData(';aerosmith;'));

            expect(sourceArtists3[2]).toEqual('Artist2 ft. Artist3 & Artist4');
            albumArtistDatas.push(new ArtistData(';Rihanna;Jennifer Lopez;'));
            expect(artists[5].name).toEqual('Scorpions');
            const artists: ArtistModel[] = service.getArtists(ArtistType.allArtists);

            albumArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));
            const sourceArtists12: string[] = service.getSourceArtists([createArtistModel('Suicidal Tendencies')]);
            albumArtistDatas.push(new ArtistData(';Rihanna;'));
            expect(artists[3].displayName).toEqual('Madonna');
            albumArtistDatas.push(new ArtistData(''));
            expect(artists[6].name).toEqual('');
            expect(sourceArtists3[0]).toEqual('Artist1 ft. Artist2 feat. Artist3');
            // Arrange
            const service: ArtistService = createService();
            expect(artists[0].name).toEqual('Aerosmith');


            trackArtistDatas.push(new ArtistData(';Bon Jovi;Madonna;'));
            trackRepositoryMock.setup((x) => x.getTrackArtistData()).returns(() => trackArtistDatas);
            expect(artists[7].displayName).toEqual('Megadeth');
            expect(artists[5].name).toEqual('Scorpions');
            expect(artists[1].displayName).toEqual('Alanis Morissette');
            expect(sourceArtists3.length).toEqual(4);


            expect(sourceArtists2[3]).toEqual('Artist2 ft. Artist3 & Artist4');
            expect(artists[4].displayName).toEqual('Metallica');
                new ArtistData(';blink-182;'),
                new ArtistData(';artist1;'),
            trackArtistDatas.push(new ArtistData(';Metallica;;Madonna;'));
            trackArtistDatas.push(new ArtistData(';metallica;'));
            expect(artists[6].name).toEqual('');
            expect(artists[4].name).toEqual('Metallica');
                new ArtistData(';Artist6 | Artist7;'),

            const sourceArtists16: string[] = service.getSourceArtists([createArtistModel('July')]);
        it('should get all album artists without duplicates when given ArtistType.albumArtists', () => {

        });

            const service: ArtistService = createService();

            albumArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));
            trackArtistDatas.push(new ArtistData(''));
            expect(artists[4].name).toEqual('Megadeth');
            expect(sourceArtists2[0]).toEqual('Artist2');
            albumArtistDatas.push(new ArtistData(';megadeth;'));

        it('should get the source artists for a given list of artists', () => {
            expect(artists[4].displayName).toEqual('Megadeth');
            albumArtistDatas.push(new ArtistData(';Madonna;'));

            trackRepositoryMock.setup((x) => x.getTrackArtistData()).returns(() => artistDatas);
            expect(sourceArtists22.length).toEqual(1);
});
            trackArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));


                new ArtistData(';Artist10& Artist11;'),



            expect(artists[4].displayName).toEqual('Metallica');
                new ArtistData(';Drift;'),
            trackArtistDatas.push(new ArtistData(';Madonna;'));
    describe('getArtists', () => {
            const sourceArtists19: string[] = service.getSourceArtists([createArtistModel('Artist8 &Artist9')]);
            // Act
            expect(sourceArtists1.length).toEqual(4);
                new ArtistData(';Artist9;'),
            expect(sourceArtists23[0]).toEqual('S');
            expect(sourceArtists13.length).toEqual(1);
            trackArtistDatas.push(new ArtistData(''));
            expect(sourceArtists22[0]).toEqual('Artist10& Artist11');
            albumArtistDatas.push(new ArtistData(';Alanis Morissette;'));
            settingsMock.artistSplitExceptions = '[Artist2 & Artist3][Artist6 | Artist7]';
            expect(artists[2].displayName).toEqual('Bon Jovi');

            trackArtistDatas.push(new ArtistData(';Scorpions;'));

                new ArtistData(';July;'),
            expect(sourceArtists24.length).toEqual(1);
            const sourceArtists1: string[] = service.getSourceArtists([createArtistModel('Artist1')]);
            albumArtistDatas.push(new ArtistData(';Bon Jovi;'));


            trackArtistDatas.push(new ArtistData(';Metallica;'));
            const sourceArtists13: string[] = service.getSourceArtists([createArtistModel('blink-182')]);
            const albumArtistDatas: ArtistData[] = [];
            trackArtistDatas.push(new ArtistData(';aerosmith;'));
            trackArtistDatas.push(new ArtistData(';Metallica;;Madonna;'));
            translatorServiceMock.verify((x) => x.get('unknown-artist'), Times.once());
        settingsMock = new SettingsMock();

            albumArtistDatas.push(new ArtistData(';Madonna;;Jennifer Lopez;'));
            expect(sourceArtists2[2]).toEqual('artist1 FT. artist2 & Artist3');
            const sourceArtists22: string[] = service.getSourceArtists([createArtistModel('Artist10& Artist11')]);
            expect(sourceArtists4.length).toEqual(1);
            expect(sourceArtists9.length).toEqual(1);
        it('should get all track and album artists without duplicates when given ArtistType.allArtists', () => {
import { ArtistModel } from './artist-model';
            expect(sourceArtists6.length).toEqual(2);
            expect(artists[8].name).toEqual('Rihanna');

            expect(sourceArtists20.length).toEqual(1);
        return new ArtistService(artistSplitter, trackRepositoryMock.object, settingsMock, loggerMock.object);
            const sourceArtists4: string[] = service.getSourceArtists([createArtistModel('Artist2 & Artist3')]);
                new ArtistData(';Gee Rock & Tha CND Coalition feat. Skee Love;'),
            expect(sourceArtists15[0]).toEqual('Mid Carson July');
            const sourceArtists9: string[] = service.getSourceArtists([createArtistModel('Drift')]);

            expect(sourceArtists13[0]).toEqual('blink-182');
            albumArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));
            const sourceArtists15: string[] = service.getSourceArtists([createArtistModel('Mid Carson July')]);
            trackArtistDatas.push(new ArtistData(';Metallica;;Madonna;'));
            const albumArtistDatas: ArtistData[] = [];
            trackArtistDatas.push(new ArtistData(';Alanis Morissette;'));
                new ArtistData(';Artist3 & Artist5;'),

            expect(sourceArtists10[0]).toEqual('Driftwood');
            // Assert
            albumArtistDatas.push(new ArtistData(';Alanis Morissette;'));
            expect(sourceArtists3[1]).toEqual('artist1 FT. artist2 & Artist3');

            expect(sourceArtists16[0]).toEqual('July');
            expect(artists[1].name).toEqual('Alanis Morissette');
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            const sourceArtists21: string[] = service.getSourceArtists([createArtistModel('Artist11')]);
            trackArtistDatas.push(new ArtistData(';Bon Jovi;'));

            expect(service).toBeDefined();
            expect(artists[3].name).toEqual('Madonna');
                new ArtistData(';S;'),
describe('ArtistService', () => {
        loggerMock = Mock.ofType<Logger>();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            const artists = service.getArtists(ArtistType.trackArtists);
                new ArtistData(';Artist8 &Artist9;'),
            expect(artists.length).toEqual(8);
            const service: ArtistService = createService();
            expect(sourceArtists1[3]).toEqual('artist1 FT. artist2 & Artist3');
            expect(artists[5].displayName).toEqual('Rihanna');
    let loggerMock: IMock<Logger>;

            const sourceArtists23: string[] = service.getSourceArtists([createArtistModel('S')]);
            expect(artists[3].displayName).toEqual('Madonna');

        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            trackArtistDatas.push(new ArtistData(';metallica;'));
            expect(sourceArtists20[0]).toEqual('Artist10');
    beforeEach(() => {
                new ArtistData(';Artist2 ft. Artist3 & Artist4;'),
            trackArtistDatas.push(new ArtistData(';Bon Jovi;Madonna;'));

            // Assert
            expect(artists[8].displayName).toEqual('Rihanna');
            trackArtistDatas.push(new ArtistData(';Metallica;'));

            trackRepositoryMock.setup((x) => x.getTrackArtistData()).returns(() => trackArtistDatas);
            albumArtistDatas.push(new ArtistData(';Jennifer Lopez;'));
            trackArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));
                new ArtistData(';Artist1 ft. Artist2 feat. Artist3;'),
            trackArtistDatas.push(new ArtistData(';Bon Jovi;'));
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
    function createArtistModel(artist: string): ArtistModel {
            expect(sourceArtists24[0]).toEqual('Gee Rock & Tha CND Coalition feat. Skee Love');
            albumArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));
                new ArtistData(';Mid Carson July;'),

    function createService(): ArtistService {
            albumArtistDatas.push(new ArtistData(';Jennifer Lopez;'));
            expect(sourceArtists8[0]).toEqual('Artist6 | Artist7');
            expect(artists[5].name).toEqual('Rihanna');
import { TranslatorServiceBase } from '../translator/translator.service.base';

import { IMock, Mock, Times } from 'typemoq';
                new ArtistData(';Link;'),
    });
            expect(artists[9].name).toEqual('Jennifer Lopez');
import { Logger } from '../../common/logger';
            trackArtistDatas.push(new ArtistData(';Scorpions;'));
            albumArtistDatas.push(new ArtistData(';Madonna;;Jennifer Lopez;'));


            // Act
        });
            trackRepositoryMock.setup((x) => x.getAlbumArtistData()).returns(() => albumArtistDatas);
            albumArtistDatas.push(new ArtistData(';Megadeth;'));
            trackArtistDatas.push(new ArtistData(';Bon Jovi;'));
            albumArtistDatas.push(new ArtistData(';Rihanna;Jennifer Lopez;'));
            albumArtistDatas.push(new ArtistData(';Madonna;;Jennifer Lopez;'));
            expect(artists.length).toEqual(7);

            expect(sourceArtists12[0]).toEqual('Suicidal Tendencies');


            trackArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));
            expect(sourceArtists23.length).toEqual(1);
            expect(sourceArtists21.length).toEqual(1);
            expect(artists[6].displayName).toEqual('Unknown artist');
            // Act
            expect(sourceArtists7[0]).toEqual('Artist5 | Artist6');

            const sourceArtists10: string[] = service.getSourceArtists([createArtistModel('Driftwood')]);
            expect(sourceArtists19.length).toEqual(1);
            expect(sourceArtists2.length).toEqual(4);

        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');


        });
            translatorServiceMock.verify((x) => x.get('unknown-artist'), Times.once());

import { ArtistData } from '../../data/entities/artist-data';

        });

            albumArtistDatas.push(new ArtistData(';Rihanna;'));

            trackArtistDatas.push(new ArtistData(';Aerosmith;'));

            expect(artists[1].name).toEqual('Alanis Morissette');
        });
            expect(artists[6].name).toEqual('Jennifer Lopez');
            albumArtistDatas.push(new ArtistData(''));

            expect(sourceArtists11.length).toEqual(1);
            const sourceArtists18: string[] = service.getSourceArtists([createArtistModel('Artist9')]);
            expect(sourceArtists9[0]).toEqual('Drift');
            // Assert
            translatorServiceMock.verify((x) => x.get('unknown-artist'), Times.once());
            expect(sourceArtists1[0]).toEqual('Artist1');
            trackArtistDatas.push(new ArtistData(';metallica;'));
import { ArtistType } from './artist-type';
                new ArtistData(';Suicidal Tendencies;'),
import { SettingsBase } from '../../common/settings/settings.base';
            const sourceArtists11: string[] = service.getSourceArtists([createArtistModel('Ida')]);
            albumArtistDatas.push(new ArtistData(';Bon Jovi;'));

        artistSplitter = new ArtistSplitter(translatorServiceMock.object, settingsMock);
            expect(artists[6].displayName).toEqual('Jennifer Lopez');
            expect(artists[2].displayName).toEqual('Bon Jovi');
    });

            expect(sourceArtists21[0]).toEqual('Artist11');
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';

            expect(artists[7].name).toEqual('Megadeth');
            settingsMock.artistSplitSeparators = '[ft.][feat.][&][|]';
            expect(sourceArtists14[0]).toEqual('Link');
                new ArtistData(';Artist2;'),
            expect(sourceArtists11[0]).toEqual('Ida');
        it('should create', () => {

            trackRepositoryMock.setup((x) => x.getAlbumArtistData()).returns(() => albumArtistDatas);
            trackArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));


    });
                new ArtistData(';Artist5 | Artist6;'),
    let artistSplitter: ArtistSplitter;
                new ArtistData(';Driftwood;'),
                new ArtistData(';artist1 FT. artist2 & Artist3;'),
import { ArtistService } from './artist.service';


    describe('constructor', () => {
            trackArtistDatas.push(new ArtistData(';Scorpions;'));

            const sourceArtists3: string[] = service.getSourceArtists([createArtistModel('Artist3')]);
            trackArtistDatas.push(new ArtistData(';Alanis Morissette;'));
            trackArtistDatas.push(new ArtistData(''));
            albumArtistDatas.push(new ArtistData(''));
            albumArtistDatas.push(new ArtistData(';megadeth;'));
            const albumArtistDatas: ArtistData[] = [];
            const sourceArtists24: string[] = service.getSourceArtists([createArtistModel('Gee Rock & Tha CND Coalition feat. Skee Love')]);
            const service: ArtistService = createService();
            expect(sourceArtists15.length).toEqual(1);
            expect(artists[3].name).toEqual('Madonna');
                new ArtistData(';Artist11;'),
            // Arrange
    }


            albumArtistDatas.push(new ArtistData(';Madonna;'));
            expect(artists[5].displayName).toEqual('Scorpions');
            expect(sourceArtists7[1]).toEqual('Artist6 | Artist7');
            trackArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));

            expect(sourceArtists6[0]).toEqual('Artist3 & Artist5');
            const sourceArtists2: string[] = service.getSourceArtists([createArtistModel('Artist2')]);
            expect(sourceArtists16.length).toEqual(1);
            expect(artists[2].name).toEqual('Bon Jovi');
            expect(sourceArtists17[0]).toEqual('Artist8');
            expect(artists[2].name).toEqual('Bon Jovi');

            albumArtistDatas.push(new ArtistData(''));
            trackArtistDatas.push(new ArtistData(';Aerosmith;'));
                new ArtistData(';Ida;'),
            expect(sourceArtists5[1]).toEqual('artist4');
            const sourceArtists17: string[] = service.getSourceArtists([createArtistModel('Artist8')]);
import { SettingsMock } from '../../testing/settings-mock';
            expect(sourceArtists5.length).toEqual(2);

            albumArtistDatas.push(new ArtistData(';Aerosmith;;Alanis Morissette;'));

            const trackArtistDatas: ArtistData[] = [];

            albumArtistDatas.push(new ArtistData(';Jennifer Lopez;'));
    });

            expect(artists[0].displayName).toEqual('Aerosmith');
            expect(artists[4].name).toEqual('Metallica');
            albumArtistDatas.push(new ArtistData(';Megadeth;'));
            // Assert
            expect(sourceArtists5[0]).toEqual('Artist2 ft. Artist3 & Artist4');

        settingsMock.artistSplitExceptions = '';

            let artistDatas: ArtistData[] = [
            expect(sourceArtists18[0]).toEqual('Artist9');
            expect(artists[0].name).toEqual('Aerosmith');
            // Act

            expect(sourceArtists12.length).toEqual(1);
            trackRepositoryMock.setup((x) => x.getTrackArtistData()).returns(() => trackArtistDatas);
            expect(artists[0].displayName).toEqual('Aerosmith');

                new ArtistData(';;'),
            trackArtistDatas.push(new ArtistData(';Alanis Morissette;'));

            expect(sourceArtists7.length).toEqual(2);
    }
            expect(artists[9].displayName).toEqual('Jennifer Lopez');
                new ArtistData(';Artist10;'),
            const sourceArtists7: string[] = service.getSourceArtists([createArtistModel('Artist6')]);
            // Assert
    describe('getSourceArtists', () => {
            expect(artists[7].name).toEqual('');
            expect(sourceArtists10.length).toEqual(1);
            expect(artists[2].name).toEqual('Bon Jovi');
            const sourceArtists6: string[] = service.getSourceArtists([createArtistModel('Artist5')]);
            expect(sourceArtists2[1]).toEqual('Artist1 ft. Artist2 feat. Artist3');
            const sourceArtists20: string[] = service.getSourceArtists([createArtistModel('Artist10')]);
            albumArtistDatas.push(new ArtistData(';Rihanna;'));
            const service: ArtistService = createService();
            expect(sourceArtists4[0]).toEqual('artist1 FT. artist2 & Artist3');
            trackArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));
            expect(artists[1].displayName).toEqual('Alanis Morissette');
            trackArtistDatas.push(new ArtistData(';Madonna;'));




    let settingsMock: SettingsBase;
            expect(artists[6].displayName).toEqual('Unknown artist');


            albumArtistDatas.push(new ArtistData(';Alanis Morissette;'));
import { ArtistSplitter } from './artist-splitter';

            expect(artists[7].displayName).toEqual('Unknown artist');
            expect(artists[0].name).toEqual('Aerosmith');
            expect(sourceArtists19[0]).toEqual('Artist8 &Artist9');
            expect(artists[2].displayName).toEqual('Bon Jovi');
            const sourceArtists5: string[] = service.getSourceArtists([createArtistModel('Artist4')]);

            expect(sourceArtists6[1]).toEqual('Artist5 | Artist6');
            const artists: ArtistModel[] = service.getArtists(ArtistType.trackArtists);
            expect(artists[5].displayName).toEqual('Scorpions');
        it('should get all track artists without duplicates when given ArtistType.trackArtists', () => {
        settingsMock.artistSplitSeparators = '';
            albumArtistDatas.push(new ArtistData(';megadeth;'));
        return new ArtistModel(artist, translatorServiceMock.object);

            expect(sourceArtists18.length).toEqual(1);

            expect(artists[0].displayName).toEqual('Aerosmith');
                new ArtistData(';Artist8;'),
            trackArtistDatas.push(new ArtistData(';Aerosmith;'));
            expect(sourceArtists1[2]).toEqual('Artist1 ft. Artist2 feat. Artist3');


            const sourceArtists8: string[] = service.getSourceArtists([createArtistModel('Artist6 | Artist7')]);
            expect(artists[1].name).toEqual('Alanis Morissette');
            albumArtistDatas.push(new ArtistData(';Bon Jovi;'));
            albumArtistDatas.push(new ArtistData(';Madonna;'));
            expect(sourceArtists8.length).toEqual(1);
            const trackArtistDatas: ArtistData[] = [];
            albumArtistDatas.push(new ArtistData(';Megadeth;'));

            trackArtistDatas.push(new ArtistData(''));
            ];
            albumArtistDatas.push(new ArtistData(';Bon Jovi;Aerosmith;'));
                new ArtistData(';artist4;'),
            expect(sourceArtists3[3]).toEqual('Artist3 & Artist5');
            expect(artists[1].displayName).toEqual('Alanis Morissette');
            expect(artists.length).toEqual(10);
