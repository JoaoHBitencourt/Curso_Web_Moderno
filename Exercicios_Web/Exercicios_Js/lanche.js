function calcularValorLanche(codigo, quantidade){
    let preco  
    switch (codigo){
      case 100:
        preco = 3.00
        break
      case 200:
        preco = 4.00
        break
      case 300:
        preco = 5.50
        break
      case 400:
        preco = 7.50
        break
      case 500:
        preco = 3.50
        break
      case 600:
        preco = 2.80
        break
      default:
        console.log("Produto não existente.")
        return
    } 
    const valorTotal = preco * quantidade
    console.log(`Valor a ser pago: R$${valorTotal.toFixed(2)}`)
  }

  calcularValorLanche(100, 2)
  calcularValorLanche(300, 3)
  calcularValorLanche(400, 1)
  calcularValorLanche(700, 1)  