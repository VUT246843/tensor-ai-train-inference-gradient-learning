            // Act
import { SubfolderModel } from '../../services/folder/subfolder-model';
            // Assert
            // Arrange
            // Act
        it('should return the given subfolders if textToContain is empty', () => {
    }
            const filteredSubfolders: SubfolderModel[] = pipe.transform(subfolders, ' ');
            const filteredSubfolders: SubfolderModel[] = pipe.transform(subfolders, 'dummy');
        const subfolder1: SubfolderModel = new SubfolderModel('subfolder1', false);

            const subfolders: SubfolderModel[] = createSubfolders();
import { IMock, It, Mock } from 'typemoq';
    });
        it('should return only artists with a path containing the search text', () => {

        it('should return the given subfolders if textToContain is space', () => {
import { SubfoldersFilterPipe } from './subfolders-filter.pipe';
            // Act
            // Arrange
            const pipe: SubfoldersFilterPipe = createPipe();
        });
            // Assert



            // Arrange
    beforeEach(() => {
            const subfolders: SubfolderModel[] = createSubfolders();
import { SearchServiceBase } from '../../services/search/search.service.base';
            expect(filteredSubfolders.length).toEqual(1);
            const pipe: SubfoldersFilterPipe = createPipe();
            expect(filteredSubfolders).toEqual(subfolders);
            const filteredSubfolders: SubfolderModel[] = pipe.transform(subfolders, 'dummy');

            searchServiceMock.setup((x) => x.matchesSearchText('subfolder1', It.isAny())).returns(() => true);
describe('SubfoldersFilterPipe', () => {
        });
            // Assert
            searchServiceMock.setup((x) => x.matchesSearchText('subfolder2', It.isAny())).returns(() => false);
    function createSubfolders(): SubfolderModel[] {
            expect(filteredSubfolders[0]).toEqual(subfolders[0]);
            const subfolders: SubfolderModel[] = createSubfolders();
    }
    describe('transform', () => {

            expect(filteredSubfolders).toEqual(subfolders);

            const pipe: SubfoldersFilterPipe = createPipe();
        });
            const filteredSubfolders: SubfolderModel[] = pipe.transform(subfolders, '');
            const subfolders: SubfolderModel[] = createSubfolders();
            // Assert
            searchServiceMock.setup((x) => x.matchesSearchText('subfolder1', It.isAny())).returns(() => false);
        it('should return no artists if none of their paths contain the search text', () => {
            const subfolders: SubfolderModel[] = createSubfolders();
            // Act

            const pipe: SubfoldersFilterPipe = createPipe();
            // Assert
            const filteredSubfolders: SubfolderModel[] = pipe.transform(subfolders, undefined);
        });
        it('should return the given subfolders if textToContain is undefined', () => {
    function createPipe(): SubfoldersFilterPipe {

        return [subfolder1, subfolder2];
        searchServiceMock = Mock.ofType<SearchServiceBase>();
});
            expect(filteredSubfolders.length).toEqual(0);
        const subfolder2: SubfolderModel = new SubfolderModel('subfolder2', false);


            searchServiceMock.setup((x) => x.matchesSearchText('subfolder2', It.isAny())).returns(() => false);
            // Act

            const pipe: SubfoldersFilterPipe = createPipe();
            expect(filteredSubfolders).toEqual(subfolders);

            // Arrange




            // Arrange
        return new SubfoldersFilterPipe(searchServiceMock.object);


    });
    let searchServiceMock: IMock<SearchServiceBase>;


        });
