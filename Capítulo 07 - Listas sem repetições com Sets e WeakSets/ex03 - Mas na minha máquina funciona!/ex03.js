// Um aluno do curso de computação está tentando executar o código a seguir:

var musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}

var musica2 = {
  titulo: 'Nada se componentiza a você',
  autor: 'React'
}

var musicas = new WeakSet([musica1, musica2]);
for(var musica of musicas){
  console.log(musica);
}

// Mas sempre que ele tenta executar este código, ele dá erro. Você sabe dizer qual é o problema?
// R: O erro está no for...of, já que o WeakSet não é iterável.