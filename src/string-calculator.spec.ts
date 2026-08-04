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
});