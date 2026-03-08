    @Input()
    public onCheckedChanged(checked: boolean): void {
    }
    public isCheckedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

})
import { Component, EventEmitter, Input, Output } from '@angular/core';
        this.isChecked = checked;
    styleUrls: ['./toggle-switch.component.scss'],
    @Output()
    selector: 'app-toggle-switch',
}
        this.isCheckedChange.emit(this.isChecked);

    templateUrl: './toggle-switch.component.html',

    public isChecked: boolean = false;
@Component({
export class ToggleSwitchComponent {
