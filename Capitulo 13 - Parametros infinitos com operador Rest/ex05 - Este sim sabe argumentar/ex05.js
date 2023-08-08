// O que é o objeto "arguments"?
// R: O objeto "arguments" é uma variavel local disponível dentro de toda função que não seja uma arrow function. Esse local refere à cada argumento passado como parâmetro de uma função, possibilitando acessá-lo através do index, ex:

function teste(a, b) {
    console.log(arguments[0] + arguments[1]);
}

// arguments[0] equivale ao argumento passado ao parametro "a";
// arguments[1] equivale ao argumento passado ao parametro "b";

teste(1,2); // exibe 3
