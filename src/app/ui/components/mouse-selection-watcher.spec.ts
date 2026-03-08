            const item1: any = { isSelected: false };
            const shiftEvent: any = { shiftKey: {} };
            const item3: any = { isSelected: false };

            const item1: any = { isSelected: false };
            const item2: any = { isSelected: false };
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(0);
            expect(() => mouseSelectionWatcher.setSelectedItems(event, undefined)).not.toThrow();
            // Assert

            const shiftEvent: any = { shiftKey: {} };
            expect(mouseSelectionWatcher.selectedItems[1]).toBe(item3);
            mouseSelectionWatcher.setSelectedItems(event, item3);
            const event: any = { button: 1 };
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(0);
import { MouseSelectionWatcher } from './mouse-selection-watcher';
            // Assert
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item1);
            const items: any[] = [item1, item2, item3, item4];
            // Arrange
            // Assert
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item1);


        it('should select only the given item if no modifier keys are pressed, the left mouse button is pressed and multiple items are selected.', () => {

            // Act

            const item2: any = { isSelected: false };

        it('should remove the given item from the selection if ctrl is pressed', () => {
            // Assert
            const items: any[] = [item1, item2, item3, item4];
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.setSelectedItems(event, item3);
        it('should not throw an error if item is undefined', () => {
            const item3: any = { isSelected: false };
            // Assert

            const item1: any = { isSelected: false };
            // Act
            const item3: any = { isSelected: false };

            mouseSelectionWatcher.setSelectedItems(shiftEvent, item3);
            mouseSelectionWatcher.initialize(items, false);


            const item1: any = { isSelected: false };


            expect(mouseSelectionWatcher.selectedItems.length).toEqual(3);
            // Act
            mouseSelectionWatcher.initialize(items, false);
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.setSelectedItems(event, item2);
    });
            // Arrange
            mouseSelectionWatcher.setSelectedItems(event, item1);
            const event: any = { button: 1 };
            // Arrange
            mouseSelectionWatcher.setSelectedItems(event, item2);
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item1);
            const item2: any = { isSelected: false };
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            expect(mouseSelectionWatcher.selectedItems[1]).toBe(item2);
            mouseSelectionWatcher.setSelectedItems(event, item3);
        it('should not throw an error if event is undefined', () => {
        });
            const items: any[] = [item1, item2, item3];
            expect(mouseSelectionWatcher.selectedItems[2]).toBe(item3);


            const item1: any = { isSelected: false };
            expect(() => mouseSelectionWatcher.setSelectedItems(undefined, item1)).not.toThrow();
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.initialize(items, false);
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item1);
            const items: any[] = [item1, item2, item3, item4];
            const event: any = { button: 0 };
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item3);
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(3);
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
        it('should not change the selection if no modifier keys are pressed, a non-left mouse button is pressed and multiple items are selected.', () => {
            // Act
            // Act
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item3);


            mouseSelectionWatcher.initialize(items, false);


            // Arrange

        });
            // Arrange
            const event: any = { button: 0 };
            const item4: any = { isSelected: false };
            expect(() => mouseSelectionWatcher.initialize(undefined, true)).not.toThrow();
            // Arrange
        });
            // Assert
            // Arrange
            const item3: any = { isSelected: false };
        });
            const items: any[] = [item1, item2, item3, item4];


            expect(mouseSelectionWatcher.selectedItems[2]).toBe(item3);
            const ctrlEvent: any = { ctrlKey: {} };
            // Act
            mouseSelectionWatcher.initialize(items, false);
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();

            const shiftEvent: any = { shiftKey: {} };
            const item2: any = { isSelected: false };
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);
            // Arrange
            const item3: any = { isSelected: false };

        });
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item2);
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);
        });
            const items: any[] = [item1, item2];
            // Assert
            mouseSelectionWatcher.initialize(items, false);
            const item1: any = { isSelected: false };

            const event: any = { button: 0 };
        it('should select only the given item if no modifier keys are pressed, a non-left mouse button is pressed and 1 item is selected.', () => {
            mouseSelectionWatcher.initialize(items, false);
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
        });
            // Assert
            mouseSelectionWatcher.setSelectedItems(ctrlEvent, item3);
            const item3: any = { isSelected: false };
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);
            const item2: any = { isSelected: false };

            const items: any[] = [item1, item2, item3, item4];
        it('should not throw an error if items is undefined', () => {
            // Act
            const shiftEvent: any = { shiftKey: {} };
        });
            const item4: any = { isSelected: false };


        });
        });
            const item2: any = { isSelected: false };
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item1);
            // Act
            const item2: any = { isSelected: false };
            const item3: any = { isSelected: false };
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item1);
            const item1: any = { isSelected: false };
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
});
            // Act

            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item3);

            mouseSelectionWatcher.setSelectedItems(event, item3);
            // Assert


            // Arrange
            const event: any = { button: 0 };
            mouseSelectionWatcher.setSelectedItems(ctrlEvent, item2);
            const event: any = { button: 1 };
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);
            const item4: any = { isSelected: false };

            const items: any[] = [item1, item2, item3];
        it('should return the first item as selected item if selectFirstItem is true', () => {

            const event: any = { button: 0 };
        it('should add the given item to the selection if ctrl is pressed', () => {
        });
        });
            const event: any = { button: 0 };


            const item4: any = { isSelected: false };
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            // Arrange
            const shiftEvent: any = { shiftKey: {} };
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item1);
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            const shiftEvent: any = { shiftKey: {} };
            mouseSelectionWatcher.initialize(items, true);

            mouseSelectionWatcher.initialize(items, false);
            // Assert
            const item1: any = { isSelected: false };
            mouseSelectionWatcher.setSelectedItems(event, item3);
        it('should select only the given item if no modifier keys are pressed, the left mouse button is pressed and 1 item is selected.', () => {

            const item2: any = { isSelected: false };
            const item2: any = { isSelected: false };
    });
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item3);
            const event: any = { button: 0 };

        });
            const items: any[] = [item1, item2, item3];
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);

            // Assert
            expect(mouseSelectionWatcher.selectedItems[1]).toBe(item2);

            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
    describe('setSelectedItems', () => {
            mouseSelectionWatcher.setSelectedItems(shiftEvent, item3);
            mouseSelectionWatcher.initialize(items, false);
            const shiftEvent: any = { shiftKey: {} };
            const item4: any = { isSelected: false };
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item3);
            const item3: any = { isSelected: false };

            expect(mouseSelectionWatcher.selectedItems.length).toEqual(1);
        it('should select only the given item if no modifier keys are pressed, a non-left mouse button is pressed and no item is selected.', () => {
            const item2: any = { isSelected: false };
        it('should select only the given item if no modifier keys are pressed, the left mouse button is pressed and no item is selected.', () => {
            const item4: any = { isSelected: false };
            const items: any[] = [item1, item2, item3, item4];

            // Act
            // Arrange

            const item3: any = { isSelected: false };
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
        it('should select an item range if shift is pressed', () => {


            // Arrange
            const ctrlEvent: any = { ctrlKey: {} };
    describe('initialize', () => {
            // Act
            // Act
describe('MouseSelectionWatcher', () => {

            const item2: any = { isSelected: false };

            const items: any[] = [item1, item2];
            // Act
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
            // Act
            // Arrange

            // Assert

            mouseSelectionWatcher.initialize(items, false);
            // Assert
        it('should return no selected items if selectFirstItem is false', () => {
            mouseSelectionWatcher.setSelectedItems(event, item3);

            // Assert
            expect(mouseSelectionWatcher.selectedItems.length).toEqual(2);
            expect(mouseSelectionWatcher.selectedItems[0]).toBe(item3);
            // Arrange
            const mouseSelectionWatcher: MouseSelectionWatcher = new MouseSelectionWatcher();
        });
