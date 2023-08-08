// Exercício 2 - Corta isso fora
// Refatore o código abaixo com o que foi aprendido até agora.

const dimensoes = (comprimento, alturaInicial) => {
  const altura = alturaInicial * 9 /16;
  return { comprimento, altura };
}

console.log(dimensoes(10,10)); // { comprimento: 10, altura: 5.625 }