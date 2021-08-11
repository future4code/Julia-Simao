/* -------------------- EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO

------- EXERCÍCIO 1

let array
console.log('a. ', array)

a. undefined

--------------------------------

array = null
console.log('b. ', array)

b. null

--------------------------------

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

c. 11

--------------------------------

let i = 0
console.log('d. ', array[i])

d. 3 (posição 0)

--------------------------------

array[i+1] = 19
console.log('e. ', array)

e. e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
(trocou número seguinte a posição 0 por 19 (4 --> 19))

--------------------------------

const valor = array[i+6]
console.log('f. ', valor)

f. 9 (somou o número na posição 0 com 6 (3+6))

------- EXERCÍCIO 2

SUBI NUM ÔNIBUS EM MIRROCOS 27


-------------------- EXERCÍCIOS ESCRITA DE CÓDIGOS


------- EXERCÍCIO 1

const nomeUsuario = prompt('Digite seu nome')
const emailUsuario = prompt('Digite seu e-mail')

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}!`)


------- EXERCÍCIO 2

const lista = ['Nhoque', 'Parmegiana', 'Lanche', 'Strogonoff', 'Lasanha']

console.log(lista)

console.log('Essas são minhas comidas preferidas:')

    console.log(lista[0])
    console.log(lista[1])
    console.log(lista[2])
    console.log(lista[3])
    console.log(lista[4])

const escolhaUsuario = prompt('Qual sua comida preferida?')
console.log(`O usuário gosta de: ${escolhaUsuario}`)

lista[1+0] = escolhaUsuario
console.log(lista)


------- EXERCÍCIO 3

const listaDeTarefas = []

const tarefa1 = prompt('Digite uma tarefa diária que precisa realizar')
const tarefa2 = prompt('Digite outra tarefa diária que precisa realizar')
const tarefa3 = prompt('Digite mais uma tarefa diária que precisa realizar') 

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const indiceUsuario = prompt('Seguindo a ordem enviada, digite o número da tarefa que já foi realizada (0, 1 ou 2)')
listaDeTarefas.splice(indiceUsuario, 1)

console.log(listaDeTarefas)


*/

// -------- DESAFIO 1

// const frase = prompt('Digite uma frase')

// const arrayFrase = [frase]
// console.log(arrayFrase)

// -------- DESAFIO 2

// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"].indexOf("Abacaxi", [pontoInicial = 0])

// console.log(array, (array.length))
