// Implemente o método montaEnderecoCompleto que recebe os seguites parâmetros:

// rua: String que reprenta o nome de uma rua
// cidade: String que representa o nome de uma cidade
// numero: Inteiro que representa o número da casa
// cep: String que representa o CEP de um endereço
// O método deve retornar uma única string com esses dados no seguinte formato: , - ,

// Lembre-se de respeitar as vírgulas e os espaços!

function montaEnderecoCompleto(rua, cidade, numero, cep) {
    return `${rua}, ${cidade} - ${numero}, ${cep}`;
}

console.log(montaEnderecoCompleto('Praça Ramos de Azevedo', 'São Paulo', 's/n', '01037-010'));