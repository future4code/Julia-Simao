//--------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

/*

----EXERCÍCIO 01----

[ nome: "Amanda Rangel", apelido: "Mandi" ] 0 e a array completa.
[ nome: "Laís Petra", apelido: Laura ] 1 e a array completa.
[ nome: "Letícia Chijo", apelido: "Chijo" ] 2 e a array completa.

----EXERCÍCIO 02----

["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

----EXERCÍCIO 03----

[ nome: "Amanda Rangel", apelido: "Mandi" ] 
[ nome: "Laís Petra", apelido: Laura ]

*/

//--------EXERCÍCIOS DE ESCRITA DE CÓDIGOS

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesDoguinhos = pets.map(pets => pets.nome)

 console.log(nomesDoguinhos)

 const doguinhosSalsicha = pets.filter(pets => pets.raca === 'Salsicha')

 console.log(doguinhosSalsicha)

const doguinhosPoodle = pets.filter(pets => pets.raca === 'Poodle')
const nomesPoodle = doguinhosPoodle.map(pets => pets.nome)

console.log(`Você ganhou um cupom de 10% para tosar o/a ${nomesPoodle[0]}`)
console.log(`Você ganhou um cupom de 10% para tosar o/a ${nomesPoodle[1]}`)


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A)
const nomeProdutos = produtos.map(produtos => produtos.nome)
console.log(nomeProdutos)

// B)

const comDesconto = produtos.map((produtos) => {
    nome = produtos.nome
    preco = (produtos.preco * 0.95).toFixed(2)
    return {nome, preco}
})

console.log(comDesconto)

// C)

const apenasBebidas = produtos.filter((produtos) => {
    return produtos.categoria === "Bebidas"
})


console.log(apenasBebidas)

// D)

const apenasYpe = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê")
 })
 
 console.log(apenasYpe)

// E)

const compreYpe = produtos
.filter((produtos => 
    produtos.nome.includes("Ypê")))

.map((produtos => {
    valor = produtos.preco.toFixed(2)
    return `Compre ${produtos.nome} por R$${valor}`
})
)
console.log(compreYpe)