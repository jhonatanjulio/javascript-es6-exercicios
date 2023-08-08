// Um programador júnior de uma empresa de software está tentando executar o seguinte código:

function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome;
  nomeCompleto += ' ' + segundoNome;

  return nomeCompleto;
}

// Ele não consegue entender o que está fazendo de errado. No que ele está errando?
// R: Ele está declarando a variável nomeCompleto com a instrução const, portanto, é impossível alterar o valor da variável uma vez já declarado.