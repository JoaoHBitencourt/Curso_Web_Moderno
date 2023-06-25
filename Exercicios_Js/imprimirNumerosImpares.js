function imprimirNumerosImpares(inicio = 0, fim = 100){
    if (fim < inicio){
      [inicio, fim] = [fim, inicio]
    }

    if (inicio % 2 === 0){
      inicio++
    }

    for (let i = inicio; i <= fim; i += 2){
      console.log(i)
    }
  }

  imprimirNumerosImpares()
  imprimirNumerosImpares(10, 30)
  imprimirNumerosImpares(50)
  imprimirNumerosImpares(100, 50)  