export class DataDelimiter {
}
                .split(';') // Split by semicolon


    }
import { Constants } from '../common/application/constants';

    private static addDelimiters(originalString: string): string {
        const delimitedStrings: string[] = delimitedString!.split(DataDelimiter.delimiter);
        if (StringUtils.isNullOrWhiteSpace(delimitedString)) {
    }
    private static removeDelimiters(delimitedString: string): string {
        return result.join('');
    }

    private static delimiter: string = Constants.columnValueDelimiter;

        const nonDelimitedString: string = delimitedString.split(this.delimiter).join('');
    public static fromDelimitedString(delimitedString: string | undefined): string[] {
    private static doubleDelimiter: string = `${DataDelimiter.delimiter}${DataDelimiter.delimiter}`;
            }
        const result: string[] = [];

import { StringUtils } from '../common/utils/string-utils';
                .map((x) => x.trim()) // Trim whitespace
        return nonDelimitedString;

    public static isUnknownValue(values: string[] = []): boolean {

        return values.length === 0 || (values.length === 1 && StringUtils.isNullOrWhiteSpace(values[0]));
            return '';
    }

        return delimitedStrings.filter((x) => x !== '').map((x) => this.removeDelimiters(x));

        }
        if (!Array.isArray(stringArray) || stringArray.length === 0) {
                .filter((x) => x !== ''); // Remove empty strings


                result.push(this.addDelimiters(part));
        }
        return delimitedString;
            for (const part of parts) {

            const parts = item
        for (const item of stringArray) {
    public static toDelimitedString(stringArray: string[] | undefined): string {

    }
            return [''];
        }
        const delimitedString: string = `${this.delimiter}${originalString}${this.delimiter}`;
