            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(895483904);
            // Assert
            // Arrange
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(-8);

            // Arrange

            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(52613349376);

            // Act
            // Assert
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            expect(formattedTotalFileSize).toEqual('854 MB');

            // Act
            // Arrange
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(102760448);
            // Act
            // Assert
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(1072693248);

            // Arrange


            // Act
            // Assert
            // Act
        });
            // Assert
            // Arrange

            // Arrange
            expect(formattedTotalFileSize).toEqual('1 GB');

            // Act
        });
            // Assert

            // Arrange

            expect(formattedTotalFileSize).toEqual('1023 MB');
        });
        it('should return "563 kB" if the file size is 576512 Bytes', () => {



            // Arrange

            expect(formattedTotalFileSize).toEqual('');

            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(1048576);
            expect(formattedTotalFileSize).toEqual('98 MB');
            expect(formattedTotalFileSize).toEqual('1 MB');
    beforeEach(() => {

        it('should return an empty string if total file size is 0 Bytes', () => {
        it('should return an empty string if total file size is undefined', () => {
            // Arrange
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(1047552);
            expect(formattedTotalFileSize).toEqual('1023 kB');
            expect(formattedTotalFileSize).toEqual('');
            // Act
        });
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(576512);

        it('should return an empty string if total file size is -8 Bytes', () => {
        });

            // Arrange



            // Act

        it('should return "1023 kB" if the file size is 1047552 Bytes', () => {
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(1024);
            // Act



    });
    });
describe('FormatTotalFileSizePipe', () => {
        translatorServiceMock.setup((x) => x.get('kilo-bytes')).returns(() => 'kB');

            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(undefined);
        it('should return "98 MB" if the file size is 102760448 Bytes', () => {

        it('should return "1 GB" if the file size is 1073741824 Bytes', () => {
            // Assert
            expect(formattedTotalFileSize).toEqual('1 kB');
            // Act

        it('should return "1 kB" if the file size is 1024 Bytes', () => {
        it('should return "854 MB" if the file size is 895483904 Bytes', () => {

    let translatorServiceMock: IMock<TranslatorServiceBase>;

            // Arrange
    describe('transform', () => {
        });
        formatTotalFileSizePipe = new FormatTotalFileSizePipe(translatorServiceMock.object);

import { IMock, Mock } from 'typemoq';
});
        });
            // Assert
        });


        it('should return "49 GB" if the file size is 52613349376 Bytes', () => {
        translatorServiceMock.setup((x) => x.get('giga-bytes')).returns(() => 'GB');
        });

            // Assert
            // Assert
            expect(formattedTotalFileSize).toEqual('');
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(0);
            // Assert
            // Act
            // Act
            // Arrange
            expect(formattedTotalFileSize).toEqual('49 GB');
        it('should return "1 MB" if the file size is 1048576 Bytes', () => {
            const formattedTotalFileSize: string = formatTotalFileSizePipe.transform(1073741824);
        it('should return "1023 MB" if the file size is 1072693248 Bytes', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        });
        translatorServiceMock.setup((x) => x.get('mega-bytes')).returns(() => 'MB');


        });
    let formatTotalFileSizePipe: FormatTotalFileSizePipe;
            // Assert
import { FormatTotalFileSizePipe } from './format-total-file-size.pipe';
            expect(formattedTotalFileSize).toEqual('563 kB');

        });
