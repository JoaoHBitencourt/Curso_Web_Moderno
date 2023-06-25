function calcularCedulas(valor){
    let quantidadeNotas100 = 0
    let quantidadeNotas50 = 0
    let quantidadeNotas10 = 0
    let quantidadeNotas5 = 0
    let quantidadeNotas1 = 0
  
    while (valor >= 100){
      valor -= 100
      quantidadeNotas100++
      console.log(`${quantidadeNotas100} nota(s) de R$ 100.`)
    } 
    while (valor >= 50){
      valor -= 50;
      quantidadeNotas50++
      console.log(`${quantidadeNotas50} nota(s) de R$ 50.`)
    } 
    while (valor >= 10){
      valor -= 10
      quantidadeNotas10++
      console.log(`${quantidadeNotas10} nota(s) de R$ 10.`)
    }  
    while (valor >= 5){
      valor -= 5
      quantidadeNotas5++
      console.log(`${quantidadeNotas5} nota(s) de R$ 5.`)
    }

    quantidadeNotas1 = valor
    console.log(`${quantidadeNotas1} nota(s) de R$ 1.`)  
  }

  calcularCedulas(18)  