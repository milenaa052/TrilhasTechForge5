import { validarCPF } from "../trilha03"

describe("validarCPF", () => {
    test("Deve retornar true para um CPF válido", () => {
        expect(validarCPF("529.982.247-25")).toBe(true);
        expect(validarCPF("52998224725")).toBe(true);
    });

    test("Deve retornar false para um CPF com dígitos verificadores incorretos", () => {
        expect(validarCPF("529.982.247-20")).toBe(false);
        expect(validarCPF("52998224720")).toBe(false);
    });

    test("Deve retornar false para um CPF com formato incorreto (menos de 11 dígitos)", () => {
        expect(validarCPF("1234567890")).toBe(false);
        expect(validarCPF("529.982.247-2")).toBe(false);
    });

    test("Deve retornar false para um CPF com formato incorreto (caracteres não numéricos)", () => {
        expect(validarCPF("ABC.DEF.GHI-JK")).toBe(false);
        expect(validarCPF("529a8224725")).toBe(false);
    });

    test("Deve retornar false para um CPF com todos dígitos iguais", () => {
        expect(validarCPF("111.111.111-11")).toBe(false);
        expect(validarCPF("22222222222")).toBe(false);
    });

    test("Deve retornar false para string vazia", () => {
        expect(validarCPF("")).toBe(false);
    });
});