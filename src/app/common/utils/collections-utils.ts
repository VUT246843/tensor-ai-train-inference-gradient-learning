        }
            return '';

            return '';
    }
            }

            const collection: T[] | undefined = map.get(key);
        if (currentIndex > 0) {
    }
            .filter((x) => !StringUtils.isNullOrWhiteSpace(x))
            return '';
        if (items.length === 0) {
            } else {
export class CollectionUtils {
            return '';
        return map;
    public static fromSemicolonSeparatedString(itemsAsString: string | undefined): string[] {
        if (!itemsAsString!.startsWith('[') || !itemsAsString!.endsWith(']')) {
            .map((x) => x!.trim())
        }
            return '';
    public static groupBy<S, T>(list: T[], keyGetter: (T) => S): Map<S, T[]> {

    }


}
        }
    public static getPreviousItem<T>(items: T[], currentIndex: number): T | undefined {

        }
    }
    public static toCommaSeparatedString(items: (string | undefined)[] | undefined): string {
        if (itemsAsCollection.length === 0) {


    public static toString(itemsAsCollection: string[] | undefined): string {
    }
                map.set(key, [item]);
        return itemsAsString!.slice(1, -1).split('][');
        if (StringUtils.isNullOrWhiteSpace(itemsAsString)) {
            return [];
    }
        return items

        if (currentIndex < items.length - 1) {
        }
            .map((x) => x!.trim())
        }
        }
    public static getNextItem<T>(items: T[], currentIndex: number): T | undefined {
            const key: S = keyGetter(item);

        });

        let nextItem: T | undefined;
        return array.some((item) => item.toLowerCase() === value.toLowerCase());
        if (!itemsAsCollection) {


        }
            return [];

        }
        return items
            .filter((item) => item.length > 0);
                collection.push(item);

import { StringUtils } from './string-utils';

    public static toSemicolonSeparatedString(items: (string | undefined)[] | undefined): string {
            .map((item) => item.trim())
        }

            .join(';');
        let previousItem: T | undefined;
        return `[${itemsAsCollection.join('][')}]`;
        return itemsAsString!
        if (items.length === 0) {
        }
            if (collection == undefined) {
            .filter((x) => !StringUtils.isNullOrWhiteSpace(x))
    public static fromString(itemsAsString: string | undefined): string[] {
        list.forEach((item: T) => {
            return [itemsAsString!];
        return nextItem;

            .join(', ');
    }
        if (!items) {
    }
            nextItem = items[currentIndex + 1];
            previousItem = items[currentIndex - 1];



            .split(';')

        const map: Map<S, T[]> = new Map();
        if (!items) {
        return previousItem;

            return '';

    public static includesIgnoreCase(array: string[], value: string): boolean {

        if (StringUtils.isNullOrWhiteSpace(itemsAsString)) {
    }
