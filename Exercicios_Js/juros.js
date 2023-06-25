function jurosSimples(capital, taxa, tempo){
    return capital + (capital * taxa * tempo)
}

function jurosComposto(capital, taxa, tempo){
    return capital * Math.pow((1 + taxa), tempo)
}

console.log("Juros Simples: " + jurosSimples(100, 0.1, 2).toFixed(2))
console.log("Juros Composto: " + jurosComposto(100, 0.1, 4).toFixed(2))
console.log("Juros Composto: " + jurosComposto(121, 0.1, 2).toFixed(2))
console.log("Juros Composto: " + jurosComposto(5000, 0.01, 6).toFixed(2))