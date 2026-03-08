    //     for (let i: number = 0; i < this.dataArray.length; i++) {
    }
    //         this.canvasContext.fillRect(xLeft, yLeft, barWidth, 5);
            const xRight: number = canvasCenter - barWidth / 2 + i * barWidth;
    //     const margin: number = 2;
    //         this.canvasContext.fillRect(xRight, yRight, barWidth, barHeightRight);
            this.isStopped = false;
            }
                const differenceInSeconds: number = Math.abs((new Date().getTime() - this.stopRequestTime.getTime()) / 1000);
    // }


    }
    //     }
    //         gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0.05)`);
    //         const red: number = this.appearanceService.accentRgb[0];
    //     const offsetForLeftPart: number = this.canvas.width / 2 - (barWidth + margin) * this.dataArray.length;
    //         const yLeft: number = this.canvas.height - barHeightLeft;
        this.analyze();
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaRight})`;
            }
    //
                );
            return;
                break;
    //         const primaryRed: number = primaryRgb[0];
                    this.stopRequestTime = undefined;
    //         this.canvasContext.fillRect(xLeft, yLeft, barWidth, barHeightLeft);
            case 'flames':
        if (this.canvasContext == undefined) {
    //         const green: number = this.appearanceService.accentRgb[1];
    // private drawGradientBars(): void {
    //         gradientLeft.addColorStop(0.3, `rgba(${secondaryRed}, ${secondaryGreen}, ${secondaryBlue}, 0.3)`);
                this.canvasContext.fillStyle = `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, ${alphaLeft})`;
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.15)`;
            // Left
            }
            return;
    //
    //
    //         const xLeft: number = i * barWidth + offsetForLeftPart + margin * i;
