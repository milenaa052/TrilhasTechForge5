function limparCPF(cpf: string): string {
    return cpf.replace(/\D/g, '');
}

function tamanhoCorreto(cpf: string): boolean {
    return cpf.length === 11;
}

function digitosRepetidos(cpf: string): boolean {
    return /^(\d)\1{10}$/.test(cpf);
}

function calcularDigitoVerificador(cpf: string, pesoInicial: number): number {
    let soma = 0;
    const comprimento = pesoInicial === 10 ? 9 : 10;
    
    for (let i = 0; i < comprimento; i++) {
        soma += parseInt(cpf.charAt(i)) * (pesoInicial - i);
    }
    
    let resto = (soma * 10) % 11;
    return resto === 10 || resto === 11 ? 0 : resto;
}

export function validarCPF(cpf: string): boolean {
    const cpfLimpo = limparCPF(cpf);
    
    if (!tamanhoCorreto(cpfLimpo)) return false;
    if (digitosRepetidos(cpfLimpo)) return false;
    
    const digito1 = calcularDigitoVerificador(cpfLimpo, 10);
    if (digito1 !== parseInt(cpfLimpo.charAt(9))) return false;
    
    const digito2 = calcularDigitoVerificador(cpfLimpo, 11);
    if (digito2 !== parseInt(cpfLimpo.charAt(10))) return false;
    
    return true;
}