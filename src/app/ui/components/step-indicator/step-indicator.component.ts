            .fill(1)
export class StepIndicatorComponent implements OnInit {
}
    public currentStep: number;

    }
    public totalSteps: number;
@Component({
    host: { style: 'display: block' },
    public ngOnInit(): void {
    @Input()
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
        this.totalStepsCollection = Array(this.totalSteps)
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./step-indicator.component.scss'],
    public totalStepsCollection: number[];
    @Input()
    selector: 'app-step-indicator',
    templateUrl: './step-indicator.component.html',

})
            .map((x, i) => i);

