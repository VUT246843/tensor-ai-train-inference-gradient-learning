            // Assert

describe('FormatPlaybackTimePipe', () => {


            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(undefined);
        });


            // Arrange
            // Arrange
        it('should return "59:59" if progress seconds is 3599 seconds', () => {
import { FormatPlaybackTimePipe } from './format-playback-time';
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(3600);

    beforeEach(() => {
            // Act
            // Assert
            expect(formattedPlaybackTime).toEqual('0:59');
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(14.6);

            // Assert
            expect(formattedPlaybackTime).toEqual('0:58');

});
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(60);
            expect(formattedPlaybackTime).toEqual('0:00');
        });
            // Assert

        it('should return "1:00" if progress seconds is 60 seconds', () => {

            expect(formattedPlaybackTime).toEqual('1:00:00');
            // Arrange

            expect(formattedPlaybackTime).toEqual('15:27:42');
            expect(formattedPlaybackTime).toEqual('0:14');
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(-6);
        it('should return 0:58 when progress seconds is 58.9 seconds', () => {
        it('should return 0:00 when progress seconds is 0 seconds', () => {

    });

        });
            // Assert
            // Act


            // Arrange
            // Assert
            expect(formattedPlaybackTime).toEqual('0:09');
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(8.1);
            expect(formattedPlaybackTime).toEqual('59:59');
        });
        it('should return 0:00 when progress seconds is undefined', () => {
            expect(formattedPlaybackTime).toEqual('0:00');
            expect(formattedPlaybackTime).toEqual('0:08');
            // Act

            // Arrange
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(3599);

    });

            // Assert
            // Act
        });
            // Assert
        });

        });
        });

            // Assert
        it('should return "0:59" if progress seconds is 59000 seconds', () => {

            // Act
            // Assert
            expect(formattedPlaybackTime).toEqual('35:00:00');
            // Act


        it('should return "1:00:00" if progress seconds is 3600 seconds', () => {
            // Arrange
        it('should return 0:00 when progress seconds is -6 seconds', () => {
        });

            // Arrange

        });
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(9.4);

        it('should return 0:14 when progress seconds is 14.6 seconds', () => {
            // Act
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(55662);
            // Act
            // Assert

            // Arrange
        it('should return "35:00:00" if progress seconds is 126000 seconds', () => {

            // Assert


            // Act
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(126000);
        });
            // Act
            // Act

            // Arrange
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(0);
            // Assert
            // Arrange
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(58.9);

            // Arrange


            // Act
        });

    describe('transform', () => {

    let formatPlaybackTimePipe: FormatPlaybackTimePipe;
        });
            // Act
        it('should return 0:08 when progress seconds is 8.1 seconds', () => {


            expect(formattedPlaybackTime).toEqual('1:00');

            expect(formattedPlaybackTime).toEqual('0:00');

        formatPlaybackTimePipe = new FormatPlaybackTimePipe();
            // Arrange
        it('should return 0:09 when progress seconds is 9.4 seconds', () => {
        it('should return "15:27:42" if progress seconds is 55662 seconds', () => {
            // Arrange
            const formattedPlaybackTime: string = formatPlaybackTimePipe.transform(59);

