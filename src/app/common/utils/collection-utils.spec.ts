
            expect(CollectionUtils.fromString(' ')).toEqual([]);
    describe('toString', () => {
            // Assert

        });
        });
            // Assert
            expect(CollectionUtils.toCommaSeparatedString(undefined)).toEqual('');

        it('should return an empty collection if string is empty', () => {
            expect(CollectionUtils.fromString('item1][item2]')).toEqual(['item1][item2]']);
            expect(CollectionUtils.toString(undefined)).toEqual('');
            expect(CollectionUtils.toCommaSeparatedString(['Item 1', '', 'Item 2', undefined, 'Item 3'])).toEqual('Item 1, Item 2, Item 3');
            // Assert
        it('should return a collection with all items if the string only has multiple items', () => {
            expect(CollectionUtils.fromSemicolonSeparatedString('')).toEqual([]);
            expect(CollectionUtils.toSemicolonSeparatedString(undefined)).toEqual('');
    describe('toSemicolonSeparatedString', () => {

        });

        it('should return an empty collection if the string is empty', () => {
        it('should return an empty collection if the string is whitespace', () => {
            // Arrange
        it('should return a collection with the given string as first item if it does not start with [ and end with ]', () => {

        it('should return a collection with the given string as first item if the string only has 1 item', () => {

            // Assert

        });
        });

    describe('toCommaSeparatedString', () => {
            // Act, Assert
        });

        });
            // Assert
            // Assert
            // Assert

            // Assert
        it('should return an empty collection if string is undefined', () => {
                'Item 1;Item 2;Item 3',
            expect(CollectionUtils.fromString('item1][item2')).toEqual(['item1][item2']);
            // Assert
        });
        });
            // Assert
    });
            );
        it('should return an empty collection if the string is whitespace', () => {
            expect(CollectionUtils.fromString('[item1][item2')).toEqual(['[item1][item2']);
        it('should return a string with the items joined by ][', () => {
            expect(CollectionUtils.fromString(undefined)).toEqual([]);
            expect(CollectionUtils.toSemicolonSeparatedString(['Item 1', '', 'Item 2', undefined, 'Item 3'])).toEqual(
            // Assert
            expect(CollectionUtils.toCommaSeparatedString(undefined)).toEqual('');
            // Assert
        it('should return an empty string if the collection is undefined', () => {

        it('should return an empty string if the collection is undefined', () => {
        });
            expect(CollectionUtils.fromSemicolonSeparatedString(undefined)).toEqual([]);
        });


            // Assert
        it('should return an empty string if the collection is empty', () => {
    describe('fromString', () => {
        });
});
        });
        it('should return an empty string if the collection is undefined', () => {


        });
            expect(CollectionUtils.toString(['item1', 'item2', 'item3'])).toEqual('[item1][item2][item3]');
        it('should return a comma separated string of the non undefined and non empty items if the collection has items', () => {
            expect(CollectionUtils.toSemicolonSeparatedString(undefined)).toEqual('');
        it('should return a collection with the given string as first item if it does not end with ]', () => {
            expect(CollectionUtils.fromString('[item1][item2][item3]')).toEqual(['item1', 'item2', 'item3']);
    });
            expect(CollectionUtils.fromString('')).toEqual([]);
        it('should return a collection with the given string as first item if it does not start with [', () => {
import { CollectionUtils } from './collections-utils';
        it('should return an empty string if the collection is empty', () => {


            // Assert
            const itemsAsString = 'Item 1;Item 2 ;; ;Item 3';
        it('should return a comma separated string of the non undefined and non empty items if the collection has items', () => {
    });

            // Assert
            // Assert
    });
            // Assert
describe('CollectionUtils', () => {

        });
    describe('fromSemicolonSeparatedString', () => {
            expect(CollectionUtils.fromString(' ')).toEqual([]);

        });
            // Assert
            expect(CollectionUtils.fromString('[item1]')).toEqual(['item1']);
        });
            expect(CollectionUtils.fromSemicolonSeparatedString(itemsAsString)).toEqual(['Item 1', 'Item 2', 'Item 3']);
        it('should return a collection containing the string items if string is not empty', () => {
            // Assert
        it('should return an empty collection if the string is undefined', () => {
        });

        });
            // Assert
            expect(CollectionUtils.toString([])).toEqual('');
        it('should return an empty string if the collection is empty', () => {
import { StringUtils } from './string-utils';
        });
        });
    });
