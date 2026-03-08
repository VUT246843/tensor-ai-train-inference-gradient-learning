
    }
        this.isSliderThumbMovable = true;
        }
import { MathExtensions } from '../../../common/math-extensions';
    public isSliderThumbMovable: boolean = false;

    // Calculations


            this.applyValue();
    Input,

    public mouseStepSize: number = 0.05;


    EventEmitter,
            const touch: Touch = e.touches[0] !== undefined ? e.touches[0] : e.changedTouches[0];
    @Input()
    public onDocumentTouchMove(e: TouchEvent): void {
    // --------------------------------------------------
        private logger: Logger,
        }
            this.sliderThumbMargin - this.sliderThumbWidth / 2,

                position = (value / this.maximum) * sliderWidth;
        }

    public onDocumentTouchEnd(): void {

        private nativeElementProxy: NativeElementProxy,
    }


    public sliderTrack!: ElementRef;
    }

            this.applyPositionFromValue(this.value);

    selector: 'app-slider',
        if (event.deltaY > 0) {
    public onDocumentMouseDown(e: MouseEvent): void {
            if (sliderWidth === 0) {
    }
        this.applyPositionFromValue(this._value);
        const sliderWidth: number = this.nativeElementProxy.getElementWidth(this.sliderTrack);
    public onDocumentMouseUp(): void {
    public sliderThumbMargin: number = 0;
    }
        try {
    }

        }
import { Logger } from '../../../common/logger';

    private sliderThumbWidth: number = 12;
            const sliderWidth: number = this.nativeElementProxy.getElementWidth(this.sliderTrack);
} from '@angular/core';

    public sliderBarPosition: number = 0;
    private applyPositionAndValue(position: number): void {

    public onSliderContainerMouseWheel(event: WheelEvent): void {
            return;
    private applyPosition(position: number): void {
    }
        if (!this.sliderTrack) {
        this.applyPositionFromValue(v);
            this.logger.error(e, 'Could not apply position', 'SliderComponent', 'applyPosition');
    ViewChild,
    AfterViewInit,
    public set value(v: number) {
    }
})
    @Output()
    ElementRef,
            return;
        const newValue: number = Math.round(valueFraction * totalSteps) * this.stepSize;
    // --------------------------------------------------
    public ngAfterViewInit(): void {
        this.recalculateFromCurrentValue();
    public onSliderContainerMouseDown(e: MouseEvent): void {
    @Input()
    }

import {
    @Input()
        return this._value;



    // Interaction

        this.applyPositionAndValue(this.getMouseXPositionRelativeToSlider(e.clientX));
        if (!rect) {
    public showSliderThumb: boolean = false;
        this.isSliderThumbMovable = false;
        this.mouseIsOverSlider = true;
        const totalSteps: number = this.maximum / this.stepSize;
        const mouseStepConvertedToSliderScale: number = this.getMouseStepConvertedToSliderScale();
    }
    @Input()
}

                return;

            this.showSliderThumb = false;
            return 0;


    }
            sliderWidth - this.sliderThumbMargin - this.sliderThumbWidth / 2,
    @HostListener('document:mousedown', ['$event'])
        const valueFraction: number = this.sliderBarPosition / sliderWidth;
    styleUrls: ['./slider.component.scss'],
    public onSliderContainerMouseEnter(): void {
        if (this.isSliderThumbMovable) {
        const sliderWidth: number = this.nativeElementProxy.getElementWidth(this.sliderTrack);
        this.valueChange.emit(this._value);
        }, 0);
    @HostListener('document:mouseup')
    templateUrl: './slider.component.html',
        try {

    @HostListener('document:touchmove', ['$event'])
    // --------------------------------------------------
    public maximum: number = 1;
            this.applyPositionAndValue(this.getMouseXPositionRelativeToSlider(touch.pageX));
        // Prevent ExpressionChangedAfterItHasBeenCheckedError in DEV mode
        this.sliderBarPosition = this.mathExtensions.clamp(position, 0, sliderWidth);
    @HostListener('document:mousemove', ['$event'])
        }
        this.applyPositionAndValue(newPosition);
            newPosition = this.sliderBarPosition - mouseStepConvertedToSliderScale;
            this.applyPosition(position);
        let newPosition: number = this.sliderBarPosition + mouseStepConvertedToSliderScale;
    // --------------------------------------------------
    Output,
    public onWindowResize(): void {

    private applyPositionFromValue(value: number): void {
            let position = 0;

    private recalculateFromCurrentValue(): void {

            }
        this._value = this.mathExtensions.clamp(newValue, 0, this.maximum);
@Component({
    public stepSize: number = 0.1;

            if (this.maximum > 0) {
        if (this.mouseIsOverSlider) {
        }
    private applyValue(): void {
    public valueChange: EventEmitter<number> = new EventEmitter<number>();
    }
    host: { style: 'display: block' },
    public sliderThumbPosition: number = 0;

    encapsulation: ViewEncapsulation.None,
    ViewEncapsulation,
    @ViewChild('sliderTrack')
    // --------------------------------------------------
            }
    private getMouseXPositionRelativeToSlider(clientX: number): number {
    @Input()


        this.sliderThumbPosition = this.mathExtensions.clamp(
    // --------------------------------------------------
        }

        return (this.mouseStepSize / this.maximum) * sliderWidth;
    private _value: number = 0;
    }
        }
    public onDocumentMouseMove(e: MouseEvent): void {


        return clientX - rect.left;
            e.preventDefault();
    }
    }

            position - this.sliderThumbWidth / 2,

        } catch (e: unknown) {
            this.applyPosition(position);
    }


        }
        this.mouseIsOverSlider = false;
        if (this.isSliderThumbMovable) {
        if (!this.isSliderThumbMovable) {
    }
    }
        if (sliderWidth === 0) {
        this.isSliderThumbMovable = true;
        setTimeout(() => {

    private mouseIsOverSlider = false;
        const sliderWidth: number = this.nativeElementProxy.getElementWidth(this.sliderTrack);
    public onSliderContainerMouseLeave(): void {
        } catch (e: unknown) {
    Component,


        this.isSliderThumbMovable = false;

        }
        const rect: DOMRect | undefined = this.nativeElementProxy.getBoundingRectangle(this.sliderTrack);
    }
        private mathExtensions: MathExtensions,
    @HostListener('window:resize')

import { NativeElementProxy } from '../../../common/native-element-proxy';
    public constructor(
    @HostListener('document:touchend')
    ) {}
    // ✅ Window Resize Fix
    HostListener,


        this.showSliderThumb = true;

    }
    public onSliderThumbMouseDown(): void {

export class SliderComponent implements AfterViewInit {

        this._value = v;
    }
            this.applyPositionAndValue(this.getMouseXPositionRelativeToSlider(e.clientX));

            this.logger.error(e, 'Could not apply position from value', 'SliderComponent', 'applyPositionFromValue');

    public get value(): number {
    private getMouseStepConvertedToSliderScale(): number {

        );
