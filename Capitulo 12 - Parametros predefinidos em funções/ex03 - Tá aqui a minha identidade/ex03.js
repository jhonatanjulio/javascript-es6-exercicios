// Refatore o código a seguir de modo a remover as variáveis sobrenomeTratado e nomeDoMeioTratado.

function imprimeNomeCompleto(nome = '', sobrenome = '', nomeDoMeio = '') {
  let nomeTratado = `${nome} ${nomeDoMeio} ${sobrenome}`

  console.log(`${nomeTratado}`);
}

imprimeNomeCompleto('João','Machado'); // João