function calcularValorAnuidade(mes, valorAnuidade){
    if (mes === 1){
      return valorAnuidade.toFixed(2)
    }
  
    let juros = Math.pow(1 + 0.05, mes - 1)
    let valorTotal = valorAnuidade * juros
  
    return valorTotal.toFixed(2)
  }

  console.log(calcularValorAnuidade(1, 100))
  console.log(calcularValorAnuidade(6, 100))
  console.log(calcularValorAnuidade(12, 100))  