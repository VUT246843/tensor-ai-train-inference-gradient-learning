import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    public get loveClasses(): string {
            this.metadataService.saveTrackLove(this._track);
    }
                return 'fas fa-heart accent-color-important';

                this._track.love = 1;

        private dialogService: DialogServiceBase,
            case 0:
        switch (this._track.love) {
                break;
            case -1:

        this._track = v;
import { TrackModel } from '../../../services/track/track-model';
import { ScrobblingService } from '../../../services/scrobbling/scrobbling.service';
    @Input()
import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
    ) {}
                return 'far fa-heart secondary-text';
    styleUrls: ['./love.component.scss'],
        return this._track;

                break;
                this._track.love = 0;
    @Input()
            this.dialogService.showErrorDialog(await this.translatorService.getAsync('save-love-error'));
            case -1:
        } catch (error) {
import { Component, Input } from '@angular/core';
        }
        }
    }
    host: { style: 'display: flex; align-items: center' },

    }
                return 'fas fa-heart-crack accent-color-important';
            default:
    private _track: TrackModel;

import { MetadataService } from '../../../services/metadata/metadata.service';
        private appearanceService: AppearanceServiceBase,
    public async toggleLoveAsync(): Promise<void> {
    templateUrl: './love.component.html',
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
                break;
        await this.scrobblingService.sendTrackLoveAsync(this._track, this._track.love === 1);
        private translatorService: TranslatorServiceBase,
    @Input()
    }
        private metadataService: MetadataService,

}
            case 1:
    public fontSize: number = this.appearanceService.selectedFontSize;
    public get track(): TrackModel {
    public constructor(
    public set track(v: TrackModel) {
    selector: 'app-love',
        switch (this._track.love) {


        private scrobblingService: ScrobblingService,
@Component({
})
                break;
export class LoveComponent {
    public lineHeight: number = 1;
            case 1:
        try {
            default:
                this._track.love = 0;

                this._track.love = -1;
        }
