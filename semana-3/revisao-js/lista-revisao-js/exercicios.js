// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanho = array.length
   return tamanho
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  const inverte = array.reverse()
  return inverte
}

// EXERCÍCIO 03

function compararNumeros (a, b) {
    return a - b
}

function retornaArrayOrdenado(array) {
  const ordenada = array.sort(compararNumeros)
  return ordenada
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = array.filter(numero => numero % 2 === 0)
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    arrayPares = array.filter(numero => numero % 2 === 0)

    for(let i = 0; Math.pow(arrayPares[i], 2); i++){
        arrayPares[i] = arrayPares[i] ** 2
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maior = Math.max(...array)
    return maior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)

    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero - menorNumero

    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let primeirosPares = []

    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 == 0) {
        primeirosPares.push(i)

        }
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoB=== ladoC){
     return "Equilátero"

    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return "Isósceles"

    } else {
    return "Escaleno"
    }

}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {

    const novaArray = retornaArrayOrdenado(array)
    let menor = [1]
    let maior = array.length - 2

    return [
        novaArray[maior], novaArray[menor]
     ]
  }


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   const fichaTecnica = {
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

}

    return `Venha assistir ao filme ${fichaTecnica.nome}, de ${fichaTecnica.ano}, dirigido por ${fichaTecnica.diretor} e estrelado por ${fichaTecnica.atores[0]}, ${fichaTecnica.atores[1]}, ${fichaTecnica.atores[2]}, ${fichaTecnica.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
    const pessoa1 = {
        ... pessoa,
        nome: 'ANÔNIMO'
    }
    return pessoa1
}

// 13

const verificaQuemPode = pessoas => (
    
    pessoas.altura > 1.5 &&
    pessoas.idade > 14 &&
    pessoas.idade < 60
 
)

// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(verificaQuemPode)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
    return pessoas.filter(pessoas => !verificaQuemPode(pessoas)) // ! troca declaração
    }
    

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {



}

// EXERCÍCIO 15A

function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}