// Crie uma função chamada calculaRaizesQuadradas que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

// para este exercício, assuma que a entrada terá somente números com raiz exata.
// utilize a função Math.sqrt para calcular a raiz quadrada

const numNaturais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculaRaizesQuadradas(numeros) {
    return numeros.map(element => element ** 0.5);
}

console.log(calculaRaizesQuadradas(numNaturais));