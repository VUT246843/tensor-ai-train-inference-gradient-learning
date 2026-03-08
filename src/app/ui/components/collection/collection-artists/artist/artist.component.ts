    @Input() public artist: ArtistModel;
    templateUrl: './artist.component.html',
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
    host: { style: 'display: block' },

        public appearanceService: AppearanceServiceBase,
    }


    public constructor(
        this.semanticZoomService.requestZoomOut();
    styleUrls: ['./artist.component.scss'],
    ) {}
})
}
import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
    selector: 'app-artist',
@Component({
        public semanticZoomService: SemanticZoomServiceBase,
import { ArtistModel } from '../../../../../services/artist/artist-model';
    public requestZoomOut(): void {
import { Component, Input } from '@angular/core';
export class ArtistComponent {
