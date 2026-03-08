            const name: string = artistModel.displayName;
            // Arrange
            // Assert

            // Assert
    });

        });

        });

            // Assert
        it('should return "Unknown artist" if artist is space', () => {
        it('should define isSelected', () => {
import { ArtistModel } from './artist-model';
            // Arrange



            const artist: string = 'My artist';

            // Act
import { TranslatorServiceBase } from '../translator/translator.service.base';

            expect(artistModel).toBeDefined();
            // Arrange
            // Act
    });
            expect(artistModel.isZoomHeader).toBeFalsy();
            expect(name).toEqual('My artist');
            // Act
        });
            // Act
        it('should return the artist name if artist is not undefined, empty or space.', () => {
    beforeEach(() => {
            // Act
            // Assert
            // Assert
        it('should return "Unknown artist" if artist is empty', () => {
            // Assert

            artistModel = new ArtistModel(artist, translatorServiceMock.object);
            const name: string = artistModel.displayName;
            // Arrange

            const artist: string = ' ';

            // Arrange
    describe('constructor', () => {
        });
describe('ArtistModel', () => {
        it('should define isZoomHeader as false', () => {

        it('should create', () => {
            const artist: string = '';
            // Act

    describe('name', () => {

            const name: string = artistModel.displayName;

        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');
            // Assert

            // Arrange
        });
import { IMock, Mock } from 'typemoq';


        });

        });


});
            // Assert
            expect(artistModel.displayName).toBeDefined();

        });
        });
        artistModel = new ArtistModel('My artist', translatorServiceMock.object);
            expect(artistModel.zoomHeader).toBeDefined();
            // Assert
            // Arrange
            artistModel = new ArtistModel(artist, translatorServiceMock.object);
            expect(artistModel.sortableName).toBeDefined();

            // Arrange
            // Act
            expect(name).toEqual('Unknown artist');
    let artistModel: ArtistModel;
            // Arrange
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

            // Act
    });


        it('should define name', () => {
        it('should define header', () => {
            // Act

            expect(artistModel.isSelected).toBeDefined();
            expect(name).toEqual('Unknown artist');


            artistModel = new ArtistModel(artist, translatorServiceMock.object);
        it('should define sortableName', () => {
    let translatorServiceMock: IMock<TranslatorServiceBase>;
