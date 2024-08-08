const numPar = require('./par');

describe('Função numPar', () => {
    test('deve retornar true para 2', () => {
        expect(isEven(2)).toBe(true);
    });

    test('deve retornar false para 3', () => {
        expect(isEven(3)).toBe(false);
    });

    test('deve retornar true para 0', () => {
        expect(isEven(0)).toBe(true);
    });

    test('deve retornar true para -4', () => {
        expect(isEven(-4)).toBe(true);
    });
});

