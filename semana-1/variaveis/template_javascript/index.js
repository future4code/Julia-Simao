/* 

INTERPRETAÇÃO DE CÓDIGOS

EXERCÍCIO 1
1º 5
2º 10 5

EXERCÍCIO 2
10 20 10

EXERCÍCIO 3
horasTrabalhadasDia
valorRecebidoDia

/*

ESCRITA DE CÓDIGOS 

EXERCÍCIO 1

const variavelNome = ""
let variavelIdade = 

console.log(typeof variavelNome)
console.log(typeof variavelIdade)

A primeira variável apareceu como string, não consegui imprimir a mesma no console sem as "", 
imagino então que por conta da presença das aspas, a variável foi considerada um texto. Na segunda
não há valor declarado, sendo impresso no console como undefinied. 

const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")

console.log(nome)
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá,", nome "você tem" , idade, "anos.")

Ambas foram impressas como string, pois todas as informações vindas do prompt são lidas como textos.


EXERCICIO 2

const primeiraPergunta = prompt("Você gosta de cães?")
const segundaPergunta = prompt("Você já viajou para o exterior?")
const terceiraPergunta = prompt("Você fala inglês?")

console.log("Você gosta de cães?", primeiraPergunta)
console.log("Você já viajou para o exterior?", segundaPergunta)
console.log("Você fala inglês?", terceiraPergunta)


EXERCICIO 3

let a = 10
let b = 25

let c = 10

a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


*/
