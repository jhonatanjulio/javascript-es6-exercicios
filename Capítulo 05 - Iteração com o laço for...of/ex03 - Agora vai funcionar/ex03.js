// Resolva o problema do Exercício 2 utilizando a estrutura for...in.
var Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2

  //...
}


for(var propriedade in Casa) {
  console.log(Casa[propriedade]);
}