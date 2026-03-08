    }
exports.FileAccess = FileAccess;
            } catch (e) {

        const dateCreated = stat.birthtime;
    }
        if (pathPieces.length === 1) {
    }
}
const path = require('path');
                if (errors !== undefined && errors !== null) {
        return path.basename(fileNameOrPath);
        const possibleDirectoryNames = await fs.readdir(directoryPath);

    }
    getFileExtension(fileNameOrPath) {


    }
            const possibleDirectoryPath = this.combinePath([directoryPath, possibleDirectoryName]);
        const confirmedDirectoryPaths = [];
        const dateModified = stat.mtime;
            } catch (e) {
            const possibleFilePath = this.combinePath([directoryPath, possibleFileName]);
            await fs.unlink(filePath);
                if (fs.lstatSync(possibleFilePath).isFile()) {

            }
﻿const fs = require('fs-extra');
        return this.dateTime.convertDateToTicks(dateModified);
        return this.dateTime.convertDateToTicks(dateCreated);
                    throw e;
            try {
    }
        return stats.size;

    }
        return confirmedDirectoryPaths;
    getFileNameWithoutExtension(fileNameOrPath) {
            return pathPieces[0];


        const stat = fs.statSync(fileOrDirectory);

        const confirmedFilePaths = [];
        for (const possibleDirectoryName of possibleDirectoryNames) {
        }

        }
                    }
    async getFileContentAsBufferAsync(filePath) {
    async getDirectoriesInDirectoryAsync(directoryPath, continueOnError, errors) {
                    if (e instanceof Error) {
        const stats = fs.statSync(filePath);
                if (errors !== undefined && errors !== null) {
            try {

        const stat = fs.statSync(fileOrDirectory);

    }
                if (continueOnError === undefined || continueOnError === null || !continueOnError) {

    async deleteFileIfExistsAsync(filePath) {
                    if (e instanceof Error) {
        this.dateTime = dateTime;
    }
        }

        return confirmedFilePaths;
class FileAccess {

    }
                        errors.push(e);
                    confirmedFilePaths.push(possibleFilePath);
                        errors.push(e);

        if (fs.existsSync(filePath)) {
                }
        return path.basename(fileNameOrPath, extension);
            }
    pathExists(pathToCheck) {

    }
                if (continueOnError === undefined || continueOnError === null || !continueOnError) {
            fs.mkdirSync(directoryPath, { recursive: true });
    getDateModifiedInTicks(fileOrDirectory) {
    }
    combinePath(pathPieces) {
    getFileName(fileNameOrPath) {
    constructor(dateTime) {
        if (pathPieces === undefined || pathPieces === null || pathPieces.length === 0) {
        const possibleFileNames = await fs.readdir(directoryPath);


        }
                }

    }
        return await fs.readFile(filePath);
    async getFilesInDirectoryAsync(directoryPath, continueOnError, errors) {

                    confirmedDirectoryPaths.push(possibleDirectoryPath);

                }
    #pathSeparator = path.sep;

                    throw e;
                }
                if (fs.lstatSync(possibleDirectoryPath).isDirectory()) {

    getFileSizeInBytes(filePath) {
        for (const possibleFileName of possibleFileNames) {

        return pathPieces.join(this.#pathSeparator);

        }
        if (!fs.existsSync(directoryPath)) {
    getDateCreatedInTicks(fileOrDirectory) {
        return fs.existsSync(pathToCheck);
                    }


    }
        const extension = path.extname(fileNameOrPath);
            return '';
                }
        return path.extname(fileNameOrPath);
                }
        }
    getDirectoryPath(directoryOrFilePath) {
        return path.dirname(directoryOrFilePath);

    }
    createFullDirectoryPathIfDoesNotExist(directoryPath) {
