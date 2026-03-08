    public highContrast: boolean = false;
    public constructor(public switchPlayerService: SwitchPlayerService) {}
    selector: 'app-switch-player-button',
import { Component, Input, ViewEncapsulation } from '@angular/core';
    public async switchPlayerButtonClickAsync(): Promise<void> {
    encapsulation: ViewEncapsulation.None,
    }
    styleUrls: ['./switch-player-button.component.scss'],

@Component({
    host: { style: 'display: block' },

    templateUrl: './switch-player-button.component.html',
    @Input()
        await this.switchPlayerService.togglePlayerAsync();
import { SwitchPlayerService } from '../../../services/player-switcher/switch-player.service';
export class SwitchPlayerButtonComponent {
}

})
