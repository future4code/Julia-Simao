// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//----------------EXERCÍCIO 01-----------------

// a. false

// b. false

// c. true

// d. boolean

//----------------EXERCÍCIO 02-----------------

// Todas as informações recebidas pelo prompt são do tipo string, não sendo possível somar valores que não são numéricos.
// Será impresso no console apenas a junção dos dois números, e não sua soma. 

//----------------EXERCÍCIO 03-----------------

// Utilizar a conversão de string para number, o que pode ser feito direto na declaração do prompt.

// let primeiroNumero = Number(prompt('Digite um numero!'))
// let segundoNumero = Number(prompt('Digite outro numero!'))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)



// EXERCICIOS DE ESCRITA DE CÓDIGO

//----------------EXERCÍCIO 01-----------------

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) 

// let suaIdade = Number(prompt('Digite sua idade'))
// let idadeMelhorAmigo = Number(prompt('Digite a idade do seu/sua melhor amigo(a)'))

// const diferença = suaIdade - idadeMelhorAmigo

// console.log('Sua idade é maior do que a do seu melhor amigo?', suaIdade > idadeMelhorAmigo)
// console.log('A diferença de idade entre vocês é de', diferença)


//----------------EXERCÍCIO 02-----------------

// a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// const numeroPar = Number(prompt('Digite um número par'))

// console.log('Resto da divisão:', numeroPar % 2)

// Resposta c) O resto da divisão será sempre 0, pois um número par divido por outro número par não tem resto.

// Resposta d) Quando um número ímpar é inserido, o resultado do resto passa a ser 1. 


//----------------EXERCÍCIO 03-----------------

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

// const idadeUsuario = Number(prompt('Digite sua idade'))

// console.log('Sua idade em meses é:',idadeUsuario * 12 ,'meses.')
// console.log('Sua idade em dias é:',idadeUsuario * 365 ,'dias')
// console.log('Sua idade em horas é:',idadeUsuario * 8760 ,'horas')


//----------------EXERCÍCIO 04-----------------

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as
// operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

// const primeiroNumero = Number(prompt('Digite um número'))
// const segundoNumero = Number(prompt('Digite outro número'))

// const numeroMaior = primeiroNumero > segundoNumero
// const numeroIgual = primeiroNumero === segundoNumero

// const numeroDivisivel = primeiroNumero % segundoNumero
// const numeroDivisivel2 = segundoNumero % primeiroNumero

// console.log('O primeiro número é maior que o segundo?', numeroMaior)
// console.log('O primeiro número é igual ao segundo?', numeroIgual)
// console.log('O primeiro número é divisível pelo segundo?', numeroDivisivel === 0)
// console.log('O primeiro número é divisível pelo segundo?', numeroDivisivel2 === 0)