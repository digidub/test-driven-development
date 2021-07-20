const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator(2, 4, 'add')).toBe(6);
});
