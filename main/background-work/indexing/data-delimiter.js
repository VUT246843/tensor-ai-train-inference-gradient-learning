    static delimiter = ';';

exports.DataDelimiter = DataDelimiter;
        return result.join('');
            const parts = item
        if (!Array.isArray(stringArray) || stringArray.length === 0) {
                .map((x) => x.trim()) // Trim whitespace
                .split(';') // Split by semicolon
                .filter((x) => x !== ''); // Remove empty strings
}
        return `${this.delimiter}${originalString}${this.delimiter}`;
            for (const part of parts) {
                result.push(this.addDelimiters(part));
class DataDelimiter {
        }
            }

        }
        for (const item of stringArray) {

    static addDelimiters(originalString) {

            return '';

    }
    static toDelimitedString(stringArray) {
    }
        const result = [];


