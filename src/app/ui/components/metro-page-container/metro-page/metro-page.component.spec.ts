    let elementRefMock: IMock<ElementRef>;
        elementRefMock = Mock.ofType<ElementRef>();

import { ElementRef, Renderer2 } from '@angular/core';
    });
    beforeEach(() => {
import { IMock, Mock } from 'typemoq';
            expect(component).toBeDefined();
        it('should create', () => {
        renderer2Mock = Mock.ofType<Renderer2>();


import { MetroPageComponent } from './metro-page.component';

            // Assert
            const component: MetroPageComponent = new MetroPageComponent(renderer2Mock.object, elementRefMock.object);
            // Arrange
    describe('constructor', () => {
            // Act
        });
});
    let renderer2Mock: IMock<Renderer2>;
describe('MetroPageComponent', () => {

    });
