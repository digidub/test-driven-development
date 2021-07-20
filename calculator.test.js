const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator(2, 4, 'add')).toBe(6);
});

test('subtracts two numbers', () => {
  expect(calculator(8, 2, 'subtract')).toBe(6);
});

test('multiplies two numbers', () => {
  expect(calculator(2, 3, 'multiply')).toBe(6);
});

test('divides two numbers', () => {
  expect(calculator(100, 5, 'divide')).toBe(20);
});
