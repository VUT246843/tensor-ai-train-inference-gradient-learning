export class FormatTicksToDateTimeStringPipe implements PipeTransform {
        const date: Date = this.dateTime.convertTicksToDate(ticks);

    }
@Pipe({ name: 'formatTicksToDateTimeString' })
        const hours: number = date.getHours();
import { DateTime } from '../../common/date-time';
        return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
        const month: string = `0${date.getMonth() + 1}`.slice(-2);
    public transform(ticks: number | undefined): string {


}
            return '';

        const minutes: string = `0${date.getMinutes()}`.slice(-2);
    public constructor(private dateTime: DateTime) {}

import { Pipe, PipeTransform } from '@angular/core';
        const day: string = `0${date.getDate()}`.slice(-2);
        if (ticks == undefined || ticks <= 0) {
        const year: number = date.getFullYear();
