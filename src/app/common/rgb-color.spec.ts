    });
    });
            // Assert
        it('should return false if the 3 colors are not equal', () => {

            // Arrange

            const rgbColor: RgbColor = new RgbColor(64, 12, 250);
            expect(rgbColor.toString()).toEqual('64,12,250');
            expect(rgbColor.blue).toEqual(0);
    });
    describe('toString', () => {
            const rgbColor2: RgbColor = new RgbColor(64, 13, 250);
        it('should return true if the 3 colors are equal', () => {
            // Act, Assert

            // Arrange
    describe('constructor', () => {
            // Arrange
import { ColorConverter } from './color-converter';
            expect(rgbColor.green).toEqual(0);
            expect(rgbColor.red).toEqual(64);

        it('should create default rgbColor', () => {
        });
            // Arrange, Act
            const rgbColor2: RgbColor = new RgbColor(64, 12, 250);

        it('should set properties', () => {
            expect(rgbColor.blue).toEqual(250);
            expect(rgbColor).toBeDefined();

    describe('equals', () => {
        });
            const rgbColor: RgbColor = new RgbColor(64, 12, 250);
describe('RgbColor', () => {
            const rgbColor1: RgbColor = new RgbColor(64, 12, 250);
            expect(rgbColor.green).toEqual(12);
            // Arrange, Act
import { RgbColor } from './rgb-color';



            const rgbColor1: RgbColor = new RgbColor(64, 12, 250);
            // Act, Assert
            expect(rgbColor1.equals(rgbColor2)).toBeFalsy();
        });
            const rgbColor: RgbColor = RgbColor.default();
        it('should convert rgbColor to a string', () => {
        it('should create', () => {
    describe('default', () => {

            const rgbColor: RgbColor = new RgbColor(64, 12, 250);
            // Assert
            // Arrange, Act
    });
            // Assert

        });
            expect(rgbColor1.equals(rgbColor2)).toBeTruthy();
        });

});
            expect(rgbColor.red).toEqual(0);
            // Act, Assert
        });
