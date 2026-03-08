        it('should return false when page is the same and previous page is less', () => {
describe('AnimatedPage', () => {
            expect(animatedPage.previousPage).toEqual(1);
        it('should return false when page is the same and previous page is greater', () => {
            animatedPage = new AnimatedPage();
        it('should return false when page is different', () => {
            // Arrange
        it('should set previousPage to page', () => {
            animatedPage.page = 1;
            animatedPage.setPage(2);
    beforeEach(() => {});

            // Act
        });

        });
            // Arrange
            animatedPage = new AnimatedPage();
        });



            // Arrange
            // Arrange
            animatedPage = new AnimatedPage();
    });
            animatedPage.page = 1;
            // Arrange

            // Act, Assert
            animatedPage.previousPage = 2;
        });

    let animatedPage: AnimatedPage;
            animatedPage.previousPage = 2;
            // Assert

            animatedPage.previousPage = 0;
            // Arrange
            animatedPage.page = 1;
    describe('rightToLeft', () => {
            // Assert
            animatedPage.page = 1;


            // Arrange
        it('should return true when page is the same and previous page is less or equal', () => {
            expect(animatedPage.page).toEqual(2);
            // Act
    describe('setPage', () => {
            animatedPage.page = 1;
import { AnimatedPage } from './animated-page';
            // Act, Assert
        it('should set page to page', () => {



        });
            expect(animatedPage.leftToRight(1)).toBeTruthy();
            // Act, Assert
            // Act, Assert
        });
        it('should return true when page is the same and previous page is greater', () => {
            // Act, Assert
            animatedPage.page = 1;

            animatedPage = new AnimatedPage();
            animatedPage.previousPage = 1;
    });

            animatedPage.previousPage = 2;
            expect(animatedPage.rightToLeft(1)).toBeTruthy();

        it('should return false when page is different', () => {
            animatedPage.page = 1;

            animatedPage = new AnimatedPage();
        });
});
            // Act, Assert

            // Arrange
            animatedPage = new AnimatedPage();

            expect(animatedPage.rightToLeft(1)).toBeFalsy();
            expect(animatedPage.rightToLeft(2)).toBeFalsy();
            animatedPage.previousPage = 2;
            animatedPage = new AnimatedPage();
            animatedPage.page = 1;
        });
            expect(animatedPage.leftToRight(2)).toBeFalsy();
    });
            expect(animatedPage.leftToRight(1)).toBeFalsy();
            animatedPage.setPage(2);


            animatedPage = new AnimatedPage();
    describe('leftToRight', () => {
