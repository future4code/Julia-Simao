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

    let resposta = confirm("Bem-vinde ao jogo de Blackjack!" +
    "\n"+ 
    "Quer iniciar uma nova rodada?")

    if (resposta === true) {

      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
      let cartaComp1 = comprarCarta()

      let fase1 = confirm(`Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComp1.texto}.
      Deseja comprar mais uma carta?`)
   }