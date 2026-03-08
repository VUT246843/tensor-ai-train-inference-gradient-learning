    public static readonly applicationName: string = StringUtils.capitalizeFirstLetter(getName() as string);
/* eslint-disable @typescript-eslint/no-unsafe-call */
export class ProductInformation {

    public static readonly applicationCopyright: string = getCopyright();
    public static readonly releasesDownloadUrl: string = 'https://github.com/digimezzo/dopamine/releases/';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
}
/* eslint-disable @typescript-eslint/no-var-requires */
    public static readonly applicationVersion: string = getFullVersion();
const { getName, getFullVersion, getCopyright } = require('../../../../get-package-information.js');
import { StringUtils } from '../utils/string-utils';

