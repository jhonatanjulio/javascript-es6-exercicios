// Crie o método 'criaIterador' que recebe como parâmetro uma lista e então o devolve um objeto que possui o mesmo comportamento de um iterador, ou seja, que possui o método next que toda vez que invocado, retorna um objeto com as propriedades: value e done.

// Exemplo: criaIterador([1,2]).next() → { value: 1, done: false }

function criaIterador(lista) {
  return lista[Symbol.iterator]();1
}

let teste = criaIterador([1,2]).next()
console.log(teste);