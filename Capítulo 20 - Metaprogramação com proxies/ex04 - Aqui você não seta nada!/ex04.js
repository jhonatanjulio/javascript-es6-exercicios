// Utilizando o mesmo proxy do exercício anterior, faça com o que mesmo proxy também indique com uma mensagem no console sempre que um propriedade for setada no objeto.

class Livro {
    constructor(titulo, autor) {
      this.titulo = 'ECMAScript 6 - Entre de cabeça no futuro do JavaScript';
      this.autor = 'Diego Martins de Pinho';
    }
  }
  
const livroES6 = new Livro();
// console.log(livroES6);

const proxyLivro = new Proxy(livroES6, {
    get(target, propriedade) {
        console.log(`A propriedade ${propriedade} foi acessada!`);
        return Reflect.get(...arguments);
    },
    set(target, propriedade, valor) {
        console.log(`A propriedade ${propriedade} foi setada!`);
        return Reflect.set(...arguments);
    }
})

// Acessando propriedades
console.log(proxyLivro.autor);
console.log(proxyLivro.titulo);

// Setando propriedades
console.log(proxyLivro.data = '23/08/2023');
console.log(proxyLivro.data)
