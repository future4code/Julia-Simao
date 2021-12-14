// EXERCÍCIO 1

// a) Utilizando o process.argv

// b) 
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) 
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`)