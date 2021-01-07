//Null e Undefined no JavaScript - conceitos

//Null
//essa constante armazena o endereço do objeto
const a = {name: 'Teste'}
//recebe o endereço do objeto apontado por 'a', atribuição por referencia
const b = a
//modifica o objeto
b.name = 'Opa'
//imprime o objeto modificado
console.log(a)

let c = 3

let d = c

d++ 

console.log(c)
console.log(d)

// atribuição por valor acontece com tipos primitivos
// com objetos, a atribuição funciona por referencia, então se dois objetos são 'iguais', na vdd eles
// são o mesmo objeto na memória apontado por 2 identificadores diferentes.

//Undefined
let valor
console.log(valor)    //retorna undefined
//console.log(valor2) //dá erro, não existe o identificador

valor = null //ausencia de valor
//console.log(valor.toString()) //vai dar erro
//usar o null para zerar a variável

const produto = {}

console.log(produto.preco) //retorna undefined

//console.log(produto.preco.a) // erro, não acessa algo que vem de undefined

produto.preco = 3.50
console.log(produto)

//produto.preco = undefined //evitar atribuir undefined, deixar a linguagem fazer quando necessário
produto.preco = null
console.log(!!produto.preco) //verificar se o valor é válido, retorna boolean
console.log(produto)