// Implemente o método 'percorreRuas' que recebe dois parâmetros:

// ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')
// ruaPerigosa: String que representa o nome da rua que deve ser evitada

// Faça com que o método percorra cada uma das ruas exibindo no console, menos para a ruaPerigosa. Utilize o for...of e o continue para fazer esta lógica.

function percorreRuas(ruas, ruaPerigosa) {
  for(let rua of ruas) {
    if(rua === ruaPerigosa) {continue;}
    console.log(rua);
  }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 1');