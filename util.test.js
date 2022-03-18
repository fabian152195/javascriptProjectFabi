const { test, expect } = require('@jest/globals');
const { generateText, Sumatory } = require('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test(
    'Should display the sumatory between number A and number B', () => {
        const number = Sumatory(23,24);
        expect(number).toBe(47);
    }
)