// Refatore o código a seguir para utilizar o operador Rest:

function calculaPrecoTotal(...valor) {
  let precos = [...valor];
  return precos.reduce(function(total, preco) {
    return total + preco;
  }, 0)
}

console.log(calculaPrecoTotal(1,2,3,4,5)); // 15