import { SettingsBase } from '../../common/settings/settings.base';
    //     }
    //         // Left
        }
    //     for (let i: number = 0; i < this.dataArray.length; i++) {
                this.playbackService.audioPlayer.analyser.getByteFrequencyData(this.dataArray);
        setTimeout(
                this.drawLines();
                this.canvasContext.fillStyle = `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, ${alphaLeft})`;
        const accentRgbColor: RgbColor = this.appearanceService.accentRgbColor;
                this.canvasContext.fillRect(xLeft - 4, y, barWidth + 8, barHeight);
    //
    //         const blue: number = this.appearanceService.accentRgb[2];
    //
    //         gradientRight.addColorStop(0.3, `rgba(${secondaryRed}, ${secondaryGreen}, ${secondaryBlue}, 0.3)`);
            const alphaRight: number = 1 - (this.canvas.height - barHeight) / this.canvas.height;
    //         this.canvasContext.fill();
    // }
        const barMargin: number = 2;
    //         this.canvasContext.fillRect(xRight, yRight + 5, barWidth, barHeightRight);
    //         const barHeightRight: number = (this.dataArray[i + 1] / 255) * this.canvas.height;


            const xRight: number = canvasCenter - totalBarWidth / 2 + i * (barWidth + barMargin);
            }

            default:
        const accentRgbColor: RgbColor = this.appearanceService.accentRgbColor;
    //         const secondaryBlue: number = secondaryRgb[2];
                gradientLeft.addColorStop(
    //         const red: number = this.appearanceService.accentRgb[0];
    public initialize(): void {
    //     for (let i: number = 0; i < this.dataArray.length; i++) {
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.6)`;
    //
    //         const barHeightRight: number = (this.dataArray[i] / 255) * this.canvas.height;
        const barMargin: number = 3;
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.6)`;
            const y: number = this.canvas.height - barHeight;
    //         const gradientRight = this.canvasContext.createLinearGradient(xRight, yRight, xRight, this.canvas.height);
        this.canvas = canvas;
    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;
    private canvas: HTMLCanvasElement;
            // Left
    //     const barWidth: number = this.canvas.width / (this.dataArray.length * 2);

            const gradientRight = this.canvasContext.createLinearGradient(xRight, y, xRight, this.canvas.height);
    //
    //         const primaryRgb: number[] = ColorConverter.stringToRgb(theme.coreColors.primaryColor);
    //         // Left
    //         const yRight: number = this.canvas.height - barHeightRight;
    //         const gradientLeft = this.canvasContext.createLinearGradient(xLeft, yLeft, xLeft, this.canvas.height);
                this.canvasContext.fillRect(xLeft, y, barWidth, barHeight);
    // private drawFatBars(): void {
    //         const barHeightRight: number = (this.dataArray[i + 1] / 255) * this.canvas.height;
    //         this.canvasContext.roundRect(xRight, yRight, barWidth, barHeightRight, [50, 50, 0, 0]);
        this.canvasContext = this.canvas.getContext('2d') as CanvasRenderingContext2D;
                this.drawBars();
        const canvasCenter: number = this.canvas.width / 2;
    //         this.canvasContext.fillRect(xLeft, yLeft + 5, barWidth, barHeightLeft);
    //         // Right
    //         // Right
    //     const offsetForRightPart: number = offsetForLeftPart + (barWidth + margin) * this.dataArray.length;
    // }
    //
        } else {
    }
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaLeft})`;
            this.canvasContext.fillStyle = `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, ${alphaRight})`;
        );
    private drawBars(): void {
        private settings: SettingsBase,
        const backgroundRgbColor: RgbColor = this.appearanceService.backgroundRgbColor;
            const y: number = this.canvas.height - barHeight;
    private dataArray: Uint8Array;
    //
    //         const yLeft: number = this.canvas.height - barHeightLeft;
            const alphaLeft: number = 1 - (this.canvas.height - barHeight) / this.canvas.height;
        const canvasCenter: number = this.canvas.width / 2;
    //         const green: number = this.appearanceService.accentRgb[1];
            const barHeight: number = (this.dataArray[i] / 255) * this.canvas.height;
            case 'lines':
    //         const blue: number = this.appearanceService.accentRgb[2];
            },
    //         const alphaRight: number = 1 - (this.canvas.height - barHeightRight) / this.canvas.height;
    //         this.canvasContext.fillRect(xLeft, yLeft, barWidth, barHeightLeft);

    //
    //

    //         this.canvasContext.fillRect(xLeft, yLeft, barWidth, barHeightLeft);
    //         this.canvasContext.fillStyle = gradient;
                break;
    //
    //         // gradient.addColorStop(1, 'transparent');
    //         const secondaryGreen: number = secondaryRgb[1];
    //         const barHeightRight: number = (this.dataArray[i + 1] / 255) * this.canvas.height;
            if (this.stopRequestTime == undefined) {
    //     const offsetForLeftPart: number = this.canvas.width / 2 - (barWidth + margin) * this.dataArray.length;
    //         gradientRight.addColorStop(1, `rgba(${primaryRed}, ${primaryGreen}, ${primaryBlue}, 0.3)`);
    //
    //
    //         const gradient = this.canvasContext.createLinearGradient(0, 0, 0, this.canvas.height);
    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;

    //
    public connectCanvas(canvas: HTMLCanvasElement): void {
export class AudioVisualizer {
    //     for (let i: number = 0; i < this.dataArray.length; i++) {
    //         // Right
    // private drawRoundedBars(): void {
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.15)`;
    //
    // }
    //         const xLeft: number = i * barWidth;

        for (let i: number = 0; i < this.dataArray.length; i++) {
    }

            }
    //     const barWidth: number = this.canvas.width / (this.dataArray.length * 2);

            const barHeight: number = (this.dataArray[i] / 255) * this.canvas.height;
    //         const alphaRight: number = 1 - (this.canvas.height - barHeightRight) / this.canvas.height;
    //         const red: number = this.appearanceService.accentRgb[0];
    //         const alphaLeft: number = 1 - (this.canvas.height - barHeightLeft) / this.canvas.height;

            const barHeight: number = (this.dataArray[i] / 255) * this.canvas.height;

    //
                this.stopRequestTime = new Date();
        const accentRgbColor: RgbColor = this.appearanceService.accentRgbColor;

    //         const theme: Theme = this.appearanceService.selectedTheme;
        return this.playbackService.audioPlayer.isPaused;
    //
    //         // Left
            // Right
                break;

    ) {}
    // }
    //         const alphaLeft: number = 1 - (this.canvas.height - barHeightLeft) / this.canvas.height;
