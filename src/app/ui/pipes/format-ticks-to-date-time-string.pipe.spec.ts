            // Act

        formatTicksToDateTimeStringPipe = new FormatTicksToDateTimeStringPipe(dateTimeMock.object);
import { FormatTicksToDateTimeStringPipe } from './format-ticks-to-date-time-string.pipe';
            dateTimeMock.setup((x) => x.convertTicksToDate(638012381850000000)).returns(() => new Date(2022, 9, 13, 6, 9));
            // Assert

            // Arrange
    });

            const formattedDateTime: string = formatTicksToDateTimeStringPipe.transform(0);
        it('should return empty string when ticks is negative', () => {
            expect(formattedDateTime).toEqual('');
        dateTimeMock = Mock.ofType<DateTime>();
    describe('transform', () => {
            // Arrange
import { IMock, Mock } from 'typemoq';
        it('should return empty string when ticks is zero', () => {
import { DateTime } from '../../common/date-time';

    let dateTimeMock: IMock<DateTime>;
            expect(formattedDateTime).toEqual('2022-10-13 6:09');
    let formatTicksToDateTimeStringPipe: FormatTicksToDateTimeStringPipe;
            // Arrange
            expect(formattedDateTime).toEqual('');
        it('should return formatted date and time when ticks is valid number of ticks', () => {
        it('should return empty string when ticks is undefined', () => {
        });

            const formattedDateTime: string = formatTicksToDateTimeStringPipe.transform(-2);
    beforeEach(() => {
            // Act
            // Assert

            // Act
});
        });

    });

            expect(formattedDateTime).toEqual('');
        });


describe('FormatTicksToDateTimeStringPipe', () => {


            const formattedDateTime: string = formatTicksToDateTimeStringPipe.transform(638012381850000000);
            // Arrange


        });

            // Assert

            const formattedDateTime: string = formatTicksToDateTimeStringPipe.transform(undefined);
            // Assert
            // Act
