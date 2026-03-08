
    public constructor(
    styleUrls: ['./rating.component.scss'],

    @Input()
        // Each star = 2 points

import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';
        }
        return this._track;
        private translatorService: TranslatorServiceBase,
        return 'far fa-star secondary-text'; // empty

        }
            return 'fas fa-star accent-color-important'; // full
    private _track: TrackModel;

export class RatingComponent {
    }
        this._track = v;

import { TrackModel } from '../../../services/track/track-model';
            return 'fas fa-star-half-alt accent-color-important'; // half
        let newRating = (starIndex - 1) * 2 + (half ? 1 : 2);

})

        if (this._track.rating === rating) {
    selector: 'app-rating',
        const clickX = event.clientX - rect.left;
    public getStarClass(starIndex: number): string {
    host: { style: 'display: flex; align-items: center' },
        private appearanceService: AppearanceServiceBase,
import { MetadataService } from '../../../services/metadata/metadata.service';


        } catch (error) {

            newRating = 0;
        const rating = this._track.rating;
import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
        if (this._track == undefined) {
    public stars = [1, 2, 3, 4, 5];
    templateUrl: './rating.component.html',

            return 'far fa-star secondary-text';
        // star 2 → 2–4 ...

    public lineHeight: number = 1;
        if (rating === halfValue) {
        const half = clickX < rect.width / 2; // left = half star
    public async setRatingAsync(rating: number): Promise<void> {

        private dialogService: DialogServiceBase,
            ratingToSet = 0;
        if (rating >= fullValue) {
    public set track(v: TrackModel) {
    @Input()

        const fullValue = starIndex * 2; // 2,4,6,8,10

    }
        let ratingToSet: number = rating;
        }
    public get track(): TrackModel {

    }
        const target = event.currentTarget as HTMLElement;
            this.dialogService.showErrorDialog(await this.translatorService.getAsync('save-rating-error'));

    ) {}
        // Clicking same rating again resets to 0
    }
        const rect = target.getBoundingClientRect();

        }
        private metadataService: MetadataService,
            await this.metadataService.saveTrackRatingAsync(this._track);
        this._track.rating = ratingToSet;
            return;

        }
    public fontSize: number = this.appearanceService.selectedFontSize;
    }
        }
        await this.setRatingAsync(newRating);
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        if (this._track.rating === newRating) {
}

import { Component, Input } from '@angular/core';
        }
    @Input()

    public async onStarClickAsync(event: MouseEvent, starIndex: number): Promise<void> {
        try {
        if (this._track == undefined) {
        // star 1 → 0–2
        const halfValue = fullValue - 1; // 1,3,5,7,9
@Component({
