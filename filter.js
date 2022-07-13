const numeros = [1, 80, 8, 56, 2, 45, 13, 11, 4, 90, 0, 43, 7, 9]
/*
for (let i in numeros){
    if(numeros[i] < 10){
        console.log(numeros[i])
    }
}
filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos
*/
const numFilt = numeros.filter((valor) => {
    return valor < 10
})
console.log(numFilt)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const filt1 = pessoas.filter ((obj) => {
    if(obj.nome.length >= 5){
        return true
    }
})
console.log('retorne as pessaos que tem o nome com 5 letras ou mais')
console.log(filt1)

const filt2 = pessoas.filter ((obj) => {
    return obj.idade > 50
})
console.log('retorne as pessoas com mais de 50 anos')
console.log(filt2)

const filt3 = pessoas.filter ((obj) => {
    return obj.nome.toLowerCase().endsWith('a')
})
console.log('retorne as pessoas cujo o nome termina com a')
console.log(filt3)