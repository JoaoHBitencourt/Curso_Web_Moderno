function calcularNovoSalario(plano, salarioAtual){
    let novoSalario
    switch (plano){
      case "A":
        novoSalario = salarioAtual * 1.1
        break
      case "B":
        novoSalario = salarioAtual * 1.15
        break
      case "C":
        novoSalario = salarioAtual * 1.2
        break
      default:
        console.log("Plano inválido")
        return
    } 
    console.log(`Novo salário: R$${novoSalario.toFixed(2)}`)
  }

  calcularNovoSalario("A", 2000)
  calcularNovoSalario("B", 3000)
  calcularNovoSalario("C", 2500)
  calcularNovoSalario("D", 3500)  