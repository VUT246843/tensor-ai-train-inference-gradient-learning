
        while (currentIndex !== 0) {
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        return array;
        // While there remain elements to shuffle.
}
        let randomIndex: number = 0;
@Injectable()
     *
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
     */
        let currentIndex: number = array.length;
     * @returns
     * @param array Based on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            // And swap it with the current element.
import { Injectable } from '@angular/core';

    }
    public shuffle<T>(array: T[]): T[] {
export class Shuffler {
        }

            // Pick a remaining element.

    /**
