const subtract = require('./subtract');

test('properly adds two numbers', () => {
    expect(subtract(1,2)).toBe(-1);
    expect(subtract(-1,3)).toBe(-4);
    expect(subtract(-3,-3)).toBe(0);
})