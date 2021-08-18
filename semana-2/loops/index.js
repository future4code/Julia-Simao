//---------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

/* EXERCÍCIO 1

A) O código está fazendo um loop da informação até que a mesma atinja a condição.
Será impresso: 10

EXERCÍCIO 2

A) 19, 21, 23, 25, 27, 30
B) O for of é o suficiente, pois ele acessa o indíce sem mostrar o passo a passo para o usuário.

EXERCÍCIO 3

A) 




*/

//---------EXERCÍCIOS DE ESCRITA DE CÓDIGOS

// EXERCÍCIO 1

// const quantosBichinhos = Number(prompt('Quantos bichos de estimação você tem?'))

// const arrayBichinhos = [];

//     if (quantosBichinhos === 0){
//     console.log('Que pena! Você pode adotar um pet!')
// }

// for(let i = 0; i < quantosBichinhos; i++) {

//     if(quantosBichinhos > 0) {
//             const qualONome = prompt('Qual o nome deles?')
//             arrayBichinhos.push(qualONome)
//         }
// }

// console.log(arrayBichinhos)

// EXERCÍCIO 2

let array = [10, 15, 20, 25, 30, 25, 40, 45]


//A)

function original(array) {
console.log(array)
}

original(array)

//B)

function divisao(array) {
    for(let i = 0; i < array.length; i++){
       const resultDivisao = array[i] / 10
       console.log(resultDivisao)
    }
}

divisao(array)

//C)

const arrayPares = []

function pares(array) {

    for(let i = 0; i < array.length; i++){
        numero = array[i]
        if(array[i] % 2 === 0){
            arrayPares.push(numero)
        }
    }
}

console.log(arrayPares)
pares(array)

//D)

function index(array) {

    for(let i = 0; i < array.length; i++){
    numero = array[i]
    console.log(`O elemento do index ${array.indexOf(numero)} é ${array[i]}`)
    }
}

index(array)

//E)

const valorMinimo = ('')
const valorMaximo = ('')

function maiorMenor(array) {

    for(let i = 0; i < array.length; i++){

        let maior = 0
        
        if (array[i] > maior){
        const maior = [array[i]]
        arrayMaiores.push(maior)
    }
}
}
