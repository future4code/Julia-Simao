/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// PROJETO 

console.log('Boas vindas ao jogo de Blackjack!')

let resposta = confirm('Quer iniciar uma nova rodada?')

if (resposta === true){

   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   const somaUser = cartaUsuario1.valor + cartaUsuario2.valor
   const somaComp = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${somaUser}`)
   console.log(`Usuário - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} ${somaComp}`)

   if (somaUser > somaComp) {
      console.log('O usuário ganhou!')
   } else if (somaComp > somaUser) {
      console.log('O computador ganhou!')
   } else if (somaComp === somaUser) {
      console.log('Empate!')
   }

} else if (resposta === false){
   console.log('O jogo acabou.')
}
