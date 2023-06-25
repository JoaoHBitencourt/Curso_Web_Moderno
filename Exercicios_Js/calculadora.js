function calculadora(numero1, operacao, numero2){
    let resultado 
    switch (operacao){
      case "+":
        resultado = numero1 + numero2
        break
      case "-":
        resultado = numero1 - numero2
        break
      case "*":
        resultado = numero1 * numero2
        break
      case "/":
        resultado = numero1 / numero2
        break
      default:
        console.log("Operação inválida")
        return
    } 
    console.log("O resultado da operação é:", resultado)
  }

  calculadora(4, "+", 7)
  calculadora(5, "*", 3)
  calculadora(105, "/", 2)
  calculadora(10, "%", 3)  