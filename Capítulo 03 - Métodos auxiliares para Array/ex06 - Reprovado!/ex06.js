// Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.

// Para isto, utilize o método filter.

var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 },
    { nome: 'Ana', media: 6.5 }
];

function aprovados(listaAlunos) {
    return listaAlunos.filter((obj) => {
        if(obj.media >= 6.5) {return obj};
    })
}
console.log(aprovados(alunos));
