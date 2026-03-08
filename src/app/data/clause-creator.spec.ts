            // Assert
            // Act
            const inClause: string = ClauseCreator.createNumericInClause(columnName, clauseItems);
            expect(inClause).toEqual(`TheColumn IN (1,5,8)`);
});
    describe('createNumericInClause', () => {

        });
            // Arrange
            const orLikeClause: string = ClauseCreator.createOrLikeClause(columnName, clauseItems, delimiter);



            const clauseItems: string[] = ['Item1', 'Item2', 'Item3'];
            );
    });
            // Assert
            // Assert
            const inClause: string = ClauseCreator.createTextInClause(columnName, clauseItems);
            expect(orLikeClause).toEqual(
            const delimiter: string = ';';
            const columnName: string = 'TheColumn';

            const clauseItems: number[] = [1, 5, 8];
        it('should create an in clause given a column name and numeric clause items', () => {
            const columnName: string = 'TheColumn';
        it('should replace single quotes by double single quotes', () => {

            // Act

            expect(returnString).toEqual(`A string ''with'' single ''quotes''`);
describe('ClauseCreator', () => {
        it('should create an or like clause given a column name and clause items and a delimiter', () => {


    describe('escapeQuotes', () => {
    });
            const returnString: string = ClauseCreator.escapeQuotes(sourceString);
            // Act
            const clauseItems: string[] = ['Item1', '', 'Item3'];
            const sourceString: string = `A string 'with' single 'quotes'`;
    });
        });
    });
            // Assert
import { ClauseCreator } from './clause-creator';
        });
        it('should create an in clause given a column name and text clause items', () => {
            const columnName: string = 'TheColumn';
                ` ((LOWER(TheColumn) LIKE LOWER('%;Item1;%')) OR (TheColumn IS NULL OR TheColumn='') OR (LOWER(TheColumn) LIKE LOWER('%;Item3;%')))`
    describe('createTextInClause', () => {
            // Arrange


            // Arrange
    describe('createOrLikeClause', () => {
            expect(inClause).toEqual(`TheColumn IN ('Item1','Item2','Item3')`);
            // Act
        });
            // Arrange

