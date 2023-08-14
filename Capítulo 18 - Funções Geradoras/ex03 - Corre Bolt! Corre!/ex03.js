// Implemente uma função geradora chamada 'correBolt' que retorna para cada parada um checkpoint. Em cada checkpoint, deve ser impresso a mensagem: Usain passou no Checkpoint X, onde "X" indica o número do checkpoint. A função deve ter quatro paradas. Não se esqueça de invocar o método next.

function* correBolt() {
    console.log('Corre Bolt!');
    yield 'Usain passou no Checkpoint 1!';
    yield 'Usain passou no Checkpoint 2!';
    yield 'Usain passou no Checkpoint 3!';
    yield 'Usain passou no Checkpoint 4!';
}

const usainBolt = correBolt();
for(let iterador of usainBolt) {
    console.log(iterador);
}