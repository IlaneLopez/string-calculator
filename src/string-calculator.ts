export function stringCalculator(input: string): number {
    let delimiter = ',';
    let sanitizedInput = input;
    if (input.startsWith('//')) {
        const delimiterEndIndex = input.indexOf('\n');
        const customDelimiter = input.substring(2, delimiterEndIndex);
        delimiter = customDelimiter;
        sanitizedInput = input.substring(delimiterEndIndex + 1);
        console.log(`Custom delimiter detected: ${customDelimiter}`);
        console.log(`Sanitized input after removing custom delimiter: ${sanitizedInput}`);
    }
    console.log(`Using delimiter: ${delimiter}`);
    sanitizedInput = sanitizedInput.replace(/\n/g, delimiter);
    console.log(`Sanitized input after replacing new lines: ${sanitizedInput}`);
    return sanitizedInput.split(delimiter).reduce((acc, curr) => acc + Number(curr), 0);

}