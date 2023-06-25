function calcularFatorial(numero){
    if (numero === 0 || numero === 1){
      return 1
    } else {
      let fatorial = 1
      for (let i = 2; i <= numero; i++){
        fatorial *= i
      }
      return fatorial
    }
  }

  console.log(calcularFatorial(5))
  console.log(calcularFatorial(0))
  console.log(calcularFatorial(10))  