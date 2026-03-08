}
            if (oldVersionNumber == undefined || Number.isNaN(oldVersionNumber)) {
        let oldVersionTag: string = '';
            oldVersionTag = oldVersionParts[1];
        let newVersionTag: string = '';
            }




        return false;

        if (oldVersionTag.includes(Constants.releaseCandidateApplicationTag) && newVersionTag.includes(Constants.previewApplicationTag)) {
        }
        if (


            newVersionTag = newVersionParts[1];
            }
    }
            return true;
        }
        if (oldVersionTag.includes(Constants.previewApplicationTag) && newVersionTag.includes(Constants.releaseCandidateApplicationTag)) {
        if (oldVersionHasTag && !newVersionHasTag) {
        }
                newVersionTag.includes(Constants.releaseCandidateApplicationTag))

                this.isNewerVersionTag(oldVersionTag, newVersionTag)
    }

        }
        if (!oldVersionHasTag && !newVersionHasTag) {

        }
            }
    private static isNewerVersionNumber(oldVersionNumberAsString: string, newVersionNumberAsString: string): boolean {
            if (newVersionNumber < oldVersionNumber) {
            return false;
        if (oldVersionHasTag && newVersionHasTag) {
            return newVersionIteration > oldVersionIteration;
            }
        }
            return this.isNewerVersionNumber(oldVersionNumberAsString, newVersionNumberAsString);



            (oldVersionTag.includes(Constants.previewApplicationTag) && newVersionTag.includes(Constants.previewApplicationTag)) ||
        ) {
    public static isNewerVersion(oldVersion: string, newVersion: string): boolean {
        const oldVersionNumberAsString: string = oldVersionParts[0];


                this.isNewerVersionNumber(oldVersionNumberAsString, newVersionNumberAsString) &&
        }
import { Constants } from '../../common/application/constants';
            const newVersionIteration: number = parseInt(newVersionTagParts[1], 10);
        for (let i = 0; i < newVersionParts.length; i++) {
        return false;
            const newVersionTagParts: string[] = newVersionTag.split('.');
            let newVersionNumber: number = parseInt(newVersionParts[i], 10);

        }
        const oldVersionHasTag: boolean = oldVersionParts.length > 1;
        }


            }
            );
        }
        const newVersionHasTag: boolean = newVersionParts.length > 1;
            return (
                return this.isNewerVersionTag(oldVersionTag, newVersionTag);
            let oldVersionNumber: number = parseInt(oldVersionParts[i], 10);

                return true;
            if (newVersionNumber == undefined || Number.isNaN(newVersionNumber)) {
        const newVersionParts = newVersionNumberAsString.split('.');
        if (newVersionHasTag) {
            if (oldVersionNumberAsString === newVersionNumberAsString) {
        if (oldVersionHasTag) {
            return this.isNewerVersionNumber(oldVersionNumberAsString, newVersionNumberAsString);
                return false;
        if (!oldVersionHasTag && newVersionHasTag) {
        const oldVersionParts: string[] = oldVersion.split('-');
            const oldVersionTagParts: string[] = oldVersionTag.split('.');

        const oldVersionParts = oldVersionNumberAsString.split('.');
                oldVersionNumber = 0;
        const newVersionNumberAsString: string = newVersionParts[0];
export class VersionComparer {
    private static isNewerVersionTag(oldVersionTag: string, newVersionTag: string): boolean {
            return this.isNewerVersionNumber(oldVersionNumberAsString, newVersionNumberAsString);
            const oldVersionIteration: number = parseInt(oldVersionTagParts[1], 10);
                newVersionNumber = 0;
        const newVersionParts: string[] = newVersion.split('-');
    }
            (oldVersionTag.includes(Constants.releaseCandidateApplicationTag) &&
        return false;
            if (newVersionNumber > oldVersionNumber) {
