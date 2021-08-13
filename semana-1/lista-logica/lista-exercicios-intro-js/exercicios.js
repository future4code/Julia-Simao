// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const alturaPrompt = Number(prompt('altura'))
  const larguraPrompt = Number(prompt('largura'))

  const area = alturaPrompt * larguraPrompt
  console.log(area)
}

calculaAreaRetangulo(alturaPrompt, larguraPrompt)

// EXERCÍCIO 02

function imprimeIdade() {
    const anoAtual = Number(prompt('Digite o ano atual'))
    const anoPrompt = Number(prompt('Digite o ano de seu nascimento'))

    const idade = anoAtual - anoPrompt
  console.log(idade)

  }  

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
    const imc = peso / (altura * altura)
    console.log(imc)
    return imc
}

const peso = Number(prompt('Digite seu peso'))
const altura = Number(prompt('Digite sua altura')) 

calculaIMC(peso, altura)

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome')
  const idade = prompt('Quantos anos você tem?')
  const email = prompt('Qual seu e-mail?')

  const informacoes = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(informacoes)

}

// EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite mais uma cor favorita')
  const cor3 = prompt('Digite outra cor favorita')

  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  //implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

retornaStringEmMaiuscula()

// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeParaNaoDarPrejuizo = custo / valorIngresso
  return quantidadeParaNaoDarPrejuizo
    
}

calculaIngressosEspetaculo(custo, valorIngresso)

// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho = string1.length === string2.length
  console.log(mesmoTamanho)
  return mesmoTamanho

}

checaStringsMesmoTamanho(string1, string2)

// EXERCÍCIO 09

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento

}

retornaPrimeiroElemento()

// EXERCÍCIO 10

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array [array.length - 1]
  return ultimoElemento

}

retornaUltimoElemento()

Eu pensei em armazenar o array[0] em uma variável,
trocar o array[array.length -1] pelo array[0],
depois o length pela variável  ...

EXERCÍCIO 11
Escreva uma função que recebe um array
e retorna um array com o primeiro e o último elemento trocados.

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
const ultimoElemento = array [array.length - 1]

  return 
}

trocaPrimeiroEUltimo()

// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string1Maiuscula = string1.toUpperCase()
  const string2Maiuscula = string2.toUpperCase()
  const saoIguais = string1Maiuscula === string2Maiuscula
  return saoIguais
}

checaIgualdadeDesconsiderandoCase(string1, string2)

// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui


// }