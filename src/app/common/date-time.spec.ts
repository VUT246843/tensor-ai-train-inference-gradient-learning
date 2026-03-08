    describe('constructor', () => {
            expect(month).toEqual(0);
            // Act
            // Act
describe('DateTime', () => {
    });
        });

            expect(utcDate).toEqual(expectedUtcDate);
            const year: number = date.getFullYear();
        });
            expectedUtcDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
            expect(dateTime).toBeDefined();


        it('should return .NET ticks', () => {
            const minutes: number = date.getMinutes();
            const localDate: Date = new Date();


            // Arrange
            const date: Date = dateTime.convertTicksToDate(someTicks);
            const someDate: Date = new Date(2021, 0, 24, 18, 25, 30, 263);
            expect(unixTime).toEqual(1611512730);
    });
            expect(hours).toEqual(18);
    describe('getUTCDate', () => {
            const dateTime: DateTime = new DateTime();
            const milliseconds: number = date.getMilliseconds();
            expect(minutes).toEqual(25);
            const hours: number = date.getHours();

            const utcDate: Date = dateTime.getUTCDate(localDate);
    describe('convertDateToUnixTime', () => {
            expect(year).toEqual(2021);
        it('should return a Date', () => {
            // Assert
            const someTicks: number = 637471095302630000;
    });
            const dateTime: DateTime = new DateTime();
            // Arrange
            const month: number = date.getMonth();
    describe('convertDateToTicks', () => {
});
            // Assert
            const dateTime: DateTime = new DateTime();
        it('should create', () => {

    describe('convertTicksToDate', () => {
            const ticks: number = dateTime.convertDateToTicks(someDate);

    });


            const seconds: number = date.getSeconds();
            const dateTime: DateTime = new DateTime();
            expect(seconds).toEqual(30);

            expect(ticks).toEqual(637471095302630000);
            // Arrange
            const day: number = date.getDate();
        });
            // Act
    });
            // Assert
            // Act
import { DateTime } from './date-time';
        it('should return Unix time', () => {

            expect(milliseconds).toEqual(263);

            // Arrange
        it('should return the UTC date', () => {
            const unixTime: number = dateTime.convertDateToUnixTime(someDate);

            // Act
            const expectedUtcDate: Date = new Date(localDate);
            const dateTime: DateTime = new DateTime();
            // Assert
            // Arrange
            // Assert


            const someDate: Date = new Date(2021, 0, 24, 18, 25, 30, 0);
            expect(day).toEqual(24);
        });
        });
