

            // Act
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(0);
            // Assert

            // Act

            // Act

        it('should return 0:00 when track duration is undefined', () => {
            expect(formattedTrackDuration).toEqual('0:59');
});
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(-6);
            expect(formattedTrackDuration).toEqual('59:59');



            expect(formattedTrackDuration).toEqual('0:00');




            const formattedTrackDuration: string = formatTrackDurationPipe.transform(55662000);
            // Act
            // Act


            // Arrange
            // Assert
            expect(formattedTrackDuration).toEqual('35:00:00');

        });
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(3599000);
        it('should return "0:59" if track duration is 59000 milliseconds', () => {
            // Arrange

    });
        formatTrackDurationPipe = new FormatTrackDurationPipe();

        });
        });
        it('should return "15:27:42" if track duration is 55662000 milliseconds', () => {
            // Arrange
            // Arrange

            // Act
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(60000);

        it('should return 0:00 when track duration is 0 milliseconds', () => {
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(59000);
            expect(formattedTrackDuration).toEqual('1:00:00');
            // Act
    beforeEach(() => {
            expect(formattedTrackDuration).toEqual('1:00');

            expect(formattedTrackDuration).toEqual('0:00');
        it('should return "35:00:00" if track duration is 126000000 milliseconds', () => {

            const formattedTrackDuration: string = formatTrackDurationPipe.transform(undefined);
        it('should return "1:00:00" if track duration is 3600000 milliseconds', () => {
            // Act
            expect(formattedTrackDuration).toEqual('0:00');
            // Act
    describe('transform', () => {
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(126000000);
        });
        it('should return 0:00 when track duration is -6 milliseconds', () => {
            // Arrange
import { FormatTrackDurationPipe } from './format-track-duration.pipe';
    let formatTrackDurationPipe: FormatTrackDurationPipe;
        });

            // Assert
            // Assert
            // Arrange
        });
        });
            // Assert

            // Assert


        it('should return "1:00" if track duration is 60000 milliseconds', () => {
            // Arrange
            // Arrange
            // Assert
    });
            // Assert
            // Assert
            const formattedTrackDuration: string = formatTrackDurationPipe.transform(3600000);


        });
            expect(formattedTrackDuration).toEqual('15:27:42');


        it('should return "59:59" if track duration is 3599000 milliseconds', () => {
describe('FormatTrackDurationPipe', () => {
            // Arrange
        });
