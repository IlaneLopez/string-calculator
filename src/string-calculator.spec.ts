import { describe, it, expect } from 'vitest';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {

        const stringToCalculate = '';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(0);

    })
    it('should return the sum of one or two numbers separated by a comma', () => {
        const stringToCalculate = '1,2';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(3);

    })
})