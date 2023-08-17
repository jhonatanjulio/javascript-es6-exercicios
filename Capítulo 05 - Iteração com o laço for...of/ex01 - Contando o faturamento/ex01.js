// Escreva uma função chamada somaFaturamento que recebe uma lista de números inteiros e devolve a soma destes valores.

// Exemplo: somaFaturamento([1,2,3,4]) → 10

function somaFaturamento(lista) {
    let soma = 0;
    for(let valores of lista) {
        soma+=valores;
    }
    return soma;
}

console.log(somaFaturamento([1,2,3,4]));