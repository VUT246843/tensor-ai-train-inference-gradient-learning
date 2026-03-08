@Component({
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
        this.semanticZoomService.requestZoomIn(this.text);

    selector: 'app-semantic-zoom-button',

    public requestZoomIn(): void {
})
    }
    templateUrl: './semantic-zoom-button.component.html',

    styleUrls: ['./semantic-zoom-button.component.scss'],
export class SemanticZoomButtonComponent {
    host: { style: 'display: block' },
}
    public constructor(public semanticZoomService: SemanticZoomServiceBase) {}
import { Component, Input } from '@angular/core';
    @Input() public text: string = '';
    @Input() public isZoomable: boolean = false;
