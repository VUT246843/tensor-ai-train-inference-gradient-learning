    selector: 'app-welcome-language',
export class WelcomeLanguageComponent {
    templateUrl: './welcome-language.component.html',
})
import { Component } from '@angular/core';
}

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
    host: { style: 'display: block; width: 100%;' },
@Component({
    styleUrls: ['./welcome-language.component.scss'],
    public constructor(public translatorService: TranslatorServiceBase) {}
