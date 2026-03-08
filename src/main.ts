import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    .catch((err) => console.error(err));
        preserveWhitespaces: false,
if (AppConfig.production) {
import { enableProdMode } from '@angular/core';
platformBrowserDynamic()

    .bootstrapModule(AppModule, {
    enableProdMode();
import { AppConfig } from './environments/environment';
import { AppModule } from './app/app.module';

    })
}
