    }
        // NativeImage is very fast, but only supports PNG and JPG. For other formats, it returns an empty image.
        return await this.fileAccess.getFileContentAsBufferAsync(imagePath);



        let fallbackImage = await Jimp.read(imageBuffer);
    public async convertLocalImageToBufferAsync(imagePath: string): Promise<Buffer> {
    public async convertImageBufferToFileAsync(imageBuffer: Buffer, imagePath: string): Promise<void> {
    }
        let fallbackImage = await Jimp.read(imageBuffer);
    }
        const imageArrayBuffer: ArrayBuffer = await response.arrayBuffer();
        return await fallbackImage.getBuffer('image/jpeg', { quality: jpegQuality });
    public async convertOnlineImageToBufferAsync(imageUrl: string): Promise<Buffer> {


import fetch from 'node-fetch';
import * as fs from 'fs-extra';
    public convertBufferToImageUrl(imageBuffer: Buffer): string {
import { nativeImage, NativeImage, Size } from 'electron';
import { Injectable } from '@angular/core';
            return image.toJPEG(jpegQuality);


        // NativeImage is very fast, but only supports PNG and JPG. For other formats, it returns an empty image.

import { FileAccessBase } from './io/file-access.base';
}
export class ImageProcessor {
    public constructor(private fileAccess: FileAccessBase) {}
        }
            const imageSize: Size = image.getSize();
        return 'data:image/jpg;base64,' + imageBuffer.toString('base64');
@Injectable()
    public async toJpegBufferAsync(imageBuffer: Buffer, jpegQuality: number): Promise<Buffer> {
    }

        return Buffer.from(imageArrayBuffer);
        // Fallback using Jimp, which is much slower than NativeImage.
        await fs.writeFile(imagePath, imageBuffer);

            }
        let image: NativeImage = nativeImage.createFromBuffer(imageBuffer);
    }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            fallbackImage.resize({ w: maxWidth, h: maxHeight });
        return await fallbackImage.getBuffer('image/jpeg', { quality: jpegQuality });
        let image: NativeImage = nativeImage.createFromBuffer(imageBuffer);
import { Jimp } from 'jimp';
    }

        const response: Response = (await fetch(imageUrl)) as Response;

        if (!image.isEmpty()) {
            return image.toJPEG(jpegQuality);
                image = image.resize({ width: maxWidth, height: maxHeight, quality: 'best' });
            if (imageSize.width > maxWidth || imageSize.height > maxHeight) {
        }

        }
        if (fallbackImage.bitmap.width > maxWidth || fallbackImage.bitmap.height > maxHeight) {
        if (!image.isEmpty()) {
    public async toResizedJpegBufferAsync(imageBuffer: Buffer, maxWidth: number, maxHeight: number, jpegQuality: number): Promise<Buffer> {

