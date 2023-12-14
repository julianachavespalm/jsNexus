# Hoisting em JavaScript

## Introdução

O hoisting é um comportamento peculiar no JavaScript que pode causar confusão em desenvolvedores, mas compreendê-lo é fundamental para escrever código mais claro e prevenir erros inesperados.

## O que é Hoisting?

Hoisting é o processo em que o JavaScript move declarações de variáveis e funções para o topo do seu escopo durante a fase de compilação, antes da execução do código. No entanto, apenas as declarações são elevadas, não as inicializações.

Por exemplo:

```javascript
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10
```

O código acima parece que deveria resultar em um erro, mas devido ao hoisting, a declaração da variável `myVar` é movida para o topo do escopo, fazendo com que `myVar` seja considerada como declarada, mas não inicializada, quando é utilizada antes da atribuição de valor.

## Comportamento das Funções

No caso de funções declaradas, elas são completamente elevadas, o que significa que podem ser chamadas antes da sua declaração no código:

```javascript
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

A declaração da função é elevada para o topo do seu escopo, tornando-a acessível antes mesmo da sua definição no código.

## Variáveis let e const

Ao contrário de `var`, as declarações de variáveis usando `let` e `const` não são completamente elevadas. Elas sofrem o "temporal dead zone", onde existem, mas não podem ser acessadas até a linha em que são declaradas.

## Boas Práticas

Para evitar comportamentos inesperados de hoisting e escrever código mais claro:

1. Declare variáveis no início do escopo.
2. Evite depender do hoisting para garantir clareza no código.

Compreender o hoisting é essencial para escrever código JavaScript robusto e evitar erros difíceis de rastrear.

## Conclusão

O hoisting é um comportamento intrínseco do JavaScript que eleva declarações de variáveis e funções para o topo do escopo durante a fase de compilação. Compreender como o hoisting funciona é crucial para escrever código mais legível e evitar erros sutis.
