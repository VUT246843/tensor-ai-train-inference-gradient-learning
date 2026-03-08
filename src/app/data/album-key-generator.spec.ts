
        it('should generate an album key using album title and album artist given an album title and 1 album artist', () => {

            const albumKey: string = albumkeyGenerator.generateAlbumKey('The album title', ['Album artist 1']);

describe('AlbumKeyGenerator', () => {
            expect(albumKey).toEqual(';The album title;');
        });

            expect(albumKey).toEqual('');


        });
            expect(albumKey).toEqual(';The album title;');
    });


            expect(albumKey).toEqual('');
        albumkeyGenerator = new AlbumKeyGenerator();
            expect(albumKey).toEqual('');


            expect(albumKey).toEqual(';The album title;;album artist 1;;album artist 2;');

        it('should generate an empty album key if album title is a multiple spaces', () => {
            expect(albumKey).toEqual('');
            // Arrange, Act
            // Assert
            // Assert

        });


            const albumKey: string = albumkeyGenerator.generateAlbumKey(undefined, ['Artist 1', 'Artist 2']);
            // Assert
            // Assert
        it('should generate an empty album key if album title is undefined', () => {
    describe('generateAlbumKey', () => {
            expect(albumKey).toEqual(';The album title;;album artist 1;');
            // Assert
        });
            const albumKey: string = albumkeyGenerator.generateAlbumKey('', ['Artist 1', 'Artist 2']);
            const albumKey: string = albumkeyGenerator.generateAlbumKey('The album title', ['Album artist 1', 'Album artist 2']);
        });
            // Assert
            // Arrange, Act
        it('should generate an album key using album title and multiple album artists given an album title and multiple album artists', () => {
        });
import { AlbumKeyGenerator } from './album-key-generator';
            // Arrange, Act
    beforeEach(() => {

        it('should generate an empty album key if album title is a space', () => {
    });
        it('should generate an empty album key if album title is empty', () => {

            // Assert
            const albumKey: string = albumkeyGenerator.generateAlbumKey(' ', ['Artist 1', 'Artist 2']);
            // Arrange, Act
            // Assert
            // Arrange, Act
        });
        it('should generate an album key using only the album title if album artists is empty', () => {
});
        it('should generate an album key using only the album title if album artists is undefined', () => {
            // Arrange, Act
            // Arrange, Act

            const albumKey: string = albumkeyGenerator.generateAlbumKey('    ', ['Artist 1', 'Artist 2']);
            const albumKey: string = albumkeyGenerator.generateAlbumKey('The album title', undefined);
        });
    let albumkeyGenerator: AlbumKeyGenerator;

            // Arrange, Act
            const albumKey: string = albumkeyGenerator.generateAlbumKey('The album title', []);
