const { calcularImc, classificarImc } = require('./imcCalculator');

describe('IMC Calculator', () => {
    // Testes para calcular IMC
    describe('calcularImc', () => {
        test('deve calcular IMC para peso normal', () => {
            const imc = calcularImc(70, 1.75); // Peso 70kg, Altura 1.75m
            expect(imc).toBeCloseTo(22.86, 2); // IMC deve ser aproximadamente 22.86
        });

        test('deve calcular IMC para desnutrição', () => {
            const imc = calcularImc(50, 1.75); // Peso 50kg, Altura 1.75m
            expect(imc).toBeCloseTo(16.33, 2); // IMC deve ser aproximadamente 16.33
        });

        test('deve calcular IMC para sobrepeso', () => {
            const imc = calcularImc(85, 1.75); // Peso 85kg, Altura 1.75m
            expect(imc).toBeCloseTo(27.76, 2); // IMC deve ser aproximadamente 27.76
        });

        test('deve calcular IMC para obesidade', () => {
            const imc = calcularImc(100, 1.75); // Peso 100kg, Altura 1.75m
            expect(imc).toBeCloseTo(32.65, 2); // IMC deve ser aproximadamente 32.65
        });

        test('deve lançar exceção para peso inválido', () => {
            expect(() => {
                calcularImc(70, 0); // Altura 0m deve lançar exceção
            }).toThrow("Altura deve ser maior que zero.");
        });
    });

    // Testes para classificar IMC
    describe('classificarImc', () => {
        test('deve classificar IMC como desnutrição', () => {
            expect(classificarImc(16.33)).toBe("Desnutrido"); // IMC abaixo de 18.5
        });

        test('deve classificar IMC como peso normal', () => {
            expect(classificarImc(22.86)).toBe("Peso Normal"); // IMC entre 18.5 e 24.9
        });

        test('deve classificar IMC como sobrepeso', () => {
            expect(classificarImc(27.76)).toBe("Sobrepeso"); // IMC entre 25 e 29.9
        });

        test('deve classificar IMC como obesidade', () => {
            expect(classificarImc(32.65)).toBe("Obesidade"); // IMC 30 ou maior
        });
    });
});
