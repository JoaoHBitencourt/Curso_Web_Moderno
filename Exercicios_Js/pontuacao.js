 const pontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function analisarPontuacoes(pontuacoes){
    pontuacoes = pontuacoes.split(", ")
    pontuacoes = pontuacoes.map(Number)
  
    let melhorPontuacao = pontuacoes[0]
    let piorJogo = 0
    let numRecordes = 0
  
    for (let i = 1; i < pontuacoes.length; i++){
      if (pontuacoes[i] > melhorPontuacao) {
        melhorPontuacao = pontuacoes[i]
        numRecordes++
      } else if (pontuacoes[i] < pontuacoes[piorJogo]){
        piorJogo = i
      }
    } 
    return [numRecordes, piorJogo + 1]
  }
  
  const resultado = analisarPontuacoes(pontuacoes)
  console.log(resultado)