// Implemente o método percorreRuas que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

// Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'
// Utilize o laço for...of e o break para não percorrer mais ruas que o necessário.
function percorreRuas(lista, str) {
  for(let rua of lista) {
    console.log(rua);
    if(rua === str) {break;}
  }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');