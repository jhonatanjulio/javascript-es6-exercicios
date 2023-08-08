// Considere o trecho de código abaixo e responda as questões:

var arrayFuncoes = [];
for(let i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});

// a) Quais os valores são exibidos no console na execução desse código? 
// R: Com a execução do forEach, cada função que está armazenada no arrayFuncoes é chamada, e todas imprimem o valor de "i" 10x por conta do i ser global e equivaler a 10 após a execução final do loop for.

// b) Como podemos ajustar o comportamento desta função utilizando ES6?
// R: Basta alterar o var do escopo do for para let.