// Considere o trecho de código a seguir:

function* testeDeGeradores() {
    console.log('passei aqui!');
    yield 'fim do método';
}

const teste = testeDeGeradores();
let iterador = teste.next();
console.log(iterador);
console.log(iterador = teste.next());

// Ao executar o método, a frase "passei aqui!" não é exibida no console como esperado. Por quê? O que é necessário fazer para que a mensagem seja exibida?
// R: Quando uma função geradora é executada, ela não executa o que está dentro dela e sim retorna um objeto iterável o qual é possível utilizar a função next para executar o que tem dentro da função a partir dos yields definidos.
