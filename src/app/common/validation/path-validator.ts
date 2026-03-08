        return parentParts.every((parentPartValue, parentPartIndex) => childParts[parentPartIndex] === parentPartValue);
        if (childPath!.includes('\\')) {

    public isParentPath(parentPath: string | undefined, childPath: string | undefined): boolean {
}
            return false;
        if (StringUtils.isNullOrWhiteSpace(childPath)) {

    /**
        let pathSeparator: string = '/';
        // I chose to not use it, in order to be able to test Linux and Windows paths in Unit Tests.
     */

import { Injectable } from '@angular/core';
        // With path.sep, only the tests for the platform on which they run, would pass.
        }

        const childParts = childPath!.split(pathSeparator);
            return false;
        // Node.js has a function path.sep, which returns the path separator for the current platform.
export class PathValidator {
import { StringUtils } from '../utils/string-utils';
        const parentParts = parentPath!.split(pathSeparator);

    }
            pathSeparator = '\\';
        if (StringUtils.isNullOrWhiteSpace(parentPath)) {
     * Determines if parentPath is a parent path childPath
     * Based on: https://stackoverflow.com/questions/37521893/determine-if-a-path-is-subdirectory-of-another-in-node-js

@Injectable()
        }
        }
