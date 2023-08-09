// Otimize o trecho de código a seguir utilizando o desestruturamento.

const profissional = {
  titulo: 'Engenheiro de Software',
  departamento: 'Engenharia'
};

function isEngenheiro({titulo, departamento}) {
  return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

console.log(isEngenheiro(profissional)); // true
profissional.titulo = 'Marketing';
console.log(isEngenheiro(profissional)); // false