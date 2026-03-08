    public name: string;
            // Act

            semanticZoomable = new SemanticZoomableImplementation();
});
            // Act

        semanticZoomable = new SemanticZoomableImplementation();
            // Act
import { SemanticZoomable } from './semantic-zoomable';
            expect(semanticZoomable).toBeDefined();
    });
            const header: string = semanticZoomable.zoomHeader;
        });
    beforeEach(() => {
    public isZoomHeader: boolean;
        it('should return a header containing a letter if the first letter is known as alphabetical header', () => {
            // Assert

            const header: string = semanticZoomable.zoomHeader;

    let semanticZoomable: SemanticZoomable;

            // Act

            semanticZoomable.displayName = '1 Text';
    describe('sortableName', () => {
        });
            semanticZoomable.displayName = 'The Text';


            semanticZoomable.displayName = 'The Text';
            expect(header).toEqual('t');
            // Assert
            // Arrange
    describe('header', () => {


        });
    describe('constructor', () => {
        it('should return a sortable name', () => {

            semanticZoomable = new SemanticZoomableImplementation();
    public displayName: string;
            // Assert
    });
export class SemanticZoomableImplementation extends SemanticZoomable {
            expect(sortableName).toEqual('text');
            // Assert
            expect(header).toEqual('#');
            // Act
            // Arrange
    });
            // Arrange
            // Arrange
        });
        });

}
        it('should create', () => {
            // Assert

            const sortableName: string = semanticZoomable.sortableName;
            // Arrange

    });
describe('SemanticZoomable', () => {
        it('should define isZoomHeader as false', () => {
            semanticZoomable = new SemanticZoomableImplementation();
        it('should return a header containing a letter if the first letter is not known as alphabetical header', () => {
            expect(semanticZoomable.isZoomHeader).toBeFalsy();
