import { describe, it, expect } from 'vitest';
import { stringCalculator } from './string-calculator';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {

        const stringToCalculate = '';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(0);

    })

    it('should return the number for a single number string', () => {
        const stringToCalculate = '1';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(1);
    });

    it('should return the sum of two numbers separated by a comma', () => {
        const stringToCalculate = '1,2';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(3);
    });

    it('should return the sum of multiple numbers separated by commas', () => {
        const stringToCalculate = '1,2,3,4,5';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(15);
    });

    it('should handle new lines as separators', () => {
        const stringToCalculate = '1\n2,3';
        const result = stringCalculator(stringToCalculate);
        expect(result).toBe(6);
    });
});