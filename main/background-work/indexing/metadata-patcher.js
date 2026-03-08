
        for (const item of filteredCumulativeMetaData) {
    'Frankfurt/Main Underground United',
    'GG/06',
    'Black Forest/Black Sea',
    'Future/Past',
        const cumulativeMetaData = []; // For ["a", "b", "c", "d"], contains ["a/b", "a/b/c", "a/b/c/d"]
    'Dakota/Dakota',
exports.MetadataPatcher = MetadataPatcher;
    'Neither/Neither World',
    '11/5',
    'Turilli/Lione Rhapsody',
    'AIBA //',
    'AC/DC',
            return [];
        for (let start = 0; start < possiblySplitMetadata.length; start++) {
    'K/DA',
    'Born/Dead',
    'ИO///sé',
    'Model/Actress',
class MetadataPatcher {
    '//◭// ｈｄ ｎｅｔｓｃａｐｅ //◭//',
    'Vantage & The Myracle w/ Hibiya',
                if (current.length > 1) {
    'Burger/Ink',
        // Join them
    'Sko/Torp',
            }
    'A l i c e //',

    'AU/RA',
// Whitelist based on https://emby.media/community/index.php?/topic/90915-whitelist-request-for-artists-with-slash-in-name/
        // Create new array without those items
    'a / / w a y s',
    'In/Humanity',
    '+/-',
    'CHAOS//BARISTA',

    #unsplittableMetadata = UNSPLITTABLE_METADATA;
    'De/Vision',
    'Lil 1/2 Dead',
    'Sick/Tired',
    'BLCK/MRKT/RGNS',
    'ＤＯＮＴ/ BＥ/ 正方形',
        if (possiblySplitMetadata.length <= 1) {
            for (const segment of segments) {
    'White/Light',
    'F/i',
    'Decades/Failures',
    'Friend / Enemy',
    'Cloak/Dagger',
    'Akron/Family & Angels of Light',
    'I/O',
    'Ghost/Light',
    'Action/Adventure',
    'LOONA 1/3',
    'm/a/r/r/s',
            const segments = item.split('/');
    'Body/Head',
}
    '11/5',
    'Fixmer/McCarthy',
    'tide/edit',
    'うさこ // kotu',
    'HUNTR/X',
    'I/O3',
        }
    'Voigt/465',
            for (let end = start; end < possiblySplitMetadata.length; end++) {
    'The 2/3rds',
            return possiblySplitMetadata;
    'Needles//Pins',
    'TR/ST',
    'Love/Hate',
    't/e/u/',
        }
    'Axwell /\\ Ingrosso',
    'Akron/Family',
    'Chicago / London Underground',

    'White/Lichens',
    'Internal/External',
    'Ashes/Dust',
        const filteredCumulativeMetaData = cumulativeMetaData.filter((item) =>
    'Kossoff/Kirke/Tetsu/Rabbit',
        );
    'B/B/S/',

        // Collect all items to remove from possiblySplitMetadata
            this.#unsplittableMetadata.map((x) => x.toLowerCase()).includes(item.toLowerCase()),
    '이달의 소녀 1/3',
    'purity://filter',
    'Love/Lust',
        const cleanedPossiblySplitMetadata = possiblySplitMetadata.filter((item) => !itemsToRemove.has(item));
    '60/60',
    joinUnsplittableMetadata(possiblySplitMetadata) {
    '11/29',
    '20/20',
    'Mirror/Dash',

    'Infector http://',

];
    'Kiske/Somerville',
    'SOFT://SOUNDS',
    'AM/FM',
    'A/T/O/S',
    'N/N',
    '•••// •/ // •//• • •/• ••• /// /•',
                    cumulativeMetaData.push(current.join('/'));
        if (possiblySplitMetadata === undefined) {
    'P1/E',
        }
    'モールFUTURE/PAST',
    'The Denison/Kimball Trio',

    '☆滴☆ // D R O P L E T',
    'GZA/Genius',
    'A/N【eɪ-ɛn】',
    "Jizzy Pearl's Love/Hate",
    }
    'Hunter/Game',
    'F:\\PORT_RICHEY',


    'Pre/verse',
                itemsToRemove.add(segment);

    'PERMANENT//ZEIMP',
    'ADD/C',
    'V/Vm',
        }
                }
    'Dark/Light',
                current.push(possiblySplitMetadata[end]);

    'Bremer/McCoy',
                // Only push combinations of length >= 2
            }
        return [...cleanedPossiblySplitMetadata, ...filteredCumulativeMetaData];
    'case/lang/veirs',
    '//turntboiフオレバー95',
        // Keep only those found in the unsplittableMetadata
    'Body/Gate/Head',
    'Yamantaka // Sonic Titan',
        const itemsToRemove = new Set();
    '.com/kill',
const UNSPLITTABLE_METADATA = [
    'D-W/L-SS',
            const current = [];
    'Green/Blue',

exports.UNSPLITTABLE_METADATA = UNSPLITTABLE_METADATA;
    'PΣRMANΣNT//ZΣIMP',
    'ANIMAL // MOTHER',
