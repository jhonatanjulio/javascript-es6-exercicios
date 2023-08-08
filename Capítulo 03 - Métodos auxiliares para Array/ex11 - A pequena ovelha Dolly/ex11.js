// Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro um objeto e cria uma cópia exata dela.

// utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto

const objeto = { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 };

function clonaObjeto(obj) {
    const oldObjectsParameters = Object.getOwnPropertyNames(obj);
    const objectClone = new Object();

    oldObjectsParameters.forEach(valor => objectClone[valor] = obj[valor]);
    return objectClone;
}

console.log(clonaObjeto(obj));
