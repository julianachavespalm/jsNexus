// Cria uma lista vazia
let minhaLista = [];

// Adiciona itens ao array
minhaLista.push('item1', 'item2', 'item3', 'item4', 'item5');
console.log('Lista após adicionar itens:', minhaLista);

// Remove um item da primeira posição
let primeiroItemRemovido = minhaLista.shift();
console.log('Item removido da primeira posição:', primeiroItemRemovido);
console.log('Lista após remover o primeiro item:', minhaLista);

// Remove um item da última posição
let ultimoItemRemovido = minhaLista.pop();
console.log('Item removido da última posição:', ultimoItemRemovido);
console.log('Lista após remover o último item:', minhaLista);

// Remove um item de uma posição qualquer (índice 2 no exemplo)
let itemRemovidoPosicaoQualquer = minhaLista.splice(2, 1)[0];
console.log('Item removido da posição 2:', itemRemovidoPosicaoQualquer);
console.log('Lista após remover um item de posição qualquer:', minhaLista);

// Substitui valor da primeira posição
minhaLista[0] = 'novoItem1';
console.log('Lista após substituir o valor da primeira posição:', minhaLista);

// Substitui valor da última posição
minhaLista[minhaLista.length - 1] = 'novoItem5';
console.log('Lista após substituir o valor da última posição:', minhaLista);

// Procura por valores com forEach
console.log('Valores encontrados com forEach:');
minhaLista.forEach(item => {
    console.log(item);
});

// Usa o filter para encontrar valores que começam com 'novo'
let valoresFiltrados = minhaLista.filter(item => item.startsWith('novo'));
console.log('Valores filtrados que começam com "novo":', valoresFiltrados);
