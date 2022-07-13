const numeros = [1, 80, 8, 56, 2, 45, 13, 11, 4, 90, 0, 43, 7, 9]

console.log('Retorne a soma do dobro de todos os números pares')

const pares = numeros.filter((valor) => {
    return valor % 2 === 0
}).map((valor) => {
    return valor * 2
}).reduce((acumulador, valor) => {
    acumulador = acumulador + valor
    return acumulador
}, 0)

console.log(pares)

