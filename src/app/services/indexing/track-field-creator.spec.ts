
            // Act
        it('should return the value when the given value is not null or undefined', () => {
            // Arrange

            const field: string = trackFieldCreator.createTextField('Valid value');

import { TrackFieldCreator } from './track-field-creator';
    let trackFieldCreator: TrackFieldCreator;

            const field: number = trackFieldCreator.createNumberField(undefined);

import { MetadataPatcher } from '../../common/metadata/metadata-patcher';
        it('should return an 0 when the given value is NaN', () => {
            // Act

        });
    describe('createMultiTextField', () => {
    });
            expect(field).toEqual(0);
            const field: string = trackFieldCreator.createMultiTextField(undefined);
            // Act
            // Assert
        });
        });

        });

            expect(field).toEqual(20);
            // Arrange

            // Assert
            const field: number = trackFieldCreator.createNumberField(NaN);
            // Arrange
            // Act
            // Arrange
            // Assert
            expect(field).toEqual('');


    describe('createTextField', () => {
});

    });
    beforeEach(() => {
        it('should remove leading and trailing spaces from the given value', () => {
            // Arrange


            const field: string = trackFieldCreator.createTextField(undefined);
            // Act
    describe('createNumberField', () => {
        });
            // Assert
        });


    });
import { IMock, Mock, Times } from 'typemoq';
            const field: string = trackFieldCreator.createTextField('  Valid value ');

            expect(field).toEqual('');
            // Assert
        it('should return an empty string if the value array is undefined', () => {

            // Act
            const field: number = trackFieldCreator.createNumberField(20);



        it('should return an empty string when the given value is empty', () => {

            // Arrange
            // Arrange
            expect(field).toEqual('Valid value');

            // Arrange


    });
        });
        it('should return the same value when the given value has no leading an trailing spaces', () => {
            const field: string = trackFieldCreator.createTextField('');
            expect(field).toEqual(0);
            // Assert
describe('TrackFieldCreator', () => {
        });
            // Assert

        trackFieldCreator = new TrackFieldCreator();
            // Act
            // Act
        it('should return an 0 when the given value is undefined', () => {
            expect(field).toEqual('');
        it('should return an empty string when the given value is undefined', () => {
            // Assert
            expect(field).toEqual('Valid value');
