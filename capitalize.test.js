const capitalize = require('./capitalize');

test('capitalises word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalises two words', () => {
  expect(capitalize('hello world')).toBe('Hello World');
});
