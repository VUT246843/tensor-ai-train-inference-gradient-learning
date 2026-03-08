            // Arrange


            const proposedNumber: number = 600;
            expect(clampedNumber).toEqual(maximumNumber);
            // Arrange
        });
            // Assert
        it('should return the maximum number of the proposed number is larger than the maximum number', () => {
            const minLogarithmic = mathExtensions.linearToLogarithmic(minLinear, 0.01, 1.0);
            const minimumNumber: number = 0;
            // Assert
            const clampedNumber: number = mathExtensions.clamp(proposedNumber, minimumNumber, maximumNumber);

            const clampedNumber: number = mathExtensions.clamp(proposedNumber, minimumNumber, maximumNumber);
            const logarithmicValue = mathExtensions.linearToLogarithmic(middleLinear, 0.01, 1.0);
            const minLog = Math.log(0.01);
});

            const maximumNumber: number = 500;
        });
describe('MathExtensions', () => {

        });

            const proposedNumber: number = -50;

            // Assert
        it('should return the maximum number of the proposed number equals the maximum number', () => {
        it('should return the minimum number of the proposed number equals the minimum number', () => {
    let mathExtensions: MathExtensions;
            // Assert
        it('should convert the maximum linear value to the maximum logarithmic value', () => {

            const maximumNumber: number = 500;


            const scale = (maxLog - minLog) / (1.0 - 0.01);

        it('should return the proposed number of the proposed number is larger than the minimum number and less than the maximum number', () => {
            const maxLogarithmic = mathExtensions.linearToLogarithmic(maxLinear, 0.01, 1.0);


            expect(clampedNumber).toEqual(maximumNumber);
            const maximumNumber: number = 500;
        });
        it('should convert the minimum linear value to the minimum logarithmic value', () => {
            // Arrange
            // Arrange
    beforeEach(() => {

            expect(minLogarithmic).toBeCloseTo(0.01);
            const proposedNumber: number = 0;
            // Act
            expect(maxLogarithmic).toBeCloseTo(1.0);

        });
        it('should convert a linear value in the middle of the range to a logarithmic value', () => {
            expect(logarithmicValue).toBeCloseTo(expectedLogarithmic);
            const clampedNumber: number = mathExtensions.clamp(proposedNumber, minimumNumber, maximumNumber);

        it('should return the minimum number of the proposed number is less than the minimum number', () => {
            const expectedLogarithmic = Math.exp(minLog + scale * (middleLinear - 0.01));
            expect(clampedNumber).toEqual(minimumNumber);
            // Arrange
            // Act
    });
            const clampedNumber: number = mathExtensions.clamp(proposedNumber, minimumNumber, maximumNumber);
        });
            const minimumNumber: number = 0;

            // Arrange
        });
            // Arrange
        mathExtensions = new MathExtensions();
            const maxLinear = 1.0;
            const maximumNumber: number = 500;
    });
            expect(clampedNumber).toEqual(minimumNumber);
            const maximumNumber: number = 500;
            const clampedNumber: number = mathExtensions.clamp(proposedNumber, minimumNumber, maximumNumber);
            expect(clampedNumber).toEqual(proposedNumber);
            // Act
        });

            // Act
            expect(mathExtensions).toBeDefined();

import { MathExtensions } from './math-extensions';
            const minimumNumber: number = 0;
    });


    describe('constructor', () => {
            // Act

            // Assert
    describe('clamp', () => {
            const maxLog = Math.log(1.0);
            const proposedNumber: number = 500;
            // Assert
            // Act
            // Arrange
            const middleLinear = 0.5;

            // Assert



        });
    });
            // Assert

            // Assert
            // Act
        it('should create', () => {
            const minimumNumber: number = 0;
            // Act
            // Arrange

            const proposedNumber: number = 80;
            // Calculate the expected logarithmic value manually


            // Act
            const minimumNumber: number = 0;
    describe('linearToLogarithmic', () => {
            const minLinear = 0;
