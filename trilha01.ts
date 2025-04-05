interface ConsumoEnergia {
    kWh: number;
    tarifa: number;
    imposto: number;
    bandeira: "verde" | "amarela" | "vermelha";
}

function calcularValorBase(consumo: number, tarifa: number): number {
    return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {

    if(bandeira === "amarela") {
        return consumo * 0.02;
    } else if (bandeira === "vermelha") {
        return consumo * 0.05;
    };

    return 0;
}

function calcularImposto(valor: number, percentualImposto: number): number {
    return valor * (percentualImposto / 100);
}


function calcularDescontoOuAcrescimo(consumo: number, valorTotal: number): number {

    if(consumo <= 100) {
       return valorTotal * 0.95; //Desconto de 5% 
    } else if (consumo > 100 && consumo <= 300) {
        return valorTotal;
    } else {
        return valorTotal * 1.10; //Acréscimo de 10%
    }
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
    const valorBase = calcularValorBase(consumo.kWh, consumo.tarifa);
    const bandeiraTarifaria = calcularAjusteBandeira(consumo.kWh, consumo.bandeira);
    const subTotal = valorBase + bandeiraTarifaria;
    const imposto = calcularImposto(subTotal, consumo.imposto);
    const totalComImposto = subTotal + imposto;
    const valorFinal = calcularDescontoOuAcrescimo(consumo.kWh, totalComImposto)

    return parseFloat(valorFinal.toFixed(2));
}

const consumoCasa1: ConsumoEnergia = {
    kWh: 210,
    tarifa: 0.60,
    imposto: 10,
    bandeira: "amarela"
};

console.log("O valor final da conta de energia é: R$", calcularContaEnergia(consumoCasa1));