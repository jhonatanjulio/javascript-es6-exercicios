// Implemente o método simulaPromise() que recebe um parâmetro chamado sucesso que é um Boolean que indicará se a Promise foi realizada com sucesso ou não. O método deve receber este parâmetro e imprimir a mensagem: ok em caso de sucesso e not ok no caso contrário.

// Exemplo:

// simulaPromise(false); // not ok
// simulaPromise(true); // ok
// Não se esqueça de utilizar o resolve, reject, then e catch para resolver o exercício.

function simulaPromise(sucesso = true) {
    const promise = new Promise((resolve, reject) => {
        if(sucesso) {
            resolve('ok');
        } else {
            reject('not ok');
        }
    });

    promise.then((data) => console.log(data));
    promise.catch((data) => console.log(data));
}

simulaPromise();
simulaPromise(false);
simulaPromise(true);