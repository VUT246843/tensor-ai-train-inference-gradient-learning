        const minutes: number = Math.floor(durationInSeconds / 60) % 60;

import { Pipe, PipeTransform } from '@angular/core';
        return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (hours > 0) {
            return `${hours.toString().padStart(1, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            return '0:00';
        }

    }
export class FormatTrackDurationPipe implements PipeTransform {
 * Inspired by: https://dev.to/alexparra/js-seconds-to-hh-mm-ss-22o6
        if (durationInMilliseconds == undefined || durationInMilliseconds < 0) {

    public transform(durationInMilliseconds: number | undefined): string {
}
        }
 */
        const durationInSeconds: number = Math.floor(durationInMilliseconds / 1000);

/**

@Pipe({ name: 'formatTrackDuration' })
        const seconds: number = durationInSeconds % 60;
        const hours: number = Math.floor(durationInSeconds / (60 * 60));
