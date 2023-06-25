function verificarCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    if (altura1 === altura2){
      console.log("As crianças têm a mesma altura.")
      return
    }
  
    let anos = 0
  
    while (altura1 <= altura2){
      altura1 += taxaCrescimento1
      altura2 += taxaCrescimento2
      anos++
    }
  
    console.log(`A criança menor ultrapassará a maior em ${anos} anos.`)
  }

  verificarCrescimento(120, 5, 120, 7)
  verificarCrescimento(80, 10, 166, 1)
  