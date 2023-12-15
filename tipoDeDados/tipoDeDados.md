# Diferenças entre `boolean`, `null`, `undefined`, `number`, `symbol` e Objetos em JavaScript

## 1. `boolean`

`boolean` é um tipo de dado primitivo em JavaScript que representa um valor lógico. Pode ser `true` ou `false`, indicando verdadeiro ou falso, respectivamente. É frequentemente utilizado em expressões condicionais e operações lógicas.

Exemplo:
```javascript
let verdadeiro = true;
let falso = false;
```

## 2. `null`

`null` é um valor especial em JavaScript que indica a ausência intencional de um valor. Significa que a variável está definida, mas não tem valor ou representa a ausência de valor.

Exemplo:
```javascript
let valorNulo = null;
```

## 3. `undefined`

`undefined` é outro valor especial em JavaScript que indica que uma variável foi declarada, mas ainda não foi atribuída com um valor. É o valor padrão atribuído a uma variável que não foi inicializada.

Exemplo:
```javascript
let valorIndefinido;
console.log(valorIndefinido); // Saída: undefined
```

## 4. `number`

`number` é um tipo de dado em JavaScript que representa números. Pode ser usado para representar números inteiros ou de ponto flutuante.

Exemplo:
```javascript
let numeroInteiro = 10;
let numeroDecimal = 3.14;
```

## 5. `symbol`

`symbol` é um tipo de dado primitivo em JavaScript introduzido no ECMAScript 6. Cada valor `symbol` é único e imutável, muitas vezes utilizado como identificador exclusivo em objetos.

Exemplo:
```javascript
let simbolo = Symbol('descricao');
let outroSimbolo = Symbol('descricao');
console.log(simbolo === outroSimbolo); // Saída: false (símbolos são únicos)
```

## 6. Objetos

Objetos em JavaScript são estruturas de dados que permitem armazenar diversos pares chave-valor, representando uma coleção de propriedades. São usados para armazenar dados mais complexos e estruturados.

Exemplo:
```javascript
let pessoa = {
    nome: 'Maria',
    idade: 30,
    profissao: 'Programadora'
};
```

## Diferenças e Capacidade de Mudar Atribuições

Os tipos primitivos (`boolean`, `null`, `undefined`, `number`, `symbol`) são imutáveis, ou seja, uma vez que são definidos, seus valores não podem ser alterados.

Por outro lado, os objetos em JavaScript são mutáveis, o que significa que suas propriedades podem ser alteradas após a criação.

Exemplo:
```javascript
let objeto = { chave: 'valor' };
objeto.chave = 'novo valor'; // Propriedade do objeto pode ser alterada
```
