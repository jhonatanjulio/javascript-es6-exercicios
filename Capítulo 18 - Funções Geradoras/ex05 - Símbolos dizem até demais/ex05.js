// Considere o seguinte objeto equipe representada pelo código que segue:

const equipe = {
  gerente: 'Gilberto',
  estagiario: 'Fernanda',
  senior: 'Paulo',
  pleno: 'Camila',
  junior: 'Adão',
  [Symbol.iterator]: function* () {
    yield this.gerente;
    yield this.estagiario;
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

// Faça com que o objeto equipe se torne iterável em um laço de repetição do tipo for...of.
// Exemplo:

for(let integrante of equipe) {
  console.log(integrante);
}

/*
Gilberto
Fernanda
Paulo
Camila
Adão
*/