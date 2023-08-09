// Utilize o operador Rest para criar uma função que recebe um parâmetro referência, que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

// Exemplo: todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

function todosSaoMaioresQue(ref, ...value) {
    const maxValue = Math.max(...value);
    return Math.max(maxValue) >= ref;
}

// Outros exemplos de entradas: 
console.log(todosSaoMaioresQue(5,4,3,2,1)); // resultado esperado: false 
console.log(todosSaoMaioresQue(1,2)); // resultado esperado: true
