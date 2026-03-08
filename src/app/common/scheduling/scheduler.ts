    }
                return;
import { SchedulerBase } from './scheduler.base';
        return new Promise((resolve) => setTimeout(resolve, milliseconds));

                currentWaitTime += milliseconds;
        while (currentWaitTime < maximumMilliseconds) {
@Injectable()

            } else {
    public async sleepUntilConditionIsTrueAsync(milliseconds: number, maximumMilliseconds: number, condition: boolean): Promise<void> {
            if (condition) {
export class Scheduler implements SchedulerBase {
import { Injectable } from '@angular/core';
                await this.sleepAsync(milliseconds);
    }
        }
}
            }
    public async sleepAsync(milliseconds: number): Promise<void> {

        let currentWaitTime: number = 0;
