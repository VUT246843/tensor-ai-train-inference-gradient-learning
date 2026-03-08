            // Arrange

            // Assert
            expect(isNewerVersion).toBeFalsy();

            // Assert
            // Act
        });

            // Arrange
            // Arrange
            // Assert
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-preview.2', '3.0.0-preview.1');
            // Arrange

            // Arrange
            // Arrange
            // Act
            // Arrange
        it('should report newer version if both old and new version are "rc" versions with same version number but new version has higher iteration', () => {

        it('should report not newer version if old version is "rc" version and new version is "preview" version and both have the same version number and iteration', () => {
            // Assert
            // Act
    describe('isNewerVersion', () => {
        });
        });
        it('should report not newer version if old version is "rc" version and new version is "preview" version and iteration of new version is higher', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.1', '3.0.0-rc.2');
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.1', '3.0.0-preview.2');
        });

            expect(isNewerVersion).toBeTruthy();
            // Assert
            expect(isNewerVersion).toBeFalsy();


            expect(isNewerVersion).toBeTruthy();

        });
            expect(isNewerVersion).toBeFalsy();

import { VersionComparer } from './version-comparer';
            // Act
        });
            // Arrange

            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0', '3.0.0-rc.1');


            // Assert
            expect(isNewerVersion).toBeFalsy();
            // Arrange
        it('should not report newer version if old version is newer than new version and new version has "preview" suffix', () => {
            // Assert

        });
            // Assert
        });
            expect(isNewerVersion).toBeFalsy();
            // Assert
            // Act

        it('should report newer version if both old and new version are "preview" versions with same version number but new version has higher iteration', () => {
            expect(isNewerVersion).toBeFalsy();

            // Assert



            // Act
            expect(isNewerVersion).toBeTruthy();
        it('should report not newer version if old version is "rc" version and new version is "preview" version and iteration of new version is lower', () => {




            // Act
            // Arrange
            // Assert

            // Arrange
            // Act

        });
            // Arrange
            // Assert
        it('should report not newer version if both old and new version are "rc" versions with same version number but new version has lower iteration', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0', '3.0.0-preview.1');

            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-preview.1', '3.0.0-rc.1');
            // Arrange


        it('should report newer version if old version is older than new version and old version has "preview" suffix', () => {
        it('should not report newer version if old version is the same as new version but new version has "rc" suffix', () => {

        });

        });
            // Act


        it('should not report newer version if old version is newer than new version and old version has "preview" suffix', () => {

            expect(isNewerVersion).toBeFalsy();
            expect(isNewerVersion).toBeTruthy();
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-preview.6', '3.0.0-rc.1');

            expect(isNewerVersion).toBeTruthy();
            // Assert
            // Act


            // Act
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-preview.1', '3.0.1');

            // Arrange
            expect(isNewerVersion).toBeTruthy();
            // Assert
            // Assert
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.1', '3.0.0-preview.1');


            // Assert
            // Arrange
            // Arrange
        it('should report newer version if old version is "preview" version and new version is "rc" version and both have the same version number and iteration', () => {
        it('should not report newer version when old version is release and is same as new version which is release', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.3', '2.0.3');
            // Arrange
            // Assert
        it('should report not newer version if both old and new version are "preview" versions with same version number but new version has lower iteration', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.1', '3.0.0-preview.1');
            // Act
            // Act
    });
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.1', '3.0.0-rc.1');

        });
            // Assert

        });
            expect(isNewerVersion).toBeFalsy();
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.1-rc.1', '3.0.0');


            expect(isNewerVersion).toBeTruthy();
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.5', '3.0.0-preview.1');
            // Arrange



        });

        });

            expect(isNewerVersion).toBeFalsy();
            // Act
            expect(isNewerVersion).toBeTruthy();
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.1-preview.1', '3.0.0');

        it('should not report newer version if old version is the same as new version but new version has "preview" suffix', () => {
            // Assert
            // Act
            // Act
        it('should report newer version if old version is "preview" version and new version is "rc" version and iteration of new version is lower', () => {
        });
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.3', '2.0.4');
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-preview.1', '3.0.0-preview.2');
        });


        it('should not report newer version if old version is newer than new version and new version has "rc" suffix', () => {
            // Assert
            // Arrange
describe('VersionComparer', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0', '3.0.1-rc.1');


            // Act

            // Act
            // Act

        it('should report newer version when old version is release and is older than new version which is release', () => {

            // Arrange
        it('should not report newer version if old version is newer than new version and old version has "rc" suffix', () => {
            expect(isNewerVersion).toBeFalsy();

            // Act
            // Assert
        });

        it('should  not report newer version when old version is release and is newer than new version which is release', () => {

        it('should report newer version if old version is older than new version and new version has "preview" suffix', () => {
            expect(isNewerVersion).toBeTruthy();
        });
});
        });

            expect(isNewerVersion).toBeFalsy();



            expect(isNewerVersion).toBeFalsy();
            // Assert

            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0', '3.0.1-preview.1');


        });
        it('should report newer version if old version is older than new version and old version has "rc" suffix', () => {
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.1', '3.0.1');
            // Act
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('3.0.0-rc.2', '3.0.0-rc.1');
            // Act
            expect(isNewerVersion).toBeFalsy();
            // Arrange
        });
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.4', '2.0.3');
            // Arrange
        it('should report newer version if old version is older than new version and new version has "rc" suffix', () => {
