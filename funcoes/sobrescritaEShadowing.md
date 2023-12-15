## Sobrescrita (Overriding)

### O que é Sobrescrita?

- Sobrescrita ocorre quando uma subclasse (ou classe derivada) redefine um método que já existe na classe pai (ou superclasse).

### Como Funciona?

- Quando um método é chamado em um objeto da subclasse, o interpretador procura por essa implementação na própria subclasse.
- Se a subclasse tiver uma implementação desse método, ela será usada em vez da implementação da superclasse.

### Exemplo Prático

```javascript
class Animal {
    som() {
        return 'Som genérico de um animal';
    }
}

class Gato extends Animal {
    som() {
        return 'Miau!';
    }
}

let gato = new Gato();
console.log(gato.som()); // Saída: Miau!
```

## Shadowing

### O que é Shadowing?

- Shadowing ocorre quando uma variável local tem o mesmo nome que uma variável de escopo superior (como uma variável global ou de escopo de função).

### Como Funciona?

- Uma variável local "sombra" uma variável de escopo superior com o mesmo nome, ocultando-a dentro do escopo local onde foi definida.

### Exemplo Prático

```javascript
let variavel = 'global';

function exemplo() {
    let variavel = 'local';
    console.log(variavel); // Saída: local
}

exemplo();
console.log(variavel); // Saída: global
```

## Considerações Finais

- Sobrescrita é comumente usada em herança para personalizar o comportamento de métodos em classes derivadas.
- Shadowing pode criar confusão se não for gerenciado adequadamente, especialmente em contextos complexos de escopo.
