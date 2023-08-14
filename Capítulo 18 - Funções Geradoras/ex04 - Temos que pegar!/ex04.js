// Refatore o trecho de código a seguir utilizando todas as melhorias propostas pelo ES6 até então. Use obrigatoriamente funções geradoras.

function* capturarPokemon() {
    yield 'Pikachu';
    yield 'Charmander';
    yield 'Caterpie';
}

let pokemons = capturarPokemon();
for(let pokemon of pokemons) {
    console.log(pokemon);
}
