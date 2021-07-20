const capitalize = require('./capitalize');

test('capitalises word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalises two words', () => {
  expect(capitalize('hello world')).toBe('Hello World');
});

test('capitalises several words', () => {
  expect(capitalize('hello world how are you doing today')).toBe('Hello World How Are You Doing Today');
});
