```function calculaPrecoTotal(quantidade) {
  
  quantidadeMacas = quantidade
  
  if (quantidadeMacas >= 12){
    return quantidadeMacas * 1.00
  } else if (quantidadeMacas < 12)
    return quantidadeMacas * 1.30
} 