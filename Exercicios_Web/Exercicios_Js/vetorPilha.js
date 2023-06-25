let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]

console.log(`Vetor Pilha antes da adição: [${vetorPilha}]`)
console.log(`Vetor Adiciona: [${vetorAdiciona}]`)

for (let i = 0; i < vetorAdiciona.length; i++){
  vetorPilha.push(vetorAdiciona[i])
}

console.log(`Vetor Pilha após a adição: [${vetorPilha}]`)