// Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista de números inteiros qualquer e retorna o valor true caso esta lista não tenha nenhum item e false para os demais resultados. A lógica deve ser feita usando somente a propriedade done do objeto que é obtido ao executar o next no iterador do array.

const lista = [];

function isListaVazia(array) {
  const listIterator = array[Symbol.iterator]();
  let iterator = listIterator.next();
  return iterator.done ? true : false;
}

console.log(isListaVazia(lista));