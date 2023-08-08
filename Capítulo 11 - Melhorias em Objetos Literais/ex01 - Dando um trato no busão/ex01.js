// Refatore o seguinte código para usar as vantagens oferecidas pelo ES6 em relação a objetos literais.

const modelo = 'Mercedes-Benz Monobloco O-371 RSL';
const ano = 1993;
const capacidade = 50;

const acelerar = function() {console.log('vrum vrum', this.modelo)};

const busao = {
  modelo,
  ano,
  capacidade,
  acelerar
}

busao.acelerar(); // vrum vrum