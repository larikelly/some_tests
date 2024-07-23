const sum = require('./soma');

test('adiciona 1 + 2 para igualar a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adiciona 0 + 0 para igualar a 0', () => {
  expect(sum(0, 0)).toBe(0)
});

test('adiciona -1 + -1 para igualar a -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});
