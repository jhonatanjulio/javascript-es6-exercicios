// Implemente o método 'calculaValorTotalDaCompra' que recebe quatro parâmetros:

// produtos: Lista com o nome dos produtos comprados
// cidade: String que representa o nome da cidade
// caixa: Mapa que contém relação de produtos e preços
// fretes: Mapa que contém relação de cidades e fretes

// Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:

// Produtos:

// Produto	      Preço
// Arroz	      7.10
// Feijão	      2.30
// Macarrão	      4.70
// Refrigerante	  3.00

// Fretes:

// Cidade	        Frete
// São Paulo	    10.10
// Rio de Janeiro	12.30
// Brasília	        14.70
// Outros	        13.00

// Exemplo: calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes) → 7.20

const produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

const fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);

function calculaValorTotalDaCompra(produtosComprados, cidade, caixa, fretes) {
    let valorTotal = 0;
    produtosComprados.forEach(prod => {
        if(caixa.has(prod)) {
            valorTotal += caixa.get(prod);
        } else {
            console.log(`${prod}: Produto sem estoque!`);
        }
    });

    return fretes.has(cidade) ? (valorTotal + fretes.get(cidade)) : console.log(`Não fazemos entrega para ${cidade}!`);
}

const valor = calculaValorTotalDaCompra(['Arroz', 'Açúcar','Feijão', 'Macarrão'], 'São Paulo', produtos, fretes);
console.log(valor.toFixed(2));