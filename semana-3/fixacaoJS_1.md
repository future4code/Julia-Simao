```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
 const bonusCem = qtdeCarrosVendidos * 100
 const porcentagem = valorTotalVendas * 0.05
 
const comissao = bonusCem + porcentagem 
const salario = comissao + 2000

return salario

}