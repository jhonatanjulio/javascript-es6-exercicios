// Refatore o código a seguir para inserir o método seApresentar para dentro do objeto pessoa. Ela deve exibir o nome da pessoa.



const pessoa = {
  nome: 'Goku',
  equipe: 'Guerreiro Z',
  seApresentar(pessoa) {
    console.log(`Oi, eu sou o ${pessoa.nome}!`);
  }
}

pessoa.seApresentar(pessoa); // Oi, eu sou o Goku!