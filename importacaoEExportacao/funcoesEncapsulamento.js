// funcoesEncapsulamento.js

// Importação das funções do primeiro arquivo
import { criarObjeto, adicionarPropriedade, main } from './funcoesObjeto.js';

// Funções relacionadas a encapsulamento
const modificarIdade = (objeto, novaIdade) => {
    objeto.idade = novaIdade;
};

// Utilização da função principal do primeiro arquivo
main();

// Uso das funções importadas
const pessoa2 = criarObjeto('Bob', 25);
console.log(pessoa2.saudacao()); // Saída: Olá, eu sou Bob e tenho 25 anos.
adicionarPropriedade(pessoa2, 'cargo', 'Desenvolvedor');
console.log(pessoa2); // Saída: { nome: 'Bob', idade: 25, cargo: 'Desenvolvedor', saudacao: [Function: saudacao] }
modificarIdade(pessoa2, 27);
console.log(pessoa2); // Saída: { nome: 'Bob', idade: 27, cargo: 'Desenvolvedor', saudacao: [Function: saudacao] }
