        searchServiceMock = Mock.ofType<SearchServiceBase>();
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
        });

                metaKey: true,
            appSearchBoxMock.verify((x) => x.blur(), Times.never());

            });
            // Act
            // Arrange
            // Act

                metaKey: false,
                code: 'KeyF',
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            const event = new KeyboardEvent('keydown', {
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
                shiftKey: false,
                metaKey: true,
            // Arrange
        it('should not focus appSearchBox on Meta+Alt+Shift+KeyF (macOS)', () => {
        it('should not focus appSearchBox on Meta+non-KeyF (macOS)', () => {
            searchServiceMock.verify((x) => (x.searchText = ''), Times.once());
            appSearchBoxMock.verify((x) => x.blur(), Times.never());


                ctrlKey: false,
    });


        it('should create', () => {

            const event = new KeyboardEvent('keydown', {
        it('should define appSearchBoxRef', () => {
            // Arrange

            const event = new KeyboardEvent('keydown', {
import { DocumentProxy } from '../../../common/io/document-proxy';

    });
                metaKey: false,
                code: 'KeyF',
            const event = new KeyboardEvent('keydown', {
                ctrlKey: true,
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
            // Arrange
            // Arrange
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => appSearchBoxMock.object);
    let appSearchBoxMock: IMock<HTMLInputElement>;

            // Assert
            component.handleKeyboardEvent(event);
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            // Assert

import { SearchServiceBase } from '../../../services/search/search.service.base';
            const event = new KeyboardEvent('keydown', {
            component.handleKeyboardEvent(event);
            component.handleKeyboardEvent(event);
            expect(preventDefaultSpy).not.toHaveBeenCalled();
                code: 'KeyA',
                shiftKey: true,

        it('should not focus appSearchBox on KeyF', () => {
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

            const event = new KeyboardEvent('keydown', {

                code: 'KeyF',
            component.handleKeyboardEvent(event);

            component.handleKeyboardEvent(event);
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            appSearchBoxMock.verify((x) => x.blur(), Times.never());

            component.clearSearchText();
            expect(preventDefaultSpy).not.toHaveBeenCalled();
        });
        });
            component = createComponent();
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        it('should blur appSearchBox on Escape', () => {
            appSearchBoxMock.verify((x) => x.focus(), Times.never());

                shiftKey: true,
        it('should focus appSearchBox on Meta+KeyF (macOS)', () => {
            // Act

            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            // Assert
            component.handleKeyboardEvent(event);


        component = createComponent();
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            appSearchBoxMock.verify((x) => x.blur(), Times.never());


            expect(preventDefaultSpy).not.toHaveBeenCalled();
            // Act
            // Arrange
        });


        });
            component.handleKeyboardEvent(event);
                metaKey: false,


            // Act
            appSearchBoxMock.verify((x) => x.blur(), Times.never());

            // Assert
                key: 'Escape',
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            });
            expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
                code: 'KeyF',

            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => appSearchBoxMock.object);
            });
                metaKey: false,
            component.handleKeyboardEvent(event);
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);

                shiftKey: false,
        it('should not focus appSearchBox on Ctrl+Alt+KeyF', () => {
                altKey: false,

        appSearchBoxMock = Mock.ofType<HTMLInputElement>();
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            expect(preventDefaultSpy).not.toHaveBeenCalled();
                code: 'KeyF',
        });
                altKey: false,
                metaKey: true,
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);

            appSearchBoxMock.verify((x) => x.focus(), Times.never());

        });
        appSearchBoxRefMock.setup((x) => x.nativeElement).returns(() => appSearchBoxMock.object);
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

            });
            });
                ctrlKey: false,
            // Arrange
            appSearchBoxMock.verify((x) => x.blur(), Times.never());

                shiftKey: false,


            // Assert
            const event = new KeyboardEvent('keydown', {
            // Assert
            // Act
describe('SearchBoxComponent', () => {
            component.handleKeyboardEvent(event);
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
        return new SearchBoxComponent(searchServiceMock.object, documentProxyMock.object);
            });
    describe('handleKeyboardEvent', () => {
            component.handleKeyboardEvent(event);
                code: 'KeyF',
        it('should do nothing when appSearchBoxRef is undefined', () => {
            // Arrange
                key: 'a',
            const event = new KeyboardEvent('keydown', {
            appSearchBoxMock.verify((x) => x.focus(), Times.once());
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
            component.handleKeyboardEvent(event);

                shiftKey: true,
import { ElementRef } from '@angular/core';
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            // Act
        it('should not focus appSearchBox on Meta+Shift+KeyF (macOS)', () => {

            expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        });
                altKey: false,
                altKey: true,

            // Act
        });
        component.appSearchBoxRef = appSearchBoxRefMock.object;
        it('should not blur non-active appSearchBox on Escape', () => {
            });
            expect(preventDefaultSpy).not.toHaveBeenCalled();
                ctrlKey: false,
            component.handleKeyboardEvent(event);
            });
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
    describe('constructor', () => {
                ctrlKey: true,
        appSearchBoxRefMock = Mock.ofType<ElementRef>();

            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            // Act
                code: 'KeyF',

                altKey: false,
            // Act
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
        it('should not focus appSearchBox on Ctrl+KeyF if appSearchBox is active', () => {
        });
                altKey: true,

            expect(component.appSearchBoxRef).toBeUndefined();
                ctrlKey: true,
    });
                metaKey: true,
            // Assert
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
    }
            // Arrange
            appSearchBoxMock.verify((x) => x.focus(), Times.never());

            // Act
        it('should define searchService', () => {
            component.handleKeyboardEvent(event);
                shiftKey: true,

            // Act
                altKey: false,
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            const event = new KeyboardEvent('keydown', {
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            });
            // Arrange

            // Assert
        it('should not focus appSearchBox on Ctrl+Alt+Shift+KeyF', () => {


            // Assert
                metaKey: true,
        });
            // Arrange
                code: 'KeyF',

                altKey: false,
                altKey: false,
                metaKey: false,
        });
            });
                ctrlKey: true,


            // Arrange
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            const event = new KeyboardEvent('keydown', {

            component.handleKeyboardEvent(event);
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
    let documentProxyMock: IMock<DocumentProxy>;
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
        it('should not focus appSearchBox on Ctrl+non-KeyF', () => {
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            const event = new KeyboardEvent('keydown', {
import { SearchBoxComponent } from './search-box.component';
    function createComponent(): SearchBoxComponent {

            // Act
                shiftKey: false,
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            // Act
            // Arrange
        documentProxyMock = Mock.ofType<DocumentProxy>();
            component.handleKeyboardEvent(event);


            // Assert

                code: 'KeyF',
        it('should not focus appSearchBox on Meta+Alt+KeyF (macOS)', () => {

    let component: SearchBoxComponent;
            // Arrange
                ctrlKey: false,
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            const event = new KeyboardEvent('keydown', {
            });

        });

            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
            // Act
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

                altKey: false,
            // Arrange
                key: 'Escape',
                altKey: true,
            // Assert
        it('should not blur appSearchBox on non-Escape', () => {


        });


                ctrlKey: true,
            // Assert
    let appSearchBoxRefMock: IMock<ElementRef>;
});
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            // Assert
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
                shiftKey: false,
            expect(component).toBeDefined();
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => appSearchBoxMock.object);
                shiftKey: false,

            // Arrange
                shiftKey: false,
        });
            const event = new KeyboardEvent('keydown', {

                metaKey: false,
            // Act
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);


            });
            // Act
            const event = new KeyboardEvent('keydown', {
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            // Arrange
        it('should not focus appSearchBox on Ctrl+Shift+KeyF', () => {
                metaKey: true,
            expect(preventDefaultSpy).not.toHaveBeenCalled();
        });
            });
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => appSearchBoxMock.object);
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            // Assert
            appSearchBoxMock.verify((x) => x.focus(), Times.once());
            // Act
            const event = new KeyboardEvent('keydown', {
            component.handleKeyboardEvent(event);

        });

            // Act
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            // Assert
                ctrlKey: true,
            const event = new KeyboardEvent('keydown', {
            // Assert

            // Arrange
                ctrlKey: false,
            // Assert
            expect(preventDefaultSpy).not.toHaveBeenCalled();
                code: 'KeyF',
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            // Arrange
        it('should not focus appSearchBox on Meta+KeyF (macOS) if appSearchBox is active', () => {
                altKey: true,
                ctrlKey: false,
                shiftKey: false,
            // Act

            // Arrange
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            });

    beforeEach(() => {
            // Assert

        });
            appSearchBoxMock.verify((x) => x.focus(), Times.never());

            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);

            appSearchBoxMock.verify((x) => x.blur(), Times.once());



            // Arrange
                altKey: false,
        });

        it('should focus appSearchBox on Ctrl+KeyF', () => {
                metaKey: false,
            // Assert
    describe('clearSearchText', () => {
            component.handleKeyboardEvent(event);
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
            expect(component.appSearchBoxRef).toBeDefined();

                ctrlKey: false,
            });

            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            });
            // Assert
        it('should clear the search text', () => {
            expect(preventDefaultSpy).not.toHaveBeenCalled();
            expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
    let searchServiceMock: IMock<SearchServiceBase>;

            expect(component.searchService).toBeDefined();
                key: 'Escape',
            // Act
        });
                code: 'KeyF',
                shiftKey: false,
            // Assert
    });
        });
            });
            const event = new KeyboardEvent('keydown', {

import { IMock, Mock, Times } from 'typemoq';
                code: 'KeyA',
            appSearchBoxMock.verify((x) => x.blur(), Times.never());
            const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
            documentProxyMock.setup((x) => x.getActiveElement()).returns(() => null);
            appSearchBoxMock.verify((x) => x.focus(), Times.never());
