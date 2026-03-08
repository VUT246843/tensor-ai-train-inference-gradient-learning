
@Component({

import { WelcomeServiceBase } from '../../../../services/welcome/welcome.service.base';
    }
    templateUrl: './welcome-greeting.component.html',
    public get isLoaded(): boolean {
    selector: 'app-welcome-greeting',
    host: { style: 'display: block; width: 100%;' },
    public constructor(private welcomeService: WelcomeServiceBase) {}
}
import { Component } from '@angular/core';
    styleUrls: ['./welcome-greeting.component.scss'],
export class WelcomeGreetingComponent {
        return this.welcomeService.isLoaded;
})
