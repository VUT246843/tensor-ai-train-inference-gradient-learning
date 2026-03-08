
    ]),
    transition(':enter', [
        animate(`${Constants.screenEaseSpeedMilliseconds}ms ease-out`, style({ 'margin-left': 0, 'margin-right': 0, opacity: 1 })),
        style({ 'margin-left': '50px', 'margin-right': '-50px', opacity: 0 }),
import { Constants } from '../../common/application/constants';
    ]),
export const enterLeftToRight = trigger('enterLeftToRight', [
import { trigger, transition, style, animate } from '@angular/animations';
        style({ 'margin-left': '-50px', 'margin-right': '50px', opacity: 0 }),
        animate(`${Constants.screenEaseSpeedMilliseconds}ms ease-out`, style({ 'margin-left': 0, 'margin-right': 0, opacity: 1 })),
    transition(':enter', [
]);
export const enterRightToLeft = trigger('enterRightToLeft', [
]);

