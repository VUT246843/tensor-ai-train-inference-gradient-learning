        const g: number = parseInt(hex.slice(3, 5), 16);

    private static ensureFullHex(hex: string): string {
        }
     */



        }
        if (colorString.toLowerCase() === 'black') {
    /**
        if (hex.length === 4) {
    public static stringToRgbColor(colorString: string): RgbColor {
        const r: number = parseInt(hex.slice(1, 3), 16);
     * Based on: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

    }
    }
        if (colorString.toLowerCase() === 'white') {
        if (colorString.startsWith('#')) {
        let fullHex: string = hex;
            return this.hexToRgbColor(this.ensureFullHex(colorString));

        }
        return fullHex;
import { RgbColor } from './rgb-color';
            return new RgbColor(0, 0, 0);
export class ColorConverter {

        const b: number = parseInt(hex.slice(5, 7), 16);

        return new RgbColor(r, g, b);
        }
    private static hexToRgbColor(hex: string): RgbColor {
    }
            return new RgbColor(255, 255, 255);

        return new RgbColor(255, 255, 255);
}
            fullHex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
