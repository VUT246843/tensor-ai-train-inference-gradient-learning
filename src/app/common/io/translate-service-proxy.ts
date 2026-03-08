        this.translateService.setDefaultLang(lang);

    }
import { Injectable } from '@angular/core';
        return (await this.translateService.get(key, interpolateParams).toPromise()) as string;
        await this.translateService.use(lang).toPromise();
import { TranslateService } from '@ngx-translate/core';
    public async use(lang: string): Promise<void> {
@Injectable()
}

import { TranslateServiceProxyBase } from './translate-service-proxy.base';
    }
    public async get(key: string | string[], interpolateParams?: object): Promise<string> {
        return this.translateService.instant(key, interpolateParams) as string;

    }

    public setDefaultLang(lang: string): void {
export class TranslateServiceProxy implements TranslateServiceProxyBase {
    }
    public instant(key: string | string[], interpolateParams?: object): string {

    public constructor(private translateService: TranslateService) {}
