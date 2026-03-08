            expect(splitArtists.length).toEqual(10);

            expect(splitArtists[7].displayName).toEqual('Artist5 | Artist6');
            // Assert
        'artist4',
        'artist1 FT. artist2 & Artist3',
            // Assert

            expect(splitArtists[7].displayName).toEqual('Unknown artist');
            expect(splitArtists[2].displayName).toEqual('Artist3');

            expect(splitArtists[5].displayName).toEqual('Artist5 | Artist6');

            expect(splitArtists[3].displayName).toEqual('Artist4');
            // Arrange
    function createArtistSplitter(): ArtistSplitter {
    ];

import { ArtistSplitter } from './artist-splitter';
            // Act

        it('should split without duplicates on all configured separators including pipe for substrings that are not in the exception list', () => {
            expect(splitArtists[5].displayName).toEqual('Artist5');
            expect(splitter).toBeDefined();

            expect(splitArtists.length).toEqual(9);

            expect(splitArtists[6].displayName).toEqual('Artist6');

        'Artist1 ft. Artist2 feat. Artist3',
            expect(splitArtists[0].displayName).toEqual('Artist1');
            settingsMock.artistSplitSeparators = '';
            // Assert
import { ArtistModel } from './artist-model';
            const splitter: ArtistSplitter = createArtistSplitter();
            expect(splitArtists[1].displayName).toEqual('Artist2');
import { IMock, Mock } from 'typemoq';
            const splitter: ArtistSplitter = createArtistSplitter();
            // Act



            expect(splitArtists.length).toEqual(11);
            // Act
            // Arrange
    beforeEach(() => {
        settingsMock = new SettingsMock();
            // Arrange
import { SettingsMock } from '../../testing/settings-mock';
            const splitter: ArtistSplitter = createArtistSplitter();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
});
            const splitArtists: ArtistModel[] = splitter.splitArtists(artists);
        '',
            expect(splitArtists[7].displayName).toEqual('Artist6 | Artist7');
import { SettingsBase } from '../../common/settings/settings.base';
        'Artist1',
            expect(splitArtists[4].displayName).toEqual('Artist4');

import { TranslatorServiceBase } from '../translator/translator.service.base';
            // Assert
            const splitArtists: ArtistModel[] = splitter.splitArtists(artists);
            expect(splitArtists[1].displayName).toEqual('Artist2');
    }

            expect(splitArtists[8].displayName).toEqual('Artist2ft.Artist3& Artist4');
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            expect(splitArtists[0].displayName).toEqual('Artist1');

            settingsMock.artistSplitExceptions = '';
            expect(splitArtists[6].displayName).toEqual('Artist3 & Artist5');
            expect(splitArtists[9].displayName).toEqual('Unknown artist');
    describe('splitArtist', () => {
            expect(splitArtists[8].displayName).toEqual('Unknown artist');
            // Act
        it('should split without duplicates on all configured separators excluding pipe for substrings that are not in the exception list', () => {
        return new ArtistSplitter(translatorServiceMock.object, settingsMock);
            const splitArtists: ArtistModel[] = splitter.splitArtists(artists);
    });
            settingsMock.artistSplitExceptions = '';
            expect(splitArtists[4].displayName).toEqual('Artist5');
    let settingsMock: SettingsBase;

            expect(splitArtists[3].displayName).toEqual('Artist2 & Artist3');
            expect(splitArtists[5].displayName).toEqual('artist4');
        'Artist2',
            const splitter: ArtistSplitter = createArtistSplitter();
describe('ArtistSplitter', () => {
        'Artist5 | Artist6',

            // Arrange
        });
            expect(splitArtists[2].displayName).toEqual('Artist1 ft. Artist2 feat. Artist3');
            settingsMock.artistSplitExceptions = '[Artist2 & Artist3][Artist6 | Artist7]';
        'Artist3 & Artist5',
        'artist1',

            expect(splitArtists[8].displayName).toEqual('Artist6 | Artist7');
            expect(splitArtists[6].displayName).toEqual('Artist6 | Artist7');
    });

            expect(splitArtists[4].displayName).toEqual('Artist2 ft. Artist3 & Artist4');
    });
        'Artist2 ft. Artist3 & Artist4',

    let artists: string[] = [
            expect(splitArtists[10].displayName).toEqual('Artist2ft.Artist3& Artist4');
            expect(splitArtists[1].displayName).toEqual('Artist2');
        it('should create', () => {
            settingsMock.artistSplitExceptions = '[Artist6 | Artist7]';

            expect(splitArtists[9].displayName).toEqual('Artist2ft.Artist3& Artist4');
            expect(splitArtists[2].displayName).toEqual('Artist3');
            settingsMock.artistSplitSeparators = '[ft.][feat.][&]';
            settingsMock.artistSplitSeparators = '';
        'Artist2ft.Artist3& Artist4',
        });
    describe('constructor', () => {
        it('should not split on anything without duplicates when there are no separators', () => {
            settingsMock.artistSplitSeparators = '[ft.][feat.][&][|]';
        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');
        'Artist6 | Artist7',
            expect(splitArtists[3].displayName).toEqual('artist1 FT. artist2 & Artist3');
            expect(splitArtists[0].displayName).toEqual('Artist1');
        });

        });
