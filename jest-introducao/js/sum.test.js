const sum = require('./sum');

test('properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(-1,3)).toBe(2);
    expect(sum(-3,-3)).toBe(-6);
})