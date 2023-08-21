// Utilizando Templates Literais Marcadas, crie uma tag que transforma uma String que representa uma lista de compras (divididas por vírgula) em um elemento de lista HTML (<ul> com <li>).

// Por exemplo:
const compras = `leite,feijão,arroz,mandioca`;
var elemento = tag`${compras}`;

console.log(elemento)
// // <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>

function tag(strings, ...values) {
    const produtos = values[0].split(",");
    let string = produtos.map(prod => `<li>${prod}<li>`)
                .join("");
    return `<ul>${strings[0]}${string}${strings[1]}</ul>`;
}