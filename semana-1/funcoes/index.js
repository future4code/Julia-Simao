// EXERÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

//------ EXERCÍCIO 01

// A)
// 10
// 50

// B)
// Nada, pois não há o comando de console.log na função. Apenas return não é visível no console.


//------ EXERCÍCIO 02

// A) A função vai transformar a palavra em lower case e irá procurar se a palara cenoura está presente na frase.

// B)   i. true (inclui cenoura)
//     ii. true (o CENOURA virou cenoura com o to.LowerCase)
//    iii. true (o método string não distingue plural, mas considera as letras que a palavra possui)


// EXERÍCIOS DE ESCRITA DE CÓDIGOS

//------ EXERCÍCIO 01

// A)

// function imprimeFrase() {
// console.log('Eu sou Julia, tenho 22 anos, moro em Londrina e sou estudante.')
// }

// imprimeFrase()

// B) 

// function minhaApresentacao(nome, idade, cidade, profissão) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
// }
    
// minhaApresentacao('Julia', 22, 'Londrina', 'estudante')

//------ EXERCÍCIO 02

// A) Escreva uma função que receba 2 números como parâmetros,
// dentro da função, faça a soma das duas entradas e retorne o resultado.
// Invoque a função e imprima no console o resultado.

// function meusNumeros(numero1, numero2) {
//     const somaNumeros = numero1 + numero2
//     console.log(somaNumeros)
//     return somaNumeros
// }

// meusNumeros(40, 56)


// B) Faça uma função que recebe 2 números
// retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function doisNumeros(numero1, numero2){
//     const maiorOuIgual = numero1 >= numero2
//     console.log(maiorOuIgual)
// }

// doisNumeros(10, 15)


// C) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numero1(numero1){
//     const calculo = numero1 % 2 === 0
//     console.log(calculo)
// }

// numero1(30)


// D) Faça uma função que recebe uma mensagem (string) como parâmetro 
// imprima o tamanho dessa mensagem,
// juntamente com uma versão dela em letras maiúsculas.


// function recebeMensagem(mensagem) {
//     const resultado = `${mensagem.length} ${mensagem.toUpperCase()}`
//     return resultado
// }

// const mensagem = prompt("Digite uma frase")
// console.log(recebeMensagem(mensagem))


//------ EXERCÍCIO 03

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números
// e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
// Por fim, mostre no console o resultado das operações:

// function paraSomar(numero1, numero2){
//     return soma
// }

// function paraSubtrair(numero1, numero2){
//     return sub
// }

// function paraMulti(numero1, numero2){
//     return mult
// }

// function paraDiv(numero1, numero2){
//     return div
// }

// const numero1 = Number(prompt('Digite um número'))
// const numero2 = Number(prompt('Digite outro número'))

// console.log(`Soma: ${(numero1 + numero2)}`)
// console.log(`Subtração: ${(numero1 - numero2)}`)
// console.log(`Multiplicação: ${(numero1 * numero2)}`)
// console.log(`Divisão: ${(numero1 / numero2)}`)