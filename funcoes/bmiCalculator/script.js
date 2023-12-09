// Função para calcular o IMC (Índice de Massa Corporal)
function bmiCalculator(weight, height) {
    // Fórmula do IMC: peso / altura^2
    return weight / Math.pow(height, 2);
}

// Função para classificar o IMC em categorias
function bmiClassification(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'; // Retorna se o IMC é menor que 18.5
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal'; // Retorna se o IMC está entre 18.5 e 24.9
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'; // Retorna se o IMC está entre 25 e 29.9
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso'; // Retorna se o IMC está entre 30 e 39.9
    } else {
        return 'Obesidade grave'; // Retorna se o IMC é maior ou igual a 40
    }
}

// Função principal que realiza o cálculo do IMC e exibe os resultados
function main() {
    // Peso e altura fornecidos para o cálculo do IMC
    const weight = 75;
    const height = 1.75;

    // Chamada da função bmiCalculator para calcular o IMC
    const imc = bmiCalculator(weight, height);

    // Exibe o valor do IMC no console
    console.log(imc);

    // Chama a função bmiClassification para classificar o IMC e exibe a classificação no console
    console.log(bmiClassification(imc));
}

// Chamada da função principal para iniciar o programa
main();
