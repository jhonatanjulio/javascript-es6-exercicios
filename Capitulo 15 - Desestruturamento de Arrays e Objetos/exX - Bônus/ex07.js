// Converta do modelo 1 para o modelo 2 utilizando desestruturamento de objetos e arrays.

// modelo1
const pontos1 = [
  [1,2],
  [3,4],
  [5,6]
];

// modelo 2
const pontos2 = [
  {x:1, y:2},
  {x:3, y:4},
  {x:5, y:6},
]

function conversao(pontosUm){
  const newPontos = [];
  pontosUm.forEach(([x,y]) => {
    newPontos.push({x,y});
  });
  
  return newPontos;
}

console.log(conversao(pontos1));