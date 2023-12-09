// funcoesObjeto.js

// Funções relacionadas a objetos
const criarObjeto = (nome, idade) => {
    return {
        nome,
        idade,
        saudacao() {
            return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
        }
    };
};

const adicionarPropriedade = (objeto, chave, valor) => {
    objeto[chave] = valor;
};

// Função principal
function main() {
    const pessoa = criarObjeto('Alice', 30);
    console.log(pessoa.saudacao()); // Saída: Olá, eu sou Alice e tenho 30 anos.
    adicionarPropriedade(pessoa, 'profissao', 'Engenheira');
    console.log(pessoa); // Saída: { nome: 'Alice', idade: 30, profissao: 'Engenheira', saudacao: [Function: saudacao] }
}

// Exportação das funções e da função principal
export { criarObjeto, adicionarPropriedade, main };
