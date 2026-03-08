        public translatorService: TranslatorServiceBase,
import { AudioVisualizerServiceBase } from '../../../../services/audio-visualizer/audio-visualizer.service.base';
    ) {}
    templateUrl: './appearance-settings.component.html',
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
    public async openThemesDirectoryAsync(): Promise<void> {
    encapsulation: ViewEncapsulation.None,

export class AppearanceSettingsComponent implements OnInit, OnDestroy {
    }
    }
    public constructor(



        private desktop: DesktopBase,
    public ngOnDestroy(): void {
        this.appearanceService.stopWatchingThemesDirectory();
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
    }
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
@Component({
        this.appearanceService.startWatchingThemesDirectory();
        public audioVisualizerService: AudioVisualizerServiceBase,
    public ngOnInit(): void {
    selector: 'app-appearance-settings',
        public appearanceService: AppearanceServiceBase,
import { DesktopBase } from '../../../../common/io/desktop.base';
}
        public settings: SettingsBase,
    host: { style: 'display: block; width: 100%;' },
        await this.desktop.openPathAsync(this.appearanceService.themesDirectoryPath);
    styleUrls: ['./appearance-settings.component.scss'],
import { SettingsBase } from '../../../../common/settings/settings.base';
})
