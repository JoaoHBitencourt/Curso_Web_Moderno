let a = 1
console.log(a)

let p1 = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})
    .then(function(valor) {
        console.log(valor.x)
        console.log(valor.y)
        console.log(Object.keys(valor))
        console.log(Object.values(valor))        
})

//function primeiroElemento(array) {
//    return array[0]
//}

//function primeiraLetra(string) {
//    return string[0]
//}

//function letraMinuscula(letra) {
//    return letra.toLowerCase()
//}

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p2 = new Promise(function(resolve) {
    resolve([ 'Ana', 'Bia', 'Carlos', 'Daniel' ])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)