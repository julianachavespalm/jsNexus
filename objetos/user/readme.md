# Exemplo de Objeto Complexo em JavaScript

```javascript
let usuario = {
    // Informações pessoais
    nome: 'João Silva',
    idade: 30,
    email: 'joao@example.com',

    // Endereço
    endereco: {
        rua: 'Rua Principal',
        cidade: 'Exemplo City',
        estado: 'Exemplo State',
        cep: '12345-678'
    },

    // Métodos
    saudacao: function() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    },
    atualizarEmail: function(novoEmail) {
        this.email = novoEmail;
        return `O email foi atualizado para: ${this.email}`;
    }
};

// Exemplo de uso
console.log(usuario.saudacao()); // Saída: Olá, meu nome é João Silva e eu tenho 30 anos.
console.log(usuario.endereco.rua); // Saída: Rua Principal
```

### Quando usar um objeto complexo:

- Para representar entidades com múltiplos atributos relacionados, como informações de usuário.
- Para organizar dados e comportamentos relacionados em um único bloco.
- Para encapsular funcionalidades e facilitar a manutenção e extensão do código.

### Quando não usar um objeto complexo:

- Quando os dados não estão relacionados ou não há funcionalidades associadas.
- Quando a estrutura do objeto se torna excessivamente profunda e difícil de compreender.
- Em casos simples, onde um objeto simples é suficiente para representar os dados.
```
