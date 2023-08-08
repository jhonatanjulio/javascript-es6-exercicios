// Refatore o código abaixo para utilizar o operador Rest ao invés do arguments

function anunciaBolasSorteadas(...bolas) {
  for(let bolaEscolhida of bolas) {
    console.log('A bola escolhida foi: ' + bolaEscolhida);
  }
}

anunciaBolasSorteadas(1,2,3);
// saída
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3