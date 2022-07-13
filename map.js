//map -> retorna o array com os valores alterados, mas o array vai ter o mesmo tamanho
const numeros = [1, 80, 8, 56, 2, 45, 13, 11, 4, 90, 0, 43, 7, 9]
console.log('Dobre os valores')

const numerosDobro = numeros.map((valor) => {
    return valor * 2
})

console.log(numerosDobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
console.log('retorne apenas uma string com o nome da pessoa')
const nomes = pessoas.map ((obj) => {
    return obj.nome
})
console.log(nomes)

console.log('remova apenas a chave nome do objeto')
const idade = pessoas.map ((obj) => {
    /*
    delete obj.nome
    return obj
    */
    return {idade: obj.idade}
})
console.log(idade)

console.log('adicione uma chave id em cada objeto')
const id = pessoas.map ((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice
    return newObj
    /*
    obj.id = (indice + 1)
    return obj 
    */
})
console.log(id)