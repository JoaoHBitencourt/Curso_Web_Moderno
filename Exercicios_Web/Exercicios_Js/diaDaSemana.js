function verificarDiaDaSemana(numeroDia){
    switch (numeroDia){
      case 1:
        console.log("Domingo - Fim de semana")
        break
      case 2: case 3: case 4: case 5: case 6:
        console.log("Dia útil")
        break
      case 7:
        console.log("Sábado - Fim de semana")
        break
      default:
        console.log("Dia inválido")
        break
    }
  }
  
  verificarDiaDaSemana(1)
  verificarDiaDaSemana(3)
  verificarDiaDaSemana(6)
  verificarDiaDaSemana(8)  