class Carro {
    // Construtor da classe Carro que define as propriedades iniciais do objeto
    constructor(marca, modelo, ano) {
        this.marca = marca; // Define a marca do carro
        this.modelo = modelo; // Define o modelo do carro
        this.ano = ano; // Define o ano do carro
        this.velocidade = 0; // Inicializa a velocidade do carro como 0
    }

    // Método para acelerar o carro
    acelerar() {
        this.velocidade += 10; // Incrementa a velocidade em 10 km/h
        console.log(`O carro está agora a ${this.velocidade} km/h.`);
    }

    // Método para frear o carro
    frear() {
        this.velocidade -= 5; // Reduz a velocidade em 5 km/h
        console.log(`O carro está agora a ${this.velocidade} km/h.`);
    }
}
