// Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.

// Utilize as funções auxiliares: reduce e find.

// Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

const arrNumInt = [1, 2, 3, 3, 4, 5];

function removeDuplicatas(array) {
    //var newArray = []
    return array.reduce((total, value) => {
        var trueOrFalse = total.find((nextValue) => {
            return nextValue === value;
        });

        if (!trueOrFalse) {
            total.push(value);
        }

        return total;
    }, []);
}

console.log(removeDuplicatas(arrNumInt));