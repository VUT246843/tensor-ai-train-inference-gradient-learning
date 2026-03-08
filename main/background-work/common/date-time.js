     */

    }
    /**
class DateTime {
        // There are 10000 .net ticks per millisecond
        const epochTicks = 621355968000000000;
     * See: https://stackoverflow.com/questions/7966559/how-to-convert-javascript-date-object-to-ticks
        const offsetInTicks = date.getTimezoneOffset() * 600000000;


        // The number of .net ticks at the unix epoch
        // Date in JavaScript also contains time zone offset. We need to remove it.
     * So a JavaScript Date object must be translated to .NET ticks.
        return epochTicks + date.getTime() * ticksPerMillisecond - offsetInTicks;
    convertDateToTicks(date) {
     * @param date The date to convert to .NET Ticks
        // Calculate the total number of .NET ticks for the given date
     * The JavaScript Date type's origin is the Unix epoch: midnight on 1 January 1970.
     * The .NET DateTime type's origin is midnight on 1 January 0001.

     * Converts a Javascript Date to .NET Ticks.
        const ticksPerMillisecond = 10000;
exports.DateTime = DateTime;
}
