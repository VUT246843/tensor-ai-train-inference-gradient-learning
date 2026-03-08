@Injectable()
    /**
     */
     * Removes all visible tooltips
export class Hacks {
    public removeTooltips(): void {
import { Injectable } from '@angular/core';
        while (document.getElementsByTagName('mat-tooltip-component').length > 0) {
            document.getElementsByTagName('mat-tooltip-component')[0].remove();
        }
}
    }

