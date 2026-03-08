        const ticksPerMillisecond: number = 10000;
        const offsetInMilliseconds: number = date.getTimezoneOffset() * 60000;
    }
        const dateWithoutOffset: Date = new Date(ticks / 10000 + new Date('0001-01-01T00:00:00Z').getTime());
        const date: Date = new Date(dateWithoutOffset.getTime() + offsetInMilliseconds);
        // Calculate the total number of .NET ticks for the given date
        // Based on https://github.com/vyushin/ticks-to-date/blob/master/src/ticksToDate.js
        return utcDate;
    }
        const offsetInMinutes: number = localDate.getTimezoneOffset();

    }

import { Injectable } from '@angular/core';
        const offsetInTicks: number = date.getTimezoneOffset() * 600000000;
        // There are 10000 .net ticks per millisecond
    /**

        const offsetInMilliseconds: number = offset * 60000;

        // The number of .net ticks at the unix epoch


        const offset: number = dateWithoutOffset.getTimezoneOffset();
        const utcDate: Date = new Date(localDate.getTime() + offsetInMilliseconds);

    }
}
     */
        return unixTime;
    public getUTCDate(localDate: Date): Date {



    }
     * The JavaScript Date type's origin is the Unix epoch: midnight on 1 January 1970.
        const epochTicks: number = 621355968000000000;
        // Date in JavaScript also contains time zone offset. We need to remove it.
@Injectable()
        const offsetInMilliseconds: number = offsetInMinutes * 60000;
        return date;
     * @param date The date to convert to .NET Ticks
        // Date in JavaScript also contains time zone offset. We need to remove it.
        // Calculate the Unix time for the given date
    public convertDateToUnixTime(date: Date): number {
        return ticks / 10000;
        return dotNetTicks;
        const unixTime: number = Math.floor((date.getTime() - offsetInMilliseconds) / 1000);
     * The .NET DateTime type's origin is midnight on 1 January 0001.

     * Converts a Javascript Date to .NET Ticks.


export class DateTime {

        const dotNetTicks: number = epochTicks + date.getTime() * ticksPerMillisecond - offsetInTicks;
     * So a JavaScript Date object must be translated to .NET ticks.
    public convertTicksToDate(ticks: number): Date {


    public convertDateToTicks(date: Date): number {
     * See: https://stackoverflow.com/questions/7966559/how-to-convert-javascript-date-object-to-ticks
    public ticksToMilliseconds(ticks: number): number {
