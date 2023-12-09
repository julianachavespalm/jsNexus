# Exportação em JavaScript: resumo

A exportação moderna em JavaScript oferece métodos versáteis para compartilhar funcionalidades entre módulos, proporcionando uma melhor organização e reutilização de código. Vamos explorar as práticas mais recentes de exportação.

## Exportação Padrão e Nomeada

### Exportação Padrão
```javascript
// arquivo ModuloPadrao.js
const funcaoPadrao = () => { /* ... */ };
export default funcaoPadrao;
```

### Exportação Nomeada
```javascript
// arquivo ModuloNomeado.js
export const funcaoNomeada1 = () => { /* ... */ };
export const funcaoNomeada2 = () => { /* ... */ };
```

### Importação Nomeada e Padrão
```javascript
// arquivo index.js
import FuncaoPadrao from './ModuloPadrao.js';
import { funcaoNomeada1, funcaoNomeada2 } from './ModuloNomeado.js';
```

## Exportação com Renomeação

### Renomeando na Exportação
```javascript
// arquivo Modulo.js
const funcao = () => { /* ... */ };
export { funcao as novaFuncao };
```

### Renomeando na Importação
```javascript
// arquivo index.js
import { novaFuncao as outraFuncao } from './Modulo.js';
```

## Exportação por Associação
```javascript
// arquivo Modulo.js
class MinhaClasse { /* ... */ }
export { MinhaClasse as Classe };
```

## Exportação Condicional
```javascript
// arquivo Modulo.js
if (condicao) {
  export const algo = 'algo';
} else {
  export const outraCoisa = 'outra coisa';
}
```

## Exportação Dinâmica
```javascript
// arquivo Modulo.js
export * from './OutroModulo.js';
```

## Exportação de Valores Dinâmicos
```javascript
// arquivo Modulo.js
export { algo } from './OutroModulo.js';
export { variavel as default } from './OutroModulo.js';
```

## Considerações Finais

A exportação moderna em JavaScript oferece uma gama de possibilidades para exportar funcionalidades, variáveis e objetos entre módulos. Essas práticas, baseadas nos padrões ES6, são fundamentais para uma organização eficaz do código.

Utilize essas técnicas de exportação de acordo com a necessidade do seu projeto, priorizando a legibilidade e manutenibilidade do código.

## Autora
Juliana Chaves Palm