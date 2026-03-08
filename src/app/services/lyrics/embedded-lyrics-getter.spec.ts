            const instance: EmbeddedLyricsGetter = createInstance();
            // Arrange, Act
            const track = MockCreator.createTrackModel('path', 'title', 'artists');
    beforeEach(() => {
            expect(lyrics.sourceName).toEqual('');
            // Assert
            // Act
    }
            const metadataMock: IFileMetadata = { lyrics: 'lyrics' } as IFileMetadata;


import { MockCreator } from '../../testing/mock-creator';
            const instance: EmbeddedLyricsGetter = createInstance();
            // Act
import { IMock, Mock } from 'typemoq';
            fileMetadataFactoryMock.setup((x) => x.createAsync(track.path)).returns(() => Promise.resolve(metadataMock));
    let fileMetadataFactoryMock: IMock<FileMetadataFactoryBase>;

    });
            const lyrics: LyricsModel = await instance.getLyricsAsync(track);
            // Assert
        it('should create', () => {
});
    });
            expect(lyrics.track).toEqual(track);

    });

        fileMetadataFactoryMock = Mock.ofType<FileMetadataFactoryBase>();
        return new EmbeddedLyricsGetter(fileMetadataFactoryMock.object);
            expect(instance).toBeDefined();
    describe('getLyricsAsync', () => {

            expect(lyrics.sourceType).toEqual(LyricsSourceType.embedded);


            expect(lyrics.track).toEqual(track);
    function createInstance(): EmbeddedLyricsGetter {
        });
        });
            expect(lyrics.sourceName).toEqual('');
            // Arrange
            expect(lyrics.text).toEqual('lyrics');

import { EmbeddedLyricsGetter } from './embedded-lyrics-getter';

    describe('constructor', () => {
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
        it('should return the file metadata lyrics if there are any', async () => {
            expect(lyrics.sourceType).toEqual(LyricsSourceType.none);
            const metadataMock: IFileMetadata = { lyrics: '' } as IFileMetadata;
import { LyricsModel } from './lyrics-model';
describe('EmbeddedLyricsGetter', () => {
import { FileMetadataFactoryBase } from '../../common/metadata/file-metadata.factory.base';
            const lyrics: LyricsModel = await instance.getLyricsAsync(track);
        });
            const instance: EmbeddedLyricsGetter = createInstance();
        it('should return empty lyrics if there are no metadata lyrics', async () => {

            expect(lyrics.text).toEqual('');
            fileMetadataFactoryMock.setup((x) => x.createAsync(track.path)).returns(() => Promise.resolve(metadataMock));
            // Arrange
            const track = MockCreator.createTrackModel('path', 'title', 'artists');
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
            // Assert
