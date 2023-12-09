class Carro {
    constructor(placa, cor, consumoMedioCombustivel) {
        this.placa = placa;
        this.cor = cor;
        this.consumoMedioCombustivel = consumoMedioCombustivel;
    }

    calcularGastoViagem(quilometros, precoCombustivel) {
        return this.consumoMedioCombustivel * quilometros * precoCombustivel;
    }
}

// Exemplo de uso da classe Carro
let meuCarro = new Carro('ABC1234', 'Azul', 12); // placa, cor, consumoMedioCombustivel

let precoPorLitro = 5; // Preço do combustível por litro
let distanciaPercorrida = 200; // Distância em quilômetros

let gastoViagem = meuCarro.calcularGastoViagem(distanciaPercorrida, precoPorLitro);
console.log(`O gasto total da viagem será de R$ ${gastoViagem.toFixed(2)}.`);
