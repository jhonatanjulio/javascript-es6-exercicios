// Utilize as arrow funcions para deixar o código a seguir ainda menor.

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(palavrao => palavrao.length);

console.log(tamanhos); // [ 22, 22, 44, 28 ]