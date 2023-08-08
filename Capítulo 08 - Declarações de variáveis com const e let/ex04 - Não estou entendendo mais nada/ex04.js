// Uma jovem programadora pensou que havia entendido como funcionava a declaração de variáveis com let e const até ver o seguinte trecho de código:

const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33

// Ela achou que este código não funcionaria, pois havia entendido que não era possível colocar novos valores em variáveis declaradas com const. Por que este código funciona sem problemas?
// R: Nesse caso, ela declarou a variável constante já com um objeto, esse objeto não pode ser alterado por outro objeto ou outro valor por conta da imutabilidade do const, porém, inserir propriedades-valores no objeto funciona sem problemas já que você está alterando o conteúdo do objeto que já foi declarado, e não da variável em sí.

