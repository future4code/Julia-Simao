//------------------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS 

/*----------- EXERCICIO 1 

A) O código recebe um número do usuário e realiza a operação. Se o resultado
dessa operação tiver como resultado um número com resto 0, será impresso no
console a mensagem declarada no if. Caso contrário, será impressa a mensagem do
else.

B) Números pares.

C) Números ímpares. 

//----------- EXERCICIO 2

A) Revelar o preço da fruta escolhida pelo usuário.

B) O preço da fruta Maçã é R$2.25

C) O preço da fruta Pêra é R$5.5

//----------- EXERCICIO 3

A) Pedindo para o usuário enviar um dado, transformando automaticamente em
número.

B) Para o número 10 a mensagem será "Esse número passou no teste", nada será
impresso se o número for -10, pois ele não atende o requisito de ser maior que
0.

C) O console.log(mensagem) não será capaz de ler a mensagem que foi escrita
dentro do escopo do if. Apenas se tivesse um return, tornando a mensagem
acessível de qualquer parte do código, aparecendo no console como uma mensagem
não definida.

*/

//------------------ EXERCÍCIOS DE ESCRITA DE CÓDIGOS 

//----------- EXERCICIO 1 

// Faça um programa que pergunta ao usuário qual a idade dele e imprima no
// console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo Number, você deve usar o cast para
// number para isso. 
// c) Agora veja se essa idade do usuário corresponde à idade
// mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir",
// caso contrário, imprima "Você não pode dirigir."

// const idadeUsuario = Number(prompt('Quantos anos você tem?'))

// if(idadeUsuario >= 18) {
//     console.log('Você pode dirigir')
// } else {
//     console.log('Você não pode dirigir.')
// }

//----------- EXERCICIO 2

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça
// para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no
// console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco
// if/else

// const turnoQueEstuda = prompt('Em qual turno você estuda? (M para matutino, V para vespertino e N para Noturno')
// .toLowerCase()

// if (turnoQueEstuda === 'm') {
//     console.log('Bom Dia!')
// } else if (turnoQueEstuda === 'v') {
//     console.log('Boa Tarde!')
// } else if (turnoQueEstuda === 'n') {
//     console.log('Boa noite!')
// }

//----------- EXERCICIO 3

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turnoQueEstuda = prompt('Em qual turno você estuda? (M para matutino, V para vespertino e N para Noturno')
// // .toLowerCase()

// switch(turnoQueEstuda) {
//     case 'm':
//         console.log('Bom Dia!')
//         break
//     case 'v':
//         console.log('Boa Tarde!')
//         break
//     case 'n':
//         console.log('Boa Noite!')
// }

//----------- EXERCICIO 4

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela
// só assistirá a um filme com você se ele for do gênero fantasia e se o
// ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
// o gênero de filme que vão assistir e outra pergunta sobre o preço do
// ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário,
// imprima "Escolha outro filme :("


// const vaoAssistirOFilme = (genero, valor) => {
//     if(genero === 'fantasia' && valor <= 15){
//         console.log('Bom filme!')
//     } else {
//         console.log('Escolha outro filme :(')
//     }
// }

// const qualGeneroAssistirUsuario = prompt('Qual gênero vocês desejam assistir?')
// const qualValorUsuario = prompt('Qual o valor do ingresso?')

// vaoAssistirOFilme(qualGeneroAssistirUsuario, qualValorUsuario)

//----------- DESAFIO 1

// const vaoAssistirOFilme = (genero, valor) => {
//     if(genero === 'fantasia' && valor <= 15){
//         console.log('Bom filme!')
//     } 
// }

// const qualGeneroAssistirUsuario = prompt('Qual gênero vocês desejam assistir?')
// const qualValorUsuario = prompt('Qual o valor do ingresso?')
// const qualSnackUsuario = prompt(' Qual snack que você quer comprar?')

// vaoAssistirOFilme(qualGeneroAssistirUsuario, qualValorUsuario)

// console.log(`Aproveite o seu ${qualSnackUsuario}`)

//----------- DESAFIO 2

// Você foi contratado para criar um sistema de vendas de ingressos de jogos de
// um estádio de futebol. Para esta compra, o usuário deve fornecer algumas
// informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e
//   FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
//   O seu sistema deve solicitar estas informações ao
//   usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto
//   com o valor de cada ingresso e o valor total que o usuário tem que pagar
//   (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
//   Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução
//   do programa. Lembrando que o valor de jogos internacionais é o mesmo de
//   jogos domésticos, mas seus preços devem ser multiplicados pelo valor do
//   dólar (considerar o dólar = R$4,10)



// let nome = prompt('Nome completo')
// let tipo = prompt('Qual o tipo de jogo? IN (Internacional) ou DO (Doméstico)')
// let etapa = prompt('Qual a etapa do jogo? SF (semi-final), DT (decisão 3º lugar) ou FI (final)')
// let categoria = Number(prompt('Qual a categoria? Escolha entre 1 a 4.'))
// let quantidade = Number(prompt('Qual a quantidade de ingressos?'))
// let valorDoIngresso ;


//     switch(etapa) {

//         case "SF":
//         etapa = 'Semi-Final' ;
//             if(categoria === 1) valorDoIngresso = 1320;
//             else if(categoria === 2) valorDoIngresso = 880;
//             else if(categoria === 3) valorDoIngresso = 550;
//             else if(categoria === 4) valorDoIngresso = 220;
//         break

//         case "DT":
//         etapa = 'Disputa pelo 3º lugar';
//             if(categoria === 1) valorDoIngresso = 660;
//             else if(categoria === 2) valorDoIngresso = 440;
//             else if(categoria === 3) valorDoIngresso = 330;
//             else if(categoria === 4) valorDoIngresso = 170;
//         break

//         case "FI":
//         etapa = "Final";
//             if(categoria === 1) valorDoIngresso = 1980;
//             else if(categoria === 2) valorDoIngresso = 1320;
//             else if(categoria === 3) valorDoIngresso = 880;
//             else if(categoria === 4) valorDoIngresso = 330;
//         break
// }

//     if(tipo === 'IN') {
//     valorDoIngresso*= 4,10;
//     tipo = 'Internacional'
// } else if(tipo === 'DO') {
//     tipo = 'Doméstico'
// }

// valorTotal = valorDoIngresso * quantidade

// console.log(`-----Dados da compra------
// Nome do cliente: ${nome}
// Tipo do Jogo: ${tipo}
// Etapa do Jogo: ${etapa}
// Categoria: ${categoria}
// Quantidade de Ingressos: ${quantidade}
// ---Valores---
// Valor do Ingresso: R$${valorDoIngresso}
// Valor total: R$${valorTotal}`)



