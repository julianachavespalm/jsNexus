# Objetos em JavaScript: Resumo

## Introdução

Os objetos em JavaScript são estruturas fundamentais que permitem armazenar dados complexos e funcionalidades em um único lugar. Neste guia, exploraremos os conceitos fundamentais dos objetos em JavaScript e como utilizá-los de forma eficaz.

## Criando Objetos

Em JavaScript, os objetos são criados usando a sintaxe de chaves `{}` para delimitar o início e o fim do objeto. Cada par chave-valor é separado por vírgula.

### Exemplo 1: criação básica de um objeto

```javascript
let pessoa = {
    nome: 'Alice',
    idade: 25,
    cidade: 'Exemplo City'
};
```

### Exemplo 2: exemplo de um objeto com um objeto aninhado

```javascript
let pessoa = {
    nome: 'Alice',
    idade: 25,
    endereco: {
        rua: 'Rua Principal',
        cidade: 'Exemplo City',
        pais: 'Exemplo Country'
    }
};
```

## Acessando Propriedades

As propriedades de um objeto podem ser acessadas usando a notação de ponto `objeto.propriedade` ou a notação de colchetes `objeto['propriedade']`.

### Acessando propriedades do Exemplo 1

```javascript
console.log(pessoa.nome); // Saída: Alice
console.log(pessoa['idade']); // Saída: 25
```

### Acessando propriedades do Exemplo 2

```javascript
console.log(pessoa.endereco.rua); // Saída: Rua Principal
console.log(pessoa.endereco.cidade); // Saída: Exemplo City
console.log(pessoa.endereco.pais); // Saída: Exemplo Country
```

## Adicionando e Alterando Propriedades

Novas propriedades podem ser adicionadas a um objeto ou propriedades existentes podem ser alteradas atribuindo valores a elas.

```javascript
pessoa.profissao = 'Engenheira'; // Adicionando uma nova propriedade
pessoa.idade = 26; // Alterando o valor de uma propriedade existente
```

## Removendo Propriedades

A palavra-chave `delete` pode ser usada para remover uma propriedade de um objeto.

```javascript
delete pessoa.cidade; // Removendo a propriedade 'cidade' do objeto pessoa
```

## Iterando sobre Propriedades

Você pode iterar sobre as propriedades de um objeto usando loops `for...in`.

```javascript
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

## Objetos e Referências

Em JavaScript, os objetos são passados por referência. Isso significa que quando um objeto é atribuído a uma variável, a variável armazena uma referência ao objeto, não uma cópia do objeto em si.

```javascript
let pessoa2 = pessoa; // pessoa2 agora referencia o mesmo objeto que pessoa
pessoa2.nome = 'Bob'; // Isso altera o nome tanto em pessoa quanto em pessoa2
```

## Métodos em Objetos

Os objetos em JavaScript podem conter funções, chamadas de métodos, como propriedades. Eles permitem adicionar comportamentos aos objetos.

```javascript
let pessoa = {
    nome: 'Alice',
    idade: 25,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.cumprimentar(); // Saída: Olá, meu nome é Alice e eu tenho 25 anos.
```

## Encapsulamento

Os objetos em JavaScript podem ser usados para encapsular dados e comportamentos relacionados em um único bloco, promovendo a modularidade e organização do código.

## Conclusão

Os objetos em JavaScript são poderosos e versáteis, permitindo representar dados e funcionalidades de forma estruturada. Este guia oferece uma visão completa dos conceitos fundamentais de criação, acesso, adição, remoção, iteração, métodos e encapsulamento em objetos JavaScript.

## Autora

Juliana Chaves Palm
