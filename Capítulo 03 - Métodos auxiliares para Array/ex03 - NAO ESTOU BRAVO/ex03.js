// Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

// Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

const array = ['oi', 'tudo', 'bem?']

function caps(lista) {
    return lista.map(elemento => elemento.toUpperCase());
}
console.log(caps(array))