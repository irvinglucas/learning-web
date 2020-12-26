//templates in strings

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá ${nome}!`

console.log(concatenacao, template)

//expressions

//concatenating string with math expressions
console.log(`1 + 1 = ${1+1}`)

//arrow function
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)