// Para melhorar a simulação de Promise criada no exercício anterior, faça com o método receba mais um argumento chamado delay que é um inteiro que representa os milisegundos que a solicitação demora para responder. Ao executar o método, ele deve demorar o tempo do delay para exibir a mensagem no console.

// Exemplo:

// simulaPromise(true, 2000); // ok
// simulaPromise(false, 1000); // not ok

// ordem que aparece no console
// not ok
// ok

function simulaPromise(sucesso = true, delay = 0) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(sucesso) {
                resolve('ok');
            } else {
                reject('not ok');
            }
        }, delay);
    });

    promise.then((data) => console.log(data));
    promise.catch((data) => console.log(data));
}

simulaPromise(true, 2000); // ok
simulaPromise(false, 1000); // not ok