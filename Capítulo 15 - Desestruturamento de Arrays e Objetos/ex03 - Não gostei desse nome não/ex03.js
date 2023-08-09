// Considere o objeto literal usuario e extraia as propriedades nome e email em variáveis com o nome nick e login, respectivamente.

const usuario = {
  nome: 'Toreto',
  email: 'velozesefuriososparasempre@gmail.com'
}

const { nome:nick, email:login } = usuario;
console.log(nick,login);