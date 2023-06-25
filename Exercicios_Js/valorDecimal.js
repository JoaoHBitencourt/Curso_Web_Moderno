function ValorDecimal(valorEmReais){
    valorEmReais = `R$ ${valorEmReais.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

ValorDecimal(0.1 + 0.2)