// Como podemos refatorar o código a seguir sem utilizar os benefícios do ECMAScript 6?

// var argumentos = [1,2,3];
// console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3

var argumentos = [1,2,3];
console.log.apply(null, argumentos);