# Importação em JavaScript: resumo

A importação em JavaScript permite que você traga funcionalidades de outros arquivos (módulos) para o seu código. Isso facilita a organização, reutilização e manutenção do código, especialmente em projetos maiores.

## Módulos em JavaScript

Os módulos são arquivos JavaScript que contêm código encapsulado e exportam funcionalidades específicas para serem usadas em outros arquivos.

### Sintaxe de Exportação

Existem várias maneiras de exportar funcionalidades de um módulo em JavaScript:

#### Exportação Nomeada
```javascript
// No arquivo modulo.js
export function soma(a, b) {
    return a + b;
}

export const PI = 3.1416;
```

#### Exportação Padrão (apenas uma por módulo)
```javascript
// No arquivo outroModulo.js
export default function saudacao(nome) {
    return `Olá, ${nome}!`;
}
```

## Sintaxe de Importação

### Importação de Funcionalidades Nomeadas
```javascript
import { soma, PI } from './modulo.js';

console.log(soma(5, 3)); // Saída: 8
console.log(PI); // Saída: 3.1416
```

### Importação de Funcionalidade Padrão
```javascript
import saudacao from './outroModulo.js';

console.log(saudacao('Mundo')); // Saída: Olá, Mundo!
```

### Importação de Todos os Exportados (Nomeados) como um Objeto
```javascript
import * as modulo from './modulo.js';

console.log(modulo.soma(2, 4)); // Saída: 6
console.log(modulo.PI); // Saída: 3.1416
```

### Renomeando Funcionalidades Importadas
```javascript
import { soma as somarNumeros } from './modulo.js';

console.log(somarNumeros(8, 9)); // Saída: 17
```

## Caminhos de Importação

Os caminhos de importação podem ser relativos ou absolutos, permitindo importar módulos de diferentes diretórios.

### Importação Relativa
```javascript
import { func } from './meuDiretorio/modulo.js';
```

### Importação Absoluta
```javascript
import { func } from '/caminho/absoluto/para/meuDiretorio/modulo.js';
```

## Considerações Finais

- A importação em JavaScript é essencial para modularizar e organizar o código.
- A sintaxe de exportação e importação permite a flexibilidade na seleção e renomeação de funcionalidades.
- Os caminhos de importação podem ser relativos ou absolutos, facilitando o acesso aos módulos.

Utilize esses recursos para modularizar seu código, facilitar a manutenção e promover a reutilização de funcionalidades em seus projetos JavaScript.

## Autora
Juliana