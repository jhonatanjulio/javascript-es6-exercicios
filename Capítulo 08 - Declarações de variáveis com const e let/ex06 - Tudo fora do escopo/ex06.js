// Refatore o código a seguir utilizando o const e let.

const STATUS = [
  { codigo: 'OK', resposta: 'Sucesso' },
  { codigo: 'FAILED', resposta: 'Erro' },
  { codigo: 'PENDING', resposta: 'Pendente' }
];

let mensagem = '';
let codigoAtual = 'OK';

for (let i = 0; i < STATUS.length; i++) {
  if (STATUS[i].codigo === codigoAtual) {
    mensagem = STATUS[i].resposta;
  }
}

console.log(mensagem);