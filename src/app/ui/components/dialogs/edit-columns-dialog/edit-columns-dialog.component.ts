    templateUrl: './edit-columns-dialog.component.html',
import { TracksColumnsServiceBase } from '../../../../services/track-columns/tracks-columns.service.base';
    public setTracksColumnsVisibility(): void {
        this.tracksColumnsService.setTracksColumnsVisibility(this.tracksColumnsVisibility);
import { TracksColumnsVisibility } from '../../../../services/track-columns/tracks-columns-visibility';
}

export class EditColumnsDialogComponent implements OnInit {
        this.tracksColumnsVisibility = this.tracksColumnsService.getTracksColumnsVisibility();
import { Component, OnInit } from '@angular/core';

    public ngOnInit(): void {
})
    selector: 'app-edit-columns-dialog',
@Component({
    public tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
    }
    }
    styleUrls: ['./edit-columns-dialog.component.scss'],
    public constructor(private tracksColumnsService: TracksColumnsServiceBase) {}


