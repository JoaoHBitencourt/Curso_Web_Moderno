function arredondarNota(nota){
    if (nota < 38) {
        return nota
    }
  
    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5
  
    if (proximoMultiploDe5 - nota < 3){
      return proximoMultiploDe5;
    }
    return nota
  }
  
  const notas = [84, 29, 38, 67, 73]
  const notasArredondadas = notas.map(arredondarNota)
  console.log(notasArredondadas)  