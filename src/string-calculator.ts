export function stringCalculator(input: string): number {

    return input.split(',').reduce((acc, curr) => acc + Number(curr), 0);

}