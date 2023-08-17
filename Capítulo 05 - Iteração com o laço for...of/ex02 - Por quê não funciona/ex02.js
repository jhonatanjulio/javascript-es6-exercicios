// Um jovem programador tentou utilizar o laço de repetição for...of no objeto Casa na esperança de que o laço passasse por todas as propriedades deste objeto. No entanto, ele só recebeu o erro: TypeError: Casa[Symbol.iterator] is not a function. Por que não está funcionando?

// Este foi o código que ele tentou executar:

var Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2

  //...
}


for(var atributo of Casa) {
  console.log(atributo);
}

// R: Um objeto não é iterável por um laço for...of. Isso porquê um objeto não possui um Symbol.iterator para acessá-lo. O correto seria utilizar de um laço for...in para acessar as propriedades, e daí extrair os seus valores respectivos.