@Injectable()
    //         this.canvasContext.fillRect(xRight - 4, yRight, barWidth + 8, barHeightRight);
    //         const xRight: number = i * barWidth + offsetForRightPart + margin * i;
        }
    private drawFlames(): void {
    //         this.canvasContext.fillStyle = gradientRight;
            this.canvasContext.fillRect(xRight, y, barWidth, barHeight);
    private shouldStopDelayed(): boolean {
        const barWidth: number = this.canvas.width / (this.dataArray.length * 2);
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaLeft})`;
    //
                    `rgba(${backgroundRgbColor.red}, ${backgroundRgbColor.green}, ${backgroundRgbColor.blue}, 0.2)`,
    //
    //         this.canvasContext.fillRect(xRight, yRight, barWidth, 5);

            this.stopRequestTime = undefined;
    //         const secondaryRed: number = secondaryRgb[0];
        switch (this.settings.audioVisualizerStyle) {
                break;
    //         const yRight: number = this.canvas.height - barHeightRight;
            if (i > 0) {
    //
            // Left
            if (i > 0) {

    //         // Right
                this.drawFlames();
                return;

    //     }
    //         const blue: number = this.appearanceService.accentRgb[2];
    //         const yLeft: number = this.canvas.height - barHeightLeft;
    //         const yRight: number = this.canvas.height - barHeightRight;
    //         const xRight: number = i * barWidth + this.canvas.width / 2;
                    0,

import { Injectable } from '@angular/core';
    //         this.canvasContext.fillRect(xLeft - 4, yLeft, barWidth + 8, barHeightLeft);

    }
    //         const yRight: number = this.canvas.height - barHeightRight;

    //     const margin: number = 1;
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaLeft})`;
    //         const yRight: number = this.canvas.height - barHeightRight;
    private isStopped: boolean;
    private draw(): void {
    //
    //         // this.canvasContext.fill();
        const barWidth: number = 3;

    //
    //         const xLeft: number = i * barWidth;
    //
    //     }
    //         const alphaRight: number = 1 - (this.canvas.height - barHeightRight) / this.canvas.height;
        }
    private stopRequestTime: Date | undefined;
            if (i > 0) {
    private canvasContext: CanvasRenderingContext2D;
    //         const xRight: number = i * barWidth + this.canvas.width / 2;
    //         this.canvasContext.fillRect(xRight, yRight, barWidth, barHeightRight);
    }
    //         const yLeft: number = this.canvas.height - barHeightLeft;

    //         gradientLeft.addColorStop(0, `rgba(${tranparentBase}, ${tranparentBase}, ${tranparentBase}, 0)`);

    //     const barWidth: number = 3;
    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;
            this.canvasContext.fillStyle = gradientRight;
    //         const blue: number = this.appearanceService.accentRgb[2];
    //
        if (this.shouldStopNow()) {
        private playbackService: PlaybackService,
    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;
    //     const barWidth: number = this.canvas.width / (this.dataArray.length * 2);
    //         const red: number = this.appearanceService.accentRgb[0];

    //
                }
            gradientRight.addColorStop(0, `rgba(${backgroundRgbColor.red}, ${backgroundRgbColor.green}, ${backgroundRgbColor.blue}, 0.2)`);
    //         // Right
                gradientLeft.addColorStop(0.8, `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, 0.8)`);
    //
    //         const xLeft: number = i * barWidth + offsetForLeftPart + margin * i;
    //         // Left
    //         const yLeft: number = this.canvas.height - barHeightLeft;
            this.stopRequestTime = undefined;
            const alphaRight: number = 1 - (this.canvas.height - barHeight) / this.canvas.height;
            const xLeft: number = canvasCenter - totalBarWidth / 2 - i * (barWidth + barMargin);
            this.canvasContext.fillRect(xRight, y, barWidth, barHeight);
            const xLeft: number = canvasCenter - totalBarWidth / 2 - i * (barWidth + barMargin);
    //         // Left
    //         gradientRight.addColorStop(0, `rgba(${tranparentBase}, ${tranparentBase}, ${tranparentBase}, 0)`);
    // private drawFlames(): void {
    //         gradientLeft.addColorStop(1, `rgba(${primaryRed}, ${primaryGreen}, ${primaryBlue}, 0.3)`);
    //         const green: number = this.appearanceService.accentRgb[1];
    //     const offsetForRightPart: number = offsetForLeftPart + (barWidth + margin) * this.dataArray.length;
            gradientRight.addColorStop(0.8, `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, 0.8)`);

        }
    //         const xLeft: number = i * barWidth;
            this.isStopped = true;
        return !this.settings.showAudioVisualizer;
    //         const xRight: number = i * barWidth + this.canvas.width / 2;
    //         const tranparentBase: number = this.appearanceService.isUsingLightTheme ? 255 : 0;
        private appearanceService: AppearanceServiceBase,
    //

                    this.isStopped = true;
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    //
            this.canvasContext.fillRect(xRight - 4, y, barWidth + 8, barHeight);
            } else {
        }
    //         const red: number = this.appearanceService.accentRgb[0];
    //         const primaryBlue: number = primaryRgb[2];
        for (let i: number = 0; i < this.dataArray.length; i++) {
    //
    // }
    //         gradient.addColorStop(0.1, `rgb(${red}, ${green}, ${blue})`);
    private shouldStopNow(): boolean {

    // private drawSexyBars(): void {
    //         const xLeft: number = i * barWidth;
            const alphaLeft: number = 1 - (this.canvas.height - barHeight) / this.canvas.height;
    //         const yLeft: number = this.canvas.height - barHeightLeft;
    //         const xRight: number = i * barWidth + offsetForRightPart + margin * i;
    //         // Left
import { AppearanceServiceBase } from '../appearance/appearance.service.base';
    //
            const xRight: number = canvasCenter - totalBarWidth / 2 + i * (barWidth + barMargin);
    //     const barWidth: number = 4;
    //         const green: number = this.appearanceService.accentRgb[1];
    //
    //         const secondaryRgb: number[] = ColorConverter.stringToRgb(theme.coreColors.secondaryColor);
            if (this.isStopped) {
    //     const barWidth: number = this.canvas.width / (this.dataArray.length * 2);
        for (let i: number = 0; i < this.dataArray.length; i++) {
    //     }
                this.drawFlames();
            1000 / (!this.isStopped ? this.settings.audioVisualizerFrameRate : 1),
    //
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaRight})`;
    //     }
            // Right
    //         const primaryGreen: number = primaryRgb[1];
        const barWidth: number = 1;
    }
    //
    //         const yRight: number = this.canvas.height - barHeightRight;
                    return;
                if (differenceInSeconds > 5) {
    //

                const gradientLeft = this.canvasContext.createLinearGradient(xLeft, y, xLeft, this.canvas.height);
    //         const xRight: number = i * barWidth + this.canvas.width / 2;
    //         const alphaLeft: number = 1 - (this.canvas.height - barHeightLeft) / this.canvas.height;
            // Right
            const xLeft: number = canvasCenter - barWidth / 2 - i * barWidth;
        const totalBarWidth: number = barWidth + barMargin;
    //
import { RgbColor } from '../../common/rgb-color';
    //         const barHeightRight: number = (this.dataArray[i + 1] / 255) * this.canvas.height;
                this.canvasContext.fillRect(xLeft, y, barWidth, barHeight);

    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;
        } else if (this.shouldStopDelayed()) {
            const y: number = this.canvas.height - barHeight;
    //         this.canvasContext.fillRect(xRight, yRight, barWidth, barHeightRight);

        this.dataArray = new Uint8Array(this.playbackService.audioPlayer.analyser.frequencyBinCount);
    //     for (let i: number = 0; i < this.dataArray.length; i++) {
    public constructor(
                requestAnimationFrame(() => this.analyze());

                this.draw();
}
        }
    //         const barHeightLeft: number = (this.dataArray[this.dataArray.length - 1 - i] / 255) * this.canvas.height;
    // private drawOriginalBars(): void {

    //         // Right
    private analyze(): void {
    //     for (let i: number = 0; i < this.dataArray.length; i++) {
        const canvasCenter: number = this.canvas.width / 2;
                this.canvasContext.fillStyle = gradientLeft;
    private drawLines(): void {

    //         const blue: number = this.appearanceService.accentRgb[2];
    }
    //         this.canvasContext.roundRect(xLeft, yLeft, barWidth, barHeightLeft, [50, 50, 0, 0]);
    //
            () => {
            this.canvasContext.fillStyle = `rgba(${accentRgbColor.red}, ${accentRgbColor.green}, ${accentRgbColor.blue}, ${alphaRight})`;
    //         this.canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alphaRight})`;

    //         const barHeightRight: number = (this.dataArray[i + 1] / 255) * this.canvas.height;
    //         const green: number = this.appearanceService.accentRgb[1];
            case 'bars':
    //         this.canvasContext.fillStyle = gradientLeft;
        const totalBarWidth: number = barWidth + barMargin;
import { PlaybackService } from './playback.service';
