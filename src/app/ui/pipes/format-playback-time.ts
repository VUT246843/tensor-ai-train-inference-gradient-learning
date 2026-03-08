
            return '0:00';
import { Pipe, PipeTransform } from '@angular/core';
    public transform(progressSeconds: number | undefined): string {
/**
 */
        }
        return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (progressSeconds == undefined || progressSeconds < 0) {
export class FormatPlaybackTimePipe implements PipeTransform {
        }
}
        if (hours > 0) {
        const progressSecondsWithoutMilliseconds: number = Math.floor(progressSeconds);
        const minutes: number = Math.floor(progressSecondsWithoutMilliseconds / 60) % 60;

    }

            return `${hours.toString().padStart(1, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
@Pipe({ name: 'formatPlaybackTime' })
 * Inspired by: https://dev.to/alexparra/js-seconds-to-hh-mm-ss-22o6


        const seconds: number = progressSecondsWithoutMilliseconds % 60;
        const hours: number = Math.floor(progressSecondsWithoutMilliseconds / (60 * 60));
