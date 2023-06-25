function calcularValorPlanoSaude(idade){
    let valorBase = 100  
    if (idade < 10){
      valorBase += 80
    } else if (idade >= 10 && idade <= 30){
      valorBase += 50
    } else if (idade > 30 && idade <= 60){
      valorBase += 95
    } else if (idade > 60){
      valorBase += 130
    }  
    console.log(`Valor a ser pago: R$${valorBase.toFixed(2)}`)
  }

  calcularValorPlanoSaude(8)
  calcularValorPlanoSaude(27)
  calcularValorPlanoSaude(55)
  calcularValorPlanoSaude(88)  