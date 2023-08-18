// Implemente o método deletaAmigos que recebe dois parâmetros:

// amigos: Mapa com relação de nome e informações sobre os amigos
// exAmigos: Lista com nome dos amigos que deve ser deletado
// Para cada nome em exAmigos, você deve:

// Verificar se nome consta na lista. Se sim, deletá-lo e imprimir no console: " foi deletado!"
// Se o nome não estiver no mapa de amigos, exibir no console para o usuário: " não é seu amigo!"
// Considere os seguintes amigos para este exercícios:

// Amigos:

// Nome	            Dados
// João Silva	    idade: 23, sexo: masculino
// Luisa Pimenta	idade: 18, sexo: feminino
// Julio Marinho	idade: 52, sexo: masculino
// Marcela Mel	    idade: 27, sexo: feminino

const amigos = new Map();
amigos.set('João Silva', {idade: 23, sexo: 'masculino'});
amigos.set('Luisa Pimenta', {idade: 18, sexo: 'feminino'});
amigos.set('Julio Marinho', {idade: 52, sexo: 'masculino'});
amigos.set('Marcela Mel', {idade: 27, sexo: 'feminino'});

function deletaAmigos(amigos, exAmigos) {
    if(amigos.has(exAmigos)) {
        amigos.delete(exAmigos);
        console.log(`${exAmigos} foi deletado!`)
    } else {
        console.log(`${exAmigos} não é seu amigo!`)
    }
}

deletaAmigos(amigos, 'João Silva');
console.log(amigos);
deletaAmigos(amigos, 'João Silva');