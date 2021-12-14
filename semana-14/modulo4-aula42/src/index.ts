// EXERCÍCO 1

// a)

// let minhaString: string = "Sou uma string"
// minhaString = 5

// Aparecerá o erro 'Type number is not assignable to type string.'

// b)

// Utilizando o any
// let variavel: any = 3
// variavel = "string"

// c) 
// type Person = {
//     nome: string
//     idade: string
//     corFavorita: string
// }

// enum CoresArcoiris {
//     AZUL = 'Azul',
//     VERMELHO = 'Vermelho',
//     LARANJA = 'Laranja',
//     AMARELO = 'Amarelo',
//     VERDE = 'Verde',
//     ROXO = 'Roxo',
//     VIOLETA = 'Violeta'
// }

// const pessoa1: Person = {
//     nome: 'AstroDev',
//     idade: '500',
//     corFavorita: CoresArcoiris.AMARELO
// }

// const pessoa2: Person = {
//     nome: 'Labebot',
//     idade: '5',
//     corFavorita: CoresArcoiris.ROXO
// }

// const pessoa3: Person = {
//     nome: 'Gitinho',
//     idade: '15',
//     corFavorita: CoresArcoiris.VIOLETA
// }

// -----------------------------------

// EXERCÍCIO 2

// const arrayNumeros: number[] = [1, 2, 38, 45, 67, 14, 50, 21]

// type Estatisticas = {
//     maior: number,
//     menor: number,
//     media: number
// }

// function obterEstatisticas(numeros: number[]) : Estatisticas {

//     const numerosOrdenados: any = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// obterEstatisticas(arrayNumeros)

// a) Entrada: um array de números. Saída: estatísticas numéricas
// b) numerosOrdenados, soma.

// -----------------------------------

// EXERCÍCIO 3

// type post = [
//     {
//         autor: any,
//         texto: string
//     },
//     {
//         autor: any,
//         texto: string
//     },
//     {
//         autor: any,
//         texto: string
//     },
//     {
//         autor: any,
//         texto: string
//     },
//     {
//         autor: any,
//         texto: string
//     }
// ]

// const posts: post = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

// function buscarPostsPorAutor(posts: any[], autorInformado: string) {
//     return posts.filter(
//       (post) => {
//         console.log(post.autor === autorInformado)
//         return post.autor === autorInformado
//       }
//     )
//   }

//   buscarPostsPorAutor(posts, "Alvo Dumbledore")

// b) entrada: posts e o nome do autor. A saída será um booleano
// indicando qual é o post do autor indicado.

// -----------------------------------

// EXERCÍCIO 4

// a) Utilizando o npx tsc exercicio-4.ts o arquivo exercicio-4.js é criado na pasta.
// b) Quando o arquivo está na pasta src, ao fazer o npx tsc o arquivo js é criado na pasta build. 
// c) Os arquivos foram criados na pasta src.
// d) A versão target oferecida pelos slides é mais recente (es6);
// A pasta outDir não está definida como ./build na versão criada de fábrica;
// Assim como a pasta rootDir não está definida como ./src;

// -----------------------------------

// (DESAFIOS)

// EXERCÍCIO 5

// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

// type Operacoes = {
//     sum: number,
//     sub: number,
//     mult: number,
//     maior: any
// }

// const recebeNumeros = (num1: number, num2: number)  => {

//     let maior: number = num1

//     if(num1 > num2) {
//         maior = num1 } 
//     if (num2 > num1) {
//         maior = num2
//     }

//     const operacoes: Operacoes = {
//         sum: num1 + num2,
//         sub: num1 - num2,
//         mult: num1 * num2,
//         maior
//     }

//         console.log(operacoes)
//     }

// recebeNumeros(23, 41)

// -----------------------------------
