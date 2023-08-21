// Implemente o método 'removeDuplicatas' que recebe o seguinte parâmetro:

// numeros: lista de números inteiros positivos
// O método deve retornar a lista de número sem repetições. Utilize a estrutura de dados Set para resolver este problema.

// Exemplo: removeDuplicatas([1,1,2,2,3,3]) → [1,2,3]

function removeDuplicatas(lista) {
    const array = new Set(lista);
    return array;
}

console.log(removeDuplicatas([1,1,2,2,3,3]));