
        );
            'Playlist 1 folder name',
            expect(filteredPlaylists.length).toEqual(1);
            searchServiceMock.setup((x) => x.matchesSearchText('Playlist 1', It.isAny())).returns(() => false);
    let searchServiceMock: IMock<SearchServiceBase>;
        return new PlaylistsFilterPipe(searchServiceMock.object);

        it('should return the given playlists if textToContain is empty', () => {
        return playlists;
        });
    function createPlaylistModels(): PlaylistModel[] {
    beforeEach(() => {
    });
import { FileAccess } from '../../common/io/file-access';
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Act
            // Assert
            // Arrange
        });
            // Arrange
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            const pipe: PlaylistsFilterPipe = createPipe();
            'Playlist 1',

            // Assert
            const playlists: PlaylistModel[] = createPlaylistModels();
            // Arrange
            'Playlist 2 path',
            expect(filteredPlaylists).toEqual(playlists);
            const filteredPlaylists: PlaylistModel[] = pipe.transform(playlists, 'dummy');
            const playlists: PlaylistModel[] = createPlaylistModels();
            'Playlist 1 image path',


            const filteredPlaylists: PlaylistModel[] = pipe.transform(playlists, undefined);
        fileAccessMock = Mock.ofType<FileAccess>();
            'Playlist 2 image path',
            searchServiceMock.setup((x) => x.matchesSearchText('Playlist 2', It.isAny())).returns(() => true);

        });

        const playlist1: PlaylistModel = new PlaylistModel(
describe('PlaylistsFilterPipe', () => {
            const filteredPlaylists: PlaylistModel[] = pipe.transform(playlists, ' ');
import { SearchServiceBase } from '../../services/search/search.service.base';

        it('should return only playlists with a name containing the search text', () => {
            const pipe: PlaylistsFilterPipe = createPipe();
            // Act
});
            // Act
        searchServiceMock = Mock.ofType<SearchServiceBase>();
        it('should return the given playlists if textToContain is space', () => {
            // Assert
            const playlists: PlaylistModel[] = createPlaylistModels();
    describe('transform', () => {
        const playlists: PlaylistModel[] = [playlist1, playlist2];
            const playlists: PlaylistModel[] = createPlaylistModels();
        });



            const pipe: PlaylistsFilterPipe = createPipe();
            // Arrange
import { PlaylistModel } from '../../services/playlist/playlist-model';

            // Assert
            const filteredPlaylists: PlaylistModel[] = pipe.transform(playlists, '');


            expect(filteredPlaylists[0]).toEqual(playlists[1]);
        );
        const playlist2: PlaylistModel = new PlaylistModel(
            const pipe: PlaylistsFilterPipe = createPipe();
    function createPipe(): PlaylistsFilterPipe {
            expect(filteredPlaylists).toEqual(playlists);
    }
            // Act


    });
    }
            'Playlist 1 path',
import { PlaylistsFilterPipe } from './playlists-filter';
            expect(filteredPlaylists).toEqual(playlists);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
    let fileAccessMock: IMock<FileAccess>;

import { IMock, It, Mock } from 'typemoq';
            'Playlist 2',

        it('should return the given playlists if textToContain is undefined', () => {
            'Playlist 2 folder name',
