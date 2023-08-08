// Considere a lista de contatos a seguir:

const contatos = [
  {
    nome: 'Mario Antonio',
    numero: '1234-5678'
  },
  {
    nome: 'Reinalda Silva',
    numero: '1234-6789'
  },
  {
    nome: 'Bárbara Lopes',
    numero: '1234-5567'
  }
];

// Utilizando a técnica de desestruturamento de arrays, obtenha somente os dados do segundo contato.

const [,contato] = contatos;

console.log(contato);