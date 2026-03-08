});
        });
            // Act
            // Act
    beforeEach(() => {
describe('ArtistInformationFactory', () => {
            // Arrange
        desktopMock = Mock.ofType<DesktopBase>();
            expect(instance.name).toEqual('');
    describe('createEmpty', () => {
        });
            const instance = factory.createEmpty();
            // Arrange
            const factory: ArtistInformationFactory = new ArtistInformationFactory(desktopMock.object);
        it('should create an ArtistInformation instance with empty properties', () => {
            expect(instance.url).toEqual('url');


            expect(instance.name).toEqual('name');

            expect(factory).toBeDefined();
            expect(instance).toBeDefined();
            const factory: ArtistInformationFactory = new ArtistInformationFactory(desktopMock.object);
            // Assert

            expect(instance.url).toEqual('');
    describe('create', () => {
    let desktopMock: IMock<DesktopBase>;
            expect(instance.biography).toEqual('');
            expect(instance).toBeDefined();

    });

            const factory: ArtistInformationFactory = new ArtistInformationFactory(desktopMock.object);
import { IMock, Mock } from 'typemoq';
            expect(instance.imageUrl).toEqual('imageUrl');
            expect(instance.imageUrl).toEqual('');
        });
import { ArtistInformationFactory } from './artist-information-factory';

        it('should create an ArtistInformation instance with set properties', () => {

            // Act
            expect(instance.biography).toEqual('biography');
import { DesktopBase } from '../../common/io/desktop.base';

        it('should create', () => {
    });
            // Assert
            // Arrange


            // Assert
            const instance = factory.create('name', 'url', 'imageUrl', 'biography');
    });
    describe('constructor', () => {
    });
