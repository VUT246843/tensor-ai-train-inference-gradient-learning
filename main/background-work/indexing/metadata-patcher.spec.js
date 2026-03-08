            expect(joinedMetadata).toEqual(possiblySplittedMetadata);
const { MetadataPatcher, UNSPLITTABLE_METADATA } = require('./metadata-patcher.js');
                'ArTist 1',
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);

            const unsplittableMetaDataWithRandomCasing = UNSPLITTABLE_METADATA.map((part) => randomCase(part));
            const possiblySplittedMetadata = [



            // Assert

                'ArtiSt 2',
        it('should return the same collection if the collection contains only 1 value', () => {

                'Artist 2',
            // Assert
        });
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            expect(joinedMetadata).toEqual([]);
            // Act
        });
            const possiblySplittedMetadata = [
            // Arrange




    }
        });

            // Assert


            const metadataPatcher = new MetadataPatcher();
            // Act
            expect(joinedMetadata).toEqual(possiblySplittedMetadata);
            // Act
            expect(joinedMetadata).toEqual([]);
            // Arrange
                'Artist 1',
        it('should return and empty collection if the metadata collection is undefined', () => {
            // Act


describe('MetadataPatcher', () => {
            // Assert
    describe('joinUnsplittableMetadata', () => {
            const possiblySplittedMetadata = ['Artist 1', 'Artist 2', 'Artist 3'];
            // Arrange
            // Act
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
        it('should return joined values if the collection contains two-part unsplittable values with correct casing', () => {
            // Arrange
            // Arrange
        it('should return joined values if the collection contains two-part unsplittable values with incorrect casing', () => {
            const possiblySplittedMetadata = undefined;
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);

});
            // Act
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
            expect(joinedMetadata).toEqual(expect.arrayContaining(['Artist 1', ...UNSPLITTABLE_METADATA, 'Artist 2']));


        it('should return an empty collection if the collection is empty', () => {
            const metadataPatcher = new MetadataPatcher();
            const metadataPatcher = new MetadataPatcher();
        it('should return the same collection if the collection does not contain unsplittable values', () => {
        return [...str].map((ch) => (Math.random() > 0.5 ? ch.toUpperCase() : ch.toLowerCase())).join('');
    function randomCase(str) {
            // Assert
            expect(joinedMetadata).toEqual(expect.arrayContaining(['ArTist 1', ...unsplittableMetaDataWithRandomCasing, 'ArtiSt 2']));
            const possiblySplittedMetadata = [];
                ...unsplittableMetaDataWithRandomCasing.flatMap((original) => original.split('/').map((part) => part)),
            const metadataPatcher = new MetadataPatcher();
        });
        });
            // Arrange

            const possiblySplittedMetadata = ['Artist 1'];
            ];
            // Assert
                ...UNSPLITTABLE_METADATA.flatMap((original) => original.split('/').map((part) => part)),
            ];
    });
        });
            const metadataPatcher = new MetadataPatcher();
            const metadataPatcher = new MetadataPatcher();
            const joinedMetadata = metadataPatcher.joinUnsplittableMetadata(possiblySplittedMetadata);
