const { calculateImc: calcularImc, classifyImc } = require('./imcCalculator');

test('calcular IMC peso normal', () => {
    const imc = calcularImc(70, 1.75); // Peso 70kg, Altura 1.75m
    expect(imc).toBeCloseTo(22.86, 2); // IMC deve ser aproximadamente 22.86
});

test('calculate IMC desnutrição', () => {
    const imc = calcularImc(50, 1.75); // Peso 50kg, Altura 1.75m
    expect(imc).toBeCloseTo(16.33, 2); // IMC deve ser aproximadamente 16.33
});

test('calculate IMC acima do peso', () => {
    const imc = calcularImc(85, 1.75); // Peso 85kg, Altura 1.75m
    expect(imc).toBeCloseTo(27.76, 2); // IMC deve ser aproximadamente 27.76
});

test('calculate IMC obesidade', () => {
    const imc = calcularImc(100, 1.75); // Peso 100kg, Altura 1.75m
    expect(imc).toBeCloseTo(32.65, 2); // IMC deve ser aproximadamente 32.65
});

test('calculate IMC peso invalido', () => {
    expect(() => {
        calcularImc(70, 0); // Altura 0m deve lançar exceção
    }).toThrow("Height must be greater than zero.");
});

test('classify IMC desnutrição', () => {
    expect(classifyImc(16.33)).toBe("Desnutrido"); // IMC abaixo de 18.5
});

test('classify IMC peso normal', () => {
    expect(classifyImc(22.86)).toBe("Peso Normal"); // IMC entre 18.5 e 24.9
});

test('classify IMC acima do peso', () => {
    expect(classifyImc(27.76)).toBe("Sobrepeso"); // IMC entre 25 e 29.9
});

test('classify IMC obesidade', () => {
    expect(classifyImc(32.65)).toBe("Obesidade"); // IMC 30 ou maior
});
