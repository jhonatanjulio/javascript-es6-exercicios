// Um programador codificou o seguinte trecho:

const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}

// Ao tentar executar, ele recebeu o seguinte erro:
// ReferenceError: Comida is not defined

// Por que aconteceu este erro? O que é preciso modificar para que o código funcione corretamente?
// R: O erro ocorre porquê a instrução class não suporta o hosting como as funções suportam, então tentar instanciar um objeto na classe Comida sem que antes a classe Comida seja executada, irá retornar ReferenceError. Para corrigir isso, basta mover a linha que instância o objeto comida após a estrutura da class Comida.