// Qual é o problema com o trecho de código a seguir? E como consertá-lo?

// // ...
// promise
//   .then((data) => console.log(`resultado positivo: ${data}`))
//   .then((data) => console.log(`resultado positivo 2: ${data}`))
//   .catch((data) => console.log(`resultado negativo: ${data}`));

// R: O primeiro then captura o data que a promise retorna, assim possibilitando a impressão do data no console. Já o then seguinte é executado após o primeiro then, ou seja, o segundo then não consegue capturar o data que a promise retornou, e sim o que o then pode retornar. Nesse caso, o primeiro then apenas está imprimindo no console, e retornando nada. Então para o próximo then funcionar, o primeiro then deve retornar o valor de data, para que o próximo then seja capaz de capturar, da seguinte forma:

// // ...
// promise
//   .then((data) => {console.log(`resultado positivo: ${data}`); return data;})
//   .then((data) => console.log(`resultado positivo 2: ${data}`))
//   .catch((data) => console.log(`resultado negativo: ${data}`));