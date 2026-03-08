        });
        });
            // Assert
        return new AlbumArtworkCacheId(guidFactoryMock.object);
import { IMock, Mock } from 'typemoq';
            expect(instance).toBeDefined();
            const instance: AlbumArtworkCacheId = createInstance();
    }
            const instance: AlbumArtworkCacheId = createInstance();

            const instance: AlbumArtworkCacheId = createInstance();
        it('should create id that starts with album-', () => {

    describe('constructor', () => {
            // Arrange, Act
        it('should create id that has a length of 42 characters', () => {
import { AlbumArtworkCacheId } from './album-artwork-cache-id';
    });
            expect(instance.id.length).toEqual(42);
import { GuidFactory } from '../../common/guid.factory';
describe('AlbumArtworkCacheId', () => {


    function createInstance(): AlbumArtworkCacheId {
            expect(instance.id).toBeDefined();
    });
            expect(instance.id.startsWith('album-')).toBeTruthy();
            // Assert
        guidFactoryMock = Mock.ofType<GuidFactory>();

        guidFactoryMock.setup((x) => x.create()).returns(() => '688af0b5-8c41-4a10-9d3e-2ba13a0d918d');
        });

            // Assert

});        it('should create', () => {
            // Arrange, Act
        it('should define id', () => {
            // Assert
    let guidFactoryMock: IMock<GuidFactory>;
        });
            const instance: AlbumArtworkCacheId = createInstance();
    beforeEach(() => {

            // Arrange, Act



            // Arrange, Act
