// Refatore o código a seguir para utilizar o operador Spread ao invés do método concat.

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

console.log(timeCompleto);