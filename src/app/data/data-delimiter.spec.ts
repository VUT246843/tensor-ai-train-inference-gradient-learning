

        });


            // Act

            expect(delimitedString).toEqual(';String 1;;String 2;;String 3;;String 4;');

        });
        it('should return a collection containing just the string if it does not have delimiters', () => {
            // Act
            // Act
    describe('toDelimitedString', () => {
            const stringArray: string[] = ['String 1', '', 'String 2'];
            const delimitedString: string = ';the string 1;the string 2;';
            expect(delimitedString).toEqual(';String 1;;String 2;');
            const stringArray: string[] = ['String 1'];
            const delimitedString: string = '';
            // Arrange

            // Assert
            // Arrange
        });


            // Act

        });
            // Arrange
            // Arrange


            expect(collection).toEqual(['']);
            // Assert
    describe('fromDelimitedString', () => {
            const delimitedString: string = 'the string';

            expect(collection).toEqual(['the string 1', 'the string 2']);
            // Act
            const delimitedString: string = ';the string 1;;the string 2;';
        it('should return an empty string if the array is undefined', () => {
            // Act
        it('should split entries containing the semicolon separator', () => {
            // Act

            const delimitedString: string | undefined = undefined;
        });
            expect(delimitedString).toEqual(';String 1;');
            expect(collection).toEqual(['the string']);
            // Act
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);

            // Assert
        it('should return false when values contains one non-empty string', () => {
            const values: string[] = ['foo', 'bar'];

        it('should return a collection containing multiple strings if the string has multiple delimited strings', () => {
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);

            expect(collection).toEqual(['']);
            // Act
        });
            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);
            expect(result).toBeTruthy();


        it('should return an empty string if the array has no elements', () => {
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);
            // Arrange
            const stringArray: string[] = ['String 1', 'String 2', 'String 3; String 4'];
            // Act
            expect(delimitedString).toEqual('');

        it('should remove empty array elements', () => {
            // Arrange
            expect(delimitedString).toEqual(';String 1;;String 2;');

            expect(delimitedString).toEqual(';String 1;;String 2;');
        it('should return true when values is undefined', () => {
        });
        it('should return a collection with an empty string if the delimited string is undefined', () => {
            const stringArray: string[] = [];
            // Assert

            // Assert
            expect(delimitedString).toEqual('');
            const stringArray: string[] | undefined = undefined;

        it('should return false when values contains more than one non-empty string', () => {
            // Arrange

            // Act
            const stringArray: string[] = [' String 1', '  String 2'];
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);

            const values: string[] = ['foo'];
            // Assert
            // Act
            // Act
        });
        });

            const delimitedString: string = ';the string;';
            // Assert
            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);
            const result: boolean = DataDelimiter.isUnknownValue(values);
            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);

            const result: boolean = DataDelimiter.isUnknownValue(values);
            const values: string[] = [' '];
        });
            // Assert

    });

            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);

            expect(collection).toEqual(['the string 1', 'the string 2']);
            // Assert

        it('should return false when values contains not only an empty string', () => {
            // Assert
        it('should remove leading spaces on array elements', () => {
        it('should return a collection containing multiple strings if the string has multiple malformed delimited strings', () => {
        });
        });
            // Assert
        });
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);
            // Act

        });

            // Arrange

            const values: string[] | undefined = undefined;
        });
            // Arrange
            // Arrange

            const stringArray: string[] = ['String 1 ', 'String 2   '];



            // Act
            // Act
            // Act
            // Act
            expect(result).toBeTruthy();
        it('should return true when values contains one empty string', () => {

            const values: string[] = [];
        it('should return true when values is empty', () => {

            const result: boolean = DataDelimiter.isUnknownValue(values);
        it('should remove trailing spaces on array elements', () => {
        it('should return a delimited string if the array has one element', () => {
            // Assert
            // Arrange

            const result: boolean = DataDelimiter.isUnknownValue(values);
            // Assert


});
            const result: boolean = DataDelimiter.isUnknownValue(values);
            // Arrange
            // Assert
            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);
            // Assert
            expect(delimitedString).toEqual(';String 1;;String 2;');
            expect(result).toBeFalsy();


            expect(result).toBeTruthy();
describe('DataDelimiter', () => {
            // Arrange

            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);
            // Assert



        it('should return a collection containing just the string without delimiters if it does have delimiters but only contains one string', () => {
            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);
            // Act

        });
        });

            // Arrange
            const stringArray: string[] = ['String 1', 'String 2'];
            // Arrange
        it('should return true when values contains one blank string', () => {

            const delimitedString: string = DataDelimiter.toDelimitedString(stringArray);
            // Assert
            expect(result).toBeFalsy();
            // Arrange
            expect(result).toBeFalsy();
        });

            // Arrange
        });
        });
        it('should return a delimited string if the array has more than one element', () => {
            // Arrange
            const result: boolean = DataDelimiter.isUnknownValue(values);
    });
            // Act
    });
            // Act
    describe('isUnknownValue', () => {


            // Arrange

            const collection: string[] = DataDelimiter.fromDelimitedString(delimitedString);


            const values: string[] = ['', 'foo'];
            expect(collection).toEqual(['the string']);
            expect(result).toBeTruthy();
            const result: boolean = DataDelimiter.isUnknownValue(values);
            // Assert
import { DataDelimiter } from './data-delimiter';
            // Arrange
            // Arrange

            // Assert

        });


            // Assert
        it('should return a collection with an empty string if the delimited string is empty', () => {

            const values: string[] = [''];
            // Assert
