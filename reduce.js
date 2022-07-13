// reduce -> reduz o array em um unico elemento 
const numeros = [1, 80, 8, 56, 2, 45, 13, 11, 4, 90, 0, 43, 7, 9]
console.log('Some todos os números')
const totalSoma = numeros.reduce ((acumulador, valor, indice, array) => {
    acumulador = acumulador + valor
    return acumulador
}, 0)
console.log(totalSoma)

console.log('Retorne um array com os valores pares')
const pares = numeros.reduce ((acumulador, valor) => {
    if(valor % 2 === 0){
        acumulador.push(valor)
    }
    return acumulador
}, [])
console.log(pares)

console.log('Retorno um array com o dobro do valores')
const dobro = numeros.reduce ((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobro)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
console.log('Retorne a pessoa mais velha')
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade){
        return acumulador
    }
    return valor
})
console.log(maisVelha)