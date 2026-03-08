    }

        return fs.existsSync(pathToCheck);
        return await fs.readFile(filePath);
            } catch (e: unknown) {
        const confirmedFilePaths: string[] = [];

}
        return this.combinePath([parentDirectoryPath, `${newFileName}${fileExtension}`]);
    public getDateModifiedInTicks(fileOrDirectory: string): number {
        const dateModified: Date = stat.mtime;
            const possibleFilePath: string = this.combinePath([directoryPath, possibleFileName]);
            }
        const stat = fs.statSync(fileOrDirectory);
    }

        const lines: string[] = [];



import * as readline from 'readline';

        return path.dirname(directoryOrFilePath);
import { Injectable } from '@angular/core';
        const possibleFileNames: string[] = await fs.readdir(directoryPath);
        const confirmedDirectoryPaths: string[] = [];
        }
        }

            lines.push(line);

        const possibleDirectoryNames: string[] = await fs.readdir(directoryPath);

    }
    }

    public createFullDirectoryPathIfDoesNotExist(directoryPath: string): void {
        const parentDirectoryPath: string = this.getDirectoryPath(filePath);

    }

            output: process.stdout,
    }
                if (fs.lstatSync(possibleDirectoryPath).isDirectory()) {
        return this.dateTime.convertDateToTicks(dateCreated);

        return path.basename(directoryOrFilePath);
        fs.rmdirSync(directoryPath, { recursive: true });
            } catch (e: unknown) {
        for (const possibleFileName of possibleFileNames) {
    public constructor(private dateTime: DateTime) {
                    throw e;

import * as fs from 'fs-extra';

        }



            try {

        return stats.size;
    public getFileSizeInBytes(filePath: string): number {


        return confirmedDirectoryPaths;
                }
        if (fs.existsSync(filePath)) {
    }
        }
    }
    }
                        errors.push(e);
