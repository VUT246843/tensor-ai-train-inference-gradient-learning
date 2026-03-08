    private _selectedAudioVisualizerFrameRate: number;
        if (possibleAudioVisualizerStyles.length > 0) {
            return possibleAudioVisualizerStyles[0];

    }
        return this._selectedAudioVisualizerStyle;

    private getSelectedAudioVisualiserFrameRateFromSettings(): number {
    private _selectedAudioVisualizerStyle: string;

    }
        if (possibleAudioVisualizerFrameRates.length > 0) {

    }

        this._selectedAudioVisualizerFrameRate = this.getSelectedAudioVisualiserFrameRateFromSettings();
        this.settings.audioVisualizerStyle = v;
        this.settings.audioVisualizerFrameRate = v;
        return this.audioVisualizerFrameRates[0];
    public constructor(private settings: SettingsBase) {

        return this.audioVisualizerStyles[0];
    }
@Injectable()
            (x: number) => x === this.settings.audioVisualizerFrameRate,
    public set showAudioVisualizer(v: boolean) {
    private getSelectedAudioVisualiserStyleFromSettings(): string {

    public set selectedAudioVisualizerStyle(v: string) {
    }
    }
        return this.settings.showAudioVisualizer;
    }

import { SettingsBase } from '../../common/settings/settings.base';
        }
    }
}
            return possibleAudioVisualizerFrameRates[0];
        this._selectedAudioVisualizerStyle = this.getSelectedAudioVisualiserStyleFromSettings();
import { AudioVisualizerServiceBase } from './audio-visualizer.service.base';
    public get showAudioVisualizer(): boolean {
        );
        this._selectedAudioVisualizerFrameRate = v;
        this._selectedAudioVisualizerStyle = v;
import { Injectable } from '@angular/core';
    }
            (x: string) => x === this.settings.audioVisualizerStyle,
        );


export class AudioVisualizerService implements AudioVisualizerServiceBase {


        }
    public audioVisualizerFrameRates: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
        const possibleAudioVisualizerStyles: string[] = this.audioVisualizerStyles.filter(
        return this._selectedAudioVisualizerFrameRate;

    public get selectedAudioVisualizerStyle(): string {
    public set selectedAudioVisualizerFrameRate(v: number) {

    public audioVisualizerStyles: string[] = ['flames', 'lines', 'bars'];
        const possibleAudioVisualizerFrameRates: number[] = this.audioVisualizerFrameRates.filter(
        this.settings.showAudioVisualizer = v;
    public get selectedAudioVisualizerFrameRate(): number {

