// Utilizando os aprendizados deste capítulo, implemente a função soletraPalavra que recebe como único parâmetro uma String e então exibe cada letra da String em uma linha do console.



function soletraPalavra(str = 'default') {
  const strIterator = str[Symbol.iterator]();
  let iterator = strIterator.next();
  while(!iterator.done) {
    console.log(iterator.value);
    iterator = strIterator.next();
  }
}

soletraPalavra('Soletrando');

