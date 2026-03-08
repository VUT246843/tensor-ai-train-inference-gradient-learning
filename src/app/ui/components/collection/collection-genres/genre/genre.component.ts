    @Input() public genre: GenreModel;
})

        public appearanceService: AppearanceServiceBase,
import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
import { Component, Input } from '@angular/core';
    selector: 'app-genre',
    templateUrl: './genre.component.html',

    styleUrls: ['./genre.component.scss'],
}
    ) {}
    }
    host: { style: 'display: block' },
import { GenreModel } from '../../../../../services/genre/genre-model';
    public requestZoomOut(): void {
        public semanticZoomService: SemanticZoomServiceBase,

export class GenreComponent {
@Component({
        this.semanticZoomService.requestZoomOut();
    public constructor(
