// Refatore o código a seguir para que declaração do objeto VideoGame seja uma classe de acordo com o ES6. Não se esqueça de criar o construtor e invocar um objeto desta classe.

class VideoGame {
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}

const playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }