// Um aluno de computação tentou utilizar o operador Rest para tratar números e letras, de quantidade indefinida, dentro do seu código, mas não conseguiu. Este foi o código que ele escreveu:

/*
function numerosELetras(...numeros, ...letras){
  // corpo da função
}
*/

// Explique o porque este código não funciona.
// R: O código acima não funciona porquê o operador Rest foi utilizado duas vezes como dois paramentros passados à função. O operador Rest só funciona se ele for o único parâmetro da função ou se ele for o último parâmetro passado à função.