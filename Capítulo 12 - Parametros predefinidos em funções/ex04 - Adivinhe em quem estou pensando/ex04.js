// Considere o código a seguir e responda: Qual o valor será mostrado? E por que?

const v = 'valor 1';
function funcao(x = v) {
  const v = 'valor 2';
  console.log(x);
}

funcao(); // qual valor será mostrado? R: O valor que será mostrado é "valor 1", isso porquê no parametro, seu valor predefinido foi a variavel v que foi declarada antes da linha da função, cujo a qual é uma variável global. Já a variavel v criada dentro da função, mesmo que tenha o mesmo identificador da primeira, elas não são as mesmas variáveis, essa variável agora, só funciona dentro do escopo da função.