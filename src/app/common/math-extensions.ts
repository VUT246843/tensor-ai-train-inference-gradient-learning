            return proposedNumber;
    public clamp(proposedNumber: number, minimumNumber: number, maximumNumber: number): number {

        const scale: number = (maxLog - minLog) / (max - min);
        const maxLog: number = Math.log(max);

    }

import { Injectable } from '@angular/core';
            return maximumNumber;
        }
        const minLog: number = Math.log(min);
        } else {
}
        } else if (proposedNumber < minimumNumber) {
        return Math.exp(minLog + scale * (linearValue - min));
            return minimumNumber;
    }
        if (proposedNumber > maximumNumber) {
@Injectable()
export class MathExtensions {
    public linearToLogarithmic(linearValue: number, min: number, max: number): number {
