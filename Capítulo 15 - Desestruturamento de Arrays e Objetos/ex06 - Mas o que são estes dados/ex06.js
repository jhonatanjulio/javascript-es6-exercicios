// O seu sistema escolar contém uma série de informações armazenadas em arrays no seguinte formato:

const corpoDocente = [
  [ 'Gramática', '9:00', 'Sueli' ],
  [ 'Matemática', '10:15', 'Amilton'],
  [ 'Educação Física', '11:30', 'Bruno' ]
];

// Para o usuário final, é necessário que a informação seja apresentada de uma forma mais adequada, identificando o que significa cada um dos itens. Implemente o método mostraGradeProfessores() quer recebe um array de arrays no formato do objeto corpoDocente e devolve, para cada item, a seguinte mensagem no console:

// "Aula de <matéria> às <hora> com professor(a) <nome>"

function mostraGradeProfessores(array) {
  array.forEach(([aula, horario, prof]) => {
    console.log(`Aula de ${aula} às ${horario}h com o(a) professor(a) ${prof}`);   
  });
}

mostraGradeProfessores(corpoDocente);