// Implemente o método criaMacaroca que recebe como parâmetro uma lista de strings. O método deve retornar uma única string que é o resultado de todos os itens do array concatenados. É obrigatório a utilização de template string.

// Exemplo: criaMacaroca(['a','b','c', 'd']) → abcd

function criaMacaroca(listaStrings) {
    const macaroca =  listaStrings.join("")
    return `${macaroca}`;
}

console.log(criaMacaroca(['a','b','c', 'd']));