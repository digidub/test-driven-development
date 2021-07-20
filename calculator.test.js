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

test('only accepts numbers', () => {
  expect(calculator('hi', 5, 'divide')).toBe('ERROR: at least one operand is not in the right format');
});

test('only accepts numbers', () => {
  expect(calculator(3, 'chicken', 'divide')).toBe('ERROR: at least one operand is not in the right format');
});

test('checks for correct operators', () => {
  expect(calculator(3, 4, 'egg')).toBe('ERROR: unknown operator provided');
});
