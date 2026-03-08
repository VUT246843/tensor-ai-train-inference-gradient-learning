    styleUrls: ['./album-placeholder.component.scss'],
    @Input() squareClass: string = '';
    @Input() animationDelay: number = 0;
    templateUrl: './album-placeholder.component.html',
    @Input() album: AlbumModel | undefined;

    host: { style: 'display: block; width: 100%;height: 100%' },
}
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AlbumModel } from '../../../services/album/album-model';
    encapsulation: ViewEncapsulation.None,
})
    public onAlbumClick(): void {
@Component({
    @Output() albumClick = new EventEmitter<AlbumModel | undefined>();
    }
export class AlbumPlaceholderComponent {
        this.albumClick.emit(this.album);
    selector: 'app-album-placeholder',

