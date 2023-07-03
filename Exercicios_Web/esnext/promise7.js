function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp') // simulando um erro na function, primeira chamada de tratamento de erro vai lancar ele
            if(Math.random() < chanceDeErro) {
            reject('Ocorreu um erro!')
            }else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`) // se comentado esse tratamento ele cai no .catch 
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))