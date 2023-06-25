function atribuirConceitos(notas){
    const conceitos = []

    for (let i = 0; i < notas.length; i++){
      const nota = notas[i]

      if (nota >= 0 && nota <= 4.9){
        conceitos.push("D")
      } else if (nota >= 5 && nota <= 6.9){
        conceitos.push("C")
      } else if (nota >= 7 && nota <= 8.9){
        conceitos.push("B")
      } else if (nota >= 9 && nota <= 10.0){
        conceitos.push("A")
      } else{
        conceitos.push("Nota inválida")
      }
    }

    for (let i = 0; i < notas.length; i++){
      console.log(`Nota: ${notas[i]} - Conceito: ${conceitos[i]}`)
    }
  }

  const notas = [8.5, 6.5, 9.8, 4.3, 10.0, 11.2]
  atribuirConceitos(notas)
  