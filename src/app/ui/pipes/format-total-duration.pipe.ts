        const minuteText: string = this.translatorService.get('minute');

    public constructor(private translatorService: TranslatorServiceBase) {}

import {TranslatorServiceBase} from "../../services/translator/translator.service.base";
        const secondsText: string = this.translatorService.get('seconds');

        }

        }
}
@Pipe({ name: 'formatTotalDuration' })
        }
        const totalHours: number = totalMinutes / 60;
        const hourText: string = this.translatorService.get('hour');
        const totalDays: number = totalHours / 24;
        if (totalDays >= 1 || roundedTotalHours === 24) {
            return `${roundedTotalHours} ${roundedTotalHours === 1 ? hourText : hoursText}`;
        const roundedTotalHours: number = Math.round(totalHours * 10) / 10;
        const roundedTotalDays: number = Math.round(totalDays * 10) / 10;
        const dayText: string = this.translatorService.get('day');
            return `${minutesOnly} ${minutesOnly === 1 ? minuteText : minutesText}${secondsSuffix}`;

import { Pipe, PipeTransform } from '@angular/core';
    }
        const hoursText: string = this.translatorService.get('hours');
        const totalMinutes: number = totalSeconds / 60;


        if (totalHours >= 1) {
    public transform(totalMilliseconds: number | undefined): string {
            return '';
        }

export class FormatTotalDurationPipe implements PipeTransform {
        const minutesOnly: number = Math.floor(totalMinutes) % 60;
        const minutesText: string = this.translatorService.get('minutes');
        const totalSeconds: number = totalMilliseconds / 1000;
            const secondsSuffix: string = secondsOnly > 0 ? ` ${secondsOnly} ${secondsOnly === 1 ? secondText : secondsText}` : '';
        if (totalMinutes >= 1) {

        const secondsOnly: number = Math.floor(totalSeconds) % 60;
        if (totalMilliseconds == undefined || totalMilliseconds <= 0) {
            return `${roundedTotalDays} ${roundedTotalDays === 1 ? dayText : daysText}`;

        const daysText: string = this.translatorService.get('days');
        return `${secondsOnly} ${secondsOnly === 1 ? secondText : secondsText}`;
        const secondText: string = this.translatorService.get('second');
