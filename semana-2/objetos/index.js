// ------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*

------- EXERCÍCIO 1


A) Matheus Nachtergaele
   Virginia Cavendis
   canal: Globo, horario: 14h


------- EXERCÍCIO 2

A) nome: Juca
   idade: 3
   raca: SRD

   nome: Juba (Troca apenas o nome)
   idade: 3
   raca: SRD  
   
   nome: Jubo (Troca o nome e as letras)
   idade: 3
   raca: SRD  

B) Os três pontos fazem o espalhamento do objeto, ou seja,
copia as informações de um objeto em outro.


------- EXERCÍCIO 3

A) true
   undefined

B) Apareceu o true pois a informação backender está descrita no objeto,
e undefined para a altura, pois não há valor para essa informação no objeto.
      
   */

// ------- EXERCÍCIOS DE ESCRITA DE CÓDIGO

// ------- EXERCÍCIO 1

const pessoa = {
   nome: 'Fulano',
   apelidos: ['Fu', 'La', 'No']
}      

const pessoa2 = {
   ...pessoa,
   apelidos: ['Fufu', 'Lala', 'Nono']

}

function dadosPessoa(pessoa, pessoa2) {

   console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: 
   ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.
   Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]},
   ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}.`)

}

dadosPessoa(pessoa, pessoa2)

// ------- EXERCÍCIO 2

const objeto1 = { 
   nome: 'José' ,
   idade: 40 ,
   profissão: 'Músico'
}

const objeto2 = { 
   nome: 'Janaina' ,
   idade: 30 ,
   profissão: 'Enfermeira'
}

function funcaoObjetos(objeto1, objeto2) {
   minhaArray = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length, 
   objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissão, objeto2.profissão.length]
   console.log(minhaArray)
   return minhaArray
}

funcaoObjetos(objeto1, objeto2)

// ------- EXERCÍCIO 3

const carrinho = []

const fruta1 = {
   nome: 'morango' ,
   isDisponivel: true
}

const fruta2 = {
   nome: 'manga' ,
   isDisponivel: true
}

const fruta3 = {
   nome: 'caqui' ,
   isDisponivel: true
}

function frutas(fruta){
   carrinho.push(fruta)
   return carrinho

}

console.log(carrinho)

frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

