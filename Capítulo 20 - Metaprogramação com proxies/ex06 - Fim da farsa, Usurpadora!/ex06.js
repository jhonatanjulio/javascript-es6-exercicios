// Faça com que o proxy usurpadora seja desativado.

class PaolaBracho {
    constructor(dinheiro, marido) {
      this.dinheiro = 10000000;
      this.marido = 'Carlos Daniel Bracho';
    }
  }
  
const usurpadora = {
    get(PaolaBracho, propriedade) {
        if(propriedade === 'dinheiro' || propriedade === 'marido') {
            console.log('A Usurpadora está atacando!');
        }
    }
}

const {proxy: paola, revoke} = Proxy.revocable({}, usurpadora);
console.log(paola)
paola.dinheiro; // A Usurpadora está atacando!

paola.revoke();
paola.marido; // Fim da farsa, Usurpadora!