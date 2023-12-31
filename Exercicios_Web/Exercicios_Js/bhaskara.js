function bhaskara(ax2, bx, c){
    let resultados = []
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)

    if (delta < 0) {
        return "Delta é negativo";
    }

    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2

    resultados.push(x1)
    resultados.push(x2)
    
    return resultados
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, 3, 2))