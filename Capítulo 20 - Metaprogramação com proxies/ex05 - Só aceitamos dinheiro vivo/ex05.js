// Considerando o objeto Compras a seguir, implemente um proxy que seja capaz de validar que o valorPago setado no objeto sempre deve ser maior que a propriedade valorAPagar. Caso isso não aconteça, lance uma exceção no console com a mensagem: "Valor insuficiente para pagar!".

class Compras {
  constructor(itens, valorAPagar, valorPago) {
    this.itens = itens;
    this.valorAPagar = valorAPagar;
    this.valorPago = valorPago;
  }
}

const compra = new Compras(['arroz', 'feijão'], 200.00, 0);

const handler = {
    set(target, prop, value) {
        if(prop = 'valorPago' && value < target.valorAPagar) {
            console.log(`Valor insuficiente para pagar!`);
        } else {
            console.log(`Pago! Valor da compra: R$${target.valorAPagar.toFixed(2)}`)
            return Reflect.set(...arguments);
        }
        
    }
}

const proxyCompra = new Proxy(compra, handler);

proxyCompra.valorPago = 200;