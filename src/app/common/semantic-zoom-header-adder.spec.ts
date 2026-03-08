export class SemanticZoomableImplementation extends SemanticZoomable {
import { IMock, Mock } from 'typemoq';

            expect(semanticZoomables[3].zoomHeader).toEqual('a');
            expect(semanticZoomables[2].isZoomHeader).toBeFalsy();
    let guidFactoryMock: IMock<GuidFactory>;
    const semanticZoomable4: SemanticZoomable = new SemanticZoomableImplementation();
            expect(semanticZoomables[4].isZoomHeader).toBeFalsy();
import { SemanticZoomHeaderAdder } from './semantic-zoom-header-adder';
import { GuidFactory } from './guid.factory';
        it('should not add additional zoom headers on a list which already has zoom headers', () => {
            // Arrange
            expect(semanticZoomables[5].isZoomHeader).toBeFalsy();
            expect(semanticZoomables[3].isZoomHeader).toBeTruthy();
            // Assert
    });
            let semanticZoomables: SemanticZoomable[] = [semanticZoomable1, semanticZoomable2, semanticZoomable3, semanticZoomable4];
    public name: string;
            expect(semanticZoomables[5].isZoomHeader).toBeFalsy();
    semanticZoomable4.displayName = 'Another zoomable 2';
            let semanticZoomables: SemanticZoomable[] = [semanticZoomable1, semanticZoomable2, semanticZoomable3, semanticZoomable4];
        semanticZoomHeaderAdder = new SemanticZoomHeaderAdder(guidFactoryMock.object);
            semanticZoomables = semanticZoomHeaderAdder.addZoomHeaders(semanticZoomables);
            // Assert
    const semanticZoomable3: SemanticZoomable = new SemanticZoomableImplementation();
            expect(semanticZoomables[0].isZoomHeader).toBeTruthy();
            expect(semanticZoomables[0].zoomHeader).toEqual('z');
describe('SemanticZoomHeaderAdder', () => {
            // Act

    public displayName: string;
    let semanticZoomHeaderAdder: SemanticZoomHeaderAdder;
            expect(semanticZoomables[4].isZoomHeader).toBeFalsy();

            expect(semanticZoomables[1].isZoomHeader).toBeFalsy();
        });
});
            expect(semanticZoomables.length).toEqual(6);

}


    semanticZoomable1.displayName = 'Zoomable 1';

            // Arrange
    beforeEach(() => {
            expect(semanticZoomables[3].zoomHeader).toEqual('a');
            expect(semanticZoomables[3].isZoomHeader).toBeTruthy();

            expect(semanticZoomables.length).toEqual(6);
            semanticZoomables = semanticZoomHeaderAdder.addZoomHeaders(semanticZoomables);
    const semanticZoomable1: SemanticZoomable = new SemanticZoomableImplementation();
import { SemanticZoomable } from './semantic-zoomable';
    semanticZoomable3.displayName = 'Another zoomable 1';
            expect(semanticZoomables[0].zoomHeader).toEqual('z');
            expect(semanticZoomables[2].isZoomHeader).toBeFalsy();
        });
    });
        it('should add zoom headers on a list without zoom headers', () => {
        guidFactoryMock = Mock.ofType<GuidFactory>();
    const semanticZoomable2: SemanticZoomable = new SemanticZoomableImplementation();

            expect(semanticZoomables[1].isZoomHeader).toBeFalsy();
            expect(semanticZoomables[0].isZoomHeader).toBeTruthy();
            // Act
    describe('addZoomHeaders', () => {

            semanticZoomables = semanticZoomHeaderAdder.addZoomHeaders(semanticZoomables);
    semanticZoomable2.displayName = 'Zoomable 2';
