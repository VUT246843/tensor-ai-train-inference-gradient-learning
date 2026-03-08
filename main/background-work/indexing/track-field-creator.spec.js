        });
            // Assert

        });
            // Arrange
            expect(field).toEqual('');
            expect(field).toEqual('Valid value');
        it('should return an empty string if the value array is undefined', () => {

            // Act
});
        it('should return an empty string when the given value is empty', () => {

    describe('createMultiTextField', () => {
            // Act
    beforeEach(() => {
    describe('createNumberField', () => {
        });
            const field = trackFieldCreator.createMultiTextField(undefined);
            const field = trackFieldCreator.createTextField('Valid value');

            const field = trackFieldCreator.createNumberField(20);
            // Act
            // Arrange
            // Act

            // Assert
            const field = trackFieldCreator.createTextField(undefined);

            // Assert
        it('should return the same value when the given value has no leading an trailing spaces', () => {
            // Arrange
            // Assert
        it('should return an 0 when the given value is undefined', () => {

        it('should convert to a delimited string', () => {
            // Assert

    });
            expect(field).toEqual('');

            // Arrange
            // Arrange
            expect(field).toEqual('Valid value');
    });
    let trackFieldCreator;
        it('should return the value when the given value is not null or undefined', () => {

            // Act
            // Arrange
            // Arrange
        });
    });
            // Arrange
            // Assert
        });
            // Act
        });
        it('should return an 0 when the given value is NaN', () => {


            expect(field).toEqual(0);
            // Assert

describe('TrackFieldCreator', () => {

            // Act
            // Assert

        trackFieldCreator = new TrackFieldCreator();


        });



            expect(field).toEqual(0);
            // Assert
            const field = trackFieldCreator.createMultiTextField(['Item 1', 'Item 2']);

            const field = trackFieldCreator.createTextField('  Valid value ');
const { TrackFieldCreator } = require('./track-field-creator');
            const field = trackFieldCreator.createNumberField(NaN);
            expect(field).toEqual(';Item 1;;Item 2;');

        });
    describe('createTextField', () => {
            // Act
    });
        it('should remove leading and trailing spaces from the given value', () => {
            const field = trackFieldCreator.createTextField('');
            expect(field).toEqual('');
            const field = trackFieldCreator.createNumberField(undefined);
            // Act



        });

        it('should return an empty string when the given value is undefined', () => {


            // Arrange
            expect(field).toEqual(20);

