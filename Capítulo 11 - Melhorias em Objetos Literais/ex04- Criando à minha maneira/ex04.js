// Implemente o método criaObjetoComCaracteristicas que recebe o seguinte parâmetro:

// caracteristicas: Mapa que representa os atributos e valores do objeto (Ex: idade, 25)

// O método deve devolver um objeto literal que possua as características representadas no mapa. Para este exercício, não vamos considerar funções.

const caracteristicas = new Map();

caracteristicas.set("mateus", 19);
caracteristicas.set("pollo", 19);
caracteristicas.set("jhonatan", 18);


function criaObjetoComCaracteristicas(caracteristicas) {
    const obj = {};
    for(let i of caracteristicas.keys()) {
        obj[i] = caracteristicas.get(i);
    }
    return obj;
}

console.log(criaObjetoComCaracteristicas(caracteristicas));
