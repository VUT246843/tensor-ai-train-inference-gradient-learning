
        });
            // Arrange
        it('should return "59 minutes 59 seconds" if total duration is 3599000 milliseconds', () => {
        translatorServiceMock.setup((x) => x.get('minutes')).returns(() => 'minutes');
        });
            // Assert
        it('should return "35 minutes 16 seconds" if total duration is 2116000 milliseconds', () => {
            expect(formattedTotalDuration).toEqual('59 minutes');
            // Arrange

            // Act
            // Act
            // Assert
            // Arrange


            // Act
        });
    describe('transform', () => {
        it('should return "1 hour" if total duration is 3600000 milliseconds', () => {

            const formattedTotalDuration: string = formatTotalDurationPipe.transform(3540000);

            expect(formattedTotalDuration).toEqual('1 day');
        });
        it('should return an empty string if total duration is -5 milliseconds', () => {
        it('should return "1 minute" if total duration is 60000 milliseconds', () => {
            expect(formattedTotalDuration).toEqual('1.5 days');
            // Act
        it('should return an empty string if total duration is 0 milliseconds', () => {
            // Arrange

            const formattedTotalDuration: string = formatTotalDurationPipe.transform(59000);
        translatorServiceMock.setup((x) => x.get('hours')).returns(() => 'hours');
        });
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(60000);

            const formattedTotalDuration: string = formatTotalDurationPipe.transform(86400000);
describe('FormatTotalDurationPipe', () => {
            // Act


        });



        it('should return "7.2 hours" if total duration is 25819000 milliseconds', () => {
            // Arrange
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(7200000);
            expect(formattedTotalDuration).toEqual('7.2 hours');

            // Assert
            // Act
        it('should return "2 hours" if total duration is 7200000 milliseconds', () => {
            // Arrange
            // Arrange
            // Act
            // Assert

        });
            // Act


        });
            expect(formattedTotalDuration).toEqual('1 minute');
            expect(formattedTotalDuration).toEqual('2 hours');
        it('should return "59 seconds" if total duration is 59000 milliseconds', () => {
            // Assert

        it('should return "1 day" if total duration is 86400000 milliseconds', () => {

            // Assert

        });
            // Arrange
            expect(formattedTotalDuration).toEqual('');
            // Act
        translatorServiceMock.setup((x) => x.get('day')).returns(() => 'day');

            // Assert
            // Assert
        });
            // Arrange

            const formattedTotalDuration: string = formatTotalDurationPipe.transform(0);
        it('should return "59 minutes" if total duration is 3540000 milliseconds', () => {
            expect(formattedTotalDuration).toEqual('1 second');


        it('should return an empty string if total duration is undefined', () => {


import { FormatTotalDurationPipe } from './format-total-duration.pipe';
import { IMock, Mock } from 'typemoq';

            // Act


        translatorServiceMock.setup((x) => x.get('second')).returns(() => 'second');
            expect(formattedTotalDuration).toEqual('1 hour');
        translatorServiceMock.setup((x) => x.get('seconds')).returns(() => 'seconds');


        it('should return "1 second" if total duration is 1000 milliseconds', () => {
    });
});
            // Assert
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(86340000);

            const formattedTotalDuration: string = formatTotalDurationPipe.transform(1000);
        formatTotalDurationPipe = new FormatTotalDurationPipe(translatorServiceMock.object);
            // Act
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(undefined);
            expect(formattedTotalDuration).toEqual('');
        });
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(-5);

            expect(formattedTotalDuration).toEqual('35 minutes 16 seconds');
            // Assert
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(131716000);

            expect(formattedTotalDuration).toEqual('1 day');
        });
    beforeEach(() => {

    let translatorServiceMock: IMock<TranslatorServiceBase>;

            // Assert
        translatorServiceMock.setup((x) => x.get('minute')).returns(() => 'minute');
            // Assert

            // Arrange


            // Act
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(25819000);

            expect(formattedTotalDuration).toEqual('');
            // Assert
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(3599000);
        it('should return "1 day" if total duration is 86340000 milliseconds', () => {
            // Arrange
            // Act
            expect(formattedTotalDuration).toEqual('59 seconds');
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(2116000);


            // Arrange

        });

            // Arrange
    });
            expect(formattedTotalDuration).toEqual('59 minutes 59 seconds');
        });

        translatorServiceMock.setup((x) => x.get('hour')).returns(() => 'hour');

            // Arrange
            // Assert
            // Act
            // Act

        });
            const formattedTotalDuration: string = formatTotalDurationPipe.transform(3600000);
        it('should return "1.5 days" if total duration is 131716000 milliseconds', () => {
    let formatTotalDurationPipe: FormatTotalDurationPipe;
        translatorServiceMock.setup((x) => x.get('days')).returns(() => 'days');
            // Arrange
            // Assert
