// Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

// Exemplo: validaParenteses(')((()()())))'); → false
// Exemplo: "()()()" → true
// Exemplo: ")(" → false

parenteses = "()()()()"



//console.log(array);

function validaParenteses(parenteses) {
    var array = parenteses.split("");

    var trueOrFalse = !array.reduce((total, value) => {
        if (total < 0) {
            return total;
        }
        if (value === ")") {
            return --total;
        }
        if (value === "(") {
            return ++total;
        }
    }, 0)

    return trueOrFalse;

}
console.log(validaParenteses(parenteses));
