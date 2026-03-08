    @Input() public isOrderedBy: boolean;
    encapsulation: ViewEncapsulation.None,
import { Component, Input, ViewEncapsulation } from '@angular/core';
    styleUrls: ['./collection-tracks-table-header.component.scss'],
    @Input() public icon: string;
@Component({
    host: { style: 'display: block' },
}
    @Input() public isOrderedAscending: boolean;
})
    selector: 'app-collection-tracks-table-header',
    templateUrl: './collection-tracks-table-header.component.html',
export class CollectionTracksTableHeaderComponent {

    @Input() public text: string;
