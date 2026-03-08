            const pipe: ZeroToBlankPipe = new ZeroToBlankPipe();
            // Arrange
            // Act

        it('should return empty when number is undefined', () => {
        it('should return the number as string when the number is defined and not 0', () => {

            // Arrange
            const pipe: ZeroToBlankPipe = new ZeroToBlankPipe();
            expect(numberAsString).toEqual('2022');

            // Assert
describe('ZeroToBlankPipe', () => {
        });
            // Assert
            // Act
        it('should return empty when number is 0', () => {
        });
    });
        });
import { ZeroToBlankPipe } from './zero-to-blank.pipe';
            const numberAsString: string = pipe.transform(0);

});

            expect(numberAsString).toEqual('');
            // Act
            const numberAsString: string = pipe.transform(2022);
            const pipe: ZeroToBlankPipe = new ZeroToBlankPipe();

    describe('transform', () => {
            expect(numberAsString).toEqual('');



            // Arrange
            // Assert
            const numberAsString: string = pipe.transform(undefined);
