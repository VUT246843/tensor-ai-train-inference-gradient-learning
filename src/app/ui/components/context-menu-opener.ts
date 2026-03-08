        this.positionY = `${event.clientY}px`;

        contextMenu.menu?.focusFirstItem('mouse');
        contextMenu.menuData = { data: selectable };
import { ISelectable } from '../interfaces/i-selectable';


        this.positionX = `${event.clientX}px`;
        contextMenu.openMenu();
@Injectable()
    }
    public open(contextMenu: MatMenuTrigger, event: MouseEvent, selectable: ISelectable): void {
export class ContextMenuOpener {
import { Injectable } from '@angular/core';
    public positionY: string = '0px';
        event.preventDefault();
}
    public positionX: string = '0px';

import { MatMenuTrigger } from '@angular/material/menu';
