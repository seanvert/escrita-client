import * as Atividades from './Atividades'

test("inteiro aleatório, limite inferior", () => {
			  expect(Atividades.inteiroAleatorio(0, 22)).toBeGreaterThanOrEqual(0);
});

test("inteiro aleatório, limite superior", () => {
			  expect(Atividades.inteiroAleatorio(0, 1)).toBeLessThan(1);
});
