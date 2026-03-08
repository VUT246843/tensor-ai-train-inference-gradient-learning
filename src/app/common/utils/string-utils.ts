            return true;

    }

export class StringUtils {

        } catch (e: unknown) {
            }
        }
        }
            return false;
        if (sourceString == undefined) {
        if (sourceString == undefined && stringToCheck == undefined) {
        }
                const prefixFollowedBySpace: string = `${removablePrefix} `;
            if (!removePrefixes) {
        }
    public static removeAccents(stringWithAccents: string): string {

        }

        }
            return false;
        }

    }
            if (stringToCheck.trim() === '') {
        if (string1 == undefined) {
        return sourceString.replace(oldValue, newValue);

                if (trimmedAndLowerCasedOriginalString.startsWith(prefixFollowedBySpace)) {
    public static get empty(): string {
                    return trimmedAndLowerCasedOriginalString.replace(prefixFollowedBySpace, '').trim();
    public static equalsIgnoreCase(string1: string | undefined, string2: string | undefined): boolean {
        if (this.isNullOrWhiteSpace(originalString)) {
    public static replaceFirst(sourceString: string, oldValue: string, newValue: string): string {
        if (stringToCheck == undefined) {
        return stringWithAccents.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    }


            return true;



        try {
            return true;


    }
    }

        if (string2 == undefined) {

        return sourceString.split(oldValue).join(newValue);
        return sourceString.toLowerCase().includes(stringToCheck.toLowerCase());
    public static getSortableString(originalString: string | undefined, removePrefixes: boolean): string {
                }
                return true;
            return false;
            return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
        return string1.toLowerCase() === string2.toLowerCase();
        }
import { Constants } from '../application/constants';
    public static isNullOrWhiteSpace(stringToCheck: string | undefined): boolean {
        }
        if (this.isNullOrWhiteSpace(str)) {

    }
            for (const removablePrefix of Constants.removablePrefixes) {
        if (string1 == undefined && string2 == undefined) {
            // Ignore this error
            return false;
            return false;
    public static capitalizeFirstLetter(str: string): string {
            }
        try {
            }

        return originalString!.toLowerCase();

}
                return trimmedAndLowerCasedOriginalString;
        return '';

    }
    public static replaceAll(sourceString: string, oldValue: string, newValue: string): string {
            const trimmedAndLowerCasedOriginalString: string = originalString!.trim().toLowerCase();
    }
        } catch (e: unknown) {
        }
    public static includesIgnoreCase(sourceString: string | undefined, stringToCheck: string | undefined): boolean {
        if (stringToCheck == undefined) {

    }
        return false;

        }
            return str;
