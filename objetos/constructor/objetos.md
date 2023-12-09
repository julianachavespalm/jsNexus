# Construtores em JavaScript

Os construtores em JavaScript são métodos especiais utilizados para criar e inicializar objetos quando uma classe é instanciada. Este guia aborda detalhes sobre construtores, seus usos, melhores práticas e quando aplicá-los.

## Objetivo

O objetivo principal de um construtor é inicializar os objetos criados a partir de uma classe com valores padrão ou dados fornecidos no momento da instanciação.

## Funcionalidades

### Sintaxe

Em JavaScript, o construtor é declarado usando o método especial `constructor`.

```javascript
class Carro {
    constructor(marca = 'Sem Marca', modelo = 'Sem Modelo', ano = 'Sem Ano') {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }
}
```

### Atribuição de Valores Padrão

Atribuir valores padrão diretamente na declaração dos parâmetros do construtor torna esses atributos opcionais durante a instanciação, mas eles terão um valor predefinido se não forem fornecidos.

### Lançar Erros

Outra maneira de lidar com a obrigatoriedade dos atributos é através da validação no construtor. Se valores obrigatórios não forem passados durante a criação do objeto, pode-se lançar um erro para indicar a necessidade desses valores.

```javascript
class Produto {
    constructor(nome, preco) {
        if (nome === undefined || preco === undefined) {
            throw new Error('Nome e preço são obrigatórios!');
        }

        this.nome = nome;
        this.preco = preco;
    }
}
```

## Quando Aplicar

- **Inicialização de Objetos com Valores Padrão**: Use quando deseja fornecer valores padrão para os atributos, permitindo que sejam opcionais durante a instanciação.
  
- **Validação de Parâmetros Obrigatórios**: Utilize para garantir que certos parâmetros obrigatórios sejam passados durante a criação do objeto.

## Quando Não Aplicar

- **Classes Simples ou Flexíveis**: Em casos em que a flexibilidade na inicialização dos atributos não é necessária ou quando a validação detalhada pode ser realizada posteriormente no código.

## Exemplos Práticos

1. **Representação de Objetos Complexos**: Classes que representam entidades complexas, como Carros, Usuários, Pedidos, se beneficiam dos construtores para inicializar suas propriedades.
  
2. **Validação de Dados e Requisitos Obrigatórios**: Use o construtor para garantir que dados essenciais sejam fornecidos ao criar objetos.

## Boas Práticas

- **Clareza e Documentação**: Se optar por tornar alguns atributos obrigatórios, documente isso claramente na descrição da classe.
  
- **Simplicidade na Lógica do Construtor**: Mantenha a lógica do construtor simples e focada na inicialização dos atributos.

## Autora
Juliana Chaves Palm
