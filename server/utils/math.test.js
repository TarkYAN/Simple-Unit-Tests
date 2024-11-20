const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
}

describe('add()', () => {
    test('finds the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.add(testVars.max, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.add(testVars.min - 2, 1)).toBe(testVars.min);
    });
});

describe('sub()', () => {

    test('find the difference of two numbers', () => {
        expect(mathUtils.sub(10, 5)).toBe(5);
    });
    test('should clamp number to maximum', () => {
        expect(mathUtils.sub(testVars.max + 2, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.sub(testVars.min, 1)).toBe(testVars.min);
    });
});

describe('mul()', () => {
    test('finds the product of two numbers', () => {
        expect(mathUtils.mul(5,10)).toBe(50);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.mul(1, testVars.max + 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.mul(testVars.min - 1, testVars.min)).toBe(testVars.min * testVars.min);
    });
})


