// Aproveitando a classe VideoGame criada no exercício anterior, implemente a classe PlayStation que contém todas as propriedades do VideoGame mais as seguintes propriedades:

// - nEntradasUSB: inteiro que representa a quantidade de entradas usb do console
// - voltagem: inteiro que representa a voltagem do console.
// - adicionais: array de strings que representam os nomes dos adicionais do videogame (ex: adicionais=['Controle sem fio', 'Volante'])

// Não esqueça de invocar um objeto da classe.

class VideoGame {
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}

class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais='nenhum') {
        super(marca, nControles, tipoMidia);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

const playstation = new PlayStation('sony', '2', 'dvd', 4, 110, ['Controle sem fio', 'Volante']);
console.log(playstation);