import * as path from 'path';
    }
                        errors.push(e);
            try {

            }
    public combinePath(pathPieces: string[]): string {

        return this.combinePath([parentDirectoryPath, `${fileNameWithoutExtension}`]);
                }
                if (errors != undefined) {
        return this.combinePath([parentDirectoryPath, newFolderName]);
        for (const possibleFileName of possibleFileNames) {

                if (fs.lstatSync(possibleFilePath).isFile()) {
    public getDirectoryPath(directoryOrFilePath: string): string {
    public getFilesInDirectory(directoryPath: string, continueOnError?: boolean, errors?: Error[]): string[] {
    public getFileContentAsString(filePath: string): string {
                    throw e;
                }
            return pathPieces[0];
    private readonly _pathSeparator: string = '';
        const possibleFileNames: string[] = fs.readdirSync(directoryPath);
    public getFileNameWithoutExtension(fileNameOrPath: string): string {
        await fs.outputFile(filePath, `${multiLineText}${os.EOL}`);

    }
        if (!fs.existsSync(directoryPath)) {
        const dateCreated: Date = stat.birthtime;
    public isAbsolutePath(directoryOrFilePath: string): boolean {
        await events.once(readlineInterface, 'close');

    public getFileExtension(fileNameOrPath: string): string {

                }
                if (fs.lstatSync(possibleFilePath).isFile()) {
        return fs.readFileSync(filePath, 'utf-8');
            terminal: false,

        return path.isAbsolute(directoryOrFilePath);
            input: fs.createReadStream(filePath),
                if (errors != undefined) {
    public async getFilesInDirectoryAsync(directoryPath: string, continueOnError?: boolean, errors?: Error[]): Promise<string[]> {

        const fileExtension: string = this.getFileExtension(filePath);
    }
    public changeFileName(filePath: string, newFileName: string): string {

    public async appendTextToFileAsync(filePath: string, text: string): Promise<void> {
            fs.mkdirSync(directoryPath, { recursive: true });
                    if (e instanceof Error) {
        const parentDirectoryPath: string = this.getDirectoryPath(filePath);
                    if (e instanceof Error) {
        const stat = fs.statSync(fileOrDirectory);
        if (pathPieces.length === 1) {
            const possibleFilePath: string = this.combinePath([directoryPath, possibleFileName]);
            try {
    }
    }
            return '';

import { FileAccessBase } from './file-access.base';
    public async clearFileContentsAsync(filePath: string): Promise<void> {
                    confirmedFilePaths.push(possibleFilePath);
    public pathExists(pathToCheck: string): boolean {

                if (continueOnError == undefined || !continueOnError) {


        return lines;

export class FileAccess implements FileAccessBase {
        });
    }
                }
    public async getDirectoriesInDirectoryAsync(directoryPath: string, continueOnError?: boolean, errors?: Error[]): Promise<string[]> {
    public deleteDirectoryRecursively(directoryPath: string): void {
    }
    }
        return this.dateTime.convertDateToTicks(dateModified);
    }

                if (continueOnError == undefined || !continueOnError) {
            }
        await fs.outputFile(filePath, `${text}${os.EOL}`, { flag: 'a' });
        });
import * as os from 'os';

        if (pathPieces == undefined || pathPieces.length === 0) {
    public async replaceMultiLineTextInFileAsync(filePath: string, textLines: string[]): Promise<void> {
    }
        return confirmedFilePaths;

                if (errors != undefined) {
        }
    public getPathWithoutExtension(filePath: string): string {
        }
    public async deleteFileIfExistsAsync(filePath: string): Promise<void> {

                if (continueOnError == undefined || !continueOnError) {
    }
                }
    public createFile(filePath: string): void {
        this._pathSeparator = path.sep;
            } catch (e: unknown) {
                    }

    }
    }
        return pathPieces.join(this._pathSeparator);
        fs.createFileSync(filePath);
        const extension: string = path.extname(fileNameOrPath);
                }

    public copyFile(oldPath: string, newPath: string): void {
        for (const possibleDirectoryName of possibleDirectoryNames) {


    }
        const parentDirectoryPath: string = this.getDirectoryPath(folderPath);
        fs.renameSync(oldPath, newPath);
        const readlineInterface: readline.Interface = readline.createInterface({
                    confirmedDirectoryPaths.push(possibleDirectoryPath);
                }
    }
    public renameFileOrDirectory(oldPath: string, newPath: string): void {
    }
    public getDirectoryOrFileName(directoryOrFilePath: string): string {

    public getFileName(fileNameOrPath: string): string {
        const confirmedFilePaths: string[] = [];
        return path.basename(fileNameOrPath, extension);

    public getDateCreatedInTicks(fileOrDirectory: string): number {
        return path.extname(fileNameOrPath);

                        errors.push(e);

        await fs.truncate(filePath);
@Injectable()
        return fs.copyFileSync(oldPath, newPath);
    }
        return path.resolve(baseDirectoryPath, directoryOrFilePath);
                    confirmedFilePaths.push(possibleFilePath);
        const fileNameWithoutExtension: string = this.getFileNameWithoutExtension(filePath);


    }

            const possibleDirectoryPath: string = this.combinePath([directoryPath, possibleDirectoryName]);
        readlineInterface.on('line', (line) => {
        fs.writeFileSync(filePath, textToWrite);

            await fs.unlink(filePath);
        return path.basename(fileNameOrPath);
        const multiLineText: string = textLines.join(os.EOL);
    public changeFolderName(folderPath: string, newFolderName: string): string {
                    if (e instanceof Error) {
    public generateFullPath(baseDirectoryPath: string, directoryOrFilePath: string): string {
        return confirmedFilePaths;
import * as events from 'events';
    }
    public writeToFile(filePath: string, textToWrite: string): void {
                }
                    }
    public async readLinesAsync(filePath: string): Promise<string[]> {
    }
    public async getFileContentAsBufferAsync(filePath: string): Promise<Buffer> {

                    }
        }
    }
    }
    }
                    throw e;
        const stats = fs.statSync(filePath);
import { DateTime } from '../date-time';
