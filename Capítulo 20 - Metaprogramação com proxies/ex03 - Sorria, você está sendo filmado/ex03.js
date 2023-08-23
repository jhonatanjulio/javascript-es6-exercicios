// Tomando como base o objeto Livro abaixo, crie um proxy que alerta no console sempre uma propriedade foi acessada. Não se esqueça de usar a trap do get para isso.

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
    }
})

console.log(proxyLivro.autor);
console.log(proxyLivro.titulo);