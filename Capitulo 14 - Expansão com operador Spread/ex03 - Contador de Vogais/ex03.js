// Implemente o método contaQuantidadeVogaisNaoAcentuadas que recebe um número indeterminado de palavras e retorna para o usuário o número total de vogais não acentuadas encontradas. Para este exercício, Considere somente palavras em minúsculo.

function contaQuantidadeVogaisNaoAcentuadas(vogais) {
    let contador = 0;
    let palavrasMinusculas = vogais.toLowerCase();
    let palavras = [...palavrasMinusculas];
    for(let palavra of palavras) {
        if('aeiou'.indexOf(palavra) !== -1) {
            contador++;
        }
    }
    return contador;
}

let qtdeVogais = contaQuantidadeVogaisNaoAcentuadas('aiuaé');
console.log(qtdeVogais);