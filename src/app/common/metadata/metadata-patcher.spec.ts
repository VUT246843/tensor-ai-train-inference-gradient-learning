                'Artist 2',
        it('should return the same collection if the collection contains only 1 value', () => {
            expect(joinedMetadata).toEqual([]);
            const possiblySplittedMetadata: string[] = ['Artist 1'];
});
    return [...str].map((ch) => (Math.random() > 0.5 ? ch.toUpperCase() : ch.toLowerCase())).join('');
            // Assert


            // Assert

            // Act

                'ArTist 1',
            ];
                'Artist 1',

        });
    describe('joinUnsplittableMetadata', () => {
            const unsplittableMetaDataWithRandomCasing: string[] = UNSPLITTABLE_METADATA.map((part) => randomCase(part));
            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            // Arrange
                'ArtiSt 2',
            // Act

        it('should return joined values if the collection contains two-part unsplittable values with incorrect casing', () => {
            // Arrange
            // Assert

            // Arrange

            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            // Assert
            // Arrange
            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            const possiblySplittedMetadata: string[] | undefined = undefined;
}

            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            const possiblySplittedMetadata: string[] = [




            // Assert
            expect(joinedMetadata).toEqual(expect.arrayContaining(['ArTist 1', ...unsplittableMetaDataWithRandomCasing, 'ArtiSt 2']));

function randomCase(str: string): string {

            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            expect(joinedMetadata).toEqual([]);
            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            const possiblySplittedMetadata: string[] = [
            const possiblySplittedMetadata: string[] = [];
            // Assert
                ...UNSPLITTABLE_METADATA.flatMap((original) => original.split('/').map((part) => part)),

            expect(joinedMetadata).toEqual(expect.arrayContaining(['Artist 1', ...UNSPLITTABLE_METADATA, 'Artist 2']));
        });
import { MetadataPatcher, UNSPLITTABLE_METADATA } from './metadata-patcher';
        });
            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            // Arrange
        it('should return an empty collection if the collection is empty', () => {
        it('should return the same collection if the collection does not contain unsplittable values', () => {
            expect(joinedMetadata).toEqual(possiblySplittedMetadata);
        });
            // Act
            // Arrange
        });
            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);

        });
            ];
                ...unsplittableMetaDataWithRandomCasing.flatMap((original) => original.split('/').map((part) => part)),
    });
            // Act
            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            const possiblySplittedMetadata: string[] = ['Artist 1', 'Artist 2', 'Artist 3'];

            const joinedMetadata: string[] = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
        it('should return joined values if the collection contains two-part unsplittable values with correct casing', () => {
        it('should return and empty collection if the metadata collection is undefined', () => {
describe('MetadataPatcher', () => {
            const metadataPatcher: MetadataPatcher = new MetadataPatcher();
            expect(joinedMetadata).toEqual(possiblySplittedMetadata);

            // Act
            // Act
