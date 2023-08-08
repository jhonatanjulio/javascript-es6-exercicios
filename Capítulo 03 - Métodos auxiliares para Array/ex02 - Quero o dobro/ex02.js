// Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

// Exemplo: dobrar([1,2,3]) → [2,4,6]

const lista = [1, 2, 3, 4];
function dobrar(array) {
    return array.map(value => value * 2);
}
console.log(dobrar(lista));