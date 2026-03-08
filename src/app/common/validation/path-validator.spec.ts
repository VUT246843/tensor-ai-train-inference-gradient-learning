
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
        it('should return true if parentPath is the same path as  childPath', () => {
            // Act
            const pathValidator: PathValidator = new PathValidator();

            const childPathForLinux: string = '/home/user/Music/Subfolder1';
            // Act
        it('should return false if childPath is empty', () => {
        it('should return false if parentPath and childPath are undefined', () => {
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
            const parentPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1';




            const parentPath: string | undefined = undefined;

            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
            // Assert
            const childPathForLinux: string = '/home/user/Music/Subfolder1/track1.mp3';
            // Assert
            // Arrange
            expect(isParentPath).toBeFalsy();



            expect(isParentPath).toBeFalsy();

            // Arrange
            const isParentPathForLinux: boolean = pathValidator.isParentPath(parentPathForLinux, childPathForLinux);

            const pathValidator: PathValidator = new PathValidator();
            const isParentPathForLinux: boolean = pathValidator.isParentPath(parentPathForLinux, childPathForLinux);
            // Arrange
        });
            // Assert


            const pathValidator: PathValidator = new PathValidator();
            // Assert
            // Arrange
            // Assert
        it('should return false if childPath is white space', () => {

            // Assert
            const parentPathForLinux: string = '/home/user/Downloads';
        it('should return false if parentPath is empty', () => {


            // Act
            // Act


            // Arrange
            expect(isParentPathForWindows).toBeTruthy();
            const parentPathForLinux: string = '/home/user/Music/Subfolder1';
            const pathValidator: PathValidator = new PathValidator();
            const isParentPathForLinux: boolean = pathValidator.isParentPath(parentPathForLinux, childPathForLinux);
            // Assert
            const childPath: string | undefined = undefined;
            const childPath: string = '/home/user/Music/track1.mp3';
            // Assertsame path as  childPath

    describe('isParentPath', () => {
            const isParentPathForWindows: boolean = pathValidator.isParentPath(parentPathForWindows, childPathForWindows);
            // Assert
            expect(isParentPathForLinux).toBeTruthy();
            // Assert

        it('should return false if parentPath is undefined', () => {
            expect(isParentPathForLinux).toBeFalsy();
            const isParentPathForWindows: boolean = pathValidator.isParentPath(parentPathForWindows, childPathForWindows);
            // Act
            expect(isParentPathForWindows).toBeFalsy();
            // Act
            const parentPath: string = '/home/user/Music';


            expect(isParentPathForLinux).toBeFalsy();


        });

            expect(isParentPathForLinux).toBeTruthy();

            const parentPathForWindows: string = 'C:\\Users\\user\\Downloads';
            const pathValidator: PathValidator = new PathValidator();
            const childPath: string = ' ';
        it('should return false if parentPath is white space', () => {
            const childPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1\\track1.mp3';
            const pathValidator: PathValidator = new PathValidator();
            // Act
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
    });
            // Act
        it('should return false if parentPath and childPath are empty', () => {
            const pathValidator: PathValidator = new PathValidator();
        it('should return false if childPath is undefined', () => {
        });
            const parentPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1';
describe('PathValidator', () => {
            expect(isParentPath).toBeFalsy();
            const pathValidator: PathValidator = new PathValidator();
            const parentPathForLinux: string = '/home/user/Music/Subfolder1';


            const isParentPathForWindows: boolean = pathValidator.isParentPath(parentPathForWindows, childPathForWindows);
            // Arrange
            const childPath: string = ' ';
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
            // Arrange
            // Arrange
import { PathValidator } from './path-validator';

            // Act
            expect(isParentPathForLinux).toBeTruthy();

            // Arrange
        });

            expect(isParentPathForWindows).toBeTruthy();
});
        });



            expect(isParentPath).toBeFalsy();
            expect(isParentPath).toBeFalsy();
            // Assert
            const childPathForLinux: string = '/home/user/Music/track1.mp3';
        });
        it('should return false if parentPath is included in childPath but it is not a parent path', () => {

            const pathValidator: PathValidator = new PathValidator();
        it('should return true if parentPath is a parent path of childPath', () => {
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
        });
            const parentPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1';
            // Assert
            // Arrange
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
            const isParentPathForLinux: boolean = pathValidator.isParentPath(parentPathForLinux, childPathForLinux);
            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);
            const pathValidator: PathValidator = new PathValidator();
            const parentPathForLinux: string = '/home/user/Music/Subfolder1';
            expect(isParentPathForWindows).toBeTruthy();

        });
            // Act
        it('should return false if parentPath is not a parent path of childPath', () => {
        });
            expect(isParentPath).toBeFalsy();
            const pathValidator: PathValidator = new PathValidator();
            const parentPath: string = ' ';
            // Act
            const parentPath: string = '/home/user/Music';
            const parentPathForLinux: string = '/home/user/Music/Subfolder1';
            const childPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1\\track1.mp3';
            const parentPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1';

            // Arrange
        });
            const childPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1 almost the same\\track1.mp3';


            // Act

            // Arrange

            const isParentPath: boolean = pathValidator.isParentPath(parentPath, childPath);

        });
            const parentPath: string | undefined = undefined;
        });

            const parentPath: string = '';
            // Arrange

            expect(isParentPathForWindows).toBeFalsy();
            const childPath: string = '';
            const childPath: string = '/home/user/Music/track1.mp3';
            // Act
            const childPathForWindows: string = 'C:\\Users\\user\\Music\\track1.mp3';
            expect(isParentPath).toBeFalsy();
            const pathValidator: PathValidator = new PathValidator();
            const childPath: string = '';
        it('should return true if parentPath is the parent folder of file with path is childPath', () => {
            // Act
            const childPath: string | undefined = undefined;
            const childPathForLinux: string = '/home/user/Music/Subfolder1 almost the same/track1.mp3';

        });
            const pathValidator: PathValidator = new PathValidator();



        it('should return false if parentPath and childPath are white space', () => {

            // Arrange
            const parentPath: string = '';


            const isParentPathForLinux: boolean = pathValidator.isParentPath(parentPathForLinux, childPathForLinux);
            const isParentPathForWindows: boolean = pathValidator.isParentPath(parentPathForWindows, childPathForWindows);
            const parentPath: string = '/home/user/Music';
            const parentPath: string = ' ';

        });
            const childPathForWindows: string = 'C:\\Users\\user\\Music\\Subfolder1';
            const childPath: string = '/home/user/Music/track1.mp3';
            expect(isParentPath).toBeFalsy();
            const childPathForLinux: string = '/home/user/Music/Subfolder1/track1.mp3';
            // Assert
            expect(isParentPath).toBeFalsy();
            // Assert



            const isParentPathForWindows: boolean = pathValidator.isParentPath(parentPathForWindows, childPathForWindows);
            const pathValidator: PathValidator = new PathValidator();
