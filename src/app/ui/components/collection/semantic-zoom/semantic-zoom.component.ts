import { SemanticZoomable } from '../../../../common/semantic-zoomable';
    }
            ),
            state(
@Component({
    public async ngOnInit(): Promise<void> {
    ],

import { Constants } from '../../../../common/application/constants';
    public isZoomable(text: string): boolean {
            state(
            ),
    public fadeIn: string = 'hidden';
        ['l', 'm', 'n', 'o'],
    animations: [
        ['x', 'y', 'z'],
        ['#', 'a', 'b', 'c'],
import { Component, Input, OnInit } from '@angular/core';
        await this.scheduler.sleepAsync(Constants.semanticZoomOutDelayMilliseconds);
import { animate, state, style, transition, trigger } from '@angular/animations';

    ];
    public buttonTexts: string[][] = [


    styleUrls: ['./semantic-zoom.component.scss'],
                'hidden',
            transition('hidden => visible', animate(`${Constants.semanticZoomOutAnimationMilliseconds}ms`)),
                'visible',
        ['p', 'q', 'r', 's'],
    }
    @Input()
    public constructor(private scheduler: SchedulerBase) {}
        ['h', 'i', 'j', 'k'],
export class SemanticZoomComponent implements OnInit {
    selector: 'app-semantic-zoom',
        this.fadeIn = 'visible';
                style({
    public SemanticZoomables: SemanticZoomable[] = [];

                    opacity: 0,
                    opacity: 1,
        trigger('fadeIn', [

        const headers: string[] = this.SemanticZoomables.map((x) => x.zoomHeader);
        ['t', 'u', 'v', 'w'],
        ]),
    templateUrl: './semantic-zoom.component.html',

                }),
        return headers.includes(text);
        ['d', 'e', 'f', 'g'],
                }),
}
                style({
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
})
