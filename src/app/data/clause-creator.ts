export class ClauseCreator {
    }
        const orClauses: string[] = [];

        orLikeClause += ')';
        }
            }
            } else {

        return `${columnName} IN (${commaSeparatedItems})`;

    public static escapeQuotes(sourceString: string): string {
        return StringUtils.replaceAll(sourceString, `'`, `''`);

        return orLikeClause;
                    `(LOWER(${columnName}) LIKE LOWER('%${delimiter}${StringUtils.replaceAll(clauseItem, `'`, `''`)}${delimiter}%'))`,
    public static createTextInClause(columnName: string, clauseItems: string[]): string {
}
        const commaSeparatedItems: string = quotedClauseItems.join(',');
        return `${columnName} IN (${commaSeparatedItems})`;

        for (const clauseItem of clauseItems) {
        const commaSeparatedItems: string = clauseItems.join(',');
                );
import { StringUtils } from '../common/utils/string-utils';
    }
                orClauses.push(`(${columnName} IS NULL OR ${columnName}='')`);
    public static createNumericInClause(columnName: string, clauseItems: number[]): string {
                orClauses.push(
    }
        const quotedClauseItems: string[] = clauseItems.map((item) => `'` + ClauseCreator.escapeQuotes(item) + `'`);
            if (StringUtils.isNullOrWhiteSpace(clauseItem)) {
        orLikeClause += orClauses.join(' OR ');


    }
    public static createOrLikeClause(columnName: string, clauseItems: string[], delimiter: string): string {
        let orLikeClause: string = '';
        orLikeClause += ' (';




