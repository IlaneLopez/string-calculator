export function stringCalculator(input: string): number {
    const sanitizedInput = input.replace(/\n/g, ',');
    return sanitizedInput.split(',').reduce((acc, curr) => acc + Number(curr), 0);

}