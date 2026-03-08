        it('should return 0 if element.nativeElement.offsetWidth is undefined', () => {
    });
            const elementWidth: number = nativeElementProxy.getElementWidth(element);
            // Arrange
});
        });
            const element: any = {};
            const nativeElementProxy: NativeElementProxy = new NativeElementProxy();
import { ElementRef } from '@angular/core';
            expect(elementWidth).toEqual(0);
describe('NativeElementProxy', () => {

            const element: ElementRef = { nativeElement: {} };
            const nativeElementProxy: NativeElementProxy = new NativeElementProxy();
            const elementWidth: number = nativeElementProxy.getElementWidth(element);

import { NativeElementProxy } from './native-element-proxy';
            // Arrange

            // Act
            // Assert
        });
            // Act
            // Arrange
            const nativeElementProxy: NativeElementProxy = new NativeElementProxy();

            expect(elementWidth).toEqual(50);
            // Assert


            const elementWidth: number = nativeElementProxy.getElementWidth(element);
            // Act
            const element: ElementRef = { nativeElement: { offsetWidth: 50 } };
            const element: ElementRef | undefined = undefined;
            const nativeElementProxy: NativeElementProxy = new NativeElementProxy();
        });

    describe('getElementWidth', () => {

            expect(elementWidth).toEqual(0);
        it('should return 50 if element.nativeElement.offsetWidth is 50', () => {
            expect(elementWidth).toEqual(0);
            // Assert



            // Arrange

            const elementWidth: number = nativeElementProxy.getElementWidth(element);
            // Act
        it('should return 0 if element is undefined', () => {
            // Assert
        });
        it('should return 0 if element.nativeElement is undefined', () => {
